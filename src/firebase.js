// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAPLp_wXPZtIlL7gjnd3_E0h4U64w2-V1Q",
  authDomain: "weather-track-app-2db38.firebaseapp.com",
  projectId: "weather-track-app-2db38",
  storageBucket: "weather-track-app-2db38.firebasestorage.app",
  messagingSenderId: "639788062528",
  appId: "1:639788062528:web:e0eef16da3ecf9f0fd8ca5",
  measurementId: "G-WKT45JK8HX"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);