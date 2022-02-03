function toggleConsent() {
  var cookieConsent = document.getElementById("cookieconsent-background");
  cookieConsent.classList.toggle("active");
}

function cookieConsent() {
  if(typeof(Storage) !== "undefined") {
    if(window.localStorage.getItem("cookieSettings") == null) {
      toggleConsent();
    }
  }
}

function forceCookieConsent() {
  toggleConsent();
}

function updateSettings(essential, advancements, personalizedContent, analyzes) {
  var settings = {'essential': essential, 'advancements': advancements, 'personalizedContent': personalizedContent, 'analyzes': analyzes};

  window.localStorage.setItem("cookieSettings", JSON.stringify(settings));
}

function acceptAll() {
  updateSettings(true, true, true, true);
  toggleConsent();
}

function openSettings() {
  var cookieGeneral = document.getElementById("cookieconsent-general");
  cookieGeneral.classList.toggle("active");

  var cookieSettings = document.getElementById("cookieconsent-settings");
  cookieSettings.classList.toggle("active");
}

function toggleInformation(id) {
  if(id == 1) {
    document.getElementById("cookieconsent-setting-information-general").classList.toggle("active");
  } else if(id == 2) {
    document.getElementById("cookieconsent-setting-information-advancements").classList.toggle("active");
  } else if(id == 3) {
    document.getElementById("cookieconsent-setting-information-personalized-content").classList.toggle("active");
  } else if(id == 4) {
    document.getElementById("cookieconsent-setting-information-analyzes").classList.toggle("active");
  }
}

function confirmCookieSettings() {
  var essential = document.getElementById("cookieconsent-setting-essential-checkbox").checked;
  var advancements = document.getElementById("cookieconsent-setting-advancements-checkbox").checked;
  var personalizedContent = document.getElementById("cookieconsent-setting-personalized-content-checkbox").checked;
  var analyzes = document.getElementById("cookieconsent-setting-analyzes-checkbox").checked;

  updateSettings(essential, advancements, personalizedContent, analyzes);
  toggleConsent();
}
