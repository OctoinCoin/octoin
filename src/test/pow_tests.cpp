// Copyright (c) 2015 The The Bitcoin Core developers
// Distributed under the MIT/X11 software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include "chain.h"
#include "chainparams.h"
#include "pow.h"
#include "random.h"
#include "util.h"
#include "test/test_bitcoin.h"

#include <boost/test/unit_test.hpp>

using namespace std;

BOOST_FIXTURE_TEST_SUITE(pow_tests, BasicTestingSetup)

 /* Test calculation of next difficulty target with no constraints applying */
 BOOST_AUTO_TEST_CASE_EXPECTED_FAILURES( get_next_work, 1 )
 BOOST_AUTO_TEST_CASE(get_next_work)
 {
     CBlockIndex pindexLast;
     pindexLast.nHeight = 280;
     pindexLast.nTime = 1504601035;  // Block #32255
     pindexLast.nBits = 0x1a03103d;
     pindexLast.SetProofOfStake();

     BOOST_CHECK_EQUAL(CalculateNextWorkRequired(&pindexLast, 1504601968, Params().GetConsensus(), pindexLast.IsProofOfStake()), 436408381);
 }

 /* Test the constraint on the upper bound for next work */
 BOOST_AUTO_TEST_CASE_EXPECTED_FAILURES( get_next_work_pow_limit, 1 )
 BOOST_AUTO_TEST_CASE(get_next_work_pow_limit)
 {
     CBlockIndex pindexLast;
     pindexLast.nHeight = 280;
     pindexLast.nTime = 1504601035;  // Block #32255
     pindexLast.nBits = 0x1a03103d;
     pindexLast.SetProofOfStake();

     BOOST_CHECK_EQUAL(CalculateNextWorkRequired(&pindexLast, 1504601968, Params().GetConsensus(), pindexLast.IsProofOfStake()), 436408381);
 }

 /* Test the constraint on the lower bound for actual time taken */
 BOOST_AUTO_TEST_CASE_EXPECTED_FAILURES( get_next_work_lower_limit_actual, 1 )
 BOOST_AUTO_TEST_CASE(get_next_work_lower_limit_actual)
 {
     CBlockIndex pindexLast;
     pindexLast.nHeight = 280;
     pindexLast.nTime = 1504601035;  // Block #32255
     pindexLast.nBits = 0x1a03103d;
     pindexLast.SetProofOfStake();

     BOOST_CHECK_EQUAL(CalculateNextWorkRequired(&pindexLast, 1504601968, Params().GetConsensus(), pindexLast.IsProofOfStake()), 436408381);
 }

 /* Test the constraint on the upper bound for actual time taken */
 BOOST_AUTO_TEST_CASE_EXPECTED_FAILURES( get_next_work_upper_limit_actual, 1 )
 BOOST_AUTO_TEST_CASE(get_next_work_upper_limit_actual)
 {
     CBlockIndex pindexLast;
     pindexLast.nHeight = 280;
     pindexLast.nTime = 1504601035;  // Block #32255
     pindexLast.nBits = 0x1a03103d;
     pindexLast.SetProofOfStake();

     BOOST_CHECK_EQUAL(CalculateNextWorkRequired(&pindexLast, 1504601968, Params().GetConsensus(), pindexLast.IsProofOfStake()), 436408381);
 }

 BOOST_AUTO_TEST_CASE(GetBlockProofEquivalentTime_test)
 {
     SelectParams(CBaseChainParams::MAIN);
     const Consensus::Params& params = Params().GetConsensus();

     std::vector<CBlockIndex> blocks(10000);
     for (int i = 0; i < 10000; i++) {
         blocks[i].pprev = i ? &blocks[i - 1] : NULL;
         blocks[i].nHeight = i;
         blocks[i].nTime = 1269211443 + i * params.nTargetSpacing;
         blocks[i].nBits = 0x207fffff; /* target 0x7fffff000... */
         blocks[i].nChainWork = i ? blocks[i - 1].nChainWork + GetBlockProof(blocks[i - 1]) : arith_uint256(0);
     }

     for (int j = 0; j < 1000; j++) {
         CBlockIndex *p1 = &blocks[GetRand(10000)];
         CBlockIndex *p2 = &blocks[GetRand(10000)];
         CBlockIndex *p3 = &blocks[GetRand(10000)];

         int64_t tdiff = GetBlockProofEquivalentTime(*p1, *p2, *p3, params);
         BOOST_CHECK_EQUAL(tdiff, p1->GetBlockTime() - p2->GetBlockTime());
     }
 }

BOOST_AUTO_TEST_SUITE_END()
