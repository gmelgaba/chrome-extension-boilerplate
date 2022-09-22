'use strict';

window.STORAGE_KEYS = (() => {

  const prefix = CONSTANTS.appname;

  return {

    // Stores the current settings of the whole extension.
    settings: `${prefix}-settings`,

  }

})();
