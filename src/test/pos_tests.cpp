#include "base58.h"
#include "chainparams.h"
#include "main.h"
#include "miner.h"
#include "pos.h"
#include "test/test_bitcoin.h"
#include "wallet/wallet.h"

#include <boost/test/unit_test.hpp>

BOOST_FIXTURE_TEST_SUITE(pos_tests, BasicTestingSetup)

BOOST_AUTO_TEST_CASE(compute_stake_modifier_test)
{
    uint256 bnPrevStakeModifier, bnKernel, expected_modifier;
    bnPrevStakeModifier.SetHex("26b61c96f1fb6e5b4d5ec1ef0c9c22fc0ff3e5d673861d530c488bbd23f8df41");
    bnKernel.SetHex("918add2966e0ced6a4f3fba3ec4cbac2f950b0f9ac1f87fc6479870bedf252ee");
    expected_modifier.SetHex("77398ab52d1b3375cab9a16be3b87ee15b91769a3f6a2a442d1ac02da5e55974");

    CBlockIndex indexPrev;
    indexPrev.bnStakeModifierV2 = bnPrevStakeModifier;

    BOOST_CHECK(ComputeStakeModifierV2(nullptr, bnKernel) == uint256());
    BOOST_CHECK(ComputeStakeModifierV2(&indexPrev, bnKernel) == expected_modifier);
}

BOOST_AUTO_TEST_CASE(block_sig_test)
{
    CKey key;
    key.MakeNewKey(false);

    CBlock block;
    block.nTime = 1503931204;

    CScript scriptEmpty;
    scriptEmpty.clear();
    CScript scriptPubKeyOut = CScript() << key.GetPubKey().getvch() << OP_CHECKSIG;

    CMutableTransaction mcoinbase;
    mcoinbase.vin.push_back(CTxIn(COutPoint(), CScript() << 150 << OP_0, 1));
    mcoinbase.vout.push_back(CTxOut(0, scriptEmpty));

    CMutableTransaction mcoinstake;
    mcoinstake.vin.push_back(CTxIn(uint256(), 1));
    mcoinstake.vout.push_back(CTxOut(0, scriptEmpty));
    mcoinstake.vout.push_back(CTxOut(100, scriptPubKeyOut));

    block.vtx.push_back(CTransaction(mcoinbase));
    block.vtx.push_back(CTransaction(mcoinstake));

    BOOST_CHECK(CTransaction(mcoinstake).IsCoinStake());

    CValidationState state;
    BOOST_CHECK(!CheckBlock(block, state, Params().GetConsensus(), false, false, true));

    state = CValidationState();
    BOOST_CHECK(key.Sign(block.GetHash(), block.vchBlockSig));
    BOOST_CHECK(CheckBlock(block, state, Params().GetConsensus(), false, false, true));
}

BOOST_AUTO_TEST_CASE(pos_hash_test)
{
    uint32_t nBits = 520159231; // Params().GenesisBlock().nBits
    uint32_t nTime = 1503932204;

    CBlockIndex indexPrev; // Previous block in chain
    indexPrev.nTime = nTime - 1000;

    CBlockHeader blockFrom; // Block with stake tx
    blockFrom.nTime = nTime - 4000;

    CMutableTransaction mtx_stake;
    mtx_stake.vout.push_back(CTxOut(100 * COIN, CScript()));

    COutPoint prevout(mtx_stake.GetHash(), 0);

    uint256 hash, target;
    BOOST_CHECK(CheckStakeKernelHash(&indexPrev, nBits, blockFrom, 0, mtx_stake, prevout, nTime, hash, target, false));

    // Low stake
    CMutableTransaction low_stake = mtx_stake;
    low_stake.vout[0].nValue = 1;
    BOOST_CHECK(!CheckStakeKernelHash(&indexPrev, nBits, blockFrom, 0, low_stake, prevout, nTime, hash, target, false));

    // Time violation
    BOOST_CHECK(!CheckStakeKernelHash(&indexPrev, nBits, blockFrom, 0, mtx_stake, prevout, nTime - 10000, hash, target, false));
}

void AddBlockToChain(CBlock& block, const CChainParams& chainparams) {
    uint32_t extraNonce = 0;
    IncrementExtraNonce(&block, chainActive.Tip(), extraNonce);
    while (!CheckProofOfWork(block.GetHash(), block.nBits, chainparams.GetConsensus())) ++block.nNonce;

    CValidationState state;
    ProcessNewBlock(state, chainparams, nullptr, &block, true, nullptr);
}

