# Bulletpad PWA
Small app to make notes that are stored locally on your device. Uses HTML5 LocalStorage.

To use the app simply visit https://kafeiinteractif.github.io/bulletpad_pwa/

Upon loading the site it should stay in your offline cache so you can use it
while in airplane mode. After loading the app there is no network activity
  unless you reload and there is a new version of the app available. All your
  notes are stored locally - there are no backups and no sync, by design.

This version acts as a "progressive web app"... so this is using Service Worker
as opposed to Application Cache for offline functionality. To see an example of
Application Cache, look at our bulletpad repo (not bulletpad_pwa).
