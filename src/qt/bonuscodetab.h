#ifndef BONUSCODETAB_H
#define BONUSCODETAB_H

#include "platformstyle.h"
#include <QWidget>
#include "walletmodel.h"
#include "clientmodel.h"
#include "../txmempool.h"
#include "transactionfilterproxy.h"
#include <QStandardItemModel>
namespace Ui {
class BonusCodeTab;
}
class QTableView;
class CBonusinfo;
class BitcoinGUI;
class Header;

class BonusCodeTab : public QWidget
{
    Q_OBJECT

public:
    explicit BonusCodeTab (WalletModel *wmodel, const PlatformStyle *platformStyle, BitcoinGUI *_gui = 0, QWidget *parent = 0);
    void setWalletModel(WalletModel *wmodel);
    void setClientModel(ClientModel *clientModel);
    ~BonusCodeTab();
public Q_SLOTS:
    void updateBonusList();
private:
    void resizeEvent(QResizeEvent*);
    void confirmation(const CBonusinfo &info, const CTransaction &prevtx);
    void tableInit(QTableView*);
    BitcoinGUI *gui;
    Header *header;
    Ui::BonusCodeTab *ui;
    ClientModel *clientModel;
    WalletModel *wmodel;
    const PlatformStyle *platformStyle;
    CWalletTx* findTx(const CScript& script);
private Q_SLOTS:
    void Clicked(QModelIndex);
    void getBonusClick(bool);
    void CreateClick(bool);
};

#endif // BONUSCODETAB_H
