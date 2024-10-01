import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXcjBsTFwBRuVLhHJPEUcmDn7RCLFElW8",
    authDomain: "to-do-69b2a.firebaseapp.com",
    projectId: "to-do-69b2a",
    storageBucket: "to-do-69b2a.appspot.com",
    messagingSenderId: "156010613165",
    appId: "1:156010613165:web:6aee5000137dc54a773924"
  };

  const app = initializeApp(config);

  export const db = getFirestore(app);