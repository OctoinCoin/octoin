#ifndef BACKGROUNDIMAGE_H
#define BACKGROUNDIMAGE_H
#include <QLabel>
#include <QBitmap>
class BackgroundImage:public QLabel //izobragenie
{
    Q_OBJECT
public:
    /**
     * @brief The resize_policy enum
     * fixed - no scale image
     * horizontal - resize by horizontal size with save proportion.
     * vertical - resize by vertical size with save proportion.
     * fill - resize image with filling free space.
     */
    enum resize_policy{fixed,horizontal,vertical,fill};
private:
    QPixmap *img;
    QSize fixedSize;
    resize_policy _policy;
protected:
    void _resize();
    void resizeEvent(QResizeEvent *);
public:
    explicit  BackgroundImage(const QString&url,QWidget *ptr=0);
    explicit  BackgroundImage(const QImage&im,QWidget *ptr=0);
    explicit  BackgroundImage(const QPixmap&im,QWidget *ptr=0);
    explicit  BackgroundImage(QWidget *ptr=0); //warning this class automaticly deleted images, if you use a QPixmap pointer.
    explicit  BackgroundImage(QPixmap*im,QWidget *ptr=0); //warning this class automaticly deleted images, if you use a QPixmap pointer.
    void change(const QString&url);
    void change(const QImage&im);
    void change(const QPixmap&im);
    void change(QPixmap*im);
    resize_policy resizepolicy()const;
    void setResizepolicy(resize_policy policy= BackgroundImage::fill);
    void setFixedSize(const QSize& size);
    QSize FixedSize()const;
    ~BackgroundImage();
};

#endif // BACKGROUNDIMAGE_H
