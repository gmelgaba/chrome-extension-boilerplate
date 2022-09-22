/*
  File: popup.js
  Purpose: handle all logic for the popup page
  Author: Gonzalo Melgar

  Copyright (c) 2019
*/

const reload = () => {
  LOGGER.log('Extension reloaded!');
  BROWSER.queryTabs({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0].id;
    BROWSER.sendMessageToTab(currentTab, {
      action: 'reload-extension'
    });
  })
}

$(document).ready(() => {
  $('#reload').click(reload);
});
