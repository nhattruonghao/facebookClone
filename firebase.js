import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJU0OkRjQcP37TSem2nxXUzuWK-dGPbPE",
  authDomain: "facebook-clone-6-11.firebaseapp.com",
  projectId: "facebook-clone-6-11",
  storageBucket: "facebook-clone-6-11.appspot.com",
  messagingSenderId: "601041058272",
  appId: "1:601041058272:web:77b779fb4d5443808a1385",
  measurementId: "G-MG65QJ1KX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}

