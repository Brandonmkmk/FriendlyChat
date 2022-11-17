/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyB6NW74MRLP59QIIx1YtZGPtIMju7GimYY",
  authDomain: "friendlychat-7591b.firebaseapp.com",
  projectId: "friendlychat-7591b",
  storageBucket: "friendlychat-7591b.appspot.com",
  messagingSenderId: "305569563977",
  appId: "1:305569563977:web:8f7649d1ad26460daf0698"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}