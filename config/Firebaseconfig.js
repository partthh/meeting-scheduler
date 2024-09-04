// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-scheduler-2058a.firebaseapp.com",
  projectId: "meeting-scheduler-2058a",
  storageBucket: "meeting-scheduler-2058a.appspot.com",
  messagingSenderId: "81196869114",
  appId: "1:81196869114:web:7895dcb7ef1aa70930b043",
  measurementId: "G-3GC6LZ10G8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);