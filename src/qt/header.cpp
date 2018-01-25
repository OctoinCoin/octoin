// Copyright (c) 2011-2015 The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include "header.h"
#include "ui_fatheader.h"
#include "overviewpage.h"

#include "bitcoingui.h"
#include "bitcoinunits.h"
#include "clientmodel.h"
#include "guiconstants.h"
#include "guiutil.h"
#include "optionsmodel.h"
#include "platformstyle.h"
#include "walletmodel.h"
#include <QFontDatabase>
#include <QToolButton>

#include <QAbstractItemDelegate>
#include <QPainter>

#define DECORATION_SIZE 85
#define NUM_ITEMS 5

Header::Header(const PlatformStyle *_platformStyle, bool isThin, BitcoinGUI *_gui, QWidget *parent) :
    QWidget(parent),
    gui(_gui),
    ui(new Ui::fatHeaderWidget),
    clientModel(0),
    walletModel(0),
    currentBalance(-1),
    currentUnconfirmedBalance(-1),
    currentImmatureBalance(-1),
    currentWatchOnlyBalance(-1),
    currentWatchUnconfBalance(-1),
    currentWatchImmatureBalance(-1),
    image(0),
    currentStake(-1),
    currentWatchOnlyStake(-1),
    platformStyle(_platformStyle)
{
    ui->setupUi(this);    this->setWindowFlags(this->windowFlags()& ~Qt::WindowContextHelpButtonHint);
    if(isThin){
        ui->verticalFrame->hide();
    }else{
        ui->thinFrame->hide();
    }
    updateGeometry();

    ui->sendCoinsButton->setText(BitcoinGUI::tr("&Send"));
    ui->sendCoinsButton->setStatusTip(BitcoinGUI::tr("Send coins to a OctoinCoin address"));
    ui->sendCoinsButton->setToolTip(BitcoinGUI::tr("Send coins to a OctoinCoin address"));

    ui->receiveCoinsButton->setText(BitcoinGUI::tr("&Receive"));
    ui->receiveCoinsButton->setStatusTip(BitcoinGUI::tr("Request payments (generates QR codes and octoin: URIs)"));
    ui->receiveCoinsButton->setToolTip(BitcoinGUI::tr("Request payments (generates QR codes and octoin: URIs)"));

    ui->sendCoinsButtonThin->setText(BitcoinGUI::tr("&Send"));
    ui->sendCoinsButtonThin->setStatusTip(BitcoinGUI::tr("Send coins to a OctoinCoin address"));
    ui->sendCoinsButtonThin->setToolTip(BitcoinGUI::tr("Send coins to a OctoinCoin address"));

    ui->receiveCoinsButtonThin->setText(BitcoinGUI::tr("&Receive"));
    ui->receiveCoinsButtonThin->setStatusTip(BitcoinGUI::tr("Request payments (generates QR codes and octoin: URIs)"));
    ui->receiveCoinsButtonThin->setToolTip(BitcoinGUI::tr("Request payments (generates QR codes and octoin: URIs)"));

    ui->labelBalance->setToolTip(OverviewPage::tr("Your current spendable balance"));
    ui->labelBalanceThin->setToolTip(OverviewPage::tr("Your current spendable balance"));

    ui->labelTotal->setToolTip(OverviewPage::tr("Your current total balance"));
    ui->labelTotalThin->setToolTip(OverviewPage::tr("Your current total balance"));

    ui->labelUnconfirmed->setToolTip(OverviewPage::tr("Total of transactions that have yet to be confirmed, and do not yet count toward the spendable balance"));
    ui->labelUnconfirmedThin->setToolTip(OverviewPage::tr("Total of transactions that have yet to be confirmed, and do not yet count toward the spendable balance"));

#ifdef ENABLE_WALLET
    connect(ui->sendCoinsButton, SIGNAL(clicked(bool)), gui, SLOT(showNormalIfMinimized()));
    connect(ui->sendCoinsButton, SIGNAL(clicked(bool)), gui, SLOT(gotoSendCoinsPage()));
    connect(ui->receiveCoinsButton, SIGNAL(clicked(bool)), gui, SLOT(showNormalIfMinimized()));
    connect(ui->receiveCoinsButton, SIGNAL(clicked(bool)), gui, SLOT(gotoReceiveCoinsPage()));

    connect(ui->sendCoinsButtonThin, SIGNAL(clicked(bool)), gui, SLOT(showNormalIfMinimized()));
    connect(ui->sendCoinsButtonThin, SIGNAL(clicked(bool)), gui, SLOT(gotoSendCoinsPage()));
    connect(ui->receiveCoinsButtonThin, SIGNAL(clicked(bool)), gui, SLOT(showNormalIfMinimized()));
    connect(ui->receiveCoinsButtonThin, SIGNAL(clicked(bool)), gui, SLOT(gotoReceiveCoinsPage()));
#endif // ENABLE_WALLET

    // start with displaying the "out of sync" warnings
//    showOutOfSyncWarning(true);
}
/*void OverviewPage::resizeEvent(QResizeEvent *event){
}*/

