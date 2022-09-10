// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAvxS3kiB28yNRm8zxOshui_G8zGQrq1nE",
    authDomain: "crudfire-a8e3c.firebaseapp.com",
    projectId: "crudfire-a8e3c",
    storageBucket: "crudfire-a8e3c.appspot.com",
    messagingSenderId: "271829595121",
    appId: "1:271829595121:web:9c820e27877c315f27ca50"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}


/* 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvxS3kiB28yNRm8zxOshui_G8zGQrq1nE",
  authDomain: "crudfire-a8e3c.firebaseapp.com",
  projectId: "crudfire-a8e3c",
  storageBucket: "crudfire-a8e3c.appspot.com",
  messagingSenderId: "271829595121",
  appId: "1:271829595121:web:9c820e27877c315f27ca50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/ 