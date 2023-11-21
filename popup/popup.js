import {
  endSectionText,
  endSectionTitle,
  greetText,
  greetTitle,
  moodInputText,
  moodInputTitle,
  moodText,
  moodTitle
} from "../scripts/sentences.js";

const LocalStorageKey = 'daily_vibe';

document.addEventListener('DOMContentLoaded', async () => {
  const sections = document.querySelectorAll('.section');
  let moodOfTheDay, currentSentenceOfTheDay, inputDataset = '';

  const storageContent = await chrome.storage.local.get(LocalStorageKey);

  let username;
  if (storageContent?. [LocalStorageKey]) {
    username = Object.keys(storageContent?. [LocalStorageKey])[0];
  }

  let currentSectionIndex = 0;

  function showSection(index) {
    sections.forEach(section => {
      section.style.display = 'none';
    });
    if (sections[index]) {
      sections[index].style.display = 'block';
    }
  }

  !username ? showSection(0) : goToNextSection();


  function goToNextSection() {
    currentSectionIndex++;
    showSection(currentSectionIndex);
  }

  const usernameInput = document.querySelector('#username-input');
  usernameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const _username = event.target.value
      initializeUserData(_username)
      goToNextSection();
    }
  });

  // Inject wordings - first section
  document.querySelector('.greet--title').innerHTML = randomlyPickASentence(greetTitle, username);
  document.querySelector('.greet--text').innerHTML = randomlyPickASentence(greetText, username);
  // second section
  document.querySelector('.mood-picker--title').innerHTML = randomlyPickASentence(moodTitle, username);
  document.querySelector('.mood-picker--text').innerHTML = randomlyPickASentence(moodText, username);
  // Start button
  document.querySelector('#start').addEventListener('click', () => goToNextSection());
  // Mood selector
  document.querySelectorAll('.icon').forEach((element) => {
    element.addEventListener('click', () => {
      moodOfTheDay = element.id;
      inputDataset = element.dataset.mood;
      document.querySelector('.mood-input--title').innerHTML = randomlyPickASentence(moodInputTitle, username);
      document.querySelector('.mood-input--text').innerHTML = randomlyPickASentence(moodInputText[inputDataset], username);
      document.querySelector('#picked-mood-emoji').innerHTML = element.outerHTML;
      goToNextSection();
    });
  });

  document.querySelector('.end-section--title').innerHTML = randomlyPickASentence(endSectionTitle, username);
  document.querySelector('.end-section--text').innerHTML = randomlyPickASentence(endSectionText, username);

  const moodInput = document.querySelector('#mood-input');
  moodInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const currentSentenceOfTheDay = event.target.value
      saveUserMood(username, moodOfTheDay, currentSentenceOfTheDay);
      goToNextSection();
    }
  });
  const journeyButton = document.querySelector('#journey-button');
  journeyButton.addEventListener('click', () => {
    goToNextSection();
  });
});


function randomlyPickASentence(array, _username) {
  return array[Math.floor(Math.random() * array.length)].replace(':username', _username);
}

function initializeUserData(username) {
  chrome.storage.local.get(LocalStorageKey, function (result) {
    if (result.daily_vibe === undefined) {
      chrome.storage.local.set({
        [LocalStorageKey]: {
          [username]: {}
        }
      });
    }
  });
}

function saveUserMood(username, mood, sentence) {
  const today = new Date().toISOString().split('T')[0];
  const userData = {
    [today]: {
      mood: mood,
      sentence: sentence
    }
  };

  chrome.storage.local.get([username], function (result) {
    chrome.storage.local.set({
      [LocalStorageKey]: {
        ...result?.daily_vibe,
        [username]: {
          ...result?.daily_vibe?. [username],
          ...userData
        }
      }
    });
  });
}

function getUserMoodHistory(username, callback) {
  chrome.storage.local.get([username], function (result) {
    callback(result[username] || {});
  });
}