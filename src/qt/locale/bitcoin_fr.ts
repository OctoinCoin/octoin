<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr">
<context>
    <name>OctoinCoin-core</name>
    <message>
        <source>The %s developers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(1 = keep tx meta data e.g. account owner and payment request information, 2 = drop tx meta data)</source>
        <translation type="unfinished">(1 = conserver les métadonnées de transmission, par ex. les informations du propriétaire du compte et de la demande de paiement, 2 = abandonner les métadonnées de transmission)</translation>
    </message>
    <message>
        <source>-fallbackfee is set very high! This is the transaction fee you may pay when fee estimates are not available.</source>
        <translation type="unfinished">La valeur -fallbackfee est très élevée ! Elle représente les frais de transaction que vous pourriez acquitter si aucune estimation de frais n&apos;est proposée.</translation>
    </message>
    <message>
        <source>-maxtxfee is set very high! Fees this large could be paid on a single transaction.</source>
        <translation type="unfinished">-maxtxfee est défini très haut ! Des frais aussi élevés pourraient être payés en une seule transaction.</translation>
    </message>
    <message>
        <source>-paytxfee is set very high! This is the transaction fee you will pay if you send a transaction.</source>
        <translation type="unfinished">-paytxfee est réglé sur un montant très élevé ! Il s&apos;agit des frais de transaction que vous payerez si vous envoyez une transaction.</translation>
    </message>
    <message>
        <source>A fee rate (in %s/kB) that will be used when fee estimation has insufficient data (default: %s)</source>
        <translation type="unfinished">Un taux de frais (en %s/Ko) qui sera utilisé si l&apos;estimation de frais ne possède pas suffisamment de données (par défaut : %s)</translation>
    </message>
    <message>
        <source>Accept relayed transactions received from whitelisted peers even when not relaying transactions (default: %d)</source>
        <translation type="unfinished">Accepter les transactions relayées reçues de pairs de la liste blanche même si le nœud ne relaie pas les transactions (par défaut : %d)</translation>
    </message>
    <message>
        <source>Allow JSON-RPC connections from specified source. Valid for &lt;ip&gt; are a single IP (e.g. 1.2.3.4), a network/netmask (e.g. 1.2.3.4/255.255.255.0) or a network/CIDR (e.g. 1.2.3.4/24). This option can be specified multiple times</source>
        <translation type="unfinished">Permettre les connexions JSON-RPC de sources spécifiques. Valide pour &lt;ip&gt; qui sont une IP simple (p. ex. 1.2.3.4), un réseau/masque réseau (p. ex. 1.2.3.4/255.255.255.0) ou un réseau/CIDR (p. ex. 1.2.3.4/24). Cette option peut être être spécifiée plusieurs fois</translation>
    </message>
    <message>
        <source>Bind to given address and always listen on it. Use [host]:port notation for IPv6</source>
        <translation type="unfinished">Se lier à l&apos;adresse donnée et toujours l&apos;écouter. Utilisez la notation [host]:port pour l&apos;IPv6</translation>
    </message>
    <message>
        <source>Bind to given address and whitelist peers connecting to it. Use [host]:port notation for IPv6</source>
        <translation type="unfinished">Se lier à l&apos;adresse donnée et aux pairs s&apos;y connectant. Utiliser la notation [host]:port pour l&apos;IPv6</translation>
    </message>
    <message>
        <source>Bind to given address to listen for JSON-RPC connections. Use [host]:port notation for IPv6. This option can be specified multiple times (default: bind to all interfaces)</source>
        <translation type="unfinished">Se lier à l&apos;adresse donnée pour écouter des connexions JSON-RPC. Utiliser la notation [host]:port pour l&apos;IPv6. Cette option peut être spécifiée plusieurs fois (par défaut : se lier à toutes les interfaces)</translation>
    </message>
    <message>
        <source>Cannot obtain a lock on data directory %s. %s is probably already running.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create new files with system default permissions, instead of umask 077 (only effective with disabled wallet functionality)</source>
        <translation type="unfinished">Créer de nouveaux fichiers avec les permissions système par défaut, au lieu de umask 077 (effectif seulement avec la fonction du porte-monnaie désactivée)</translation>
    </message>
    <message>
        <source>Delete all wallet transactions and only recover those parts of the blockchain through -rescan on startup</source>
        <translation type="unfinished">Supprimer toutes les transactions du porte-monnaie et ne récupérer que ces parties de la chaîne de blocs avec -rescan au démarrage</translation>
    </message>
    <message>
        <source>Discover own IP addresses (default: 1 when listening and no -externalip or -proxy)</source>
        <translation type="unfinished">Découvrir ses propres adresses (par défaut : 1 en écoute et sans externalip ou -proxy)</translation>
    </message>
    <message>
        <source>Distributed under the MIT software license, see the accompanying file COPYING or &lt;http://www.opensource.org/licenses/mit-license.php&gt;.</source>
        <translation type="unfinished">Distribué sous la licence MIT d&apos;utilisation d&apos;un logiciel. Consultez le fichier joint COPYING ou &lt;http://www.opensource.org/licenses/mit-license.php&gt;.</translation>
    </message>
    <message>
        <source>Do not keep transactions in the mempool longer than &lt;n&gt; hours (default: %u)</source>
        <translation type="unfinished">Ne pas conserver de transactions dans la réserve de mémoire plus de &lt;n&gt; heures (par défaut : %u)</translation>
    </message>
    <message>
        <source>Equivalent bytes per sigop in transactions for relay and mining (default: %u)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error loading %s: You can&apos;t enable HD on a already existing non-HD wallet</source>
        <translation type="unfinished">Erreur de chargement de %s : vous ne pouvez pas activer HD sur un porte-monnaie non HD existant</translation>
    </message>
    <message>
        <source>Error reading %s! All keys read correctly, but transaction data or address book entries might be missing or incorrect.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error: Listening for incoming connections failed (listen returned error %s)</source>
        <translation type="unfinished">Erreur : l&apos;écoute des connexions entrantes a échoué (l&apos;écoute a retourné l&apos;erreur %s)</translation>
    </message>
    <message>
        <source>Execute command when a relevant alert is received or we see a really long fork (%s in cmd is replaced by message)</source>
        <translation type="unfinished">Exécuter une commande lorsqu&apos;une alerte pertinente est reçue ou si nous voyons une bifurcation vraiment étendue (%s dans la commande est remplacé par le message)</translation>
    </message>
    <message>
        <source>Execute command when a wallet transaction changes (%s in cmd is replaced by TxID)</source>
        <translation type="unfinished">Exécuter la commande lorsqu&apos;une transaction de porte-monnaie change (%s dans la commande est remplacée par TxID)</translation>
    </message>
    <message>
        <source>Execute command when the best block changes (%s in cmd is replaced by block hash)</source>
        <translation type="unfinished">Exécuter la commande lorsque le meilleur bloc change (%s dans cmd est remplacé par le hachage du bloc)</translation>
    </message>
    <message>
        <source>Fees (in %s/kB) smaller than this are considered zero fee for relaying, mining and transaction creation (default: %s)</source>
        <translation type="unfinished">Les frais (en %s/Ko) inférieurs à ce seuil sont considérés comme étant nuls pour le relais, le minage et la création de transactions (par défaut : %s)</translation>
    </message>
    <message>
        <source>Fees (in %s/kB) smaller than this are considered zero fee for transaction creation (default: %s)</source>
        <translation type="unfinished">Les frais (en %s/Ko) inférieurs à ce seuil sont considérés comme étant nuls pour la création de transactions (par défaut : %s)</translation>
    </message>
    <message>
        <source>Force relay of transactions from whitelisted peers even they violate local relay policy (default: %d)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>How thorough the block verification of -checkblocks is (0-4, default: %u)</source>
        <translation type="unfinished">Degré de profondeur de la vérification des blocs -checkblocks (0-4, par défaut : %u)</translation>
    </message>
    <message>
        <source>If &lt;category&gt; is not supplied or if &lt;category&gt; = 1, output all debugging information.</source>
        <translation type="unfinished">Si &lt;category&gt; n&apos;est pas indiqué ou si &lt;category&gt; = 1, extraire toutes les données de débogage.</translation>
    </message>
    <message>
        <source>If paytxfee is not set, include enough fee so transactions begin confirmation on average within n blocks (default: %u)</source>
        <translation type="unfinished">Si paytxfee n&apos;est pas défini, inclure suffisamment de frais afin que les transactions commencent la confirmation en moyenne avant n blocs (par défaut : %u)</translation>
    </message>
    <message>
        <source>Invalid amount for -maxtxfee=&lt;amount&gt;: &apos;%s&apos; (must be at least the minrelay fee of %s to prevent stuck transactions)</source>
        <translation type="unfinished">Montant invalide pour -maxtxfee=&lt;amount&gt; : « %s » (doit être au moins les frais minrelay de %s pour prévenir le blocage des transactions)</translation>
    </message>
    <message>
        <source>Maintain a full transaction index, used by the getrawtransaction rpc call (default: %u)</source>
        <translation type="unfinished">Maintenir un index complet des transactions, utilisé par l&apos;appel RPC getrawtransaction (obtenir la transaction brute) (par défaut : %u)</translation>
    </message>
    <message>
        <source>Maximum allowed median peer time offset adjustment. Local perspective of time may be influenced by peers forward or backward by this amount. (default: %u seconds)</source>
        <translation type="unfinished">Réglage moyen maximal autorisé de décalage de l&apos;heure d&apos;un pair. La perspective locale du temps peut être influencée par les pairs, en avance ou en retard, de cette valeur. (Par défaut : %u secondes)</translation>
    </message>
    <message>
        <source>Maximum size of data in data carrier transactions we relay and mine (default: %u)</source>
        <translation type="unfinished">Quantité maximale de données dans les transactions du porteur de données que nous relayons et minons (par défaut : %u)</translation>
    </message>
    <message>
        <source>Maximum total fees (in %s) to use in a single wallet transaction or raw transaction; setting this too low may abort large transactions (default: %s)</source>
        <translation type="unfinished">Frais totaux maximaux (en %s) à utiliser en une seule transaction de porte-monnaie ou transaction brute ; les définir trop bas pourrait interrompre les grosses transactions (par défaut : %s)</translation>
    </message>
    <message>
        <source>Number of seconds to keep misbehaving peers from reconnecting (default: %u)</source>
        <translation type="unfinished">Délai en secondes de refus de reconnexion pour les pairs présentant un mauvais comportement (par défaut : %u)</translation>
    </message>
    <message>
        <source>Output debugging information (default: %u, supplying &lt;category&gt; is optional)</source>
        <translation type="unfinished">Extraire les informations de débogage (par défaut : %u, fournir &lt;category&gt; est optionnel)</translation>
    </message>
    <message>
        <source>Please check that your computer&apos;s date and time are correct! If your clock is wrong, %s will not work properly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Please contribute if you find %s useful. Visit %s for further information about the software.</source>
        <translation type="unfinished">Si vous trouvez %s utile, vous pouvez y contribuer. Vous trouverez davantage d&apos;informations à propos du logiciel sur %s.</translation>
    </message>
    <message>
        <source>Prune configured below the minimum of %d MiB.  Please use a higher number.</source>
        <translation type="unfinished">L&apos;élagage est configuré au-dessous du minimum de %d Mio. Veuillez utiliser un nombre plus élevé.</translation>
    </message>
    <message>
        <source>Prune: last wallet synchronisation goes beyond pruned data. You need to -reindex (download the whole blockchain again in case of pruned node)</source>
        <translation type="unfinished">Élagage : la dernière synchronisation de porte-monnaie va par-delà les données élaguées.  Vous devez -reindex (réindexer, télécharger de nouveau toute la chaîne de blocs en cas de nœud élagué)</translation>
    </message>
    <message>
        <source>Query for peer addresses via DNS lookup, if low on addresses (default: 1 unless -connect)</source>
        <translation type="unfinished">Demander les adresses des pairs par recherche DNS si l&apos;on manque d&apos;adresses (par défaut : 1 sauf si -connect)</translation>
    </message>
    <message>
        <source>Randomize credentials for every proxy connection. This enables Tor stream isolation (default: %u)</source>
        <translation type="unfinished">Aléer les authentifiants pour chaque connexion mandataire. Ceci active l&apos;isolement de flux de Tor (par défaut : %u) </translation>
    </message>
    <message>
        <source>Reduce storage requirements by pruning (deleting) old blocks. This mode is incompatible with -txindex and -rescan. Warning: Reverting this setting requires re-downloading the entire blockchain. (default: 0 = disable pruning blocks, &gt;%u = target size in MiB to use for block files)</source>
        <translation type="unfinished">Réduire les exigences de stockage en élaguant (supprimant) les anciens blocs. Ce mode est incompatible avec -txindex et -rescan. Avertissement : ramener ce paramètre à sa valeur antérieure exige un nouveau téléchargement de la chaîne de blocs en entier (par défaut : 0 = désactiver l&apos;élagage des blocs, &gt;%u = taille cible en Mio à utiliser pour les fichiers de blocs).</translation>
    </message>
    <message>
        <source>Rescans are not possible in pruned mode. You will need to use -reindex which will download the whole blockchain again.</source>
        <translation type="unfinished">Les rebalayages sont impossibles en mode élagage. Vous devrez utiliser -reindex, ce qui téléchargera de nouveau la chaîne de blocs en entier.</translation>
    </message>
    <message>
        <source>Set maximum size of high-priority/low-fee transactions in bytes (default: %d)</source>
        <translation type="unfinished">Définir la taille maximale en octets des transactions prioritaires/à frais modiques (par défaut : %d)</translation>
    </message>
    <message>
        <source>Set the number of script verification threads (%u to %d, 0 = auto, &lt;0 = leave that many cores free, default: %d)</source>
        <translation type="unfinished">Définir le nombre d&apos;exétrons de vérification des scripts (%u à %d, 0 = auto, &lt; 0 = laisser ce nombre de cœurs inutilisés, par défaut : %d)</translation>
    </message>
    <message>
        <source>Support filtering of blocks and transaction with bloom filters (default: %u)</source>
        <translation type="unfinished">Prendre en charge le filtrage des blocs et des transactions avec les filtres bloom (par défaut : %u)</translation>
    </message>
    <message>
        <source>The block database contains a block which appears to be from the future. This may be due to your computer&apos;s date and time being set incorrectly. Only rebuild the block database if you are sure that your computer&apos;s date and time are correct</source>
        <translation type="unfinished">La base de données de blocs contient un bloc qui semble provenir du futur. Cela pourrait être causé par la date et l&apos;heure erronées de votre ordinateur. Ne reconstruisez la base de données de blocs que si vous êtes certain que la date et l&apos;heure de votre ordinateur sont justes.</translation>
    </message>
    <message>
        <source>The transaction amount is too small to send after the fee has been deducted</source>
        <translation type="unfinished">Le montant de la transaction est trop bas pour être envoyé une fois que les frais ont été déduits</translation>
    </message>
    <message>
        <source>This is a pre-release test build - use at your own risk - do not use for mining or merchant applications</source>
        <translation type="unfinished">Ceci est une pré-version de test - l&apos;utiliser à vos risques et périls - ne pas l&apos;utiliser pour miner ou pour des applications marchandes</translation>
    </message>
    <message>
        <source>This product includes software developed by the OpenSSL Project for use in the OpenSSL Toolkit &lt;https://www.openssl.org/&gt; and cryptographic software written by Eric Young and UPnP software written by Thomas Bernard.</source>
        <translation type="unfinished">Ce produit comprend des logiciels développés par le projet OpenSSL pour être utilisés dans la boîte à outils OpenSSL &lt;https://www.openssl.org/&gt; et un logiciel cryptographique écrit par Eric Young, ainsi qu&apos;un logiciel UPnP écrit par Thomas Bernard.</translation>
    </message>
    <message>
        <source>Total length of network version string (%i) exceeds maximum length (%i). Reduce the number or size of uacomments.</source>
        <translation type="unfinished">La taille totale de la chaîne de version de réseau (%i) dépasse la longueur maximale (%i). Réduire le nombre ou la taille des commentaires uacomments.</translation>
    </message>
    <message>
        <source>Tries to keep outbound traffic under the given target (in MiB per 24h), 0 = no limit (default: %d)</source>
        <translation type="unfinished">Tente de garder le trafic sortant sous la cible donnée (en Mio par 24 h), 0 = sans limite (par défaut : %d)</translation>
    </message>
    <message>
        <source>Unable to rewind the database to a pre-fork state. You will need to redownload the blockchain</source>
        <translation type="unfinished">Impossible de rebobiner la base de données à un état préfourche. Vous devrez retélécharger la chaîne de blocs</translation>
    </message>
    <message>
        <source>Unsupported argument -socks found. Setting SOCKS version isn&apos;t possible anymore, only SOCKS5 proxies are supported.</source>
        <translation type="unfinished">L&apos;argument non pris en charge -socks a été trouvé. Il n&apos;est plus possible de définir la version de SOCKS, seuls les mandataires SOCKS5 sont pris en charge.</translation>
    </message>
    <message>
        <source>Unsupported argument -whitelistalwaysrelay ignored, use -whitelistrelay and/or -whitelistforcerelay.</source>
        <translation type="unfinished">Argument non pris charge -whitelistalwaysrelay ignoré, utiliser -whitelistrelay et/ou -whitelistforcerelay.</translation>
    </message>
    <message>
        <source>Use UPnP to map the listening port (default: 1 when listening and no -proxy)</source>
        <translation type="unfinished">Utiliser l&apos;UPnP pour mapper le port d&apos;écoute (par défaut : 1 lors de l&apos;écoute et pas de mandataire -proxy)</translation>
    </message>
    <message>
        <source>Use hierarchical deterministic key generation (HD) after BIP32. Only has effect during wallet creation/first start</source>
        <translation type="unfinished">Utiliser une génération de clef hiérarchique déterministe (HD) après BIP32. N&apos;a d&apos;effet que lors de la création/premier lancement du porte-monnaie</translation>
    </message>
    <message>
        <source>Use separate SOCKS5 proxy to reach peers via Tor hidden services (default: %s)</source>
        <translation type="unfinished">Utiliser un serveur mandataire SOCKS5 séparé pour atteindre les pairs par les services cachés de Tor (par défaut : %s)</translation>
    </message>
    <message>
        <source>Username and hashed password for JSON-RPC connections. The field &lt;userpw&gt; comes in the format: &lt;USERNAME&gt;:&lt;SALT&gt;$&lt;HASH&gt;. A canonical python script is included in share/rpcuser. This option can be specified multiple times</source>
        <translation type="unfinished">Nom d&apos;utilisateur et mot de passe haché pour les connexions JSON-RPC. Le champ &lt;userpw&gt; vient au format : &lt;USERNAME&gt;:&lt;SALT&gt;$&lt;HASH&gt;. Un script python canonique est inclus dans share/rpcuser. Cette option peut être spécifiée plusieurs fois.</translation>
    </message>
    <message>
        <source>Warning: The network does not appear to fully agree! Some miners appear to be experiencing issues.</source>
        <translation type="unfinished">Avertissement : le réseau ne semble pas totalement d&apos;accord ! Quelques mineurs semblent éprouver des difficultés.</translation>
    </message>
    <message>
        <source>Warning: Unknown block versions being mined! It&apos;s possible unknown rules are in effect</source>
        <translation type="unfinished">Avertissement : des versions de blocs inconnues sont minées ! Il est possible que des règles inconnues soient en vigeur</translation>
    </message>
    <message>
        <source>Warning: Wallet file corrupt, data salvaged! Original %s saved as %s in %s; if your balance or transactions are incorrect you should restore from a backup.</source>
        <translation type="unfinished">Avertissement : le fichier du porte-monnaie est corrompu, les données ont été récupérées ! Le fichier %s original a été enregistré en tant que %s dans %s ; si votre solde ou vos transactions sont incorrects, vous devriez restaurer une sauvegarde.</translation>
    </message>
    <message>
        <source>Warning: We do not appear to fully agree with our peers! You may need to upgrade, or other nodes may need to upgrade.</source>
        <translation type="unfinished">Avertissement : nous ne semblons pas être en accord complet avec nos pairs ! Vous pourriez avoir besoin d&apos;effectuer une mise à niveau, ou d&apos;autres nœuds du réseau pourraient avoir besoin d&apos;effectuer une mise à niveau.</translation>
    </message>
    <message>
        <source>Whitelist peers connecting from the given netmask or IP address. Can be specified multiple times.</source>
        <translation type="unfinished">Pairs de la liste blanche se connectant à partir du masque réseau ou de l&apos;IP donné. Peut être spécifié plusieurs fois.</translation>
    </message>
    <message>
        <source>Whitelisted peers cannot be DoS banned and their transactions are always relayed, even if they are already in the mempool, useful e.g. for a gateway</source>
        <translation type="unfinished">Les pairs de la liste blanche ne peuvent pas être bannis DoS et leurs transactions sont toujours relayées, même si elles sont déjà dans le mempool, utile p. ex. pour une passerelle</translation>
    </message>
    <message>
        <source>You need to rebuild the database using -reindex to go back to unpruned mode.  This will redownload the entire blockchain</source>
        <translation type="unfinished">Vous devez reconstruire la base de données en utilisant -reindex afin de revenir au mode sans élagage. Ceci retéléchargera complètement la chaîne de blocs.</translation>
    </message>
    <message>
        <source>You need to rebuild the database using -reindex-chainstate to change -txindex</source>
        <translation type="unfinished">Vous devez reconstruire la base de données avec -reindex-chainstate pour changer -txindex</translation>
    </message>
    <message>
        <source>%s corrupt, salvage failed</source>
        <translation type="unfinished">%s corrompu, la récupération a échoué</translation>
    </message>
    <message>
        <source>(default: %s)</source>
        <translation type="unfinished">(par défaut : %s)</translation>
    </message>
    <message>
        <source>(default: %u)</source>
        <translation type="unfinished">(par défaut : %u)</translation>
    </message>
    <message>
        <source>-maxmempool must be at least %d MB</source>
        <translation type="unfinished">-maxmempool doit être d&apos;au moins %d Mo</translation>
    </message>
    <message>
        <source>&lt;category&gt; can be:</source>
        <translation type="unfinished">&lt;category&gt; peut être :</translation>
    </message>
    <message>
        <source>Accept command line and JSON-RPC commands</source>
        <translation type="unfinished">Accepter les commandes de JSON-RPC et de la ligne de commande</translation>
    </message>
    <message>
        <source>Accept connections from outside (default: 1 if no -proxy or -connect)</source>
        <translation type="unfinished">Accepter les connexions entrantes (par défaut : 1 si aucun -proxy ou -connect )</translation>
    </message>
    <message>
        <source>Accept public REST requests (default: %u)</source>
        <translation type="unfinished">Accepter les demandes REST publiques (par défaut : %u)</translation>
    </message>
    <message>
        <source>Add a node to connect to and attempt to keep the connection open</source>
        <translation type="unfinished">Ajouter un nœud auquel se connecter et tenter de garder la connexion ouverte</translation>
    </message>
    <message>
        <source>Allow DNS lookups for -addnode, -seednode and -connect</source>
        <translation type="unfinished">Autoriser les recherches DNS pour -addnode, -seednode et -connect</translation>
    </message>
    <message>
        <source>Always query for peer addresses via DNS lookup (default: %u)</source>
        <translation type="unfinished">Toujours demander les adresses des pairs par recherche DNS (par défaut : %u)</translation>
    </message>
    <message>
        <source>Append comment to the user agent string</source>
        <translation type="unfinished">Ajouter un commentaire à la chaîne d&apos;agent utilisateur</translation>
    </message>
    <message>
        <source>Attempt to recover private keys from a corrupt wallet on startup</source>
        <translation type="unfinished">Tenter de récupérer les clefs privées d&apos;un porte-monnaie corrompu lors du démarrage</translation>
    </message>
    <message>
        <source>Automatically create Tor hidden service (default: %d)</source>
        <translation type="unfinished">Créer automatiquement un service caché Tor (par défaut : %d)</translation>
    </message>
    <message>
        <source>Block creation options:</source>
        <translation type="unfinished">Options de création de bloc :</translation>
    </message>
    <message>
        <source>Cannot downgrade wallet</source>
        <translation type="unfinished">Impossible de revenir à une version inférieure du porte-monnaie</translation>
    </message>
    <message>
        <source>Cannot resolve -%s address: &apos;%s&apos;</source>
        <translation type="unfinished">Impossible de résoudre l&apos;adresse -%s : « %s »</translation>
    </message>
    <message>
        <source>Cannot write default address</source>
        <translation type="unfinished">Impossible d&apos;écrire l&apos;adresse par défaut</translation>
    </message>
    <message>
        <source>Change index out of range</source>
        <translation type="unfinished">L&apos;index de changement est hors échelle</translation>
    </message>
    <message>
        <source>Connect only to the specified node(s)</source>
        <translation type="unfinished">Ne se connecter qu&apos;au(x) nœud(s) spécifié(s)</translation>
    </message>
    <message>
        <source>Connect through SOCKS5 proxy</source>
        <translation type="unfinished">Se connecter par un mandataire SOCKS5</translation>
    </message>
    <message>
        <source>Connect to a node to retrieve peer addresses, and disconnect</source>
        <translation type="unfinished">Se connecter à un nœud pour obtenir des adresses de pairs puis se déconnecter</translation>
    </message>
    <message>
        <source>Connection options:</source>
        <translation type="unfinished">Options de connexion :</translation>
    </message>
    <message>
        <source>Copyright (C) %i-%i</source>
        <translation type="unfinished">Tous droits réservés (C) %i-%i</translation>
    </message>
    <message>
        <source>Corrupted block database detected</source>
        <translation type="unfinished">Base corrompue de données des blocs détectée</translation>
    </message>
    <message>
        <source>Debugging/Testing options:</source>
        <translation type="unfinished">Options de débogage/de test :</translation>
    </message>
    <message>
        <source>Do not load the wallet and disable wallet RPC calls</source>
        <translation type="unfinished">Ne pas charger le porte-monnaie et désactiver les appels RPC</translation>
    </message>
    <message>
        <source>Do you want to rebuild the block database now?</source>
        <translation type="unfinished">Voulez-vous reconstruire la base de données des blocs maintenant ?</translation>
    </message>
    <message>
        <source>Done loading</source>
        <translation type="unfinished">Chargement terminé</translation>
    </message>
    <message>
        <source>Enable publish hash block in &lt;address&gt;</source>
        <translation type="unfinished">Activer la publication du bloc de hachage dans &lt;address&gt;</translation>
    </message>
    <message>
        <source>Enable publish hash transaction in &lt;address&gt;</source>
        <translation type="unfinished">Activer la publication de la transaction de hachage dans &lt;address&gt;</translation>
    </message>
    <message>
        <source>Enable publish raw block in &lt;address&gt;</source>
        <translation type="unfinished">Activer la publication du bloc brut dans &lt;address&gt;</translation>
    </message>
    <message>
        <source>Enable publish raw transaction in &lt;address&gt;</source>
        <translation type="unfinished">Activer la publication de la transaction brute dans &lt;address&gt;</translation>
    </message>
    <message>
        <source>Enable transaction replacement in the memory pool (default: %u)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error initializing block database</source>
        <translation type="unfinished">Erreur lors de l&apos;initialisation de la base de données des blocs</translation>
    </message>
    <message>
        <source>Error initializing wallet database environment %s!</source>
        <translation type="unfinished">Erreur lors de l&apos;initialisation de l&apos;environnement de la base de données du porte-monnaie %s !</translation>
    </message>
    <message>
        <source>Error loading %s</source>
        <translation type="unfinished">Erreur lors du chargement de %s</translation>
    </message>
    <message>
        <source>Error loading %s: Wallet corrupted</source>
        <translation type="unfinished">Erreur lors du chargement de %s : porte-monnaie corrompu</translation>
    </message>
    <message>
        <source>Error loading %s: Wallet requires newer version of %s</source>
        <translation type="unfinished">Erreur lors du chargement de %s : le porte-monnaie exige une version plus récente de %s</translation>
    </message>
    <message>
        <source>Error loading %s: You can&apos;t disable HD on a already existing HD wallet</source>
        <translation type="unfinished">Erreur de chargement de %s : vous ne pouvez pas désactiver HD sur un porte-monnaie HD existant</translation>
    </message>
    <message>
        <source>Error loading block database</source>
        <translation type="unfinished">Erreur du chargement de la base de données des blocs</translation>
    </message>
    <message>
        <source>Error opening block database</source>
        <translation type="unfinished">Erreur lors de l&apos;ouverture de la base de données des blocs</translation>
    </message>
    <message>
        <source>Error reading from database, shutting down.</source>
        <translation type="unfinished">Erreur de lecture de la base de données, fermeture en cours.</translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished">Erreur</translation>
    </message>
    <message>
        <source>Error: A fatal internal error occurred, see debug.log for details</source>
        <translation type="unfinished">Erreur : une erreur interne fatale s&apos;est produite. Voir debug.log pour plus de détails</translation>
    </message>
    <message>
        <source>Error: Disk space is low!</source>
        <translation type="unfinished">Erreur : l&apos;espace disque est faible !</translation>
    </message>
    <message>
        <source>Failed to listen on any port. Use -listen=0 if you want this.</source>
        <translation type="unfinished">Échec de l&apos;écoute sur un port quelconque. Utilisez -listen=0 si vous voulez ceci.</translation>
    </message>
    <message>
        <source>Fee (in %s/kB) to add to transactions you send (default: %s)</source>
        <translation type="unfinished">Les frais (en %s/ko) à ajouter aux transactions que vous envoyez (par défaut : %s)</translation>
    </message>
    <message>
        <source>How many blocks to check at startup (default: %u, 0 = all)</source>
        <translation type="unfinished">Nombre de blocs à vérifier au démarrage (par défaut : %u, 0 = tous)</translation>
    </message>
    <message>
        <source>Importing...</source>
        <translation type="unfinished">Importation...</translation>
    </message>
    <message>
        <source>Imports blocks from external blk000??.dat file on startup</source>
        <translation type="unfinished">Importe des blocs depuis un fichier blk000??.dat externe lors du démarrage</translation>
    </message>
    <message>
        <source>Include IP addresses in debug output (default: %u)</source>
        <translation type="unfinished">Inclure les adresses IP à la sortie de débogage (par défaut : %u)</translation>
    </message>
    <message>
        <source>Incorrect or no genesis block found. Wrong datadir for network?</source>
        <translation type="unfinished">Bloc de genèse incorrect ou introuvable. Mauvais répertoire de données pour le réseau ?</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="unfinished">Information</translation>
    </message>
    <message>
        <source>Initialization sanity check failed. %s is shutting down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insufficient funds</source>
        <translation type="unfinished">Fonds insuffisants</translation>
    </message>
    <message>
        <source>Invalid -onion address: &apos;%s&apos;</source>
        <translation type="unfinished">Adresse -onion invalide : « %s »</translation>
    </message>
    <message>
        <source>Invalid -proxy address: &apos;%s&apos;</source>
        <translation type="unfinished">Adresse -proxy invalide : « %s »</translation>
    </message>
    <message>
        <source>Invalid amount for -%s=&lt;amount&gt;: &apos;%s&apos;</source>
        <translation type="unfinished">Montant invalide pour -%s=&lt;amount&gt; : « %s »</translation>
    </message>
    <message>
        <source>Invalid amount for -fallbackfee=&lt;amount&gt;: &apos;%s&apos;</source>
        <translation type="unfinished">Montant invalide pour -fallbackfee=&lt;amount&gt; : « %s »</translation>
    </message>
    <message>
        <source>Invalid amount for -paytxfee=&lt;amount&gt;: &apos;%s&apos; (must be at least %s)</source>
        <translation type="unfinished">Montant invalide pour -paytxfee=&lt;montant&gt; : « %s » (doit être au moins %s)</translation>
    </message>
    <message>
        <source>Invalid netmask specified in -whitelist: &apos;%s&apos;</source>
        <translation type="unfinished">Masque réseau invalide spécifié dans -whitelist : « %s »</translation>
    </message>
    <message>
        <source>Keep at most &lt;n&gt; unconnectable transactions in memory (default: %u)</source>
        <translation type="unfinished">Garder au plus &lt;n&gt; transactions non connectables en mémoire (par défaut : %u)</translation>
    </message>
    <message>
        <source>Keep the transaction memory pool below &lt;n&gt; megabytes (default: %u)</source>
        <translation type="unfinished">Garder la réserve de mémoire transactionnelle sous &lt;n&gt; mégaoctets (par défaut : %u)</translation>
    </message>
    <message>
        <source>Listen for JSON-RPC connections on &lt;port&gt; (default: %u or testnet: %u)</source>
        <translation type="unfinished">Écouter les connexions JSON-RPC sur &lt;port&gt; (par défaut : %u ou tesnet : %u)</translation>
    </message>
    <message>
        <source>Listen for connections on &lt;port&gt; (default: %u or testnet: %u)</source>
        <translation type="unfinished">Écouter les connexions sur &lt;port&gt; (par défaut : %u ou tesnet : %u)</translation>
    </message>
    <message>
        <source>Loading addresses...</source>
        <translation type="unfinished">Chargement des adresses…</translation>
    </message>
    <message>
        <source>Loading banlist...</source>
        <translation type="unfinished">Chargement de la liste d&apos;interdiction...</translation>
    </message>
    <message>
        <source>Loading block index...</source>
        <translation type="unfinished">Chargement de l’index des blocs…</translation>
    </message>
    <message>
        <source>Loading wallet...</source>
        <translation type="unfinished">Chargement du porte-monnaie…</translation>
    </message>
    <message>
        <source>Location of the auth cookie (default: data dir)</source>
        <translation type="unfinished">Emplacement du fichier témoin auth (par défaut : data dir)</translation>
    </message>
    <message>
        <source>Maintain at most &lt;n&gt; connections to peers (default: %u)</source>
        <translation type="unfinished">Garder au plus &lt;n&gt; connexions avec les pairs (par défaut : %u)</translation>
    </message>
    <message>
        <source>Make the wallet broadcast transactions</source>
        <translation type="unfinished">Obliger le porte-monnaie à diffuser les transactions</translation>
    </message>
    <message>
        <source>Maximum per-connection receive buffer, &lt;n&gt;*1000 bytes (default: %u)</source>
        <translation type="unfinished">Tampon maximal de réception par connexion, &lt;n&gt;*1000 octets (par défaut : %u)</translation>
    </message>
    <message>
        <source>Maximum per-connection send buffer, &lt;n&gt;*1000 bytes (default: %u)</source>
        <translation type="unfinished">Tampon maximal d&apos;envoi par connexion », &lt;n&gt;*1000 octets (par défaut : %u)</translation>
    </message>
    <message>
        <source>Need to specify a port with -whitebind: &apos;%s&apos;</source>
        <translation type="unfinished">Un port doit être spécifié avec -whitebind : « %s »</translation>
    </message>
    <message>
        <source>Node relay options:</source>
        <translation type="unfinished">Options de relais du nœud :</translation>
    </message>
    <message>
        <source>Not enough file descriptors available.</source>
        <translation type="unfinished">Pas assez de descripteurs de fichiers proposés.</translation>
    </message>
    <message>
        <source>Only connect to nodes in network &lt;net&gt; (ipv4, ipv6 or onion)</source>
        <translation type="unfinished">Seulement se connecter aux nœuds du réseau &lt;net&gt; (IPv4, IPv6 ou oignon)</translation>
    </message>
    <message>
        <source>Options:</source>
        <translation type="unfinished">Options :</translation>
    </message>
    <message>
        <source>Password for JSON-RPC connections</source>
        <translation type="unfinished">Mot de passe pour les connexions JSON-RPC</translation>
    </message>
    <message>
        <source>Prepend debug output with timestamp (default: %u)</source>
        <translation type="unfinished">Ajouter l&apos;horodatage au début de la sortie de débogage (par défaut : %u)</translation>
    </message>
    <message>
        <source>Print this help message and exit</source>
        <translation type="unfinished">Imprimer ce message d&apos;aide et quitter</translation>
    </message>
    <message>
        <source>Print version and exit</source>
        <translation type="unfinished">Imprimer la version et quitter</translation>
    </message>
    <message>
        <source>Prune cannot be configured with a negative value.</source>
        <translation type="unfinished">L&apos;élagage ne peut pas être configuré avec une valeur négative.</translation>
    </message>
    <message>
        <source>Prune mode is incompatible with -txindex.</source>
        <translation type="unfinished">Le mode élagage n&apos;est pas compatible avec -txindex.</translation>
    </message>
    <message>
        <source>Pruning blockstore...</source>
        <translation type="unfinished">Élagage du magasin de blocs...</translation>
    </message>
    <message>
        <source>RPC server options:</source>
        <translation type="unfinished">Options du serveur RPC :</translation>
    </message>
    <message>
        <source>Rebuild chain state and block index from the blk*.dat files on disk</source>
        <translation type="unfinished">Reconstruire l&apos;état de la chaîne et l&apos;index des blocs à partir des fichiers blk*.dat sur le disque</translation>
    </message>
    <message>
        <source>Rebuild chain state from the currently indexed blocks</source>
        <translation type="unfinished">Reconstruire l&apos;état de la chaîne à partir des blocs indexés actuellement</translation>
    </message>
    <message>
        <source>Reducing -maxconnections from %d to %d, because of system limitations.</source>
        <translation type="unfinished">Réduction de -maxconnections de %d à %d, due aux restrictions du système</translation>
    </message>
    <message>
        <source>Relay and mine data carrier transactions (default: %u)</source>
        <translation type="unfinished">Relayer et miner les transactions du porteur de données (par défaut : %u)</translation>
    </message>
    <message>
        <source>Relay non-P2SH multisig (default: %u)</source>
        <translation type="unfinished">Relayer les multisignatures non-P2SH (par défaut : %u)</translation>
    </message>
    <message>
        <source>Rescan the block chain for missing wallet transactions on startup</source>
        <translation type="unfinished">Réanalyser la chaîne de blocs au démarrage, à la recherche de transactions de porte-monnaie manquantes</translation>
    </message>
    <message>
        <source>Rescanning...</source>
        <translation type="unfinished">Nouvelle analyse…</translation>
    </message>
    <message>
        <source>Rewinding blocks...</source>
        <translation type="unfinished">Rebobinage des blocs...</translation>
    </message>
    <message>
        <source>Run in the background as a daemon and accept commands</source>
        <translation type="unfinished">Fonctionner en arrière-plan en tant que démon et accepter les commandes</translation>
    </message>
    <message>
        <source>Send trace/debug info to console instead of debug.log file</source>
        <translation type="unfinished">Envoyer les informations de débogage/trace à la console au lieu du fichier debug.log</translation>
    </message>
    <message>
        <source>Send transactions as zero-fee transactions if possible (default: %u)</source>
        <translation type="unfinished">Envoyer si possible les transactions comme étant sans frais (par défaut : %u)</translation>
    </message>
    <message>
        <source>Set database cache size in megabytes (%d to %d, default: %d)</source>
        <translation type="unfinished">Définir la taille du cache de la base de données en mégaoctets (%d to %d, default: %d)</translation>
    </message>
    <message>
        <source>Set key pool size to &lt;n&gt; (default: %u)</source>
        <translation type="unfinished">Définir la taille de la réserve de clefs à &lt;n&gt; (par défaut : %u)</translation>
    </message>
    <message>
        <source>Set maximum BIP141 block weight (default: %d)</source>
        <translation type="unfinished">Définir le poids maximal de bloc BIP141 (par défaut : %d)</translation>
    </message>
    <message>
        <source>Set maximum block size in bytes (default: %d)</source>
        <translation type="unfinished">Définir la taille minimale de bloc en octets (par défaut : %d)</translation>
    </message>
    <message>
        <source>Set the number of threads to service RPC calls (default: %d)</source>
        <translation type="unfinished">Définir le nombre d&apos;exétrons pour desservir les appels RPC (par défaut : %d)</translation>
    </message>
    <message>
        <source>Show all debugging options (usage: --help -help-debug)</source>
        <translation type="unfinished">Montrer toutes les options de débogage (utilisation : --help --help-debug)</translation>
    </message>
    <message>
        <source>Shrink debug.log file on client startup (default: 1 when no -debug)</source>
        <translation type="unfinished">Réduire le fichier debug.log lors du démarrage du client (par défaut : 1 lorsque -debug n&apos;est pas présent)</translation>
    </message>
    <message>
        <source>Signing transaction failed</source>
        <translation type="unfinished">La signature de la transaction a échoué</translation>
    </message>
    <message>
        <source>Specify configuration file (default: %s)</source>
        <translation type="unfinished">Spécifier le fichier de configuration (par défaut : %s)</translation>
    </message>
    <message>
        <source>Specify connection timeout in milliseconds (minimum: 1, default: %d)</source>
        <translation type="unfinished">Spécifier le délai d&apos;expiration de la connexion en millisecondes (minimum : 1, par défaut : %d)</translation>
    </message>
    <message>
        <source>Specify data directory</source>
        <translation type="unfinished">Spécifier le répertoire de données</translation>
    </message>
    <message>
        <source>Specify pid file (default: %s)</source>
        <translation type="unfinished">Spécifier le fichier pid (par défaut : %s)</translation>
    </message>
    <message>
        <source>Specify wallet file (within data directory)</source>
        <translation type="unfinished">Spécifiez le fichier de porte-monnaie (dans le répertoire de données)</translation>
    </message>
    <message>
        <source>Specify your own public address</source>
        <translation type="unfinished">Spécifier votre propre adresse publique</translation>
    </message>
    <message>
        <source>Spend unconfirmed change when sending transactions (default: %u)</source>
        <translation type="unfinished">Dépenser la monnaie non confirmée lors de l&apos;envoi de transactions (par défaut : %u)</translation>
    </message>
    <message>
        <source>The source code is available from %s.</source>
        <translation type="unfinished">Le code source est disponible sur %s.</translation>
    </message>
    <message>
        <source>The transaction amount is too small to pay the fee</source>
        <translation type="unfinished">Le montant de la transaction est trop bas pour que les frais soient payés</translation>
    </message>
    <message>
        <source>This is experimental software.</source>
        <translation type="unfinished">Ceci est un logiciel expérimental.</translation>
    </message>
    <message>
        <source>Threshold for disconnecting misbehaving peers (default: %u)</source>
        <translation type="unfinished">Seuil de déconnexion des pairs présentant un mauvais comportement (par défaut : %u)</translation>
    </message>
    <message>
        <source>Tor control port password (default: empty)</source>
        <translation type="unfinished">Mot de passe du port de contrôle Tor (par défaut : vide)</translation>
    </message>
    <message>
        <source>Tor control port to use if onion listening enabled (default: %s)</source>
        <translation type="unfinished">Port de contrôle Tor à utiliser si l&apos;écoute onion est activée (par défaut :%s)</translation>
    </message>
    <message>
        <source>Transaction amount too small</source>
        <translation type="unfinished">Montant de la transaction trop bas</translation>
    </message>
    <message>
        <source>Transaction amounts must be positive</source>
        <translation type="unfinished">Les montants de transaction doivent être positifs</translation>
    </message>
    <message>
        <source>Transaction too large for fee policy</source>
        <translation type="unfinished">La transaction est trop grosse pour la politique de frais</translation>
    </message>
    <message>
        <source>Transaction too large</source>
        <translation type="unfinished">Transaction trop volumineuse</translation>
    </message>
    <message>
        <source>Unable to bind to %s on this computer (bind returned error %s)</source>
        <translation type="unfinished">Impossible de se lier à %s sur cet ordinateur (bind a retourné l&apos;erreur %s)</translation>
    </message>
    <message>
        <source>Unable to bind to %s on this computer. %s is probably already running.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to start HTTP server. See debug log for details.</source>
        <translation type="unfinished">Impossible de démarrer le serveur HTTP. Voir le journal de débogage pour plus de détails.</translation>
    </message>
    <message>
        <source>Unknown network specified in -onlynet: &apos;%s&apos;</source>
        <translation type="unfinished">Réseau inconnu spécifié sur -onlynet : « %s »</translation>
    </message>
    <message>
        <source>Unsupported argument -benchmark ignored, use -debug=bench.</source>
        <translation type="unfinished">Argument non pris en charge -benchmark ignoré, utiliser -debug=bench.</translation>
    </message>
    <message>
        <source>Unsupported argument -debugnet ignored, use -debug=net.</source>
        <translation type="unfinished">Argument non pris en charge -debugnet ignoré, utiliser -debug=net.</translation>
    </message>
    <message>
        <source>Unsupported argument -tor found, use -onion.</source>
        <translation type="unfinished">Argument non pris en charge -tor trouvé, utiliser -onion</translation>
    </message>
    <message>
        <source>Upgrade wallet to latest format on startup</source>
        <translation type="unfinished">Mettre à niveau le porte-monnaie au démarrage vers le format le plus récent</translation>
    </message>
    <message>
        <source>Use UPnP to map the listening port (default: %u)</source>
        <translation type="unfinished">Utiliser l&apos;UPnP pour mapper le port d&apos;écoute (par défaut : %u)</translation>
    </message>
    <message>
        <source>User Agent comment (%s) contains unsafe characters.</source>
        <translation type="unfinished">Le commentaire d&apos;agent utilisateur (%s) contient des caractères dangereux.</translation>
    </message>
    <message>
        <source>Username for JSON-RPC connections</source>
        <translation type="unfinished">Nom d&apos;utilisateur pour les connexions JSON-RPC</translation>
    </message>
    <message>
        <source>Verifying blocks...</source>
        <translation type="unfinished">Vérification des blocs en cours...</translation>
    </message>
    <message>
        <source>Verifying wallet...</source>
        <translation type="unfinished">Vérification du porte-monnaie en cours...</translation>
    </message>
    <message>
        <source>Wallet %s resides outside data directory %s</source>
        <translation type="unfinished">Le porte-monnaie %s réside en dehors du répertoire de données %s</translation>
    </message>
    <message>
        <source>Wallet debugging/testing options:</source>
        <translation type="unfinished">Options de débogage/de test du porte-monnaie :</translation>
    </message>
    <message>
        <source>Wallet needed to be rewritten: restart %s to complete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wallet options:</source>
        <translation type="unfinished">Options du porte-monnaie :</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Avertissement</translation>
    </message>
    <message>
        <source>Warning: unknown new rules activated (versionbit %i)</source>
        <translation type="unfinished">Avertissement : nouvelles règles inconnues activées (bit de version %i)</translation>
    </message>
    <message>
        <source>Whether to operate in a blocks only mode (default: %u)</source>
        <translation type="unfinished">Faut-il fonctionner en mode blocs seulement (par défaut : %u)</translation>
    </message>
    <message>
        <source>Zapping all transactions from wallet...</source>
        <translation type="unfinished">Supprimer toutes les transactions du porte-monnaie...</translation>
    </message>
    <message>
        <source>ZeroMQ notification options:</source>
        <translation type="unfinished">Options de notification ZeroMQ</translation>
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
        <translation>Cliquer à droite pour modifier l&apos;adresse ou l&apos;étiquette</translation>
    </message>
    <message>
        <source>Create a new address</source>
        <translation>Créer une nouvelle adresse</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nouveau</translation>
    </message>
    <message>
        <source>Copy the currently selected address to the system clipboard</source>
        <translation>Copier l&apos;adresse sélectionnée actuellement dans le presse-papiers</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copier</translation>
    </message>
    <message>
        <source>C&amp;lose</source>
        <translation>&amp;Fermer</translation>
    </message>
    <message>
        <source>Delete the currently selected address from the list</source>
        <translation>Supprimer de la liste l&apos;adresse sélectionnée actuellement</translation>
    </message>
    <message>
        <source>Export the data in the current tab to a file</source>
        <translation>Exporter les données de l&apos;onglet actuel vers un fichier</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation>&amp;Exporter</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Supprimer</translation>
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
        <translation>Fenêtre de dialogue de la phrase de passe</translation>
    </message>
    <message>
        <source>Enter passphrase</source>
        <translation>Saisir la phrase de passe</translation>
    </message>
    <message>
        <source>New passphrase</source>
        <translation>Nouvelle phrase de passe</translation>
    </message>
    <message>
        <source>Repeat new passphrase</source>
        <translation>Répéter la phrase de passe</translation>
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
        <translation>IP/masque réseau</translation>
    </message>
    <message>
        <source>Banned Until</source>
        <translation>Banni jusqu&apos;au</translation>
    </message>
