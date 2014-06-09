// This is the Debian specific preferences file for Iceweasel
// You can make any change in here, it is the purpose of this file.
// You can, with this file and all files present in the
// /etc/iceweasel/pref directory, override any preference that is
// present in /usr/lib/iceweasel/defaults/preferences directory.
// While your changes will be kept on upgrade if you modify files in
// /etc/iceweasel/pref, please note that they won't be kept if you
// do make your changes in /usr/lib/iceweasel/defaults/preferences.
//
// Note that lockPref is allowed in these preferences files if you
// don't want users to be able to override some preferences.

lockPref("extensions.update.enabled", false);

// Use LANG environment variable to choose locale
lockPref("intl.locale.matchOS", true);

// Disable default browser checking.
lockPref("browser.shell.checkDefaultBrowser", false);

// Custom Netpoint

// Start Address
lockPref("browser.startup.homepage","http://www.heise.de/");
// Don't hide url bar
lockPref("browser.fullscreen.autohide",false);
// Always start in private Modus
lockPref("browser.privatebrowsing.autostart",true);
// Disable Health Report
lockPref("datareporting.healthreport.service.enabled",true);

