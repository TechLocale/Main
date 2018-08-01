import * as firebase from 'firebase';


  const firebaseConfig = {
    apiKey: "AIzaSyAO-QYXY3xqD8Ha2iWQDQaO8CCFJVVPzvI",
    authDomain: "local-e-pal.firebaseapp.com",
    databaseURL: "https://local-e-pal.firebaseio.com",
    projectId: "local-e-pal",
    storageBucket: "local-e-pal.appspot.com",
    messagingSenderId: "149609891992"
  };

  export default !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
