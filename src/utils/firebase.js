// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgQeleq7cRXWSfttto5gTRWubMav6FhNM",
  authDomain: "netflixgpt-b5411.firebaseapp.com",
  projectId: "netflixgpt-b5411",
  storageBucket: "netflixgpt-b5411.firebasestorage.app",
  messagingSenderId: "540014694962",
  appId: "1:540014694962:web:16e9a2ca28d3b75d98a22b",
  measurementId: "G-F6TJE82D8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);