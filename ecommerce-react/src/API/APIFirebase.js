// Import the functions you need from the SDKs you need
import { getModularInstance } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBdqbHIZehbn5JxF7foc2qq704r2QuRvLQ",
  authDomain: "ecommerce-reactjs-2ba06.firebaseapp.com",
  projectId: "ecommerce-reactjs-2ba06",
  storageBucket: "ecommerce-reactjs-2ba06.appspot.com",
  messagingSenderId: "405356895386",
  appId: "1:405356895386:web:02b0e9ac22058ff68a9323"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;