</context>
<context>
    <name>BitcoinGUI</name>
    <message>
        <source>Sign &amp;message</source>
        <translation>&amp;Signer le message</translation>
    </message>
    <message>
        <source>Synchronizing with network...</source>
        <translation>Synchronisation avec le réseau en cours…</translation>
    </message>
    <message>
        <source>&amp;Overview</source>
        <translation>&amp;Vue d&apos;ensemble</translation>
    </message>
    <message>
        <source>Node</source>
        <translation>Nœud</translation>
    </message>
    <message>
        <source>Show general overview of wallet</source>
        <translation>Afficher une vue d’ensemble du porte-monnaie</translation>
    </message>
    <message>
        <source>&amp;Transactions</source>
        <translation>&amp;Transactions</translation>
    </message>
    <message>
        <source>Browse transaction history</source>
        <translation>Parcourir l&apos;historique des transactions</translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation>Q&amp;uitter</translation>
    </message>
    <message>
        <source>Quit application</source>
        <translation>Quitter l’application</translation>
    </message>
    <message>
        <source>&amp;Options</source>
        <translation>&amp;Options…</translation>
    </message>
    <message>
        <source>Modify configuration options for %1</source>
        <translation>Modifier les options de configuration de %1</translation>
    </message>
    <message>
        <source>&amp;Encrypt Wallet</source>
        <translation>&amp;Chiffrer le porte-monnaie...</translation>
    </message>
    <message>
        <source>&amp;Backup Wallet</source>
        <translation>Sauvegarder le &amp;porte-monnaie...</translation>
    </message>
    <message>
        <source>&amp;Change Passphrase</source>
        <translation>&amp;Changer la phrase de passe...</translation>
    </message>
    <message>
        <source>&amp;Sending addresses</source>
        <translation>Adresses d&apos;&amp;envoi...</translation>
    </message>
    <message>
        <source>&amp;Receiving addresses</source>
        <translation>Adresses de &amp;réception...</translation>
    </message>
    <message>
        <source>Open &amp;URI</source>
        <translation>Ouvrir un &amp;URI</translation>
    </message>
    <message>
        <source>Reindexing blocks on disk...</source>
        <translation>Réindexation des blocs sur le disque...</translation>
    </message>
    <message>
        <source>Send coins to a OctoinCoin address</source>
        <translation>Envoyer des pièces à une adresse OctoinCoin</translation>
    </message>
    <message>
        <source>Backup wallet to another location</source>
        <translation>Sauvegarder le porte-monnaie vers un autre emplacement</translation>
    </message>
    <message>
        <source>Change the passphrase used for wallet encryption</source>
        <translation>Modifier la phrase de passe utilisée pour le chiffrement du porte-monnaie</translation>
    </message>
    <message>
        <source>&amp;Debug window</source>
        <translation>Fenêtre de &amp;débogage</translation>
    </message>
    <message>
        <source>Open debugging and diagnostic console</source>
        <translation>Ouvrir une console de débogage et de diagnostic</translation>
    </message>
    <message>
        <source>&amp;Verify message</source>
        <translation>&amp;Vérifier un message</translation>
    </message>
    <message>
        <source>Wallet</source>
        <translation>Porte-monnaie</translation>
    </message>
    <message>
        <source>&amp;Send</source>
        <translation>&amp;Envoyer</translation>
    </message>
    <message>
        <source>&amp;Receive</source>
        <translation>&amp;Recevoir</translation>
    </message>
    <message>
        <source>&amp;Show / Hide</source>
        <translation>&amp;Afficher / Cacher</translation>
    </message>
    <message>
        <source>Show or hide the main Window</source>
        <translation>Afficher ou masquer la fenêtre principale</translation>
    </message>
    <message>
        <source>Encrypt the private keys that belong to your wallet</source>
        <translation>Chiffrer les clefs privées de votre porte-monnaie</translation>
    </message>
    <message>
        <source>Sign messages with your OctoinCoin addresses to prove you own them</source>
        <translation>Signer les messages avec vos adresses OctoinCoin pour prouver que vous les détenez</translation>
    </message>
    <message>
        <source>Verify messages to ensure they were signed with specified OctoinCoin addresses</source>
        <translation>Vérifier les messages pour vous assurer qu&apos;ils ont été signés avec les adresses OctoinCoin spécifiées</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Fichier</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>&amp;Réglages</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Aide</translation>
    </message>
    <message>
        <source>Tabs toolbar</source>
        <translation>Barre d&apos;outils des onglets</translation>
    </message>
    <message>
        <source>Request payments (generates QR codes and octoin: URIs)</source>
        <translation>Demander des paiements (génère des codes QR et des URIs octoin:)</translation>
    </message>
    <message>
        <source>Show the list of used sending addresses and labels</source>
        <translation>Afficher la liste d&apos;adresses d&apos;envoi et d&apos;étiquettes utilisées</translation>
    </message>
    <message>
        <source>Show the list of used receiving addresses and labels</source>
        <translation>Afficher la liste d&apos;adresses de réception et d&apos;étiquettes utilisées</translation>
    </message>
    <message>
        <source>Open a octoin: URI or payment request</source>
        <translation>Ouvrir un URI octoin: ou une demande de paiement</translation>
    </message>
    <message>
        <source>&amp;Command-line options</source>
        <translation>Options de ligne de &amp;commande</translation>
    </message>
    <message numerus="yes">
        <source>%n active connection(s) to OctoinCoin network</source>
        <translation>
            <numerusform>%n connexion active avec le réseau OctoinCoin</numerusform>
            <numerusform>%n connexions actives avec le réseau OctoinCoin</numerusform>
        </translation>
    </message>
    <message>
        <source>Indexing blocks on disk...</source>
        <translation>Indexation des blocs sur le disque...</translation>
    </message>
    <message>
        <source>Processing blocks on disk...</source>
        <translation>Traitement des blocs sur le disque...</translation>
    </message>
    <message>
        <source>NOT SYNCED</source>
        <translation>Aucune source de blocs disponible...</translation>
    </message>
    <message numerus="yes">
        <source>Processed %n block(s) of transaction history.</source>
        <translation>
            <numerusform>%n bloc d&apos;historique transactionnel a été traité</numerusform>
            <numerusform>%n blocs d&apos;historique transactionnel ont été traités</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n heure</numerusform>
            <numerusform>%n heures</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n jour</numerusform>
            <numerusform>%n jours</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n week(s)</source>
        <translation>
            <numerusform>%n semaine</numerusform>
            <numerusform>%n semaines</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 and %2</source>
        <translation>%1 et %2</translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n an</numerusform>
            <numerusform>%n ans</numerusform>
        </translation>
    </message>
    <message>
        <source>SYNCING...</source>
        <translation>%1 en retard</translation>
    </message>
    <message>
        <source>Last received block was generated %1 ago.</source>
        <translation>Le dernier bloc reçu avait été généré il y a %1.</translation>
    </message>
    <message>
        <source>Transactions after this will not yet be visible.</source>
        <translation>Les transactions après ceci ne sont pas encore visibles.</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avertissement</translation>
    </message>
    <message>
        <source>Information</source>
        <translation>Information</translation>
    </message>
    <message>
        <source>Up to date</source>
        <translation>À jour</translation>
    </message>
    <message>
        <source>Show the %1 help message to get a list with possible OctoinCoin command-line options</source>
        <translation>Afficher le message d&apos;aide de %1 pour obtenir la liste des options de ligne de commande OctoinCoin possibles.</translation>
    </message>
    <message>
        <source>%1 client</source>
        <translation>Client %1</translation>
    </message>
    <message>
        <source>Catching up...</source>
        <translation>Rattrapage en cours…</translation>
    </message>
    <message>
        <source>Date: %1
