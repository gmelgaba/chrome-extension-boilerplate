'use strict';

window.LOGGER = (() => {

  const prefix = '[chrome-extension-boilerplate]';
  const BLUE_BG_ORANGE_TEXT = 'background: #232F3E; color: #d67f42';
  const BLUE_BG_WHITE_TEXT = 'background: #232F3E; color: #FFFFFF';

  return {

    group: (message) => {
      console.groupCollapsed(`%c ${prefix} %c ${message} `, BLUE_BG_ORANGE_TEXT, BLUE_BG_WHITE_TEXT);
    },

    groupEnd: () => {
      console.groupEnd();
    },

    log: (message, obj) => {
      if (obj) {
        console.log(`%c ${prefix} %c ${message} `, BLUE_BG_ORANGE_TEXT, BLUE_BG_WHITE_TEXT, obj);
      } else {
        console.log(`%c ${prefix} %c ${message} `, BLUE_BG_ORANGE_TEXT, BLUE_BG_WHITE_TEXT);
      }
    }

  }

})();
