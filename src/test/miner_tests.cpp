// Copyright (c) 2011-2015 The The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include "chainparams.h"
#include "coins.h"
#include "consensus/consensus.h"
#include "consensus/merkle.h"
#include "consensus/validation.h"
#include "main.h"
#include "miner.h"
#include "pubkey.h"
#include "script/standard.h"
#include "txmempool.h"
#include "uint256.h"
#include "util.h"
#include "utilstrencodings.h"

#include "test/test_bitcoin.h"

#include <boost/test/unit_test.hpp>

BOOST_FIXTURE_TEST_SUITE(miner_tests, TestingSetup)



static
struct {
    unsigned int extranonce;
    unsigned int nonce;
} blockinfo[] = {
    {4, 0x00008294 }, {2, 0x000874bd }, {1, 0x0007f4a3 }, {1, 0x00127df6 },
    {2, 0x0007a6bd }, {2, 0x000a5861 }, {1, 0x00120219 }, {2, 0x000ec966 },
    {2, 0x000d8967 }, {1, 0x000f3e44 }, {1, 0x000f9c30 }, {2, 0x00131ea9 },
    {2, 0x00100aa7 }, {1, 0x00139bbe }, {2, 0x001306cf }, {2, 0x0015bf22 },
    {1, 0x001676bb }, {2, 0x00167693 }, {1, 0x0018f6e6 }, {1, 0x001f61da },
    {3, 0x001c12fa }, {2, 0x001bee02 }, {2, 0x001f4c2c }, {1, 0x00248c16 },
    {2, 0x001f858b }, {1, 0x0021d19a }, {2, 0x00240ada }, {2, 0x00255c85 },
    {2, 0x002b9791 }, {2, 0x00280398 }, {2, 0x00297c93 }, {2, 0x002c7cf6 },
    {1, 0x00297660 }, {2, 0x002c78be }, {2, 0x0033bc31 }, {1, 0x0030331d },
    {2, 0x003019b6 }, {1, 0x0033a27f }, {2, 0x00340ae1 }, {1, 0x0032f66e },
    {1, 0x0036198f }, {3, 0x00331b1d }, {2, 0x003968f9 }, {5, 0x0039fe01 },
    {1, 0x003aa5c6 }, {5, 0x003ad04e }, {1, 0x003d4f0b }, {1, 0x00424ec4 },
    {1, 0x003f4631 }, {2, 0x003d0a32 }, {1, 0x004130b9 }, {1, 0x003fced0 },
    {1, 0x0045e96c }, {1, 0x00470d1d }, {5, 0x004316d9 }, {5, 0x0042b4fd },
    {1, 0x00452837 }, {1, 0x00461f3f }, {6, 0x0046fd3e }, {2, 0x00478f92 },
    {2, 0x004c69f6 }, {1, 0x004dda84 }, {1, 0x0052db6a }, {1, 0x00540474 },
    {2, 0x005beb4c }, {2, 0x0059e58e }, {1, 0x005f4153 }, {1, 0x0065cf79 },
    {1, 0x0064d8eb }, {5, 0x00642f79 }, {5, 0x006c2da7 }, {1, 0x006e1981 },
    {1, 0x0078ddf9 }, {2, 0x0076a5e1 }, {2, 0x00736fc1 }, {1, 0x007816b8 },
    {2, 0x0077756c }, {1, 0x008068cc }, {2, 0x008212fb }, {2, 0x0086b28e },
    {1, 0x008d7979 }, {1, 0x008fba28 }, {1, 0x009079e4 }, {5, 0x00959a72 },
    {1, 0x0099220b }, {1, 0x00ac3dd1 }, {1, 0x00a5d78d }, {1, 0x00a7a3e9 },
    {1, 0x00b43864 }, {1, 0x00a865fe }, {1, 0x00b3254c }, {2, 0x00b1d50e },
    {0, 0x00b8ab8c }, {1, 0x00c2e28c }, {2, 0x00ba0cf1 }, {2, 0x00cead9c },
    {1, 0x00ccebec }, {1, 0x00cdd245 }, {1, 0x00d63132 }, {5, 0x00d2253d },
    {2, 0x00dd08cf }, {1, 0x00db9472 }, {1, 0x00dffe79 }, {1, 0x00dfc553 },
    {4, 0x0009939e }, {2, 0x0009dcd8 }, {1, 0x00069087 }, {1, 0x000e5d37 },
    {2, 0x0008c63a }, {2, 0x000c06f6 }, {1, 0x00124b86 }, {2, 0x000e6e9d },
    {2, 0x000e385c }, {1, 0x000f460d }, {1, 0x000e6a7c }, {2, 0x0014ce53 },
    {2, 0x000fa6a0 }, {1, 0x00151545 }, {2, 0x0014a5c4 }, {2, 0x001768b9 },
    {1, 0x0013dcce }, {2, 0x00177005 }, {1, 0x0019c7fb }, {1, 0x0018db12 },
    {3, 0x001fa818 }, {2, 0x00215f61 }, {2, 0x001e958f }, {1, 0x0023a9c3 },
    {2, 0x00207d53 }, {1, 0x00259998 }, {2, 0x00258270 }, {2, 0x00237893 },
    {2, 0x0029d784 }, {2, 0x002976f0 }, {2, 0x002ac9cd }, {2, 0x002c85a0 },
    {1, 0x002ab3d7 }, {2, 0x002d6cd9 }, {2, 0x0036f858 }, {1, 0x0030fd36 },
    {2, 0x0032d035 }, {1, 0x0037e5a7 }, {2, 0x0032574b }, {1, 0x00324ead },
    {1, 0x0035f9e5 }, {3, 0x003444af }, {2, 0x0038f4d5 }, {5, 0x0036a4e8 },
    {1, 0x003b1988 }, {5, 0x003b6161 }, {1, 0x003c833d }, {1, 0x00432757 },
    {1, 0x003f160a }, {2, 0x003cfec6 }, {1, 0x00413ac8 }, {1, 0x00402c08 },
    {1, 0x00461d72 }, {1, 0x004a1104 }, {5, 0x0043ecd2 }, {5, 0x00432218 },
    {1, 0x00436ef2 }, {1, 0x00482aa9 }, {6, 0x0049eeb5 }, {2, 0x004a4c10 },
    {2, 0x00500276 }, {1, 0x0050524f }, {1, 0x0055baa4 }, {1, 0x00548866 },
    {2, 0x005dcaaa }, {2, 0x0059af42 }, {1, 0x0062e622 }, {1, 0x0069bcc9 },
    {1, 0x0063f6a2 }, {5, 0x00655056 }, {5, 0x006ab14c }, {1, 0x006d7e8f },
    {1, 0x0078d4e7 }, {2, 0x007423be }, {2, 0x00722927 }, {1, 0x007765aa },
    {2, 0x0076bf35 }, {1, 0x0082e71f }, {2, 0x00832b1c }, {2, 0x008713c9 },
    {1, 0x008d5acc }, {1, 0x008f43cc }, {1, 0x0092c964 }, {5, 0x0095bf6e },
    {1, 0x0098b3a4 }, {1, 0x00af7898 }, {1, 0x00a7973c }, {1, 0x00a656af },
    {1, 0x00b55469 }, {1, 0x00a8f0a8 }, {1, 0x00b1389f }, {2, 0x00b11174 },
    {0, 0x00b81f21 }, {1, 0x00bf8bd2 }, {2, 0x00bdd485 }, {2, 0x00cf1f4b },
    {1, 0x00cc7a2d }, {1, 0x00d14d53 }, {1, 0x00d659c9 }, {5, 0x00d0a3bc },
    {2, 0x00ddc02b }, {1, 0x00dc66bf }, {1, 0x00e26b65 }, {1, 0x00e23658 },
    {4, 0x00085754 }, {2, 0x0006a4a2 }, {1, 0x000697c0 }, {1, 0x000eedef },
    {2, 0x000a5b5e }, {2, 0x0009ff41 }, {1, 0x001213bd }, {2, 0x000f9b48 },
    {2, 0x00125bab }, {1, 0x000f9361 }, {1, 0x000f7267 }, {2, 0x00132380 },
    {2, 0x001008d4 }, {1, 0x00173fdf }, {2, 0x00142a07 }, {2, 0x001881ad },
    {1, 0x0016167b }, {2, 0x0015ff3f }, {1, 0x001954b0 }, {1, 0x001900ef },
    {3, 0x001b8605 }, {2, 0x00200d9d }, {2, 0x001e5a67 }, {1, 0x0025c810 },
    {2, 0x001ff954 }, {1, 0x0022545d }, {2, 0x0024c14a }, {2, 0x00270c11 },
    {2, 0x002e4226 }, {2, 0x002819c6 }, {2, 0x002817ef }, {2, 0x002c04c6 },
    {1, 0x002ccdc6 }, {2, 0x002ceca4 }, {2, 0x00369bcb }, {1, 0x00343101 },
    {2, 0x002e50a6 }, {1, 0x00358754 }, {2, 0x003469c3 }, {1, 0x0035bc69 },
    {1, 0x0038b981 }, {3, 0x00348308 }, {2, 0x003ae8e4 }, {5, 0x003b5c98 },
    {1, 0x003b0c13 }, {5, 0x003bb136 }, {1, 0x003e0dc9 }, {1, 0x0041c666 },
    {1, 0x003d2c3a }, {1, 0x003fe431 }, {3, 0x0040f465 }, {2, 0x0042c1b5 },
    {1, 0x0045b770 }, {4, 0x0049d84c }, {12, 0x00452920 }, {12, 0x0049ea6c },
    {4, 0x0046eb63 }, {4, 0x004bd773 }, {14, 0x004c2a42 }, {6, 0x004dcee1 },
    {6, 0x004f843c }, {4, 0x00521eac }, {4, 0x0055f431 }, {4, 0x00560666 },
    {6, 0x005d64f1 }, {6, 0x005c5373 }, {4, 0x0063e04a }, {4, 0x0069bc86 },
    {4, 0x0066cdb6 }, {12, 0x00664e31 }, {12, 0x0071cf43 }, {4, 0x007078ec },
    {4, 0x00803c4f }, {6, 0x007f3eb3 }, {6, 0x007c3e62 }, {4, 0x007e5c50 },
    {6, 0x007e53a8 }, {4, 0x00832739 }, {6, 0x0086f5bd }, {6, 0x008a24ac },
    {4, 0x0090bb76 }, {4, 0x0090f081 }, {4, 0x0093499c }, {12, 0x009d8671 },
    {4, 0x009ab26f }, {4, 0x00b059b6 }, {4, 0x00aa50b4 }, {4, 0x00ad2f2c },
    {4, 0x00b937e2 }, {4, 0x00b019e1 }, {4, 0x00b52653 }, {6, 0x00b3c859 },
    {2, 0x00bf69be }, {4, 0x00c436db }, {6, 0x00beba6c }, {6, 0x00d5a14e },
    {4, 0x00d21d35 }, {4, 0x00d0231f }, {4, 0x00e0748b }, {12, 0x00d2faef },
    {6, 0x00debe67 }, {4, 0x00ddb798 }, {4, 0x00e63fd8 }, {4, 0x00e1c444 },
    {10, 0x000ed788 }, {6, 0x000bbba5 }, {4, 0x000c5418 }, {4, 0x000ee3ff },
    {6, 0x000a7a74 }, {6, 0x000eac2b }, {4, 0x00139646 }, {6, 0x0012979c },
    {6, 0x00152789 }, {4, 0x001725e1 }, {4, 0x0010f4da }, {6, 0x0019363e },
    {6, 0x001162f5 }, {4, 0x0016e091 }, {6, 0x00170358 }, {6, 0x00184973 },
    {4, 0x0019762a }, {6, 0x001a01c5 }, {4, 0x001f17b6 }, {4, 0x001de22a },
    {8, 0x0025a9d6 }, {6, 0x0023141b }, {6, 0x00264535 }, {4, 0x00294fc3 },
    {6, 0x00283a14 }, {4, 0x00260bb9 }, {6, 0x002a20ed }, {6, 0x0027eee2 },
    {6, 0x0035729f }, {6, 0x002f4036 }, {6, 0x002b5498 }, {6, 0x00308bad },
    {4, 0x002eacf6 }, {6, 0x00336921 }, {6, 0x0035a4a8 }, {4, 0x0035e950 },
    {6, 0x0034439d }, {4, 0x003903e6 }, {6, 0x00365ea6 }, {4, 0x0035ee8c },
    {4, 0x00396337 }, {8, 0x0039396d }, {6, 0x003ec9c4 }, {12, 0x003ed048 },
    {4, 0x003ee1b5 }, {12, 0x003c6c62 }, {4, 0x00406e6d }, {4, 0x00456d06 },
    {3, 0x0044003e }, {10002, 0x0047bf3a }, {10001, 0x0048be8b }, {10001, 0x0048896c },
    {10001, 0x004d6b8e }, {10001, 0x00517ec6 }, {10005, 0x0047d1eb }, {10005, 0x004dc5c5 },
    {10001, 0x004d0f6b }, {10001, 0x004f7e7f }, {10006, 0x004cd7ea }, {10002, 0x004f7162 },
    {10002, 0x00579047 }, {10001, 0x005259de }, {10001, 0x005ca43c }, {10001, 0x005d5f24 },
    {10002, 0x006364f8 }, {10002, 0x006078ab }, {10001, 0x0067874b }, {10001, 0x006e4759 },
    {10001, 0x006cb8f4 }, {10005, 0x006af82f }, {10005, 0x007255c6 }, {10001, 0x0073815a },
    {10001, 0x00851187 }, {10002, 0x00837bf3 }, {10002, 0x00772d24 }, {10001, 0x007b755f },
    {10002, 0x0081f30b }, {10001, 0x00878dc6 }, {10002, 0x0084f36a }, {10002, 0x008e8cbc },
    {10001, 0x009511df }, {10001, 0x00982622 }, {10001, 0x00990fec }, {10005, 0x0098bbc6 },
    {10001, 0x009efe11 }, {10001, 0x00b333fd }, {10001, 0x00b04342 }, {10001, 0x00ae87ef },
    {10001, 0x00bd872a }, {10001, 0x00b04521 }, {10001, 0x00bc5bfd }, {10002, 0x00baa500 },
    {10000, 0x00bf4e28 }, {10001, 0x00c3e833 }, {10002, 0x00c0b999 }, {10002, 0x00d32470 },
    {10001, 0x00d55ad9 }, {10001, 0x00d2fb7c }, {10001, 0x00dbc818 }, {10005, 0x00df921d },
    {10002, 0x00e4304f }, {10001, 0x00e171ba }, {10001, 0x00e8876b }, {10001, 0x00ef172e },
    {10004, 0x0012856c }, {10002, 0x000e1d81 }, {10001, 0x000a75ba }, {10001, 0x00146bdb },
    {10002, 0x000ffd1f }, {10002, 0x0012d798 }, {10001, 0x0015a968 }, {10002, 0x00178513 },
    {10002, 0x0016d236 }, {10001, 0x0015e099 }, {10001, 0x001825ae }, {10002, 0x00181687 },
    {10002, 0x001840ce }, {10001, 0x002012ee }, {10002, 0x0023eb27 }, {10002, 0x0019c541 },
    {10001, 0x001a88e3 }, {10002, 0x002037f1 }, {10001, 0x0027be14 }, {10001, 0x00206f5c },
    {10003, 0x00238b69 }, {10002, 0x0028808a }, {10002, 0x002491e6 }, {10001, 0x002c9433 },
    {10002, 0x002a6ff4 }, {10001, 0x002d7c09 }, {10002, 0x0027ab55 }, {10002, 0x002b65c5 },
    {10002, 0x00311c12 }, {10002, 0x002f6bb6 }, {10002, 0x00315a4c }, {10002, 0x0034bcce },
    {10001, 0x003174b2 }, {10002, 0x0033b0a8 }, {10002, 0x00401dd8 }, {10001, 0x0038e83f },
    {10002, 0x0032f386 }, {10001, 0x003d6f62 }, {10002, 0x003ae693 }, {10001, 0x00377d50 },
    {10001, 0x0038a338 }, {10003, 0x0038e1ba }, {10002, 0x0048c862 }, {10005, 0x003c622e },
    {10001, 0x003eaa64 }, {10005, 0x00413a6b }, {10001, 0x0048115c }, {10001, 0x004c57a4 },
    {10001, 0x0043d453 }, {10002, 0x0042606c }, {10001, 0x0046fd92 }, {10001, 0x00474eae },
    {10001, 0x004b6026 }, {10001, 0x004f1da6 }, {10005, 0x004ae5f6 }, {10005, 0x0047638e },
    {10001, 0x0049d7b4 }, {10001, 0x00500180 }, {10006, 0x004fc687 }, {10002, 0x0050f83f },
    {10002, 0x0052eed1 }, {10001, 0x005213eb }, {10001, 0x0057d706 }, {10001, 0x0059b629 },
    {10002, 0x006803d9 }, {10002, 0x00607f20 }, {10001, 0x006566de }, {10001, 0x006d5190 },
    {10001, 0x006c8c13 }, {10005, 0x00682022 }, {10005, 0x0071255f }, {10001, 0x007241de },
    {10001, 0x007b20f0 }, {10002, 0x007c8569 }, {10002, 0x0075ed55 }, {10001, 0x00828a68 },
    {10002, 0x0080c58d }, {10001, 0x008898af }, {10002, 0x00865f70 }, {10002, 0x008c406a },
    {10001, 0x009138b8 }, {10001, 0x009565cf }, {10001, 0x009a5e25 }, {10005, 0x0099dcab },
    {10001, 0x009ce33d }, {10001, 0x00b2ac4a }, {10001, 0x00b1476a }, {10001, 0x00abb44f },
    {10001, 0x00bb016f }, {10001, 0x00b1797e }, {10001, 0x00bdb17d }, {10002, 0x00b60b70 },
    {10000, 0x00bffbbf }, {10001, 0x00c62e56 }, {10002, 0x00c19824 }, {10002, 0x00d9184b },
    {10001, 0x00d70472 }, {10001, 0x00d38199 }, {10001, 0x00e3776e }, {10005, 0x00d99b2c },
    {10002, 0x00e30145 }, {10001, 0x00e4d5c4 }, {10001, 0x00e1e8aa }, {10001, 0x00eb8ae2 }

};
//Method that can make any block be the genesis block, useful for development to get the correct nonce.
uint32_t ComputeGenesis(CBlock& block, int blockIndex)
{
    arith_uint256 bnTarget;
    bnTarget.SetCompact(block.nBits);
    while(true)
    {
        if (UintToArith256(block.GetHash()) <= bnTarget)
            break;
        ++block.nNonce;
        if (block.nNonce == 0)
        {
            printf("NONCE WRAPPED, incrementing time\n");
            ++block.nTime;
        }
    }

    /*printf("\n\n\n");
    printf("Block Number= %i\n",blockIndex);
    printf("block.nTime = %u \n", block.nTime);
    printf("block.nNonce = %#010x\n", block.nNonce);
    printf("block.GetHash = %s\n", block.GetHash().ToString().c_str());
    printf("block.hashMerkleRoot = %s\n", block.hashMerkleRoot.ToString().c_str());
    printf("\n\n\n");*/

    if(blockIndex % 4 == 0)
        printf("\n");

    printf(" {%i, %#010x },",blockinfo[blockIndex].extranonce , block.nNonce);

    return block.nNonce;
}
CBlockIndex CreateBlockIndex(int nHeight)
{
    CBlockIndex index;
    index.nHeight = nHeight;
    index.pprev = chainActive.Tip();
    return index;
}

