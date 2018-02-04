#ifndef CSS_H
#define CSS_H
#include <QWidget>
#include <QFile>

class CSS
{
public:
    static void ReadCss(QWidget* target,const QString& cssFile);
};

#endif // CSS_H
