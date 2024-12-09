// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAQsaHKi3EZYppEz2r5UUJ45tZu9hnPXk",
  authDomain: "entregafinal-inga.firebaseapp.com",
  projectId: "entregafinal-inga",
  storageBucket: "entregafinal-inga.firebasestorage.app",
  messagingSenderId: "836263990951",
  appId: "1:836263990951:web:a068d6c3aeea315391ed82",
  measurementId: "G-MBR3HXF9D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);