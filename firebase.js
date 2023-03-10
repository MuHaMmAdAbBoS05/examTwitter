// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2G_ZIrIejZgR34NRJo52Togvlmxtmf0w",
    authDomain: "twitter-exam.firebaseapp.com",
    projectId: "twitter-exam",
    storageBucket: "twitter-exam.appspot.com",
    messagingSenderId: "746533289839",
    appId: "1:746533289839:web:389bd6bc6a1cfa66a6b29a"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
