import * as firebase from 'firebase';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkbjo-W3supW8bNIpcEoMAyclLuqQabgo",
  authDomain: "buffsci-a.firebaseapp.com",
  databaseURL: "https://buffsci-a.firebaseio.com",
  projectId: "buffsci-a",
  storageBucket: "buffsci-a.appspot.com",
  messagingSenderId: "866795785991",
  appId: "1:866795785991:web:0e1477bc8401131b707fa2",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
