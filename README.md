sebian
======

## Introduction ##
* The object of sebian is the creation of a customizable webkiosk system based on Debian-Live and Safe-Exam-Browser.

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
git clone https://github.com/eqsoft/sebian
cd sebian
```

* edit basic config files

edit packages
```bash
config/package-lists/*.chroot
```
edit openbox configs (permitted keys, mouse and menu)
```bash
config/includes.chroot/etc/skel/.config/openbox/*
```
edit seb config (permitted keys, mouse and menu)
```bash
config/includes.chroot/opt/seb/apps/chrome/defaults/seb/config.default.json
```
edit live config (see examples config.iso, config.net)
```bash
auto/config
```
create image
```bash
./build.sh
```


## Documentation ##
* Debian-Live: http://live.debian.net/manual/stable/html/live-manual.en.html
* Openbox: http://openbox.org/wiki/Help:Contents
* seb: https://github.com/eqsoft/seb/blob/master/doc.md