Header::~Header()
{
    delete ui;
}


void Header::setBalance(const CAmount& balance, const CAmount& unconfirmedBalance, const CAmount& immatureBalance, const CAmount& stake, const CAmount& watchOnlyBalance, const CAmount& watchUnconfBalance, const CAmount& watchImmatureBalance, const CAmount& watchOnlyStake)

{
    currentBalance = balance;
    currentUnconfirmedBalance = unconfirmedBalance;
    currentImmatureBalance = immatureBalance;
    
    currentStake = stake;
    
    currentWatchOnlyBalance = watchOnlyBalance;
    currentWatchUnconfBalance = watchUnconfBalance;
    currentWatchImmatureBalance = watchImmatureBalance;
    
    currentWatchOnlyStake = watchOnlyStake;
    
    ui->labelBalance->setText(BitcoinUnits::format(BitcoinUnit::BTC_HTML, balance, false, BitcoinUnits::separatorAlways));
    ui->labelUnconfirmed->setText(BitcoinUnits::format(BitcoinUnit::BTC_HTML, unconfirmedBalance, false, BitcoinUnits::separatorAlways));
//    ui->labelImmature->setText(BitcoinUnits::formatWithUnit(BitcoinUnit::BTC_HTML, immatureBalance, false, BitcoinUnits::separatorAlways));
    
//    ui->labelStake->setText(BitcoinUnits::formatWithUnit(BitcoinUnit::BTC_HTML, stake, false, BitcoinUnits::separatorAlways));
    ui->labelTotal->setText(BitcoinUnits::format(BitcoinUnit::BTC_HTML, balance + unconfirmedBalance + immatureBalance + stake, false, BitcoinUnits::separatorAlways));
    
//    ui->labelWatchAvailable->setText(BitcoinUnits::formatWithUnit(BitcoinUnit::BTC_HTML, watchOnlyBalance, false, BitcoinUnits::separatorAlways));
//    ui->labelWatchPending->setText(BitcoinUnits::formatWithUnit(BitcoinUnit::BTC_HTML, watchUnconfBalance, false, BitcoinUnits::separatorAlways));
//    ui->labelWatchImmature->setText(BitcoinUnits::formatWithUnit(BitcoinUnit::BTC_HTML, watchImmatureBalance, false, BitcoinUnits::separatorAlways));
    
//    ui->labelWatchStake->setText(BitcoinUnits::formatWithUnit(BitcoinUnit::BTC_HTML, watchOnlyStake, false, BitcoinUnits::separatorAlways));
//    ui->labelWatchTotal->setText(BitcoinUnits::formatWithUnit(BitcoinUnit::BTC_HTML, watchOnlyBalance + watchUnconfBalance + watchImmatureBalance + watchOnlyStake, false, BitcoinUnits::separatorAlways));
    
//    ui->LabelDollar_watchonly->setText(BitcoinUnits::formatWithUnit(BitcoinUnit::Dollar, watchOnlyBalance + watchUnconfBalance + watchImmatureBalance + watchOnlyStake, false, BitcoinUnits::separatorAlways));
//    ui->LabelDollar->setText(BitcoinUnits::formatWithUnit(BitcoinUnit::Dollar, balance + unconfirmedBalance + immatureBalance + stake, false, BitcoinUnits::separatorAlways));

    ui->labelBalanceThin->setText(BitcoinUnits::format(BitcoinUnit::BTC_HTML, balance, false, BitcoinUnits::separatorAlways));
    ui->labelUnconfirmedThin->setText(BitcoinUnits::format(BitcoinUnit::BTC_HTML, unconfirmedBalance, false, BitcoinUnits::separatorAlways));
    ui->labelTotalThin->setText(BitcoinUnits::format(BitcoinUnit::BTC_HTML, balance + unconfirmedBalance + immatureBalance + stake, false, BitcoinUnits::separatorAlways));

    // only show immature (newly mined) balance if it's non-zero, so as not to complicate things
    // for the non-mining users
    bool showImmature = immatureBalance != 0;
    
    bool showStake = stake != 0;
    bool showWatchOnlyImmature = watchImmatureBalance != 0;
    bool showWatchOnlyStake = watchOnlyStake != 0;
    

    // for symmetry reasons also show immature label when the watch-only one is shown
//    ui->labelImmature->setVisible(showImmature || showWatchOnlyImmature);
//    ui->labelImmatureText->setVisible(showImmature || showWatchOnlyImmature);
//    ui->labelWatchImmature->setVisible(showWatchOnlyImmature); // show watch-only immature balance
    
//    ui->labelStake->setVisible(showStake || showWatchOnlyStake);
//    ui->labelStakeText->setVisible(showStake || showWatchOnlyStake);
//    ui->labelWatchStake->setVisible(showWatchOnlyStake); // show watch-only stake balance
    
}

