'use strict';

window.SETTINGS = (() => {

  const defaultSettings = {
    extensionOn: true,
    debugMode: false,
    settingsStorageKey: STORAGE_KEYS.settings
  }

  const _loadConfiguration = async (callback) => {
    const storageKey = STORAGE_KEYS.settings;
    BROWSER.storage.get(storageKey, (data) => {
      const settings = data[storageKey] && data[storageKey].settings;
      if (!settings || !settings.suppliers) {
        LOGGER.group('>>>>> Loading default settings');
        console.log('Settings not found.');
        console.log('Adding default settings', defaultSettings);
        LOGGER.groupEnd();
        BROWSER.storage.set({
          [storageKey]: {
            settings: defaultSettings
          }
        }, callback);
      } else {
        callback();
      }
    });
  }

  return {

    loadConfiguration: _loadConfiguration

  }

})();
