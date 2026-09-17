import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbX9YP-R0u8scVSe4LQPvUiCssRhQstzo",
  authDomain: "abhishekshukla-1af6d.firebaseapp.com",
  projectId: "abhishekshukla-1af6d",
  storageBucket: "abhishekshukla-1af6d.firebasestorage.app",
  messagingSenderId: "208550475340",
  appId: "1:208550475340:web:f4be786bb4f9f3a1f326e9",
  measurementId: "G-9GJ4V78G4Y"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