//// show/hide watch-only labels
void Header::updateWatchOnlyLabels(bool showWatchOnly)
{
//    ui->labelSpendable->setVisible(showWatchOnly);      // show spendable label (only when watch-only is active)
//    ui->labelWatchonly->setVisible(showWatchOnly);      // show watch-only label
//    ui->lineWatchBalance->setVisible(showWatchOnly);    // show watch-only balance separator line
//    ui->labelWatchAvailable->setVisible(showWatchOnly); // show watch-only available balance
//    ui->labelWatchPending->setVisible(showWatchOnly);   // show watch-only pending balance
//    ui->labelWatchTotal->setVisible(showWatchOnly);     // show watch-only total balance
   // ui->LabelDollar_watchonly->setVisible(showWatchOnly);
//    if (!showWatchOnly)
//    {
        
//        ui->labelWatchImmature->hide();
//	ui->labelWatchStake->hide();

//    }
}

//void Header::setClientModel(ClientModel *model)
//{
//    this->clientModel = model;
//    if(model)
//    {
//        // Show warning if this is a prerelease version
//        connect(model, SIGNAL(alertsChanged(QString)), this, SLOT(updateAlerts(QString)));
//        updateAlerts(model->getStatusBarWarnings());
//    }
//}

void Header::setWalletModel(WalletModel *model)
{
    this->walletModel = model;
    if(model && model->getOptionsModel())
    {
        // Keep up to date with wallet
        
        setBalance(model->getBalance(), model->getUnconfirmedBalance(), model->getImmatureBalance(), model->getStake(),
                   model->getWatchBalance(), model->getWatchUnconfirmedBalance(), model->getWatchImmatureBalance(), model->getWatchStake());
        connect(model, SIGNAL(balanceChanged(CAmount,CAmount,CAmount,CAmount,CAmount,CAmount,CAmount,CAmount)), this, SLOT(setBalance(CAmount,CAmount,CAmount,CAmount,CAmount,CAmount,CAmount,CAmount)));
       

        connect(model->getOptionsModel(), SIGNAL(displayUnitChanged(int)), this, SLOT(updateDisplayUnit()));

        updateWatchOnlyLabels(model->haveWatchOnly());
        connect(model, SIGNAL(notifyWatchonlyChanged(bool)), this, SLOT(updateWatchOnlyLabels(bool)));
    }

    // update the display unit, to not use the default ("OCC")
    updateDisplayUnit();
}

void Header::updateDisplayUnit()
{
    if(walletModel && walletModel->getOptionsModel())
    {
        if(currentBalance != -1)
        
            setBalance(currentBalance, currentUnconfirmedBalance, currentImmatureBalance, currentStake,
                       currentWatchOnlyBalance, currentWatchUnconfBalance, currentWatchImmatureBalance, currentWatchOnlyStake);
        
    }
}

//void Header::updateAlerts(const QString &warnings)
//{
////    this->ui->labelAlerts->setVisible(!warnings.isEmpty());
////    this->ui->labelAlerts->setText(warnings);
//}

//void Header::showOutOfSyncWarning(bool fShow)
//{
////    ui->labelWalletStatus->setVisible(fShow);
////    ui->labelTransactionsStatus->setVisible(fShow);
//}
