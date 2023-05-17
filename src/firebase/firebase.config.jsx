// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCL6LYcDlIVpzWt0K1Lze1qDjoBtjKUCfI",
    authDomain: "the-toy-client.firebaseapp.com",
    projectId: "the-toy-client",
    storageBucket: "the-toy-client.appspot.com",
    messagingSenderId: "113580543442",
    appId: "1:113580543442:web:d24177c62e998ab62d4c0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;