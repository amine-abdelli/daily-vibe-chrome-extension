document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("notify-button");

  button.addEventListener("click", function () {
    chrome.alarms.create("MyAlarm", { delayInMinutes: 1, periodInMinutes: 1 });
  });
});
