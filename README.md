netpoint
========

## Introduction ##
* A customizable webkiosk system based on Debian-Live and Firefox / seb.

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

## Documentation of config file ##
Most of the netpoint settings can be given by kernel paramters in --bootappend-live

##### xbrowser (recommanded, otherwise no browser starts) #####
```bash
xbrowser=seb|firefox
```
A current iceweasel (firefox version of debian) and seb (https://github.com/eqsoft/seb) are installed on build time. 
You can choose the base browser system to use in your webkiosk.

##### xbrowseropts (optional) #####
examples:
```bash
xbrowseropts=-url,http://ipxe.org
```
```bash
xbrowseropts=-jsconole
```
The given option string will be added to the browser process call ("," is replaced by " ").
For more infos:
* firefox: https://developer.mozilla.org/en-US/docs/Mozilla/Command_Line_Options
* seb: https://github.com/eqsoft/seb/blob/master/doc.md
   
##### xpanel (optional) #####
```bash
xpanel=0|1
```
Switches panel on desktop on|off 

##### xexit (optional) #####
```bash
xexit=0|1
```
Switches exit icon on panel on|off 

##### xterminal (optional) #####
```bash
xterminal=0|1
```
Switches terminal icon on panel on|off 

##### xscreensaver (optional) #####
```bash
xscreensaver=0|1
```
Switches xscreensaver on|off

##### xscreensaverwatch (optional) #####
```bash
xscreensaverwatch=0|1
```
Switches xscreensaverwatch on|off (see config/includes.chroot/usr/local/bin/start_xscreensaver_watch). 
The script resets the browser for displaying the startpage on screensaver activation after 10 min inactivity.  

##### username (mandatory!) #####
example ("npuser" can be changed):
```bash
username=npuser
```
The netpoint user name.

##### rtckey (mandatory!) #####
example ("RTCKEY" can be changed):
```bash
rtckey=RTCKEY
```
The RTCKEY (Runtime Config Key) is used for netpoint and root user password.
Usable with xpanel=1 and xterminal=1, ssh login with password is not allowed.

##### rtcuseragent (mandatory!) #####
example ("RTCUSERAGENT" can be changed):
```bash
rtcuseragent=RTCUSERAGENT
```
docu in progress...

##### rtcrepo (optional) #####
example:
```bash
rtcrepo=git@github.com:eqsoft/nprtc
```
docu in progress...

##### rtcgrp (optional) #####
example:
```bash
rtcgrp=master
```
docu in progress...

##### rtchost (optional) #####
example:
```bash
rtchost=0|1
```
docu in progress...

 
## Further Documentation ##
* Debian-Live: http://live.debian.net/manual/stable/html/live-manual.en.html
* Openbox: http://openbox.org/wiki/Help:Contents
* SEB: https://github.com/eqsoft/seb
