// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANHMb1kFibaHAOii4f3Cr4nwP-uV_T_7E",
  authDomain: "hallticket-bc129.firebaseapp.com",
  databaseURL: "https://hallticket-bc129-default-rtdb.firebaseio.com",
  projectId: "hallticket-bc129",
  storageBucket: "hallticket-bc129.appspot.com",
  messagingSenderId: "18030136317",
  appId: "1:18030136317:web:600c7a1ce854476e3ca794",
  measurementId: "G-2DF8QF077G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);