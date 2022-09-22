/*
  File: content.js
  Purpose: handle all logic for the content script
  Author: Gonzalo Melgar

  Copyright (c) 2019
*/

// ---------
// Constants
// ---------

const HOST = `${window.location.protocol}//${window.location.hostname}`;

// ---------------
// Boolean methods
// ---------------

const isInjectionPresent = () => {
  return !!$('#chrome-extension-data-box').length;
};

// -----------------
// Injection methods
// -----------------

const injectDataPanel = () => {
  const $text = $('<p>');

  // Content box
  const $content = $('<div>', { id: 'chrome-extension-data-box' });
  $content.append($text);

  // Body container, replace this in case you want a different container
  const $container = $('body');
  $container.prepend($content);
};

const injectExtension = () => {

  if (isInjectionPresent()) {
    $('#chrome-extension-data-box').remove();
  }

  injectDataPanel();

};

// ----------------
// Message Listener
// ----------------

BROWSER.addMessageListener((request, sender, sendResponse) => {
  LOGGER.log('message received', request.action);
  switch (request.action) {
    case 'inject-data-panel':
      injectDataPanel();
      break;
    case 'reload-extension':
      injectExtension();
      break;
    default:
      break;
  }
});

SETTINGS.loadConfiguration(() => {
  injectExtension();
});
