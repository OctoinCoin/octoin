// Copyright (c) 2011-2015 The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_OVERVIEWPAGE_H
#define BITCOIN_QT_OVERVIEWPAGE_H

#include "amount.h"
#include "backgroundimage.h"
#include <QPushButton>
#include <QWidget>

class BitcoinGUI;
class ClientModel;
class Header;
class TransactionFilterProxy;
class TxViewDelegate;
class PlatformStyle;
class WalletModel;

namespace Ui {
    class OverviewPage;
}

QT_BEGIN_NAMESPACE
class QModelIndex;
QT_END_NAMESPACE

/** Overview ("home") page widget */
class OverviewPage : public QWidget
{
    Q_OBJECT

public:
    explicit OverviewPage(const PlatformStyle *platformStyle, BitcoinGUI *_gui = 0, QWidget *parent = 0);
    ~OverviewPage();

    void setClientModel(ClientModel *clientModel);
    void setWalletModel(WalletModel *walletModel);
    void showOutOfSyncWarning(bool fShow);

public Q_SLOTS:
    
    void setBalance(const CAmount& balance, const CAmount& unconfirmedBalance, const CAmount& immatureBalance, const CAmount& stake,
                    const CAmount& watchOnlyBalance, const CAmount& watchUnconfBalance, const CAmount& watchImmatureBalance, const CAmount& watchOnlyStake);
    

Q_SIGNALS:
    void transactionClicked(const QModelIndex &index);

private:
    BitcoinGUI *gui;
    Ui::OverviewPage *ui;
    Header *header;
    BackgroundImage *image;
    QPushButton *sendCoinsAction;
    QPushButton *receiveCoinsAction;
    void resizeEvent(QResizeEvent *);
    ClientModel *clientModel;
    WalletModel *walletModel;
    CAmount currentBalance;
    CAmount currentUnconfirmedBalance;
    CAmount currentImmatureBalance;

    CAmount currentStake;
    
    CAmount currentWatchOnlyBalance;
    CAmount currentWatchUnconfBalance;
    CAmount currentWatchImmatureBalance;
    
    CAmount currentWatchOnlyStake;
    

    TxViewDelegate *txdelegate;
    TransactionFilterProxy *filter;

private Q_SLOTS:
    void updateDisplayUnit();
    //void resizeEvent(QResizeEvent *event);
    void handleTransactionClicked(const QModelIndex &index);
    void updateAlerts(const QString &warnings);
    void updateWatchOnlyLabels(bool showWatchOnly);

};

#endif // BITCOIN_QT_OVERVIEWPAGE_H