</source>
        <translation>Date : %1
</translation>
    </message>
    <message>
        <source>Amount: %1
</source>
        <translation>Montant : %1
</translation>
    </message>
    <message>
        <source>Type: %1
</source>
        <translation>Type : %1
</translation>
    </message>
    <message>
        <source>Label: %1
</source>
        <translation>Étiquette : %1
</translation>
    </message>
    <message>
        <source>Address: %1
</source>
        <translation>Adresse : %1
</translation>
    </message>
    <message>
        <source>Sent transaction</source>
        <translation>Transaction envoyée</translation>
    </message>
    <message>
        <source>Incoming transaction</source>
        <translation>Transaction entrante</translation>
    </message>
    <message>
        <source>Wallet is &lt;b&gt;encrypted&lt;/b&gt; and currently &lt;b&gt;unlocked&lt;/b&gt;</source>
        <translation>Le porte-monnaie est &lt;b&gt;chiffré&lt;/b&gt; et est actuellement &lt;b&gt;déverrouillé&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Wallet is &lt;b&gt;encrypted&lt;/b&gt; and currently &lt;b&gt;locked&lt;/b&gt;</source>
        <translation>Le porte-monnaie est &lt;b&gt;chiffré&lt;/b&gt; et actuellement &lt;b&gt;verrouillé&lt;/b&gt;</translation>
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
        <source>&amp;Money share</source>
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
        <translation type="unfinished">Date</translation>
    </message>
    <message>
        <source>Amount</source>
        <translation type="unfinished">Montant</translation>
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
        <translation>Sélection des pièces</translation>
    </message>
    <message>
        <source>Quantity:</source>
        <translation>Quantité :</translation>
    </message>
    <message>
        <source>Bytes:</source>
        <translation>Octets :</translation>
    </message>
    <message>
        <source>Amount:</source>
        <translation>Montant :</translation>
    </message>
    <message>
        <source>Priority:</source>
        <translation>Priorité :</translation>
    </message>
    <message>
        <source>Fee:</source>
        <translation>Frais :</translation>
    </message>
    <message>
        <source>Dust:</source>
        <translation>Poussière :</translation>
    </message>
    <message>
        <source>After Fee:</source>
        <translation>Après les frais :</translation>
    </message>
    <message>
        <source>Change:</source>
        <translation>Monnaie :</translation>
    </message>
    <message>
        <source>(un)select all</source>
        <translation>Tout (dé)sélectionner</translation>
    </message>
    <message>
        <source>Tree mode</source>
        <translation>Mode arborescence</translation>
    </message>
    <message>
        <source>List mode</source>
        <translation>Mode liste</translation>
    </message>
    <message>
        <source>Amount</source>
        <translation>Montant</translation>
    </message>
    <message>
        <source>Received with label</source>
        <translation>Reçu avec une étiquette</translation>
    </message>
    <message>
        <source>Received with address</source>
        <translation>Reçu avec une adresse</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Date</translation>
    </message>
    <message>
        <source>Confirmations</source>
        <translation>Confirmations</translation>
    </message>
    <message>
        <source>Confirmed</source>
        <translation>Confirmée</translation>
    </message>
    <message>
        <source>Priority</source>
        <translation>Priorité</translation>
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
        <translation type="unfinished">aucune</translation>
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
        <translation>Modifier l&apos;adresse</translation>
    </message>
    <message>
        <source>&amp;Label</source>
        <translation>&amp;Étiquette</translation>
    </message>
    <message>
        <source>The label associated with this address list entry</source>
        <translation>L&apos;étiquette associée à cette entrée de la liste d&apos;adresses</translation>
    </message>
    <message>
        <source>The address associated with this address list entry. This can only be modified for sending addresses.</source>
        <translation>L&apos;adresse associée à cette entrée de la liste d&apos;adresses. Ceci ne peut être modifié que pour les adresses d&apos;envoi.</translation>
    </message>
    <message>
        <source>&amp;Address</source>
        <translation>&amp;Adresse</translation>
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
        <translation>Un nouveau répertoire de données sera créé.</translation>
    </message>
    <message>
        <source>name</source>
        <translation>nom</translation>
    </message>
    <message>
        <source>Directory already exists. Add %1 if you intend to create a new directory here.</source>
        <translation>Le répertoire existe déjà. Ajoutez %1 si vous voulez créer un nouveau répertoire ici.</translation>
    </message>
    <message>
        <source>Path already exists, and is not a directory.</source>
        <translation>Le chemin existe déjà et n&apos;est pas un répertoire.</translation>
    </message>
    <message>
        <source>Cannot create data directory here.</source>
        <translation>Impossible de créer un répertoire de données ici.</translation>
    </message>
