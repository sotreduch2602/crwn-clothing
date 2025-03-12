import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-AE_TtRvpWH5f8vRValVIMwG_DSyB_aU",
  authDomain: "crwn-clothing-db-96afa.firebaseapp.com",
  projectId: "crwn-clothing-db-96afa",
  storageBucket: "crwn-clothing-db-96afa.firebasestorage.app",
  messagingSenderId: "308241741076",
  appId: "1:308241741076:web:75404b950cced8e5b77e01",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk",
//   authDomain: "crwn-clothing-db-98d4d.firebaseapp.com",
//   projectId: "crwn-clothing-db-98d4d",
//   storageBucket: "crwn-clothing-db-98d4d.appspot.com",
//   messagingSenderId: "626766232035",
//   appId: "1:626766232035:web:506621582dab103a4d08d6",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });

//authentification
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, GoogleProvider);

export const signInWithGoogleRedirect = async () => {
  try {
    return await signInWithRedirect(auth, GoogleProvider);
  } catch (error) {
    console.error("Redirect Sign In Error:", error);
    throw error;
  }
};

//firestore database
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  //Test if user data exists
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  //if user datat does not exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
