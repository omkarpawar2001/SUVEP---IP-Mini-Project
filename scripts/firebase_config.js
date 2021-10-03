const firebaseConfig = {
  apiKey: "AIzaSyAVSiu9wPIt5pV7UEZL75cZyZmgqevERCE",
  authDomain: "suvep-110fd.firebaseapp.com",
  projectId: "suvep-110fd",
  storageBucket: "suvep-110fd.appspot.com",
  messagingSenderId: "80439594750",
  appId: "1:80439594750:web:e7fc6ef085cc9966eedfaf",
  measurementId: "G-R5PL8MZ6GK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;
const storage = firebase.storage();

export { db, auth, storage};
