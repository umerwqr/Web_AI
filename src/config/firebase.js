import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyyGAAD1D55qN14zCZHsbnxiKebQGo8Y4",
  authDomain: "ai-tools-833e0.firebaseapp.com",
  projectId: "ai-tools-833e0",
  storageBucket: "ai-tools-833e0.appspot.com",
  messagingSenderId: "658028828235",
  appId: "1:658028828235:web:9d7394f3147488e5259fce"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
