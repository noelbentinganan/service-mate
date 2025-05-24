// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyxJlh-4STSxtnmZhDuleRVvdDiSkGvbU",
    authDomain: "service-mate-1e114.firebaseapp.com",
    projectId: "service-mate-1e114",
    storageBucket: "service-mate-1e114.firebasestorage.app",
    messagingSenderId: "232753207160",
    appId: "1:232753207160:web:a3b0963d59cdfdbbb91a8d",
    measurementId: "G-HESVEHWFPZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
// const analytics = getAnalytics(app);
