netpoint
========

## Introduction ##
* The object of netpoint is the creation of a customizable webkiosk system based on Debian-Live and Firefox.

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
