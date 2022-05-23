// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK99ZUXccP7_8MXz5kz7uWk-z6McJWPnc",
  authDomain: "bicyclezen-c376f.firebaseapp.com",
  projectId: "bicyclezen-c376f",
  storageBucket: "bicyclezen-c376f.appspot.com",
  messagingSenderId: "1067162929599",
  appId: "1:1067162929599:web:91bc8e2de0dc8e268df90a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;