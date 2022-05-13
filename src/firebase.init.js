// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdfGRqpstdKER5y7eGHouEi5oS4DmIdjE",
    authDomain: "doctors-portal-75dab.firebaseapp.com",
    projectId: "doctors-portal-75dab",
    storageBucket: "doctors-portal-75dab.appspot.com",
    messagingSenderId: "1073779643598",
    appId: "1:1073779643598:web:78db81172ec0dc051aec9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth