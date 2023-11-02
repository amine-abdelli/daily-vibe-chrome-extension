/* handles and listens for browser events - runs in background */

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log('Got an alarm!', alarm);
});

chrome.action.setBadgeText({text: 'ON'});
chrome.action.setBadgeBackgroundColor({color: '#4688F1'});