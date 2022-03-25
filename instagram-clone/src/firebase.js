/*import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCBZfGQtWsUkZQDSE3qeo3-ct4yp8q2ZKc",
    authDomain: "instagram-clone-81ece.firebaseapp.com",
    projectId: "instagram-clone-81ece",
    storageBucket: "instagram-clone-81ece.appspot.com",
    messagingSenderId: "569074331652",
    appId: "1:569074331652:web:e074e9d31875cdff2e0551",
    measurementId: "G-TWR3PZRC7H"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};
*/
/*import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCBZfGQtWsUkZQDSE3qeo3-ct4yp8q2ZKc",
    authDomain: "instagram-clone-81ece.firebaseapp.com",
    projectId: "instagram-clone-81ece",
    storageBucket: "instagram-clone-81ece.appspot.com",
    messagingSenderId: "569074331652",
    appId: "1:569074331652:web:e074e9d31875cdff2e0551",
    measurementId: "G-TWR3PZRC7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
 
export { db };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCBZfGQtWsUkZQDSE3qeo3-ct4yp8q2ZKc",
    authDomain: "instagram-clone-81ece.firebaseapp.com",
    projectId: "instagram-clone-81ece",
    storageBucket: "instagram-clone-81ece.appspot.com",
    messagingSenderId: "569074331652",
    appId: "1:569074331652:web:e074e9d31875cdff2e0551",
    measurementId: "G-TWR3PZRC7H"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJJD48YSFcur80u5mNQdYWy4y3OU3EjJM",
  authDomain: "instagram-clone-e869c.firebaseapp.com",
  projectId: "instagram-clone-e869c",
  storageBucket: "instagram-clone-e869c.appspot.com",
  messagingSenderId: "158935199894",
  appId: "1:158935199894:web:d4269079ad121ab231d2b7",
  measurementId: "G-3LYE45NLRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);