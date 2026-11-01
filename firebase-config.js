// =========================================================
// הגדרות Firebase של הפרויקט (design-thinking-app-ade49)
// נשמר לשימוש בהמשך. כרגע הקובץ לא מחובר לאתר.
// =========================================================

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU2k3Lhnb0bp7FTRGFZGJ33n3EHvcC_t4",
  authDomain: "design-thinking-app-ade49.firebaseapp.com",
  projectId: "design-thinking-app-ade49",
  storageBucket: "design-thinking-app-ade49.firebasestorage.app",
  messagingSenderId: "1067698886102",
  appId: "1:1067698886102:web:c64eb9c805cb725b3c4077",
  measurementId: "G-P87SS142FN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
