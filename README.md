netpoint
========

## Introduction ##
* The object of netpoint is the creation of a customizable webkiosk system based on Debian-Live and Firefox / SEB.

## Requirements ##
* Debian Linux (Wheezy recommended)

```bash
apt-get install live-build live-config live-boot
```
* git

```bash
apt-get install git
```

## Quickstart ##
* get repository

```bash
cd ~
git clone https://github.com/eqsoft/netpoint
cd netpoint
```

* edit basic config files

edit packages
```bash
config/package-lists/*.chroot
```
edit openbox configs (permitted keys, mouse and menu)
```bash
config/includes.chroot/etc/xdg/openbox/*
```
Copy config.iso or config.net to auto/config. See examples/config.seb.* for Safe-Exam-Browser 
```bash
cp config.iso auto/config
```
create image
```bash
./build.sh
```

## documentation of config file ##
Most of the settings can be given by kernel paramters in --bootappend-live

##### xbrowser #####
```bash
xbrowser=seb|firefox
```
A current iceweasel (firefox version of debian) and seb (https://github.com/eqsoft/seb) are installed on build time. 
You can choose the base browser system to use in your webkiosk.

   
## Further Documentation ##
* Debian-Live: http://live.debian.net/manual/stable/html/live-manual.en.html
* Openbox: http://openbox.org/wiki/Help:Contents
* SEB: https://github.com/eqsoft/seb
