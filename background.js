// Background.js script for Chrome/Firefox extension

// When chatgpt.com is loaded, inject the content script
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    console.log("Tab loaded:", tab.url);

    // Use Chrome MV3 API if available, otherwise fallback to Firefox / Chrome MV2
    if (chrome.scripting) {
      // Chrome MV3
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js']
      });
    } else {
      // Firefox / Chrome MV2 fallback
      chrome.tabs.executeScript(tabId, { file: 'content.js' });
    }
  }
});