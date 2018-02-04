#include "backgroundimage.h"

BackgroundImage::BackgroundImage(const QString &url, QWidget *ptr):
    BackgroundImage(new QPixmap(url),ptr){}
BackgroundImage::BackgroundImage(const QPixmap &im, QWidget *ptr):
    BackgroundImage(new QPixmap(im),ptr){}
BackgroundImage::BackgroundImage(const QImage &im, QWidget *ptr):
    BackgroundImage(QPixmap::fromImage(im),ptr){}
BackgroundImage::BackgroundImage(QWidget *ptr):
    BackgroundImage(NULL,ptr){}
BackgroundImage::BackgroundImage(QPixmap *im,QWidget *ptr):
    QLabel(ptr),
    fixedSize(0,0),
    _policy(fill)
{
    this->setSizePolicy(QSizePolicy::MinimumExpanding,QSizePolicy::MinimumExpanding);
    this->setMinimumSize(0,0);
    img=im;
    _resize();
}
void BackgroundImage::change(QPixmap *im)
{
    if(img)delete img;
    img=im;
    _resize();
}
void BackgroundImage::change(const QString &url)
{
    change(new QPixmap(url));
}
void BackgroundImage::change(const QPixmap &im)
{
    change(new QPixmap(im));
}
void BackgroundImage::change(const QImage &im)
{
    change(QPixmap::fromImage(im));
}
void BackgroundImage::_resize()
{
    if(!img) return;
    switch (_policy) {
    case BackgroundImage::fixed:
        this->setPixmap(img->scaled(fixedSize));
        break;
    case BackgroundImage::horizontal:{
        float praportion=(float)img->height()/img->width();
        this->setPixmap(img->scaled(QSize(this->height()*praportion,this->height())));
        break;
    }
    case BackgroundImage::vertical:{
        float praportion=(float)img->height()/img->width();
        this->setPixmap(img->scaled(QSize(this->width(),this->width()*praportion)));
        break;
    }
    case BackgroundImage::fill:
        this->setPixmap(img->scaled(this->size()));
        break;
    default:
        break;
    }
}
void BackgroundImage::resizeEvent(QResizeEvent *){
    _resize();
}
BackgroundImage::resize_policy BackgroundImage::resizepolicy()const{
    return _policy;
}
void BackgroundImage::setResizepolicy(BackgroundImage::resize_policy policy){
    _policy=policy;
}
QSize BackgroundImage::FixedSize()const{
    return fixedSize;
}
void BackgroundImage::setFixedSize(const QSize &size){
    fixedSize=size;
}
BackgroundImage::~BackgroundImage()
{
    if(img)delete img;
}
