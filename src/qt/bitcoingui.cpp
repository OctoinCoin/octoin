// Copyright (c) 2011-2015 The Bitcoin Core developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#if defined(HAVE_CONFIG_H)
#include "config/bitcoin-config.h"
#endif

#include "bitcoingui.h"

#include "bitcoinunits.h"
#include "clientmodel.h"
#include "guiconstants.h"
#include "guiutil.h"
#include "networkstyle.h"
#include "notificator.h"
#include "openuridialog.h"
#include "optionsdialog.h"
#include "optionsmodel.h"
#include "platformstyle.h"
#include "rpcconsole.h"
#include "utilitydialog.h"
#include "backgroundimage.h"
#ifdef ENABLE_WALLET
#include "walletframe.h"
#include "walletmodel.h"
#endif // ENABLE_WALLET

#ifdef Q_OS_MAC
#include "macdockiconhandler.h"
#endif

#include "init.h"
#include "ui_interface.h"
#include "../util.h"
#include "css.h"
#include "../miner.h"
#include "../wallet/wallet.h"

#include <iostream>

#include <QAction>
#include <QApplication>
#include <QDateTime>
#include <QDesktopWidget>
#include <QDragEnterEvent>
#include <QLabel>
#include <QListWidget>
#include <QMenuBar>
#include <QMessageBox>
#include <QMimeData>
#include <QProgressBar>
#include <QProgressDialog>
#include <QSettings>
#include <QShortcut>
#include <QStackedWidget>
#include <QStatusBar>
#include <QStyle>
#include <QTimer>
#include <QToolBar>
#include <QVBoxLayout>
#include <QFontDatabase>
#include <QSettings>
#include "ShareDialog.h"
#if QT_VERSION < 0x050000
#include <QTextDocument>
#include <QUrl>
#else
#include <QUrlQuery>
#endif
#include <QNetworkRequest>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QJsonArray>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonParseError>

#if ENABLE_ZMQ
#include "zmq/zmqconfig.h"
#endif

#include <boost/asio.hpp>
#include <boost/asio/ssl.hpp>
#include <boost/thread.hpp>

const std::string BitcoinGUI::DEFAULT_UIPLATFORM =
#if defined(Q_OS_MAC)
        "macosx"
#elif defined(Q_OS_WIN)
        "windows"
#else
        "other"
#endif
        ;

const QString BitcoinGUI::DEFAULT_WALLET = "~Default";

BitcoinGUI::BitcoinGUI(const PlatformStyle *platformStyle, const NetworkStyle *networkStyle, QWidget *parent) :
    QMainWindow(parent),
    clientModel(0),
    walletFrame(0),
    unitDisplayControl(0),
    labelEncryptionIcon(0),
    labelConnectionsIcon(0),
    labelBlocksIcon(0),
    progressBarLabel(0),
    progressBar(0),
    progressDialog(0),
    appMenuBar(0),
    overviewAction(0),
    historyAction(0),
    quitAction(0),
    sendCoinsAction(0),
    sendCoinsMenuAction(0),
    usedSendingAddressesAction(0),
    usedReceivingAddressesAction(0),
    signMessageAction(0),
    verifyMessageAction(0),
    aboutAction(0),
    receiveCoinsAction(0),
    receiveCoinsMenuAction(0),
    optionsAction(0),
    toggleHideAction(0),
    encryptWalletAction(0),
    backupWalletAction(0),
    changePassphraseAction(0),
    aboutQtAction(0),
    openRPCConsoleAction(0),
    openAction(0),
    showHelpMessageAction(0),
    trayIcon(0),
    trayIconMenu(0),
    notificator(0),
    rpcConsole(0),
    helpMessageDialog(0),
    prevBlocks(0),
    spinnerFrame(0),
    mainMenu(0),
    shareDialog(0),
    restoreWallet(0),
    lock(0),
    unlock(0),
    mining(0),
    update(0),
    #ifdef ENABLE_LIGHTNING
    lightning(0),
    #endif
    platformStyle(platformStyle)
{
    QRect desctop=QApplication::desktop()->screenGeometry();
    QSize size(desctop.width()*0.4,desctop.height()*0.4);
    GUIUtil::restoreWindowGeometry("nWindow",size, this);

    QString windowTitle = tr(PACKAGE_NAME) + " - ";
#ifdef ENABLE_WALLET
    /* if compiled with wallet support, -disablewallet can still disable the wallet */
    enableWallet = !GetBoolArg("-disablewallet", false);
#else
    enableWallet = false;
#endif // ENABLE_WALLET
    if(enableWallet)
    {
        windowTitle += tr("Wallet");
    } else {
        windowTitle += tr("Node");
    }
    windowTitle += " " + networkStyle->getTitleAddText();
#ifndef Q_OS_MAC
    QApplication::setWindowIcon(networkStyle->getTrayAndWindowIcon());
    setWindowIcon(networkStyle->getTrayAndWindowIcon());
#else
    MacDockIconHandler::instance()->setIcon(networkStyle->getAppIcon());
#endif
    setWindowTitle(windowTitle);

#if defined(Q_OS_MAC) && QT_VERSION < 0x050000
    // This property is not implemented in Qt 5. Setting it has no effect.
    // A replacement API (QtMacUnifiedToolBar) is available in QtMacExtras.
    setUnifiedTitleAndToolBarOnMac(true);
#endif

    rpcConsole = new RPCConsole(platformStyle, 0);
    CSS::ReadCss(rpcConsole,":/style/WalletStyle");
    helpMessageDialog = new HelpMessageDialog(this, false);
#ifdef ENABLE_WALLET
    if(enableWallet)
    {
        /** Create wallet frame and make it the central widget */
        walletFrame = new WalletFrame(platformStyle, this);
        setCentralWidget(walletFrame);
    } else
#endif // ENABLE_WALLET
    {
        /* When compiled without wallet or -disablewallet is provided,
         * the central widget is the rpc console.
         */
        setCentralWidget(rpcConsole);
    }

    // Accept D&D of URIs
    setAcceptDrops(true);

    // Create actions for the toolbar, menu bar and tray/dock icon
    // Needs walletFrame to be initialized
    createActions();

    // Create application menu bar
    createMenuBar();

    // Create the toolbars
    createToolBars();

    // Create system tray icon and notification
    createTrayIcon(networkStyle);

    // Create status bar
    statusBar();
    statusBar()->setMaximumHeight(50);
    statusBar()->setMinimumHeight(50);
#ifdef Q_OS_WIN
    QFont font("sans-serif");
    font.setStyleHint(QFont::SansSerif);
    statusBar()->setFont(font);
#endif
    // Disable size grip because it looks ugly and nobody needs it
    statusBar()->setSizeGripEnabled(false);

    // Status bar notification icons
    QFrame *frameBlocks = new QFrame();
    frameBlocks->setContentsMargins(0,0,0,0);
    frameBlocks->setSizePolicy(QSizePolicy::Fixed, QSizePolicy::Preferred);
    QHBoxLayout *frameBlocksLayout = new QHBoxLayout(frameBlocks);
    frameBlocksLayout->setContentsMargins(6,0,6,0);
    frameBlocksLayout->setSpacing(3);
    unitDisplayControl = new UnitDisplayStatusBarControl(platformStyle);
    unitDisplayControl->setObjectName("unitDisplayControl");
    if(COIN_MODE!=DYNAMIC_COIN_MODE)
        unitDisplayControl->hide();
    labelEncryptionIcon = new QLabel();
    labelConnectionsIcon = new QLabel();
    labelBlocksIcon = new QLabel();
    if(enableWallet)
    {
        frameBlocksLayout->addStretch();
        unitDisplayControl->setMargin(3);
        frameBlocksLayout->addWidget(unitDisplayControl);
        frameBlocksLayout->addStretch();
        labelEncryptionIcon->setMargin(3);
        frameBlocksLayout->addWidget(labelEncryptionIcon);
    }
    frameBlocksLayout->addStretch();
    labelConnectionsIcon->setMargin(3);
    frameBlocksLayout->addWidget(labelConnectionsIcon);
    frameBlocksLayout->addStretch();
    labelBlocksIcon->setMargin(3);
    frameBlocksLayout->addWidget(labelBlocksIcon);
    frameBlocksLayout->addStretch();
    QLabel* labelLogo = new QLabel(this);
    labelLogo->setPixmap(QIcon(":/icons/logoThin").pixmap(38, 22));
    labelLogo->setMargin(10);
    frameBlocksLayout->addWidget(labelLogo);
    frameBlocksLayout->addStretch();

    // Progress bar and label for blocks download
    progressBarLabel = new QLabel();
    progressBarLabel->setObjectName("progressBarLabel");
    progressBarLabel->setVisible(false);
    progressBar = new GUIUtil::ProgressBar();
    progressBar->setAlignment(Qt::AlignCenter);
    progressBar->setVisible(false);

    statusBar()->addWidget(progressBarLabel);
    statusBar()->addWidget(progressBar);
    statusBar()->addPermanentWidget(frameBlocks);

    // Install event filter to be able to catch status tip events (QEvent::StatusTip)
    this->installEventFilter(this);

    // Initially wallet actions should be disabled
    setWalletActionsEnabled(false);

    // Subscribe to notifications from core
    subscribeToCoreSignals();

    checkUpdate(false);
}

