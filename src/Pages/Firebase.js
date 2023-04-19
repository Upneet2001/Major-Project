import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAPotJW9iVIFOFqyF32fPCVef3_Juh7ZGM",
    authDomain: "mernproject-a003b.firebaseapp.com",
    projectId: "mernproject-a003b",
    storageBucket: "mernproject-a003b.appspot.com",
    messagingSenderId: "701603805864",
    appId: "1:701603805864:web:cc4882bf6dee173f5be09d"
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.storage();
  export{db};