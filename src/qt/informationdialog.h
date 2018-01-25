#ifndef INFORMATIONDIALOG_H
#define INFORMATIONDIALOG_H

#include <QDialog>

namespace Ui {
class InformationDialog;
}

class InformationDialog : public QDialog
{
    Q_OBJECT

public:
    explicit InformationDialog(const QString& information,const QString &Ammount="",const QString &key="",QWidget *parent = 0);
    ~InformationDialog();

private:
    Ui::InformationDialog *ui;
};

#endif // INFORMATIONDIALOG_H
