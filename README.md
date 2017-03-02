# etgwebkit

#Installation
Das ETG Webkit basiert auf dem CMS Contao in Version 4. Eine Anleitung zur Installation von Contao findet sich hier.

###Vorbereitung: Composer auf Uberspace
Hinweis: Falls das ETG Webkit auf einem neu eingerichtet Uberspace-Account installiert werden soll, muss Composer zuerst installiert werden:
`curl -sS https://getcomposer.org/installer | php -- --filename=composer --install-dir=$HOME/bin


1. Contao installieren per Composer
`composer create-project contao/managed-edition ORDNERNAME`

2. Abhänigkeiten installieren
`composer require etgwebkit/etgwebkit`

3. Contao Installation ausführen
/install.php

4. Im Installationstool Template importieren

5. Einloggen mit Username und Passwort