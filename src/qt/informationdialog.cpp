#include "informationdialog.h"
#include "ui_informationdialog.h"

InformationDialog::InformationDialog(const QString& information,const QString &Ammount,const QString &key,QWidget *parent) :
    QDialog(parent),
    ui(new Ui::InformationDialog)
{
    ui->setupUi(this);    this->setWindowFlags(this->windowFlags()& ~Qt::WindowContextHelpButtonHint);

    setModal(false);
    if(!key.size()){
        ui->InfKey->hide();
        ui->InfFon->layout()->removeItem(ui->verticalSpacer);
        ui->InfFon->layout()->removeItem(ui->verticalSpacer_3);
        ui->InfMessage->setText(information);
    }
    else{
        ui->InfKey->setText(key);
        ui->InfMessage->setText(information.arg(Ammount));
    }
    resize(this->width(),this->minimumHeight());
}

InformationDialog::~InformationDialog()
{
    delete ui;
}
