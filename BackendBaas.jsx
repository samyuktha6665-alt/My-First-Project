// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8hs8SVcyZhB6mK0nVmJXq3p8yKv7N-g0",
  authDomain: "ecart-c32d3.firebaseapp.com",
  projectId: "ecart-c32d3",
  storageBucket: "ecart-c32d3.firebasestorage.app",
  messagingSenderId: "108957107019",
  appId: "1:108957107019:web:7e83008a3a4a4142ae1ece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const _Auth = getAuth(app)
export const _DB = getFirestore(app)