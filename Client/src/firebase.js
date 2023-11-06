// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-4c6ac.firebaseapp.com",
  projectId: "real-estate-4c6ac",
  storageBucket: "real-estate-4c6ac.appspot.com",
  messagingSenderId: "288322664868",
  appId: "1:288322664868:web:cf6820aee6a7d1c7aae931"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);