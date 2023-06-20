// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getFirestore, collection, where, getDocs, query, addDoc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH8TcEJdUZFMdOkGZGfq9flfOmC-bW0xg",
  authDomain: "nike-website-e9f4e.firebaseapp.com",
  projectId: "nike-website-e9f4e",
  storageBucket: "nike-website-e9f4e.appspot.com",
  messagingSenderId: "831685482422",
  appId: "1:831685482422:web:d2775a9b39f47619d75317",
  measurementId: "G-4HH5TGBNY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db, collection, where, getDocs, query, addDoc };
