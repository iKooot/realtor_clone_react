// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANoNZvOwpd4BZsDRkrOT7lyPmFOqXcXO0",
  authDomain: "realtor-clone-react-c6958.firebaseapp.com",
  projectId: "realtor-clone-react-c6958",
  storageBucket: "realtor-clone-react-c6958.appspot.com",
  messagingSenderId: "685346212868",
  appId: "1:685346212868:web:5faa8af577d1c6f43cf951",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
