// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHi3wE1RmuXAkZHdDasn1fQs068CG0cDI",
  authDomain: "coffee-store-c47e5.firebaseapp.com",
  projectId: "coffee-store-c47e5",
  storageBucket: "coffee-store-c47e5.firebasestorage.app",
  messagingSenderId: "10598342889",
  appId: "1:10598342889:web:07a18275129b3e13c61078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;