// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
     apiKey: "AIzaSyDHlMW1fRMoZiUiCszQYTeGNVthQp7Ixvc",
     authDomain: "ema-john-simple-3789e.firebaseapp.com",
     projectId: "ema-john-simple-3789e",
     storageBucket: "ema-john-simple-3789e.appspot.com",
     messagingSenderId: "320556263998",
     appId: "1:320556263998:web:ea7e3c31ad9e5a6110ff6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 