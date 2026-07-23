// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkUBw7JNe7Ci5-c6TFSiBO33k84eCqH4s",
  authDomain: "gana-seva.firebaseapp.com",
  projectId: "gana-seva",
  storageBucket: "gana-seva.firebasestorage.app",
  messagingSenderId: "342818004255",
  appId: "1:342818004255:web:b91ce6e760cf78e580242a",
  measurementId: "G-Q65H9YR0M4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initial super admin email(s) - has full access to CMS on first login
export const SUPER_ADMIN_EMAILS = ["aaashishg92@gmail.com"];
