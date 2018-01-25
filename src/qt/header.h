// Copyright (c) 2011-2015 The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_QT_HEADER_H
#define BITCOIN_QT_HEADER_H

#include "amount.h"
#include "backgroundimage.h"
#include <QPushButton>
#include <QWidget>

class BitcoinGUI;
class ClientModel;
class TransactionFilterProxy;
class TxViewDelegate;
class PlatformStyle;
class WalletModel;

namespace Ui {
    class fatHeaderWidget;
}

QT_BEGIN_NAMESPACE
class QModelIndex;
QT_END_NAMESPACE

/** Overview ("home") page widget */
class Header : public QWidget
{
    Q_OBJECT

public:
    explicit Header(const PlatformStyle *platformStyle, bool isThin, BitcoinGUI *_gui = 0, QWidget *parent = 0);
    ~Header();

//    void setClientModel(ClientModel *clientModel);
    void setWalletModel(WalletModel *walletModel);
//    void showOutOfSyncWarning(bool fShow);

public Q_SLOTS:
    
    void setBalance(const CAmount& balance, const CAmount& unconfirmedBalance, const CAmount& immatureBalance, const CAmount& stake,
                    const CAmount& watchOnlyBalance, const CAmount& watchUnconfBalance, const CAmount& watchImmatureBalance, const CAmount& watchOnlyStake);

private:
    BitcoinGUI *gui;
    const PlatformStyle *platformStyle;
    Ui::fatHeaderWidget *ui;

    BackgroundImage *image;

//    void resizeEvent(QResizeEvent *);

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
private Q_SLOTS:
    void updateDisplayUnit();
//    //void resizeEvent(QResizeEvent *event);
//    void updateAlerts(const QString &warnings);
    void updateWatchOnlyLabels(bool showWatchOnly);

};

#endif // BITCOIN_QT_OVERVIEWPAGE_H