</context>
<context>
    <name>HelpMessageDialog</name>
    <message>
        <source>version</source>
        <translation>version</translation>
    </message>
    <message>
        <source>(%1-bit)</source>
        <translation>(%1-bit)</translation>
    </message>
    <message>
        <source>About %1</source>
        <translation>À propos de %1</translation>
    </message>
    <message>
        <source>Command-line options</source>
        <translation>Options de ligne de commande</translation>
    </message>
    <message>
        <source>Usage:</source>
        <translation>Utilisation :</translation>
    </message>
    <message>
        <source>command-line options</source>
        <translation>options de ligne de commande</translation>
    </message>
    <message>
        <source>UI Options:</source>
        <translation>Options de l&apos;IU :</translation>
    </message>
    <message>
        <source>Choose data directory on startup (default: %u)</source>
        <translation>Choisir un répertoire de données au démarrage (par défaut : %u)</translation>
    </message>
    <message>
        <source>Set language, for example &quot;de_DE&quot; (default: system locale)</source>
        <translation>Définir la langue, par exemple « fr_CA » (par défaut : la langue du système)</translation>
    </message>
    <message>
        <source>Start minimized</source>
        <translation>Démarrer minimisé</translation>
    </message>
    <message>
        <source>Set SSL root certificates for payment request (default: -system-)</source>
        <translation>Définir les certificats SSL racine pour les requêtes de paiement (par défaut : -system-)</translation>
    </message>
    <message>
        <source>Show splash screen on startup (default: %u)</source>
        <translation>Afficher l&apos;écran d&apos;accueil au démarrage (par défaut : %u)</translation>
    </message>
    <message>
        <source>Reset all settings changed in the GUI</source>
        <translation>Réinitialiser tous les paramètres changés dans l&apos;IUG</translation>
    </message>
