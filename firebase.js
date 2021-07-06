import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDy8oBhW2KDUDXZDZ3a3GAV_DttwWpLcxI",
    authDomain: "whatsapp-clone-5ef63.firebaseapp.com",
    projectId: "whatsapp-clone-5ef63",
    storageBucket: "whatsapp-clone-5ef63.appspot.com",
    messagingSenderId: "393786300592",
    appId: "1:393786300592:web:4c973e1ed1dc87544ac375"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app()

  const db = app.firestore();
  const auth = app.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db,auth, provider}