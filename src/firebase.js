import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: "space-chat-4ce05.firebaseapp.com",
    projectId: "space-chat-4ce05",
    storageBucket: "space-chat-4ce05.appspot.com",
    messagingSenderId: process.env.REACT_APP_FB_MSG_ID,
    appId: process.env.REACT_APP_FB_APP_ID,
  })
  .auth();
