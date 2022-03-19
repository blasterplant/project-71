import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDFTN9VqWNEMGSaiKVyjlkmypJMkuDQrF4",
    authDomain: "e-ride-d3a22.firebaseapp.com",
    projectId: "e-ride-d3a22",
    storageBucket: "e-ride-d3a22.appspot.com",
    messagingSenderId: "1035957581607",
    appId: "1:1035957581607:web:cc4869eedf7ff392fd9b02"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