bool TestSequenceLocks(const CTransaction &tx, int flags)
{
    LOCK(mempool.cs);
    return CheckSequenceLocks(tx, flags);
}

// Test suite for ancestor feerate transaction selection.
// Implemented as an additional function, rather than a separate test case,
// to allow reusing the blockchain created in CreateNewBlock_validity.
// Note that this test assumes blockprioritysize is 0.
void TestPackageSelection(const CChainParams& chainparams, CScript scriptPubKey, std::vector<CTransaction *>& txFirst)
{
    // Test the ancestor feerate transaction selection.
    TestMemPoolEntryHelper entry;

    // Test that a medium fee transaction will be selected after a higher fee
    // rate package with a low fee rate parent.
    CMutableTransaction tx;
    tx.vin.resize(1);
    tx.vin[0].scriptSig = CScript() << OP_1;
    tx.vin[0].prevout.hash = txFirst[0]->GetHash();
    tx.vin[0].prevout.n = 0;
    tx.vout.resize(1);
    tx.vout[0].nValue = 5000000000LL - 1000;
    // This tx has a low fee: 1000 satoshis
    uint256 hashParentTx = tx.GetHash(); // save this txid for later use
    mempool.addUnchecked(hashParentTx, entry.Fee(1000).Time(GetTime()).SpendsCoinbase(true).FromTx(tx));

    // This tx has a medium fee: 10000 satoshis
    tx.vin[0].prevout.hash = txFirst[1]->GetHash();
    tx.vout[0].nValue = 5000000000LL - 10000;
    uint256 hashMediumFeeTx = tx.GetHash();
    mempool.addUnchecked(hashMediumFeeTx, entry.Fee(10000).Time(GetTime()).SpendsCoinbase(true).FromTx(tx));

    // This tx has a high fee, but depends on the first transaction
    tx.vin[0].prevout.hash = hashParentTx;
    tx.vout[0].nValue = 5000000000LL - 1000 - 50000; // 50k satoshi fee
    uint256 hashHighFeeTx = tx.GetHash();
    mempool.addUnchecked(hashHighFeeTx, entry.Fee(50000).Time(GetTime()).SpendsCoinbase(false).FromTx(tx));

    CBlockTemplate *pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey);
    BOOST_CHECK(pblocktemplate->block.vtx[1].GetHash() == hashParentTx);
    BOOST_CHECK(pblocktemplate->block.vtx[2].GetHash() == hashHighFeeTx);
    BOOST_CHECK(pblocktemplate->block.vtx[3].GetHash() == hashMediumFeeTx);

    // Test that a package below the min relay fee doesn't get included
    tx.vin[0].prevout.hash = hashHighFeeTx;
    tx.vout[0].nValue = 5000000000LL - 1000 - 50000; // 0 fee
    uint256 hashFreeTx = tx.GetHash();
    mempool.addUnchecked(hashFreeTx, entry.Fee(0).FromTx(tx));
    size_t freeTxSize = ::GetSerializeSize(tx, SER_NETWORK, PROTOCOL_VERSION);

    // Calculate a fee on child transaction that will put the package just
    // below the min relay fee (assuming 1 child tx of the same size).
    CAmount feeToUse = minRelayTxFee.GetFee(2*freeTxSize) - 1;

    tx.vin[0].prevout.hash = hashFreeTx;
    tx.vout[0].nValue = 5000000000LL - 1000 - 50000 - feeToUse;
    uint256 hashLowFeeTx = tx.GetHash();
    mempool.addUnchecked(hashLowFeeTx, entry.Fee(feeToUse).FromTx(tx));
    pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey);
    // Verify that the free tx and the low fee tx didn't get selected
    for (size_t i=0; i<pblocktemplate->block.vtx.size(); ++i) {
        BOOST_CHECK(pblocktemplate->block.vtx[i].GetHash() != hashFreeTx);
        BOOST_CHECK(pblocktemplate->block.vtx[i].GetHash() != hashLowFeeTx);
    }

    // Test that packages above the min relay fee do get included, even if one
    // of the transactions is below the min relay fee
    // Remove the low fee transaction and replace with a higher fee transaction
    std::list<CTransaction> dummy;
    mempool.removeRecursive(tx, dummy);
    tx.vout[0].nValue -= 2; // Now we should be just over the min relay fee
    hashLowFeeTx = tx.GetHash();
    mempool.addUnchecked(hashLowFeeTx, entry.Fee(feeToUse+2).FromTx(tx));
    pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey);
    BOOST_CHECK(pblocktemplate->block.vtx[4].GetHash() == hashFreeTx);
    BOOST_CHECK(pblocktemplate->block.vtx[5].GetHash() == hashLowFeeTx);

    // Test that transaction selection properly updates ancestor fee
    // calculations as ancestor transactions get included in a block.
    // Add a 0-fee transaction that has 2 outputs.
    tx.vin[0].prevout.hash = txFirst[2]->GetHash();
    tx.vout.resize(2);
    tx.vout[0].nValue = 5000000000LL - 100000000;
    tx.vout[1].nValue = 100000000; // 1BTC output
    uint256 hashFreeTx2 = tx.GetHash();
    mempool.addUnchecked(hashFreeTx2, entry.Fee(0).SpendsCoinbase(true).FromTx(tx));

    // This tx can't be mined by itself
    tx.vin[0].prevout.hash = hashFreeTx2;
    tx.vout.resize(1);
    feeToUse = minRelayTxFee.GetFee(freeTxSize);
    tx.vout[0].nValue = 5000000000LL - 100000000 - feeToUse;
    uint256 hashLowFeeTx2 = tx.GetHash();
    mempool.addUnchecked(hashLowFeeTx2, entry.Fee(feeToUse).SpendsCoinbase(false).FromTx(tx));
    pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey);

    // Verify that this tx isn't selected.
    for (size_t i=0; i<pblocktemplate->block.vtx.size(); ++i) {
        BOOST_CHECK(pblocktemplate->block.vtx[i].GetHash() != hashFreeTx2);
        BOOST_CHECK(pblocktemplate->block.vtx[i].GetHash() != hashLowFeeTx2);
    }

    // This tx will be mineable, and should cause hashLowFeeTx2 to be selected
    // as well.
    tx.vin[0].prevout.n = 1;
    tx.vout[0].nValue = 100000000 - 10000; // 10k satoshi fee
    mempool.addUnchecked(tx.GetHash(), entry.Fee(10000).FromTx(tx));
    pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey);
    BOOST_CHECK(pblocktemplate->block.vtx[8].GetHash() == hashLowFeeTx2);
}

