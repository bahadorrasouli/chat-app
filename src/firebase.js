import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyArJZwGKNqAQYfyqTZx0mz_YTHS6wTt0zI",
    authDomain: "botogram-c2b70.firebaseapp.com",
    projectId: "botogram-c2b70",
    storageBucket: "botogram-c2b70.appspot.com",
    messagingSenderId: "53258317",
    appId: "1:53258317:web:a1174492d925f6facf5404"
  }).auth();
