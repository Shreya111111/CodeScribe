// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNvtS9Vl9RMHV5tQejqrRzR7q39dlghIE",
  authDomain: "codeyash-5018a.firebaseapp.com",
  projectId: "codeyash-5018a",
  storageBucket: "codeyash-5018a.appspot.com",
  messagingSenderId: "867753656604",
  appId: "1:867753656604:web:c29bd87a5c162dc96ebad9",
  measurementId: "G-HRDLF9LS2V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
