// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZtFH1pvUBid2K4RLlUDaV6HxgYnAtNJU",
  authDomain: "ecommerce-c1163.firebaseapp.com",
  projectId: "ecommerce-c1163",
  storageBucket: "ecommerce-c1163.appspot.com",
  messagingSenderId: "159879540001",
  appId: "1:159879540001:web:94380e92ce40a5c5a4a260",
  measurementId: "G-6VKX36EZG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestoreDb = getFirestore(app)