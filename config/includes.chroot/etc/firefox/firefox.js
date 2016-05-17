lockPref("extensions.update.enabled", false);

// Use LANG environment variable to choose locale
lockPref("intl.locale.matchOS", true);

// Disable default browser checking.
lockPref("browser.shell.checkDefaultBrowser", false);

// Custom Netpoint
// Start Address
lockPref("browser.startup.homepage","http://github.com/eqsoft/netpoint/");
// Don't hide url bar
lockPref("browser.fullscreen.autohide",false);
// Disable Health Report
lockPref("datareporting.healthreport.service.enabled",false);
// Disable platform filepicker 
// (see also disabled chrome://global/content/filepicker.xul in /usr/lib/firefox/browser/chrome.manifest)
lockPref("ui.allow_platform_file_picker",false);
// from porteus
lockPref("accessibility.browsewithcaret_shortcut.enabled", false);
lockPref("app.update.auto", false);
lockPref("app.update.enabled", false);
lockPref("browser.backspace_action", 0);
lockPref("browser.bookmarks.restore_default_bookmarks", false);
lockPref("browser.cache.disk.capacity", 0);
lockPref("browser.cache.disk.smart_size.enabled", false);
lockPref("browser.cache.disk.smart_size.first_run", false);
lockPref("browser.fullscreen.animateUp", 0);
lockPref("browser.link.open_newwindow.disabled_in_fullscreen", true);
lockPref("browser.link.open_newwindow.restriction", 0);
lockPref("browser.migration.version", 27);
lockPref("browser.newtab.url", "about:blank");
lockPref("browser.newtabpage.directory.ping", "");
lockPref("browser.newtabpage.directory.source", 'data:application/json,{}');
lockPref("browser.newtabpage.enabled", false);
lockPref("browser.newtabpage.enhanced", false);
lockPref("browser.newtabpage.introShown", true);
lockPref("browser.privatebrowsing.autostart", true);
lockPref("browser.privatebrowsing.dont_prompt_on_enter", true);
lockPref("browser.rights.3.shown", true);
lockPref("browser.safebrowsing.appRepURL", "");
lockPref("browser.safebrowsing.enabled", false);
lockPref("browser.safebrowsing.updateURL", "");
lockPref("browser.search.defaultenginename", "DuckDuckGo (SSL)");
lockPref("browser.search.order.1", "DuckDuckGo");
lockPref("browser.search.update", false);
lockPref("browser.selfsupport.url", "");
lockPref("browser.sessionstore.resume_from_crash", false);
lockPref("browser.shell.checkDefaultBrowser", false);
lockPref("browser.startup.homepage_override.mstone", "ignore");
lockPref("browser.tabs.onTop", false);
lockPref("browser.tabs.warnOnClose", false);
lockPref("browser.tabs.warnOnCloseOtherTabs", false);
lockPref("browser.tabs.warnOnOpen", false);
lockPref("datareporting.healthreport.uploadEnabled", false);
lockPref("datareporting.policy.dataSubmissionEnabled", false);
lockPref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
lockPref("dom.max_chrome_script_run_time", 0);
lockPref("dom.max_script_run_time", 0);
lockPref("extensions.blocklist.enabled", false);
lockPref("extensions.update.autoUpdateDefault", false);
lockPref("full-screen-api.approval-required", false);
lockPref("keyword.URL", "https://duckduckgo.com/?t=porteus&q=");
lockPref("media.fragmented-mp4.exposed", true);
lockPref("media.fragmented-mp4.ffmpeg.enabled", true);
lockPref("media.gmp-gmpopenh264.autoupdate", false);
lockPref("media.gmp-gmpopenh264.enabled", false);
lockPref("media.gmp-gmpopenh264.provider.enabled", false);
lockPref("network.negotiate-auth.allow-insecure-ntlm-v1", true);
lockPref("network.automatic-ntlm-auth.allow-non-fqdn", true);
lockPref("network.protocol-handler.external.mailto", false);
lockPref("network.protocol-handler.external.news", false);
lockPref("network.protocol-handler.external.nntp", false);
lockPref("network.protocol-handler.external.snews", false);
lockPref("plugin.default.state", 2);
lockPref("plugin.state.java", 2);
lockPref("plugins.hide_infobar_for_missing_plugin", true);
lockPref("plugins.hide_infobar_for_outdated_plugin", true);
lockPref("plugins.notifyMissingFlash", false);
lockPref("security.warn_entering_weak", false);
lockPref("security.warn_entering_weak.show_once", false);
lockPref("security.warn_viewing_mixed", false);
lockPref("security.warn_viewing_mixed.show_once", false);
lockPref("signon.autologin.proxy", true);
lockPref("signon.rememberSignons", false);
lockPref("ui.key.menuAccessKeyFocuses", false);
// some additional settings will follow
lockPref("reader.parse-on-load.enabled", false);
lockPref("browser.pocket.enabled", false);
lockPref("media.peerconnection.enabled", false);
lockPref("loop.enabled",false);
lockPref("devtools.toolbar.enabled", false);
lockPref("devtools.inspector.enabled", false);
lockPref("devtools.inspector.enabled", false);
lockPref("devtools.appmananger.enabled", false);
lockPref("devtools.debugger.enabled", false);
lockPref("devtools.netmonitor.enabled", false);
lockPref("devtools.performance.enabled", false);
lockPref("devtools.webide.enabled", false);
lockPref("devtools.styleditor.enabled", false);
lockPref("devtools.fontinspector.enabled", false);
lockPref("devtools.toolbox.host", "");
lockPref("devtools.command-button-frames.enabled", false);
lockPref("devtools.command-button-pick.enabled", false);
lockPref("devtools.command-button-responsive.enabled", false);
lockPref("devtools.command-button-splitconsole.enabled", false);