BOOST_FIXTURE_TEST_CASE(coin_age_test, TestingSetup)
{
    const CChainParams& chainparams = Params();
    uint32_t nTime = 1503932204; // Stake time. Time of GetCoinAge check.

    BlockAssembler blockAssembler(chainparams);
    CBlockTemplate* pblocktemplate;
    uint64_t coin_age;

    CKey key;
    key.MakeNewKey(false);
    CScript scriptPubKey = CScript() << ToByteVector(key.GetPubKey()) << OP_CHECKSIG;

    // Block with txPrev (coinbase)
    pblocktemplate = blockAssembler.CreateNewBlock(scriptPubKey);
    pblocktemplate->block.nTime = nTime - 3000;
    AddBlockToChain(pblocktemplate->block, chainparams);
    CTransaction txPrev(pblocktemplate->block.vtx[0]);
    delete pblocktemplate;

    // Block with tx without txPrev
    pblocktemplate = blockAssembler.CreateNewBlock(scriptPubKey);
    pblocktemplate->block.nTime = nTime - 4000;
    CMutableTransaction tx_woprev(pblocktemplate->block.vtx[0]);
    tx_woprev.vin[0].prevout = COutPoint(uint256(), 0);
    tx_woprev.vout[0].nValue = 1000 * COIN;
    AddBlockToChain(pblocktemplate->block, chainparams);
    delete pblocktemplate;

    // Block with correct tx
    pblocktemplate = blockAssembler.CreateNewBlock(scriptPubKey);
    pblocktemplate->block.nTime = nTime - 2000;
    CMutableTransaction tx(pblocktemplate->block.vtx[0]);
    tx.vin[0].prevout = COutPoint(txPrev.GetHash(), 0);
    tx.vout[0].nValue = txPrev.vout[0].nValue;
    AddBlockToChain(pblocktemplate->block, chainparams);
    delete pblocktemplate;
    
    // Some previous block in chain
    CBlockIndex indexPrev;
    indexPrev.nHeight = chainActive.Height() + 1;
    indexPrev.nTime = nTime - 1000;

    // Tx is coinbase
    GetCoinAge(txPrev, nTime, *pblocktree, &indexPrev, coin_age);
    BOOST_CHECK_EQUAL(coin_age, 0);

    // Tx without txPrev
    GetCoinAge(tx_woprev, nTime, *pblocktree, &indexPrev, coin_age);
    BOOST_CHECK_EQUAL(coin_age, 0);

    // Min depth check
    indexPrev.pprev = chainActive.Tip();
    GetCoinAge(tx_woprev, nTime, *pblocktree, &indexPrev, coin_age);
    BOOST_CHECK_EQUAL(coin_age, 0);
    indexPrev.pprev = nullptr;

    // Min age check
    indexPrev.nTime = nTime - 10;
    GetCoinAge(tx, nTime, *pblocktree, &indexPrev, coin_age);
    BOOST_CHECK_EQUAL(coin_age, 517);
    indexPrev.nTime = nTime - 1000;

    // valueIn = 49900 * COIN
    // stakeTime = nTime & ~STAKE_TIMESTAMP_MASK = 1503932192
    // prevBlockTime = nTime - 1000 = 1503931204
    // centPerSecond = valueIn * (stakeTime - prevBlockTime) / CENT
    //               = 49900 * 100 * (1503932192 - 1503931204)
    //               = 4990000 * 988 = 4930120000
    // coinDay = centPerSecond * CENT / COIN / (24 * 60 * 60)
    //         = 4930120000 * 0.01 / 86400
    //         = 570
    GetCoinAge(tx, nTime, *pblocktree, &indexPrev, coin_age);
    BOOST_CHECK_EQUAL(coin_age, 517);
}
BOOST_FIXTURE_TEST_CASE(gen_pos_block_test, TestChain100Setup)
{
    const CChainParams& chainparams = Params();
    CScript scriptPubKey = CScript() << ToByteVector(coinbaseKey.GetPubKey()) << OP_CHECKSIG;

    CWallet wallet;
    wallet.LoadKey(coinbaseKey, coinbaseKey.GetPubKey());

//     Generate all other pow blocks
    for (int i = chainActive.Height(); i < chainparams.LastPOWBlock(); i++) {
        std::vector<CMutableTransaction> noTxns;
        CreateAndProcessBlock(noTxns, scriptPubKey);
    }

    // Update wallet balance
    wallet.ScanForWalletTransactions(chainActive[0], false);
    BOOST_REQUIRE(wallet.GetBalance() > 0);

    BOOST_CHECK(chainActive.Tip()->IsProofOfWork());
    BOOST_CHECK(!chainActive.Tip()->IsProofOfStake());

    // Generate 5 PoS blocks
    for (int i = 0; i < 5; i++) {
        int64_t nFees;
        std::unique_ptr<CBlockTemplate> pblocktemplate(BlockAssembler(chainparams).CreateNewBlock(scriptPubKey, true, &nFees));
        CBlock& block = pblocktemplate->block;
        block.nTime = chainActive.Tip()->nTime + 1;
    
        BOOST_CHECK(!block.IsProofOfStake());
    
        // Trying to sign a block
        while (!SignBlock(block, wallet, nFees)) {
            block.nTime += 1;
        }
    
        BOOST_CHECK(block.IsProofOfStake());
        BOOST_CHECK(CheckStake(&block, wallet));
        BOOST_CHECK(chainActive.Tip()->IsProofOfStake());

        // Update used stakes
        wallet.ScanForWalletTransactions(chainActive[0], true);
    }
}

BOOST_AUTO_TEST_SUITE_END()
