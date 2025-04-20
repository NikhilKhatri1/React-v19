// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

    apiKey: "AIzaSyCcSGLBzwmXZg_20-6T4nREk_zeSR3wdiQ",

    authDomain: "react-firebase-auth-d8464.firebaseapp.com",

    projectId: "react-firebase-auth-d8464",

    storageBucket: "react-firebase-auth-d8464.firebasestorage.app",

    messagingSenderId: "767935240659",

    appId: "1:767935240659:web:3efac01f46acab75c1f726",

    measurementId: "G-T5P1TSL047"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);


export default auth