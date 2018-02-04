#include "ShareDialog.h"
#include "ui_ShareDialog.h"
#include "../main.h"
#include "walletmodel.h"
#include "../wallet/wallet.h"
#include "clientmodel.h"
#include "../pubkey.h"
#include "../txmempool.h"
#include "informationdialog.h"
#include "../key.h"
#include <QFile>
#include <QTextStream>
ShareDialog::ShareDialog(WalletModel *wmodel,QWidget *parent) :
    QDialog(parent),
    ui(new Ui::ShareDialog)
{

    ui->setupUi(this);    this->setWindowFlags(this->windowFlags()& ~Qt::WindowContextHelpButtonHint);
    this->setModal(true);
    wm=wmodel;
    connect(ui->cancelButtonByKey,SIGNAL(clicked(bool)),SLOT(close()));
    connect(ui->sendButtonByKey,SIGNAL(clicked(bool)),this,SLOT(sendClickedByKey()));
    ui->sendButtonByKey->setDefault(true);
    ui->ResponceByKey->setVisible(false);
}
void ShareDialog::setWalletModel(WalletModel *wmodel){
    this->wm=wmodel;
}
void ShareDialog::sendClickedByKey(){

    WalletModel::UnlockContext ctx(wm->requestUnlock());
    if(!ctx.isValid())
    {
        // Unlock wallet was cancelled
        return;
    }

    LOCK2(cs_main, pwalletMain->cs_wallet);

    ui->ResponceByKey->setVisible(true);
    std::string key_text= ui->KeyEdit->text().toStdString();
    key_text.erase(std::remove(key_text.begin(), key_text.end(), ' '), key_text.end());


    // Whether to perform rescan after import

    CBitcoinSecret vchSecret;

    bool fGood = vchSecret.SetString(key_text);
    ui->ResponceByKey->setStyleSheet("QLabel { color: #f6e395; }");
    if (!fGood){
        ui->ResponceByKey->setText(tr("Invalid private key encoding."));
        return;
    }

    CKey key = vchSecret.GetKey();
    if (!key.IsValid()){
        ui->ResponceByKey->setText(tr("Private key outside allowed range."));
        return;
    }

    CPubKey pubkey = key.GetPubKey();
    assert(key.VerifyPubKey(pubkey));
    CKeyID vchAddress = pubkey.GetID();
    {
        pwalletMain->MarkDirty();
        pwalletMain->SetAddressBook(vchAddress, tr("Your share").toStdString(), "receive");

        // Don't throw error in case a key is already there
        if (pwalletMain->HaveKey(vchAddress)){
            ui->ResponceByKey->setText(tr("A private key has already been added to your wallet."));
            return;
        }


        pwalletMain->mapKeyMetadata[vchAddress].nCreateTime = 1;

        if (!pwalletMain->AddKeyPubKey(key, pubkey)){
            ui->ResponceByKey->setText(tr("Error adding key to wallet."));
            return;
        }
        pwalletMain->nTimeFirstKey = 1; // 0 would be considered 'no value'
        if(!pwalletMain->ScanForWalletTransactions(chainActive.Genesis(), true)){
            ui->ResponceByKey->setText(tr("Could not get share by key (%0)").arg(QString::fromStdString(key_text)));
            return;
        }
    }
    ui->ResponceByKey->setStyleSheet("QLabel { color: #a3f642; }");
    ui->ResponceByKey->setText(tr("Your share is added to the wallet."));


}
ShareDialog::~ShareDialog()
{
    delete ui;
}
