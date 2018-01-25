#ifndef SHAREDIALOG_H
#define SHAREDIALOG_H

#include <QDialog>
namespace Ui {
class ShareDialog;
}
class WalletModel;

class ShareDialog : public QDialog
{
    Q_OBJECT

public:
    explicit ShareDialog(WalletModel *wmodel, QWidget *parent = 0);
    void setWalletModel(WalletModel *wmodel);
    ~ShareDialog();
public Q_SLOTS:
    void sendClickedByKey();
private:

    Ui::ShareDialog *ui;
    WalletModel *wm;
};

#endif // DIALOG_H
