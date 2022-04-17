// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8hX8Dies7U8O0LwYGYuDTMlrVTubKlPE",
  authDomain: "the-traveler-e161e.firebaseapp.com",
  projectId: "the-traveler-e161e",
  storageBucket: "the-traveler-e161e.appspot.com",
  messagingSenderId: "339561674228",
  appId: "1:339561674228:web:0a3d52e7e73ef47d0075a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;