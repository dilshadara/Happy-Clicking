// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQQmuD6t_pxHyqFP3A32mWzoAMZFo2nhs",
  authDomain: "independent-service-prov-f5308.firebaseapp.com",
  projectId: "independent-service-prov-f5308",
  storageBucket: "independent-service-prov-f5308.appspot.com",
  messagingSenderId: "452035050153",
  appId: "1:452035050153:web:fe29e45780351884e187b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;