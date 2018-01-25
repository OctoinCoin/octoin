#ifndef PREVIEWCODEDIALOG_H
#define PREVIEWCODEDIALOG_H

#include <QDialog>
#include <QTableView>
#include <QAbstractItemModel>
namespace Ui {
class PreviewCodeDialog;
}

class PreviewCodeDialog : public QDialog
{
    Q_OBJECT

public:
    explicit PreviewCodeDialog(const QAbstractItemModel* idx,int row,QWidget *parent = 0);
    ~PreviewCodeDialog();

private:
    Ui::PreviewCodeDialog *ui;
private Q_SLOTS:
    void onCopyClicked(bool);

};

#endif // PREVIEWCODEDIALOG_H