</context>
<context>
    <name>InformationDialog</name>
    <message>
        <source>Information</source>
        <translation type="unfinished">Information</translation>
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
        <translation>Bienvenue</translation>
    </message>
    <message>
        <source>Welcome to %1.</source>
        <translation>Bienvenue à %1.</translation>
    </message>
    <message>
        <source>As this is the first time the program is launched, you can choose where %1 will store its data.</source>
        <translation>Puisque c&apos;est la première fois que le logiciel est lancé, vous pouvez choisir où %1 stockera ses données.</translation>
    </message>
    <message>
        <source>%1 will download and store a copy of the OctoinCoin block chain. At least %2GB of data will be stored in this directory, and it will grow over time. The wallet will also be stored in this directory.</source>
        <translation>%1 téléchargera et stockera une copie de la chaîne de blocs de OctoinCoin. Au moins %2 Go de données seront stockés dans ce répertoire et sa taille augmentera avec le temps. Le porte-monnaie sera également stocké dans ce répertoire.</translation>
    </message>
    <message>
        <source>Use the default data directory</source>
        <translation>Utiliser le répertoire de données par défaut</translation>
    </message>
    <message>
        <source>Use a custom data directory:</source>
        <translation>Utiliser un répertoire de données personnalisé :</translation>
    </message>
    <message>
        <source>Error: Specified data directory &quot;%1&quot; cannot be created.</source>
        <translation>Erreur : le répertoire de données spécifié « %1 » ne peut pas être créé.</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message numerus="yes">
        <source>%n GB of free space available</source>
        <translation>
            <numerusform>%n Go d&apos;espace libre disponible</numerusform>
            <numerusform>%n Go d&apos;espace libre disponibles</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>(of %n GB needed)</source>
        <translation>
            <numerusform>(sur %n Go nécessaire)</numerusform>
            <numerusform>(sur %n Go nécessaires)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>OpenURIDialog</name>
    <message>
        <source>Open URI</source>
        <translation>Ouvrir un URI</translation>
    </message>
    <message>
        <source>Open payment request from URI or file</source>
        <translation>Ouvrir une demande de paiement à partir d&apos;un URI ou d&apos;un fichier</translation>
    </message>
    <message>
        <source>URI:</source>
        <translation>URI :</translation>
    </message>
    <message>
        <source>Select payment request file</source>
        <translation>Choisir le fichier de demande de paiement</translation>
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
        <translation>Options</translation>
    </message>
    <message>
        <source>&amp;Main</source>
        <translation>Réglages &amp;principaux</translation>
    </message>
    <message>
        <source>Automatically start %1 after logging in to the system.</source>
        <translation>Démarrer %1 automatiquement après avoir ouvert une session sur l&apos;ordinateur.</translation>
    </message>
    <message>
        <source>&amp;Start %1 on system login</source>
        <translation>&amp;Démarrer %1 lors de l&apos;ouverture d&apos;une session</translation>
    </message>
    <message>
        <source>Size of &amp;database cache</source>
        <translation>Taille du cache de la base de &amp;données</translation>
    </message>
    <message>
        <source>MB</source>
        <translation>Mo</translation>
    </message>
    <message>
        <source>Number of script &amp;verification threads</source>
        <translation>Nombre d&apos;exétrons de &amp;vérification de script</translation>
    </message>
    <message>
        <source>Accept connections from outside</source>
        <translation>Accepter les connexions provenant de l&apos;extérieur</translation>
    </message>
    <message>
        <source>Allow incoming connections</source>
        <translation>Permettre les transactions entrantes</translation>
    </message>
    <message>
        <source>IP address of the proxy (e.g. IPv4: 127.0.0.1 / IPv6: ::1)</source>
        <translation>Adresse IP du mandataire (par ex. IPv4 : 127.0.0.1 / IPv6 : ::1)</translation>
    </message>
    <message>
        <source>Minimize instead of exit the application when the window is closed. When this option is enabled, the application will be closed only after selecting Exit in the menu.</source>
        <translation>Minimiser au lieu de quitter l&apos;application lorsque la fenêtre est fermée. Si cette option est activée, l&apos;application ne sera fermée qu&apos;en sélectionnant Quitter dans le menu.</translation>
    </message>
    <message>
        <source>Third party URLs (e.g. a block explorer) that appear in the transactions tab as context menu items. %s in the URL is replaced by transaction hash. Multiple URLs are separated by vertical bar |.</source>
        <translation>URL de tiers (par ex. un explorateur de blocs) apparaissant dans l&apos;onglet des transactions comme éléments du menu contextuel. %s dans l&apos;URL est remplacé par le hachage de la transaction. Les URL multiples sont séparées par une barre verticale |.</translation>
    </message>
    <message>
        <source>Third party transaction URLs</source>
        <translation>URL de transaction d&apos;un tiers</translation>
    </message>
    <message>
        <source>Active command-line options that override above options:</source>
        <translation>Options actives de ligne de commande qui annulent les options ci-dessus :</translation>
    </message>
    <message>
        <source>Reset all client options to default.</source>
        <translation>Réinitialiser toutes les options du client aux valeurs par défaut.</translation>
    </message>
    <message>
        <source>&amp;Reset Options</source>
        <translation>&amp;Réinitialisation des options</translation>
    </message>
    <message>
        <source>&amp;Network</source>
        <translation>&amp;Réseau</translation>
    </message>
    <message>
        <source>(0 = auto, &lt;0 = leave that many cores free)</source>
        <translation>(0 = auto, &lt; 0 = laisser ce nombre de cœurs inutilisés)</translation>
    </message>
    <message>
        <source>W&amp;allet</source>
        <translation>&amp;Porte-monnaie</translation>
    </message>
    <message>
        <source>Expert</source>
        <translation>Expert</translation>
    </message>
    <message>
        <source>Enable coin &amp;control features</source>
        <translation>Activer les fonctions de &amp;contrôle des pièces </translation>
    </message>
    <message>
        <source>If you disable the spending of unconfirmed change, the change from a transaction cannot be used until that transaction has at least one confirmation. This also affects how your balance is computed.</source>
        <translation>Si vous désactivé la dépense de la monnaie non confirmée, la monnaie d&apos;une transaction ne peut pas être utilisée tant que cette transaction n&apos;a pas reçu au moins une confirmation. Ceci affecte aussi comment votre solde est calculé.</translation>
    </message>
    <message>
        <source>&amp;Spend unconfirmed change</source>
        <translation>&amp;Dépenser la monnaie non confirmée</translation>
    </message>
    <message>
        <source>Automatically open the OctoinCoin client port on the router. This only works when your router supports UPnP and it is enabled.</source>
        <translation>Ouvrir le port du client OctoinCoin automatiquement sur le routeur. Ceci ne fonctionne que si votre routeur supporte l&apos;UPnP et si la fonctionnalité est activée.</translation>
    </message>
    <message>
        <source>Map port using &amp;UPnP</source>
        <translation>Mapper le port avec l&apos;&amp;UPnP</translation>
    </message>
    <message>
        <source>Connect to the OctoinCoin network through a SOCKS5 proxy.</source>
        <translation>Se connecter au réseau OctoinCoin par un mandataire SOCKS5.</translation>
    </message>
    <message>
        <source>&amp;Connect through SOCKS5 proxy (default proxy):</source>
        <translation>Se &amp;connecter par un mandataire SOCKS5 (mandataire par défaut) :</translation>
    </message>
    <message>
        <source>Proxy &amp;IP:</source>
        <translation>&amp;IP du serveur mandataire :</translation>
    </message>
    <message>
        <source>&amp;Port:</source>
        <translation>&amp;Port :</translation>
    </message>
    <message>
        <source>Port of the proxy (e.g. 9050)</source>
        <translation>Port du serveur mandataire (par ex. 9050)</translation>
    </message>
    <message>
        <source>Used for reaching peers via:</source>
        <translation>Utilisé pour rejoindre les pairs par :</translation>
    </message>
    <message>
        <source>Shows, if the supplied default SOCKS5 proxy is used to reach peers via this network type.</source>
        <translation>S&apos;affiche, si le mandataire SOCKS5 par défaut fourni est utilisé pour atteindre les pairs par ce type de réseau.</translation>
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
        <translation>Se connecter au réseau OctoinCoin au travers d&apos;un mandataire SOCKS5 séparé pour les services cachés de Tor.</translation>
    </message>
    <message>
        <source>Use separate SOCKS5 proxy to reach peers via Tor hidden services:</source>
        <translation>Utiliser un mandataire SOCKS5 séparé pour atteindre les pairs grâce aux services cachés de Tor :</translation>
    </message>
    <message>
        <source>&amp;Window</source>
        <translation>&amp;Fenêtre</translation>
    </message>
    <message>
        <source>&amp;Hide the icon from the system tray.</source>
        <translation>&amp;Cacher l&apos;icône dans la zone de notification.</translation>
    </message>
    <message>
        <source>Hide tray icon</source>
        <translation>Cacher l&apos;icône de la zone de notification</translation>
    </message>
    <message>
        <source>Show only a tray icon after minimizing the window.</source>
        <translation>Afficher uniquement une icône système après minimisation.</translation>
    </message>
    <message>
        <source>&amp;Minimize to the tray instead of the taskbar</source>
        <translation>&amp;Minimiser dans la barre système au lieu de la barre des tâches</translation>
    </message>
    <message>
        <source>M&amp;inimize on close</source>
        <translation>M&amp;inimiser lors de la fermeture</translation>
    </message>
    <message>
        <source>&amp;Display</source>
        <translation>&amp;Affichage</translation>
    </message>
    <message>
        <source>User Interface &amp;language:</source>
        <translation>&amp;Langue de l&apos;interface utilisateur :</translation>
    </message>
    <message>
        <source>The user interface language can be set here. This setting will take effect after restarting %1.</source>
        <translation>La langue de l&apos;interface utilisateur peut être définie ici. Ce réglage sera pris en compte après redémarrage de %1.</translation>
    </message>
    <message>
        <source>&amp;Unit to show amounts in:</source>
        <translation>&amp;Unité d&apos;affichage des montants :</translation>
    </message>
    <message>
        <source>Choose the default subdivision unit to show in the interface and when sending coins.</source>
        <translation>Choisissez la sous-unité par défaut pour l&apos;affichage dans l&apos;interface et lors de l&apos;envoi de pièces.</translation>
    </message>
    <message>
        <source>Whether to show coin control features or not.</source>
        <translation>Afficher ou non les fonctions de contrôle des pièces.</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>A&amp;nnuler</translation>
    </message>
    <message>
        <source>default</source>
        <translation>par défaut</translation>
    </message>
    <message>
        <source>none</source>
        <translation>aucune</translation>
    </message>
    <message>
        <source>Confirm options reset</source>
        <translation>Confirmer la réinitialisation des options</translation>
    </message>
    <message>
        <source>Client restart required to activate changes.</source>
        <translation>Le redémarrage du client est nécessaire pour activer les changements.</translation>
    </message>
    <message>
        <source>Client will be shut down. Do you want to proceed?</source>
        <translation>Le client sera arrêté. Voulez-vous continuer ?</translation>
    </message>
    <message>
        <source>This change would require a client restart.</source>
        <translation>Ce changement demanderait un redémarrage du client.</translation>
    </message>
    <message>
        <source>The supplied proxy address is invalid.</source>
        <translation>L&apos;adresse de serveur mandataire fournie est invalide.</translation>
    </message>