BitcoinGUI::~BitcoinGUI()
{
    // Unsubscribe from notifications from core
    unsubscribeFromCoreSignals();

    GUIUtil::saveWindowGeometry("nWindow", this);
    if(trayIcon) // Hide tray icon, as deleting will let it linger until quit (on Ubuntu)
        trayIcon->hide();
#ifdef Q_OS_MAC
    delete appMenuBar;
    MacDockIconHandler::cleanup();
#endif

    delete rpcConsole;
}

void BitcoinGUI::createActions()
{
    QActionGroup *tabGroup = new QActionGroup(this);
    overviewAction = new QAction(platformStyle->SingleColorIcon(":/icons/overview",QColor::fromRgb(/*0xff,0xff,0xff*/0x17,0x8f,0xc1)), tr("&Overview"), this);

    overviewAction->setStatusTip(tr("Show general overview of wallet"));
    overviewAction->setToolTip(overviewAction->statusTip());
    overviewAction->setCheckable(true);
    overviewAction->setShortcut(QKeySequence(Qt::ALT + Qt::Key_1));
    overviewAction->setObjectName("overviewMenuButton");
    tabGroup->addAction(overviewAction);

    sendCoinsAction = new QAction(platformStyle->SingleColorIcon(":/icons/send",QColor::fromRgb(0xbc,0xe8,0xe5)), tr("&Send"), this);
    sendCoinsAction->setStatusTip(tr("Send coins to a OctoinCoin address"));
    sendCoinsAction->setToolTip(sendCoinsAction->statusTip());
    sendCoinsAction->setCheckable(true);
    sendCoinsAction->setShortcut(QKeySequence(Qt::ALT + Qt::Key_2));
    tabGroup->addAction(sendCoinsAction);

    bonusCodeTab= new QAction(platformStyle->SingleColorIcon(":/icons/r_coupon",QColor::fromRgb(/*0xbc,0xe8,0xe5*/0x6c,0x70,0x81)),tr("Redeem codes"),this);
    bonusCodeTab->setStatusTip(tr("Browse page of bonus codes"));
    bonusCodeTab->setToolTip(bonusCodeTab->statusTip());
    bonusCodeTab->setCheckable(true);
    bonusCodeTab->setShortcut(QKeySequence(Qt::ALT + Qt::Key_5));
    bonusCodeTab->setObjectName("bonusMenuButton");
    tabGroup->addAction(bonusCodeTab);

    sendCoinsMenuAction = new QAction(platformStyle->TextColorIcon(":/icons/send"), sendCoinsAction->text(), this);
    sendCoinsMenuAction->setStatusTip(sendCoinsAction->statusTip());
    sendCoinsMenuAction->setToolTip(sendCoinsMenuAction->statusTip());

    receiveCoinsAction = new QAction(platformStyle->SingleColorIcon(":/icons/receiving_addresses",QColor::fromRgb(0xbc,0xe8,0xe5)), tr("&Receive"), this);
    receiveCoinsAction->setStatusTip(tr("Request payments (generates QR codes and octoin: URIs)"));
    receiveCoinsAction->setToolTip(receiveCoinsAction->statusTip());
    receiveCoinsAction->setCheckable(true);
    receiveCoinsAction->setShortcut(QKeySequence(Qt::ALT + Qt::Key_3));
    tabGroup->addAction(receiveCoinsAction);

    receiveCoinsMenuAction = new QAction(platformStyle->TextColorIcon(":/icons/receiving_addresses"), receiveCoinsAction->text(), this);
    receiveCoinsMenuAction->setStatusTip(receiveCoinsAction->statusTip());
    receiveCoinsMenuAction->setToolTip(receiveCoinsMenuAction->statusTip());

    historyAction = new QAction(platformStyle->SingleColorIcon(":/icons/history",QColor::fromRgb(/*0xbc,0xe8,0xe5*/0x6c,0x70,0x81)), tr("&Transactions"), this);
    historyAction->setStatusTip(tr("Browse transaction history"));
    historyAction->setToolTip(historyAction->statusTip());
    historyAction->setCheckable(true);
    historyAction->setShortcut(QKeySequence(Qt::ALT + Qt::Key_4));
    historyAction->setObjectName("historyMenuButton");
    tabGroup->addAction(historyAction);

    mainMenu=new QPushButton(/*platformStyle->SingleColorIcon*/QIcon(":/icons/about"/*,Qt::white*/),"",this);
    mainMenu->setObjectName("mainMenuButton");


#ifdef ENABLE_WALLET
    // These showNormalIfMinimized are needed because Send Coins and Receive Coins
    // can be triggered from the tray menu, and need to show the GUI to be useful.
    connect(mainMenu,SIGNAL(clicked(bool)),this,SLOT(callMenu()));
    connect(bonusCodeTab,SIGNAL(triggered(bool)),this,SLOT(gotoBonusCodes()));
    connect(overviewAction, SIGNAL(triggered()), this, SLOT(showNormalIfMinimized()));
    connect(overviewAction, SIGNAL(triggered()), this, SLOT(gotoOverviewPage()));
    connect(sendCoinsAction, SIGNAL(triggered()), this, SLOT(showNormalIfMinimized()));
    connect(sendCoinsAction, SIGNAL(triggered()), this, SLOT(gotoSendCoinsPage()));
    connect(sendCoinsMenuAction, SIGNAL(triggered()), this, SLOT(showNormalIfMinimized()));
    connect(sendCoinsMenuAction, SIGNAL(triggered()), this, SLOT(gotoSendCoinsPage()));
    connect(receiveCoinsAction, SIGNAL(triggered()), this, SLOT(showNormalIfMinimized()));
    connect(receiveCoinsAction, SIGNAL(triggered()), this, SLOT(gotoReceiveCoinsPage()));
    connect(receiveCoinsMenuAction, SIGNAL(triggered()), this, SLOT(showNormalIfMinimized()));
    connect(receiveCoinsMenuAction, SIGNAL(triggered()), this, SLOT(gotoReceiveCoinsPage()));
    connect(historyAction, SIGNAL(triggered()), this, SLOT(showNormalIfMinimized()));
    connect(historyAction, SIGNAL(triggered()), this, SLOT(gotoHistoryPage()));
#endif // ENABLE_WALLET

    quitAction = new QAction(platformStyle->SingleColorIcon(":/icons/quit", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("E&xit"), this);
    quitAction->setStatusTip(tr("Quit application"));
    quitAction->setShortcut(QKeySequence(Qt::CTRL + Qt::Key_Q));
    quitAction->setMenuRole(QAction::QuitRole);
    optionsAction = new QAction(platformStyle->SingleColorIcon(":/icons/options", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("&Options"), this);
    optionsAction->setStatusTip(tr("Modify configuration options for %1").arg(tr(PACKAGE_NAME)));
    optionsAction->setMenuRole(QAction::PreferencesRole);
    optionsAction->setEnabled(false);
    toggleHideAction = new QAction(platformStyle->SingleColorIcon(":/icons/about", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("&Show / Hide"), this);
    toggleHideAction->setStatusTip(tr("Show or hide the main Window"));

    encryptWalletAction = new QAction(platformStyle->SingleColorIcon(":/icons/lock_closed", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("&Encrypt Wallet"), this);
    encryptWalletAction->setStatusTip(tr("Encrypt the private keys that belong to your wallet"));
    encryptWalletAction->setCheckable(true);
    backupWalletAction = new QAction(platformStyle->SingleColorIcon(":/icons/filesave", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("&Backup Wallet"), this);
    backupWalletAction->setStatusTip(tr("Backup wallet to another location"));
    changePassphraseAction = new QAction(platformStyle->SingleColorIcon(":/icons/key", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("&Change Passphrase"), this);
    changePassphraseAction->setStatusTip(tr("Change the passphrase used for wallet encryption"));
    signMessageAction = new QAction(platformStyle->SingleColorIcon(":/icons/edit", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("Sign &message"), this);
    signMessageAction->setStatusTip(tr("Sign messages with your OctoinCoin addresses to prove you own them"));
    verifyMessageAction = new QAction(platformStyle->SingleColorIcon(":/icons/verify", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("&Verify message"), this);
    verifyMessageAction->setStatusTip(tr("Verify messages to ensure they were signed with specified OctoinCoin addresses"));
    openRPCConsoleAction = new QAction(platformStyle->SingleColorIcon(":/icons/debugwindow", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("&Debug window"), this);
    openRPCConsoleAction->setStatusTip(tr("Open debugging and diagnostic console"));
    // initially disable the debug window menu item
    openRPCConsoleAction->setEnabled(false);

    usedSendingAddressesAction = new QAction(platformStyle->SingleColorIcon(":/icons/address-book", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("&Sending addresses"), this);
    usedSendingAddressesAction->setStatusTip(tr("Show the list of used sending addresses and labels"));
    usedReceivingAddressesAction = new QAction(platformStyle->SingleColorIcon(":/icons/address-book", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("&Receiving addresses"), this);
    usedReceivingAddressesAction->setStatusTip(tr("Show the list of used receiving addresses and labels"));

    openAction = new QAction(platformStyle->SingleColorIcon(":/icons/open", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("Open &URI"), this);
    openAction->setStatusTip(tr("Open a octoin: URI or payment request"));

    showHelpMessageAction = new QAction(platformStyle->SingleColorIcon(":/icons/info", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("&Command-line options"), this);
    showHelpMessageAction->setMenuRole(QAction::NoRole);
    showHelpMessageAction->setStatusTip(tr("Show the %1 help message to get a list with possible OctoinCoin command-line options").arg(tr(PACKAGE_NAME)));

/********************************************OCC_COIN*************************************************/

    shareDialog = new QAction(platformStyle->SingleColorIcon(":/icons/new", QColor::fromRgb(0xb7,0xb7,0xb7)), tr("&Money share"), this);
    restoreWallet = new QAction(platformStyle->SingleColorIcon(":/icons/editcopy", QColor::fromRgb(0xb7,0xb7,0xb7)),tr("Restore Wallet"),this);
    lock = new QAction(platformStyle->SingleColorIcon(":/icons/lock_closed", QColor::fromRgb(0xb7,0xb7,0xb7)),tr("Lock Wallet"),this);
    unlock = new QAction(platformStyle->SingleColorIcon(":/icons/lock_open", QColor::fromRgb(0xb7,0xb7,0xb7)),tr("Unlock Wallet"),this);
    mining = new QAction(platformStyle->SingleColorIcon(":/icons/tx_mined", QColor::fromRgb(0xb7,0xb7,0xb7)),tr("mining"),this);

    update = new QAction(platformStyle->SingleColorIcon(":/movies/spinner-000", QColor::fromRgb(0xb7,0xb7,0xb7)),tr("Check for updates"),this);

#ifdef ENABLE_LIGHTNING
    lightning = new QAction(platformStyle->SingleColorIcon(":/icons/r_coupon", QColor::fromRgb(0xb7,0xb7,0xb7)),tr("Lightning"),this);
#endif

/*****************************************************************************************************/

    showHelpMessageAction->setStatusTip(tr("Return to the previously made backup copy of the wallet.").arg(tr(PACKAGE_NAME)));

    connect(shareDialog,SIGNAL(triggered(bool)),this,SLOT(shareDialogClicked()));
    connect(mining,SIGNAL(triggered(bool)),SLOT(miningStateChange()));
    connect(update,SIGNAL(triggered()),SLOT(checkUpdate()));

#ifdef ENABLE_LIGHTNING
    connect(lightning,SIGNAL(triggered()),SLOT(startLightning()));
#endif


    connect(quitAction, SIGNAL(triggered()), qApp, SLOT(quit()));
    connect(optionsAction, SIGNAL(triggered()), this, SLOT(optionsClicked()));
    connect(toggleHideAction, SIGNAL(triggered()), this, SLOT(toggleHidden()));
    connect(showHelpMessageAction, SIGNAL(triggered()), this, SLOT(showHelpMessageClicked()));
    connect(openRPCConsoleAction, SIGNAL(triggered()), this, SLOT(showDebugWindow()));
    // prevents an open debug window from becoming stuck/unusable on client shutdown
    connect(quitAction, SIGNAL(triggered()), rpcConsole, SLOT(hide()));

#ifdef ENABLE_WALLET
    if(walletFrame)
    {
        connect(encryptWalletAction, SIGNAL(triggered(bool)), walletFrame, SLOT(encryptWallet(bool)));
        connect(lock, SIGNAL(triggered(bool)), walletFrame, SLOT(LockWallet()));
        connect(unlock, SIGNAL(triggered(bool)), walletFrame, SLOT(UnlockWallet()));
        connect(backupWalletAction, SIGNAL(triggered()), walletFrame, SLOT(backupWallet()));
        connect(restoreWallet, SIGNAL(triggered()), walletFrame, SLOT(restoreWallet()));
        connect(changePassphraseAction, SIGNAL(triggered()), walletFrame, SLOT(changePassphrase()));
        connect(signMessageAction, SIGNAL(triggered()), this, SLOT(gotoSignMessageTab()));
        connect(verifyMessageAction, SIGNAL(triggered()), this, SLOT(gotoVerifyMessageTab()));
        connect(usedSendingAddressesAction, SIGNAL(triggered()), walletFrame, SLOT(usedSendingAddresses()));
        connect(usedReceivingAddressesAction, SIGNAL(triggered()), walletFrame, SLOT(usedReceivingAddresses()));
        connect(openAction, SIGNAL(triggered()), this, SLOT(openClicked()));
    }
#endif // ENABLE_WALLET

    new QShortcut(QKeySequence(Qt::CTRL + Qt::SHIFT + Qt::Key_C), this, SLOT(showDebugWindowActivateConsole()));
    new QShortcut(QKeySequence(Qt::CTRL + Qt::SHIFT + Qt::Key_D), this, SLOT(showDebugWindow()));
}

void BitcoinGUI::createMenuBar()
{
#ifdef Q_OS_MAC
    // Create a decoupled menu bar on Mac which stays even if the window is closed
    appMenuBar = new QMenuBar();
#else
    // Get the main window's menu bar on other platforms
    appMenuBar = menuBar();
#endif
    appMenuBar->hide();
    appMenuBar->setFont(GUIUtil::fixedPitchFont());
    // Configure the menus
    QMenu *file = appMenuBar->addMenu(tr("&File"));

    if(walletFrame)
    {
        file->addAction(openAction);
#ifdef ENABLE_LIGHTNING
        file->addAction(lightning);
#endif
        file->addAction(backupWalletAction);
        file->addAction(restoreWallet);
        file->addAction(signMessageAction);
        file->addAction(verifyMessageAction);
        file->addAction(shareDialog);
        file->addSeparator();
        file->addAction(usedSendingAddressesAction);
        file->addAction(usedReceivingAddressesAction);
        file->addSeparator();
    }
    file->addAction(quitAction);
    QMenu *settings = appMenuBar->addMenu(tr("&Settings"));
    if(walletFrame)
    {
        settings->addAction(mining);
        settings->addSeparator();
        settings->addAction(encryptWalletAction);
        settings->addAction(changePassphraseAction);
        settings->addSeparator();
        settings->addAction(lock);
        settings->addAction(unlock);
        settings->addSeparator();
    }
    settings->addAction(optionsAction);
    QMenu *help = appMenuBar->addMenu(tr("&Help"));
    help->addAction(update);
    if(walletFrame)
    {
        help->addAction(openRPCConsoleAction);
    }
    help->addAction(showHelpMessageAction);
    help->addSeparator();
    appMenuBar->setFont(GUIUtil::fixedPitchFont());
    settings->setFont(GUIUtil::fixedPitchFont());
    file->setFont(GUIUtil::fixedPitchFont());
    help->setFont(GUIUtil::fixedPitchFont());
}

void BitcoinGUI::shareDialogClicked(){
    walletFrame->gotoShareDialog();
}

void BitcoinGUI::miningStateRefresh(){
    mining->setText((fStakeRun)?tr("Stop mining"):tr("Start mining"));
}

void BitcoinGUI::miningStateChange(){

    if(walletModel->getEncryptionStatus() == WalletModel::Locked &&
       QMessageBox::Yes == QMessageBox::question(this,tr("Start mining"),tr(
                                                "Wallet must be unlocked to stake. "
                                                "Do you want to unlock your wallet?")))
    {
        walletFrame->UnlockWallet();
    }

    if(walletModel->getEncryptionStatus()==WalletModel::Locked)
        return;

    fStakeRun = !fStakeRun;

    QSettings cfg;
    cfg.setValue("Stake",fStakeRun);

    StakeBitcoins(fStakeRun,pwalletMain);

    miningStateRefresh();
}

void BitcoinGUI::createToolBars()
{
    if(walletFrame)
    {
        QToolBar *toolbar = new QToolBar(tr("Tabs toolbar"));
        toolbar->setOrientation(Qt::Vertical);
        this->setContextMenuPolicy(Qt::NoContextMenu);
        toolbar->setContextMenuPolicy(Qt::NoContextMenu);
        toolbar->setIconSize(QSize(38,38));
        addToolBar(Qt::LeftToolBarArea, toolbar);
        toolbar->setToolButtonStyle(Qt::ToolButtonTextUnderIcon);
        toolbar->setMovable(false);

        QWidget * space;

        space=new QWidget(this);
        space->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
        toolbar->addWidget(space);

        toolbar->addWidget(mainMenu);
        space=new QWidget(this);
        space->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
        toolbar->addWidget(space);

        QFrame *line=new QFrame();
        line->setFrameShape(QFrame::HLine);
        toolbar->addWidget(line);

        space=new QWidget(this);
        space->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
        toolbar->addWidget(space);

        //overviewAction->
        toolbar->addAction(overviewAction);
        space=new QWidget(this);
        space->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
        toolbar->addWidget(space);
        line=new QFrame();
        line->setFrameShape(QFrame::HLine);
        toolbar->addWidget(line);


        space=new QWidget(this);
        space->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
        toolbar->addWidget(space);

        toolbar->addAction(historyAction);
        space=new QWidget(this);
        space->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
        toolbar->addWidget(space);
        line=new QFrame();
        line->setFrameShape(QFrame::HLine);
        toolbar->addWidget(line);
//

//        toolbar->addAction(sendCoinsAction);
//        space=new QWidget(this);
//        space->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
//        toolbar->addWidget(space);
//        line=new QFrame();
//        line->setFrameShape(QFrame::HLine);
//        toolbar->addWidget(line);

//        toolbar->addAction(receiveCoinsAction);
//        space=new QWidget(this);
//        space->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
//        toolbar->addWidget(space);
//        line=new QFrame();
//        line->setFrameShape(QFrame::HLine);
//        toolbar->addWidget(line);

//
        space=new QWidget(this);
        space->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
        toolbar->addWidget(space);

        toolbar->addAction(bonusCodeTab);
        space=new QWidget(this);
        space->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
        toolbar->addWidget(space);
        //space->setSizePolicy(QSizePolicy::Fixed,QSizePolicy::Fixed);
        //space->resize(25,25);
        overviewAction->setChecked(true);
    }
}

void BitcoinGUI::setClientModel(ClientModel *clientModel)
{
    this->clientModel = clientModel;
    if(clientModel)
    {
        // Create system tray menu (or setup the dock menu) that late to prevent users from calling actions,
        // while the client has not yet fully loaded
        createTrayIconMenu();

        // Keep up to date with client
        setNumConnections(clientModel->getNumConnections());
        connect(clientModel, SIGNAL(numConnectionsChanged(int)), this, SLOT(setNumConnections(int)));

        setNumBlocks(clientModel->getNumBlocks(), clientModel->getLastBlockDate(), clientModel->getVerificationProgress(NULL), false);
        connect(clientModel, SIGNAL(numBlocksChanged(int,QDateTime,double,bool)), this, SLOT(setNumBlocks(int,QDateTime,double,bool)));

        // Receive and report messages from client model
        connect(clientModel, SIGNAL(message(QString,QString,unsigned int)), this, SLOT(message(QString,QString,unsigned int)));

        // Show progress dialog
        connect(clientModel, SIGNAL(showProgress(QString,int)), this, SLOT(showProgress(QString,int)));

        rpcConsole->setClientModel(clientModel);
#ifdef ENABLE_WALLET
        if(walletFrame)
        {
            walletFrame->setClientModel(clientModel);
        }
#endif // ENABLE_WALLET
        unitDisplayControl->setOptionsModel(clientModel->getOptionsModel());
        
        OptionsModel* optionsModel = clientModel->getOptionsModel();
        if(optionsModel)
        {
            // be aware of the tray icon disable state change reported by the OptionsModel object.
            connect(optionsModel,SIGNAL(hideTrayIconChanged(bool)),this,SLOT(setTrayIconVisible(bool)));
        
            // initialize the disable state of the tray icon with the current value in the model.
            setTrayIconVisible(optionsModel->getHideTrayIcon());
        }
    } else {
        // Disable possibility to show main window via action
        toggleHideAction->setEnabled(false);
        if(trayIconMenu)
        {
            // Disable context menu on tray icon
            trayIconMenu->clear();
        }
    }
}

#ifdef ENABLE_WALLET
bool BitcoinGUI::addWallet(const QString& name, WalletModel *walletModel)
{
    if(!walletFrame)
        return false;
    setWalletActionsEnabled(true);
    this->walletModel=walletModel;
    return walletFrame->addWallet(name, walletModel);
}

bool BitcoinGUI::setCurrentWallet(const QString& name)
{
    if(!walletFrame)
        return false;
    return walletFrame->setCurrentWallet(name);
}

void BitcoinGUI::removeAllWallets()
{
    if(!walletFrame)
        return;
    setWalletActionsEnabled(false);
    walletFrame->removeAllWallets();
}
#endif // ENABLE_WALLET

void BitcoinGUI::setWalletActionsEnabled(bool enabled)
{
    bonusCodeTab->setEnabled(enabled);
    overviewAction->setEnabled(enabled);
    sendCoinsAction->setEnabled(enabled);
    sendCoinsMenuAction->setEnabled(enabled);
    receiveCoinsAction->setEnabled(enabled);
    receiveCoinsMenuAction->setEnabled(enabled);
    historyAction->setEnabled(enabled);
    encryptWalletAction->setEnabled(enabled);
    backupWalletAction->setEnabled(enabled);
    changePassphraseAction->setEnabled(enabled);
    signMessageAction->setEnabled(enabled);
    verifyMessageAction->setEnabled(enabled);
    usedSendingAddressesAction->setEnabled(enabled);
    usedReceivingAddressesAction->setEnabled(enabled);
    openAction->setEnabled(enabled);
}

void BitcoinGUI::createTrayIcon(const NetworkStyle *networkStyle)
{
#ifndef Q_OS_MAC
    trayIcon = new QSystemTrayIcon(this);
    QString toolTip = tr("%1 client").arg(tr(PACKAGE_NAME)) + " " + networkStyle->getTitleAddText();
    trayIcon->setToolTip(toolTip);
    trayIcon->setIcon(networkStyle->getTrayAndWindowIcon());
    trayIcon->hide();
#endif

    notificator = new Notificator(QApplication::applicationName(), trayIcon, this);
}

void BitcoinGUI::createTrayIconMenu()
{
#ifndef Q_OS_MAC
    // return if trayIcon is unset (only on non-Mac OSes)
    if (!trayIcon)
        return;

    trayIconMenu = new QMenu(this);
    trayIconMenu->setFont(GUIUtil::fixedPitchFont());
    trayIcon->setContextMenu(trayIconMenu);

    connect(trayIcon, SIGNAL(activated(QSystemTrayIcon::ActivationReason)),
            this, SLOT(trayIconActivated(QSystemTrayIcon::ActivationReason)));
#else
    // Note: On Mac, the dock icon is used to provide the tray's functionality.
    MacDockIconHandler *dockIconHandler = MacDockIconHandler::instance();
    dockIconHandler->setMainWindow((QMainWindow *)this);
    trayIconMenu = dockIconHandler->dockMenu();
#endif

    // Configuration of the tray icon (or dock icon) icon menu
    trayIconMenu->addAction(toggleHideAction);
    trayIconMenu->addSeparator();
    trayIconMenu->addAction(sendCoinsMenuAction);
    trayIconMenu->addAction(receiveCoinsMenuAction);
    trayIconMenu->addSeparator();
    trayIconMenu->addAction(signMessageAction);
    trayIconMenu->addAction(verifyMessageAction);
    trayIconMenu->addSeparator();
    trayIconMenu->addAction(optionsAction);
    trayIconMenu->addAction(openRPCConsoleAction);
#ifndef Q_OS_MAC // This is built-in on Mac
    trayIconMenu->addSeparator();
    trayIconMenu->addAction(quitAction);
#endif
}

#ifndef Q_OS_MAC
void BitcoinGUI::trayIconActivated(QSystemTrayIcon::ActivationReason reason)
{
    if(reason == QSystemTrayIcon::Trigger)
    {
        // Click on system tray icon triggers show/hide of the main window
        toggleHidden();
    }
}
#endif

void BitcoinGUI::optionsClicked()
{
    if(!clientModel || !clientModel->getOptionsModel())
        return;

    OptionsDialog dlg(this, enableWallet);
    dlg.setModel(clientModel->getOptionsModel());
    dlg.exec();
}
void BitcoinGUI::aboutClicked()
{
    if(!clientModel)
        return;

    HelpMessageDialog dlg(this, true);
    dlg.exec();
}

void BitcoinGUI::showDebugWindow()
{
    rpcConsole->showNormal();
    rpcConsole->show();
    rpcConsole->raise();
    rpcConsole->activateWindow();
}

void BitcoinGUI::showDebugWindowActivateConsole()
{
    rpcConsole->setTabFocus(RPCConsole::TAB_CONSOLE);
    showDebugWindow();
}

void BitcoinGUI::showHelpMessageClicked()
{
    helpMessageDialog->show();
}

#ifdef ENABLE_WALLET
void BitcoinGUI::openClicked()
{
    OpenURIDialog dlg(this);
    if(dlg.exec())
    {
        Q_EMIT receivedURI(dlg.getURI());
    }
}
void BitcoinGUI::checedTabChanged(){
    bonusCodeTab->setIcon(platformStyle->SingleColorIcon(bonusCodeTab->icon(),QColor::fromRgb(/*0xbc,0xe8,0xe5*/0x6c,0x70,0x81)));
    overviewAction->setIcon(platformStyle->SingleColorIcon(overviewAction->icon(),QColor::fromRgb(/*0xbc,0xe8,0xe5*/0x6c,0x70,0x81)));
    historyAction->setIcon(platformStyle->SingleColorIcon(historyAction->icon(),QColor::fromRgb(/*0xbc,0xe8,0xe5*/0x6c,0x70,0x81)));
    receiveCoinsAction->setIcon(platformStyle->SingleColorIcon(receiveCoinsAction->icon(),QColor::fromRgb(/*0xbc,0xe8,0xe5*/0x6c,0x70,0x81)));
    sendCoinsAction->setIcon(platformStyle->SingleColorIcon(sendCoinsAction->icon(),QColor::fromRgb(/*0xbc,0xe8,0xe5*/0x6c,0x70,0x81)));
}
void BitcoinGUI::gotoBonusCodes()
{
    checedTabChanged();
    bonusCodeTab->setIcon(platformStyle->SingleColorIcon(bonusCodeTab->icon(),QColor::fromRgb(/*0xff,0xff,0xff*/0x17,0x8f,0xc1)));
    bonusCodeTab->setChecked(true);
    if (walletFrame) walletFrame->gotoBonusCodes();
}
void BitcoinGUI::gotoOverviewPage()
{
    checedTabChanged();
    overviewAction->setIcon(platformStyle->SingleColorIcon(overviewAction->icon(),QColor::fromRgb(/*0xff,0xff,0xff*/0x17,0x8f,0xc1)));
    overviewAction->setChecked(true);
    if (walletFrame) walletFrame->gotoOverviewPage();
}

void BitcoinGUI::gotoHistoryPage()
{
    checedTabChanged();
    historyAction->setIcon(platformStyle->SingleColorIcon(historyAction->icon(),QColor::fromRgb(/*0xff,0xff,0xff*/0x17,0x8f,0xc1)));
    historyAction->setChecked(true);
    if (walletFrame) walletFrame->gotoHistoryPage();
}

void BitcoinGUI::gotoReceiveCoinsPage()
{
    checedTabChanged();
    receiveCoinsAction->setIcon(platformStyle->SingleColorIcon(receiveCoinsAction->icon(),QColor::fromRgb(0xff,0xff,0xff)));
    receiveCoinsAction->setChecked(true);
    if (walletFrame) walletFrame->gotoReceiveCoinsPage();
}

void BitcoinGUI::gotoSendCoinsPage(QString addr)
{
    checedTabChanged();
    sendCoinsAction->setIcon(platformStyle->SingleColorIcon(sendCoinsAction->icon(),QColor::fromRgb(0xff,0xff,0xff)));
    sendCoinsAction->setChecked(true);
    if (walletFrame) walletFrame->gotoSendCoinsPage(addr);
}

void BitcoinGUI::gotoSignMessageTab(QString addr)
{
    if (walletFrame) walletFrame->gotoSignMessageTab(addr);
}

void BitcoinGUI::gotoVerifyMessageTab(QString addr)
{
    if (walletFrame) walletFrame->gotoVerifyMessageTab(addr);
}
#endif // ENABLE_WALLET

void BitcoinGUI::setNumConnections(int count)
{
    QString icon;
    switch(count)
    {
    case 0: icon = ":/icons/connect_0"; break;
    case 1: case 2: case 3: icon = ":/icons/connect_1"; break;
    case 4: case 5: case 6: icon = ":/icons/connect_2"; break;
    case 7: case 8: case 9: icon = ":/icons/connect_3"; break;
    default: icon = ":/icons/connect_4"; break;
    }
    labelConnectionsIcon->setPixmap(platformStyle->SingleColorIcon(icon,QColor::fromRgb(/*75,162,126*/0x00,0xfe,0x98)).pixmap(STATUSBAR_ICONSIZE,STATUSBAR_ICONSIZE));
    labelConnectionsIcon->setToolTip(tr("%n active connection(s) to OctoinCoin network", "", count));
}

void BitcoinGUI::setNumBlocks(int count, const QDateTime& blockDate, double nVerificationProgress, bool header)
{
    if(!clientModel)
        return;

    // Prevent orphan statusbar messages (e.g. hover Quit in main menu, wait until chain-sync starts -> garbelled text)
    statusBar()->clearMessage();

    // Acquire current block source
    enum BlockSource blockSource = clientModel->getBlockSource();
    switch (blockSource) {
        case BLOCK_SOURCE_NETWORK:
            if (header) {
                return;
            }
            progressBarLabel->setText(tr("Synchronizing with network..."));
            break;
        case BLOCK_SOURCE_DISK:
            if (header) {
                progressBarLabel->setText(tr("Indexing blocks on disk..."));
            } else {
                progressBarLabel->setText(tr("Processing blocks on disk..."));
            }
            break;
        case BLOCK_SOURCE_REINDEX:
            progressBarLabel->setText(tr("Reindexing blocks on disk..."));
            break;
        case BLOCK_SOURCE_NONE:
            if (header) {
                return;
            }
            // Case: not Importing, not Reindexing and no network connection
            progressBarLabel->setText(tr("NOT SYNCED"));
            break;
    }

    QString tooltip;

    QDateTime currentDate = QDateTime::currentDateTime();
    qint64 secs = blockDate.secsTo(currentDate);

    tooltip = tr("Processed %n block(s) of transaction history.", "", count);

    // Set icon state: spinning if catching up, tick otherwise
    if(secs < 90*60)
    {
        tooltip = tr("Up to date") + QString(".<br>") + tooltip;
        labelBlocksIcon->setPixmap(platformStyle->SingleColorIcon(":/icons/synced",QColor::fromRgb(/*75,162,126*/0x00,0xfe,0x98)).pixmap(STATUSBAR_ICONSIZE, STATUSBAR_ICONSIZE));

#ifdef ENABLE_WALLET
        if(walletFrame)
            walletFrame->showOutOfSyncWarning(false);
#endif // ENABLE_WALLET

        progressBarLabel->setVisible(false);
        progressBar->setVisible(false);
    }
    else
    {
        // Represent time from last generated block in human readable text
        QString timeBehindText;
        const int HOUR_IN_SECONDS = 60*60;
        const int DAY_IN_SECONDS = 24*60*60;
        const int WEEK_IN_SECONDS = 7*24*60*60;
        const int YEAR_IN_SECONDS = 31556952; // Average length of year in Gregorian calendar
        if(secs < 2*DAY_IN_SECONDS)
        {
            timeBehindText = tr("%n hour(s)","",secs/HOUR_IN_SECONDS);
        }
        else if(secs < 2*WEEK_IN_SECONDS)
        {
            timeBehindText = tr("%n day(s)","",secs/DAY_IN_SECONDS);
        }
        else if(secs < YEAR_IN_SECONDS)
        {
            timeBehindText = tr("%n week(s)","",secs/WEEK_IN_SECONDS);
        }
        else
        {
            qint64 years = secs / YEAR_IN_SECONDS;
            qint64 remainder = secs % YEAR_IN_SECONDS;
            timeBehindText = tr("%1 and %2").arg(tr("%n year(s)", "", years)).arg(tr("%n week(s)","", remainder/WEEK_IN_SECONDS));
        }

//        progressBarLabel->setVisible(true);
        progressBar->setFormat(progressBarLabel->text());
        progressBar->setMaximum(1000000000);
        progressBar->setValue(nVerificationProgress * 1000000000.0 + 0.5);
        progressBar->setVisible(true);

        tooltip = tr("Catching up...") + QString("<br>") + tooltip;
        if(count != prevBlocks)
        {
            labelBlocksIcon->setPixmap(platformStyle->SingleColorIcon(QString(
                ":/movies/spinner-%1").arg(spinnerFrame, 3, 10, QChar('0')),QColor::fromRgb(/*75,162,126*/0x00,0xfe,0x98))
                .pixmap(STATUSBAR_ICONSIZE, STATUSBAR_ICONSIZE));
            spinnerFrame = (spinnerFrame + 1) % SPINNER_FRAMES;
        }
        prevBlocks = count;

#ifdef ENABLE_WALLET
        if(walletFrame)
            walletFrame->showOutOfSyncWarning(true);
#endif // ENABLE_WALLET

        tooltip += QString("<br>");
        tooltip += tr("Last received block was generated %1 ago.").arg(timeBehindText);
        tooltip += QString("<br>");
        tooltip += tr("Transactions after this will not yet be visible.");
    }

    // Don't word-wrap this (fixed-width) tooltip
    tooltip = QString("<nobr>") + tooltip + QString("</nobr>");

    labelBlocksIcon->setToolTip(tooltip);
    progressBarLabel->setToolTip(tooltip);
    progressBar->setToolTip(tooltip);
}

void BitcoinGUI::message(const QString &title, const QString &message, unsigned int style, bool *ret)
{
    QString strTitle = tr("OctoinCoin"); // default title
    // Default to information icon
    int nMBoxIcon = QMessageBox::Information;
    int nNotifyIcon = Notificator::Information;

    QString msgType;

    // Prefer supplied title over style based title
    if (!title.isEmpty()) {
        msgType = title;
    }
    else {
        switch (style) {
        case CClientUIInterface::MSG_ERROR:
            msgType = tr("Error");
            break;
        case CClientUIInterface::MSG_WARNING:
            msgType = tr("Warning");
            break;
        case CClientUIInterface::MSG_INFORMATION:
            msgType = tr("Information");
            break;
        default:
            break;
        }
    }
    // Append title to "Bitcoin - "
    if (!msgType.isEmpty())
        strTitle += " - " + msgType;

    // Check for error/warning icon
    if (style & CClientUIInterface::ICON_ERROR) {
        nMBoxIcon = QMessageBox::Critical;
        nNotifyIcon = Notificator::Critical;
    }
    else if (style & CClientUIInterface::ICON_WARNING) {
        nMBoxIcon = QMessageBox::Warning;
        nNotifyIcon = Notificator::Warning;
    }

    // Display message
    if (style & CClientUIInterface::MODAL) {
        // Check for buttons, use OK as default, if none was supplied
        QMessageBox::StandardButton buttons;
        if (!(buttons = (QMessageBox::StandardButton)(style & CClientUIInterface::BTN_MASK)))
            buttons = QMessageBox::Ok;

        showNormalIfMinimized();
        QMessageBox mBox((QMessageBox::Icon)nMBoxIcon, strTitle, message, buttons, this);
        int r = mBox.exec();
        if (ret != NULL)
            *ret = r == QMessageBox::Ok;
    }
    else
        notificator->notify((Notificator::Class)nNotifyIcon, strTitle, message);
}

void BitcoinGUI::changeEvent(QEvent *e)
{
    QMainWindow::changeEvent(e);
#ifndef Q_OS_MAC // Ignored on Mac
    if(e->type() == QEvent::WindowStateChange)
    {
        if(clientModel && clientModel->getOptionsModel() && clientModel->getOptionsModel()->getMinimizeToTray())
        {
            QWindowStateChangeEvent *wsevt = static_cast<QWindowStateChangeEvent*>(e);
            if(!(wsevt->oldState() & Qt::WindowMinimized) && isMinimized())
            {
                QTimer::singleShot(0, this, SLOT(hide()));
                e->ignore();
            }
        }
    }
#endif
}

void BitcoinGUI::closeEvent(QCloseEvent *event)
{
#ifndef Q_OS_MAC // Ignored on Mac
    if(clientModel && clientModel->getOptionsModel())
    {
        if(!clientModel->getOptionsModel()->getMinimizeToTray() &&
           !clientModel->getOptionsModel()->getMinimizeOnClose())
        {
            // close rpcConsole in case it was open to make some space for the shutdown window
            rpcConsole->close();

            QApplication::quit();
        }
    }
#endif
    QMainWindow::closeEvent(event);
}

void BitcoinGUI::showEvent(QShowEvent *event)
{
    // enable the debug window when the main window shows up
    openRPCConsoleAction->setEnabled(true);
    optionsAction->setEnabled(true);
}

#ifdef ENABLE_WALLET
void BitcoinGUI::incomingTransaction(const QString& date, int unit, const CAmount& amount, const QString& type, const QString& address, const QString& label)
{
    // On new transaction, make an info balloon
    QString msg = tr("Date: %1\n").arg(date) +
                  tr("Amount: %1\n").arg(BitcoinUnits::formatWithUnit(unit, amount, true)) +
                  tr("Type: %1\n").arg(type);
    if (!label.isEmpty())
        msg += tr("Label: %1\n").arg(label);
    else if (!address.isEmpty())
        msg += tr("Address: %1\n").arg(address);
    message((amount)<0 ? tr("Sent transaction") : tr("Incoming transaction"),
             msg, CClientUIInterface::MSG_INFORMATION);
}
#endif // ENABLE_WALLET

void BitcoinGUI::dragEnterEvent(QDragEnterEvent *event)
{
    // Accept only URIs
    if(event->mimeData()->hasUrls())
        event->acceptProposedAction();
}

void BitcoinGUI::dropEvent(QDropEvent *event)
{
    if(event->mimeData()->hasUrls())
    {
        Q_FOREACH(const QUrl &uri, event->mimeData()->urls())
        {
            Q_EMIT receivedURI(uri.toString());
        }
    }
    event->acceptProposedAction();
}

bool BitcoinGUI::eventFilter(QObject *object, QEvent *event)
{
    // Catch status tip events
    if (event->type() == QEvent::StatusTip)
    {
        // Prevent adding text from setStatusTip(), if we currently use the status bar for displaying other stuff
        if (progressBarLabel->isVisible() || progressBar->isVisible())
            return true;
    }
    return QMainWindow::eventFilter(object, event);
}

#ifdef ENABLE_WALLET
bool BitcoinGUI::handlePaymentRequest(const SendCoinsRecipient& recipient)
{
    // URI has to be valid
    if (walletFrame && walletFrame->handlePaymentRequest(recipient))
    {
        showNormalIfMinimized();
        gotoSendCoinsPage();
        return true;
    }
    return false;
}

void BitcoinGUI::setEncryptionStatus(int status)
{
    switch(status)
    {
    case WalletModel::Unencrypted:
        labelEncryptionIcon->hide();
        encryptWalletAction->setChecked(false);
        changePassphraseAction->setEnabled(false);
        encryptWalletAction->setEnabled(true);
        lock->setEnabled(false);
        unlock->setEnabled(false);
        break;
    case WalletModel::Unlocked:
        labelEncryptionIcon->show();
        labelEncryptionIcon->setPixmap(platformStyle->SingleColorIcon(":/icons/lock_open",QColor(/*0x4b, 0xa2, 0x7e*/0x00,0xfe,0x98)).pixmap(STATUSBAR_ICONSIZE,STATUSBAR_ICONSIZE));
        labelEncryptionIcon->setToolTip(tr("Wallet is <b>encrypted</b> and currently <b>unlocked</b>"));
        encryptWalletAction->setChecked(true);
        changePassphraseAction->setEnabled(true);
        encryptWalletAction->setEnabled(false); // TODO: decrypt currently not supported
        lock->setEnabled(true);
        unlock->setEnabled(false);
        break;
    case WalletModel::Locked:
        labelEncryptionIcon->show();
        labelEncryptionIcon->setPixmap(platformStyle->SingleColorIcon(":/icons/lock_closed",QColor(/*0x4b, 0xa2, 0x7e*/0x00,0xfe,0x98)).pixmap(STATUSBAR_ICONSIZE,STATUSBAR_ICONSIZE));
        labelEncryptionIcon->setToolTip(tr("Wallet is <b>encrypted</b> and currently <b>locked</b>"));
        encryptWalletAction->setChecked(true);
        changePassphraseAction->setEnabled(true);
        encryptWalletAction->setEnabled(false); // TODO: decrypt currently not supported
        lock->setEnabled(false);
        unlock->setEnabled(true);
        break;
    }
    miningStateRefresh();
}
#endif // ENABLE_WALLET

void BitcoinGUI::showNormalIfMinimized(bool fToggleHidden)
{
    if(!clientModel)
        return;

    // activateWindow() (sometimes) helps with keyboard focus on Windows
    if (isHidden())
    {
        show();
        activateWindow();
    }
    else if (isMinimized())
    {
        showNormal();
        activateWindow();
    }
    else if (GUIUtil::isObscured(this))
    {
        raise();
        activateWindow();
    }
    else if(fToggleHidden)
        hide();
}

void BitcoinGUI::toggleHidden()
{
    showNormalIfMinimized(true);
}

void BitcoinGUI::detectShutdown()
{
    if (ShutdownRequested())
    {
        if(rpcConsole)
            rpcConsole->hide();
        qApp->quit();
    }
}

void BitcoinGUI::showProgress(const QString &title, int nProgress)
{
    if (nProgress == 0)
    {
        progressDialog = new QProgressDialog(title, "", 0, 100,this);
        progressDialog->setWindowModality(Qt::ApplicationModal);
        progressDialog->setMinimumDuration(0);
        progressDialog->setCancelButton(0);
        progressDialog->setAutoClose(false);
        progressDialog->setValue(0);
    }
    else if (nProgress == 100)
    {
        if (progressDialog)
        {
            progressDialog->close();
            progressDialog->deleteLater();
        }
    }
    else if (progressDialog)
        progressDialog->setValue(nProgress);
}

void BitcoinGUI::setTrayIconVisible(bool fHideTrayIcon)
{
    if (trayIcon)
    {
        trayIcon->setVisible(!fHideTrayIcon);
    }
}

static bool ThreadSafeMessageBox(BitcoinGUI *gui, const std::string& message, const std::string& caption, unsigned int style)
{
    bool modal = (style & CClientUIInterface::MODAL);
    // The SECURE flag has no effect in the Qt GUI.
    // bool secure = (style & CClientUIInterface::SECURE);
    style &= ~CClientUIInterface::SECURE;
    bool ret = false;
    // In case of modal message, use blocking connection to wait for user to click a button
    QMetaObject::invokeMethod(gui, "message",
                               modal ? GUIUtil::blockingGUIThreadConnection() : Qt::QueuedConnection,
                               Q_ARG(QString, QString::fromStdString(caption)),
                               Q_ARG(QString, QString::fromStdString(message)),
                               Q_ARG(unsigned int, style),
                               Q_ARG(bool*, &ret));
    return ret;
}

void BitcoinGUI::subscribeToCoreSignals()
{
    // Connect signals to client
    uiInterface.ThreadSafeMessageBox.connect(boost::bind(ThreadSafeMessageBox, this, _1, _2, _3));
    uiInterface.ThreadSafeQuestion.connect(boost::bind(ThreadSafeMessageBox, this, _1, _3, _4));
}

void BitcoinGUI::unsubscribeFromCoreSignals()
{
    // Disconnect signals from client
    uiInterface.ThreadSafeMessageBox.disconnect(boost::bind(ThreadSafeMessageBox, this, _1, _2, _3));
    uiInterface.ThreadSafeQuestion.disconnect(boost::bind(ThreadSafeMessageBox, this, _1, _3, _4));
}

void BitcoinGUI::callMenu(){
#ifndef Q_OS_MAC
    appMenuBar->setHidden(!appMenuBar->isHidden());
#endif
}

std::string getLatestReleaseInfo() {
    boost::system::error_code ec;
    using namespace boost::asio;

    io_service svc;

    ssl::context ctx(svc, ssl::context::method::sslv23_client);
    ssl::stream<ip::tcp::socket> ssock(svc, ctx);
    ip::tcp::resolver resolver(svc);
    auto it = resolver.resolve({"api.github.com", "443"});
    boost::asio::connect(ssock.lowest_layer(), it);
    ssock.handshake(ssl::stream_base::handshake_type::client);

    std::string request(
        "GET /repos/segwit/octoin/releases/latest HTTP/1.1\r\n"
        "Host: api.github.com\r\n"
        "User-Agent: occ-client\r\n"
        "Accept: */*\r\n"
        "Connection: close\r\n\r\n");
    boost::asio::write(ssock, buffer(request));

    std::string response;

    do {
        char buf[1024];
        size_t bytes_transferred = ssock.read_some(buffer(buf), ec);
        if (!ec)
            response.append(buf, buf + bytes_transferred);
    } while (!ec);

    return response.substr(response.find("\r\n\r\n"));
}

void BitcoinGUI::checkUpdateThread(bool showMessage){

    QByteArray jsonBytes;

    try {
        jsonBytes = QByteArray::fromStdString(getLatestReleaseInfo());
    }catch(const std::exception &e){
        if (showMessage){

            QMessageBox msg(QMessageBox::Warning, tr("Check update"), QString::fromLocal8Bit(e.what()));
            msg.setStyleSheet(this->styleSheet());
            msg.exec();
        }
        return;
    }

    QJsonParseError error;
    QJsonDocument json = QJsonDocument::fromJson(jsonBytes, &error);
    if (error.error != QJsonParseError::NoError) {
        if (showMessage){

            QMessageBox msg(QMessageBox::Warning, tr("Сan not read server response."),
                            error.errorString());
            msg.setStyleSheet(this->styleSheet());
            msg.exec();
        }
        return;
    }

    QString latest_version = json.object()["tag_name"].toString();
    QRegExp reg("(\\d+)");
    QStringList list;
    int pos = 0;
    while ((pos = reg.indexIn(latest_version, pos)) != -1) {
        list << reg.cap(1);
        pos += reg.matchedLength();
    }

    if (list.size() < 3) {
        if (showMessage){

            QMessageBox msg(QMessageBox::Warning, tr("Check update"),
                            "Check update failed!");
            msg.setStyleSheet(this->styleSheet());
            msg.exec();
        }
        return;
    }

    if (GUIUtil::checkUpdate(list[0].toInt(), list[1].toInt(),
                             list[2].toInt())) {
        QString message =
            tr("You can download new wallet version <a "
               "style='color:#a3e400;' "
               "name='here' href='%0'>here</a>\n ")
                .arg("https://github.com/segwit/octoin/releases/" +
                     latest_version);

        QMessageBox msg(QMessageBox::Information, tr("Check of update"), message);
        msg.setStyleSheet(this->styleSheet());
        msg.exec();

    } else if (showMessage) {

        QMessageBox msg(QMessageBox::Information, tr("Check of update"),
                        tr("No updates available"));
        msg.setStyleSheet(this->styleSheet());
        msg.exec();
    }
}

void BitcoinGUI::checkUpdate(bool showMessage) {

#ifdef Q_OS_LINUX
    boost::thread t{&BitcoinGUI::checkUpdateThread,this,showMessage};
    t.detach();
#else
    checkUpdateThread(showMessage);
#endif
}

void BitcoinGUI::startLightning() {
#ifdef ENABLE_LIGHTNING
    int lightningPort = 9735;

    QDateTime currentDate = QDateTime::currentDateTime();
    qint64 secs = clientModel->getLastBlockDate().secsTo(currentDate);
    const int HOUR_IN_SECONDS = 60 * 60;

    enum BlockSource blockSource = clientModel->getBlockSource();

    if (blockSource == BLOCK_SOURCE_NONE || secs > HOUR_IN_SECONDS) {
        QMessageBox::information(
            this, tr("Synchronization"),
            tr("Wait until the network is fully synchronized and try again."));
        return;
    }

    if (walletModel->getEncryptionStatus() == WalletModel::Locked &&
        QMessageBox::Yes ==
            QMessageBox::question(this, tr("Start lightning"),
                                  tr("For normal operation of the lightning, "
                                     "wallet must be unlocked. "
                                     "Do you want to unlock your wallet?"))) {
        walletFrame->UnlockWallet();
    }

    if (walletModel->getEncryptionStatus() == WalletModel::Locked)
        return;

    if (!GUIUtil::extractLightning()) {
        QMessageBox::warning(
            this, tr("Lightning extract error"),
            tr("Could not install the lightning on your wallet."));
        return;
    }

    if (lightningProcess.state() != QProcess::NotRunning ||
        !QTcpSocket().bind(lightningPort)) {
        QMessageBox::information(this, tr("Eclair"),
                                 tr("Eclair is already running"));
        return;
    }

    QString datadir = GUIUtil::getDataDir();
    QString rpcuser = QString::fromStdString(GetArg("-rpcuser", ""));
    QString rpcpass = QString::fromStdString(GetArg("-rpcpassword", ""));
    QString network = QString::fromStdString(Params().NetworkIDString());
    if (network == "test")
        network += "net";
    QString zmqport = QString::fromStdString(
        GetArg("-zmqpubhashblock", DEFAULT_ZMQPUBHASHBLOCK));

    QString program = "java";
    QStringList arguments;

    arguments << "-Declair.datadir=" + datadir + "/lightning"
              << QString("-Declair.server.port=%0").arg(lightningPort)
              << "-Declair.bitcoind.occdir=" + datadir
              << "-Declair.bitcoind.rpcuser=" + rpcuser
              << "-Declair.bitcoind.rpcpassword=" + rpcpass
              << "-Declair.bitcoind.zmq=" + zmqport
              << "-Declair.chain=" + network << "-jar"
              << datadir + "/Lightning.jar";

    lightningProcess.start(program, arguments);
    lightningProcess.waitForStarted();

    if (lightningProcess.state() == QProcess::NotRunning &&
        lightningProcess.error() == QProcess::FailedToStart) {
        QString href = "http://www.oracle.com/technetwork/java/javase/"
                       "downloads/jdk8-downloads-2133151.html";
        QMessageBox::warning(
            this, tr("Java not found"),
            tr("You need to download and install Java. click on the <a "
               "style='color:#a3e400;' "
               "href=%0>link</a> to download.")
                .arg(href));
    }
#endif
}

UnitDisplayStatusBarControl::UnitDisplayStatusBarControl(const PlatformStyle *platformStyle) :
    optionsModel(0),
    menu(0)
{
    createContextMenu();
    setToolTip(tr("Unit to show amounts in. Click to select another unit."));
    QList<BitcoinUnits::Unit> units = BitcoinUnits::availableUnits();
    int max_width = 0;
    const QFontMetrics fm(font());
    Q_FOREACH (const BitcoinUnits::Unit unit, units)
    {
        max_width = qMax(max_width, fm.width(BitcoinUnits::name(unit)));
    }
    setMinimumSize(max_width, 0);
    setAlignment(Qt::AlignRight | Qt::AlignVCenter);
    setStyleSheet(QString("QLabel { color : %1 }").arg(platformStyle->SingleColor().name()));
}

/** So that it responds to button clicks */
void UnitDisplayStatusBarControl::mousePressEvent(QMouseEvent *event)
{
    onDisplayUnitsClicked(event->pos());
}

/** Creates context menu, its actions, and wires up all the relevant signals for mouse events. */
void UnitDisplayStatusBarControl::createContextMenu()
{
    menu = new QMenu(this);
    menu->setFont(GUIUtil::fixedPitchFont());
    Q_FOREACH(BitcoinUnits::Unit u, BitcoinUnits::availableUnits())
    {
        QAction *menuAction = new QAction(QString(BitcoinUnits::name(u)), this);
        menuAction->setData(QVariant(u));
        menu->addAction(menuAction);
    }
    connect(menu,SIGNAL(triggered(QAction*)),this,SLOT(onMenuSelection(QAction*)));
}

/** Lets the control know about the Options Model (and its signals) */
void UnitDisplayStatusBarControl::setOptionsModel(OptionsModel *optionsModel)
{
    if (optionsModel)
    {
        this->optionsModel = optionsModel;

        // be aware of a display unit change reported by the OptionsModel object.
        connect(optionsModel,SIGNAL(displayUnitChanged(int)),this,SLOT(updateDisplayUnit(int)));

        // initialize the display units label with the current value in the model.
        updateDisplayUnit(optionsModel->getDisplayUnit());
    }
}

/** When Display Units are changed on OptionsModel it will refresh the display text of the control on the status bar */
void UnitDisplayStatusBarControl::updateDisplayUnit(int newUnits)
{
    setText(BitcoinUnits::name(newUnits));
}

/** Shows context menu with Display Unit options by the mouse coordinates */
void UnitDisplayStatusBarControl::onDisplayUnitsClicked(const QPoint& point)
{
    QPoint globalPos = mapToGlobal(point);
    menu->exec(globalPos);
}

/** Tells underlying optionsModel to update its current display unit. */
void UnitDisplayStatusBarControl::onMenuSelection(QAction* action)
{
    if (action)
    {
        optionsModel->setDisplayUnit(action->data());
    }
}
