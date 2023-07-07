import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ9gX-PFexJrkE-LkidXG579aGj1OYA7k",
  authDomain: "house-marketplace-house.firebaseapp.com",
  projectId: "house-marketplace-house",
  storageBucket: "house-marketplace-house.appspot.com",
  messagingSenderId: "147310938153",
  appId: "1:147310938153:web:273e9036f9cd7ed06e7438",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
