import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD-A4riiFFgwRMOiUw8qd-2NdOL6B3MsgI",
  authDomain: "netflix-clone-658cd.firebaseapp.com",
  projectId: "netflix-clone-658cd",
  storageBucket: "netflix-clone-658cd.appspot.com",
  messagingSenderId: "470274730329",
  appId: "1:470274730329:web:2b22ec653e034ea66b0448",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
