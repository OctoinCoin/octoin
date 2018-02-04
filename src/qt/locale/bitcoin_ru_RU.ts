<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru">
<context>
    <name>OctoinCoin-core</name>
    <message>
        <source>The %s developers</source>
        <translation>Разработчики %s</translation>
    </message>
    <message>
        <source>(1 = keep tx meta data e.g. account owner and payment request information, 2 = drop tx meta data)</source>
        <translation>(1 = сохранять метаданные транзакции: например, владельца аккаунта и информацию запроса платежа; 2 = отбросить метаданные)</translation>
    </message>
    <message>
        <source>-fallbackfee is set very high! This is the transaction fee you may pay when fee estimates are not available.</source>
        <translation>Установлено очень большое значение -fallbackfee! Это комиссия за транзацию, которую вы можете заплатить, если оценка размера комиссии не доступна. </translation>
    </message>
    <message>
        <source>-maxtxfee is set very high! Fees this large could be paid on a single transaction.</source>
        <translation>Установлено очень большое значение -maxtxfee. Такие большие комиссии могут быть уплачены в отдельной транзакции.</translation>
    </message>
    <message>
        <source>-paytxfee is set very high! This is the transaction fee you will pay if you send a transaction.</source>
        <translation>Установлено очень большое значение -paytxfee. Такие большие комиссии могут быть уплачены в отдельной транзакции.</translation>
    </message>
    <message>
        <source>A fee rate (in %s/kB) that will be used when fee estimation has insufficient data (default: %s)</source>
        <translation></translation>
    </message>
    <message>
        <source>Accept relayed transactions received from whitelisted peers even when not relaying transactions (default: %d)</source>
        <translation>Принимать транзакции пересылаемые от узлов из белого списка даже если они не удовлетворяют требованиям ретрансляции (по умолчанию: %d)</translation>
    </message>
    <message>
        <source>Allow JSON-RPC connections from specified source. Valid for &lt;ip&gt; are a single IP (e.g. 1.2.3.4), a network/netmask (e.g. 1.2.3.4/255.255.255.0) or a network/CIDR (e.g. 1.2.3.4/24). This option can be specified multiple times</source>
        <translation>Разрешить подключения JSON-RPC с указанного источника. Разрешенные значения для &lt;ip&gt; — отдельный IP (например, 1.2.3.4), сеть/маска сети (например, 1.2.3.4/255.255.255.0) или сеть/CIDR (например, 1.2.3.4/24). Эту опцию можно использовать многократно</translation>
    </message>
    <message>
        <source>Bind to given address and always listen on it. Use [host]:port notation for IPv6</source>
        <translation>Привязаться к указанному адресу и всегда прослушивать только его. Используйте [хост]:порт для IPv6</translation>
    </message>
    <message>
        <source>Bind to given address and whitelist peers connecting to it. Use [host]:port notation for IPv6</source>
        <translation>Привязаться к указанному адресу и внести в белый список подключающихся к нему участников. Используйте [хост]:порт для IPv6</translation>
    </message>
    <message>
        <source>Bind to given address to listen for JSON-RPC connections. Use [host]:port notation for IPv6. This option can be specified multiple times (default: bind to all interfaces)</source>
        <translation>Привязаться к указанному адресу для прослушивания JSON-RPC подключений. Используйте запись [хост]:порт для IPv6. Эту опцию можно использовать многократно (по умолчанию: привязываться ко всем интерфейсам)</translation>
    </message>
    <message>
        <source>Cannot obtain a lock on data directory %s. %s is probably already running.</source>
        <translation>Невозможно заблокировать каталог данных %s. %s возможно уже работает.</translation>
    </message>
    <message>
        <source>Create new files with system default permissions, instead of umask 077 (only effective with disabled wallet functionality)</source>
        <translation>Создавать новые файлы с системными правами по умолчанию вместо umask 077 (эффективно только при отключенном бумажнике)</translation>
    </message>
    <message>
        <source>Delete all wallet transactions and only recover those parts of the blockchain through -rescan on startup</source>
        <translation>Удалить все транзакции бумажника с возможностью восстановить эти части цепи блоков с помощью -rescan при запуске</translation>
    </message>
    <message>
        <source>Discover own IP addresses (default: 1 when listening and no -externalip or -proxy)</source>
        <translation>Обнаруживать собственный IP адрес (по умолчанию: 1 при прослушивании и без -externalip или -proxy)</translation>
    </message>
    <message>
        <source>Distributed under the MIT software license, see the accompanying file COPYING or &lt;http://www.opensource.org/licenses/mit-license.php&gt;.</source>
        <translation>Распространяется под лицензией MIT, см. приложенный файл COPYING или &lt;http://www.opensource.org/licenses/mit-license.php&gt;.</translation>
    </message>
    <message>
        <source>Do not keep transactions in the mempool longer than &lt;n&gt; hours (default: %u)</source>
        <translation>Не хранить транзакции в памяти дольше, чем &lt;n&gt; часов (по умолчанию %u)</translation>
    </message>
    <message>
        <source>Equivalent bytes per sigop in transactions for relay and mining (default: %u)</source>
        <translation></translation>
    </message>
    <message>
        <source>Error loading %s: You can&apos;t enable HD on a already existing non-HD wallet</source>
        <translation>Ошибка загрузки %s: Вы не можете включить HD в уже существующем не-HD кошельке</translation>
    </message>
    <message>
        <source>Error reading %s! All keys read correctly, but transaction data or address book entries might be missing or incorrect.</source>
        <translation>Ошибка чтения %s! Все ключи прочитаны верно, но данные транзакций или записи адресной книги могут отсутствовать или быть неправильными.</translation>
    </message>
    <message>
        <source>Error: Listening for incoming connections failed (listen returned error %s)</source>
        <translation>Ошибка: не удалось начать прослушивание входящих подключений (прослушивание вернуло ошибку %s)</translation>
    </message>
    <message>
        <source>Execute command when a relevant alert is received or we see a really long fork (%s in cmd is replaced by message)</source>
        <translation>Выполнить команду, когда приходит соответствующее сообщение о тревоге или наблюдается очень длинное расщепление цепи (%s в команде заменяется на сообщение)</translation>
    </message>
    <message>
        <source>Execute command when a wallet transaction changes (%s in cmd is replaced by TxID)</source>
        <translation>Выполнить команду, когда меняется транзакция в бумажнике (%s в команде заменяется на TxID)</translation>
    </message>
    <message>
        <source>Execute command when the best block changes (%s in cmd is replaced by block hash)</source>
        <translation>Выполнить команду, когда появляется новый блок (%s в команде заменяется на хэш блока)</translation>
    </message>
    <message>
        <source>Fees (in %s/kB) smaller than this are considered zero fee for relaying, mining and transaction creation (default: %s)</source>
        <translation>Комиссии (в %s/Кб) меньшие этого значения считаются нулевыми для создания, ретрансляции, получения транзакции (по умолчанию: %s)</translation>
    </message>
    <message>
        <source>Fees (in %s/kB) smaller than this are considered zero fee for transaction creation (default: %s)</source>
        <translation>Комиссии (в %s/Кб) меньшие этого значения считаются нулевыми при создании транзакций (по умолчанию: %s)</translation>
    </message>
    <message>
        <source>Force relay of transactions from whitelisted peers even they violate local relay policy (default: %d)</source>
        <translation>Всегда разрешать транзакции, полученные от участников из белого списка (по умолчанию: %d)</translation>
    </message>
    <message>
        <source>How thorough the block verification of -checkblocks is (0-4, default: %u)</source>
        <translation>Насколько тщательна проверка контрольных блоков -checkblocks (0-4, по умолчанию: %u)</translation>
    </message>
    <message>
        <source>If &lt;category&gt; is not supplied or if &lt;category&gt; = 1, output all debugging information.</source>
        <translation>Если &lt;category&gt; не предоставлена или равна 1, выводить всю отладочную информацию.</translation>
    </message>
    <message>
        <source>If paytxfee is not set, include enough fee so transactions begin confirmation on average within n blocks (default: %u)</source>
        <translation>Если paytxfee не задан, включить достаточную комиссию для подтверждения транзакции в среднем за n блоков (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Invalid amount for -maxtxfee=&lt;amount&gt;: &apos;%s&apos; (must be at least the minrelay fee of %s to prevent stuck transactions)</source>
        <translation>Неверное значение для -maxtxfee=&lt;amount&gt;: &apos;%s&apos; (минимальная комиссия трансляции %s для предотвращения зависания транзакций)</translation>
    </message>
    <message>
        <source>Maintain a full transaction index, used by the getrawtransaction rpc call (default: %u)</source>
        <translation>Держать полный индекс транзакций, используемый RPC-запросом getrawtransaction (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Maximum allowed median peer time offset adjustment. Local perspective of time may be influenced by peers forward or backward by this amount. (default: %u seconds)</source>
        <translation></translation>
    </message>
    <message>
        <source>Maximum size of data in data carrier transactions we relay and mine (default: %u)</source>
        <translation>Наибольший размер данных в носителе данных транзакций, которые мы передаем и генерируем (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Maximum total fees (in %s) to use in a single wallet transaction or raw transaction; setting this too low may abort large transactions (default: %s)</source>
        <translation></translation>
    </message>
    <message>
        <source>Number of seconds to keep misbehaving peers from reconnecting (default: %u)</source>
        <translation>Число секунд блокирования неправильно ведущих себя узлов (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Output debugging information (default: %u, supplying &lt;category&gt; is optional)</source>
        <translation>Выводить отладочную информацию (по умолчанию: %u, указание &lt;category&gt; необязательно)</translation>
    </message>
    <message>
        <source>Please check that your computer&apos;s date and time are correct! If your clock is wrong, %s will not work properly.</source>
        <translation>Пожалуйста убедитесь в корректности установки времени и даты на вашем компьютере! Если время установлено неверно, %s не будет работать правильно.</translation>
    </message>
    <message>
        <source>Please contribute if you find %s useful. Visit %s for further information about the software.</source>
        <translation></translation>
    </message>
    <message>
        <source>Prune configured below the minimum of %d MiB.  Please use a higher number.</source>
        <translation>Удаление блоков выставлено ниже, чем минимум в %d Мб. Пожалуйста, используйте большее значение.</translation>
    </message>
    <message>
        <source>Prune: last wallet synchronisation goes beyond pruned data. You need to -reindex (download the whole blockchain again in case of pruned node)</source>
        <translation>Удаление: последняя синхронизация кошелька вышла за рамки удаленных данных. Вам нужен -reindex (скачать всю  цепь блоков в случае удаленного узла)</translation>
    </message>
    <message>
        <source>Query for peer addresses via DNS lookup, if low on addresses (default: 1 unless -connect)</source>
        <translation>Запрашивать адреса участников с помощью DNS, если адресов мало (по умолчанию: 1, если не указан -connect)</translation>
    </message>
    <message>
        <source>Randomize credentials for every proxy connection. This enables Tor stream isolation (default: %u)</source>
        <translation>Использовать случайные учетные данные для каждого прокси-подключения. Эта функция позволяет изолировать потоки Tor (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Reduce storage requirements by pruning (deleting) old blocks. This mode is incompatible with -txindex and -rescan. Warning: Reverting this setting requires re-downloading the entire blockchain. (default: 0 = disable pruning blocks, &gt;%u = target size in MiB to use for block files)</source>
        <translation>Уменьшить размер хранилища за счет удаления (обрезания) старых блоков. Этот режим несовместим с -txindex и  -rescan. Внимание: переключение этой опции обратно потребует полной загрузки цепи блоков. (по умолчанию: 0 = отключить удаление блоков, &gt;%u = целевой размер в Мб для файлов блоков)</translation>
    </message>
    <message>
        <source>Rescans are not possible in pruned mode. You will need to use -reindex which will download the whole blockchain again.</source>
        <translation>Повторное сканирование не возможно в режиме удаления. Вам надо будет использовать -reindex, который загрузит заново всю цепь блоков.</translation>
    </message>
    <message>
        <source>Set maximum size of high-priority/low-fee transactions in bytes (default: %d)</source>
        <translation>Задать максимальный размер высокоприоритетных/низкокомиссионных транзакций в байтах (по умолчанию: %d)</translation>
    </message>
    <message>
        <source>Set the number of script verification threads (%u to %d, 0 = auto, &lt;0 = leave that many cores free, default: %d)</source>
        <translation>Задать число потоков проверки скрипта (от %u до %d, 0=авто, &lt;0 = оставить столько ядер свободными, по умолчанию: %d)</translation>
    </message>
    <message>
        <source>Support filtering of blocks and transaction with bloom filters (default: %u)</source>
        <translation>Поддерживать фильтрацию блоков и транзакций с помощью фильтра Блума (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>The block database contains a block which appears to be from the future. This may be due to your computer&apos;s date and time being set incorrectly. Only rebuild the block database if you are sure that your computer&apos;s date and time are correct</source>
        <translation>База данных блоков содержит блок, который появляется из будущего. Это может из-за некорректно установленных даты и времени на вашем компьютере. Остается только перестроивать базу блоков, если вы уверены, что дата и время корректны.</translation>
    </message>
    <message>
        <source>The transaction amount is too small to send after the fee has been deducted</source>
        <translation>Сумма транзакции за вычетом комиссии слишком мала</translation>
    </message>
    <message>
        <source>This is a pre-release test build - use at your own risk - do not use for mining or merchant applications</source>
        <translation>Это пре-релизная тестовая сборка - используйте на свой страх и риск - не используйте для добычи или торговых приложений</translation>
    </message>
    <message>
        <source>This product includes software developed by the OpenSSL Project for use in the OpenSSL Toolkit &lt;https://www.openssl.org/&gt; and cryptographic software written by Eric Young and UPnP software written by Thomas Bernard.</source>
        <translation>Этот продукт включает ПО, разработанное OpenSSL Project для использования в OpenSSL Toolkit &lt;https://www.openssl.org/&gt; и криптографическое ПО, написанное Eric Young и ПО для работы с UPnP, написанное Thomas Bernard.</translation>
    </message>
    <message>
        <source>Total length of network version string (%i) exceeds maximum length (%i). Reduce the number or size of uacomments.</source>
        <translation>Текущая длина строки версии сети (%i) превышает максимальную длину (%i). Увеливается количество или размер uacomments.</translation>
    </message>
    <message>
        <source>Tries to keep outbound traffic under the given target (in MiB per 24h), 0 = no limit (default: %d)</source>
        <translation>Пытается ограничить исходящий трафик до (в МБ за 24ч), 0 = не ограничивать (по умолчанию: %d)</translation>
    </message>
    <message>
        <source>Unable to rewind the database to a pre-fork state. You will need to redownload the blockchain</source>
        <translation>Невозможно отмотать базу данных до пред-форкового состояния. Вам будет необходимо перекачать цепочку блоков.</translation>
    </message>
    <message>
        <source>Unsupported argument -socks found. Setting SOCKS version isn&apos;t possible anymore, only SOCKS5 proxies are supported.</source>
        <translation>Обнаружен не поддерживаемый аргумент -socks. Выбор версии SOCKS более невозможен, поддерживаются только прокси SOCKS5.</translation>
    </message>
    <message>
        <source>Unsupported argument -whitelistalwaysrelay ignored, use -whitelistrelay and/or -whitelistforcerelay.</source>
        <translation>Не поддерживаемый аргумент -whitelistalwaysrelay игнорируется, используйте -whitelistrelay и/или -whitelistforcerelay.</translation>
    </message>
    <message>
        <source>Use UPnP to map the listening port (default: 1 when listening and no -proxy)</source>
        <translation>Использовать UPnP для проброса порта (по умолчанию: 1, если используется прослушивание и нет -proxy)</translation>
    </message>
    <message>
        <source>Use hierarchical deterministic key generation (HD) after BIP32. Only has effect during wallet creation/first start</source>
        <translation>Использовать иерархическую детерминированную генерацию ключей (HD) после BIP32. Применяется в процессе создания бумажника / первого запуска</translation>
    </message>
    <message>
        <source>Use separate SOCKS5 proxy to reach peers via Tor hidden services (default: %s)</source>
        <translation>Использовать отдельный прокси SOCKS5 для соединения с участниками через скрытые сервисы Tor (по умолчанию: %s)</translation>
    </message>
    <message>
        <source>Username and hashed password for JSON-RPC connections. The field &lt;userpw&gt; comes in the format: &lt;USERNAME&gt;:&lt;SALT&gt;$&lt;HASH&gt;. A canonical python script is included in share/rpcuser. This option can be specified multiple times</source>
        <translation>Имя пользователя и хэш пароля для JSON-RPC соединений. Поле &lt;userpw&gt; использует формат: &lt;USERNAME&gt;:&lt;SALT&gt;$&lt;HASH&gt;. Каноничный пример скрипта на питоне включен в &quot;share/rpcuser&quot;. Эта опция может быть указана несколько раз</translation>
    </message>
    <message>
        <source>Warning: The network does not appear to fully agree! Some miners appear to be experiencing issues.</source>
        <translation>Внимание: похоже, в сети нет полного согласия! Некоторый майнеры, возможно, испытывают проблемы.</translation>
    </message>
    <message>
        <source>Warning: Unknown block versions being mined! It&apos;s possible unknown rules are in effect</source>
        <translation>Внимание: Получена неизвестная версия блока! Возможно неизвестные правила вступили в силу.</translation>
    </message>
    <message>
        <source>Warning: Wallet file corrupt, data salvaged! Original %s saved as %s in %s; if your balance or transactions are incorrect you should restore from a backup.</source>
        <translation>Внимание: Файл бумажника поврежден, данные восстановлены! Оригинальный %s сохранен как %s в %s; Если баланс или транзакции некорректны, вы должны восстановить файл из резервной копии.</translation>
    </message>
    <message>
        <source>Warning: We do not appear to fully agree with our peers! You may need to upgrade, or other nodes may need to upgrade.</source>
        <translation>Внимание: мы не полностью согласны с подключенными участниками! Вам или другим участникам, возможно, следует обновиться.</translation>
    </message>
    <message>
        <source>Whitelist peers connecting from the given netmask or IP address. Can be specified multiple times.</source>
        <translation>Вносить в белый список участников, подключающихся с указанной маски сети или IP. Можно использовать многократно.</translation>
    </message>
    <message>
        <source>Whitelisted peers cannot be DoS banned and their transactions are always relayed, even if they are already in the mempool, useful e.g. for a gateway</source>
        <translation>Участники из белого списка не могуть быть забанены за DoS, и их транзакции всегда транслируются, даже если они уже содержатся в памяти. Полезно, например, для шлюза.</translation>
    </message>
    <message>
        <source>You need to rebuild the database using -reindex to go back to unpruned mode.  This will redownload the entire blockchain</source>
        <translation>Вам необходимо пересобрать базу данных с помощью -reindex, чтобы вернуться к полному режиму. Это приведет к перезагрузке всей цепи блоков</translation>
    </message>
    <message>
        <source>You need to rebuild the database using -reindex-chainstate to change -txindex</source>
        <translation>Вам необходимо пересобрать базы данных с помощью -reindex-chainstate, чтобы изменить -txindex</translation>
    </message>
    <message>
        <source>%s corrupt, salvage failed</source>
        <translation>%s поврежден, восстановить не удалось</translation>
    </message>
    <message>
        <source>(default: %s)</source>
        <translation>(по умолчанию: %s)</translation>
    </message>
    <message>
        <source>(default: %u)</source>
        <translation>(по умолчанию: %u)</translation>
    </message>
    <message>
        <source>-maxmempool must be at least %d MB</source>
        <translation>-maxmempool должен быть как минимум %d MB</translation>
    </message>
    <message>
        <source>&lt;category&gt; can be:</source>
        <translation>&lt;category&gt; может быть:</translation>
    </message>
    <message>
        <source>Accept command line and JSON-RPC commands</source>
        <translation>Принимать командную строку и команды JSON-RPC</translation>
    </message>
    <message>
        <source>Accept connections from outside (default: 1 if no -proxy or -connect)</source>
        <translation>Принимать подключения извне (по умолчанию: 1, если не используется -proxy или -connect)</translation>
    </message>
    <message>
        <source>Accept public REST requests (default: %u)</source>
        <translation>Принимать публичные REST-запросы (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Add a node to connect to and attempt to keep the connection open</source>
        <translation>Добавить узел для подключения и пытаться поддерживать соединение открытым</translation>
    </message>
    <message>
        <source>Allow DNS lookups for -addnode, -seednode and -connect</source>
        <translation>Разрешить поиск в DNS для -addnode, -seednode и -connect</translation>
    </message>
    <message>
        <source>Always query for peer addresses via DNS lookup (default: %u)</source>
        <translation>Всегда запрашивать адреса участников с помощью DNS (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Append comment to the user agent string</source>
        <translation>Добавить комментарий к строке пользовательского агента</translation>
    </message>
    <message>
        <source>Attempt to recover private keys from a corrupt wallet on startup</source>
        <translation>Попытаться восстановить приватные ключи из поврежденного бумажника при запуске</translation>
    </message>
    <message>
        <source>Automatically create Tor hidden service (default: %d)</source>
        <translation>Автоматически создавать скрытый Tor сервис (по умолчанию: %d)</translation>
    </message>
    <message>
        <source>Block creation options:</source>
        <translation>Параметры создания блоков:</translation>
    </message>
    <message>
        <source>Cannot downgrade wallet</source>
        <translation>Не удается понизить версию бумажника</translation>
    </message>
    <message>
        <source>Cannot resolve -%s address: &apos;%s&apos;</source>
        <translation>Не удается разрешить адрес в параметре -%s: &apos;%s&apos;</translation>
    </message>
    <message>
        <source>Cannot write default address</source>
        <translation>Не удается записать адрес по умолчанию</translation>
    </message>
    <message>
        <source>Change index out of range</source>
        <translation>Изменение индекса вне диапазона</translation>
    </message>
    <message>
        <source>Connect only to the specified node(s)</source>
        <translation>Подключаться только к указанному узлу(ам)</translation>
    </message>
    <message>
        <source>Connect through SOCKS5 proxy</source>
        <translation>Подключаться через SOCKS5 прокси</translation>
    </message>
    <message>
        <source>Connect to a node to retrieve peer addresses, and disconnect</source>
        <translation>Подключиться к участнику, чтобы получить список адресов других участников и отключиться</translation>
    </message>
    <message>
        <source>Connection options:</source>
        <translation>Параметры подключения:</translation>
    </message>
    <message>
        <source>Copyright (C) %i-%i</source>
        <translation>Copyright (C) %i-%i</translation>
    </message>
    <message>
        <source>Corrupted block database detected</source>
        <translation>БД блоков повреждена</translation>
    </message>
    <message>
        <source>Debugging/Testing options:</source>
        <translation>Параметры отладки/тестирования:</translation>
    </message>
    <message>
        <source>Do not load the wallet and disable wallet RPC calls</source>
        <translation>Не загружать бумажник и запретить обращения к нему через RPC</translation>
    </message>
    <message>
        <source>Do you want to rebuild the block database now?</source>
        <translation>Пересобрать БД блоков прямо сейчас?</translation>
    </message>
    <message>
        <source>Done loading</source>
        <translation>Загрузка завершена</translation>
    </message>
    <message>
        <source>Enable publish hash block in &lt;address&gt;</source>
        <translation>Включить публичный хеш блока в &lt;address&gt;</translation>
    </message>
    <message>
        <source>Enable publish hash transaction in &lt;address&gt;</source>
        <translation>Включить публичный хеш транзакции в &lt;address&gt;</translation>
    </message>
    <message>
        <source>Enable publish raw block in &lt;address&gt;</source>
        <translation>Включить публичный сырой блок в &lt;address&gt;</translation>
    </message>
    <message>
        <source>Enable publish raw transaction in &lt;address&gt;</source>
        <translation>Включить публичную сырую транзакцию в &lt;address&gt;</translation>
    </message>
    <message>
        <source>Enable transaction replacement in the memory pool (default: %u)</source>
        <translation></translation>
    </message>
    <message>
        <source>Error initializing block database</source>
        <translation>Ошибка инициализации БД блоков</translation>
    </message>
    <message>
        <source>Error initializing wallet database environment %s!</source>
        <translation>Ошибка инициализации окружения БД бумажника %s!</translation>
    </message>
    <message>
        <source>Error loading %s</source>
        <translation>Ошибка загрузки %s</translation>
    </message>
    <message>
        <source>Error loading %s: Wallet corrupted</source>
        <translation>Ошибка загрузки %s: Бумажник поврежден</translation>
    </message>
    <message>
        <source>Error loading %s: Wallet requires newer version of %s</source>
        <translation>Ошибка загрузки %s: Для бумажника требуется более новая версия %s</translation>
    </message>
    <message>
        <source>Error loading %s: You can&apos;t disable HD on a already existing HD wallet</source>
        <translation>Ошибка загрузки %s: Вы не можете включить HD в уже существующем не-HD кошельке</translation>
    </message>
    <message>
        <source>Error loading block database</source>
        <translation>Ошибка чтения базы данных блоков</translation>
    </message>
    <message>
        <source>Error opening block database</source>
        <translation>Не удалось открыть БД блоков</translation>
    </message>
    <message>
        <source>Error reading from database, shutting down.</source>
        <translation>Ошибка чтения базы данных, работа завершается.</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <source>Error: A fatal internal error occurred, see debug.log for details</source>
        <translation>Ошибка: произошла неустранимая ошибка, подробности в debug.log</translation>
    </message>
    <message>
        <source>Error: Disk space is low!</source>
        <translation>Ошибка: мало места на диске!</translation>
    </message>
    <message>
        <source>Failed to listen on any port. Use -listen=0 if you want this.</source>
        <translation>Не удалось начать прослушивание на порту. Используйте -listen=0 если вас это устраивает.</translation>
    </message>
    <message>
        <source>Fee (in %s/kB) to add to transactions you send (default: %s)</source>
        <translation>Комиссия (в %s/Кб) для добавления к вашим транзакциям (по умолчанию: %s)</translation>
    </message>
    <message>
        <source>How many blocks to check at startup (default: %u, 0 = all)</source>
        <translation>Сколько блоков проверять при запуске (по умолчанию: %u, 0 = все)</translation>
    </message>
    <message>
        <source>Importing...</source>
        <translation>Импорт ...</translation>
    </message>
    <message>
        <source>Imports blocks from external blk000??.dat file on startup</source>
        <translation>Импортировать блоки из внешнего файла blk000?.dat при запуске</translation>
    </message>
    <message>
        <source>Include IP addresses in debug output (default: %u)</source>
        <translation>Включить IP-адреса в отладочный вывод (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Incorrect or no genesis block found. Wrong datadir for network?</source>
        <translation>Неверный или отсутствующий начальный блок. Неправильный каталог данных для сети?</translation>
    </message>
    <message>
        <source>Information</source>
        <translation>Информация</translation>
    </message>
    <message>
        <source>Initialization sanity check failed. %s is shutting down.</source>
        <translation>Начальная проверка исправности не удалась. %s завершает работу.</translation>
    </message>
    <message>
        <source>Insufficient funds</source>
        <translation>Недостаточно монет</translation>
    </message>
    <message>
        <source>Invalid -onion address: &apos;%s&apos;</source>
        <translation>Неверный -onion адрес: &apos;%s&apos;</translation>
    </message>
    <message>
        <source>Invalid -proxy address: &apos;%s&apos;</source>
        <translation>Неверный адрес -proxy: &apos;%s&apos;</translation>
    </message>
    <message>
        <source>Invalid amount for -%s=&lt;amount&gt;: &apos;%s&apos;</source>
        <translation>Неверная сумма для -%s=&lt;amount&gt;: &apos;%s&apos;</translation>
    </message>
    <message>
        <source>Invalid amount for -fallbackfee=&lt;amount&gt;: &apos;%s&apos;</source>
        <translation></translation>
    </message>
    <message>
        <source>Invalid amount for -paytxfee=&lt;amount&gt;: &apos;%s&apos; (must be at least %s)</source>
        <translation>Неверное количество в параметре -paytxfee=&lt;кол-во&gt;: &apos;%s&apos; (должно быть как минимум %s)</translation>
    </message>
    <message>
        <source>Invalid netmask specified in -whitelist: &apos;%s&apos;</source>
        <translation>Указана неверная сетевая маска в -whitelist: &apos;%s&apos;</translation>
    </message>
    <message>
        <source>Keep at most &lt;n&gt; unconnectable transactions in memory (default: %u)</source>
        <translation>Держать в памяти до &lt;n&gt; несвязных транзакций (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Keep the transaction memory pool below &lt;n&gt; megabytes (default: %u)</source>
        <translation>Сбрасывать транзакции из памяти на диск каждые &lt;n&gt; мегабайт (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Listen for JSON-RPC connections on &lt;port&gt; (default: %u or testnet: %u)</source>
        <translation>Прослушивать подключения JSON-RPC на &lt;порту&gt; (по умолчанию: %u или %u в тестовой сети)</translation>
    </message>
    <message>
        <source>Listen for connections on &lt;port&gt; (default: %u or testnet: %u)</source>
        <translation>Принимать входящие подключения на &lt;port&gt; (по умолчанию: %u или %u в тестовой сети)</translation>
    </message>
    <message>
        <source>Loading addresses...</source>
        <translation>Загрузка адресов...</translation>
    </message>
    <message>
        <source>Loading banlist...</source>
        <translation>Загрузка банлиста...</translation>
    </message>
    <message>
        <source>Loading block index...</source>
        <translation>Загрузка индекса блоков...</translation>
    </message>
    <message>
        <source>Loading wallet...</source>
        <translation>Загрузка бумажника...</translation>
    </message>
    <message>
        <source>Location of the auth cookie (default: data dir)</source>
        <translation>Расположение куки входы(по умолчанию: data dir)</translation>
    </message>
    <message>
        <source>Maintain at most &lt;n&gt; connections to peers (default: %u)</source>
        <translation>Поддерживать не более &lt;n&gt; подключений к узлам (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Make the wallet broadcast transactions</source>
        <translation>Рассылать транзакции из бумажника</translation>
    </message>
    <message>
        <source>Maximum per-connection receive buffer, &lt;n&gt;*1000 bytes (default: %u)</source>
        <translation>Максимальный размер буфера приема на соединение, &lt;n&gt;*1000 байт (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Maximum per-connection send buffer, &lt;n&gt;*1000 bytes (default: %u)</source>
        <translation>Максимальный размер буфера отправки на соединение, &lt;n&gt;*1000 байт (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Need to specify a port with -whitebind: &apos;%s&apos;</source>
        <translation>Необходимо указать порт с помощью -whitebind: &apos;%s&apos;</translation>
    </message>
    <message>
        <source>Node relay options:</source>
        <translation>Параметры трансляции узла:</translation>
    </message>
    <message>
        <source>Not enough file descriptors available.</source>
        <translation>Недостаточно файловых дескрипторов.</translation>
    </message>
    <message>
        <source>Only connect to nodes in network &lt;net&gt; (ipv4, ipv6 or onion)</source>
        <translation>Соединяться только по сети &lt;net&gt; (ipv4, ipv6 или onion)</translation>
    </message>
    <message>
        <source>Options:</source>
        <translation>Параметры:</translation>
    </message>
    <message>
        <source>Password for JSON-RPC connections</source>
        <translation>Пароль для подключений JSON-RPC</translation>
    </message>
    <message>
        <source>Prepend debug output with timestamp (default: %u)</source>
        <translation>Дописывать отметки времени к отладочному выводу (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Print this help message and exit</source>
        <translation>Вывести эту справку и выйти</translation>
    </message>
    <message>
        <source>Print version and exit</source>
        <translation>Написать версию и выйти</translation>
    </message>
    <message>
        <source>Prune cannot be configured with a negative value.</source>
        <translation>Удаление блоков не может использовать отрицательное значение.</translation>
    </message>
    <message>
        <source>Prune mode is incompatible with -txindex.</source>
        <translation>Режим удаления блоков несовместим с -txindex.</translation>
    </message>
    <message>
        <source>Pruning blockstore...</source>
        <translation>Очистка хранилища блоков...</translation>
    </message>
    <message>
        <source>RPC server options:</source>
        <translation>Параметры сервера RPC:</translation>
    </message>
    <message>
        <source>Rebuild chain state and block index from the blk*.dat files on disk</source>
        <translation></translation>
    </message>
    <message>
        <source>Rebuild chain state from the currently indexed blocks</source>
        <translation>Перестроить индекс цепи из текущих индексированных блоков</translation>
    </message>
    <message>
        <source>Reducing -maxconnections from %d to %d, because of system limitations.</source>
        <translation>Уменьшите -maxconnections с %d до %d, из-за ограничений системы.</translation>
    </message>
    <message>
        <source>Relay and mine data carrier transactions (default: %u)</source>
        <translation>Транслировать и генерировать транзакции носителей данных (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Relay non-P2SH multisig (default: %u)</source>
        <translation>Транслировать не-P2SH мультиподпись (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Rescan the block chain for missing wallet transactions on startup</source>
        <translation>Перепроверить цепь блоков на предмет отсутствующих в бумажнике транзакций при запуске</translation>
    </message>
    <message>
        <source>Rescanning...</source>
        <translation>Сканирование...</translation>
    </message>
    <message>
        <source>Rewinding blocks...</source>
        <translation>Перемотка блоков...</translation>
    </message>
    <message>
        <source>Run in the background as a daemon and accept commands</source>
        <translation>Запускаться в фоне как демон и принимать команды</translation>
    </message>
    <message>
        <source>Send trace/debug info to console instead of debug.log file</source>
        <translation>Выводить информацию трассировки/отладки на консоль вместо файла debug.log</translation>
    </message>
    <message>
        <source>Send transactions as zero-fee transactions if possible (default: %u)</source>
        <translation>Осуществить транзакцию бесплатно, если возможно (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Set database cache size in megabytes (%d to %d, default: %d)</source>
        <translation>Установить размер кэша БД в мегабайтах(от %d до %d, по умолчанию: %d)</translation>
    </message>
    <message>
        <source>Set key pool size to &lt;n&gt; (default: %u)</source>
        <translation>Установить размер пула ключей в &lt;n&gt; (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Set maximum BIP141 block weight (default: %d)</source>
        <translation>Задать максимальное BIP141 значение блока (по умолчанию: %d)</translation>
    </message>
    <message>
        <source>Set maximum block size in bytes (default: %d)</source>
        <translation>Задать максимальный размер блока в байтах (по умолчанию: %d)</translation>
    </message>
    <message>
        <source>Set the number of threads to service RPC calls (default: %d)</source>
        <translation>Задать число потоков выполнения запросов RPC (по умолчанию: %d)</translation>
    </message>
    <message>
        <source>Show all debugging options (usage: --help -help-debug)</source>
        <translation>Показать все отладочные параметры (использование: --help -help-debug)</translation>
    </message>
    <message>
        <source>Shrink debug.log file on client startup (default: 1 when no -debug)</source>
        <translation>Сжимать файл debug.log при запуске клиента (по умолчанию: 1, если нет -debug)</translation>
    </message>
    <message>
        <source>Signing transaction failed</source>
        <translation>Не удалось подписать транзакцию</translation>
    </message>
    <message>
        <source>Specify configuration file (default: %s)</source>
        <translation>Указать конфигурационный файл (по умолчанию: %s)</translation>
    </message>
    <message>
        <source>Specify connection timeout in milliseconds (minimum: 1, default: %d)</source>
        <translation>Указать тайм-аут соединения в миллисекундах (минимум: 1, по умолчанию: %d)</translation>
    </message>
    <message>
        <source>Specify data directory</source>
        <translation>Задать каталог данных</translation>
    </message>
    <message>
        <source>Specify pid file (default: %s)</source>
        <translation>Указать pid-файл (по умолчанию: %s)</translation>
    </message>
    <message>
        <source>Specify wallet file (within data directory)</source>
        <translation>Укажите файл бумажника (внутри каталога данных)</translation>
    </message>
    <message>
        <source>Specify your own public address</source>
        <translation>Укажите ваш собственный публичный адрес</translation>
    </message>
    <message>
        <source>Spend unconfirmed change when sending transactions (default: %u)</source>
        <translation>Тратить неподтвержденную сдачу при отправке транзакций (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>The source code is available from %s.</source>
        <translation>Исходный код доступен в %s.</translation>
    </message>
    <message>
        <source>The transaction amount is too small to pay the fee</source>
        <translation>Сумма транзакции слишком мала для уплаты комиссии</translation>
    </message>
    <message>
        <source>This is experimental software.</source>
        <translation>Это экспериментальное ПО.</translation>
    </message>
    <message>
        <source>Threshold for disconnecting misbehaving peers (default: %u)</source>
        <translation>Порог для отключения неправильно ведущих себя узлов (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Tor control port password (default: empty)</source>
        <translation>Пароль контроля порта Tor (по умолчанию: пустой)</translation>
    </message>
    <message>
        <source>Tor control port to use if onion listening enabled (default: %s)</source>
        <translation>Порт контроля Tor используется, если включено прослушивание onion (по умолчанию: %s)</translation>
    </message>
    <message>
        <source>Transaction amount too small</source>
        <translation>Сумма транзакции слишком мала</translation>
    </message>
    <message>
        <source>Transaction amounts must be positive</source>
        <translation>Сумма транзакции должна быть положительна</translation>
    </message>
    <message>
        <source>Transaction too large for fee policy</source>
        <translation>Транзакция слишком большая для правил комиссии.</translation>
    </message>
    <message>
        <source>Transaction too large</source>
        <translation>Транзакция слишком большая</translation>
    </message>
    <message>
        <source>Unable to bind to %s on this computer (bind returned error %s)</source>
        <translation>Невозможно привязаться к %s на этом компьютере (bind вернул ошибку %s)</translation>
    </message>
    <message>
        <source>Unable to bind to %s on this computer. %s is probably already running.</source>
        <translation>Невозможно привязаться к %s на этом компьютере. Возможно, %s уже работает.</translation>
    </message>
    <message>
        <source>Unable to start HTTP server. See debug log for details.</source>
        <translation>Невозможно запустить HTTP сервер. Смотри debug лог для подробностей.</translation>
    </message>
    <message>
        <source>Unknown network specified in -onlynet: &apos;%s&apos;</source>
        <translation>В параметре -onlynet указана неизвестная сеть: &apos;%s&apos;</translation>
    </message>
    <message>
        <source>Unsupported argument -benchmark ignored, use -debug=bench.</source>
        <translation>Неподдерживаемый аргумент -benchmark проигнорирован, используйте -debug=bench.</translation>
    </message>
    <message>
        <source>Unsupported argument -debugnet ignored, use -debug=net.</source>
        <translation>Неподдерживаемый аргумент -debugnet проигнорирован, используйте -debug=net.</translation>
    </message>
    <message>
        <source>Unsupported argument -tor found, use -onion.</source>
        <translation>Обнаружен не поддерживаемый параметр -tor, используйте -onion.</translation>
    </message>
    <message>
        <source>Upgrade wallet to latest format on startup</source>
        <translation>Обновить бумажник до последнего формата при запуске</translation>
    </message>
    <message>
        <source>Use UPnP to map the listening port (default: %u)</source>
        <translation>Использовать UPnP для проброса порта (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>User Agent comment (%s) contains unsafe characters.</source>
        <translation>Комментарий пользователя (%s) содержит небезопасные символы.</translation>
    </message>
    <message>
        <source>Username for JSON-RPC connections</source>
        <translation>Имя для подключений JSON-RPC</translation>
    </message>
    <message>
        <source>Verifying blocks...</source>
        <translation>Проверка блоков...</translation>
    </message>
    <message>
        <source>Verifying wallet...</source>
        <translation>Проверка бумажника...</translation>
    </message>
    <message>
        <source>Wallet %s resides outside data directory %s</source>
        <translation>Бумажник %s располагается вне каталога данных %s</translation>
    </message>
    <message>
        <source>Wallet debugging/testing options:</source>
        <translation>Параметры отладки/тестирования бумажника:</translation>
    </message>
    <message>
        <source>Wallet needed to be rewritten: restart %s to complete</source>
        <translation>Необходимо перезаписать бумажник, перезапустите %s для завершения операции.</translation>
    </message>
    <message>
        <source>Wallet options:</source>
        <translation>Настройки бумажника:</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Внимание</translation>
    </message>
    <message>
        <source>Warning: unknown new rules activated (versionbit %i)</source>
        <translation>Внимание: неизвестные правила вступили в силу(versionbit %i)</translation>
    </message>
    <message>
        <source>Whether to operate in a blocks only mode (default: %u)</source>
        <translation>Будет работать в режиме только блоков (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Zapping all transactions from wallet...</source>
        <translation>Стираем все транзакции из кошелька...</translation>
    </message>
    <message>
        <source>ZeroMQ notification options:</source>
        <translation>ZeroMQ параметры оповещения:</translation>
    </message>
    <message>
        <source>OctoinCoin core</source>
        <translation>OctoinCoin core</translation>
    </message>
</context>
<context>
    <name>AddressBookPage</name>
    <message>
        <source>Right-click to edit address or label</source>
        <translation>Клик правой кнопкой для редактирования адреса или метки</translation>
    </message>
    <message>
        <source>Create a new address</source>
        <translation>Создать новый адрес</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Новый</translation>
    </message>
    <message>
        <source>Copy the currently selected address to the system clipboard</source>
        <translation>Копировать текущий выделенный адрес в буфер обмена</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Копировать</translation>
    </message>
    <message>
        <source>C&amp;lose</source>
        <translation>&amp;Закрыть</translation>
    </message>
    <message>
        <source>Delete the currently selected address from the list</source>
        <translation>Удалить выбранный адрес из списка</translation>
    </message>
    <message>
        <source>Export the data in the current tab to a file</source>
        <translation>Экспортировать данные из вкладки в файл</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation>&amp;Экспорт</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Удалить</translation>
    </message>
    <message>
        <source>Choose the address to send coins to</source>
        <translation>Выберите адрес для отправки монет</translation>
    </message>
    <message>
        <source>Choose the address to receive coins with</source>
        <translation>Выберите адрес для получения монет</translation>
    </message>
    <message>
        <source>C&amp;hoose</source>
        <translation>Скрыть</translation>
    </message>
    <message>
        <source>Sending addresses</source>
        <translation>Отправка адресов</translation>
    </message>
    <message>
        <source>Receiving addresses</source>
        <translation>Получение адресов</translation>
    </message>
    <message>
        <source>These are your OctoinCoin addresses for sending payments. Always check the amount and the receiving address before sending coins.</source>
        <translation>Это ваши адреса OctoinCoin для отправки платежей. Всегда проверяйте сумму и принимающий адрес перед отправкой монет.</translation>
    </message>
    <message>
        <source>These are your OctoinCoin addresses for receiving payments. It is recommended to use a new receiving address for each transaction.</source>
        <translation>Это ваши адреса OctoinCoin для получения платежей. Для каждой транзакции рекомендуется использовать новый адрес получателя.
</translation>
    </message>
    <message>
        <source>&amp;Copy Address</source>
        <translation>&amp;Копировать адрес</translation>
    </message>
    <message>
        <source>Copy &amp;Label</source>
        <translation>Копировать &amp;метку</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Редактировать</translation>
    </message>
    <message>
        <source>Export Address List</source>
        <translation>Экспорт списка адресов</translation>
    </message>
    <message>
        <source>Comma separated file (*.csv)</source>
        <translation>Comma separated file (*.csv)</translation>
    </message>
    <message>
        <source>Exporting Failed</source>
        <translation>Ошибка экспорта</translation>
    </message>
    <message>
        <source>There was an error trying to save the address list to %1. Please try again.</source>
        <translation>При попытке сохранить список адресов в %1 произошла ошибка. Пожалуйста, попробуйте еще раз.</translation>
    </message>
</context>
<context>
    <name>AddressTableModel</name>
    <message>
        <source>Label</source>
        <translation>Метка</translation>
    </message>
    <message>
        <source>Address</source>
        <translation>Адрес</translation>
    </message>
    <message>
        <source>(no label)</source>
        <translation>(Нет метки)</translation>
    </message>
</context>
<context>
    <name>AskPassphraseDialog</name>
    <message>
        <source>Passphrase Dialog</source>
        <translation>Диалог ввода пароля</translation>
    </message>
    <message>
        <source>Enter passphrase</source>
        <translation>Введите пароль</translation>
    </message>
    <message>
        <source>New passphrase</source>
        <translation>Новый пароль</translation>
    </message>
    <message>
        <source>Repeat new passphrase</source>
        <translation>Повторите новый пароль</translation>
    </message>
    <message>
        <source>Enter the new passphrase to the wallet.&lt;br/&gt;Please use a passphrase of &lt;b&gt;ten or more random characters&lt;/b&gt;, or &lt;b&gt;eight or more words&lt;/b&gt;.</source>
        <translation>Введите новый пароль в кошелек. &lt;br/&gt; Пожалуйста, используйте пароль из десяти символов или более случайных символов &lt;/b&gt;, или &lt;b&gt; 8 или более слов &lt;/b&gt;.</translation>
    </message>
    <message>
        <source>Encrypt wallet</source>
        <translation>Шифровать кошелек</translation>
    </message>
    <message>
        <source>This operation needs your wallet passphrase to unlock the wallet.</source>
        <translation>Введите пароль, чтобы разблокировать кошелек.</translation>
    </message>
    <message>
        <source>Unlock wallet</source>
        <translation>Разблокировать кошелек</translation>
    </message>
    <message>
        <source>This operation needs your wallet passphrase to decrypt the wallet.</source>
        <translation>Введите пароль, чтобы расшифровать кошелек.</translation>
    </message>
    <message>
        <source>Decrypt wallet</source>
        <translation>Расшифровать кошелек</translation>
    </message>
    <message>
        <source>Change passphrase</source>
        <translation>Изменить пароль</translation>
    </message>
    <message>
        <source>Enter the old passphrase and new passphrase to the wallet.</source>
        <translation>Введите старый и новый пароль.</translation>
    </message>
    <message>
        <source>Confirm wallet encryption</source>
        <translation>Подтверждение шифрования кошелька</translation>
    </message>
    <message>
        <source>Are you sure you wish to encrypt your wallet?</source>
        <translation>Вы действительно хотите зашифровать свой кошелек?</translation>
    </message>
    <message>
        <source>Wallet encrypted</source>
        <translation>Кошелек зашифрованный</translation>
    </message>
    <message>
        <source>IMPORTANT: Any previous backups you have made of your wallet file should be replaced with the newly generated, encrypted wallet file. For security reasons, previous backups of the unencrypted wallet file will become useless as soon as you start using the new, encrypted wallet.</source>
        <translation>ВАЖНО: любые предыдущие резервные копии, которые вы сделали из вашего файла кошелька, должны быть заменены вновь созданным зашифрованным файлом кошелька. По соображениям безопасности предыдущие резервные копии файла незашифрованного кошелька станут бесполезными, как только вы начнете использовать новый, зашифрованный кошелек.</translation>
    </message>
    <message>
        <source>Wallet encryption failed</source>
        <translation>Ошибка шифрования кошелька</translation>
    </message>
    <message>
        <source>Wallet encryption failed due to an internal error. Your wallet was not encrypted.</source>
        <translation>Ошибка шифрования кошелька из-за внутренней ошибки. Ваш кошелек не был зашифрован.</translation>
    </message>
    <message>
        <source>The supplied passphrases do not match.</source>
        <translation>Предоставленные пароли не совпадают.</translation>
    </message>
    <message>
        <source>Wallet unlock failed</source>
        <translation>Ошибка разблокировки кошелька</translation>
    </message>
    <message>
        <source>The passphrase entered for the wallet decryption was incorrect.</source>
        <translation>Пароль введен неправильно.</translation>
    </message>
    <message>
        <source>Wallet decryption failed</source>
        <translation>Ошибка дешифрования кошелька</translation>
    </message>
    <message>
        <source>Wallet passphrase was successfully changed.</source>
        <translation>Пароль был успешно измененен.</translation>
    </message>
    <message>
        <source>Warning: The Caps Lock key is on!</source>
        <translation>Внимание: кнопка Caps Lock включена!</translation>
    </message>
    <message>
        <source>Warning: If you encrypt your wallet and lose your passphrase, you will &lt;b&gt;LOSE ALL OF YOUR OCTOINCOINS&lt;/b&gt;!</source>
        <translation>Предупреждение. Если вы зашифруете свой кошелек и потеряете свой пароль, вы  &lt;b&gt; ПОТЕРЯЕТЕ ВСЕ ВАШИ МОНЕТЫ &lt; /b &gt;!</translation>
    </message>
    <message>
        <source>%1 will close now to finish the encryption process. Remember that encrypting your wallet cannot fully protect your  octoins from being stolen by malware infecting your computer.</source>
        <translation>%1 закроется, чтобы закончить процесс шифрования. Помните, что шифрование вашего кошелька не может полностью защитить ваши сбережения от кражи вредоносными программами, заражающими ваш компьютер.</translation>
    </message>
</context>
<context>
    <name>BanTableModel</name>
    <message>
        <source>IP/Netmask</source>
        <translation>IP/префикс</translation>
    </message>
    <message>
        <source>Banned Until</source>
        <translation>Заблокировано до</translation>
    </message>
</context>
<context>
    <name>BitcoinGUI</name>
    <message>
        <source>Redeem codes</source>
        <translation>Ввести код</translation>
    </message>
    <message>
        <source>Browse page of bonus codes</source>
        <translation>Просмотр страницы бонусных кодов</translation>
    </message>
    <message>
        <source>Sign &amp;message</source>
        <translation>&amp;Подписать сообщение</translation>
    </message>
    <message>
        <source>Synchronizing with network...</source>
        <translation>Синхронизация с сетью...</translation>
    </message>
    <message>
        <source>&amp;Overview</source>
        <translation>&amp;Обзор</translation>
    </message>
    <message>
        <source>Node</source>
        <translation>Узел</translation>
    </message>
    <message>
        <source>Show general overview of wallet</source>
        <translation>Показать общий обзор действий с бумажником</translation>
    </message>
    <message>
        <source>&amp;Transactions</source>
        <translation>&amp;Транзакции</translation>
    </message>
    <message>
        <source>Browse transaction history</source>
        <translation>Показать историю транзакций</translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation>В&amp;ыход</translation>
    </message>
    <message>
        <source>Quit application</source>
        <translation>Закрыть приложение</translation>
    </message>
    <message>
        <source>&amp;Options</source>
        <translation>&amp;Параметры</translation>
    </message>
    <message>
        <source>Modify configuration options for %1</source>
        <translation>Изменить конфигурационные настройки для %1</translation>
    </message>
    <message>
        <source>&amp;Encrypt Wallet</source>
        <translation>&amp;Зашифровать бумажник</translation>
    </message>
    <message>
        <source>&amp;Backup Wallet</source>
        <translation>&amp;Сделать резервную копию бумажника</translation>
    </message>
    <message>
        <source>&amp;Change Passphrase</source>
        <translation>&amp;Изменить пароль</translation>
    </message>
    <message>
        <source>&amp;Sending addresses</source>
        <translation>&amp;Адреса отправки</translation>
    </message>
    <message>
        <source>&amp;Receiving addresses</source>
        <translation>Адреса &amp;получения</translation>
    </message>
    <message>
        <source>Open &amp;URI</source>
        <translation>Открыть &amp;URI</translation>
    </message>
    <message>
        <source>Reindexing blocks on disk...</source>
        <translation>Идет переиндексация блоков на диске...</translation>
    </message>
    <message>
        <source>Send coins to a OctoinCoin address</source>
        <translation>Отправить монеты на указанный адрес OctoinCoin</translation>
    </message>
    <message>
        <source>Backup wallet to another location</source>
        <translation>Сделать резервную копию бумажника в другом месте</translation>
    </message>
    <message>
        <source>Change the passphrase used for wallet encryption</source>
        <translation>Изменить пароль шифрования бумажника</translation>
    </message>
    <message>
        <source>&amp;Debug window</source>
        <translation>&amp;Окно отладки</translation>
    </message>
    <message>
        <source>Open debugging and diagnostic console</source>
        <translation>Открыть консоль отладки и диагностики</translation>
    </message>
    <message>
        <source>&amp;Verify message</source>
        <translation>&amp;Проверить сообщение</translation>
    </message>
    <message>
        <source>Wallet</source>
        <translation>Бумажник</translation>
    </message>
    <message>
        <source>&amp;Send</source>
        <translation>&amp;Отправить</translation>
    </message>
    <message>
        <source>&amp;Receive</source>
        <translation>&amp;Получить</translation>
    </message>
    <message>
        <source>&amp;Show / Hide</source>
        <translation>&amp;Показать / Скрыть</translation>
    </message>
    <message>
        <source>Show or hide the main Window</source>
        <translation>Показать или скрыть главное окно</translation>
    </message>
    <message>
        <source>Encrypt the private keys that belong to your wallet</source>
        <translation>Зашифровать приватные ключи, принадлежащие вашему бумажнику</translation>
    </message>
    <message>
        <source>Sign messages with your OctoinCoin addresses to prove you own them</source>
        <translation>Подписать сообщения вашим адресом OctoinCoin, чтобы доказать, что вы им владеете</translation>
    </message>
    <message>
        <source>Verify messages to ensure they were signed with specified OctoinCoin addresses</source>
        <translation>Проверить сообщения, чтобы удостовериться, что они были подписаны определенным адресом OctoinCoin</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Файл</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>&amp;Настройки</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Помощь</translation>
    </message>
    <message>
        <source>Tabs toolbar</source>
        <translation>Панель вкладок</translation>
    </message>
    <message>
        <source>Request payments (generates QR codes and octoin: URIs)</source>
        <translation>Запросить платежи (создает QR-коды и octoin: ссылки)</translation>
    </message>
    <message>
        <source>Show the list of used sending addresses and labels</source>
        <translation>Показать список использованных адресов и меток отправки</translation>
    </message>
    <message>
        <source>Show the list of used receiving addresses and labels</source>
        <translation>Показать список использованных адресов и меток получения</translation>
    </message>
    <message>
        <source>Open a octoin: URI or payment request</source>
        <translation>Открыть octoin: URI или запрос платежа</translation>
    </message>
    <message>
        <source>&amp;Command-line options</source>
        <translation>&amp;Параметры командной строки</translation>
    </message>
    <message numerus="yes">
        <source>%n active connection(s) to OctoinCoin network</source>
        <translation>
            <numerusform>%n активных соединений с сетью OctoinCoin</numerusform>
            <numerusform>%n активных соединений с сетью OctoinCoin</numerusform>
            <numerusform>%n активных соединений с сетью OctoinCoin</numerusform>
        </translation>
    </message>
    <message>
        <source>Indexing blocks on disk...</source>
        <translation>Индексация блоков на диске...</translation>
    </message>
    <message>
        <source>Processing blocks on disk...</source>
        <translation>Обработка блоков на диске...</translation>
    </message>
    <message>
        <source>NOT SYNCED</source>
        <translation>Источник блоков недоступен...</translation>
    </message>
    <message numerus="yes">
        <source>Processed %n block(s) of transaction history.</source>
        <translation>
            <numerusform>Обработан %n блок истории транзакций.</numerusform>
            <numerusform>Обработано %n блока истории транзакций.</numerusform>
            <numerusform>Обработано %n блоков истории транзакций.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n час</numerusform>
            <numerusform>%n часа</numerusform>
            <numerusform>%n часов</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n день</numerusform>
            <numerusform>%n дня</numerusform>
            <numerusform>%n дней</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n week(s)</source>
        <translation>
            <numerusform>%n неделю</numerusform>
            <numerusform>%n недели</numerusform>
            <numerusform>%n недель</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 and %2</source>
        <translation>%1 и %2</translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n год</numerusform>
            <numerusform>%n лет</numerusform>
            <numerusform>%n лет</numerusform>
        </translation>
    </message>
    <message>
        <source>SYNCING...</source>
        <translation>%1 позади</translation>
    </message>
    <message>
        <source>Last received block was generated %1 ago.</source>
        <translation>Последний полученный блок был сгенерирован %1 назад.</translation>
    </message>
    <message>
        <source>Transactions after this will not yet be visible.</source>
        <translation>Транзакции после него пока не будут видны.</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Внимание</translation>
    </message>
    <message>
        <source>Information</source>
        <translation>Информация</translation>
    </message>
    <message>
        <source>Up to date</source>
        <translation>Синхронизировано</translation>
    </message>
    <message>
        <source>%1 client</source>
        <translation>%1 клиент</translation>
    </message>
    <message>
        <source>Catching up...</source>
        <translation>Синхронизируется...</translation>
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
        <translation>Количество: %1
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
        <translation>Метка: %1
</translation>
    </message>
    <message>
        <source>Address: %1
</source>
        <translation>Адрес: %1
</translation>
    </message>
    <message>
        <source>Sent transaction</source>
        <translation>Исходящая транзакция</translation>
    </message>
    <message>
        <source>Incoming transaction</source>
        <translation>Входящая транзакция</translation>
    </message>
    <message>
        <source>Wallet is &lt;b&gt;encrypted&lt;/b&gt; and currently &lt;b&gt;unlocked&lt;/b&gt;</source>
        <translation>Бумажник &lt;b&gt;зашифрован&lt;/b&gt; и в настоящее время &lt;b&gt;разблокирован&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Wallet is &lt;b&gt;encrypted&lt;/b&gt; and currently &lt;b&gt;locked&lt;/b&gt;</source>
        <translation>Бумажник &lt;b&gt;зашифрован&lt;/b&gt; и в настоящее время &lt;b&gt;заблокирован&lt;/b&gt;</translation>
    </message>
    <message>
        <source>A fatal error occurred.OctoinCoin can no longer continue safely and will quit.</source>
        <translation>Произошла фатальная ошибка. OctoinCoin больше не может продолжать работать безопасно и будет отключен.</translation>
    </message>
    <message>
        <source>Show the %1 help message to get a list with possible OctoinCoin command-line options</source>
        <translation>Введите help %1, чтобы получить список с возможными параметрами командной строки OctoinCoin</translation>
    </message>
    <message>
        <source>&amp;Money share</source>
        <translation>&amp;Доля</translation>
    </message>
    <message>
        <source>OctoinCoin</source>
        <translation>OctoinCoin</translation>
    </message>
    <message>
        <source>Restore Wallet</source>
        <translation>Восстановить кошелек</translation>
    </message>
    <message>
        <source>Return to the previously made backup copy of the wallet.</source>
        <translation>Восстановить резервную копию кошелька.</translation>
    </message>
    <message>
        <source>Lock Wallet</source>
        <translation>Заблокировать кошелек</translation>
    </message>
    <message>
        <source>Unlock Wallet</source>
        <translation>Разблокировать Кошелек</translation>
    </message>
    <message>
        <source>Stop mining</source>
        <translation>Прекратить майнинг</translation>
    </message>
    <message>
        <source>Start mining</source>
        <translation>Начать майнинг</translation>
    </message>
    <message>
        <source>Wallet must be unlocked to stake. Do you want to unlock your wallet?</source>
        <translation>Кошелек должен быть разблокирован. Вы хотите разблокировать свой кошелек?</translation>
    </message>
    <message>
        <source>Check of update</source>
        <translation>Проверка обновлений</translation>
    </message>
    <message>
        <source></source>
        <translation>Нет доступных обновлений</translation>
    </message>
    <message>
        <source>Сan not read server response.</source>
        <translation>Невозможно прочитать ответ сервера.</translation>
    </message>
    <message>
        <source>mining</source>
        <translation>Майнинг</translation>
    </message>
    <message>
        <source>Check for updates</source>
        <translation>Проверить наличие обновлений</translation>
    </message>
    <message>
        <source>No updates available</source>
        <translation>Нет доступных обновлений</translation>
    </message>
    <message>
        <source>Check update</source>
        <translation>Проверка обновлений</translation>
    </message>
    <message>
        <source>You can download new wallet version &lt;a style=&apos;color:#a3e400;&apos; name=&apos;here&apos; href=&apos;%0&apos;&gt;here&lt;/a&gt;
 </source>
        <translation>Вы можете загрузить новую версию кошелька &lt;a style=&apos;color:#a3e400;&apos; name=&apos;here&apos; href=&apos;%0&apos;&gt;здесь&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Export HD Master key</source>
        <translation>Экспорт HD Master ключа</translation>
    </message>
    <message>
        <source>Lightning</source>
        <translation >Лайтнинг</translation>
    </message>
    <message>
        <source>Synchronization</source>
        <translation>Синхронизация</translation>
    </message>
    <message>
        <source>Wait until the network is fully synchronized and try again.</source>
        <translation>Подождите, пока сеть полностью синхронизируется и повторите попытку.</translation>
    </message>
    <message>
        <source>Start lightning</source>
        <translation>Запустить лайтнинг</translation>
    </message>
    <message>
        <source>For normal operation of the lightning, wallet must be unlocked. Do you want to unlock your wallet?</source>
        <translation>Для нормальной работы лайтнинга кошелек должен быть разблокирован. Вы хотите разблокировать свой кошелек?</translation>
    </message>
    <message>
        <source>Lightning extract error</source>
        <translation>Ошибка распаковки лайтнинга</translation>
    </message>
    <message>
        <source>Could not install the lightning on your wallet.</source>
        <translation>Не удалось установить лайтнинг на ваш кошелек.</translation>
    </message>
    <message>
        <source>Eclair</source>
        <translation>Лайтнинг</translation>
    </message>
    <message>
        <source>Eclair is already running</source>
        <translation>Лайтнинг уже запущен</translation>
    </message>
    <message>
        <source>Java not found</source>
        <translation>Java не найден</translation>
    </message>
    <message>
        <source>You need to download and install Java. click on the &lt;a style=&apos;color:#a3e400;&apos; href=%0&gt;link&lt;/a&gt; to download.</source>
        <translation>Вам необходимо загрузить и установить Java. нажать на &lt;a style=&apos;color:#a3e400;&apos; href=%0&gt;ссылку&lt;/a&gt; для загрузки.</translation>
    </message>
</context>
<context>
    <name>BonusCodeTab</name>
    <message>
        <source>Invalid key: Check the key and try again.</source>
        <translation>Неверный ключ: проверьте ключ и повторите попытку.</translation>
    </message>
    <message>
        <source>Create a code</source>
        <translation>Создать код</translation>
    </message>
    <message>
        <source>You do not have the right amount in your account.</source>
        <translation>У вас нет нужной суммы в вашем аккаунте.</translation>
    </message>
    <message>
        <source>Code create fail</source>
        <translation>Ошибка создания кода</translation>
    </message>
    <message>
        <source>Your code is created. The code will be available after confirmation.</source>
        <translation>Ваш код создан. Код будет доступен после подтверждения.</translation>
    </message>
    <message>
        <source>Created codes:</source>
        <translation>Созданные коды:</translation>
    </message>
    <message>
        <source>Create code</source>
        <translation>Создать код</translation>
    </message>
    <message>
        <source>Redeem code</source>
        <translation>Использовать код</translation>
    </message>
    <message>
        <source>Code Id</source>
        <translation>Id Кода</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>Amount</source>
        <translation>Сумма</translation>
    </message>
    <message>
        <source>Transaction hash</source>
        <translation>Хеш транзакции</translation>
    </message>
    <message>
        <source>KeyWord</source>
        <translation>Код</translation>
    </message>
    <message>
        <source>status</source>
        <translation>статус</translation>
    </message>
    <message>
        <source>Unused</source>
        <translation>Не использован</translation>
    </message>
    <message>
        <source>Used</source>
        <translation>Использован</translation>
    </message>
    <message>
        <source>Unconfirmed</source>
        <translation>Не подтвержден</translation>
    </message>
    <message>
        <source>Amount of OCC coins</source>
        <translation>Сумма OCC монет</translation>
    </message>
    <message>
        <source>Bonus Code Tab</source>
        <translation>Вкладка «Бонусный код»</translation>
    </message>
    <message>
        <source>Commission for the confirmation of the bonus code.</source>
        <translation>Комиссия за подтверждение бонусного кода.</translation>
    </message>
    <message>
        <source>The key is no confirmed.</source>
        <translation>Ключ не подтвержден.</translation>
    </message>
    <message>
        <source>Redeemed codes:</source>
        <translation>Использованные коды:</translation>
    </message>
    <message>
        <source>Bonus code is not available.</source>
        <translation>Бонусный код недоступен.</translation>
    </message>
    <message>
        <source>Error adding key to wallet.</source>
        <translation>Ошибка добавления ключа в кошелек.</translation>
    </message>
    <message>
        <source>Key create fail</source>
        <translation>Ошибка создания ключа</translation>
    </message>
    <message>
        <source>The transaction was rejected! This might happen if some of the coins in your wallet were already spent, such as if you used a copy of wallet.dat and coins were spent in the copy but not marked as spent here.</source>
        <translation>Сделка была отклонена! Это может произойти, если некоторые из монет в вашем кошельке уже были потрачены, например, если вы использовали копию кошелька. Dat и монеты были потрачены в копии, но не отмечены как потраченные здесь.
</translation>
    </message>
    <message>
        <source>Solution</source>
        <translation>Решение</translation>
    </message>
    <message>
        <source>%0 OctoinCoins were received with this code.
We recommend waiting for 3 transaction confirmations.</source>
        <translation>С помощью этого кода было получено %0 OctoinCoins. Рекомендуется дождаться 3х подтверждений транзакции.</translation>
    </message>
    <message>
        <source>The bonus key was added to your wallet, but it was not possible to scan it.</source>
        <translation>Бонусный ключ был добавлен в ваш кошелек, но его не удалось отсканировать.</translation>
    </message>
    <message>
        <source>In order to solve this problem, you need to rescan your wallet. Scanning a wallet will take some time want to continue?</source>
        <translation>Чтобы решить эту проблему, вам нужно перепроверить свой кошелек. Сканирование кошелька займет некоторое время. Желаете продолжить?
</translation>
    </message>
</context>
<context>
    <name>CoinControlDialog</name>
    <message>
        <source>Coin Selection</source>
        <translation>Выбор монет</translation>
    </message>
    <message>
        <source>Quantity:</source>
        <translation>Количество:</translation>
    </message>
    <message>
        <source>Bytes:</source>
        <translation>Байт:</translation>
    </message>
    <message>
        <source>Amount:</source>
        <translation>Сумма:</translation>
    </message>
    <message>
        <source>Priority:</source>
        <translation>Приоритет:</translation>
    </message>
    <message>
        <source>Fee:</source>
        <translation>Комиссия:</translation>
    </message>
    <message>
        <source>Dust:</source>
        <translation>Пыль:</translation>
    </message>
    <message>
        <source>After Fee:</source>
        <translation>После комиссии:</translation>
    </message>
    <message>
        <source>Change:</source>
        <translation>Сдача:</translation>
    </message>
    <message>
        <source>(un)select all</source>
        <translation>Отменить выбор всего</translation>
    </message>
    <message>
        <source>Tree mode</source>
        <translation>Режим дерева</translation>
    </message>
    <message>
        <source>List mode</source>
        <translation>Режим списка</translation>
    </message>
    <message>
        <source>Amount</source>
        <translation>Сумма</translation>
    </message>
    <message>
        <source>Received with label</source>
        <translation>Получено с пометкой</translation>
    </message>
    <message>
        <source>Received with address</source>
        <translation>Получено с адреса</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>Confirmations</source>
        <translation>Подтверждений</translation>
    </message>
    <message>
        <source>Confirmed</source>
        <translation>Подтверждено</translation>
    </message>
    <message>
        <source>Priority</source>
        <translation>Приоритет</translation>
    </message>
    <message>
        <source>Copy address</source>
        <translation>Копировать адрес</translation>
    </message>
    <message>
        <source>Copy label</source>
        <translation>Копировать метку</translation>
    </message>
    <message>
        <source>Copy amount</source>
        <translation>Копировать сумму</translation>
    </message>
    <message>
        <source>Copy transaction ID</source>
        <translation>Копировать ID транзакции</translation>
    </message>
    <message>
        <source>Lock unspent</source>
        <translation>Блокировать</translation>
    </message>
    <message>
        <source>Unlock unspent</source>
        <translation>Разблокировать</translation>
    </message>
    <message>
        <source>Copy quantity</source>
        <translation>Копировать сумму</translation>
    </message>
    <message>
        <source>Copy fee</source>
        <translation>Копировать комиссию</translation>
    </message>
    <message>
        <source>Copy after fee</source>
        <translation>Скопировать после оплаты</translation>
    </message>
    <message>
        <source>Copy bytes</source>
        <translation>Копировать байты</translation>
    </message>
    <message>
        <source>Copy priority</source>
        <translation>Копировать приоритет</translation>
    </message>
    <message>
        <source>Copy dust</source>
        <translation>Copy dust</translation>
    </message>
    <message>
        <source>Copy change</source>
        <translation>Копировать изменение</translation>
    </message>
    <message>
        <source>highest</source>
        <translation>самый большой</translation>
    </message>
    <message>
        <source>higher</source>
        <translation>очень большой</translation>
    </message>
    <message>
        <source>high</source>
        <translation>высокий</translation>
    </message>
    <message>
        <source>medium-high</source>
        <translation>средне-высокий</translation>
    </message>
    <message>
        <source>medium</source>
        <translation>средний</translation>
    </message>
    <message>
        <source>low-medium</source>
        <translation>средне-низкий</translation>
    </message>
    <message>
        <source>low</source>
        <translation>низкий</translation>
    </message>
    <message>
        <source>lower</source>
        <translation>очень низкий</translation>
    </message>
    <message>
        <source>lowest</source>
        <translation>ниже всего</translation>
    </message>
    <message>
        <source>(%1 locked)</source>
        <translation>(%1 блокирован)</translation>
    </message>
    <message>
        <source>none</source>
        <translation>ничего</translation>
    </message>
    <message>
        <source>yes</source>
        <translation>Да</translation>
    </message>
    <message>
        <source>no</source>
        <translation>Нет</translation>
    </message>
    <message>
        <source>This label turns red if the transaction size is greater than 1000 bytes.</source>
        <translation>Эта метка становится красным, если размер транзакции превышает 1000 байт.</translation>
    </message>
    <message>
        <source>This means a fee of at least %1 per kB is required.</source>
        <translation>Это означает, что требуется плата не менее %1 за килобайт.</translation>
    </message>
    <message>
        <source>Can vary +/- 1 byte per input.</source>
        <translation>Может варьироваться +/- 1 байт на вход.</translation>
    </message>
    <message>
        <source>Transactions with higher priority are more likely to get included into a block.</source>
        <translation>Транзакции с более высоким приоритетом с большей вероятностью будут включены в блок.</translation>
    </message>
    <message>
        <source>This label turns red if the priority is smaller than &quot;medium&quot;.</source>
        <translation>Эта метка становится красной, если приоритет меньше, чем &quot;«средний»&quot;.</translation>
    </message>
    <message>
        <source>This label turns red if any recipient receives an amount smaller than the current dust threshold.</source>
        <translation>Эта метка становится красной, если какой-либо получатель получает количество, меньшее, чем текущий порог минимума.</translation>
    </message>
    <message>
        <source>Can vary +/- %1 satoshi(s) per input.</source>
        <translation>Может варьироваться +/- %1 сатоши на вход.</translation>
    </message>
    <message>
        <source>(no label)</source>
        <translation>(Нет метки)</translation>
    </message>
    <message>
        <source>change from %1 (%2)</source>
        <translation>Изменение от %1 (%2)</translation>
    </message>
    <message>
        <source>(change)</source>
        <translation>Изменено</translation>
    </message>
</context>
<context>
    <name>EditAddressDialog</name>
    <message>
        <source>Edit Address</source>
        <translation>Изменить адрес</translation>
    </message>
    <message>
        <source>&amp;Label</source>
        <translation>&amp;Метка</translation>
    </message>
    <message>
        <source>The label associated with this address list entry</source>
        <translation>Метка, связанная с этой записью списка адресов</translation>
    </message>
    <message>
        <source>The address associated with this address list entry. This can only be modified for sending addresses.</source>
        <translation>Адрес, связанный с этой записью списка адресов. Он может быть изменен только для адресов отправки.</translation>
    </message>
    <message>
        <source>&amp;Address</source>
        <translation>&amp;Адрес</translation>
    </message>
    <message>
        <source>New receiving address</source>
        <translation>Новый адрес получателя</translation>
    </message>
    <message>
        <source>New sending address</source>
        <translation>Новый адрес отправки</translation>
    </message>
    <message>
        <source>Edit receiving address</source>
        <translation>Изменить адрес получателя</translation>
    </message>
    <message>
        <source>Edit sending address</source>
        <translation>Изменить адрес отправки</translation>
    </message>
    <message>
        <source>The entered address &quot;%1&quot; is not a valid OctoinCoin address.</source>
        <translation>Введенный адрес &quot;%1&quot; Не является допустимым адресом OctoinCoin.</translation>
    </message>
    <message>
        <source>The entered address &quot;%1&quot; is already in the address book.</source>
        <translation>Введенный адрес &quot;%1&quot; Уже находится в адресной книге.</translation>
    </message>
    <message>
        <source>Could not unlock wallet.</source>
        <translation>Не удалось разблокировать кошелек.</translation>
    </message>
    <message>
        <source>New key generation failed.</source>
        <translation>Не удалось создать новой набор ключей.</translation>
    </message>
</context>
<context>
    <name>FreespaceChecker</name>
    <message>
        <source>A new data directory will be created.</source>
        <translation>Будет создан новый каталог данных.</translation>
    </message>
    <message>
        <source>name</source>
        <translation>имя</translation>
    </message>
    <message>
        <source>Directory already exists. Add %1 if you intend to create a new directory here.</source>
        <translation>Каталог уже существует. Добавьте %1, если вы хотите создать здесь новый каталог.</translation>
    </message>
    <message>
        <source>Path already exists, and is not a directory.</source>
        <translation>Путь уже существует и не является каталогом.</translation>
    </message>
    <message>
        <source>Cannot create data directory here.</source>
        <translation>Не удается создать здесь каталог данных.</translation>
    </message>
</context>
<context>
    <name>HDKeyView</name>
    <message>
        <source>QR of HDKey</source>
        <translation>QR код HD ключа</translation>
    </message>
    <message>
        <source>QR is not available</source>
        <translation>QR-код недоступен</translation>
    </message>
    <message>
        <source>QR has not supported</source>
        <translation>QR-код не поддерживается</translation>
    </message>
</context>
<context>
    <name>HelpMessageDialog</name>
    <message>
        <source>version</source>
        <translation>версия</translation>
    </message>
    <message>
        <source>(%1-bit)</source>
        <translation>(%1-бит)</translation>
    </message>
    <message>
        <source>About %1</source>
        <translation>О %1</translation>
    </message>
    <message>
        <source>Command-line options</source>
        <translation>Параметры командной строки</translation>
    </message>
    <message>
        <source>Usage:</source>
        <translation>Использование:</translation>
    </message>
    <message>
        <source>command-line options</source>
        <translation>параметры командной строки</translation>
    </message>
    <message>
        <source>UI Options:</source>
        <translation>Настройки интерфейса:</translation>
    </message>
    <message>
        <source>Choose data directory on startup (default: %u)</source>
        <translation>Выбрать каталог данных при запуске (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Set language, for example &quot;de_DE&quot; (default: system locale)</source>
        <translation>Выберите язык, например &quot;de_DE&quot; (по умолчанию: как в системе)</translation>
    </message>
    <message>
        <source>Start minimized</source>
        <translation>Запускать свернутым</translation>
    </message>
    <message>
        <source>Set SSL root certificates for payment request (default: -system-)</source>
        <translation>Указать корневые SSL-сертификаты для запроса платежа (по умолчанию: -system-)</translation>
    </message>
    <message>
        <source>Show splash screen on startup (default: %u)</source>
        <translation>Показывать экран-заставку при запуске (по умолчанию: %u)</translation>
    </message>
    <message>
        <source>Reset all settings changed in the GUI</source>
        <translation>Сбросить все настройки, измененные в графическом интерфейсе</translation>
    </message>
</context>
<context>
    <name>InformationDialog</name>
    <message>
        <source>Information</source>
        <translation>Информация</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation>Текст строки</translation>
    </message>
</context>
<context>
    <name>Intro</name>
    <message>
        <source>Welcome</source>
        <translation>Добро пожаловать</translation>
    </message>
    <message>
        <source>Welcome to %1.</source>
        <translation>Добро пожаловать в %1</translation>
    </message>
    <message>
        <source>As this is the first time the program is launched, you can choose where %1 will store its data.</source>
        <translation>При первом запуске программы вы можете выбрать где %1 будет хранить свои данные.</translation>
    </message>
    <message>
        <source>%1 will download and store a copy of the OctoinCoin block chain. At least %2GB of data will be stored in this directory, and it will grow over time. The wallet will also be stored in this directory.</source>
        <translation>%1 скачает и сохранит копию цепи блоков. Как минимум %2GB будут записаны в этот каталог, и со временем он будет расти. Бумажник также будет сохранен в этом каталоге.</translation>
    </message>
    <message>
        <source>Use the default data directory</source>
        <translation>Использовать каталог данных по умолчанию</translation>
    </message>
    <message>
        <source>Use a custom data directory:</source>
        <translation>Использовать другой каталог данных:</translation>
    </message>
    <message>
        <source>Error: Specified data directory &quot;%1&quot; cannot be created.</source>
        <translation>Ошибка: не удалось создать указанный каталог данных &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message numerus="yes">
        <source>%n GB of free space available</source>
        <translation>
            <numerusform>%n ГБ свободного места доступно</numerusform>
            <numerusform>%n ГБ свободного места доступно</numerusform>
            <numerusform>%n ГБ свободного места доступно</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>(of %n GB needed)</source>
        <translation>
            <numerusform>(из необходимых %n ГБ)</numerusform>
            <numerusform>(из необходимых %n ГБ)</numerusform>
            <numerusform>(из необходимых %n ГБ)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>OpenURIDialog</name>
    <message>
        <source>Open URI</source>
        <translation>Открыть URI</translation>
    </message>
    <message>
        <source>Open payment request from URI or file</source>
        <translation>Открыть запрос платежа из URI или файла</translation>
    </message>
    <message>
        <source>URI:</source>
        <translation>URI:</translation>
    </message>
    <message>
        <source>Select payment request file</source>
        <translation>Выбрать файл запроса платежа</translation>
    </message>
    <message>
        <source>Select payment request file to open</source>
        <translation>Выберите файл платежного запроса для открытия</translation>
    </message>
</context>
<context>
    <name>OptionsDialog</name>
    <message>
        <source>Options</source>
        <translation>Параметры</translation>
    </message>
    <message>
        <source>&amp;Main</source>
        <translation>&amp;Главная</translation>
    </message>
    <message>
        <source>Automatically start %1 after logging in to the system.</source>
        <translation>Автоматически запускать %1 после входа в систему.</translation>
    </message>
    <message>
        <source>&amp;Start %1 on system login</source>
        <translation>&amp;Запускать %1 при входе в систему</translation>
    </message>
    <message>
        <source>Size of &amp;database cache</source>
        <translation>Размер кэша &amp;БД</translation>
    </message>
    <message>
        <source>MB</source>
        <translation>МБ</translation>
    </message>
    <message>
        <source>Number of script &amp;verification threads</source>
        <translation>Число потоков проверки &amp;сценария</translation>
    </message>
    <message>
        <source>Accept connections from outside</source>
        <translation>Принимать входящие соединения</translation>
    </message>
    <message>
        <source>Allow incoming connections</source>
        <translation>Разрешить входящие подключения</translation>
    </message>
    <message>
        <source>IP address of the proxy (e.g. IPv4: 127.0.0.1 / IPv6: ::1)</source>
        <translation>IP-адрес прокси (например IPv4: 127.0.0.1 / IPv6: ::1)</translation>
    </message>
    <message>
        <source>Minimize instead of exit the application when the window is closed. When this option is enabled, the application will be closed only after selecting Exit in the menu.</source>
        <translation>Сворачивать вместо закрытия. Если данная опция будет выбрана — приложение закроется только после выбора соответствующего пункта в меню.</translation>
    </message>
    <message>
        <source>Third party URLs (e.g. a block explorer) that appear in the transactions tab as context menu items. %s in the URL is replaced by transaction hash. Multiple URLs are separated by vertical bar |.</source>
        <translation>Сторонние URL (например, block explorer), которые отображаются на вкладке транзакций как пункты контекстного меню. %s в URL заменяется хэшем транзакции. URL отделяются друг от друга вертикальной чертой |.</translation>
    </message>
    <message>
        <source>Third party transaction URLs</source>
        <translation>Сторонние URL транзакций.</translation>
    </message>
    <message>
        <source>Active command-line options that override above options:</source>
        <translation>Активные опции командной строки, которые перекрывают вышеуказанные опции:</translation>
    </message>
    <message>
        <source>Reset all client options to default.</source>
        <translation>Сбросить все настройки клиента на значения по умолчанию.</translation>
    </message>
    <message>
        <source>&amp;Reset Options</source>
        <translation>&amp;Сбросить параметры</translation>
    </message>
    <message>
        <source>&amp;Network</source>
        <translation>&amp;Сеть</translation>
    </message>
    <message>
        <source>(0 = auto, &lt;0 = leave that many cores free)</source>
        <translation>(0 = автоматически, &lt;0 = оставить столько незагруженных ядер)</translation>
    </message>
    <message>
        <source>W&amp;allet</source>
        <translation>Б&amp;умажник</translation>
    </message>
    <message>
        <source>Enable coin &amp;control features</source>
        <translation>Включить управление входами</translation>
    </message>
    <message>
        <source>If you disable the spending of unconfirmed change, the change from a transaction cannot be used until that transaction has at least one confirmation. This also affects how your balance is computed.</source>
        <translation>При отключении траты неподтвержденной сдачи, сдача от транзакции не может быть использована до тех пор пока у этой транзакции не будет хотя бы одно подтверждение. Это также влияет как ваш баланс рассчитывается.</translation>
    </message>
    <message>
        <source>&amp;Spend unconfirmed change</source>
        <translation>&amp;Тратить неподтвержденную сдачу</translation>
    </message>
    <message>
        <source>Automatically open the OctoinCoin client port on the router. This only works when your router supports UPnP and it is enabled.</source>
        <translation>Автоматически открыть порт для OctoinCoin-клиента на роутере. Работает только если Ваш роутер поддерживает UPnP, и данная функция включена.</translation>
    </message>
    <message>
        <source>Map port using &amp;UPnP</source>
        <translation>Пробросить порт через &amp;UPnP</translation>
    </message>
    <message>
        <source>Connect to the OctoinCoin network through a SOCKS5 proxy.</source>
        <translation>Подключаться к сети OctoinCoin через прокси SOCKS5</translation>
    </message>
    <message>
        <source>&amp;Connect through SOCKS5 proxy (default proxy):</source>
        <translation>&amp;Подключаться к сети OctoinCoin через прокси SOCKS5 (прокси по умолчанию):</translation>
    </message>
    <message>
        <source>Proxy &amp;IP:</source>
        <translation>&amp;IP Прокси: </translation>
    </message>
    <message>
        <source>&amp;Port:</source>
        <translation>По&amp;рт: </translation>
    </message>
    <message>
        <source>Port of the proxy (e.g. 9050)</source>
        <translation>Порт прокси-сервера (например, 9050)</translation>
    </message>
    <message>
        <source>Used for reaching peers via:</source>
        <translation>Используется для достижения участников через:</translation>
    </message>
    <message>
        <source>Shows, if the supplied default SOCKS5 proxy is used to reach peers via this network type.</source>
        <translation>Показывается, если включено прокси SOCKS5 по умолчанию, используемое для соединения с участниками по этому типу сети.</translation>
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
        <translation>Подключаться к сети OctoinCoin через прокси SOCKS5 для скрытых сервисов Tor.</translation>
    </message>
    <message>
        <source>Use separate SOCKS5 proxy to reach peers via Tor hidden services:</source>
        <translation>Использовать отдельный прокси SOCKS5 для соединения с участниками через скрытые сервисы Tor:</translation>
    </message>
    <message>
        <source>&amp;Window</source>
        <translation>&amp;Окно</translation>
    </message>
    <message>
        <source>&amp;Hide the icon from the system tray.</source>
        <translation>&amp;Скрыть иконку из системного трея.</translation>
    </message>
    <message>
        <source>Hide tray icon</source>
        <translation>Скрыть иконку в трее</translation>
    </message>
    <message>
        <source>Show only a tray icon after minimizing the window.</source>
        <translation>Показывать только иконку в системном лотке после сворачивания окна.</translation>
    </message>
    <message>
        <source>&amp;Minimize to the tray instead of the taskbar</source>
        <translation>&amp;Cворачивать в системный лоток вместо панели задач</translation>
    </message>
    <message>
        <source>M&amp;inimize on close</source>
        <translation>С&amp;ворачивать при закрытии</translation>
    </message>
    <message>
        <source>&amp;Display</source>
        <translation>О&amp;тображение</translation>
    </message>
    <message>
        <source>User Interface &amp;language:</source>
        <translation>&amp;Язык интерфейса:</translation>
    </message>
    <message>
        <source>The user interface language can be set here. This setting will take effect after restarting %1.</source>
        <translation>Здесь можно установить язык пользовательского интерфейса. Настройки вступят в силу после перезагрузки %1</translation>
    </message>
    <message>
        <source>&amp;Unit to show amounts in:</source>
        <translation>&amp;Отображать суммы в единицах: </translation>
    </message>
    <message>
        <source>Choose the default subdivision unit to show in the interface and when sending coins.</source>
        <translation>Выберите единицу измерения монет при отображении и отправке.</translation>
    </message>
    <message>
        <source>Whether to show coin control features or not.</source>
        <translation>Показывать ли функции контроля монет или нет.</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <source>default</source>
        <translation>по умолчанию</translation>
    </message>
    <message>
        <source>none</source>
        <translation>ничего</translation>
    </message>
    <message>
        <source>Confirm options reset</source>
        <translation>Подтвердите сброс параметров</translation>
    </message>
    <message>
        <source>Client restart required to activate changes.</source>
        <translation>Для применения изменений требуется перезапуск клиента.</translation>
    </message>
    <message>
        <source>Client will be shut down. Do you want to proceed?</source>
        <translation>Клиент будет выключен. Желаете продолжить?</translation>
    </message>
    <message>
        <source>This change would require a client restart.</source>
        <translation>Это изменение потребует перезапуска клиента.</translation>
    </message>
    <message>
        <source>The supplied proxy address is invalid.</source>
        <translation>Адрес прокси неверен.</translation>
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
        <translation>Отображаемая информация может быть устаревшей. Ваш бумажник автоматически синхронизируется с сетью OctoinCoin после подключения, но этот процесс пока не завершен.</translation>
    </message>
    <message>
        <source>Watch-only:</source>
        <translation>Только наблюдение:</translation>
    </message>
    <message>
        <source>Available:</source>
        <translation>Доступно:</translation>
    </message>
    <message>
        <source>Your current spendable balance</source>
        <translation>Ваш текущий расходный баланс</translation>
    </message>
    <message>
        <source>Pending:</source>
        <translation>В ожидании:</translation>
    </message>
    <message>
        <source>Total of transactions that have yet to be confirmed, and do not yet count toward the spendable balance</source>
        <translation>Общая сумма всех транзакций, которые до сих пор не подтверждены, и до сих пор не учитываются в расходном балансе</translation>
    </message>
    <message>
        <source>Immature:</source>
        <translation>Незрелые:</translation>
    </message>
    <message>
        <source>Mined balance that has not yet matured</source>
        <translation>Баланс добытых монет, который еще не созрел</translation>
    </message>
    <message>
        <source>Balances</source>
        <translation>Балансы</translation>
    </message>
    <message>
        <source>Total:</source>
        <translation>Итого:</translation>
    </message>
    <message>
        <source>Your current total balance</source>
        <translation>Ваш текущий общий баланс</translation>
    </message>
    <message>
        <source>Your current balance in watch-only addresses</source>
        <translation>Ваш текущий баланс в адресах наблюдения</translation>
    </message>
    <message>
        <source>Spendable:</source>
        <translation>Доступно:</translation>
    </message>
    <message>
        <source>Recent transactions</source>
        <translation>Последние транзакции</translation>
    </message>
    <message>
        <source>Unconfirmed transactions to watch-only addresses</source>
        <translation>Неподтвержденные транзакции на адреса наблюдения</translation>
    </message>
    <message>
        <source>Mined balance in watch-only addresses that has not yet matured</source>
        <translation>Баланс добытых монет на адресах наблюдения, который еще не созрел</translation>
    </message>
    <message>
        <source>Current total balance in watch-only addresses</source>
        <translation>Текущий общий баланс на адресах наблюдения</translation>
    </message>
    <message>
        <source>Stake:</source>
        <translation>Доля майнинга</translation>
    </message>
    <message>
        <source>Staked balance that has not yet matured</source>
        <translation>баланс, который еще не созрел</translation>
    </message>
    <message>
        <source>0.000 000 00 OCC</source>
        <translation>0.000 000 00 OCC</translation>
    </message>
    <message>
        <source>Staked balance in watch-only addresses that has not yet matured</source>
        <translation>Установленный баланс наблюдения, которые еще не созрели</translation>
    </message>
</context>
<context>
    <name>PaymentServer</name>
    <message>
        <source>Payment request error</source>
        <translation>Ошибка запроса платежа</translation>
    </message>
    <message>
        <source>Cannot start bitcoin: click-to-pay handler</source>
        <translation>Не удается запустить биткойн: обработчик click-to-pay</translation>
    </message>
    <message>
        <source>URI handling</source>
        <translation>Обработка URI</translation>
    </message>
    <message>
        <source>Payment request fetch URL is invalid: %1</source>
        <translation>Недопустимый URL-адрес запроса на получение платежей: %1</translation>
    </message>
    <message>
        <source>Invalid payment address %1</source>
        <translation>Недопустимый адрес платежа %1</translation>
    </message>
    <message>
        <source>URI cannot be parsed! This can be caused by an invalid OctoinCoin address or malformed URI parameters.</source>
        <translation>URI не может быть проанализирован! Это может быть вызвано неправильным адресом octoin или неправильными параметрами URI</translation>
    </message>
    <message>
        <source>Payment request file handling</source>
        <translation>Обработка файлов платежных запросов</translation>
    </message>
    <message>
        <source>Payment request file cannot be read! This can be caused by an invalid payment request file.</source>
        <translation>Файл с запросом платежа не может быть прочитан! Это может быть вызвано недопустимым файлом запроса платежа.</translation>
    </message>
    <message>
        <source>Payment request rejected</source>
        <translation>Запрос платежа отклонен</translation>
    </message>
    <message>
        <source>Payment request network doesn&apos;t match client network.</source>
        <translation>Сеть запросов платежей не соответствует сети клиентов.</translation>
    </message>
    <message>
        <source>Payment request expired.</source>
        <translation>Запрос платежа истек.</translation>
    </message>
    <message>
        <source>Payment request is not initialized.</source>
        <translation>Запрос платежа не инициализируется.</translation>
    </message>
    <message>
        <source>Unverified payment requests to custom payment scripts are unsupported.</source>
        <translation>Неподтвержденные платежные требования к пользовательским сценариям платежей не поддерживаются.</translation>
    </message>
    <message>
        <source>Invalid payment request.</source>
        <translation>Недействительный запрос платежа.</translation>
    </message>
    <message>
        <source>Requested payment amount of %1 is too small (considered dust).</source>
        <translation>Запрошенная сумма платежа %1 слишком мала (считается пылью).</translation>
    </message>
    <message>
        <source>Refund from %1</source>
        <translation>Возврат из %1</translation>
    </message>
    <message>
        <source>Payment request %1 is too large (%2 bytes, allowed %3 bytes).</source>
        <translation>Запрос платежа %1 слишком велик (%2 байта, допустимо %3 байта).</translation>
    </message>
    <message>
        <source>Error communicating with %1: %2</source>
        <translation>Ошибка связи с %1: %2</translation>
    </message>
    <message>
        <source>Payment request cannot be parsed!</source>
        <translation>Запрос платежа не может быть проанализирован!</translation>
    </message>
    <message>
        <source>Bad response from server %1</source>
        <translation>Плохой ответ от сервера %1</translation>
    </message>
    <message>
        <source>Network request error</source>
        <translation>Ошибка сетевого запроса</translation>
    </message>
    <message>
        <source>Payment acknowledged</source>
        <translation>Оплата подтверждена</translation>
    </message>
</context>
<context>
    <name>PeerTableModel</name>
    <message>
        <source>User Agent</source>
        <translation>Юзер-агент</translation>
    </message>
    <message>
        <source>Node/Service</source>
        <translation>Узел/сервис</translation>
    </message>
    <message>
        <source>Ping Time</source>
        <translation>Время задержки</translation>
    </message>
</context>
<context>
    <name>PreviewCodeDialog</name>
    <message>
        <source>Close</source>
        <translation>Закрыть</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Копировать</translation>
    </message>
    <message>
        <source>Information about the bonus </source>
        <translation>Информация о бонусе</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Amount</source>
        <translation>Сумма</translation>
    </message>
    <message>
        <source>Enter a OctoinCoin address (e.g. %1)</source>
        <translation>Введите адрес OctoinCoin (например, %1)</translation>
    </message>
    <message>
        <source>%1 d</source>
        <translation>%1 д</translation>
    </message>
    <message>
        <source>%1 h</source>
        <translation>%1 ч</translation>
    </message>
    <message>
        <source>%1 m</source>
        <translation>%1 мин</translation>
    </message>
    <message>
        <source>%1 s</source>
        <translation>%1 с</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ничего</translation>
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
        <translation>%1 еще не вышел безопасно ...</translation>
    </message>
</context>
<context>
    <name>QObject::QObject</name>
    <message>
        <source>Error: Specified data directory &quot;%1&quot; does not exist.</source>
        <translation>Ошибка: указанный каталог данных &quot;%1&quot; не существует.</translation>
    </message>
    <message>
        <source>Error: Cannot parse configuration file: %1. Only use key=value syntax.</source>
        <translation>Ошибка: не удается проанализировать файл конфигурации: %1. Используйте синтаксис key = value.
</translation>
    </message>
    <message>
        <source>Error: %1</source>
        <translation>Ошибка: %1</translation>
    </message>
</context>
<context>
    <name>QRImageWidget</name>
    <message>
        <source>&amp;Copy Image</source>
        <translation>&amp;Копировать изображение</translation>
    </message>
    <message>
        <source>Save QR Code</source>
        <translation>Сохранить QR-код</translation>
    </message>
    <message>
        <source>PNG Image (*.png)</source>
        <translation>PNG Image (*.png)</translation>
    </message>
    <message>
        <source>&amp;Save Image...</source>
        <translation>Сохранить изображение</translation>
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
        <translation>Версия клиента</translation>
    </message>
    <message>
        <source>&amp;Information</source>
        <translation>&amp;Информация</translation>
    </message>
    <message>
        <source>Debug window</source>
        <translation>Окно отладки</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Общие</translation>
    </message>
    <message>
        <source>Using BerkeleyDB version</source>
        <translation>Используется версия BerkeleyDB</translation>
    </message>
    <message>
        <source>Datadir</source>
        <translation>Каталог для данных</translation>
    </message>
    <message>
        <source>Startup time</source>
        <translation>Время запуска</translation>
    </message>
    <message>
        <source>Network</source>
        <translation>Сеть</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Имя</translation>
    </message>
    <message>
        <source>Number of connections</source>
        <translation>Число подключений</translation>
    </message>
    <message>
        <source>Block chain</source>
        <translation>Цепь блоков</translation>
    </message>
    <message>
        <source>Current number of blocks</source>
        <translation>Текущее число блоков</translation>
    </message>
    <message>
        <source>Memory Pool</source>
        <translation>Пул памяти</translation>
    </message>
    <message>
        <source>Current number of transactions</source>
        <translation>Текущее число транзакций</translation>
    </message>
    <message>
        <source>Memory usage</source>
        <translation>Использование памяти</translation>
    </message>
    <message>
        <source>Received</source>
        <translation>Получено</translation>
    </message>
    <message>
        <source>Sent</source>
        <translation>Отправлено</translation>
    </message>
    <message>
        <source>&amp;Peers</source>
        <translation>&amp;Участники</translation>
    </message>
    <message>
        <source>Banned peers</source>
        <translation>Заблокированные участники</translation>
    </message>
    <message>
        <source>Select a peer to view detailed information.</source>
        <translation>Выберите участника для просмотра подробностей.</translation>
    </message>
    <message>
        <source>Whitelisted</source>
        <translation>Доверенный</translation>
    </message>
    <message>
        <source>Direction</source>
        <translation>Направление</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Версия</translation>
    </message>
    <message>
        <source>Starting Block</source>
        <translation>Начальный блок</translation>
    </message>
    <message>
        <source>Synced Headers</source>
        <translation>Синхронизировано заголовков</translation>
    </message>
    <message>
        <source>Synced Blocks</source>
        <translation>Синхронизировано блоков</translation>
    </message>
    <message>
        <source>User Agent</source>
        <translation>Юзер-агент</translation>
    </message>
    <message>
        <source>Open the %1 debug log file from the current data directory. This can take a few seconds for large log files.</source>
        <translation>Открыть отладочный лог-файл %1 из текущего каталога данных. Это может занять несколько секунд для больших лог-файлов.</translation>
    </message>
    <message>
        <source>Services</source>
        <translation>Сервисы</translation>
    </message>
    <message>
        <source>Ban Score</source>
        <translation>Очков бана</translation>
    </message>
    <message>
        <source>Connection Time</source>
        <translation>Время соединения</translation>
    </message>
    <message>
        <source>Last Send</source>
        <translation>Последняя отправка</translation>
    </message>
    <message>
        <source>Last Receive</source>
        <translation>Последний раз получено</translation>
    </message>
    <message>
        <source>Ping Time</source>
        <translation>Время задержки</translation>
    </message>
    <message>
        <source>The duration of a currently outstanding ping.</source>
        <translation>Длительность текущего пинга.</translation>
    </message>
    <message>
        <source>Ping Wait</source>
        <translation>Время задержки</translation>
    </message>
    <message>
        <source>Time Offset</source>
        <translation>Смещение времени</translation>
    </message>
    <message>
        <source>Last block time</source>
        <translation>Время последнего блока</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Открыть</translation>
    </message>
    <message>
        <source>&amp;Console</source>
        <translation>Консоль</translation>
    </message>
    <message>
        <source>&amp;Network Traffic</source>
        <translation>Сетевой &amp;трафик</translation>
    </message>
    <message>
        <source>&amp;Clear</source>
        <translation>&amp;Очистить</translation>
    </message>
    <message>
        <source>In:</source>
        <translation>Вход:</translation>
    </message>
    <message>
        <source>Out:</source>
        <translation>Выход:</translation>
    </message>
    <message>
        <source>Debug log file</source>
        <translation>Отладочный лог-файл</translation>
    </message>
    <message>
        <source>Clear console</source>
        <translation>Очистить консоль</translation>
    </message>
    <message>
        <source>&amp;Disconnect Node</source>
        <translation>&amp;Отключить узел</translation>
    </message>
    <message>
        <source>Ban Node for</source>
        <translation>Заблокировать узел на</translation>
    </message>
    <message>
        <source>1 &amp;hour</source>
        <translation>1 &amp;час</translation>
    </message>
    <message>
        <source>1 &amp;day</source>
        <translation>1 &amp;день</translation>
    </message>
    <message>
        <source>1 &amp;week</source>
        <translation>1 &amp;неделю</translation>
    </message>
    <message>
        <source>1 &amp;year</source>
        <translation>1 &amp;год</translation>
    </message>
    <message>
        <source>&amp;Unban Node</source>
        <translation>&amp;Разблокировать узел</translation>
    </message>
    <message>
        <source>Welcome to the %1 RPC console.</source>
        <translation>Добро пожаловать в консоль RPC %1.</translation>
    </message>
    <message>
        <source>Use up and down arrows to navigate history, and &lt;b&gt;Ctrl-L&lt;/b&gt; to clear screen.</source>
        <translation>Используйте стрелки вверх и вниз для просмотра истории и &lt;b&gt;Ctrl-L&lt;/b&gt; для очистки экрана.</translation>
    </message>
    <message>
        <source>Type &lt;b&gt;help&lt;/b&gt; for an overview of available commands.</source>
        <translation>Напишите &lt;b&gt;help&lt;/b&gt; для просмотра доступных команд.</translation>
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
        <translation>(номер узла: %1)</translation>
    </message>
    <message>
        <source>via %1</source>
        <translation>через %1</translation>
    </message>
    <message>
        <source>never</source>
        <translation>никогда</translation>
    </message>
    <message>
        <source>Inbound</source>
        <translation>Входящие</translation>
    </message>
    <message>
        <source>Outbound</source>
        <translation>Исходящие</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Да</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Нет</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Неизвестно</translation>
    </message>
    <message>
        <source>Totals: </source>
        <translation>Итоговые:</translation>
    </message>
</context>
<context>
    <name>ReceiveCoinsDialog</name>
    <message>
        <source>&amp;Amount:</source>
        <translation>&amp;Сумма:</translation>
    </message>
    <message>
        <source>&amp;Label:</source>
        <translation>&amp;Метка:</translation>
    </message>
    <message>
        <source>&amp;Message:</source>
        <translation>&amp;Сообщение</translation>
    </message>
    <message>
        <source>Reuse one of the previously used receiving addresses. Reusing addresses has security and privacy issues. Do not use this unless re-generating a payment request made before.</source>
        <translation>Повторно использовать один из ранее использованных адресов. Повторное использование адресов несет риски безопасности и приватности. Не используйте эту опцию, если вы не создаете повторно ранее сделанный запрос платежа.</translation>
    </message>
    <message>
        <source>R&amp;euse an existing receiving address (not recommended)</source>
        <translation>&amp;Повторно использовать существующий адрес получения (не рекомендуется)</translation>
    </message>
    <message>
        <source>An optional message to attach to the payment request, which will be displayed when the request is opened. Note: The message will not be sent with the payment over the OctoinCoin network.</source>
        <translation>Необязательное сообщение для запроса платежа, которое будет показано при открытии запроса. Заметьте: сообщение не будет отправлено вместе с платежом через сеть OctoinCoin.</translation>
    </message>
    <message>
        <source>An optional label to associate with the new receiving address.</source>
        <translation>Необязательная метка для нового адреса получения.</translation>
    </message>
    <message>
        <source>Use this form to request payments. All fields are &lt;b&gt;optional&lt;/b&gt;.</source>
        <translation>Заполните форму для запроса платежей. Все поля &lt;b&gt;необязательны&lt;/b&gt;.</translation>
    </message>
    <message>
        <source>An optional amount to request. Leave this empty or zero to not request a specific amount.</source>
        <translation>Необязательная сумма для запроса. Оставьте пустым или укажите ноль, чтобы запросить неопределенную сумму.</translation>
    </message>
    <message>
        <source>Clear all fields of the form.</source>
        <translation>Очистить все поля формы.</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation>Очистить все</translation>
    </message>
    <message>
        <source>Requested payments history</source>
        <translation>История запрошенных платежей</translation>
    </message>
    <message>
        <source>&amp;Request payment</source>
        <translation>&amp;Запросить платеж</translation>
    </message>
    <message>
        <source>Show the selected request (does the same as double clicking an entry)</source>
        <translation>Показать выбранный запрос (то же самое, что и двойной клик по записи)</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Показать</translation>
    </message>
    <message>
        <source>Remove the selected entries from the list</source>
        <translation>Удалить выбранные записи из списка</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <source>Copy label</source>
        <translation>Копировать метку</translation>
    </message>
    <message>
        <source>Copy message</source>
        <translation>Копировать сообщение</translation>
    </message>
    <message>
        <source>Copy amount</source>
        <translation>Копировать сумму</translation>
    </message>
</context>
<context>
    <name>ReceiveRequestDialog</name>
    <message>
        <source>QR Code</source>
        <translation>QR код</translation>
    </message>
    <message>
        <source>Copy &amp;URI</source>
        <translation>Копировать &amp;URI</translation>
    </message>
    <message>
        <source>Copy &amp;Address</source>
        <translation>Копировать &amp;адрес</translation>
    </message>
    <message>
        <source>&amp;Save Image</source>
        <translation>&amp;Сохранить изображение</translation>
    </message>
    <message>
        <source>Request payment to %1</source>
        <translation>Запросить платеж в %1</translation>
    </message>
    <message>
        <source>Payment information</source>
        <translation>Платежная информация</translation>
    </message>
    <message>
        <source>URI</source>
        <translation>URI</translation>
    </message>
    <message>
        <source>Address</source>
        <translation>Адрес</translation>
    </message>
    <message>
        <source>Amount</source>
        <translation>Сумма</translation>
    </message>
    <message>
        <source>Label</source>
        <translation>Метка</translation>
    </message>
    <message>
        <source>Message</source>
        <translation>Сообщение</translation>
    </message>
    <message>
        <source>Resulting URI too long, try to reduce the text for label / message.</source>
        <translation>Слишком длинный URI, попробуйте уменьшить текст для метки /сообщения.</translation>
    </message>
    <message>
        <source>QR has not supported</source>
        <translation>QR-код не поддерживается</translation>
    </message>
</context>
<context>
    <name>RecentRequestsTableModel</name>
    <message>
        <source>Date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>Label</source>
        <translation>Метка</translation>
    </message>
    <message>
        <source>Message</source>
        <translation>Сообщение</translation>
    </message>
    <message>
        <source>(no label)</source>
        <translation>(Нет метки)</translation>
    </message>
    <message>
        <source>(no message)</source>
        <translation>(нет сообщения)</translation>
    </message>
    <message>
        <source>(no amount requested)</source>
        <translation>(Нет запроса)</translation>
    </message>
    <message>
        <source>Requested</source>
        <translation>Запрос</translation>
    </message>
</context>
<context>
    <name>SendCoinsDialog</name>
    <message>
        <source>Pay only the required fee of %1</source>
        <translation>Оплатить только требуемую плату в размере %1</translation>
    </message>
    <message>
        <source>Paying only the minimum fee is just fine as long as there is less transaction volume than space in the blocks. But be aware that this can end up in a never confirming transaction once there is more demand for bitcoin transactions than the network can process.</source>
        <translation>Оплатить только минимальную сумму, если в блоках меньше объема транзакции, чем места в блоках. Но имейте в виду, что это может закончиться никогда не подтверждающей транзакцией, когда спрос на транзакции octoin будет больше, чем может обрабатывать сеть.</translation>
    </message>
    <message>
        <source>Send Coins</source>
        <translation>Отправка</translation>
    </message>
    <message>
        <source>Coin Control Features</source>
        <translation>Функции Контроля Монет</translation>
    </message>
    <message>
        <source>Inputs...</source>
        <translation>Входы...</translation>
    </message>
    <message>
        <source>automatically selected</source>
        <translation>автоматически выбрано</translation>
    </message>
    <message>
        <source>Insufficient funds!</source>
        <translation>Недостаточно средств!</translation>
    </message>
    <message>
        <source>Quantity:</source>
        <translation>Количество:</translation>
    </message>
    <message>
        <source>Bytes:</source>
        <translation>Байт:</translation>
    </message>
    <message>
        <source>Amount:</source>
        <translation>Сумма:</translation>
    </message>
    <message>
        <source>Priority:</source>
        <translation>Приоритет:</translation>
    </message>
    <message>
        <source>Fee:</source>
        <translation>Комиссия:</translation>
    </message>
    <message>
        <source>After Fee:</source>
        <translation>После комиссии:</translation>
    </message>
    <message>
        <source>Change:</source>
        <translation>Размен:</translation>
    </message>
    <message>
        <source>If this is activated, but the change address is empty or invalid, change will be sent to a newly generated address.</source>
        <translation>Если это выбрано, но адрес сдачи пустой или неверный, сдача будет отправлена на новый сгенерированный адрес.</translation>
    </message>
    <message>
        <source>Custom change address</source>
        <translation>Свой адрес для сдачи</translation>
    </message>
    <message>
        <source>Transaction Fee:</source>
        <translation>Комиссия</translation>
    </message>
    <message>
        <source>Choose...</source>
        <translation>Выберите...</translation>
    </message>
    <message>
        <source>collapse fee-settings</source>
        <translation>Свернуть настройки комиссии</translation>
    </message>
    <message>
        <source>per kilobyte</source>
        <translation>за килобайт</translation>
    </message>
    <message>
        <source>If the custom fee is set to 1000 satoshis and the transaction is only 250 bytes, then &quot;per kilobyte&quot; only pays 250 satoshis in fee, while &quot;total at least&quot; pays 1000 satoshis. For transactions bigger than a kilobyte both pay by kilobyte.</source>
        <translation>Если комиссия установлена в 1000 сатоши, а транзакция составляет лишь 250 байт, тогда комиссия &quot;на килобайт&quot; составит 250 сатоши, а &quot;всего как минимум&quot; — 1000 сатоши. Для транзакций крупнее килобайта в обоих случаях будет использоваться платеж &quot;на килобайт&quot;.</translation>
    </message>
    <message>
        <source>Hide</source>
        <translation>Скрыть</translation>
    </message>
    <message>
        <source>total at least</source>
        <translation>Итого как минимум</translation>
    </message>
    <message>
        <source>(read the tooltip)</source>
        <translation>(прочтите подсказку)</translation>
    </message>
    <message>
        <source>Recommended:</source>
        <translation>Рекомендовано:</translation>
    </message>
    <message>
        <source>Custom:</source>
        <translation>Выборочно:</translation>
    </message>
    <message>
        <source>(Smart fee not initialized yet. This usually takes a few blocks...)</source>
        <translation>(Умная комиссия пока не инициализирована. Обычно для этого требуется несколько блоков...)</translation>
    </message>
    <message>
        <source>Confirmation time:</source>
        <translation>Время подтверждения:</translation>
    </message>
    <message>
        <source>normal</source>
        <translation>Обычный</translation>
    </message>
    <message>
        <source>fast</source>
        <translation>Ускоренный</translation>
    </message>
    <message>
        <source>Send to multiple recipients at once</source>
        <translation>Отправить нескольким получателям одновременно</translation>
    </message>
    <message>
        <source>Add &amp;Recipient</source>
        <translation>&amp;Добавить получателя</translation>
    </message>
    <message>
        <source>Clear all fields of the form.</source>
        <translation>Очистить все поля формы</translation>
    </message>
    <message>
        <source>Dust:</source>
        <translation>Пыль:</translation>
    </message>
    <message>
        <source>Clear &amp;All</source>
        <translation>Очистить &amp;все</translation>
    </message>
    <message>
        <source>Balance:</source>
        <translation>Баланс:</translation>
    </message>
    <message>
        <source>Confirm the send action</source>
        <translation>Подтвердить отправку</translation>
    </message>
    <message>
        <source>S&amp;end</source>
        <translation>&amp;Отправить</translation>
    </message>
    <message>
        <source>Copy quantity</source>
        <translation>Копировать сумму</translation>
    </message>
    <message>
        <source>Copy amount</source>
        <translation>Копировать сумму</translation>
    </message>
    <message>
        <source>Copy fee</source>
        <translation>Копировать комиссию</translation>
    </message>
    <message>
        <source>Copy after fee</source>
        <translation>Скопировать после оплаты</translation>
    </message>
    <message>
        <source>Copy bytes</source>
        <translation>Копировать байты</translation>
    </message>
    <message>
        <source>Copy priority</source>
        <translation>Копировать приоритет</translation>
    </message>
    <message>
        <source>Copy dust</source>
        <translation>Copy dust</translation>
    </message>
    <message>
        <source>Copy change</source>
        <translation>Копировать изменение</translation>
    </message>
    <message>
        <source>%1 to %2</source>
        <translation>из %1 в %2</translation>
    </message>
    <message>
        <source>Are you sure you want to send?</source>
        <translation>Вы действительно хотите отправить?</translation>
    </message>
    <message>
        <source>added as transaction fee</source>
        <translation>Добавляется как комиссия за транзакцию</translation>
    </message>
    <message>
        <source>Total Amount %1</source>
        <translation>Общая сумма %1</translation>
    </message>
    <message>
        <source>or</source>
        <translation>или</translation>
    </message>
    <message>
        <source>Confirm send coins</source>
        <translation>Подтвердить отправку монет</translation>
    </message>
    <message>
        <source>The recipient address is not valid. Please recheck.</source>
        <translation>Адрес получателя недействителен. Повторите попытку.</translation>
    </message>
    <message>
        <source>The amount to pay must be larger than 0.</source>
        <translation>Сумма платежа должна быть больше 0.</translation>
    </message>
    <message>
        <source>The amount exceeds your balance.</source>
        <translation>Сумма превышает ваш баланс.</translation>
    </message>
    <message>
        <source>The total exceeds your balance when the %1 transaction fee is included.</source>
        <translation>Сумма превышает ваш баланс, когда включена комиссия за транзакцию %1.</translation>
    </message>
    <message>
        <source>Duplicate address found: addresses should only be used once each.</source>
        <translation>Дублированный адрес: адреса должны использоваться только один раз.
</translation>
    </message>
    <message>
        <source>Transaction creation failed!</source>
        <translation>Не удалось создать транзакцию!</translation>
    </message>
    <message>
        <source>The transaction was rejected! This might happen if some of the coins in your wallet were already spent, such as if you used a copy of wallet.dat and coins were spent in the copy but not marked as spent here.</source>
        <translation>Сделка была отклонена! Это может произойти, если некоторые из монет в вашем кошельке уже были потрачены, например, если вы использовали копию кошелька. Dat и монеты были потрачены в копии, но не отмечены как потраченные здесь.
</translation>
    </message>
    <message>
        <source>A fee higher than %1 is considered an absurdly high fee.</source>
        <translation>Гонорар выше %1 считается абсурдно высоким.
</translation>
    </message>
    <message>
        <source>Payment request expired.</source>
        <translation>Запрос платежа истек.</translation>
    </message>
    <message numerus="yes">
        <source>Estimated to begin confirmation within %n block(s).</source>
        <translation>
            <numerusform>Предполагается начать подтверждение в пределах %n блока.</numerusform>
            <numerusform>Предполагается начать подтверждение в пределах %n блоков.</numerusform>
            <numerusform>Предполагается начать подтверждение в пределах %n блоков.</numerusform>
        </translation>
    </message>
    <message>
        <source>Warning: Invalid OctoinCoin address</source>
        <translation>Предупреждение: неверный адрес OctoinCoin</translation>
    </message>
    <message>
        <source>Warning: Unknown change address</source>
        <translation>Предупреждение: Неизвестный адрес изменения</translation>
    </message>
    <message>
        <source>(no label)</source>
        <translation>(Нет метки)</translation>
    </message>
    <message>
        <source>Solution</source>
        <translation>Решение</translation>
    </message>
    <message>
        <source>In order to solve this problem, you need to rescan your wallet. Scanning a wallet will take some time want to continue?</source>
        <translation>Чтобы решить эту проблему, вам нужно перепроверить свой кошелек. Сканирование кошелька займет некоторое времяю. Желаете продолжить?</translation>
    </message>
</context>
<context>
    <name>SendCoinsEntry</name>
    <message>
        <source>A&amp;mount:</source>
        <translation>Ко&amp;личество:</translation>
    </message>
    <message>
        <source>Pay &amp;To:</source>
        <translation>Полу&amp;чатель:</translation>
    </message>
    <message>
        <source>&amp;Label:</source>
        <translation>&amp;Метка:</translation>
    </message>
    <message>
        <source>Choose previously used address</source>
        <translation>Выберите ранее использованный адрес</translation>
    </message>
    <message>
        <source>This is a normal payment.</source>
        <translation>Это нормальный платеж.</translation>
    </message>
    <message>
        <source>The OctoinCoin address to send the payment to.</source>
        <translation>Адрес OctoinCoin, на который отправить платеж.</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>Paste address from clipboard</source>
        <translation>Вставить адрес из буфера обмена</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <source>Remove this entry</source>
        <translation>Удалить получателя</translation>
    </message>
    <message>
        <source>The fee will be deducted from the amount being sent. The recipient will receive less OctoinCoins than you enter in the amount field. If multiple recipients are selected, the fee is split equally.</source>
        <translation>С отправляемой суммы будет удержана комиссия. Получателю придет меньше монет, чем вы вводите в поле количества. Если выбрано несколько получателей, комиссия распределяется поровну.</translation>
    </message>
    <message>
        <source>S&amp;ubtract fee from amount</source>
        <translation>Вычесть комиссию из суммы</translation>
    </message>
    <message>
        <source>This is an unauthenticated payment request.</source>
        <translation>Это неавторизованный запрос платежа.</translation>
    </message>
    <message>
        <source>This is an authenticated payment request.</source>
        <translation>Это авторизованный запрос платежа.</translation>
    </message>
    <message>
        <source>Enter a label for this address to add it to the list of used addresses</source>
        <translation>Введите метку для этого адреса, чтобы добавить его в список использованных.</translation>
    </message>
    <message>
        <source>Pay To:</source>
        <translation>Получатель:</translation>
    </message>
    <message>
        <source>Memo:</source>
        <translation>Примечание:</translation>
    </message>
    <message>
        <source>Enter a label for this address to add it to your address book</source>
        <translation>Введите метку для этого адреса, чтобы добавить его в свою адресную книгу</translation>
    </message>
</context>
<context>
    <name>SendConfirmationDialog</name>
    <message>
        <source>Yes</source>
        <translation>Да</translation>
    </message>
</context>
<context>
    <name>ShareDialog</name>
    <message>
        <source>Cancel</source>
        <translation>Отмена</translation>
    </message>
    <message>
        <source>Private key</source>
        <translation>Приватный ключ</translation>
    </message>
    <message>
        <source>Responce</source>
        <translation>Ответ</translation>
    </message>
    <message>
        <source>Could not get share by key (%0)</source>
        <translation>Не удалось получить долю по ключу (%0)</translation>
    </message>
    <message>
        <source>Your share is added to the wallet.</source>
        <translation>Ваша доля добавлена в кошелек.</translation>
    </message>
    <message>
        <source>Get</source>
        <translation>Получить</translation>
    </message>
    <message>
        <source>Invalid private key encoding.</source>
        <translation>Недопустимая кодировка закрытого ключа.</translation>
    </message>
    <message>
        <source>Private key outside allowed range.</source>
        <translation>Закрытый ключ вне допустимого диапазона.</translation>
    </message>
    <message>
        <source>A private key has already been added to your wallet.</source>
        <translation>Закрытый ключ уже добавлен в ваш кошелек.</translation>
    </message>
    <message>
        <source>Error adding key to wallet.</source>
        <translation>Ошибка добавления ключа в кошелек.</translation>
    </message>
    <message>
        <source>Receipt of a cash share</source>
        <translation>Получение денежной доли</translation>
    </message>
    <message>
        <source>Enter your private key to get your share of OctoinCoin.</source>
        <translation>Введите свой приватный ключ, чтобы получить свою долю от OctoinCoin.</translation>
    </message>
    <message>
        <source>Your share</source>
        <translation>Ваша доля</translation>
    </message>
</context>
<context>
    <name>ShutdownWindow</name>
    <message>
        <source>%1 is shutting down...</source>
        <translation>%1 выключается...</translation>
    </message>
    <message>
        <source>Do not shut down the computer until this window disappears.</source>
        <translation>Не выключайте компьютер, пока это окно не исчезнет.</translation>
    </message>
</context>
<context>
    <name>SignVerifyMessageDialog</name>
    <message>
        <source>Signatures - Sign / Verify a Message</source>
        <translation>Подписи - подписать/проверить сообщение</translation>
    </message>
    <message>
        <source>&amp;Sign Message</source>
        <translation>&amp;Подписать сообщение</translation>
    </message>
    <message>
        <source>You can sign messages/agreements with your addresses to prove you can receive OctoinCoins sent to them. Be careful not to sign anything vague or random, as phishing attacks may try to trick you into signing your identity over to them. Only sign fully-detailed statements you agree to.</source>
        <translation>Вы можете подписывать сообщения/соглашения своими адресами, чтобы доказать свою возможность получать коины на них. Будьте осторожны, не подписывайте что-то неопределенное или случайное, так как фишинговые атаки могут обманным путем заставить вас подписать нежелательные сообщения. Подписывайте только те сообщения, с которыми вы согласны вплоть до мелочей.</translation>
    </message>
    <message>
        <source>The OctoinCoin address to sign the message with</source>
        <translation>Адрес OctoinCoin, которым подписать сообщение</translation>
    </message>
    <message>
        <source>Choose previously used address</source>
        <translation>Выберите ранее использованный адрес</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>Paste address from clipboard</source>
        <translation>Вставить адрес из буфера обмена</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <source>Enter the message you want to sign here</source>
        <translation>Введите сообщение для подписи</translation>
    </message>
    <message>
        <source>Signature</source>
        <translation>Подпись</translation>
    </message>
    <message>
        <source>Copy the current signature to the system clipboard</source>
        <translation>Скопировать текущую подпись в системный буфер обмена</translation>
    </message>
    <message>
        <source>Sign the message to prove you own this OctoinCoin address</source>
        <translation>Подписать сообщение, чтобы доказать владение адресом OctoinCoin</translation>
    </message>
    <message>
        <source>Sign &amp;Message</source>
        <translation>Подписать &amp;Сообщение</translation>
    </message>
    <message>
        <source>Reset all sign message fields</source>
        <translation>Сбросить значения всех полей подписывания сообщений</translation>
    </message>
    <message>
        <source>Clear &amp;All</source>
        <translation>Очистить &amp;все</translation>
    </message>
    <message>
        <source>&amp;Verify Message</source>
        <translation>&amp;Проверить сообщение</translation>
    </message>
    <message>
        <source>Enter the receiver&apos;s address, message (ensure you copy line breaks, spaces, tabs, etc. exactly) and signature below to verify the message. Be careful not to read more into the signature than what is in the signed message itself, to avoid being tricked by a man-in-the-middle attack. Note that this only proves the signing party receives with the address, it cannot prove sendership of any transaction!</source>
        <translation>Введите ниже адрес получателя, сообщение (убедитесь, что переводы строк, пробелы, табы и т.п. в точности скопированы) и подпись, чтобы проверить сообщение. Убедитесь, что не скопировали лишнего в подпись, по сравнению с самим подписываемым сообщением, чтобы не стать жертвой атаки &quot;man-in-the-middle&quot;. Заметьте, что эта операция удостоверяет лишь авторство подписавшего, но не может удостоверить отправителя транзакции.</translation>
    </message>
    <message>
        <source>The OctoinCoin address the message was signed with</source>
        <translation>Адрес OctoinCoin, которым было подписано сообщение</translation>
    </message>
    <message>
        <source>Verify the message to ensure it was signed with the specified OctoinCoin address</source>
        <translation>Проверить сообщение, чтобы убедиться, что оно было подписано указанным адресом OctoinCoin</translation>
    </message>
    <message>
        <source>Verify &amp;Message</source>
        <translation>Проверить &amp;Сообщение</translation>
    </message>
    <message>
        <source>Reset all verify message fields</source>
        <translation>Сбросить все поля проверки сообщения</translation>
    </message>
    <message>
        <source>Click &quot;Sign Message&quot; to generate signature</source>
        <translation>Нажмите &quot; Подписать сообщение &quot; Для создания подписи</translation>
    </message>
    <message>
        <source>The entered address is invalid.</source>
        <translation>Введенный адрес недействителен.</translation>
    </message>
    <message>
        <source>Please check the address and try again.</source>
        <translation>Пожалуйста, проверьте адрес и попробуйте снова.</translation>
    </message>
    <message>
        <source>The entered address does not refer to a key.</source>
        <translation>Введенный адрес не относится к ключу.</translation>
    </message>
    <message>
        <source>Wallet unlock was cancelled.</source>
        <translation>Разблокировка кошелька была отменена.</translation>
    </message>
    <message>
        <source>Private key for the entered address is not available.</source>
        <translation>Закрытый ключ для введенного адреса недоступен.</translation>
    </message>
    <message>
        <source>Message signing failed.</source>
        <translation>Ошибка подписания сообщения.</translation>
    </message>
    <message>
        <source>Message signed.</source>
        <translation>Сообщение подписано.</translation>
    </message>
    <message>
        <source>The signature could not be decoded.</source>
        <translation>Подпись не может быть расшифрована.</translation>
    </message>
    <message>
        <source>Please check the signature and try again.</source>
        <translation>Проверьте подпись и повторите попытку.</translation>
    </message>
    <message>
        <source>The signature did not match the message digest.</source>
        <translation>Подпись не соответствовала дайджесту сообщения.</translation>
    </message>
    <message>
        <source>Message verification failed.</source>
        <translation>Не удалось выполнить проверку сообщения.</translation>
    </message>
    <message>
        <source>Message verified.</source>
        <translation>Сообщение подтверждено.</translation>
    </message>
</context>
<context>
    <name>SplashScreen</name>
    <message>
        <source>[testnet]</source>
        <translation>[тестовая сеть]</translation>
    </message>
</context>
<context>
    <name>TrafficGraphWidget</name>
    <message>
        <source>KB/s</source>
        <translation>КБ/сек</translation>
    </message>
</context>
<context>
    <name>TransactionDesc</name>
    <message numerus="yes">
        <source>Open for %n more block(s)</source>
        <translation>
            <numerusform>Открыть для %n блока (ов)</numerusform>
            <numerusform>Открыть для %n блоков (ов)</numerusform>
            <numerusform>Открыть для %n блоков (ов)</numerusform>
        </translation>
    </message>
    <message>
        <source>Open until %1</source>
        <translation>Открыть до %1</translation>
    </message>
    <message>
        <source>conflicted with a transaction with %1 confirmations</source>
        <translation>Противоречит транзакции с подтверждением %1</translation>
    </message>
    <message>
        <source>%1/offline</source>
        <translation>%1/оффлайн</translation>
    </message>
    <message>
        <source>0/unconfirmed, %1</source>
        <translation>0/неподтверждена, %1</translation>
    </message>
    <message>
        <source>in memory pool</source>
        <translation>В пуле памяти</translation>
    </message>
    <message>
        <source>not in memory pool</source>
        <translation>Не в пуле памяти</translation>
    </message>
    <message>
        <source>abandoned</source>
        <translation>заброшенный</translation>
    </message>
    <message>
        <source>%1/unconfirmed</source>
        <translation>%1/неподтвержденные</translation>
    </message>
    <message>
        <source>%1 confirmations</source>
        <translation>%1подтверждений</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Статус</translation>
    </message>
    <message>
        <source>, has not been successfully broadcast yet</source>
        <translation>, еще не была успешно передана</translation>
    </message>
    <message numerus="yes">
        <source>, broadcast through %n node(s)</source>
        <translation>
            <numerusform>, Передается через %n узел</numerusform>
            <numerusform>, Передается через %n узла</numerusform>
            <numerusform>, Передается через %n узлов</numerusform>
        </translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>Source</source>
        <translation>Исходник</translation>
    </message>
    <message>
        <source>Generated</source>
        <translation>Сформирован</translation>
    </message>
    <message>
        <source>From</source>
        <translation>От</translation>
    </message>
    <message>
        <source>To</source>
        <translation>На</translation>
    </message>
    <message>
        <source>own address</source>
        <translation>Ваш адрес</translation>
    </message>
    <message>
        <source>watch-only</source>
        <translation>Только наблюдение</translation>
    </message>
    <message>
        <source>label</source>
        <translation>метка</translation>
    </message>
    <message>
        <source>Credit</source>
        <translation>Кредит</translation>
    </message>
    <message numerus="yes">
        <source>matures in %n more block(s)</source>
        <translation>
            <numerusform>Созреет через %n блок</numerusform>
            <numerusform>Созреет через %n блока</numerusform>
            <numerusform>Созреет через %n блоков</numerusform>
        </translation>
    </message>
    <message>
        <source>not accepted</source>
        <translation>не принимаются</translation>
    </message>
    <message>
        <source>Debit</source>
        <translation>Дебет</translation>
    </message>
    <message>
        <source>Total debit</source>
        <translation>Общий дебет</translation>
    </message>
    <message>
        <source>Total credit</source>
        <translation>Общий кредит</translation>
    </message>
    <message>
        <source>Transaction fee</source>
        <translation>Комиссия на перевод</translation>
    </message>
    <message>
        <source>Net amount</source>
        <translation>Чистая сумма</translation>
    </message>
    <message>
        <source>Message</source>
        <translation>Сообщение</translation>
    </message>
    <message>
        <source>Comment</source>
        <translation>Комментарий</translation>
    </message>
    <message>
        <source>Transaction ID</source>
        <translation>ID транзакции</translation>
    </message>
    <message>
        <source>Output index</source>
        <translation>Выходной индекс</translation>
    </message>
    <message>
        <source>Merchant</source>
        <translation>коммерсант</translation>
    </message>
    <message>
        <source>Generated coins must mature %1 blocks before they can be spent. When you generated this block, it was broadcast to the network to be added to the block chain. If it fails to get into the chain, its state will change to &quot;not accepted&quot; and it won&apos;t be spendable. This may occasionally happen if another node generates a block within a few seconds of yours.</source>
        <translation>Сгенерированные монеты должны созревать %1 блоков, прежде чем они могут быть потрачены. Когда вы сгенерировали этот блок, он был передан в сеть, которая будет добавлена в цепочку блоков. Если он не сможет попасть в цепочку, его состояние изменится на &quot;не принятое&quot;, и оно не будет потрачено. Иногда это может произойти, если другой узел генерирует блок в течение нескольких секунд.
</translation>
    </message>
    <message>
        <source>Debug information</source>
        <translation>Отладочная информация</translation>
    </message>
    <message>
        <source>Transaction</source>
        <translation>Сделка</translation>
    </message>
    <message>
        <source>Inputs</source>
        <translation>входящие</translation>
    </message>
    <message>
        <source>Amount</source>
        <translation>Сумма</translation>
    </message>
    <message>
        <source>true</source>
        <translation>истина</translation>
    </message>
    <message>
        <source>false</source>
        <translation>лож</translation>
    </message>
</context>
<context>
    <name>TransactionDescDialog</name>
    <message>
        <source>This pane shows a detailed description of the transaction</source>
        <translation>Эта панель отображает детальное описание транзакции.</translation>
    </message>
    <message>
        <source>Details for %1</source>
        <translation>Подробности для %1</translation>
    </message>
    <message>
        <source>Details for coupon</source>
        <translation>Подробная информация о купоне</translation>
    </message>
    <message>
        <source>&lt;i&gt;&lt;b&gt;&lt;font color=&apos;#fff&apos;&gt;  %4: &lt;/b&gt;&lt;/i&gt; %0 &lt;br&gt;&lt;i&gt;&lt;b&gt;&lt;font color=&apos;#fff&apos;&gt;  %5: &lt;/b&gt;&lt;/i&gt; %1 &lt;br&gt;&lt;i&gt;&lt;b&gt;&lt;font color=&apos;#fff&apos;&gt;  %6: &lt;/b&gt;&lt;/i&gt; %2 &lt;br&gt;&lt;i&gt;&lt;b&gt;&lt;font color=&apos;#fff&apos;&gt;  %7: &lt;/b&gt;&lt;/i&gt; %3 &lt;br&gt;</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>TransactionTableModel</name>
    <message>
        <source>Date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Тип</translation>
    </message>
    <message>
        <source>Label</source>
        <translation>Метка</translation>
    </message>
    <message numerus="yes">
        <source>Open for %n more block(s)</source>
        <translation>
            <numerusform>Открыть для %n блока</numerusform>
            <numerusform>Открыть для %n блоков</numerusform>
            <numerusform>Открыть для %n блоков</numerusform>
        </translation>
    </message>
    <message>
        <source>Open until %1</source>
        <translation>Открыть до %1</translation>
    </message>
    <message>
        <source>Offline</source>
        <translation>Не в сети</translation>
    </message>
    <message>
        <source>Unconfirmed</source>
        <translation>Не подтвержден</translation>
    </message>
    <message>
        <source>Abandoned</source>
        <translation>заброшенный</translation>
    </message>
    <message>
        <source>Confirming (%1 of %2 recommended confirmations)</source>
        <translation>Подтверждение (%1 из %2 рекомендованных подтверждений)</translation>
    </message>
    <message>
        <source>Confirmed (%1 confirmations)</source>
        <translation>Подтверждено (подтверждений %1)</translation>
    </message>
    <message>
        <source>Conflicted</source>
        <translation>Конфликтующее</translation>
    </message>
    <message>
        <source>Immature (%1 confirmations, will be available after %2)</source>
        <translation>Незрелые (%1 подтверждений будут доступны после %2)</translation>
    </message>
    <message>
        <source>This block was not received by any other nodes and will probably not be accepted!</source>
        <translation>Этот блок не был получен никакими другими узлами и, вероятно, не будет принят!</translation>
    </message>
    <message>
        <source>Generated but not accepted</source>
        <translation>Сгенерировано, но не принято</translation>
    </message>
    <message>
        <source>Received with</source>
        <translation>Получено</translation>
    </message>
    <message>
        <source>Received from</source>
        <translation>Получен от</translation>
    </message>
    <message>
        <source>Sent to</source>
        <translation>Отправлено</translation>
    </message>
    <message>
        <source>Payment to yourself</source>
        <translation>Оплата самому себе</translation>
    </message>
    <message>
        <source>Mined</source>
        <translation>Майнинг</translation>
    </message>
    <message>
        <source>watch-only</source>
        <translation>Только наблюдение</translation>
    </message>
    <message>
        <source>(n/a)</source>
        <translation>(n/a)</translation>
    </message>
    <message>
        <source>(no label)</source>
        <translation>(Нет метки)</translation>
    </message>
    <message>
        <source>Transaction status. Hover over this field to show number of confirmations.</source>
        <translation>Статус транзакции. Наведите указатель мыши на это поле, чтобы показать количество подтверждений.</translation>
    </message>
    <message>
        <source>Date and time that the transaction was received.</source>
        <translation>Дата и время получения транзакции.</translation>
    </message>
    <message>
        <source>Type of transaction.</source>
        <translation>Тип транзакции.</translation>
    </message>
    <message>
        <source>Whether or not a watch-only address is involved in this transaction.</source>
        <translation>Независимо от того, включен ли в эту транзакцию только адрес наблюдения.</translation>
    </message>
    <message>
        <source>User-defined intent/purpose of the transaction.</source>
        <translation>Определенноя пользователем цель транзакции.</translation>
    </message>
    <message>
        <source>Amount removed from or added to balance.</source>
        <translation>Сумма, удаленная или добавленная к балансу.</translation>
    </message>
    <message>
        <source>Confirmation of the bonus code.</source>
        <translation>Подтверждение бонусного кода.</translation>
    </message>
</context>
<context>
    <name>TransactionView</name>
    <message>
        <source>All</source>
        <translation>Все</translation>
    </message>
    <message>
        <source>Today</source>
        <translation>Cегодня</translation>
    </message>
    <message>
        <source>This week</source>
        <translation>На этой неделе</translation>
    </message>
    <message>
        <source>This month</source>
        <translation>Этот месяц</translation>
    </message>
    <message>
        <source>Last month</source>
        <translation>Прошлый месяц</translation>
    </message>
    <message>
        <source>This year</source>
        <translation>В этом году</translation>
    </message>
    <message>
        <source>Range...</source>
        <translation>Диапазон...</translation>
    </message>
    <message>
        <source>Received with</source>
        <translation>Получено</translation>
    </message>
    <message>
        <source>Sent to</source>
        <translation>Отправлено</translation>
    </message>
    <message>
        <source>To yourself</source>
        <translation>Самому себе</translation>
    </message>
    <message>
        <source>Mined</source>
        <translation>Майнинг</translation>
    </message>
    <message>
        <source>Other</source>
        <translation>Другие</translation>
    </message>
    <message>
        <source>Enter address or label to search</source>
        <translation>Введите адрес или метку для поиска</translation>
    </message>
    <message>
        <source>Min amount</source>
        <translation>Минимальная сумма</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation>&amp;Экспорт</translation>
    </message>
    <message>
        <source>Export the data in the current tab to a file</source>
        <translation>Экспортировать данные из вкладки в файл</translation>
    </message>
    <message>
        <source>Abandon transaction</source>
        <translation>Отказ от транзакции</translation>
    </message>
    <message>
        <source>Copy address</source>
        <translation>Копировать адрес</translation>
    </message>
    <message>
        <source>Copy label</source>
        <translation>Копировать метку</translation>
    </message>
    <message>
        <source>Copy amount</source>
        <translation>Копировать сумму</translation>
    </message>
    <message>
        <source>Copy transaction ID</source>
        <translation>Копировать ID транзакции</translation>
    </message>
    <message>
        <source>Copy raw transaction</source>
        <translation>Копировать транзакцию</translation>
    </message>
    <message>
        <source>Copy full transaction details</source>
        <translation>Скопировать полную информацию о транзакции</translation>
    </message>
    <message>
        <source>Edit label</source>
        <translation>Изменить метку</translation>
    </message>
    <message>
        <source>Show transaction details</source>
        <translation>Показать данные транзакции</translation>
    </message>
    <message>
        <source>Export Transaction History</source>
        <translation>Экспорт истории транзакций</translation>
    </message>
    <message>
        <source>Comma separated file (*.csv)</source>
        <translation>Comma separated file (*.csv)</translation>
    </message>
    <message>
        <source>Confirmed</source>
        <translation>Подтверждено</translation>
    </message>
    <message>
        <source>Watch-only</source>
        <translation>Только наблюдение</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Дата</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Тип</translation>
    </message>
    <message>
        <source>Label</source>
        <translation>Метка</translation>
    </message>
    <message>
        <source>Address</source>
        <translation>Адрес</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>Exporting Failed</source>
        <translation>Ошибка экспорта</translation>
    </message>
    <message>
        <source>There was an error trying to save the transaction history to %1.</source>
        <translation>При попытке сохранить историю транзакций в %1 произошла ошибка.</translation>
    </message>
    <message>
        <source>Exporting Successful</source>
        <translation>Экспорт успешных</translation>
    </message>
    <message>
        <source>The transaction history was successfully saved to %1.</source>
        <translation>История транзакций была успешно сохранена в %1.</translation>
    </message>
    <message>
        <source>Range:</source>
        <translation>Диапазон:</translation>
    </message>
    <message>
        <source>to</source>
        <translation>в</translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation>Подтверждение</translation>
    </message>
</context>
<context>
    <name>UnitDisplayStatusBarControl</name>
    <message>
        <source>Unit to show amounts in. Click to select another unit.</source>
        <translation>Единица измерения количества монет. Щелкните для выбора другой единицы.</translation>
    </message>
</context>
<context>
    <name>WalletFrame</name>
    <message>
        <source>No wallet has been loaded.</source>
        <translation>Кошелек не загружен.</translation>
    </message>
</context>
<context>
    <name>WalletModel</name>
    <message>
        <source>Send Coins</source>
        <translation>Отправка</translation>
    </message>
</context>
<context>
    <name>WalletView</name>
    <message>
        <source>Backup Wallet</source>
        <translation>Резервное копирование</translation>
    </message>
    <message>
        <source>Wallet Data (*.dat)</source>
        <translation>Wallet Data (*.dat)</translation>
    </message>
    <message>
        <source>Backup Failed</source>
        <translation>Ошибка резервного копирования</translation>
    </message>
    <message>
        <source>There was an error trying to save the wallet data to %1.</source>
        <translation>При попытке сохранить данные кошелька в% 1 произошла ошибка.</translation>
    </message>
    <message>
        <source>Backup Successful</source>
        <translation>Резервное копирование успешно завершено</translation>
    </message>
    <message>
        <source>The wallet data was successfully saved to %1.</source>
        <translation>Данные кошелька были успешно сохранены в %1.</translation>
    </message>
    <message>
        <source>Wallet Restore</source>
        <translation>Восстановление кошелька</translation>
    </message>
    <message>
        <source>Restoring the backup will result in a loss of funds received in the interval from the creation of the backup to the current time. Do this only if you have lost access to your wallet. Would you like to continue with the restoration?</source>
        <translation>Восстановление резервной копии приведет к потере средств, полученных в промежутке времени от создания резервной копии до текущего времени. Это происходит только в том случае, если вы потеряли доступ к своему кошельку. Хотели бы вы продолжить восстановление?</translation>
    </message>
    <message>
        <source>Import a backup.</source>
        <translation>Импорт резервной копии.</translation>
    </message>
    <message>
        <source>Recovery failed.</source>
        <translation>Сбой восстановления.</translation>
    </message>
    <message>
        <source>Restore completed successfully.</source>
        <translation>Восстановление выполнено успешно.</translation>
    </message>
    <message>
        <source>You must restart your wallet to continue working.</source>
        <translation>Вы должны перезапустить свой кошелек, чтобы продолжить работу.</translation>
    </message>
    <message>
        <source>remove old wallet failed.</source>
        <translation>Удалить старый кошелек не удалось.</translation>
    </message>
    <message>
        <source>Lock wallet</source>
        <translation>Блокировать кошелек</translation>
    </message>
    <message>
        <source>With a blocked wallet, you can not participate in the mining. Do you want block the wallet?</source>
        <translation>С заблокированным кошельком вы не можете участвовать в майнинге. Вы хотите заблокировать кошелек?
</translation>
    </message>
</context>
</TS>

