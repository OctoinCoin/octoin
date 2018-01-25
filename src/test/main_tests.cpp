// Copyright (c) 2014-2015 The The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include "chainparams.h"
#include "main.h"

#include "test/test_bitcoin.h"

#include <boost/signals2/signal.hpp>
#include <boost/test/unit_test.hpp>

BOOST_FIXTURE_TEST_SUITE(main_tests, TestingSetup)

static void TestBlockSubsidyHalvings(const Consensus::Params& consensusParams)
{
    int maxHalvings = 64;
    CAmount nInitialSubsidy = (COIN_YEAR_REWARD) * 33 / (365 * 33 + 8);

    CAmount nPreviousSubsidy = nInitialSubsidy * 2; // for height == 0
    BOOST_CHECK_EQUAL(nPreviousSubsidy, nInitialSubsidy * 2);
    for (int nHalvings = 0; nHalvings < maxHalvings; nHalvings++) {
        int nHeight = nHalvings * consensusParams.nSubsidyHalvingInterval + Params().LastPOWBlock();
        CAmount nSubsidy = GetProofOfStakeReward(nHeight, 1, 0);
         BOOST_CHECK(nSubsidy <= nInitialSubsidy);
        BOOST_CHECK_EQUAL(nSubsidy, nPreviousSubsidy / 2);
        nPreviousSubsidy = nSubsidy;
    }
    BOOST_CHECK_EQUAL(GetProofOfStakeReward(maxHalvings * consensusParams.nSubsidyHalvingInterval, 1, 0), 0);
}

static void TestBlockSubsidyHalvings(int nSubsidyHalvingInterval)
{
    Consensus::Params consensusParams;
    consensusParams.nSubsidyHalvingInterval = nSubsidyHalvingInterval;
    TestBlockSubsidyHalvings(consensusParams);
}

BOOST_AUTO_TEST_CASE(block_subsidy_test)
{
    TestBlockSubsidyHalvings(Params(CBaseChainParams::MAIN).GetConsensus()); // As in main
    TestBlockSubsidyHalvings(Params(CBaseChainParams::TESTNET).GetConsensus());
    TestBlockSubsidyHalvings(Params(CBaseChainParams::REGTEST).GetConsensus());
}

 BOOST_AUTO_TEST_CASE(subsidy_limit_test)
 {
     CAmount nSum = 0;
     for (int nHeight = 2; nHeight <= 5002; nHeight += 2500) {
         CAmount nSubsidy = GetProofOfWorkReward(nHeight);
         BOOST_CHECK(nSubsidy <= 14971 * COIN);
         nSum += nSubsidy * 1000;
         BOOST_CHECK(MoneyRange(nSum));
     }
     BOOST_CHECK_EQUAL(nSum, 1599294066452000ULL);
 }

bool ReturnFalse() { return false; }
bool ReturnTrue() { return true; }

BOOST_AUTO_TEST_CASE(test_combiner_all)
{
    boost::signals2::signal<bool (), CombinerAll> Test;
    BOOST_CHECK(Test());
    Test.connect(&ReturnFalse);
    BOOST_CHECK(!Test());
    Test.connect(&ReturnTrue);
    BOOST_CHECK(!Test());
    Test.disconnect(&ReturnFalse);
    BOOST_CHECK(Test());
    Test.disconnect(&ReturnTrue);
    BOOST_CHECK(Test());
}
BOOST_AUTO_TEST_SUITE_END()
