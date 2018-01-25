// Copyright (c) 2011-2014 The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#include "transactiondescdialog.h"
#include "ui_transactiondescdialog.h"

#include "transactiontablemodel.h"

#include <QModelIndex>

TransactionDescDialog::TransactionDescDialog(const QModelIndex &idx, QWidget *parent) :
    QDialog(parent),
    ui(new Ui::TransactionDescDialog)
{
    ui->setupUi(this);    this->setWindowFlags(this->windowFlags()& ~Qt::WindowContextHelpButtonHint);

    setWindowTitle(tr("Details for %1").arg(idx.data(TransactionTableModel::TxIDRole).toString()));
    QString desc = idx.data(TransactionTableModel::LongDescriptionRole).toString();
    ui->detailText->setHtml(desc);
}
TransactionDescDialog::TransactionDescDialog(const QSortFilterProxyModel &idx, int row, QWidget *parent) :
    QDialog(parent),
    ui(new Ui::TransactionDescDialog)
{
    ui->setupUi(this);    this->setWindowFlags(this->windowFlags()& ~Qt::WindowContextHelpButtonHint);

    setMinimumWidth(750);
    setWindowTitle(tr("Details for coupon"));
    ui->detailText->setHtml(QString (tr("<i><b><font color='#fff'>  %4: </b></i> %0 <br>"
                                        "<i><b><font color='#fff'>  %5: </b></i> %1 <br>"
                                        "<i><b><font color='#fff'>  %6: </b></i> %2 <br>"
                                        "<i><b><font color='#fff'>  %7: </b></i> %3 <br>")).
                                        arg(idx.data(idx.index(row,3)).toString()).
                                        arg(QString::number(idx.data(idx.index(row,1)).toDouble(),'f',3)).
                                        arg(idx.data(idx.index(row,2)).toString()).
                                        arg(idx.data(idx.index(row,0)).toString()).
                                        arg(idx.headerData(3,Qt::Horizontal).toString()).
                                        arg(idx.headerData(1,Qt::Horizontal).toString()).
                                        arg(idx.headerData(2,Qt::Horizontal).toString()).
                                        arg(idx.headerData(0,Qt::Horizontal).toString()));
}
TransactionDescDialog::~TransactionDescDialog()
{
    delete ui;
}
