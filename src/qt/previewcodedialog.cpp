#include "previewcodedialog.h"
#include "ui_previewcodedialog.h"
#include <QDateTime>
#include <QClipboard>

PreviewCodeDialog::PreviewCodeDialog(const QAbstractItemModel *idx, int row, QWidget *parent) :
    QDialog(parent),
    ui(new Ui::PreviewCodeDialog)
{
    ui->setupUi(this);    this->setWindowFlags(this->windowFlags()& ~Qt::WindowContextHelpButtonHint);
    ui->AmountFirst->setText(idx->headerData(1,Qt::Horizontal).toString()+":");
    ui->CodeFirst->setText(idx->headerData(3,Qt::Horizontal).toString()+":");
    ui->HashFirst->setText(idx->headerData(2,Qt::Horizontal).toString()+":");
    ui->DateFirst->setText(idx->headerData(0,Qt::Horizontal).toString()+":");

    ui->AmountSecond->setText(QString::number(idx->data(idx->index(row,1)).toDouble(),'f',3));
    ui->CodeSecond->setText(idx->data(idx->index(row,3)).toString());
    ui->HashSecond->setText(idx->data(idx->index(row,2)).toString());
    QLocale l(QLocale::system());
    ui->DateSecond->setText(idx->data(idx->index(row,0)).toDateTime().toString(l.dateTimeFormat(QLocale::NarrowFormat)));
    connect(ui->PreviewCodeDialogCopy,SIGNAL(clicked(bool)),this,SLOT(onCopyClicked(bool)));
}
void PreviewCodeDialog::onCopyClicked(bool){
    QApplication::clipboard()->setText(ui->CodeSecond->text());
    this->close();
}
PreviewCodeDialog::~PreviewCodeDialog()
{
    delete ui;
}
