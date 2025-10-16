// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwrOhpGuLdON2rPunMt7hS3hrGSuJPv0M",
  authDomain: "react-firebase-auth-19cd7.firebaseapp.com",
  projectId: "react-firebase-auth-19cd7",
  storageBucket: "react-firebase-auth-19cd7.firebasestorage.app",
  messagingSenderId: "325169231195",
  appId: "1:325169231195:web:6ce6b3fb8699c8bb40d67e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);