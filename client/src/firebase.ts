// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

// export { auth, storage };

export const signUpUser = async (firstName: string, lastName: string, email: string, password: string, photo: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  const photoRef = ref(storage, auth.currentUser?.uid + '.png');

  await uploadString(photoRef, photo, 'data_url');

  const photoURL = await getDownloadURL(photoRef);

  await updateProfile(userCredential.user, {displayName: firstName + " " + lastName, photoURL: photoURL });

  localStorage.setItem("profile", JSON.stringify({ displayName: firstName + " " + lastName, email: email, photoURL: photoURL }));
}

export const signInUser = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
  localStorage.setItem("profile", JSON.stringify({ displayName: userCredential.user.displayName, email: userCredential.user.email, photoURL: userCredential.user.photoURL }));
}

export const logoutUser = async () => {
  await signOut(auth);
  
  localStorage.clear();
}