</context>
<context>
    <name>OverviewPage</name>
    <message>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <source>The displayed information may be out of date. Your wallet automatically synchronizes with the OctoinCoin network after a connection is established, but this process has not completed yet.</source>
        <translation>Les informations affichées peuvent être obsolètes. Votre porte-monnaie est automatiquement synchronisé avec le réseau OctoinCoin lorsque la connexion s&apos;établit, or ce processus n&apos;est pas encore terminé.</translation>
    </message>
    <message>
        <source>Watch-only:</source>
        <translation>Juste-regarder :</translation>
    </message>
    <message>
        <source>Available:</source>
        <translation>Disponible :</translation>
    </message>
    <message>
        <source>Your current spendable balance</source>
        <translation>Votre solde actuel pouvant être dépensé</translation>
    </message>
    <message>
        <source>Pending:</source>
        <translation>En attente :</translation>
    </message>
    <message>
        <source>Total of transactions that have yet to be confirmed, and do not yet count toward the spendable balance</source>
        <translation>Total des transactions qui doivent encore être confirmées et qu&apos;il n&apos;est pas encore possible de dépenser</translation>
    </message>
    <message>
        <source>Immature:</source>
        <translation>Immature :</translation>
    </message>
    <message>
        <source>Mined balance that has not yet matured</source>
        <translation>Le solde miné n&apos;est pas encore mûr</translation>
    </message>
    <message>
        <source>Balances</source>
        <translation>Soldes</translation>
    </message>
    <message>
        <source>Total:</source>
        <translation>Total :</translation>
    </message>
    <message>
        <source>Your current total balance</source>
        <translation>Votre solde total actuel</translation>
    </message>
    <message>
        <source>Your current balance in watch-only addresses</source>
        <translation>Votre balance actuelle en adresses juste-regarder</translation>
    </message>
    <message>
        <source>Spendable:</source>
        <translation>Disponible :</translation>
    </message>
    <message>
        <source>Recent transactions</source>
        <translation>Transactions récentes</translation>
    </message>
    <message>
        <source>Unconfirmed transactions to watch-only addresses</source>
        <translation>Transactions non confirmées vers des adresses juste-regarder</translation>
    </message>
    <message>
        <source>Mined balance in watch-only addresses that has not yet matured</source>
        <translation>Le solde miné dans des adresses juste-regarder, qui n&apos;est pas encore mûr</translation>
    </message>
    <message>
        <source>Current total balance in watch-only addresses</source>
        <translation>Solde total actuel dans des adresses juste-regarder</translation>
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
        <translation>Agent utilisateur</translation>
    </message>
    <message>
        <source>Node/Service</source>
        <translation>Nœud/service</translation>
    </message>
    <message>
        <source>Ping Time</source>
        <translation>Temps de ping</translation>
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
        <translation>Montant</translation>
    </message>
    <message>
        <source>Enter a OctoinCoin address (e.g. %1)</source>
        <translation>Saisir une adresse OctoinCoin (p. ex. %1)</translation>
    </message>
    <message>
        <source>%1 d</source>
        <translation>%1 j</translation>
    </message>
    <message>
        <source>%1 h</source>
        <translation>%1 h</translation>
    </message>
    <message>
        <source>%1 m</source>
        <translation>%1 min</translation>
    </message>
    <message>
        <source>%1 s</source>
        <translation>%1 s</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Aucun</translation>
    </message>
    <message>
        <source>N/A</source>
        <translation>N.D.</translation>
    </message>
    <message>
        <source>%1 ms</source>
        <translation>%1 ms</translation>
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
        <translation>N.D.</translation>
    </message>
    <message>
        <source>Client version</source>
        <translation>Version du client</translation>
    </message>
    <message>
        <source>&amp;Information</source>
        <translation>&amp;Informations</translation>
    </message>
    <message>
        <source>Debug window</source>
        <translation>Fenêtre de débogage</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Général</translation>
    </message>
    <message>
        <source>Using BerkeleyDB version</source>
        <translation>Version BerkeleyDB utilisée</translation>
    </message>
    <message>
        <source>Datadir</source>
        <translation>Datadir</translation>
    </message>
    <message>
        <source>Startup time</source>
        <translation>Heure de démarrage</translation>
    </message>
    <message>
        <source>Network</source>
        <translation>Réseau</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <source>Number of connections</source>
        <translation>Nombre de connexions</translation>
    </message>
    <message>
        <source>Block chain</source>
        <translation>Chaîne de blocs</translation>
    </message>
    <message>
        <source>Current number of blocks</source>
        <translation>Nombre actuel de blocs</translation>
    </message>
    <message>
        <source>Memory Pool</source>
        <translation>Réserve de mémoire</translation>
    </message>
    <message>
        <source>Current number of transactions</source>
        <translation>Nombre actuel de transactions</translation>
    </message>
    <message>
        <source>Memory usage</source>
        <translation>Utilisation de la mémoire</translation>
    </message>
    <message>
        <source>Received</source>
        <translation>Reçu</translation>
    </message>
    <message>
        <source>Sent</source>
        <translation>Envoyé</translation>
    </message>
    <message>
        <source>&amp;Peers</source>
        <translation>&amp;Pairs</translation>
    </message>
    <message>
        <source>Banned peers</source>
        <translation>Pairs bannis</translation>
    </message>
    <message>
        <source>Select a peer to view detailed information.</source>
        <translation>Choisir un pair pour voir l&apos;information détaillée.</translation>
    </message>
    <message>
        <source>Whitelisted</source>
        <translation>Dans la liste blanche</translation>
    </message>
    <message>
        <source>Direction</source>
        <translation>Direction</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Version</translation>
    </message>
    <message>
        <source>Starting Block</source>
        <translation>Bloc de départ</translation>
    </message>
    <message>
        <source>Synced Headers</source>
        <translation>En-têtes synchronisés</translation>
    </message>
    <message>
        <source>Synced Blocks</source>
        <translation>Blocs synchronisés</translation>
    </message>
    <message>
        <source>User Agent</source>
        <translation>Agent utilisateur</translation>
    </message>
    <message>
        <source>Open the %1 debug log file from the current data directory. This can take a few seconds for large log files.</source>
        <translation>Ouvrir le journal de débogage de %1 depuis le répertoire de données actuel. Ceci peut prendre quelques secondes pour les journaux de grande taille.</translation>
    </message>
    <message>
        <source>Services</source>
        <translation>Services</translation>
    </message>
    <message>
        <source>Ban Score</source>
        <translation>Pointage des bannissements</translation>
    </message>
    <message>
        <source>Connection Time</source>
        <translation>Temps de connexion</translation>
    </message>
    <message>
        <source>Last Send</source>
        <translation>Dernier envoi</translation>
    </message>
    <message>
        <source>Last Receive</source>
        <translation>Dernière réception</translation>
    </message>
    <message>
        <source>Ping Time</source>
        <translation>Temps de ping</translation>
    </message>
    <message>
        <source>The duration of a currently outstanding ping.</source>
        <translation>La durée d&apos;un ping actuellement en cours.</translation>
    </message>
    <message>
        <source>Ping Wait</source>
        <translation>Attente du ping</translation>
    </message>
    <message>
        <source>Time Offset</source>
        <translation>Décalage temporel</translation>
    </message>
    <message>
        <source>Last block time</source>
        <translation>Horodatage du dernier bloc</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Ouvrir</translation>
    </message>
    <message>
        <source>&amp;Console</source>
        <translation>&amp;Console</translation>
    </message>
    <message>
        <source>&amp;Network Traffic</source>
        <translation>Trafic &amp;réseau</translation>
    </message>
    <message>
        <source>&amp;Clear</source>
        <translation>&amp;Nettoyer</translation>
    </message>
    <message>
        <source>In:</source>
        <translation>Entrant :</translation>
    </message>
    <message>
        <source>Out:</source>
        <translation>Sortant :</translation>
    </message>
    <message>
        <source>Debug log file</source>
        <translation>Journal de débogage</translation>
    </message>
    <message>
        <source>Clear console</source>
        <translation>Nettoyer la console</translation>
    </message>
    <message>
        <source>&amp;Disconnect Node</source>
        <translation>&amp;Déconnecter le nœud</translation>
    </message>
    <message>
        <source>Ban Node for</source>
        <translation>Bannir le nœud pendant</translation>
    </message>
    <message>
        <source>1 &amp;hour</source>
        <translation>1 &amp;heure</translation>
    </message>
    <message>
        <source>1 &amp;day</source>
        <translation>1 &amp;jour</translation>
    </message>
    <message>
        <source>1 &amp;week</source>
        <translation>1 &amp;semaine</translation>
    </message>
    <message>
        <source>1 &amp;year</source>
        <translation>1 &amp;an</translation>
    </message>
    <message>
        <source>&amp;Unban Node</source>
        <translation>&amp;Réhabiliter le nœud</translation>
    </message>
    <message>
        <source>Welcome to the %1 RPC console.</source>
        <translation>Bienvenue sur la console RPC de %1.</translation>
    </message>
    <message>
        <source>Use up and down arrows to navigate history, and &lt;b&gt;Ctrl-L&lt;/b&gt; to clear screen.</source>
        <translation>Utiliser les touches de curseur pour naviguer dans l&apos;historique et &lt;b&gt;Ctrl-L&lt;/b&gt; pour effacer l&apos;écran.</translation>
    </message>
    <message>
        <source>Type &lt;b&gt;help&lt;/b&gt; for an overview of available commands.</source>
        <translation>Taper &lt;b&gt;help&lt;/b&gt; pour afficher une vue générale des commandes proposées.</translation>
    </message>
    <message>
        <source>%1 B</source>
        <translation>%1 o</translation>
    </message>
    <message>
        <source>%1 KB</source>
        <translation>%1 Ko</translation>
    </message>
    <message>
        <source>%1 MB</source>
        <translation>%1 Mo</translation>
    </message>
    <message>
        <source>%1 GB</source>
        <translation>%1 Go</translation>
    </message>
    <message>
        <source>(node id: %1)</source>
        <translation>(ID de nœud : %1)</translation>
    </message>
    <message>
        <source>via %1</source>
        <translation>par %1</translation>
    </message>
    <message>
        <source>never</source>
        <translation>jamais</translation>
    </message>
    <message>
        <source>Inbound</source>
        <translation>Entrant</translation>
    </message>
    <message>
        <source>Outbound</source>
        <translation>Sortant</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Oui</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Non</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Inconnu</translation>
    </message>
    <message>
        <source>Totals: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ReceiveCoinsDialog</name>
    <message>
        <source>&amp;Amount:</source>
        <translation>&amp;Montant :</translation>
    </message>
    <message>
        <source>&amp;Label:</source>
        <translation>&amp;Étiquette :</translation>
    </message>
    <message>
        <source>&amp;Message:</source>
        <translation>M&amp;essage :</translation>
    </message>
    <message>
        <source>Reuse one of the previously used receiving addresses. Reusing addresses has security and privacy issues. Do not use this unless re-generating a payment request made before.</source>
        <translation>Réutilise une adresse de réception précédemment utilisée. Réutiliser une adresse pose des problèmes de sécurité et de vie privée. N&apos;utilisez pas cette option sauf si vous générez à nouveau une demande de paiement déjà faite.</translation>
    </message>
    <message>
        <source>R&amp;euse an existing receiving address (not recommended)</source>
        <translation>Ré&amp;utiliser une adresse de réception existante (non recommandé)</translation>
    </message>
    <message>
        <source>An optional message to attach to the payment request, which will be displayed when the request is opened. Note: The message will not be sent with the payment over the OctoinCoin network.</source>
        <translation>Un message optionnel à joindre à la demande de paiement qui sera affiché à l&apos;ouverture de celle-ci. Note : le message ne sera pas envoyé avec le paiement par le réseau OctoinCoin.</translation>
    </message>
    <message>
        <source>An optional label to associate with the new receiving address.</source>
        <translation>Un étiquette optionnelle à associer à la nouvelle adresse de réception</translation>
    </message>
    <message>
        <source>Use this form to request payments. All fields are &lt;b&gt;optional&lt;/b&gt;.</source>
        <translation>Utiliser ce formulaire pour demander des paiements. Tous les champs sont  &lt;b&gt;optionnels&lt;/b&gt;.</translation>
    </message>
    <message>
        <source>An optional amount to request. Leave this empty or zero to not request a specific amount.</source>
        <translation>Un montant optionnel à demander. Laisser ceci vide ou à zéro pour ne pas demander de montant spécifique.</translation>
    </message>
    <message>
        <source>Clear all fields of the form.</source>
        <translation>Effacer tous les champs du formulaire.</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation>Effacer</translation>
    </message>
    <message>
        <source>Requested payments history</source>
        <translation>Historique des paiements demandés</translation>
    </message>
    <message>
        <source>&amp;Request payment</source>
        <translation>&amp;Demande de paiement</translation>
    </message>
    <message>
        <source>Show the selected request (does the same as double clicking an entry)</source>
        <translation>Afficher la demande choisie (identique à un double-clic sur une entrée)</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Afficher</translation>
    </message>
    <message>
        <source>Remove the selected entries from the list</source>
        <translation>Enlever les entrées sélectionnées de la liste</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Enlever</translation>
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
        <translation>Code QR</translation>
    </message>
    <message>
        <source>Copy &amp;URI</source>
        <translation>Copier l&apos;&amp;URI</translation>
    </message>
    <message>
        <source>Copy &amp;Address</source>
        <translation>Copier l&apos;&amp;adresse</translation>
    </message>
    <message>
        <source>&amp;Save Image</source>
        <translation>&amp;Sauvegarder l&apos;image...</translation>
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
        <translation type="unfinished">Montant</translation>
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
        <translation type="unfinished">Date</translation>
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
        <translation>Envoyer des pièces</translation>
    </message>
    <message>
        <source>Coin Control Features</source>
        <translation>Fonctions de contrôle des pièces</translation>
    </message>
    <message>
        <source>Inputs...</source>
        <translation>Entrants...</translation>
    </message>
    <message>
        <source>automatically selected</source>
        <translation>choisi automatiquement</translation>
    </message>
    <message>
        <source>Insufficient funds!</source>
        <translation>Fonds insuffisants !</translation>
    </message>
    <message>
        <source>Quantity:</source>
        <translation>Quantité :</translation>
    </message>
    <message>
        <source>Bytes:</source>
        <translation>Octets :</translation>
    </message>
    <message>
        <source>Amount:</source>
        <translation>Montant :</translation>
    </message>
    <message>
        <source>Priority:</source>
        <translation>Priorité :</translation>
    </message>
    <message>
        <source>Fee:</source>
        <translation>Frais :</translation>
    </message>
    <message>
        <source>After Fee:</source>
        <translation>Après les frais :</translation>
    </message>
    <message>
        <source>Change:</source>
        <translation>Monnaie :</translation>
    </message>
    <message>
        <source>If this is activated, but the change address is empty or invalid, change will be sent to a newly generated address.</source>
        <translation>Si ceci est actif mais l&apos;adresse de monnaie rendue est vide ou invalide, la monnaie sera envoyée vers une adresse nouvellement générée.</translation>
    </message>
    <message>
        <source>Custom change address</source>
        <translation>Adresse personnalisée de monnaie rendue</translation>
    </message>
    <message>
        <source>Transaction Fee:</source>
        <translation>Frais de transaction :</translation>
    </message>
    <message>
        <source>Choose...</source>
        <translation>Choisir...</translation>
    </message>
    <message>
        <source>collapse fee-settings</source>
        <translation>réduire les paramètres des frais</translation>
    </message>
    <message>
        <source>per kilobyte</source>
        <translation>par kilo-octet</translation>
    </message>
    <message>
        <source>If the custom fee is set to 1000 satoshis and the transaction is only 250 bytes, then &quot;per kilobyte&quot; only pays 250 satoshis in fee, while &quot;total at least&quot; pays 1000 satoshis. For transactions bigger than a kilobyte both pay by kilobyte.</source>
        <translation>Si les frais personnalisés sont définis à 1 000 satoshis et que la transaction est seulement de 250 octets, donc le « par kilo-octet » ne paiera que 250 satoshis de frais, alors que le « total au moins » paiera 1 000 satoshis. Pour des transactions supérieures à un kilo-octet, les deux paieront par kilo-octets.</translation>
    </message>
    <message>
        <source>Hide</source>
        <translation>Cacher</translation>
    </message>
    <message>
        <source>total at least</source>
        <translation>total au moins</translation>
    </message>
    <message>
        <source>(read the tooltip)</source>
        <translation>(lire l&apos;infobulle)</translation>
    </message>
    <message>
        <source>Recommended:</source>
        <translation>Recommandés :</translation>
    </message>
    <message>
        <source>Custom:</source>
        <translation>Personnalisés : </translation>
    </message>
    <message>
        <source>(Smart fee not initialized yet. This usually takes a few blocks...)</source>
        <translation>(Les frais intelligents ne sont pas encore initialisés. Ceci prend habituellement quelques blocs...)</translation>
    </message>
    <message>
        <source>Confirmation time:</source>
        <translation>Temps de confirmation :</translation>
    </message>
    <message>
        <source>normal</source>
        <translation>normal</translation>
    </message>
    <message>
        <source>fast</source>
        <translation>rapide</translation>
    </message>
    <message>
        <source>Send to multiple recipients at once</source>
        <translation>Envoyer à plusieurs destinataires à la fois</translation>
    </message>
    <message>
        <source>Add &amp;Recipient</source>
        <translation>Ajouter un &amp;destinataire</translation>
    </message>
    <message>
        <source>Clear all fields of the form.</source>
        <translation>Effacer tous les champs du formulaire.</translation>
    </message>
    <message>
        <source>Dust:</source>
        <translation>Poussière :</translation>
    </message>
    <message>
        <source>Clear &amp;All</source>
        <translation>&amp;Tout nettoyer</translation>
    </message>
    <message>
        <source>Balance:</source>
        <translation>Solde :</translation>
    </message>
    <message>
        <source>Confirm the send action</source>
        <translation>Confirmer l’action d&apos;envoi</translation>
    </message>
    <message>
        <source>S&amp;end</source>
        <translation>E&amp;nvoyer</translation>
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
        <translation>&amp;Montant :</translation>
    </message>
    <message>
        <source>Pay &amp;To:</source>
        <translation>&amp;Payer à :</translation>
    </message>
    <message>
        <source>&amp;Label:</source>
        <translation>É&amp;tiquette :</translation>
    </message>
    <message>
        <source>Choose previously used address</source>
        <translation>Choisir une adresse déjà utilisée</translation>
    </message>
    <message>
        <source>This is a normal payment.</source>
        <translation>Ceci est un paiement normal.</translation>
    </message>
    <message>
        <source>The OctoinCoin address to send the payment to.</source>
        <translation>L&apos;adresse OctoinCoin à laquelle envoyer le paiement</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>Paste address from clipboard</source>
        <translation>Coller l&apos;adresse depuis le presse-papiers</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <source>Remove this entry</source>
        <translation>Enlever cette entrée</translation>
    </message>
    <message>
        <source>The fee will be deducted from the amount being sent. The recipient will receive less OctoinCoins than you enter in the amount field. If multiple recipients are selected, the fee is split equally.</source>
        <translation>Les frais seront déduits du montant envoyé. Le destinataire recevra moins de OctoinCoins que le montant saisi dans le champ de montant. Si plusieurs destinataires sont sélectionnés, les frais seront partagés également..</translation>
    </message>
    <message>
        <source>S&amp;ubtract fee from amount</source>
        <translation>S&amp;oustraire les frais du montant</translation>
    </message>
    <message>
        <source>This is an unauthenticated payment request.</source>
        <translation>Cette demande de paiement n&apos;est pas authentifiée.</translation>
    </message>
    <message>
        <source>This is an authenticated payment request.</source>
        <translation>Cette demande de paiement est authentifiée.</translation>
    </message>
    <message>
        <source>Enter a label for this address to add it to the list of used addresses</source>
        <translation>Saisir une étiquette pour cette adresse afin de l&apos;ajouter à la liste d&apos;adresses utilisées</translation>
    </message>
    <message>
        <source>Pay To:</source>
        <translation>Payer à :</translation>
    </message>
    <message>
        <source>Memo:</source>
        <translation>Mémo :</translation>
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
        <translation type="unfinished">Oui</translation>
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
        <source>%1 is shutting down...</source>
        <translation>Arrêt de %1...</translation>
    </message>
    <message>
        <source>Do not shut down the computer until this window disappears.</source>
        <translation>Ne pas fermer l&apos;ordinateur jusqu&apos;à la disparition de cette fenêtre.</translation>
    </message>
