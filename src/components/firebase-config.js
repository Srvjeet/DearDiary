import {getFirestore} from 'firebase/firestore';
import {initializeApp} from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArhhMIBmMf-RGMtSenEvgChxBqcfKsVl4",
    authDomain: "dear-diary-b8b30.firebaseapp.com",
    projectId: "dear-diary-b8b30",
    storageBucket: "dear-diary-b8b30.appspot.com",
    messagingSenderId: "90562005414",
    appId: "1:90562005414:web:6586ed9f734084d7532767",
    measurementId: "G-NRR5RVPETJ"
  };

  const app= initializeApp(firebaseConfig);
  export const db = getFirestore(app);