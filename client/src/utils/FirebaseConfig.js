// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyBUBQ3DJgFiajagkoVp4YrYVWlSYCdC2GQ",
  authDomain: "whatsapp-clone-19d6b.firebaseapp.com",
  projectId: "whatsapp-clone-19d6b",
  storageBucket: "whatsapp-clone-19d6b.appspot.com",
  messagingSenderId: "809456045690",
  appId: "1:809456045690:web:9077493a6935c2591b75c3",
  measurementId: "G-H70GVVJYN3"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);
