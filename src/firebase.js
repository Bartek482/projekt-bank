// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUYZHVsoY542G1PF9JKXddrBFqr6wQ274",
    authDomain: "register-form-42e92.firebaseapp.com",
    databaseURL: "https://register-form-42e92-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "register-form-42e92",
    storageBucket: "register-form-42e92.appspot.com",
    messagingSenderId: "322220404920",
    appId: "1:322220404920:web:34a68906914ce3ac87844d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);