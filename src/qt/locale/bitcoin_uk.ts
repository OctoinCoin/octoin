<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="uk">
<context>
    <name>OctoinCoin-core</name>
    <message>
        <source>The %s developers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(1 = keep tx meta data e.g. account owner and payment request information, 2 = drop tx meta data)</source>
        <translation type="unfinished">(1 = утримувати метадані транзакцій (до яких відноситься інформація про власника рахунку та запити платежів), 2 - відкинути)</translation>
    </message>
    <message>
        <source>-fallbackfee is set very high! This is the transaction fee you may pay when fee estimates are not available.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-maxtxfee is set very high! Fees this large could be paid on a single transaction.</source>
        <translation type="unfinished">Встановлено дуже велике значення -maxtxfee! Такі великі комісії можуть бути сплачені окремою транзакцією.</translation>
    </message>
    <message>
        <source>-paytxfee is set very high! This is the transaction fee you will pay if you send a transaction.</source>
        <translation type="unfinished">Встановлено дуже велике значення -paytxfee! Цю комісію буде сплачено для проведення транзакції.</translation>
    </message>
    <message>
        <source>A fee rate (in %s/kB) that will be used when fee estimation has insufficient data (default: %s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Accept relayed transactions received from whitelisted peers even when not relaying transactions (default: %d)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow JSON-RPC connections from specified source. Valid for &lt;ip&gt; are a single IP (e.g. 1.2.3.4), a network/netmask (e.g. 1.2.3.4/255.255.255.0) or a network/CIDR (e.g. 1.2.3.4/24). This option can be specified multiple times</source>
        <translation type="unfinished">Дозволити підключення по протоколу JSON-RPC зі вказаного джерела. Правильною для &lt;ip&gt; є окрема IP-адреса (наприклад, 1.2.3.4), IP-адреса та маска підмережі (наприклад, 1.2.3.4/255.255.255.0) або CIDR-адреса (наприклад, 1.2.3.4/24). Цей параметр можна вказувати декілька разів.</translation>
    </message>
    <message>
        <source>Bind to given address and always listen on it. Use [host]:port notation for IPv6</source>
        <translation type="unfinished">Прив&apos;язатися до даної адреси та прослуховувати її. Використовуйте запис виду [хост]:порт для IPv6</translation>
    </message>
    <message>
        <source>Bind to given address and whitelist peers connecting to it. Use [host]:port notation for IPv6</source>
        <translation type="unfinished">Прив&apos;язатися до даної адреси та вносити до білого списку учасників, що під&apos;єднуються до неї. Використовуйте запис виду [хост]:порт для IPv6</translation>
    </message>
    <message>
        <source>Bind to given address to listen for JSON-RPC connections. Use [host]:port notation for IPv6. This option can be specified multiple times (default: bind to all interfaces)</source>
        <translation type="unfinished">Прив&apos;язатися до даної адреси для прослуховування JSON-RPC підключень. Використовуйте запис виду [хост]:порт для IPv6. Цей параметр можна вказувати декілька разів (типово: прив&apos;язуватися до всіх інтерфейсів)</translation>
    </message>
    <message>
        <source>Cannot obtain a lock on data directory %s. %s is probably already running.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create new files with system default permissions, instead of umask 077 (only effective with disabled wallet functionality)</source>
        <translation type="unfinished">Створювати нові файли з типовими для системи атрибутами доступу замість маски 077 (діє тільки при вимкненому гаманці)</translation>
    </message>
    <message>
        <source>Delete all wallet transactions and only recover those parts of the blockchain through -rescan on startup</source>
        <translation type="unfinished">Видалити всі транзакції гаманця та відновити ті, що будуть знайдені під час запуску за допомогою -rescan</translation>
    </message>
    <message>
        <source>Discover own IP addresses (default: 1 when listening and no -externalip or -proxy)</source>
        <translation type="unfinished">Визначити власні IP-адреси (типово: 1 при прослуховуванні та за відсутності -externalip або -proxy)</translation>
    </message>
    <message>
        <source>Distributed under the MIT software license, see the accompanying file COPYING or &lt;http://www.opensource.org/licenses/mit-license.php&gt;.</source>
        <translation type="unfinished">Поширюється за ліцензією MIT, додаткова інформація міститься у файлі COPYING та за адресою &lt;http://www.opensource.org/licenses/mit-license.php&gt;.</translation>
    </message>
    <message>
        <source>Do not keep transactions in the mempool longer than &lt;n&gt; hours (default: %u)</source>
        <translation type="unfinished">Не тримати транзакції в пам&apos;яті довше &lt;n&gt; годин (типово: %u)</translation>
    </message>
    <message>
        <source>Equivalent bytes per sigop in transactions for relay and mining (default: %u)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error loading %s: You can&apos;t enable HD on a already existing non-HD wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error reading %s! All keys read correctly, but transaction data or address book entries might be missing or incorrect.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error: Listening for incoming connections failed (listen returned error %s)</source>
        <translation type="unfinished">Помилка: Не вдалося налаштувати прослуховування вхідних підключень (listen повернув помилку: %s)</translation>
    </message>
    <message>
        <source>Execute command when a relevant alert is received or we see a really long fork (%s in cmd is replaced by message)</source>
        <translation type="unfinished">Виконати команду при надходженні важливого сповіщення або при спостереженні тривалого розгалуження ланцюжка (замість %s буде підставлено повідомлення)</translation>
    </message>
    <message>
        <source>Execute command when a wallet transaction changes (%s in cmd is replaced by TxID)</source>
        <translation type="unfinished">Виконати команду, коли транзакція гаманця зміниться (замість %s в команді буде підставлено ідентифікатор транзакції)</translation>
    </message>
    <message>
        <source>Execute command when the best block changes (%s in cmd is replaced by block hash)</source>
        <translation type="unfinished">Виконати команду, коли з&apos;явиться новий блок (%s в команді змінюється на хеш блоку)</translation>
    </message>
    <message>
        <source>Fees (in %s/kB) smaller than this are considered zero fee for relaying, mining and transaction creation (default: %s)</source>
        <translation type="unfinished">Комісії (в %s/kB), що менші за вказану, вважатимуться нульовими для зміни, аналізу та створення транзакцій (типово: %s)</translation>
    </message>
    <message>
        <source>Fees (in %s/kB) smaller than this are considered zero fee for transaction creation (default: %s)</source>
        <translation type="unfinished">Комісії (в %s/kB), що менші за вказану, вважатимуться нульовими для створення транзакцій (типово: %s)</translation>
    </message>
    <message>
        <source>Force relay of transactions from whitelisted peers even they violate local relay policy (default: %d)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>How thorough the block verification of -checkblocks is (0-4, default: %u)</source>
        <translation type="unfinished">Рівень ретельності перевірки блоків (0-4, типово: %u)</translation>
    </message>
    <message>
        <source>If &lt;category&gt; is not supplied or if &lt;category&gt; = 1, output all debugging information.</source>
        <translation type="unfinished">Якщо &lt;category&gt; не задано, або ж якщо &lt;category&gt; = 1, виводить всю налагоджувальну інформацію.</translation>
    </message>
    <message>
        <source>If paytxfee is not set, include enough fee so transactions begin confirmation on average within n blocks (default: %u)</source>
        <translation type="unfinished">Якщо параметр paytxfee не встановлено, включити комісію для отримання перших підтверджень транзакцій протягом n блоків (типово: %u)</translation>
    </message>
    <message>
        <source>Invalid amount for -maxtxfee=&lt;amount&gt;: &apos;%s&apos; (must be at least the minrelay fee of %s to prevent stuck transactions)</source>
        <translation type="unfinished">Неприпустима сума для -maxtxfee = &lt;amount&gt;: «%s» ( плата повинна бути, принаймні %s, щоб запобігти зависанню транзакцій)</translation>
    </message>
    <message>
        <source>Maintain a full transaction index, used by the getrawtransaction rpc call (default: %u)</source>
        <translation type="unfinished">Утримувати повний індекс транзакцій (використовується RPC-викликом getrawtransaction) (типово: %u)</translation>
    </message>
    <message>
        <source>Maximum allowed median peer time offset adjustment. Local perspective of time may be influenced by peers forward or backward by this amount. (default: %u seconds)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum size of data in data carrier transactions we relay and mine (default: %u)</source>
        <translation type="unfinished">Максимальний розмір даних в транзакціях носіїв даних, що ми передаємо і добуваємо (за замовчуванням: %u)</translation>
    </message>
    <message>
        <source>Maximum total fees (in %s) to use in a single wallet transaction or raw transaction; setting this too low may abort large transactions (default: %s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of seconds to keep misbehaving peers from reconnecting (default: %u)</source>
        <translation type="unfinished">Час в секундах, протягом якого відключені учасники з поганою поведінкою не зможуть підключитися (типово: %u)</translation>
    </message>
    <message>
        <source>Output debugging information (default: %u, supplying &lt;category&gt; is optional)</source>
        <translation type="unfinished">Виводити налагоджувальну інформацію (типово: %u, вказання &lt;category&gt; необов&apos;язкове)</translation>
    </message>
    <message>
        <source>Please check that your computer&apos;s date and time are correct! If your clock is wrong, %s will not work properly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Please contribute if you find %s useful. Visit %s for further information about the software.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prune configured below the minimum of %d MiB.  Please use a higher number.</source>
        <translation type="unfinished">Встановлений розмір ланцюжка блоків є замалим (меншим за %d МіБ). Будь ласка, виберіть більше число.</translation>
    </message>
    <message>
        <source>Prune: last wallet synchronisation goes beyond pruned data. You need to -reindex (download the whole blockchain again in case of pruned node)</source>
        <translation type="unfinished">Операція відсікання: остання синхронізація вмісту гаманцю не обмежується діями над скороченими данними. Вам необхідно зробити переіндексацію -reindex (заново завантажити веcь ланцюжок блоків в разі появи скороченого ланцюга)</translation>
    </message>
    <message>
        <source>Query for peer addresses via DNS lookup, if low on addresses (default: 1 unless -connect)</source>
        <translation type="unfinished">Дізнаватися адреси учасників через DNS при замалій кількості відомих адрес (типово: 1 за відсутності -connect)</translation>
    </message>
    <message>
        <source>Randomize credentials for every proxy connection. This enables Tor stream isolation (default: %u)</source>
        <translation type="unfinished">Надавати випадкові дані доступу для кожного проксі-з&apos;єднання. Це дозволяє ввімкнути ізоляцію потоків Tor&apos;у (типово: %u)</translation>
    </message>
    <message>
        <source>Reduce storage requirements by pruning (deleting) old blocks. This mode is incompatible with -txindex and -rescan. Warning: Reverting this setting requires re-downloading the entire blockchain. (default: 0 = disable pruning blocks, &gt;%u = target size in MiB to use for block files)</source>
        <translation type="unfinished">Зменшити вимоги до наявного простору на носії даних за допомогою скорочення ланцюжка (видалення старих блоків). Цей режим несумісний з параметрами -txindex та -rescan. Увага: при поверненні до типового значення видалені частини ланцюжка буде повторно завантажено. (типово: 0 = вимкнути скорочення ланцюжка, &gt;%u = очікуваний розмір файлів блоків в МіБ)</translation>
    </message>
    <message>
        <source>Rescans are not possible in pruned mode. You will need to use -reindex which will download the whole blockchain again.</source>
        <translation type="unfinished">Неможливо провести повторне сканування зі скороченим ланцюжком. Вам необхідно використати -reindex для завантаження повного ланцюжка блоків.</translation>
    </message>
    <message>
        <source>Set maximum size of high-priority/low-fee transactions in bytes (default: %d)</source>
        <translation type="unfinished">Встановити максимальний розмір транзакцій з високим пріоритетом та низькою комісією (в байтах) (типово: %d)</translation>
    </message>
    <message>
        <source>Set the number of script verification threads (%u to %d, 0 = auto, &lt;0 = leave that many cores free, default: %d)</source>
        <translation type="unfinished">Встановити кількість потоків скрипту перевірки (від %u до %d, 0 = автоматично, &lt;0 = вказує кількість вільних ядер, типово: %d)</translation>
    </message>
    <message>
        <source>Support filtering of blocks and transaction with bloom filters (default: %u)</source>
        <translation type="unfinished">Фільтрація блоків та транзакцій з допомогою фільтрів Блума (типово: %u)</translation>
    </message>
    <message>
        <source>The block database contains a block which appears to be from the future. This may be due to your computer&apos;s date and time being set incorrectly. Only rebuild the block database if you are sure that your computer&apos;s date and time are correct</source>
        <translation type="unfinished">Схоже, що база даних блоків містить блок з майбутнього. Це може статися із-за некоректно встановленої дати та/або часу. Перебудовуйте базу даних блоків лише тоді, коли ви переконані, що встановлено правильну дату і час</translation>
    </message>
    <message>
        <source>The transaction amount is too small to send after the fee has been deducted</source>
        <translation type="unfinished">Залишок від суми транзакції зі сплатою комісії занадто малий </translation>
    </message>
    <message>
        <source>This is a pre-release test build - use at your own risk - do not use for mining or merchant applications</source>
        <translation type="unfinished">Це тестова збірка пре-релізної версії - використовуйте на свій страх і ризик - не застосовувати для добування монет або торгівлі</translation>
    </message>
    <message>
        <source>This product includes software developed by the OpenSSL Project for use in the OpenSSL Toolkit &lt;https://www.openssl.org/&gt; and cryptographic software written by Eric Young and UPnP software written by Thomas Bernard.</source>
        <translation type="unfinished">Цей продукт включає в себе програмне забезпечення, розроблене в рамках проекту OpenSSL &lt;https://www.openssl.org/&gt;, криптографічне програмне забезпечення, написане Еріком Янгом, та функції для роботи з UPnP, написані Томасом Бернардом.</translation>
    </message>
    <message>
        <source>Total length of network version string (%i) exceeds maximum length (%i). Reduce the number or size of uacomments.</source>
        <translation type="unfinished">Загальна довжина рядку мережевої версії (%i) перевищує максимально допустиму (%i). Зменшіть число чи розмір коментарів клієнта користувача.</translation>
    </message>
    <message>
        <source>Tries to keep outbound traffic under the given target (in MiB per 24h), 0 = no limit (default: %d)</source>
        <translation type="unfinished">Намагається зберегти вихідний трафік відповідно до зданого значення (в MIB за 24 години), 0 = без обмежень (типово: %d)</translation>
    </message>
    <message>
        <source>Unable to rewind the database to a pre-fork state. You will need to redownload the blockchain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unsupported argument -socks found. Setting SOCKS version isn&apos;t possible anymore, only SOCKS5 proxies are supported.</source>
        <translation type="unfinished">Параметр -socks не підтримується. Можливість вказувати версію SOCKS було видалено, так як підтримується лише SOCKS5.</translation>
    </message>
    <message>
        <source>Unsupported argument -whitelistalwaysrelay ignored, use -whitelistrelay and/or -whitelistforcerelay.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use UPnP to map the listening port (default: 1 when listening and no -proxy)</source>
        <translation type="unfinished">Використовувати UPnP для відображення порту, що прослуховується (типово: 1 при прослуховуванні та за відсутності -proxy)</translation>
    </message>
    <message>
        <source>Use hierarchical deterministic key generation (HD) after BIP32. Only has effect during wallet creation/first start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use separate SOCKS5 proxy to reach peers via Tor hidden services (default: %s)</source>
        <translation type="unfinished">Використовувати окремий SOCKS5-проксі для з&apos;єднання з учасниками через приховані сервіси Tor (типово: %s)</translation>
    </message>
    <message>
        <source>Username and hashed password for JSON-RPC connections. The field &lt;userpw&gt; comes in the format: &lt;USERNAME&gt;:&lt;SALT&gt;$&lt;HASH&gt;. A canonical python script is included in share/rpcuser. This option can be specified multiple times</source>
        <translation type="unfinished">Логін та хешований пароль для зв&apos;язків JSON-RPC. Поле &lt;userpw&gt; має формат: &lt;USERNAME&gt;:&lt;SALT&gt;$&lt;HASH&gt;. Класичний Python script додано до share/rpcuser. Цей параметр може бути застосований декілька разів.</translation>
    </message>
    <message>
        <source>Warning: The network does not appear to fully agree! Some miners appear to be experiencing issues.</source>
        <translation type="unfinished">Увага: Частина мережі використовує інший головний ланцюжок! Деякі добувачі, можливо, зазнають проблем.</translation>
    </message>
    <message>
        <source>Warning: Unknown block versions being mined! It&apos;s possible unknown rules are in effect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning: Wallet file corrupt, data salvaged! Original %s saved as %s in %s; if your balance or transactions are incorrect you should restore from a backup.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning: We do not appear to fully agree with our peers! You may need to upgrade, or other nodes may need to upgrade.</source>
        <translation type="unfinished">Увага: Наш ланцюжок блоків відрізняється від ланцюжків підключених учасників! Можливо, вам, або іншим вузлам, необхідно оновитися.</translation>
    </message>
    <message>
        <source>Whitelist peers connecting from the given netmask or IP address. Can be specified multiple times.</source>
        <translation type="unfinished">Додати учасників, що під&apos;єднуються з заданої підмережі чи IP-адреси, в білий список. Можна вказувати декілька разів.</translation>
    </message>
    <message>
        <source>Whitelisted peers cannot be DoS banned and their transactions are always relayed, even if they are already in the mempool, useful e.g. for a gateway</source>
        <translation type="unfinished">Учасники, що знаходяться в білому списку, не можуть бути заблоковані за DoS та їхні транзакції завжди ретранслюватимуться (навіть якщо вони є в пам&apos;яті), що може бути корисним, наприклад, для шлюзу</translation>
    </message>
    <message>
        <source>You need to rebuild the database using -reindex to go back to unpruned mode.  This will redownload the entire blockchain</source>
        <translation type="unfinished">Вам необхідно перебудувати базу даних з використанням -reindex для завантаження повного ланцюжка блоків.</translation>
    </message>
    <message>
        <source>You need to rebuild the database using -reindex-chainstate to change -txindex</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%s corrupt, salvage failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(default: %s)</source>
        <translation type="unfinished">(типово: %s)</translation>
    </message>
    <message>
        <source>(default: %u)</source>
        <translation type="unfinished">(типово: %u)</translation>
    </message>
    <message>
        <source>-maxmempool must be at least %d MB</source>
        <translation type="unfinished">-maxmempool має бути не менше %d МБ</translation>
    </message>
    <message>
        <source>&lt;category&gt; can be:</source>
        <translation type="unfinished">&lt;category&gt; може бути:</translation>
    </message>
    <message>
        <source>Accept command line and JSON-RPC commands</source>
        <translation type="unfinished">Приймати команди із командного рядка та команди JSON-RPC</translation>
    </message>
    <message>
        <source>Accept connections from outside (default: 1 if no -proxy or -connect)</source>
        <translation type="unfinished">Приймати підключення ззовні (типово: 1 за відсутності -proxy чи -connect)</translation>
    </message>
    <message>
        <source>Accept public REST requests (default: %u)</source>
        <translation type="unfinished">Приймати публічні REST-запити (типово: %u)</translation>
    </message>
    <message>
        <source>Add a node to connect to and attempt to keep the connection open</source>
        <translation type="unfinished">Додати вузол до підключення і лишити його відкритим</translation>
    </message>
    <message>
        <source>Allow DNS lookups for -addnode, -seednode and -connect</source>
        <translation type="unfinished">Дозволити пошук в DNS для команд -addnode, -seednode та -connect</translation>
    </message>
    <message>
        <source>Always query for peer addresses via DNS lookup (default: %u)</source>
        <translation type="unfinished">Завжди дізнаватися адреси учасників через DNS (типово: %u)</translation>
    </message>
    <message>
        <source>Append comment to the user agent string</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Attempt to recover private keys from a corrupt wallet on startup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatically create Tor hidden service (default: %d)</source>
        <translation type="unfinished">Автоматичне з&apos;єднання з прихованим сервісом Tor (типово: %d)</translation>
    </message>
    <message>
        <source>Block creation options:</source>
        <translation type="unfinished">Опції створення блоку:</translation>
    </message>
    <message>
        <source>Cannot downgrade wallet</source>
        <translation type="unfinished">Не вдається понизити версію гаманця</translation>
    </message>
    <message>
        <source>Cannot resolve -%s address: &apos;%s&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot write default address</source>
        <translation type="unfinished">Неможливо записати типову адресу</translation>
    </message>
    <message>
        <source>Change index out of range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Connect only to the specified node(s)</source>
        <translation type="unfinished">Підключитись лише до вказаного вузла/вузлів</translation>
    </message>
    <message>
        <source>Connect through SOCKS5 proxy</source>
        <translation type="unfinished">Підключитись через SOCKS5-проксі</translation>
    </message>
    <message>
        <source>Connect to a node to retrieve peer addresses, and disconnect</source>
        <translation type="unfinished">Підключитись до вузла, щоб отримати список адрес інших учасників та від&apos;єднатись</translation>
    </message>
    <message>
        <source>Connection options:</source>
        <translation type="unfinished">Параметри з&apos;єднання:</translation>
    </message>
    <message>
        <source>Copyright (C) %i-%i</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Corrupted block database detected</source>
        <translation type="unfinished">Виявлено пошкоджений блок бази даних</translation>
    </message>
    <message>
        <source>Debugging/Testing options:</source>
        <translation type="unfinished">Параметри тестування/налагодження:</translation>
    </message>
    <message>
        <source>Do not load the wallet and disable wallet RPC calls</source>
        <translation type="unfinished">Не завантажувати гаманець та вимкнути звернення до нього через RPC</translation>
    </message>
    <message>
        <source>Do you want to rebuild the block database now?</source>
        <translation type="unfinished">Ви хочете перебудувати базу даних блоків зараз?</translation>
    </message>
    <message>
        <source>Done loading</source>
        <translation type="unfinished">Завантаження завершене</translation>
    </message>
    <message>
        <source>Enable publish hash block in &lt;address&gt;</source>
        <translation type="unfinished">Дозволено введення хеш блоку в рядок &lt;address&gt;</translation>
    </message>
    <message>
        <source>Enable publish hash transaction in &lt;address&gt;</source>
        <translation type="unfinished">Дозволено введення хеш транзакції в рядок &lt;address&gt;</translation>
    </message>
    <message>
        <source>Enable publish raw block in &lt;address&gt;</source>
        <translation type="unfinished">Дозволено введення RAW блоку в рядок &lt;address&gt;</translation>
    </message>
    <message>
        <source>Enable publish raw transaction in &lt;address&gt;</source>
        <translation type="unfinished">Дозволено введення RAW транзакції в рядок &lt;address&gt;</translation>
    </message>
    <message>
        <source>Enable transaction replacement in the memory pool (default: %u)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error initializing block database</source>
        <translation type="unfinished">Помилка ініціалізації бази даних блоків</translation>
    </message>
    <message>
        <source>Error initializing wallet database environment %s!</source>
        <translation type="unfinished">Помилка ініціалізації середовища бази даних гаманця %s!</translation>
    </message>
    <message>
        <source>Error loading %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error loading %s: Wallet corrupted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error loading %s: Wallet requires newer version of %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error loading %s: You can&apos;t disable HD on a already existing HD wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error loading block database</source>
        <translation type="unfinished">Помилка завантаження бази даних блоків</translation>
    </message>
    <message>
        <source>Error opening block database</source>
        <translation type="unfinished">Помилка відкриття блоку бази даних </translation>
    </message>
    <message>
        <source>Error reading from database, shutting down.</source>
        <translation type="unfinished">Помилка читання бази даних, припиняю роботу.</translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished">Помилка</translation>
    </message>
    <message>
        <source>Error: A fatal internal error occurred, see debug.log for details</source>
        <translation type="unfinished">Помилка: Сталася фатальна помилка (детальніший опис наведено в debug.log)</translation>
    </message>
    <message>
        <source>Error: Disk space is low!</source>
        <translation type="unfinished">Помилка: Мало вільного місця на диску!</translation>
    </message>
    <message>
        <source>Failed to listen on any port. Use -listen=0 if you want this.</source>
        <translation type="unfinished">Не вдалося слухати на жодному порту. Використовуйте -listen=0, якщо ви хочете цього.</translation>
    </message>
    <message>
        <source>Fee (in %s/kB) to add to transactions you send (default: %s)</source>
        <translation type="unfinished">Комісія (в %s/КБ), що додаватиметься до вихідних транзакцій (типово: %s)</translation>
    </message>
    <message>
        <source>How many blocks to check at startup (default: %u, 0 = all)</source>
        <translation type="unfinished">Скільки блоків перевіряти під час запуску (типово: %u, 0 = всі)</translation>
    </message>
    <message>
        <source>Importing...</source>
        <translation type="unfinished">Імпорт...</translation>
    </message>
    <message>
        <source>Imports blocks from external blk000??.dat file on startup</source>
        <translation type="unfinished">Спочатку імпортує блоки з зовнішнього файлу blk000??.dat </translation>
    </message>
    <message>
        <source>Include IP addresses in debug output (default: %u)</source>
        <translation type="unfinished">Включити IP-адреси до налагоджувального виводу (типово: %u)</translation>
    </message>
    <message>
        <source>Incorrect or no genesis block found. Wrong datadir for network?</source>
        <translation type="unfinished">Початковий блок некоректний/відсутній. Чи правильно вказано каталог даних для обраної мережі?</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="unfinished">Інформація</translation>
    </message>
    <message>
        <source>Initialization sanity check failed. %s is shutting down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insufficient funds</source>
        <translation type="unfinished">Недостатньо коштів</translation>
    </message>
    <message>
        <source>Invalid -onion address: &apos;%s&apos;</source>
        <translation type="unfinished">Помилка в адресі -onion: «%s»</translation>
    </message>
    <message>
        <source>Invalid -proxy address: &apos;%s&apos;</source>
        <translation type="unfinished">Помилка в адресі проксі-сервера: «%s»</translation>
    </message>
    <message>
        <source>Invalid amount for -%s=&lt;amount&gt;: &apos;%s&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid amount for -fallbackfee=&lt;amount&gt;: &apos;%s&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid amount for -paytxfee=&lt;amount&gt;: &apos;%s&apos; (must be at least %s)</source>
        <translation type="unfinished">Вказано некоректну суму для параметру -paytxfee: «%s» (повинно бути щонайменше %s)</translation>
    </message>
    <message>
        <source>Invalid netmask specified in -whitelist: &apos;%s&apos;</source>
        <translation type="unfinished">Вказано неправильну маску підмережі для -whitelist: «%s»</translation>
    </message>
    <message>
        <source>Keep at most &lt;n&gt; unconnectable transactions in memory (default: %u)</source>
        <translation type="unfinished">Утримувати в пам&apos;яті щонайбільше &lt;n&gt; транзакцій, що споживають невідомі входи (типово: %u)</translation>
    </message>
    <message>
        <source>Keep the transaction memory pool below &lt;n&gt; megabytes (default: %u)</source>
        <translation type="unfinished">Утримувати розмір пам&apos;яті для пулу транзакцій меншим за &lt;n&gt; мегабайтів (типово: %u)</translation>
    </message>
    <message>
        <source>Listen for JSON-RPC connections on &lt;port&gt; (default: %u or testnet: %u)</source>
        <translation type="unfinished">Прослуховувати &lt;port&gt; для JSON-RPC з&apos;єднань (типово: %u, для тестової мережі: %u)</translation>
    </message>
    <message>
        <source>Listen for connections on &lt;port&gt; (default: %u or testnet: %u)</source>
        <translation type="unfinished">Чекати на з&apos;єднання на &lt;port&gt; (типово: %u, для тестової мережі: %u)</translation>
    </message>
    <message>
        <source>Loading addresses...</source>
        <translation type="unfinished">Завантаження адрес...</translation>
    </message>
    <message>
        <source>Loading banlist...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Loading block index...</source>
        <translation type="unfinished">Завантаження індексу блоків...</translation>
    </message>
    <message>
        <source>Loading wallet...</source>
        <translation type="unfinished">Завантаження гаманця...</translation>
    </message>
    <message>
        <source>Location of the auth cookie (default: data dir)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maintain at most &lt;n&gt; connections to peers (default: %u)</source>
        <translation type="unfinished">Підтримувати щонайбільше &lt;n&gt; з&apos;єднань з учасниками (типово: %u)</translation>
    </message>
    <message>
        <source>Make the wallet broadcast transactions</source>
        <translation type="unfinished">Дозволити гаманцю розповсюджувати транзакції</translation>
    </message>
    <message>
        <source>Maximum per-connection receive buffer, &lt;n&gt;*1000 bytes (default: %u)</source>
        <translation type="unfinished">Максимальний розмір вхідного буферу на одне з&apos;єднання, &lt;n&gt;*1000 байтів (типово: %u)</translation>
    </message>
    <message>
        <source>Maximum per-connection send buffer, &lt;n&gt;*1000 bytes (default: %u)</source>
        <translation type="unfinished">Максимальний розмір вихідного буферу на одне з&apos;єднання, &lt;n&gt;*1000 байтів (типово: %u)</translation>
    </message>
    <message>
        <source>Need to specify a port with -whitebind: &apos;%s&apos;</source>
        <translation type="unfinished">Необхідно вказати порт для -whitebind: «%s»</translation>
    </message>
    <message>
        <source>Node relay options:</source>
        <translation type="unfinished">Параметри вузла ретрансляції:</translation>
    </message>
    <message>
        <source>Not enough file descriptors available.</source>
        <translation type="unfinished">Бракує доступних дескрипторів файлів.</translation>
    </message>
    <message>
        <source>Only connect to nodes in network &lt;net&gt; (ipv4, ipv6 or onion)</source>
        <translation type="unfinished">Підключатися тільки до вузлів в мережі &lt;net&gt; (ipv4, ipv6 або onion)</translation>
    </message>
    <message>
        <source>Options:</source>
        <translation type="unfinished">Параметри:</translation>
    </message>
    <message>
        <source>Password for JSON-RPC connections</source>
        <translation type="unfinished">Пароль для JSON-RPC-з&apos;єднань</translation>
    </message>
    <message>
        <source>Prepend debug output with timestamp (default: %u)</source>
        <translation type="unfinished">Доповнювати налагоджувальний вивід відміткою часу (типово: %u)</translation>
    </message>
    <message>
        <source>Print this help message and exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print version and exit</source>
        <translation type="unfinished">Версія для друку і виходу</translation>
    </message>
    <message>
        <source>Prune cannot be configured with a negative value.</source>
        <translation type="unfinished">Розмір скороченого ланцюжка блоків не може бути від&apos;ємним. </translation>
    </message>
    <message>
        <source>Prune mode is incompatible with -txindex.</source>
        <translation type="unfinished">Використання скороченого ланцюжка блоків несумісне з параметром -txindex.</translation>
    </message>
    <message>
        <source>Pruning blockstore...</source>
        <translation type="unfinished">Скорочення кількості блоків...</translation>
    </message>
    <message>
        <source>RPC server options:</source>
        <translation type="unfinished">Параметри сервера RPC:</translation>
    </message>
    <message>
        <source>Rebuild chain state and block index from the blk*.dat files on disk</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rebuild chain state from the currently indexed blocks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reducing -maxconnections from %d to %d, because of system limitations.</source>
        <translation type="unfinished">Зменшення значення -maxconnections з %d до %d із-за обмежень системи.</translation>
    </message>
    <message>
        <source>Relay and mine data carrier transactions (default: %u)</source>
        <translation type="unfinished">Ретранслювати та створювати транзакції носіїв даних (типово: %u)</translation>
    </message>
    <message>
        <source>Relay non-P2SH multisig (default: %u)</source>
        <translation type="unfinished">Ретранслювати не-P2SH транзакції з мультипідписом (типово: %u)</translation>
    </message>
    <message>
        <source>Rescan the block chain for missing wallet transactions on startup</source>
        <translation type="unfinished">Спочатку переглянте ланцюжок блоків на наявність втрачених транзакцій гаманця</translation>
    </message>
    <message>
        <source>Rescanning...</source>
        <translation type="unfinished">Сканування...</translation>
    </message>
    <message>
        <source>Rewinding blocks...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Run in the background as a daemon and accept commands</source>
        <translation type="unfinished">Запустити в фоновому режимі (як демон) та приймати команди</translation>
    </message>
    <message>
        <source>Send trace/debug info to console instead of debug.log file</source>
        <translation type="unfinished">Відсилати налагоджувальну інформацію на консоль, а не у файл debug.log</translation>
    </message>
    <message>
        <source>Send transactions as zero-fee transactions if possible (default: %u)</source>
        <translation type="unfinished">Не сплачувати комісію за надсилання транзакцій, якщо це можливо (типово: %u)</translation>
    </message>
    <message>
        <source>Set database cache size in megabytes (%d to %d, default: %d)</source>
        <translation type="unfinished">Встановити розмір кешу бази даних в мегабайтах (від %d до %d, типово: %d)</translation>
    </message>
    <message>
        <source>Set key pool size to &lt;n&gt; (default: %u)</source>
        <translation type="unfinished">Встановити розмір пулу ключів &lt;n&gt; (типово: %u)</translation>
    </message>
    <message>
        <source>Set maximum BIP141 block weight (default: %d)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set maximum block size in bytes (default: %d)</source>
        <translation type="unfinished">Встановити максимальний розмір блоку у байтах (типово: %d)</translation>
    </message>
    <message>
        <source>Set the number of threads to service RPC calls (default: %d)</source>
        <translation type="unfinished">Встановити число потоків для обслуговування викликів RPC (типово: %d)</translation>
    </message>
    <message>
        <source>Show all debugging options (usage: --help -help-debug)</source>
        <translation type="unfinished">Показати всі налагоджувальні параметри (використання: --help -help-debug)</translation>
    </message>
    <message>
        <source>Shrink debug.log file on client startup (default: 1 when no -debug)</source>
        <translation type="unfinished">Стискати файл debug.log під час старту клієнта (типово: 1 коли відсутній параметр -debug)</translation>
    </message>
    <message>
        <source>Signing transaction failed</source>
        <translation type="unfinished">Підписання транзакції не вдалося</translation>
    </message>
    <message>
        <source>Specify configuration file (default: %s)</source>
        <translation type="unfinished">Вказати файл конфігурації (типово: %s)</translation>
    </message>
    <message>
        <source>Specify connection timeout in milliseconds (minimum: 1, default: %d)</source>
        <translation type="unfinished">Вказати тайм-аут підключення в мілісекундах (щонайменше: 1, типово: %d)</translation>
    </message>
    <message>
        <source>Specify data directory</source>
        <translation type="unfinished">Вкажіть робочий каталог</translation>
    </message>
    <message>
        <source>Specify pid file (default: %s)</source>
        <translation type="unfinished">Вказати pid-файл (типово: %s)</translation>
    </message>
    <message>
        <source>Specify wallet file (within data directory)</source>
        <translation type="unfinished">Вкажіть файл гаманця (в межах каталогу даних)</translation>
    </message>
    <message>
        <source>Specify your own public address</source>
        <translation type="unfinished">Вкажіть вашу власну публічну адресу</translation>
    </message>
    <message>
        <source>Spend unconfirmed change when sending transactions (default: %u)</source>
        <translation type="unfinished">Витрачати непідтверджену решту при відправленні транзакцій (типово: %u)</translation>
    </message>
    <message>
        <source>The source code is available from %s.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The transaction amount is too small to pay the fee</source>
        <translation type="unfinished">Неможливо сплатити комісію із-за малої суми транзакції</translation>
    </message>
    <message>
        <source>This is experimental software.</source>
        <translation type="unfinished">Це програмне забезпечення є експериментальним.</translation>
    </message>
    <message>
        <source>Threshold for disconnecting misbehaving peers (default: %u)</source>
        <translation type="unfinished">Поріг відключення учасників з поганою поведінкою (типово: %u)</translation>
    </message>
    <message>
        <source>Tor control port password (default: empty)</source>
        <translation type="unfinished">Пароль управління порт протоколом Tor (типово: empty)</translation>
    </message>
    <message>
        <source>Tor control port to use if onion listening enabled (default: %s)</source>
        <translation type="unfinished">Скористайтесь управлінням порт протоколом Tor, в разі перехоплення обміну цибулевої маршрутизації (типово: %s)</translation>
    </message>
    <message>
        <source>Transaction amount too small</source>
        <translation type="unfinished">Сума транзакції занадто мала</translation>
    </message>
    <message>
        <source>Transaction amounts must be positive</source>
        <translation type="unfinished">Суми монет у транзакції мають бути позитивними</translation>
    </message>
    <message>
        <source>Transaction too large for fee policy</source>
        <translation type="unfinished">Транзакція занадто велика для правил комісії</translation>
    </message>
    <message>
        <source>Transaction too large</source>
        <translation type="unfinished">Транзакція занадто велика</translation>
    </message>
    <message>
        <source>Unable to bind to %s on this computer (bind returned error %s)</source>
        <translation type="unfinished">Неможливо прив&apos;язатися до %s на цьому комп&apos;ютері (bind повернув помилку: %s)</translation>
    </message>
    <message>
        <source>Unable to bind to %s on this computer. %s is probably already running.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to start HTTP server. See debug log for details.</source>
        <translation type="unfinished">Неможливо запустити HTTP-сервер. Детальніший опис наведено в журналі зневадження.</translation>
    </message>
    <message>
        <source>Unknown network specified in -onlynet: &apos;%s&apos;</source>
        <translation type="unfinished">Невідома мережа вказана в -onlynet: «%s»</translation>
    </message>
    <message>
        <source>Unsupported argument -benchmark ignored, use -debug=bench.</source>
        <translation type="unfinished">Параметр -benchmark не підтримується та буде проігноровано; використовуйте -debug=bench.</translation>
    </message>
    <message>
        <source>Unsupported argument -debugnet ignored, use -debug=net.</source>
        <translation type="unfinished">Параметр -debugnet не підтримується та буде проігноровано; використовуйте -debug=net.</translation>
    </message>
    <message>
        <source>Unsupported argument -tor found, use -onion.</source>
        <translation type="unfinished">Параметр -tor не підтримується; використовуйте -onion.</translation>
    </message>
    <message>
        <source>Upgrade wallet to latest format on startup</source>
        <translation type="unfinished">Спочатку оновіть гаманець до останньої версії</translation>
    </message>
    <message>
        <source>Use UPnP to map the listening port (default: %u)</source>
        <translation type="unfinished">Використовувати UPnP для відображення порту, що прослуховується (типово: %u)</translation>
    </message>
    <message>
        <source>User Agent comment (%s) contains unsafe characters.</source>
        <translation type="unfinished">Коментар до Клієнта Користувача (%s) містить небезпечні символи.</translation>
    </message>
    <message>
        <source>Username for JSON-RPC connections</source>
        <translation type="unfinished">Ім&apos;я користувача для JSON-RPC-з&apos;єднань</translation>
    </message>
    <message>
        <source>Verifying blocks...</source>
        <translation type="unfinished">Перевірка блоків...</translation>
    </message>
    <message>
        <source>Verifying wallet...</source>
        <translation type="unfinished">Перевірка гаманця... </translation>
    </message>
    <message>
        <source>Wallet %s resides outside data directory %s</source>
        <translation type="unfinished">Гаманець %s знаходиться поза каталогом даних %s</translation>
    </message>
    <message>
        <source>Wallet debugging/testing options:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wallet needed to be rewritten: restart %s to complete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wallet options:</source>
        <translation type="unfinished">Параметри гаманця:</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Попередження</translation>
    </message>
    <message>
        <source>Warning: unknown new rules activated (versionbit %i)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Whether to operate in a blocks only mode (default: %u)</source>
        <translation type="unfinished">Чи слід працювати в режимі тільки блоки (типово: %u)</translation>
    </message>
    <message>
        <source>Zapping all transactions from wallet...</source>
        <translation type="unfinished">Видалення всіх транзакцій з гаманця...</translation>
    </message>
    <message>
        <source>ZeroMQ notification options:</source>
        <translation type="unfinished">Параметри сповіщень ZeroMQ:</translation>
    </message>
    <message>
        <source>OctoinCoin core</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AddressBookPage</name>
    <message>
        <source>Right-click to edit address or label</source>
        <translation>Клікніть правою кнопкою для редагування адреси або мітки</translation>
    </message>
    <message>
        <source>Create a new address</source>
        <translation>Створити нову адресу</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Нова</translation>
    </message>
    <message>
        <source>Copy the currently selected address to the system clipboard</source>
        <translation>Копіювати виділену адресу в буфер обміну</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Копіювати</translation>
    </message>
    <message>
        <source>C&amp;lose</source>
        <translation>З&amp;акрити</translation>
    </message>
    <message>
        <source>Delete the currently selected address from the list</source>
        <translation>Вилучити вибрані адреси з переліку</translation>
    </message>
    <message>
        <source>Export the data in the current tab to a file</source>
        <translation>Експортувати дані з поточної вкладки в файл</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation>&amp;Експорт...</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Видалити</translation>
    </message>
    <message>
        <source>Choose the address to send coins to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose the address to receive coins with</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;hoose</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sending addresses</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Receiving addresses</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>These are your OctoinCoin addresses for sending payments. Always check the amount and the receiving address before sending coins.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>These are your OctoinCoin addresses for receiving payments. It is recommended to use a new receiving address for each transaction.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy Address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy &amp;Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export Address List</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comma separated file (*.csv)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exporting Failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There was an error trying to save the address list to %1. Please try again.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AddressTableModel</name>
    <message>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(no label)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AskPassphraseDialog</name>
    <message>
        <source>Passphrase Dialog</source>
        <translation>Діалог введення паролю</translation>
    </message>
    <message>
        <source>Enter passphrase</source>
        <translation>Введіть пароль</translation>
    </message>
    <message>
        <source>New passphrase</source>
        <translation>Новий пароль</translation>
    </message>
    <message>
        <source>Repeat new passphrase</source>
        <translation>Повторіть пароль</translation>
    </message>
    <message>
        <source>Enter the new passphrase to the wallet.&lt;br/&gt;Please use a passphrase of &lt;b&gt;ten or more random characters&lt;/b&gt;, or &lt;b&gt;eight or more words&lt;/b&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Encrypt wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This operation needs your wallet passphrase to unlock the wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unlock wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This operation needs your wallet passphrase to decrypt the wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Decrypt wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change passphrase</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter the old passphrase and new passphrase to the wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Confirm wallet encryption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Are you sure you wish to encrypt your wallet?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wallet encrypted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>IMPORTANT: Any previous backups you have made of your wallet file should be replaced with the newly generated, encrypted wallet file. For security reasons, previous backups of the unencrypted wallet file will become useless as soon as you start using the new, encrypted wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wallet encryption failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wallet encryption failed due to an internal error. Your wallet was not encrypted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The supplied passphrases do not match.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wallet unlock failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The passphrase entered for the wallet decryption was incorrect.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wallet decryption failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wallet passphrase was successfully changed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning: The Caps Lock key is on!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning: If you encrypt your wallet and lose your passphrase, you will &lt;b&gt;LOSE ALL OF YOUR OCTOINCOINS&lt;/b&gt;!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 will close now to finish the encryption process. Remember that encrypting your wallet cannot fully protect your  octoins from being stolen by malware infecting your computer.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BanTableModel</name>
    <message>
        <source>IP/Netmask</source>
        <translation>IP/Маска підмережі</translation>
    </message>
    <message>
        <source>Banned Until</source>
        <translation>Заблоковано До</translation>
    </message>
</context>
<context>
    <name>BitcoinGUI</name>
    <message>
        <source>Sign &amp;message</source>
        <translation>&amp;Підписати повідомлення...</translation>
    </message>
    <message>
        <source>Synchronizing with network...</source>
        <translation>Синхронізація з мережею...</translation>
    </message>
    <message>
        <source>&amp;Overview</source>
        <translation>&amp;Огляд</translation>
    </message>
    <message>
        <source>Node</source>
        <translation>Вузол</translation>
    </message>
    <message>
        <source>Show general overview of wallet</source>
        <translation>Показати стан гаманця</translation>
    </message>
    <message>
        <source>&amp;Transactions</source>
        <translation>&amp;Транзакції</translation>
    </message>
    <message>
        <source>Browse transaction history</source>
        <translation>Переглянути історію транзакцій</translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation>&amp;Вихід</translation>
    </message>
    <message>
        <source>Quit application</source>
        <translation>Вийти</translation>
    </message>
    <message>
        <source>&amp;Options</source>
        <translation>&amp;Параметри...</translation>
    </message>
    <message>
        <source>&amp;Encrypt Wallet</source>
        <translation>&amp;Шифрування гаманця...</translation>
    </message>
    <message>
        <source>&amp;Backup Wallet</source>
        <translation>&amp;Резервне копіювання гаманця...</translation>
    </message>
    <message>
        <source>&amp;Change Passphrase</source>
        <translation>Змінити парол&amp;ь...</translation>
    </message>
    <message>
        <source>&amp;Sending addresses</source>
        <translation>Адреси для &amp;відправлення...</translation>
    </message>
    <message>
        <source>&amp;Receiving addresses</source>
        <translation>Адреси для &amp;отримання...</translation>
    </message>
    <message>
        <source>Open &amp;URI</source>
        <translation>Відкрити &amp;URI</translation>
    </message>
    <message>
        <source>Reindexing blocks on disk...</source>
        <translation>Переіндексація блоків на диску ...</translation>
    </message>
    <message>
        <source>Send coins to a OctoinCoin address</source>
        <translation>Відправити монети на вказану адресу</translation>
    </message>
    <message>
        <source>Backup wallet to another location</source>
        <translation>Резервне копіювання гаманця в інше місце</translation>
    </message>
    <message>
        <source>Change the passphrase used for wallet encryption</source>
        <translation>Змінити пароль, який використовується для шифрування гаманця</translation>
    </message>
    <message>
        <source>&amp;Debug window</source>
        <translation>В&amp;ікно зневадження</translation>
    </message>
    <message>
        <source>Open debugging and diagnostic console</source>
        <translation>Відкрити консоль зневадження і діагностики</translation>
    </message>
    <message>
        <source>&amp;Verify message</source>
        <translation>П&amp;еревірити повідомлення...</translation>
    </message>
    <message>
        <source>Wallet</source>
        <translation>Гаманець</translation>
    </message>
    <message>
        <source>&amp;Send</source>
        <translation>&amp;Відправити</translation>
    </message>
    <message>
        <source>&amp;Receive</source>
        <translation>&amp;Отримати</translation>
    </message>
    <message>
        <source>&amp;Show / Hide</source>
        <translation>Показа&amp;ти / Приховати</translation>
    </message>
    <message>
        <source>Show or hide the main Window</source>
        <translation>Показує або приховує головне вікно</translation>
    </message>
    <message>
        <source>Encrypt the private keys that belong to your wallet</source>
        <translation>Зашифрувати закриті ключі, що знаходяться у вашому гаманці</translation>
    </message>
    <message>
        <source>Sign messages with your OctoinCoin addresses to prove you own them</source>
        <translation>Підтвердіть, що Ви є власником повідомлення підписавши його Вашою OctoinCoin-адресою </translation>
    </message>
    <message>
        <source>Verify messages to ensure they were signed with specified OctoinCoin addresses</source>
        <translation>Перевірте повідомлення для впевненості, що воно підписано вказаною OctoinCoin-адресою</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Файл</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>&amp;Налаштування</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Довідка</translation>
    </message>
    <message>
        <source>Tabs toolbar</source>
        <translation>Панель вкладок</translation>
    </message>
    <message>
        <source>Request payments (generates QR codes and octoin: URIs)</source>
        <translation>Створити запит платежу (генерує QR-код та octoin: URI)</translation>
    </message>
    <message>
        <source>Show the list of used sending addresses and labels</source>
        <translation>Показати список адрес і міток, що були використані для відправлення</translation>
    </message>
    <message>
        <source>Show the list of used receiving addresses and labels</source>
        <translation>Показати список адрес і міток, що були використані для отримання</translation>
    </message>
    <message>
        <source>Open a octoin: URI or payment request</source>
        <translation>Відкрити octoin: URI чи запит платежу</translation>
    </message>
    <message>
        <source>&amp;Command-line options</source>
        <translation>П&amp;араметри командного рядка</translation>
    </message>
    <message numerus="yes">
        <source>%n active connection(s) to OctoinCoin network</source>
        <translation>
            <numerusform>%n активне з&apos;єднання з мережею OctoinCoin</numerusform>
            <numerusform>%n активні з&apos;єднання з мережею OctoinCoin</numerusform>
            <numerusform>%n активних з&apos;єднань з мережею OctoinCoin</numerusform>
        </translation>
    </message>
    <message>
        <source>NOT SYNCED</source>
        <translation>Недоступно жодного джерела блоків...</translation>
    </message>
    <message numerus="yes">
        <source>Processed %n block(s) of transaction history.</source>
        <translation>
            <numerusform>Оброблено %n блок історії транзакцій.</numerusform>
            <numerusform>Оброблено %n блоки історії транзакцій.</numerusform>
            <numerusform>Оброблено %n блоків історії транзакцій.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n година</numerusform>
            <numerusform>%n години</numerusform>
            <numerusform>%n годин</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n день</numerusform>
            <numerusform>%n дні</numerusform>
            <numerusform>%n днів</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n week(s)</source>
        <translation>
            <numerusform>%n тиждень</numerusform>
            <numerusform>%n тижня</numerusform>
            <numerusform>%n тижнів</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 and %2</source>
        <translation>%1 та %2</translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n рік</numerusform>
            <numerusform>%n роки</numerusform>
            <numerusform>%n років</numerusform>
        </translation>
    </message>
    <message>
        <source>SYNCING...</source>
        <translation>%1 тому</translation>
    </message>
    <message>
        <source>Last received block was generated %1 ago.</source>
        <translation>Останній отриманий блок було згенеровано %1 тому.</translation>
    </message>
    <message>
        <source>Transactions after this will not yet be visible.</source>
        <translation>Пізніші транзакції не буде видно.</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Помилка</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Попередження</translation>
    </message>
    <message>
        <source>Information</source>
        <translation>Інформація</translation>
    </message>
    <message>
        <source>Up to date</source>
        <translation>Синхронізовано</translation>
    </message>
    <message>
        <source>Catching up...</source>
        <translation>Синхронізується...</translation>
    </message>
    <message>
        <source>Date: %1
</source>
        <translation>Дата: %1
</translation>
    </message>
    <message>
        <source>Amount: %1
</source>
        <translation>Кількість: %1
</translation>
    </message>
    <message>
        <source>Type: %1
</source>
        <translation>Тип: %1
</translation>
    </message>
    <message>
        <source>Label: %1
</source>
        <translation>Мітка: %1
</translation>
    </message>
    <message>
        <source>Address: %1
</source>
        <translation>Адреса: %1
</translation>
    </message>
    <message>
        <source>Sent transaction</source>
        <translation>Надіслані транзакції</translation>
    </message>
    <message>
        <source>Incoming transaction</source>
        <translation>Отримані транзакції</translation>
    </message>
    <message>
        <source>Wallet is &lt;b&gt;encrypted&lt;/b&gt; and currently &lt;b&gt;unlocked&lt;/b&gt;</source>
        <translation>&lt;b&gt;Зашифрований&lt;/b&gt; гаманець &lt;b&gt;розблоковано&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Wallet is &lt;b&gt;encrypted&lt;/b&gt; and currently &lt;b&gt;locked&lt;/b&gt;</source>
        <translation>&lt;b&gt;Зашифрований&lt;/b&gt; гаманець &lt;b&gt;заблоковано&lt;/b&gt;</translation>
    </message>
    <message>
        <source>A fatal error occurred.OctoinCoin can no longer continue safely and will quit.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Redeem codes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Browse page of bonus codes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Modify configuration options for %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show the %1 help message to get a list with possible OctoinCoin command-line options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Money share</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 client</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indexing blocks on disk...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Processing blocks on disk...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OctoinCoin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Restore Wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Return to the previously made backup copy of the wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock Wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unlock Wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stop mining</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Start mining</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wallet must be unlocked to stake. Do you want to unlock your wallet?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BonusCodeTab</name>
    <message>
        <source>Bonus Code Tab</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create code</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Amount of OCC coins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create a code</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Created codes:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Redeem code</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Code Id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished">Дата</translation>
    </message>
    <message>
        <source>Amount</source>
        <translation type="unfinished">Кількість</translation>
    </message>
    <message>
        <source>Transaction hash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>KeyWord</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unused</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unconfirmed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid key: Check the key and try again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You do not have the right amount in your account.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Code create fail</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Your code is created. The code will be available after confirmation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Commission for the confirmation of the bonus code.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The key is no confirmed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Redeemed codes:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bonus code is not available.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error adding key to wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Key create fail</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The transaction was rejected! This might happen if some of the coins in your wallet were already spent, such as if you used a copy of wallet.dat and coins were spent in the copy but not marked as spent here.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Solution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%0 OctoinCoins were received with this code.
We recommend waiting for 3 transaction confirmations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The bonus key was added to your wallet, but it was not possible to scan it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In order to solve this problem, you need to rescan your wallet. Scanning a wallet will take some time want to continue?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CoinControlDialog</name>
    <message>
        <source>Coin Selection</source>
        <translation>Вибір Монет</translation>
    </message>
    <message>
        <source>Quantity:</source>
        <translation>Кількість:</translation>
    </message>
    <message>
        <source>Bytes:</source>
        <translation>Байтів:</translation>
    </message>
    <message>
        <source>Amount:</source>
        <translation>Сума:</translation>
    </message>
    <message>
        <source>Priority:</source>
        <translation>Пріорітет:</translation>
    </message>
    <message>
        <source>Fee:</source>
        <translation>Комісія:</translation>
    </message>
    <message>
        <source>Dust:</source>
        <translation>Пил:</translation>
    </message>
    <message>
        <source>After Fee:</source>
        <translation>Після комісії:</translation>
    </message>
    <message>
        <source>Change:</source>
        <translation>Решта:</translation>
    </message>
    <message>
        <source>(un)select all</source>
        <translation>Вибрати/зняти всі</translation>
    </message>
    <message>
        <source>Tree mode</source>
        <translation>Деревом</translation>
    </message>
    <message>
        <source>List mode</source>
        <translation>Списком</translation>
    </message>
    <message>
        <source>Amount</source>
        <translation>Кількість</translation>
    </message>
    <message>
        <source>Received with label</source>
        <translation>Отримано з позначкою</translation>
    </message>
    <message>
        <source>Received with address</source>
        <translation>Отримано з адресою</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>Confirmations</source>
        <translation>Підтверджень</translation>
    </message>
    <message>
        <source>Confirmed</source>
        <translation>Підтверджені</translation>
    </message>
    <message>
        <source>Priority</source>
        <translation>Пріоритет</translation>
    </message>
    <message>
        <source>Copy address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy amount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy transaction ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock unspent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unlock unspent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy quantity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy fee</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy after fee</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy bytes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy dust</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy change</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>highest</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>higher</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>high</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>medium-high</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>low-medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>low</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>lower</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>lowest</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(%1 locked)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>none</source>
        <translation type="unfinished">відсутні</translation>
    </message>
    <message>
        <source>yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>no</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This label turns red if the transaction size is greater than 1000 bytes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This means a fee of at least %1 per kB is required.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can vary +/- 1 byte per input.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transactions with higher priority are more likely to get included into a block.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This label turns red if the priority is smaller than &quot;medium&quot;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This label turns red if any recipient receives an amount smaller than the current dust threshold.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can vary +/- %1 satoshi(s) per input.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(no label)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>change from %1 (%2)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(change)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EditAddressDialog</name>
    <message>
        <source>Edit Address</source>
        <translation>Редагувати адресу</translation>
    </message>
    <message>
        <source>&amp;Label</source>
        <translation>&amp;Мітка</translation>
    </message>
    <message>
        <source>The label associated with this address list entry</source>
        <translation>Мітка, пов&apos;язана з цим записом списку адрес</translation>
    </message>
    <message>
        <source>The address associated with this address list entry. This can only be modified for sending addresses.</source>
        <translation>Адреса, пов&apos;язана з цим записом списку адрес. Це поле може бути модифіковане лише для адрес відправлення.</translation>
    </message>
    <message>
        <source>&amp;Address</source>
        <translation>&amp;Адреса</translation>
    </message>
    <message>
        <source>New receiving address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New sending address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit receiving address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit sending address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The entered address &quot;%1&quot; is not a valid OctoinCoin address.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The entered address &quot;%1&quot; is already in the address book.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not unlock wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New key generation failed.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FreespaceChecker</name>
    <message>
        <source>A new data directory will be created.</source>
        <translation>Буде створено новий каталог даних.</translation>
    </message>
    <message>
        <source>name</source>
        <translation>назва</translation>
    </message>
    <message>
        <source>Directory already exists. Add %1 if you intend to create a new directory here.</source>
        <translation>Каталог вже існує. Додайте %1, якщо ви мали намір створити там новий каталог.</translation>
    </message>
    <message>
        <source>Path already exists, and is not a directory.</source>
        <translation>Шлях вже існує і не є каталогом.</translation>
    </message>
    <message>
        <source>Cannot create data directory here.</source>
        <translation>Тут неможливо створити каталог даних.</translation>
    </message>
</context>
<context>
    <name>HelpMessageDialog</name>
    <message>
        <source>version</source>
        <translation>версії</translation>
    </message>
    <message>
        <source>(%1-bit)</source>
        <translation>(%1-бітний)</translation>
    </message>
    <message>
        <source>Command-line options</source>
        <translation>Параметри командного рядка</translation>
    </message>
    <message>
        <source>Usage:</source>
        <translation>Використання:</translation>
    </message>
    <message>
        <source>command-line options</source>
        <translation>параметри командного рядка</translation>
    </message>
    <message>
        <source>UI Options:</source>
        <translation>Параметри інтерфейсу:</translation>
    </message>
    <message>
        <source>Choose data directory on startup (default: %u)</source>
        <translation>Обирати каталог даних під час запуску (типово: %u)</translation>
    </message>
    <message>
        <source>Set language, for example &quot;de_DE&quot; (default: system locale)</source>
        <translation>Встановити мову (наприклад: &quot;de_DE&quot;) (типово: системна)</translation>
    </message>
    <message>
        <source>Start minimized</source>
        <translation>Запускати згорнутим</translation>
    </message>
    <message>
        <source>Set SSL root certificates for payment request (default: -system-)</source>
        <translation>Вказати кореневі SSL-сертифікати для запиту платежу (типово: -системні-)</translation>
    </message>
    <message>
        <source>Show splash screen on startup (default: %u)</source>
        <translation>Показувати заставку під час запуску (типово: %u)</translation>
    </message>
    <message>
        <source>About %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset all settings changed in the GUI</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InformationDialog</name>
    <message>
        <source>Information</source>
        <translation type="unfinished">Інформація</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Intro</name>
    <message>
        <source>Welcome</source>
        <translation>Вітання</translation>
    </message>
    <message>
        <source>Use the default data directory</source>
        <translation>Використовувати типовий каталог даних</translation>
    </message>
    <message>
        <source>Use a custom data directory:</source>
        <translation>Використовувати свій каталог даних:</translation>
    </message>
    <message>
        <source>Error: Specified data directory &quot;%1&quot; cannot be created.</source>
        <translation>Помилка: неможливо створити обраний каталог даних «%1».</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Помилка</translation>
    </message>
    <message numerus="yes">
        <source>%n GB of free space available</source>
        <translation>
            <numerusform>Доступно %n ГБ вільного простору</numerusform>
            <numerusform>Доступно %n ГБ вільного простору</numerusform>
            <numerusform>Доступно %n ГБ вільного простору</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>(of %n GB needed)</source>
        <translation>
            <numerusform>(в той час, як необхідно %n ГБ)</numerusform>
            <numerusform>(в той час, як необхідно %n ГБ)</numerusform>
            <numerusform>(в той час, як необхідно %n ГБ)</numerusform>
        </translation>
    </message>
    <message>
        <source>Welcome to %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>As this is the first time the program is launched, you can choose where %1 will store its data.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 will download and store a copy of the OctoinCoin block chain. At least %2GB of data will be stored in this directory, and it will grow over time. The wallet will also be stored in this directory.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OpenURIDialog</name>
    <message>
        <source>Open URI</source>
        <translation>Відкрити URI</translation>
    </message>
    <message>
        <source>Open payment request from URI or file</source>
        <translation>Відкрити запит платежу з URI або файлу</translation>
    </message>
    <message>
        <source>URI:</source>
        <translation>URI:</translation>
    </message>
    <message>
        <source>Select payment request file</source>
        <translation>Виберіть файл запиту платежу</translation>
    </message>
    <message>
        <source>Select payment request file to open</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OptionsDialog</name>
    <message>
        <source>Options</source>
        <translation>Параметри</translation>
    </message>
    <message>
        <source>&amp;Main</source>
        <translation>&amp;Головні</translation>
    </message>
    <message>
        <source>Size of &amp;database cache</source>
        <translation>Розмір &amp;кешу бази даних</translation>
    </message>
    <message>
        <source>MB</source>
        <translation>МБ</translation>
    </message>
    <message>
        <source>Number of script &amp;verification threads</source>
        <translation>Кількість потоків &amp;сценарію перевірки</translation>
    </message>
    <message>
        <source>Accept connections from outside</source>
        <translation>Приймати підключення ззовні</translation>
    </message>
    <message>
        <source>Allow incoming connections</source>
        <translation>Дозволити вхідні з’єднання</translation>
    </message>
    <message>
        <source>IP address of the proxy (e.g. IPv4: 127.0.0.1 / IPv6: ::1)</source>
        <translation>IP-адреса проксі-сервера (наприклад IPv4: 127.0.0.1 / IPv6: ::1)</translation>
    </message>
    <message>
        <source>Minimize instead of exit the application when the window is closed. When this option is enabled, the application will be closed only after selecting Exit in the menu.</source>
        <translation>Згортати замість закриття. Якщо ця опція включена, програма закриється лише після вибору відповідного пункту в меню.</translation>
    </message>
    <message>
        <source>Third party URLs (e.g. a block explorer) that appear in the transactions tab as context menu items. %s in the URL is replaced by transaction hash. Multiple URLs are separated by vertical bar |.</source>
        <translation>Сторонні URL (наприклад, block explorer), що з&apos;являться на вкладці транзакцій у вигляді пункту контекстного меню. %s в URL буде замінено на хеш транзакції. Для відокремлення URLів використовуйте вертикальну риску |.</translation>
    </message>
    <message>
        <source>Third party transaction URLs</source>
        <translation>Сторонні URL транзакцій</translation>
    </message>
    <message>
        <source>Active command-line options that override above options:</source>
        <translation>Активовані параметри командного рядка, що перекривають вищевказані параметри:</translation>
    </message>
    <message>
        <source>Reset all client options to default.</source>
        <translation>Скинути всі параметри клієнта на типові.</translation>
    </message>
    <message>
        <source>&amp;Reset Options</source>
        <translation>С&amp;кинути параметри</translation>
    </message>
    <message>
        <source>&amp;Network</source>
        <translation>&amp;Мережа</translation>
    </message>
    <message>
        <source>(0 = auto, &lt;0 = leave that many cores free)</source>
        <translation>(0 = автоматично, &lt;0 = вказує кількість вільних ядер)</translation>
    </message>
    <message>
        <source>W&amp;allet</source>
        <translation>Г&amp;аманець</translation>
    </message>
    <message>
        <source>Expert</source>
        <translation>Експерт</translation>
    </message>
    <message>
        <source>Enable coin &amp;control features</source>
        <translation>Ввімкнути &amp;керування входами</translation>
    </message>
    <message>
        <source>If you disable the spending of unconfirmed change, the change from a transaction cannot be used until that transaction has at least one confirmation. This also affects how your balance is computed.</source>
        <translation>Якщо вимкнути витрату непідтвердженої решти, то решту від транзакції не можна буде використати, допоки ця транзакція не матиме хоча б одне підтвердження. Це також впливає на розрахунок балансу.</translation>
    </message>
    <message>
        <source>&amp;Spend unconfirmed change</source>
        <translation>&amp;Витрачати непідтверджену решту</translation>
    </message>
    <message>
        <source>Automatically open the OctoinCoin client port on the router. This only works when your router supports UPnP and it is enabled.</source>
        <translation>Автоматично відкривати порт для клієнту біткоін на роутері. Працює лише якщо ваш роутер підтримує UPnP і ця функція увімкнена.</translation>
    </message>
    <message>
        <source>Map port using &amp;UPnP</source>
        <translation>Відображення порту через &amp;UPnP</translation>
    </message>
    <message>
        <source>Connect to the OctoinCoin network through a SOCKS5 proxy.</source>
        <translation>Підключення до мережі OctoinCoin через SOCKS5 проксі.</translation>
    </message>
    <message>
        <source>&amp;Connect through SOCKS5 proxy (default proxy):</source>
        <translation>&amp;Підключення через SOCKS5 проксі (проксі за замовчуванням):</translation>
    </message>
    <message>
        <source>Proxy &amp;IP:</source>
        <translation>&amp;IP проксі:</translation>
    </message>
    <message>
        <source>&amp;Port:</source>
        <translation>&amp;Порт:</translation>
    </message>
    <message>
        <source>Port of the proxy (e.g. 9050)</source>
        <translation>Порт проксі-сервера (наприклад 9050)</translation>
    </message>
    <message>
        <source>Used for reaching peers via:</source>
        <translation>Приєднуватися до учасників через:</translation>
    </message>
    <message>
        <source>Shows, if the supplied default SOCKS5 proxy is used to reach peers via this network type.</source>
        <translation>Вказує на використання наявного типового проксі SOCKS5, що використувується задля встановлення зв&apos;язку з пірами через мережу такого типу.</translation>
    </message>
    <message>
        <source>IPv4</source>
        <translation>IPv4</translation>
    </message>
    <message>
        <source>IPv6</source>
        <translation>IPv6</translation>
    </message>
    <message>
        <source>Tor</source>
        <translation>Tor</translation>
    </message>
    <message>
        <source>Connect to the OctoinCoin network through a separate SOCKS5 proxy for Tor hidden services.</source>
        <translation>Підключатися до мережі OctoinCoin через окремий SOCKS5 проксі для прихованих сервісів Tor.</translation>
    </message>
    <message>
        <source>Use separate SOCKS5 proxy to reach peers via Tor hidden services:</source>
        <translation>Використовувати окремий SOCKS5-проксі для з&apos;єднання з учасниками через приховані сервіси Tor:</translation>
    </message>
    <message>
        <source>&amp;Window</source>
        <translation>&amp;Вікно</translation>
    </message>
    <message>
        <source>Show only a tray icon after minimizing the window.</source>
        <translation>Показувати лише іконку в треї після згортання вікна.</translation>
    </message>
    <message>
        <source>&amp;Minimize to the tray instead of the taskbar</source>
        <translation>Мінімізувати &amp;у трей</translation>
    </message>
    <message>
        <source>M&amp;inimize on close</source>
        <translation>Згортати замість закритт&amp;я</translation>
    </message>
    <message>
        <source>&amp;Display</source>
        <translation>&amp;Відображення</translation>
    </message>
    <message>
        <source>User Interface &amp;language:</source>
        <translation>Мов&amp;а інтерфейсу користувача:</translation>
    </message>
    <message>
        <source>&amp;Unit to show amounts in:</source>
        <translation>В&amp;имірювати монети в:</translation>
    </message>
    <message>
        <source>Choose the default subdivision unit to show in the interface and when sending coins.</source>
        <translation>Виберіть одиницю вимірювання монет, яка буде відображатись в гаманці та при відправленні.</translation>
    </message>
    <message>
        <source>Whether to show coin control features or not.</source>
        <translation>Показати або сховати керування входами.</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Гаразд</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Скасувати</translation>
    </message>
    <message>
        <source>default</source>
        <translation>типово</translation>
    </message>
    <message>
        <source>none</source>
        <translation>відсутні</translation>
    </message>
    <message>
        <source>Confirm options reset</source>
        <translation>Підтвердження скидання параметрів</translation>
    </message>
    <message>
        <source>Client restart required to activate changes.</source>
        <translation>Для застосування змін необхідно перезапустити клієнта.</translation>
    </message>
    <message>
        <source>Client will be shut down. Do you want to proceed?</source>
        <translation>Клієнт буде вимкнено. Продовжити?</translation>
    </message>
    <message>
        <source>This change would require a client restart.</source>
        <translation>Ця зміна вступить в силу після перезапуску клієнта</translation>
    </message>
    <message>
        <source>The supplied proxy address is invalid.</source>
        <translation>Невірно вказано адресу проксі.</translation>
    </message>
    <message>
        <source>Automatically start %1 after logging in to the system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Start %1 on system login</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Hide the icon from the system tray.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide tray icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The user interface language can be set here. This setting will take effect after restarting %1.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OverviewPage</name>
    <message>
        <source>Form</source>
        <translation>Форма</translation>
    </message>
    <message>
        <source>The displayed information may be out of date. Your wallet automatically synchronizes with the OctoinCoin network after a connection is established, but this process has not completed yet.</source>
        <translation>Показана інформація вже може бути застарілою. Ваш гаманець буде автоматично синхронізовано з мережею OctoinCoin після встановлення підключення, але цей процес ще не завершено.</translation>
    </message>
    <message>
        <source>Watch-only:</source>
        <translation>Тільки спостереження:</translation>
    </message>
    <message>
        <source>Available:</source>
        <translation>Наявно:</translation>
    </message>
    <message>
        <source>Your current spendable balance</source>
        <translation>Ваш поточний підтверджений баланс</translation>
    </message>
    <message>
        <source>Pending:</source>
        <translation>Очікується:</translation>
    </message>
    <message>
        <source>Total of transactions that have yet to be confirmed, and do not yet count toward the spendable balance</source>
        <translation>Сума монет у непідтверджених транзакціях</translation>
    </message>
    <message>
        <source>Immature:</source>
        <translation>Незрілі:</translation>
    </message>
    <message>
        <source>Mined balance that has not yet matured</source>
        <translation>Баланс видобутих та ще недозрілих монет</translation>
    </message>
    <message>
        <source>Balances</source>
        <translation>Баланси</translation>
    </message>
    <message>
        <source>Total:</source>
        <translation>Всього:</translation>
    </message>
    <message>
        <source>Your current total balance</source>
        <translation>Ваш поточний сукупний баланс</translation>
    </message>
    <message>
        <source>Your current balance in watch-only addresses</source>
        <translation>Ваш поточний баланс в адресах для спостереження</translation>
    </message>
    <message>
        <source>Spendable:</source>
        <translation>Доступно:</translation>
    </message>
    <message>
        <source>Recent transactions</source>
        <translation>Останні транзакції</translation>
    </message>
    <message>
        <source>Unconfirmed transactions to watch-only addresses</source>
        <translation>Непідтверджені транзакції на адреси для спостереження</translation>
    </message>
    <message>
        <source>Mined balance in watch-only addresses that has not yet matured</source>
        <translation>Баланс видобутих та ще недозрілих монет на адресах для спостереження</translation>
    </message>
    <message>
        <source>Current total balance in watch-only addresses</source>
        <translation>Поточний сукупний баланс в адресах для спостереження</translation>
    </message>
    <message>
        <source>Stake:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Staked balance that has not yet matured</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>0.000 000 00 OCC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Staked balance in watch-only addresses that has not yet matured</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PaymentServer</name>
    <message>
        <source>Payment request error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot start bitcoin: click-to-pay handler</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>URI handling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Payment request fetch URL is invalid: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid payment address %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>URI cannot be parsed! This can be caused by an invalid OctoinCoin address or malformed URI parameters.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Payment request file handling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Payment request file cannot be read! This can be caused by an invalid payment request file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Payment request rejected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Payment request network doesn&apos;t match client network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Payment request expired.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Payment request is not initialized.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unverified payment requests to custom payment scripts are unsupported.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid payment request.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Requested payment amount of %1 is too small (considered dust).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Refund from %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Payment request %1 is too large (%2 bytes, allowed %3 bytes).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error communicating with %1: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Payment request cannot be parsed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bad response from server %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Network request error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Payment acknowledged</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PeerTableModel</name>
    <message>
        <source>User Agent</source>
        <translation>Клієнт користувача</translation>
    </message>
    <message>
        <source>Node/Service</source>
        <translation>Вузол/Сервіс</translation>
    </message>
    <message>
        <source>Ping Time</source>
        <translation>Затримка</translation>
    </message>
</context>
<context>
    <name>PreviewCodeDialog</name>
    <message>
        <source>Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Information about the bonus </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Amount</source>
        <translation>Кількість</translation>
    </message>
    <message>
        <source>Enter a OctoinCoin address (e.g. %1)</source>
        <translation>Введіть адресу OctoinCoin (наприклад %1)</translation>
    </message>
    <message>
        <source>%1 d</source>
        <translation>%1 д</translation>
    </message>
    <message>
        <source>%1 h</source>
        <translation>%1 г</translation>
    </message>
    <message>
        <source>%1 m</source>
        <translation>%1 х</translation>
    </message>
    <message>
        <source>%1 s</source>
        <translation>%1 с</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Відсутні</translation>
    </message>
    <message>
        <source>N/A</source>
        <translation>Н/Д</translation>
    </message>
    <message>
        <source>%1 ms</source>
        <translation>%1 мс</translation>
    </message>
    <message>
        <source>%1 didn&apos;t yet exit safely...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject::QObject</name>
    <message>
        <source>Error: Specified data directory &quot;%1&quot; does not exist.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error: Cannot parse configuration file: %1. Only use key=value syntax.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error: %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QRImageWidget</name>
    <message>
        <source>&amp;Copy Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save QR Code</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PNG Image (*.png)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save Image...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>RPCConsole</name>
    <message>
        <source>N/A</source>
        <translation>Н/Д</translation>
    </message>
    <message>
        <source>Client version</source>
        <translation>Версія клієнту</translation>
    </message>
    <message>
        <source>&amp;Information</source>
        <translation>&amp;Інформація</translation>
    </message>
    <message>
        <source>Debug window</source>
        <translation>Вікно зневадження</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Загальна</translation>
    </message>
    <message>
        <source>Using BerkeleyDB version</source>
        <translation>Використовується BerkeleyDB версії</translation>
    </message>
    <message>
        <source>Startup time</source>
        <translation>Час запуску</translation>
    </message>
    <message>
        <source>Network</source>
        <translation>Мережа</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Ім’я</translation>
    </message>
    <message>
        <source>Number of connections</source>
        <translation>Кількість підключень</translation>
    </message>
    <message>
        <source>Block chain</source>
        <translation>Ланцюг блоків</translation>
    </message>
    <message>
        <source>Current number of blocks</source>
        <translation>Поточне число блоків</translation>
    </message>
    <message>
        <source>Memory Pool</source>
        <translation>Пул пам&apos;яті</translation>
    </message>
    <message>
        <source>Current number of transactions</source>
        <translation>Поточне число транзакцій</translation>
    </message>
    <message>
        <source>Memory usage</source>
        <translation>Використання пам&apos;яті</translation>
    </message>
    <message>
        <source>Received</source>
        <translation>Отримано</translation>
    </message>
    <message>
        <source>Sent</source>
        <translation>Відправлено</translation>
    </message>
    <message>
        <source>&amp;Peers</source>
        <translation>&amp;Учасники</translation>
    </message>
    <message>
        <source>Banned peers</source>
        <translation>Заблоковані вузли</translation>
    </message>
    <message>
        <source>Select a peer to view detailed information.</source>
        <translation>Виберіть учасника для перегляду детальнішої інформації</translation>
    </message>
    <message>
        <source>Whitelisted</source>
        <translation>В білому списку</translation>
    </message>
    <message>
        <source>Direction</source>
        <translation>Напрямок</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Версія</translation>
    </message>
    <message>
        <source>Starting Block</source>
        <translation>Початковий Блок</translation>
    </message>
    <message>
        <source>Synced Headers</source>
        <translation>Синхронізовані Заголовки</translation>
    </message>
    <message>
        <source>Synced Blocks</source>
        <translation>Синхронізовані Блоки</translation>
    </message>
    <message>
        <source>User Agent</source>
        <translation>Клієнт користувача</translation>
    </message>
    <message>
        <source>Services</source>
        <translation>Сервіси</translation>
    </message>
    <message>
        <source>Ban Score</source>
        <translation>Очки бану</translation>
    </message>
    <message>
        <source>Connection Time</source>
        <translation>Час з&apos;єднання</translation>
    </message>
    <message>
        <source>Last Send</source>
        <translation>Востаннє відправлено</translation>
    </message>
    <message>
        <source>Last Receive</source>
        <translation>Востаннє отримано</translation>
    </message>
    <message>
        <source>Ping Time</source>
        <translation>Затримка</translation>
    </message>
    <message>
        <source>The duration of a currently outstanding ping.</source>
        <translation>Тривалість поточної затримки.</translation>
    </message>
    <message>
        <source>Ping Wait</source>
        <translation>Поточна Затримка</translation>
    </message>
    <message>
        <source>Time Offset</source>
        <translation>Різниця часу</translation>
    </message>
    <message>
        <source>Last block time</source>
        <translation>Час останнього блоку</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Відкрити</translation>
    </message>
    <message>
        <source>&amp;Console</source>
        <translation>&amp;Консоль</translation>
    </message>
    <message>
        <source>&amp;Network Traffic</source>
        <translation>&amp;Мережевий трафік</translation>
    </message>
    <message>
        <source>&amp;Clear</source>
        <translation>&amp;Очистити</translation>
    </message>
    <message>
        <source>In:</source>
        <translation>Вхідних:</translation>
    </message>
    <message>
        <source>Out:</source>
        <translation>Вихідних:</translation>
    </message>
    <message>
        <source>Debug log file</source>
        <translation>Файл звіту зневадження</translation>
    </message>
    <message>
        <source>Clear console</source>
        <translation>Очистити консоль</translation>
    </message>
    <message>
        <source>&amp;Disconnect Node</source>
        <translation>&amp;Від&apos;єднати Вузол</translation>
    </message>
    <message>
        <source>Ban Node for</source>
        <translation>Заблокувати Вузол на</translation>
    </message>
    <message>
        <source>1 &amp;hour</source>
        <translation>1 &amp;годину</translation>
    </message>
    <message>
        <source>1 &amp;day</source>
        <translation>1 &amp;день</translation>
    </message>
    <message>
        <source>1 &amp;week</source>
        <translation>1 &amp;тиждень</translation>
    </message>
    <message>
        <source>1 &amp;year</source>
        <translation>1 &amp;рік</translation>
    </message>
    <message>
        <source>&amp;Unban Node</source>
        <translation>&amp;Розблокувати Вузол</translation>
    </message>
    <message>
        <source>Use up and down arrows to navigate history, and &lt;b&gt;Ctrl-L&lt;/b&gt; to clear screen.</source>
        <translation>Використовуйте стрілки вгору вниз для навігації по історії, і &lt;b&gt;Ctrl-L&lt;/b&gt; для очищення екрана.</translation>
    </message>
    <message>
        <source>Type &lt;b&gt;help&lt;/b&gt; for an overview of available commands.</source>
        <translation>Наберіть &lt;b&gt;help&lt;/b&gt; для перегляду доступних команд.</translation>
    </message>
    <message>
        <source>%1 B</source>
        <translation>%1 Б</translation>
    </message>
    <message>
        <source>%1 KB</source>
        <translation>%1 КБ</translation>
    </message>
    <message>
        <source>%1 MB</source>
        <translation>%1 МБ</translation>
    </message>
    <message>
        <source>%1 GB</source>
        <translation>%1 ГБ</translation>
    </message>
    <message>
        <source>(node id: %1)</source>
        <translation>(ІД вузла: %1)</translation>
    </message>
    <message>
        <source>via %1</source>
        <translation>через %1</translation>
    </message>
    <message>
        <source>never</source>
        <translation>ніколи</translation>
    </message>
    <message>
        <source>Inbound</source>
        <translation>Вхідний</translation>
    </message>
    <message>
        <source>Outbound</source>
        <translation>Вихідний</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Так</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Ні</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Невідома</translation>
    </message>
    <message>
        <source>Datadir</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open the %1 debug log file from the current data directory. This can take a few seconds for large log files.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Totals: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Welcome to the %1 RPC console.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ReceiveCoinsDialog</name>
    <message>
        <source>&amp;Amount:</source>
        <translation>&amp;Кількість:</translation>
    </message>
    <message>
        <source>&amp;Label:</source>
        <translation>&amp;Мітка:</translation>
    </message>
    <message>
        <source>&amp;Message:</source>
        <translation>&amp;Повідомлення:</translation>
    </message>
    <message>
        <source>Reuse one of the previously used receiving addresses. Reusing addresses has security and privacy issues. Do not use this unless re-generating a payment request made before.</source>
        <translation>Повторно використати одну з адрес. Повторне використання адрес створює ризики безпеки та конфіденційності. Не використовуйте її, окрім як для створення повторного запиту платежу.</translation>
    </message>
    <message>
        <source>R&amp;euse an existing receiving address (not recommended)</source>
        <translation>По&amp;вторно використати адресу для отримання (не рекомендується)</translation>
    </message>
    <message>
        <source>An optional message to attach to the payment request, which will be displayed when the request is opened. Note: The message will not be sent with the payment over the OctoinCoin network.</source>
        <translation>Необов&apos;язкове повідомлення на додаток до запиту платежу, котре буде показане під час відкриття запиту. Примітка: Це повідомлення не буде відправлено з платежем через мережу OctoinCoin.</translation>
    </message>
    <message>
        <source>An optional label to associate with the new receiving address.</source>
        <translation>Необов&apos;язкове поле для мітки нової адреси отримувача.</translation>
    </message>
    <message>
        <source>Use this form to request payments. All fields are &lt;b&gt;optional&lt;/b&gt;.</source>
        <translation>Використовуйте цю форму, щоб отримати платежі. Всі поля є &lt;b&gt;необов&apos;язковими&lt;/b&gt;.</translation>
    </message>
    <message>
        <source>An optional amount to request. Leave this empty or zero to not request a specific amount.</source>
        <translation>Необов&apos;язкове поле для суми запиту. Залиште це поле пустим або впишіть нуль, щоб не надсилати у запиті конкретної суми.</translation>
    </message>
    <message>
        <source>Clear all fields of the form.</source>
        <translation>Очистити всі поля в формі</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation>Очистити</translation>
    </message>
    <message>
        <source>Requested payments history</source>
        <translation>Історія запитів платежу</translation>
    </message>
    <message>
        <source>&amp;Request payment</source>
        <translation>Н&amp;адіслати запит платежу</translation>
    </message>
    <message>
        <source>Show the selected request (does the same as double clicking an entry)</source>
        <translation>Показати вибраний запит (робить те ж саме, що й подвійний клік по запису)</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Показати</translation>
    </message>
    <message>
        <source>Remove the selected entries from the list</source>
        <translation>Вилучити вибрані записи зі списку</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Вилучити</translation>
    </message>
    <message>
        <source>Copy label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy message</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy amount</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ReceiveRequestDialog</name>
    <message>
        <source>QR Code</source>
        <translation>QR-Код</translation>
    </message>
    <message>
        <source>Copy &amp;URI</source>
        <translation>&amp;Скопіювати URI</translation>
    </message>
    <message>
        <source>Copy &amp;Address</source>
        <translation>Скопіювати &amp;адресу</translation>
    </message>
    <message>
        <source>&amp;Save Image</source>
        <translation>&amp;Зберегти зображення...</translation>
    </message>
    <message>
        <source>Request payment to %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Payment information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Amount</source>
        <translation type="unfinished">Кількість</translation>
    </message>
    <message>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Message</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resulting URI too long, try to reduce the text for label / message.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error encoding URI into QR Code.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>RecentRequestsTableModel</name>
    <message>
        <source>Date</source>
        <translation type="unfinished">Дата</translation>
    </message>
    <message>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Message</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(no label)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(no message)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(no amount requested)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Requested</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SendCoinsDialog</name>
    <message>
        <source>Send Coins</source>
        <translation>Відправити</translation>
    </message>
    <message>
        <source>Coin Control Features</source>
        <translation>Керування монетами</translation>
    </message>
    <message>
        <source>Inputs...</source>
        <translation>Входи...</translation>
    </message>
    <message>
        <source>automatically selected</source>
        <translation>вибираються автоматично</translation>
    </message>
    <message>
        <source>Insufficient funds!</source>
        <translation>Недостатньо коштів!</translation>
    </message>
    <message>
        <source>Quantity:</source>
        <translation>Кількість:</translation>
    </message>
    <message>
        <source>Bytes:</source>
        <translation>Байтів:</translation>
    </message>
    <message>
        <source>Amount:</source>
        <translation>Сума:</translation>
    </message>
    <message>
        <source>Priority:</source>
        <translation>Пріорітет:</translation>
    </message>
    <message>
        <source>Fee:</source>
        <translation>Комісія:</translation>
    </message>
    <message>
        <source>After Fee:</source>
        <translation>Після комісії:</translation>
    </message>
    <message>
        <source>Change:</source>
        <translation>Решта:</translation>
    </message>
    <message>
        <source>If this is activated, but the change address is empty or invalid, change will be sent to a newly generated address.</source>
        <translation>Якщо це поле активовано, але адреса для решти відсутня або некоректна, то решта буде відправлена на новостворену адресу.</translation>
    </message>
    <message>
        <source>Custom change address</source>
        <translation>Вказати адресу для решти</translation>
    </message>
    <message>
        <source>Transaction Fee:</source>
        <translation>Комісія за передачу:</translation>
    </message>
    <message>
        <source>Choose...</source>
        <translation>Виберіть...</translation>
    </message>
    <message>
        <source>collapse fee-settings</source>
        <translation>згорнути налаштування оплат</translation>
    </message>
    <message>
        <source>per kilobyte</source>
        <translation>за кілобайт</translation>
    </message>
    <message>
        <source>If the custom fee is set to 1000 satoshis and the transaction is only 250 bytes, then &quot;per kilobyte&quot; only pays 250 satoshis in fee, while &quot;total at least&quot; pays 1000 satoshis. For transactions bigger than a kilobyte both pay by kilobyte.</source>
        <translation>Якщо комісія встановлюється в 1000 сатоші і розмір транзакції лише 250 байтів, то опція &quot;за кілобайт&quot; встановлює комісію в 250 сатоші, в той час, як &quot;всього щонайменше&quot; - в 1000 сатоші. Для транзакцій більших за кілобайт в обох випадках буде знято комісію за кілобайт.</translation>
    </message>
    <message>
        <source>Hide</source>
        <translation>Приховати</translation>
    </message>
    <message>
        <source>total at least</source>
        <translation>всього щонайменше</translation>
    </message>
    <message>
        <source>(read the tooltip)</source>
        <translation>(читати підказки)</translation>
    </message>
    <message>
        <source>Recommended:</source>
        <translation>Рекомендовано:</translation>
    </message>
    <message>
        <source>Custom:</source>
        <translation>Змінено:</translation>
    </message>
    <message>
        <source>(Smart fee not initialized yet. This usually takes a few blocks...)</source>
        <translation>(Розумну оплату ще не ініціалізовано. Це, зазвичай, триває кілька блоків...)</translation>
    </message>
    <message>
        <source>Confirmation time:</source>
        <translation>Час підтвердження:</translation>
    </message>
    <message>
        <source>normal</source>
        <translation>звичайний</translation>
    </message>
    <message>
        <source>fast</source>
        <translation>швидкий</translation>
    </message>
    <message>
        <source>Send to multiple recipients at once</source>
        <translation>Відправити на декілька адрес</translation>
    </message>
    <message>
        <source>Add &amp;Recipient</source>
        <translation>Дод&amp;ати одержувача</translation>
    </message>
    <message>
        <source>Clear all fields of the form.</source>
        <translation>Очистити всі поля в формі</translation>
    </message>
    <message>
        <source>Dust:</source>
        <translation>Пил:</translation>
    </message>
    <message>
        <source>Clear &amp;All</source>
        <translation>Очистити &amp;все</translation>
    </message>
    <message>
        <source>Balance:</source>
        <translation>Баланс:</translation>
    </message>
    <message>
        <source>Confirm the send action</source>
        <translation>Підтвердити відправлення</translation>
    </message>
    <message>
        <source>S&amp;end</source>
        <translation>&amp;Відправити</translation>
    </message>
    <message>
        <source>Paying only the minimum fee is just fine as long as there is less transaction volume than space in the blocks. But be aware that this can end up in a never confirming transaction once there is more demand for bitcoin transactions than the network can process.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy quantity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy amount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy fee</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy after fee</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy bytes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy dust</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy change</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 to %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Are you sure you want to send?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>added as transaction fee</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Total Amount %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>or</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Confirm send coins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The recipient address is not valid. Please recheck.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The amount to pay must be larger than 0.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The amount exceeds your balance.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The total exceeds your balance when the %1 transaction fee is included.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Duplicate address found: addresses should only be used once each.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transaction creation failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The transaction was rejected! This might happen if some of the coins in your wallet were already spent, such as if you used a copy of wallet.dat and coins were spent in the copy but not marked as spent here.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A fee higher than %1 is considered an absurdly high fee.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Payment request expired.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pay only the required fee of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message numerus="yes">
        <source>Estimated to begin confirmation within %n block(s).</source>
        <translation type="unfinished">
            <numerusform></numerusform>
            <numerusform></numerusform>
            <numerusform></numerusform>
        </translation>
    </message>
    <message>
        <source>Warning: Invalid OctoinCoin address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning: Unknown change address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(no label)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Solution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In order to solve this problem, you need to rescan your wallet. Scanning a wallet will take some time want to continue?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SendCoinsEntry</name>
    <message>
        <source>A&amp;mount:</source>
        <translation>&amp;Кількість:</translation>
    </message>
    <message>
        <source>Pay &amp;To:</source>
        <translation>&amp;Отримувач:</translation>
    </message>
    <message>
        <source>&amp;Label:</source>
        <translation>&amp;Мітка:</translation>
    </message>
    <message>
        <source>Choose previously used address</source>
        <translation>Обрати ранiш використовувану адресу</translation>
    </message>
    <message>
        <source>This is a normal payment.</source>
        <translation>Це звичайний платіж.</translation>
    </message>
    <message>
        <source>The OctoinCoin address to send the payment to.</source>
        <translation>Адреса OctoinCoin для відправлення платежу</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>Paste address from clipboard</source>
        <translation>Вставити адресу</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <source>Remove this entry</source>
        <translation>Видалити цей запис</translation>
    </message>
    <message>
        <source>The fee will be deducted from the amount being sent. The recipient will receive less OctoinCoins than you enter in the amount field. If multiple recipients are selected, the fee is split equally.</source>
        <translation>Комісію буде знято зі вказаної суми. До отримувача надійде менше біткоінів, ніж було вказано в полі кількості. Якщо ж отримувачів декілька - комісію буде розподілено між ними.</translation>
    </message>
    <message>
        <source>S&amp;ubtract fee from amount</source>
        <translation>В&amp;ідняти комісію від суми</translation>
    </message>
    <message>
        <source>This is an unauthenticated payment request.</source>
        <translation>Цей запит платежу не є автентифікованим.</translation>
    </message>
    <message>
        <source>This is an authenticated payment request.</source>
        <translation>Цей запит платежу є автентифікованим.</translation>
    </message>
    <message>
        <source>Enter a label for this address to add it to the list of used addresses</source>
        <translation>Введіть мітку для цієї адреси для додавання її в список використаних адрес</translation>
    </message>
    <message>
        <source>Pay To:</source>
        <translation>Отримувач:</translation>
    </message>
    <message>
        <source>Memo:</source>
        <translation>Нотатка:</translation>
    </message>
    <message>
        <source>Enter a label for this address to add it to your address book</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SendConfirmationDialog</name>
    <message>
        <source>Yes</source>
        <translation type="unfinished">Так</translation>
    </message>
</context>
<context>
    <name>ShareDialog</name>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Private key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Responce</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not get share by key (%0)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Your share is added to the wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Get</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid private key encoding.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Private key outside allowed range.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A private key has already been added to your wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error adding key to wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Receipt of a cash share</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter your private key to get your share of OctoinCoin.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Your share</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ShutdownWindow</name>
    <message>
        <source>Do not shut down the computer until this window disappears.</source>
        <translation>Не вимикайте комп’ютер до зникнення цього вікна.</translation>
    </message>
    <message>
        <source>%1 is shutting down...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SignVerifyMessageDialog</name>
    <message>
        <source>Signatures - Sign / Verify a Message</source>
        <translation>Підписи - Підпис / Перевірка повідомлення</translation>
    </message>
    <message>
        <source>&amp;Sign Message</source>
        <translation>&amp;Підписати повідомлення</translation>
    </message>
    <message>
        <source>You can sign messages/agreements with your addresses to prove you can receive OctoinCoins sent to them. Be careful not to sign anything vague or random, as phishing attacks may try to trick you into signing your identity over to them. Only sign fully-detailed statements you agree to.</source>
        <translation>Ви можете підписувати повідомлення/угоди своїми адресами, щоб довести можливість отримання біткоінів, що будуть надіслані на них. Остерігайтеся підписувати будь-що нечітке чи неочікуване, так як за допомогою фішинг-атаки вас можуть спробувати ввести в оману для отримання вашого підпису під чужими словами. Підписуйте лише чіткі твердження, з якими ви повністю згодні.</translation>
    </message>
    <message>
        <source>The OctoinCoin address to sign the message with</source>
        <translation>Адреса OctoinCoin для підпису цього повідомлення</translation>
    </message>
    <message>
        <source>Choose previously used address</source>
        <translation>Обрати ранiш використовувану адресу</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>Paste address from clipboard</source>
        <translation>Вставити адресу</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <source>Enter the message you want to sign here</source>
        <translation>Введіть повідомлення, яке ви хочете підписати тут</translation>
    </message>
    <message>
        <source>Signature</source>
        <translation>Підпис</translation>
    </message>
    <message>
        <source>Copy the current signature to the system clipboard</source>
        <translation>Копіювати поточну сигнатуру до системного буферу обміну</translation>
    </message>
    <message>
        <source>Sign the message to prove you own this OctoinCoin address</source>
        <translation>Підпишіть повідомлення щоб довести, що ви є власником цієї адреси</translation>
    </message>
    <message>
        <source>Sign &amp;Message</source>
        <translation>&amp;Підписати повідомлення</translation>
    </message>
    <message>
        <source>Reset all sign message fields</source>
        <translation>Скинути всі поля підпису повідомлення</translation>
    </message>
    <message>
        <source>Clear &amp;All</source>
        <translation>Очистити &amp;все</translation>
    </message>
    <message>
        <source>&amp;Verify Message</source>
        <translation>П&amp;еревірити повідомлення</translation>
    </message>
    <message>
        <source>Enter the receiver&apos;s address, message (ensure you copy line breaks, spaces, tabs, etc. exactly) and signature below to verify the message. Be careful not to read more into the signature than what is in the signed message itself, to avoid being tricked by a man-in-the-middle attack. Note that this only proves the signing party receives with the address, it cannot prove sendership of any transaction!</source>
        <translation>Введіть нижче адресу отримувача, повідомлення (впевніться, що ви точно скопіювали символи завершення рядка, табуляцію, пробіли тощо) та підпис для перевірки повідомлення. Впевніться, що в підпис не було додано зайвих символів: це допоможе уникнути атак типу «людина посередині». Зауважте, що це лише засвідчує можливість отримання транзакцій підписувачем, але не в стані підтвердити джерело жодної транзакції!</translation>
    </message>
    <message>
        <source>The OctoinCoin address the message was signed with</source>
        <translation>Адреса OctoinCoin, якою було підписано це повідомлення</translation>
    </message>
    <message>
        <source>Verify the message to ensure it was signed with the specified OctoinCoin address</source>
        <translation>Перевірте повідомлення для впевненості, що воно підписано вказаною OctoinCoin-адресою</translation>
    </message>
    <message>
        <source>Verify &amp;Message</source>
        <translation>Пере&amp;вірити повідомлення</translation>
    </message>
    <message>
        <source>Reset all verify message fields</source>
        <translation>Скинути всі поля перевірки повідомлення</translation>
    </message>
    <message>
        <source>Click &quot;Sign Message&quot; to generate signature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The entered address is invalid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Please check the address and try again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The entered address does not refer to a key.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wallet unlock was cancelled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Private key for the entered address is not available.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Message signing failed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Message signed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The signature could not be decoded.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Please check the signature and try again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The signature did not match the message digest.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Message verification failed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Message verified.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SplashScreen</name>
    <message>
        <source>[testnet]</source>
        <translation>[тестова мережа]</translation>
    </message>
</context>
<context>
    <name>TrafficGraphWidget</name>
    <message>
        <source>KB/s</source>
        <translation>КБ/с</translation>
    </message>
</context>
<context>
    <name>TransactionDesc</name>
    <message numerus="yes">
        <source>Open for %n more block(s)</source>
        <translation type="unfinished">
            <numerusform></numerusform>
            <numerusform></numerusform>
            <numerusform></numerusform>
        </translation>
    </message>
    <message>
        <source>Open until %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>conflicted with a transaction with %1 confirmations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1/offline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>0/unconfirmed, %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>in memory pool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>not in memory pool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>abandoned</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1/unconfirmed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 confirmations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>, has not been successfully broadcast yet</source>
        <translation type="unfinished"></translation>
    </message>
    <message numerus="yes">
        <source>, broadcast through %n node(s)</source>
        <translation type="unfinished">
            <numerusform></numerusform>
            <numerusform></numerusform>
            <numerusform></numerusform>
        </translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished">Дата</translation>
    </message>
    <message>
        <source>Source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generated</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>From</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>own address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>watch-only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Credit</source>
        <translation type="unfinished"></translation>
    </message>
    <message numerus="yes">
        <source>matures in %n more block(s)</source>
        <translation type="unfinished">
            <numerusform></numerusform>
            <numerusform></numerusform>
            <numerusform></numerusform>
        </translation>
    </message>
    <message>
        <source>not accepted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Debit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Total debit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Total credit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transaction fee</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Net amount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Message</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transaction ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output index</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Merchant</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generated coins must mature %1 blocks before they can be spent. When you generated this block, it was broadcast to the network to be added to the block chain. If it fails to get into the chain, its state will change to &quot;not accepted&quot; and it won&apos;t be spendable. This may occasionally happen if another node generates a block within a few seconds of yours.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Debug information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transaction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inputs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Amount</source>
        <translation type="unfinished">Кількість</translation>
    </message>
    <message>
        <source>true</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>false</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TransactionDescDialog</name>
    <message>
        <source>This pane shows a detailed description of the transaction</source>
        <translation>Даний діалог показує детальну статистику по вибраній транзакції</translation>
    </message>
    <message>
        <source>Details for %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Details for coupon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;i&gt;&lt;b&gt;&lt;font color=&apos;#fff&apos;&gt;  %4: &lt;/b&gt;&lt;/i&gt; %0 &lt;br&gt;&lt;i&gt;&lt;b&gt;&lt;font color=&apos;#fff&apos;&gt;  %5: &lt;/b&gt;&lt;/i&gt; %1 &lt;br&gt;&lt;i&gt;&lt;b&gt;&lt;font color=&apos;#fff&apos;&gt;  %6: &lt;/b&gt;&lt;/i&gt; %2 &lt;br&gt;&lt;i&gt;&lt;b&gt;&lt;font color=&apos;#fff&apos;&gt;  %7: &lt;/b&gt;&lt;/i&gt; %3 &lt;br&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TransactionTableModel</name>
    <message>
        <source>Date</source>
        <translation type="unfinished">Дата</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message numerus="yes">
        <source>Open for %n more block(s)</source>
        <translation type="unfinished">
            <numerusform></numerusform>
            <numerusform></numerusform>
            <numerusform></numerusform>
        </translation>
    </message>
    <message>
        <source>Open until %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Offline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unconfirmed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Abandoned</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Confirming (%1 of %2 recommended confirmations)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Confirmed (%1 confirmations)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Conflicted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Immature (%1 confirmations, will be available after %2)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This block was not received by any other nodes and will probably not be accepted!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generated but not accepted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Received with</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Received from</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sent to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Payment to yourself</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>watch-only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(n/a)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(no label)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transaction status. Hover over this field to show number of confirmations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Date and time that the transaction was received.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type of transaction.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Whether or not a watch-only address is involved in this transaction.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>User-defined intent/purpose of the transaction.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Amount removed from or added to balance.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Confirmation of the bonus code.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TransactionView</name>
    <message>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Today</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This week</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Last month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Range...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Received with</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sent to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To yourself</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Other</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter address or label to search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Min amount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation type="unfinished">&amp;Експорт...</translation>
    </message>
    <message>
        <source>Export the data in the current tab to a file</source>
        <translation type="unfinished">Експортувати дані з поточної вкладки в файл</translation>
    </message>
    <message>
        <source>Abandon transaction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy amount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy transaction ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy raw transaction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy full transaction details</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show transaction details</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export Transaction History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comma separated file (*.csv)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Confirmed</source>
        <translation type="unfinished">Підтверджені</translation>
    </message>
    <message>
        <source>Watch-only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished">Дата</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exporting Failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There was an error trying to save the transaction history to %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exporting Successful</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The transaction history was successfully saved to %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Range:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UnitDisplayStatusBarControl</name>
    <message>
        <source>Unit to show amounts in. Click to select another unit.</source>
        <translation>Одиниця виміру монет. Натисніть для вибору іншої.</translation>
    </message>
</context>
<context>
    <name>WalletFrame</name>
    <message>
        <source>No wallet has been loaded.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>WalletModel</name>
    <message>
        <source>Send Coins</source>
        <translation type="unfinished">Відправити</translation>
    </message>
</context>
<context>
    <name>WalletView</name>
    <message>
        <source>Backup Wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wallet Data (*.dat)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Backup Failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There was an error trying to save the wallet data to %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Backup Successful</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The wallet data was successfully saved to %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wallet Restore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Restoring the backup will result in a loss of funds received in the interval from the creation of the backup to the current time.Do this only if you have lost access to your wallet.Would you like to continue with the restoration?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import a backup.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Recovery failed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Restore completed successfully.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You must restart your wallet to continue working.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>remove old wallet failed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>With a blocked wallet, you can not participate in the mining. Do you want block the wallet?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
