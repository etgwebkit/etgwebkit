![ETG Webkit Logo](https://etgwebkit.diging.de/files/github/etgwebkit-icon.png)

# Installation
Das ETG Webkit basiert auf dem CMS Contao in Version 4. Eine Anleitung zur Installation von Contao findet sich hier.

### Vorbereitung: Composer auf Uberspace
> _Hinweis: Falls das ETG Webkit auf einem neu eingerichteten Uberspace-Account installiert werden soll, muss Composer zuerst installiert werden:_
`curl -sS https://getcomposer.org/installer | php -- --filename=composer --install-dir=$HOME/bin`

## Installationsanleitung
1. **Contao installieren über Composer**

    `composer create-project contao/managed-edition ORDNERNAME`

2. **DocumentRoot auf das Unterverzeichnis "web" festlegen,** 
    
    z.B. über die Admin-Einstellungen beim Hoster oder z.B. bei Uberspace über einen [Symlink][2].
    > Ausführliche Informationen zur Ordnerstruktur befindet sich im [Cookbook][1] (Englisch)

3. **Contao Installationstool ausführen:**

    https://DOMAIN/contao/install

4. **Abhängigkeiten installieren**

    `composer require etgwebkit/etgwebkit`

5. **Datenbankupdate in der Contao Installation durchführen**
    
    https://DOMAIN/install.php

    Button: "Datenbank aktualisieren" klicken.

6. **Im Installationstool Template importieren**

	Unter "Ein Template" importieren das Template etgwebkit.sql auswählen und importieren.

7. **Adminbenutzer festlegen**

    
8. **Installation abgeschlossen**

	Login im Backend mit zuvor erstelltem Benutzername.


[1]: https://docs.contao.org/books/cookbook/en/folder-structure.html
[2]: https://wiki.uberspace.de/domain:subdomain