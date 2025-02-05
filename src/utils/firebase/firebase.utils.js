import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-AE_TtRvpWH5f8vRValVIMwG_DSyB_aU",
  authDomain: "crwn-clothing-db-96afa.firebaseapp.com",
  projectId: "crwn-clothing-db-96afa",
  storageBucket: "crwn-clothing-db-96afa.firebasestorage.app",
  messagingSenderId: "308241741076",
  appId: "1:308241741076:web:75404b950cced8e5b77e01",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(firebaseapp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
