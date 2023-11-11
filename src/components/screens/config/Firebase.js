// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGNGJVrhpNS7xfxZLdsaZ1aApLGiNVunY",
  authDomain: "portfolio-7dbcf.firebaseapp.com",
  projectId: "portfolio-7dbcf",
  storageBucket: "portfolio-7dbcf.appspot.com",
  messagingSenderId: "693005858697",
  appId: "1:693005858697:web:b6517d49cb30e0bc099358",
  measurementId: "G-N4MN4QTQEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const db = getFirestore(app)
export {auth, db}