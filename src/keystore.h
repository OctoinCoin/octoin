// Copyright (c) 2009-2010 Satoshi Nakamoto
// Copyright (c) 2009-2015 The The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_KEYSTORE_H
#define BITCOIN_KEYSTORE_H

#include "key.h"
#include "pubkey.h"
#include "script/script.h"
#include "script/standard.h"
#include "sync.h"
#include "serialize.h"
#include <boost/signals2/signal.hpp>
#include <boost/variant.hpp>

class CBonusinfo{
private:
    uint160 hash;             //the hash of the object 
    int nVout;                //number of output;
    void genHash(){
        std::string temp(hashTx.ToString()+key+std::to_string(nVout));
        std::vector<unsigned char> vchHash(temp.begin(),temp.end());
        hash=Hash160(vchHash);
    }
public:
    uint256 hashTx;           //the hash of transaction;
    std::string key;          //the users sicret key;
    /*  The number is stored 1 unit more,
     *  this is done so that there is no situation when the number is zero,
     *  which leads to the inability to determine whether the code is used on this wallet or not.
    */
    explicit CBonusinfo(std::string Key="",uint256 HashTx=uint256(), int NVout=0,bool isUsed=false){
         hashTx=HashTx;
         key=Key;
         nVout=NVout+1;
         if(isUsed){
             nVout=0-nVout;
         }
         genHash();
    }
    int getnVout()const{ return abs(nVout)-1;}    // number of vout;
    bool isUsed()const{return nVout<0;}         // if nVout<0 then the bonus key is used else false
    uint160 getHash()const{return hash;}
    CBonusinfo& operator=(const CBonusinfo& right){
        this->hash=right.hash;
        this->key=right.key;
        this->nVout=right.nVout;
        this->hashTx=right.hashTx;
        return *this;
    }
    bool operator==(const CBonusinfo& right)const{
        return this->hash==right.hash;
    }
    bool operator>(const CBonusinfo& right)const{
        return !(this->hash<right.hash);
    }
    bool operator<(const CBonusinfo& right)const{
        return this->hash<right.hash;
    }
    template <typename Stream>
    void Serialize(Stream& s, int , int )const{
        s<<hashTx;
        s<<nVout;
        s<<key;
    }
        template <typename Stream>
    void Unserialize(Stream& s, int , int ){
        s>>hashTx;
        s>>nVout;
        s>>key;
        genHash();
    }
};

/** A virtual base class for key stores */
class CKeyStore
{
protected:
    mutable CCriticalSection cs_KeyStore;

public:
    virtual ~CKeyStore() {}

    //! Add a key to the store.
    virtual bool AddKeyPubKey(const CKey &key, const CPubKey &pubkey) =0;
    virtual bool AddKey(const CKey &key);

    //! Check whether a key corresponding to a given address is present in the store.
    virtual bool HaveKey(const CKeyID &address) const =0;
    virtual bool GetKey(const CKeyID &address, CKey& keyOut) const =0;
    virtual void GetKeys(std::set<CKeyID> &setAddress) const =0;
    virtual bool GetPubKey(const CKeyID &address, CPubKey& vchPubKeyOut) const =0;

    //! Support for BIP 0013 : see https://github.com/bitcoin/bips/blob/master/bip-0013.mediawiki
    virtual bool AddCScript(const CScript& redeemScript) =0;
    virtual bool HaveCScript(const CScriptID &hash) const =0;
    virtual bool GetCScript(const CScriptID &hash, CScript& redeemScriptOut) const =0;

    // Same as the methods of working with CScript but for bonus codes, add to a separate map
    virtual bool AddBonus(const CBonusinfo& Bonusinfo) =0;

    //! Support for Watch-only addresses
    virtual bool AddWatchOnly(const CScript &dest) =0;
    virtual bool RemoveWatchOnly(const CScript &dest) =0;
    virtual bool HaveWatchOnly(const CScript &dest) const =0;
    virtual bool HaveWatchOnly() const =0;
};

typedef std::map<CKeyID, CKey> KeyMap;
typedef std::map<CKeyID, CPubKey> WatchKeyMap;
typedef std::map<CScriptID, CScript > ScriptMap;
typedef std::set<CScript> WatchOnlySet;
typedef std::set<CBonusinfo> Bonusinfoset;

/** Basic key store, that keeps keys in an address->secret map */
class CBasicKeyStore : public CKeyStore
{
protected:
    KeyMap mapKeys;
    WatchKeyMap mapWatchKeys;
    ScriptMap mapScripts,mapBonus;
    WatchOnlySet setWatchOnly;
    Bonusinfoset setBonusinfo;

public:
    bool AddKeyPubKey(const CKey& key, const CPubKey &pubkey);
    bool GetPubKey(const CKeyID &address, CPubKey& vchPubKeyOut) const;
    bool HaveKey(const CKeyID &address) const
    {
        bool result;
        {
            LOCK(cs_KeyStore);
            result = (mapKeys.count(address) > 0);
        }
        return result;
    }
    void GetKeys(std::set<CKeyID> &setAddress) const
    {
        setAddress.clear();
        {
            LOCK(cs_KeyStore);
            KeyMap::const_iterator mi = mapKeys.begin();
            while (mi != mapKeys.end())
            {
                setAddress.insert((*mi).first);
                mi++;
            }
        }
    }
    bool GetKey(const CKeyID &address, CKey &keyOut) const
    {
        {
            LOCK(cs_KeyStore);
            KeyMap::const_iterator mi = mapKeys.find(address);
            if (mi != mapKeys.end())
            {
                keyOut = mi->second;
                return true;
            }
        }
        return false;
    }
    virtual bool AddCScript(const CScript& redeemScript);
    virtual bool HaveCScript(const CScriptID &hash) const;
    virtual bool GetCScript(const CScriptID &hash, CScript& redeemScriptOut) const;

    virtual bool AddBonus(const CBonusinfo& Bonusinfo);

    virtual bool AddWatchOnly(const CScript &dest);
    virtual bool RemoveWatchOnly(const CScript &dest);
    virtual bool HaveWatchOnly(const CScript &dest) const;
    virtual bool HaveWatchOnly() const;
};

typedef std::vector<unsigned char, secure_allocator<unsigned char> > CKeyingMaterial;
typedef std::map<CKeyID, std::pair<CPubKey, std::vector<unsigned char> > > CryptedKeyMap;

#endif // BITCOIN_KEYSTORE_H
