# Simple Webkit for ETG Churches

#Installation
Das ETG Webkit basiert auf dem CMS Contao in Version 4. Eine Anleitung zur Installation von Contao findet sich hier.

###Vorbereitung: Composer auf Uberspace
Hinweis: Falls das ETG Webkit auf einem neu eingerichtet Uberspace-Account installiert werden soll, muss Composer zuerst installiert werden:
`curl -sS https://getcomposer.org/installer | php -- --filename=composer --install-dir=$HOME/bin`


1. Contao installieren per Composer
`composer create-project contao/managed-edition ORDNERNAME`

2. DocumentRoot auf das Unterverzeichnis "web" festlegen

3. Contao Installation ausführen
/install.php

4. composer.json anpassen
Dieser Extra Schritt ist solange nötig, wie @heimrichhannot/contao-slick für Contao 4 offiziell angeboten wird.

	`"repositories": [
    	{
      	"type": "vcs",
      	"url": "https://github.com/etgwebkit/contao-slick"
    	}
  	],`
 

 	`"require":{
 		...
 		"etgwebkit/etgwebkit": "^0.2",
    	"heimrichhannot/contao-slick": "@dev"
 	}
 	`

~~4. Abhänigkeiten installieren

`composer require etgwebkit/etgwebkit`~~

5. Datenbankupdate in der Contao Installation durchführen

6. Im Installationstool Template importieren

7. Einloggen mit Username und Passwort