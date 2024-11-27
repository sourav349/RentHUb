// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWXang4uScQSEb8sosdD2E3d9Xv0qIwFQ",
  authDomain: "myfirstapp-7a957.firebaseapp.com",
  projectId: "myfirstapp-7a957",
  storageBucket: "myfirstapp-7a957.appspot.com",
  messagingSenderId: "439144932531",
  appId: "1:439144932531:web:5ea0fe258ed1d266413cc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
