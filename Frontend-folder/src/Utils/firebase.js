// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "login-9f5e0.firebaseapp.com",
  projectId: "login-9f5e0",
  storageBucket: "login-9f5e0.firebasestorage.app",
  messagingSenderId: "644413043322",
  appId: "1:644413043322:web:778241ad442cbdc931c1c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider };