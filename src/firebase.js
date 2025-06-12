// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY0NWIFm_MoytiwjfpN_54kKnVP5ZHHro",
  authDomain: "magnum-dcfd1.firebaseapp.com",
  projectId: "magnum-dcfd1",
  storageBucket: "magnum-dcfd1.firebasestorage.app",
  messagingSenderId: "151414950727",
  appId: "1:151414950727:web:55c886f252512aa9b01a62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
