// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASkIPHB7Qn6pVg4VvG3Djk0d5WUVbpNjE",
  authDomain: "name-of-your-app-63c1f.firebaseapp.com",
  projectId: "name-of-your-app-63c1f",
  storageBucket: "name-of-your-app-63c1f.appspot.com",
  messagingSenderId: "954203904855",
  appId: "1:954203904855:web:5fe405847d8385d1d3fc12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;