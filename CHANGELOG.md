# ETG Webkit change log

### 0.5.2 (2019-01-16)
* added entry of all resources to web/etgwebkit instead files/etgwebkit, so url is always like URL.TLD/etgwebkit/images/logo.svg
* added a few css selectors to make it compatible to contao 4.6 and future versions.

### 0.5.0 (2018-10-26)

* new feature .band to seperate sections with a background color, use .band--thick, .band--thin, .band--grey, .band--grey-light, default color is brand color.
* now you can use videos in the hero section with content element video. use .hero-background as class, with .hero-background--darken you can dimm the background

### 0.4.1 (2017-6-30)

* introduced forms in infobar with classes .form--light and .form--light--infobar

### 0.4.0 (2017-6-22)

* introduced module hero for hero image with following classes .hero--full-height, .hero--full-height--shorter, .hero--header, .hero-background, .hero-text, .hero-arrow
* added class tiles--darker for a darkened picture, if there is text on a tile it's better readable
* added class hero-arrow to show an arrow down to indicate scrolling 
* implemented hamburger menu and header navigation (first level)
* object-fit-images polyfill needs a width, fixed on bullseye

### 0.3.0 (2017-05-02)

* updated sql template (tested)
* import font Source Sans Pro from Google Fonts directly in webkit
* fixed tiles width for short description text

### 0.2.6 (2017-04-05)

* introduced class _.form--light_ for footer contact form 

### 0.2.5 (2017-03-03)

* added class _.headline-links_ for headlines which should include a link to a page, eg. blog
* changed complete header handling, introduced content section heroImage, always show a header bar (for future menu)
* changed class .opener to _.header--transparent_, use it on body tag for a specific site to have a transparent header bar.
* introduced class .accent to have a container filled with blue and paddinged a bit
*adjusted pagination on .news-grid as there was no padding


### 0.2.4 (2017-03-02)
	
* The changelog just started