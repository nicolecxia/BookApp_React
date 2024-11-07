// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCld3iYdpj9_ewkdXDxJRTFmzpXmQCNG1w",
  authDomain: "react-57c09.firebaseapp.com",
  projectId: "react-57c09",
  storageBucket: "react-57c09.firebasestorage.app",
  messagingSenderId: "1075095181282",
  appId: "1:1075095181282:web:25883e68a3cdf0da6dcbbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

//Initialize collection name
export const collectionName = "Books";