</context>
<context>
    <name>SignVerifyMessageDialog</name>
    <message>
        <source>Signatures - Sign / Verify a Message</source>
        <translation>Signatures - Signer / Vérifier un message</translation>
    </message>
    <message>
        <source>&amp;Sign Message</source>
        <translation>&amp;Signer un message</translation>
    </message>
    <message>
        <source>You can sign messages/agreements with your addresses to prove you can receive OctoinCoins sent to them. Be careful not to sign anything vague or random, as phishing attacks may try to trick you into signing your identity over to them. Only sign fully-detailed statements you agree to.</source>
        <translation>Vous pouvez signer des messages/accords avec vos adresses pour prouver que vous pouvez recevoir des OctoinCoins à ces dernières. Faites attention de ne rien signer de vague ou au hasard, car des attaques d&apos;hameçonnage pourraient essayer de vous faire signer avec votre identité afin de l&apos;usurper. Ne signez que des déclarations entièrement détaillées et avec lesquelles vous êtes d&apos;accord.</translation>
    </message>
    <message>
        <source>The OctoinCoin address to sign the message with</source>
        <translation>L&apos;adresse OctoinCoin avec laquelle signer le message</translation>
    </message>
    <message>
        <source>Choose previously used address</source>
        <translation>Choisir une adresse précédemment utilisée</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>Paste address from clipboard</source>
        <translation>Coller une adresse depuis le presse-papiers</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <source>Enter the message you want to sign here</source>
        <translation>Saisir ici le message que vous désirez signer</translation>
    </message>
    <message>
        <source>Signature</source>
        <translation>Signature</translation>
    </message>
    <message>
        <source>Copy the current signature to the system clipboard</source>
        <translation>Copier la signature actuelle dans le presse-papiers</translation>
    </message>
    <message>
        <source>Sign the message to prove you own this OctoinCoin address</source>
        <translation>Signer le message pour prouver que vous détenez cette adresse OctoinCoin</translation>
    </message>
    <message>
        <source>Sign &amp;Message</source>
        <translation>Signer le &amp;message</translation>
    </message>
    <message>
        <source>Reset all sign message fields</source>
        <translation>Réinitialiser tous les champs de signature de message</translation>
    </message>
    <message>
        <source>Clear &amp;All</source>
        <translation>&amp;Tout nettoyer</translation>
    </message>
    <message>
        <source>&amp;Verify Message</source>
        <translation>&amp;Vérifier un message</translation>
    </message>
    <message>
        <source>Enter the receiver&apos;s address, message (ensure you copy line breaks, spaces, tabs, etc. exactly) and signature below to verify the message. Be careful not to read more into the signature than what is in the signed message itself, to avoid being tricked by a man-in-the-middle attack. Note that this only proves the signing party receives with the address, it cannot prove sendership of any transaction!</source>
        <translation>Saisissez ci-dessous l&apos;adresse de destinataire, le message (assurez-vous de copier exactement les retours à la ligne, les espaces, les tabulations, etc.) et la signature pour vérifier le message. Faites attention à ne pas déduire davantage de la signature que ce qui est contenu dans le message signé même, pour éviter d&apos;être trompé par une attaque d&apos;homme du milieu. Notez que ceci ne fait que prouver que le signataire reçoit l&apos;adresse et ne peut pas prouver la provenance d&apos;une transaction.</translation>
    </message>
    <message>
        <source>The OctoinCoin address the message was signed with</source>
        <translation>L&apos;adresse OctoinCoin avec laquelle le message a été signé</translation>
    </message>
    <message>
        <source>Verify the message to ensure it was signed with the specified OctoinCoin address</source>
        <translation>Vérifier le message pour vous assurer qu&apos;il a bien été signé par l&apos;adresse OctoinCoin spécifiée</translation>
    </message>
    <message>
        <source>Verify &amp;Message</source>
        <translation>Vérifier le &amp;message</translation>
    </message>
    <message>
        <source>Reset all verify message fields</source>
        <translation>Réinitialiser tous les champs de vérification de message</translation>
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
        <translation>[testnet]</translation>
    </message>
</context>
<context>
    <name>TrafficGraphWidget</name>
    <message>
        <source>KB/s</source>
        <translation>Ko/s</translation>
    </message>
</context>
<context>
    <name>TransactionDesc</name>
    <message numerus="yes">
        <source>Open for %n more block(s)</source>
        <translation type="unfinished">
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
        </translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished">Date</translation>
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
        <translation type="unfinished">Montant</translation>
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
        <translation>Ce panneau affiche une description détaillée de la transaction</translation>
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
        <translation type="unfinished">Date</translation>
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
        <translation type="unfinished">&amp;Exporter</translation>
    </message>
    <message>
        <source>Export the data in the current tab to a file</source>
        <translation type="unfinished">Exporter les données de l&apos;onglet actuel vers un fichier</translation>
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
        <translation type="unfinished">Confirmée</translation>
    </message>
    <message>
        <source>Watch-only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished">Date</translation>
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
        <translation>Unité d&apos;affichage des montants. Cliquer pour choisir une autre unité.</translation>
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
        <translation type="unfinished">Envoyer des pièces</translation>
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
