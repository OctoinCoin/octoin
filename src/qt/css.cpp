#include "css.h"
void CSS::ReadCss(QWidget*target,const QString&file){
    QFile f(file);
    if(f.open(QIODevice::ReadOnly)){
        target->setStyleSheet(QLatin1String(f.readAll()));
        f.close();
    }
}
