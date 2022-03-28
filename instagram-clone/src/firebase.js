import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, auth, storage};