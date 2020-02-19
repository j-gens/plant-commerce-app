import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDL_bLfmMU9N5xU0KmTAGfHwDRzrh8IpEU",
  authDomain: "pug-commerce.firebaseapp.com",
  databaseURL: "https://pug-commerce.firebaseio.com",
  projectId: "pug-commerce",
  storageBucket: "pug-commerce.appspot.com",
  messagingSenderId: "270607384726",
  appId: "1:270607384726:web:39ce384a634bb71d4442b7",
  measurementId: "G-MJB5DKHHSR"
};


firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