// NOTE: These tests rely on CreateNewBlock doing its own self-validation!
BOOST_AUTO_TEST_CASE(CreateNewBlock_validity)
{
    // Disable size accounting (CPFP does not support it)
    mapArgs["-blockmaxsize"] = strprintf("%u", MAX_BLOCK_SERIALIZED_SIZE);

    const CChainParams& chainparams = Params(CBaseChainParams::MAIN);
    CScript scriptPubKey = CScript() << ParseHex("04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f") << OP_CHECKSIG;
    CBlockTemplate *pblocktemplate;
    CMutableTransaction tx,tx2;
    CScript script;
    uint256 hash;
    TestMemPoolEntryHelper entry;
    entry.nFee = 11;
    entry.dPriority = 111.0;
    entry.nHeight = 11;

    LOCK(cs_main);
    fCheckpointsEnabled = false;

    // Simple block creation, nothing special yet:
    BOOST_CHECK(pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey));

    // We can't make transactions until we have inputs
    // Therefore, load 100 blocks :)
    int baseheight = 0;
    std::vector<CTransaction*>txFirst;
    for (unsigned int i = 0; i < sizeof(blockinfo)/sizeof(*blockinfo); ++i)
    {
        CBlock *pblock = &pblocktemplate->block; // pointer for convenience
        pblock->nVersion = 1;
        pblock->nTime = chainActive.Tip()->GetMedianTimePast()+1;
        pblock->nBits = GetNextTargetRequired(chainActive.Tip(), pblock->GetBlockTime(), false);
        CMutableTransaction txCoinbase(pblock->vtx[0]);
        txCoinbase.nVersion = 1;
        txCoinbase.vin[0].scriptSig = CScript();
        txCoinbase.vin[0].scriptSig.push_back(blockinfo[i].extranonce);
        txCoinbase.vin[0].scriptSig.push_back(chainActive.Height());
        txCoinbase.vout[0].scriptPubKey = CScript();
        pblock->vtx[0] = CTransaction(txCoinbase);
        if (txFirst.size() == 0)
            baseheight = chainActive.Height();
        if (txFirst.size() < 4)
            txFirst.push_back(new CTransaction(pblock->vtx[0]));
        pblock->hashMerkleRoot = BlockMerkleRoot(*pblock);
        pblock->nNonce = blockinfo[i].nonce;
        CValidationState state;
//        ComputeGenesis(*pblock,i);
        BOOST_CHECK(ProcessNewBlock(state, chainparams, NULL, pblock, true, NULL));
        BOOST_CHECK(state.IsValid());
        pblock->hashPrevBlock = pblock->GetHash();

    }

    delete pblocktemplate;

    // Just to make sure we can still make simple blocks
    BOOST_CHECK(pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey));
    delete pblocktemplate;

    const CAmount BLOCKSUBSIDY = 50*COIN;
    const CAmount LOWFEE = CENT;
    const CAmount HIGHFEE = COIN;
    const CAmount HIGHERFEE = 4*COIN;

    // block sigops > limit: 1000 CHECKMULTISIG + 1
    tx.vin.resize(1);
    // NOTE: OP_NOP is used to force 20 SigOps for the CHECKMULTISIG
    tx.vin[0].scriptSig = CScript() << OP_0 << OP_0 << OP_0 << OP_NOP << OP_CHECKMULTISIG << OP_1;
    tx.vin[0].prevout.hash = txFirst[0]->GetHash();
    tx.vin[0].prevout.n = 0;
    tx.vout.resize(1);
    tx.vout[0].nValue = BLOCKSUBSIDY;
    for (unsigned int i = 0; i < 1001; ++i)
    {
        tx.vout[0].nValue -= LOWFEE;
        hash = tx.GetHash();
        bool spendsCoinbase = (i == 0) ? true : false; // only first tx spends coinbase
        // If we don't set the # of sig ops in the CTxMemPoolEntry, template creation fails
        mempool.addUnchecked(hash, entry.Fee(LOWFEE).Time(GetTime()).SpendsCoinbase(spendsCoinbase).FromTx(tx));
        tx.vin[0].prevout.hash = hash;
    }
    BOOST_CHECK_THROW(BlockAssembler(chainparams).CreateNewBlock(scriptPubKey), std::runtime_error);
    mempool.clear();

    tx.vin[0].prevout.hash = txFirst[0]->GetHash();
    tx.vout[0].nValue = BLOCKSUBSIDY;
    for (unsigned int i = 0; i < 1001; ++i)
    {
        tx.vout[0].nValue -= LOWFEE;
        hash = tx.GetHash();
        bool spendsCoinbase = (i == 0) ? true : false; // only first tx spends coinbase
        // If we do set the # of sig ops in the CTxMemPoolEntry, template creation passes
        mempool.addUnchecked(hash, entry.Fee(LOWFEE).Time(GetTime()).SpendsCoinbase(spendsCoinbase).SigOpsCost(80).FromTx(tx));
        tx.vin[0].prevout.hash = hash;
    }
    BOOST_CHECK(pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey));
    delete pblocktemplate;
    mempool.clear();

    // block size > limit
    tx.vin[0].scriptSig = CScript();
    // 18 * (520char + DROP) + OP_1 = 9433 bytes
    std::vector<unsigned char> vchData(520);
    for (unsigned int i = 0; i < 18; ++i)
        tx.vin[0].scriptSig << vchData << OP_DROP;
    tx.vin[0].scriptSig << OP_1;
    tx.vin[0].prevout.hash = txFirst[0]->GetHash();
    tx.vout[0].nValue = BLOCKSUBSIDY;
    for (unsigned int i = 0; i < 128; ++i)
    {
        tx.vout[0].nValue -= LOWFEE;
        hash = tx.GetHash();
        bool spendsCoinbase = (i == 0) ? true : false; // only first tx spends coinbase
        mempool.addUnchecked(hash, entry.Fee(LOWFEE).Time(GetTime()).SpendsCoinbase(spendsCoinbase).FromTx(tx));
        tx.vin[0].prevout.hash = hash;
    }
    BOOST_CHECK(pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey));
    delete pblocktemplate;
    mempool.clear();

    // orphan in mempool, template creation fails
    hash = tx.GetHash();
    mempool.addUnchecked(hash, entry.Fee(LOWFEE).Time(GetTime()).FromTx(tx));
    BOOST_CHECK_THROW(BlockAssembler(chainparams).CreateNewBlock(scriptPubKey), std::runtime_error);
    mempool.clear();

    // child with higher priority than parent
    tx.vin[0].scriptSig = CScript() << OP_1;
    tx.vin[0].prevout.hash = txFirst[1]->GetHash();
    tx.vout[0].nValue = BLOCKSUBSIDY-HIGHFEE;
    hash = tx.GetHash();
    mempool.addUnchecked(hash, entry.Fee(HIGHFEE).Time(GetTime()).SpendsCoinbase(true).FromTx(tx));
    tx.vin[0].prevout.hash = hash;
    tx.vin.resize(2);
    tx.vin[1].scriptSig = CScript() << OP_1;
    tx.vin[1].prevout.hash = txFirst[0]->GetHash();
    tx.vin[1].prevout.n = 0;
    tx.vout[0].nValue = tx.vout[0].nValue+BLOCKSUBSIDY-HIGHERFEE; //First txn output + fresh coinbase - new txn fee
    hash = tx.GetHash();
    mempool.addUnchecked(hash, entry.Fee(HIGHERFEE).Time(GetTime()).SpendsCoinbase(true).FromTx(tx));
    BOOST_CHECK(pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey));
    delete pblocktemplate;
    mempool.clear();

    // coinbase in mempool, template creation fails
    tx.vin.resize(1);
    tx.vin[0].prevout.SetNull();
    tx.vin[0].scriptSig = CScript() << OP_0 << OP_1;
    tx.vout[0].nValue = 0;
    hash = tx.GetHash();
    // give it a fee so it'll get mined
    mempool.addUnchecked(hash, entry.Fee(LOWFEE).Time(GetTime()).SpendsCoinbase(false).FromTx(tx));
    BOOST_CHECK_THROW(BlockAssembler(chainparams).CreateNewBlock(scriptPubKey), std::runtime_error);
    mempool.clear();

    // invalid (pre-p2sh) txn in mempool, template creation fails
    tx.vin[0].prevout.hash = txFirst[0]->GetHash();
    tx.vin[0].prevout.n = 0;
    tx.vin[0].scriptSig = CScript() << OP_1;
    tx.vout[0].nValue = BLOCKSUBSIDY-LOWFEE;
    script = CScript() << OP_0;
    tx.vout[0].scriptPubKey = GetScriptForDestination(CScriptID(script));
    hash = tx.GetHash();
    mempool.addUnchecked(hash, entry.Fee(LOWFEE).Time(GetTime()).SpendsCoinbase(true).FromTx(tx));
    tx.vin[0].prevout.hash = hash;
    tx.vin[0].scriptSig = CScript() << std::vector<unsigned char>(script.begin(), script.end());
    tx.vout[0].nValue -= LOWFEE;
    hash = tx.GetHash();
    mempool.addUnchecked(hash, entry.Fee(LOWFEE).Time(GetTime()).SpendsCoinbase(false).FromTx(tx));
    BOOST_CHECK_THROW(BlockAssembler(chainparams).CreateNewBlock(scriptPubKey), std::runtime_error);
    mempool.clear();

    // double spend txn pair in mempool, template creation fails
    tx.vin[0].prevout.hash = txFirst[0]->GetHash();
    tx.vin[0].scriptSig = CScript() << OP_1;
    tx.vout[0].nValue = BLOCKSUBSIDY-HIGHFEE;
    tx.vout[0].scriptPubKey = CScript() << OP_1;
    hash = tx.GetHash();
    mempool.addUnchecked(hash, entry.Fee(HIGHFEE).Time(GetTime()).SpendsCoinbase(true).FromTx(tx));
    tx.vout[0].scriptPubKey = CScript() << OP_2;
    hash = tx.GetHash();
    mempool.addUnchecked(hash, entry.Fee(HIGHFEE).Time(GetTime()).SpendsCoinbase(true).FromTx(tx));
    BOOST_CHECK_THROW(BlockAssembler(chainparams).CreateNewBlock(scriptPubKey), std::runtime_error);
    mempool.clear();

    // subsidy changing
    int nHeight = chainActive.Height();
    // Create an actual 209999-long block chain (without valid blocks).
    while (chainActive.Tip()->nHeight < 209999) {
        CBlockIndex* prev = chainActive.Tip();
        CBlockIndex* next = new CBlockIndex();
        next->phashBlock = new uint256(GetRandHash());
        pcoinsTip->SetBestBlock(next->GetBlockHash());
        next->pprev = prev;
        next->nHeight = prev->nHeight + 1;
        next->BuildSkip();
        chainActive.SetTip(next);
    }
    BOOST_CHECK(pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey));
    delete pblocktemplate;
    // Extend to a 210000-long block chain.
    while (chainActive.Tip()->nHeight < 210000) {
        CBlockIndex* prev = chainActive.Tip();
        CBlockIndex* next = new CBlockIndex();
        next->phashBlock = new uint256(GetRandHash());
        pcoinsTip->SetBestBlock(next->GetBlockHash());
        next->pprev = prev;
        next->nHeight = prev->nHeight + 1;
        next->BuildSkip();
        chainActive.SetTip(next);
    }
    BOOST_CHECK(pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey));
    delete pblocktemplate;
    // Delete the dummy blocks again.
    while (chainActive.Tip()->nHeight > nHeight) {
        CBlockIndex* del = chainActive.Tip();
        chainActive.SetTip(del->pprev);
        pcoinsTip->SetBestBlock(del->pprev->GetBlockHash());
        delete del->phashBlock;
        delete del;
    }

    // non-final txs in mempool
    SetMockTime(chainActive.Tip()->GetMedianTimePast()+1);
    int flags = LOCKTIME_VERIFY_SEQUENCE|LOCKTIME_MEDIAN_TIME_PAST;
    // height map
    std::vector<int> prevheights;

    // relative height locked
    tx.nVersion = 2;
    tx.vin.resize(1);
    prevheights.resize(1);
    tx.vin[0].prevout.hash = txFirst[0]->GetHash(); // only 1 transaction
    tx.vin[0].prevout.n = 0;
    tx.vin[0].scriptSig = CScript() << OP_1;
    tx.vin[0].nSequence = chainActive.Tip()->nHeight + 1; // txFirst[0] is the 2nd block
    prevheights[0] = baseheight + 1;
    tx.vout.resize(1);
    tx.vout[0].nValue = BLOCKSUBSIDY-HIGHFEE;
    tx.vout[0].scriptPubKey = CScript() << OP_1;
    tx.nLockTime = 0;
    hash = tx.GetHash();
    mempool.addUnchecked(hash, entry.Fee(HIGHFEE).Time(GetTime()).SpendsCoinbase(true).FromTx(tx));
    BOOST_CHECK(CheckFinalTx(tx, flags)); // Locktime passes
    BOOST_CHECK(!TestSequenceLocks(tx, flags)); // Sequence locks fail
    BOOST_CHECK(SequenceLocks(tx, flags, &prevheights, CreateBlockIndex(chainActive.Tip()->nHeight + 2))); // Sequence locks pass on 2nd block

    // relative time locked
    tx.vin[0].prevout.hash = txFirst[1]->GetHash();
    tx.vin[0].nSequence = CTxIn::SEQUENCE_LOCKTIME_TYPE_FLAG | (((chainActive.Tip()->GetMedianTimePast()+1-chainActive[1]->GetMedianTimePast()) >> CTxIn::SEQUENCE_LOCKTIME_GRANULARITY) + 1); // txFirst[1] is the 3rd block
    prevheights[0] = baseheight + 2;
    hash = tx.GetHash();
    mempool.addUnchecked(hash, entry.Time(GetTime()).FromTx(tx));
    BOOST_CHECK(CheckFinalTx(tx, flags)); // Locktime passes
    BOOST_CHECK(!TestSequenceLocks(tx, flags)); // Sequence locks fail

    for (int i = 0; i < CBlockIndex::nMedianTimeSpan; i++)
        chainActive.Tip()->GetAncestor(chainActive.Tip()->nHeight - i)->nTime += 512; //Trick the MedianTimePast
    BOOST_CHECK(SequenceLocks(tx, flags, &prevheights, CreateBlockIndex(chainActive.Tip()->nHeight + 1))); // Sequence locks pass 512 seconds later
    for (int i = 0; i < CBlockIndex::nMedianTimeSpan; i++)
        chainActive.Tip()->GetAncestor(chainActive.Tip()->nHeight - i)->nTime -= 512; //undo tricked MTP

    // absolute height locked
    tx.vin[0].prevout.hash = txFirst[2]->GetHash();
    tx.vin[0].nSequence = CTxIn::SEQUENCE_FINAL - 1;
    prevheights[0] = baseheight + 3;
    tx.nLockTime = chainActive.Tip()->nHeight + 1;
    hash = tx.GetHash();
    mempool.addUnchecked(hash, entry.Time(GetTime()).FromTx(tx));
    BOOST_CHECK(!CheckFinalTx(tx, flags)); // Locktime fails
    BOOST_CHECK(TestSequenceLocks(tx, flags)); // Sequence locks pass
    BOOST_CHECK(IsFinalTx(tx, chainActive.Tip()->nHeight + 2, chainActive.Tip()->GetMedianTimePast())); // Locktime passes on 2nd block

    // absolute time locked
    tx.vin[0].prevout.hash = txFirst[3]->GetHash();
    tx.nLockTime = chainActive.Tip()->GetMedianTimePast();
    prevheights.resize(1);
    prevheights[0] = baseheight + 4;
    hash = tx.GetHash();
    mempool.addUnchecked(hash, entry.Time(GetTime()).FromTx(tx));
    BOOST_CHECK(!CheckFinalTx(tx, flags)); // Locktime fails
    BOOST_CHECK(TestSequenceLocks(tx, flags)); // Sequence locks pass
    BOOST_CHECK(IsFinalTx(tx, chainActive.Tip()->nHeight + 2, chainActive.Tip()->GetMedianTimePast() + 1)); // Locktime passes 1 second later

    // mempool-dependent transactions (not added)
    tx.vin[0].prevout.hash = hash;
    prevheights[0] = chainActive.Tip()->nHeight + 1;
    tx.nLockTime = 0;
    tx.vin[0].nSequence = 0;
    BOOST_CHECK(CheckFinalTx(tx, flags)); // Locktime passes
    BOOST_CHECK(TestSequenceLocks(tx, flags)); // Sequence locks pass
    tx.vin[0].nSequence = 1;
    BOOST_CHECK(!TestSequenceLocks(tx, flags)); // Sequence locks fail
    tx.vin[0].nSequence = CTxIn::SEQUENCE_LOCKTIME_TYPE_FLAG;
    BOOST_CHECK(TestSequenceLocks(tx, flags)); // Sequence locks pass
    tx.vin[0].nSequence = CTxIn::SEQUENCE_LOCKTIME_TYPE_FLAG | 1;
    BOOST_CHECK(!TestSequenceLocks(tx, flags)); // Sequence locks fail

    BOOST_CHECK(pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey));

    // None of the of the absolute height/time locked tx should have made
    // it into the template because we still check IsFinalTx in CreateNewBlock,
    // but relative locked txs will if inconsistently added to mempool.
    // For now these will still generate a valid template until BIP68 soft fork
    BOOST_CHECK_EQUAL(pblocktemplate->block.vtx.size(), 3);
    delete pblocktemplate;
    // However if we advance height by 1 and time by 512, all of them should be mined
    for (int i = 0; i < CBlockIndex::nMedianTimeSpan; i++)
        chainActive.Tip()->GetAncestor(chainActive.Tip()->nHeight - i)->nTime += 512; //Trick the MedianTimePast
    chainActive.Tip()->nHeight++;
    SetMockTime(chainActive.Tip()->GetMedianTimePast() + 1);

    BOOST_CHECK(pblocktemplate = BlockAssembler(chainparams).CreateNewBlock(scriptPubKey));
    BOOST_CHECK_EQUAL(pblocktemplate->block.vtx.size(), 5);
    delete pblocktemplate;

    chainActive.Tip()->nHeight--;
    SetMockTime(0);
    mempool.clear();

    TestPackageSelection(chainparams, scriptPubKey, txFirst);

    BOOST_FOREACH(CTransaction *_tx, txFirst)
        delete _tx;

    fCheckpointsEnabled = true;
}

BOOST_AUTO_TEST_SUITE_END()
