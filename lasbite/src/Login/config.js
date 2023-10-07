// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCu_tanxfhF4g07eGgdBD06mbks4X_G_EM",
  authDomain: "lasbite-web.firebaseapp.com",
  projectId: "lasbite-web",
  storageBucket: "lasbite-web.appspot.com",
  messagingSenderId: "184736696822",
  appId: "1:184736696822:web:98ae9dcfea6446a9c09fd7",
  measurementId: "G-8TWNY6ZT9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export {auth, provider, facebookProvider};