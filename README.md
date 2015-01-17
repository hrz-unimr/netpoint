netpoint
========

## Introduction ##
* A customizable webkiosk system based on Debian-Live and Firefox (Iceweasel) or seb.

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
git clone https://github.com/hrz-unimr/netpoint
cd netpoint
```

* edit basic config files

edit packages
```bash
config/package-lists/*.chroot
```

take a look at the files in the included root filesystem:  
```bash
config/includes.chroot/*
```

Copy config.iso or config.net to auto/config. See examples/config.seb.* for Safe-Exam-Browser 
```bash
cp config.iso auto/config
```
create image
```bash
./build.sh
```

* deploy binaries
```bash
binary.hybrid.iso
```
or
```bash
binary.netboot.tar
```
docu in progress...

## Documentation of config file ##
Most of the netpoint settings can be given by kernel paramters in --bootappend-live
In a netboot scenario the kernel params can be defined dynamically in the tftp boot file.

##### xbrowser (recommanded, otherwise no browser starts) #####
```bash
xbrowser=seb|firefox
```
A current iceweasel (firefox version of debian) and seb (https://github.com/eqsoft/seb) are installed on build time. 
You can choose the base browser system to use in your webkiosk.

##### xbrowseropts (optional) #####
example firefox:
```bash
xbrowseropts=-url,http://ipxe.org
```
example seb (debug):
```bash
xbrowseropts=-jsconole,-purgecaches,debug,1
```
The given option string will be added to the browser process call ("," are replaced by " ").
For more infos:
* firefox: https://developer.mozilla.org/en-US/docs/Mozilla/Command_Line_Options
* seb: https://github.com/eqsoft/seb/blob/master/doc.md
   
##### xpanel (optional) #####
```bash
xpanel=0|1
```
Switches panel on desktop on|off 
The tint2 panel can be configured in etc/skel/.config/tint2/tint2rc

##### xexit (optional) #####
```bash
xexit=0|1
```
Switches exit icon on panel on|off 
Exit restarts the X System with xbrowser and resets the profile folder to default. Any downloaded files to the profile get lost. 

##### xterminal (optional) #####
```bash
xterminal=0|1
```
Switches terminal icon on panel on|off
The terminal can be used for debugging a client image. You can sudo to the root with rtckey
Normally you will only access the clients by root and ssh key. The password login is disabled so your pubkey should be added in etc/ssh/autorized_keys.
If "debug " is enabled in kernel params the logfiles in /var/log and the /proc/cmdline will be preserved after image boot. 
Beware that rtckey and rtcagent are listed in those files, so be sure that there is no way for a user to break off the kiosk or just delete "debug " from kernel params.   

##### xscreensaver (optional) #####
```bash
xscreensaver=0|1
```
Switches xscreensaver on|off
The screensaver can be configured in etc/skel/.xscreensaver 

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
The RTCKEY (RunTime Config KEY) is used for netpoint and root user password.
The key must also be the password for the private key if rtcssh parameter is used. 

##### rtcssh (optional) #####

```bash
rtcssh=0|1
```
If set to 1 a ssh-agent starts with the identities private key in /etc/ssh/id_dsa|id_rsa|id_dss
The password of the private key must be set to the rtckey param.  

##### rtcagent (optional) #####

example ("RTCAGENT" can be changed):
```bash
rtcagent=RTCAGENT
```

The rtcagent replaces the wget default user-agent from the systems http-requests i.e. fetching the filesystem.squashfs from a webserver in the initrd.img or loading any rtcrepos from a tgz file. 
So you can restrict the webserver access to the image itself, no other browser or webclienst should be able to download those files. 

Beware that the kernel params of the tftp boot files are clear text readable in the network!
For a more secure way the rtckey and the rtcagent could be compiled into an ipxe kernel and the ipxe scripts with the emebedded boot params are created dynamically via web script. 

##### rtcrepo (optional) #####
```bash
rtcrepo=git|tgz
```
The images can be configured on boot time by git repos or just tgz files from a webserver. 
The files in "fs_overlay/*" are fetched for overlaying the root filesystem.
If the ssh-agent is switched on and started successfully the url might be a git ssh call.

giturl example with rtcssh:
```bash
giturl=git@github.com:hrz-unimr/nprtc
```
giturl example without rtcssh:
```bash
giturl=https://github.com/hrz-unimr/nprtc
```
rtcrepo=git also needs some more params:
examples (rtcssh=1):
```bash
rtckey=RTCKEY
rtcssh=1
rtcrepo=git
giturl=git@github.com:hrz-unimr/nprtc
gitreponame=nprtc
gitbranch=master
githost=0
```
or (rtcssh=0 and githost=1)
```bash
rtckey=RTCKEY
rtcssh=0
rtcrepo=git
giturl=https://github.com/hrz-unimr/nprtc
gitreponame=nprtc
gitbranch=master
githost=1
```

The format of the git ssh calls are different between some providers (github, gitolite, ...). So to avoid parsing the giturl to get the reponame the gitreponame MUST explicitly be set.
First a branch will be loaded (i.e. gitbranch=master). After that the system tries to get a branch with the clients hostname (if githost=1) 
The branch MUST contain a root folder fs_overlay/* with a root filesystem structure.      
So you can define a global rtcrepo loaded by all clients and an additional host repo for a special client which overloads the first global repo.    

tgzurl example full url:

```bash
tgzurl=https://192.168.16.12/tgzrepo/pool1.tgz
tgzhost=0
```

tgzurl example with HOSTNAME.tgz:

```bash
tgzurl=https://192.168.16.12/tgzrepo
tgzhost=1
```

A simple way for overlaying the root filesystem on boot time is providing a tgz archive on a webserver with a root folder fs_overly and a root filesystem structure.
This can either be a full url to a tgz file or an archive with a HOSTNAME.tgz. This is not as flexible as the git repo, because the clients can only be configured with one tgz file (tgzhost=0)
or every client gets his own host tgz file.
The wget clients user-agent is set to the rtcagent param, so requests can be restricted to the image itself (see rtcagent)       

#### citrix support ####
An embedded citrix reciever (ica-client) can be used to establish a windows desktop or single application session via citrix virtual desktop.
If you have a Citrix Server infrastructure and you just want to deploy personal windows desktops to your kiosk clients, you can start a seb with the autostart url of your citrix storeweb service with an interactive user login.
After user login the embedded citrix client will start the citrix session. 

At the Philipps-University Marburg iPads, PCs and Notebooks are using the citrix reciever for the same virtual windows desktop or just browser applications that are running on citrix server farm.
Therefore we need an autologin with restricted system accounts without interactive citrix user login. 
For this purpose you can trigger a PNAgent login with fix user and password settings:
 
##### xcitrix  (optional)  #####
To automatically login the kiosk clients into a citrix system account, xcitrix hast to be activated with appropriate setting params:

```bash
xcitrix=1
xcitrixusername=USERNAME
xcitrixpassword=PASSWORD
xcitrixdn=DOMAINNAME
xcitrixserver=https://CITRIXHOSTNAME/Citrix/Store/PNAgent/config.xml
xcitrixapp=APPNAME
```

*Comment: The PNAgent login is marked depricated and maybe the support will be cancled. So we have to take care on ica-client and CitrixServer updates.
Citrix wants to force an interactive userlogin via storeweb but i think they have to sustain an alternative way for session autologins like the PNAgent feature.*

Usually you don't want an extra browser, panel or other Linux desktop components to be started:

```bash
xpanel=0
xbrowser=0
xterminal=0
```

Important: in any case you need username and password (rtckey) for your Linux environment  (see above)!

To minimize licence costs it is possible to dynamically assign different hardare clients (hosts) to a pool of citrix accounts with a hostname mapping:

```bash
xcitrixusername=HOSTMAP
```

Insert a Hostmap file: 

```bash
/usr/local/bin/hostmap
```

with mapping entries like:

```bash
hostname1=citrixaccount1
hostname2=citrixaccount2
hostname3=citrixaccount3
......

```

The citrix username will be replaced with the hostname entry for the citrix session login. The password is the same for all hosts (xcitrixpassword in the kernel params).

## Further Documentation ##
* Debian-Live: http://live.debian.net/manual/stable/html/live-manual.en.html
* Openbox: http://openbox.org/wiki/Help:Contents
* seb: https://github.com/eqsoft/seb
* Linux Citrix Reciever (ica-client): http://www.citrix.com/downloads/citrix-receiver/linux/receiver-for-linux-131.html
* Citrix ica-client 13.1 full documentation: http://www.citrix.com/content/dam/citrix/en_us/documents/downloads/citrix-receiver/linux-oem-guide-13-1.pdf

