// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3D9nwa7XA1YKXK_AdqPFMsR9ptTUi1_s",
  authDomain: "insta-clone-27134.firebaseapp.com",
  projectId: "insta-clone-27134",
  storageBucket: "insta-clone-27134.firebasestorage.app",
  messagingSenderId: "369505830210",
  appId: "1:369505830210:web:74e2a06509bd04ca6874db",
  measurementId: "G-JWQ0RHFCZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);