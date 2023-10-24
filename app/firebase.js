// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAKqROEOvyO7WhAo6pFHf87YBnYVoHhoIw",
	authDomain: "human-resorces-helper.firebaseapp.com",
	projectId: "human-resorces-helper",
	storageBucket: "human-resorces-helper.appspot.com",
	messagingSenderId: "253622504204",
	appId: "1:253622504204:web:a3b1a694c99b1b760c1729",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
