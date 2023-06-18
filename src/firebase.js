import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyB-Ke-BdidiqEeI_wDzUZD1Nq_1YhF9uQA",
  authDomain: "hallticket-svu.firebaseapp.com",
  projectId: "hallticket-svu",
  storageBucket: "hallticket-svu.appspot.com",
  messagingSenderId: "36788419433",
  appId: "1:36788419433:web:ab9ad966928d0de7aa9bf8",
  measurementId: "G-KX15KD58D2"
};

const app = initializeApp(firebaseConfig);

// Get the Firebase services you need
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth,db };
