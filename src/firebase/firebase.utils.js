import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyDL_bLfmMU9N5xU0KmTAGfHwDRzrh8IpEU',
  authDomain: 'pug-commerce.firebaseapp.com',
  databaseURL: 'https://pug-commerce.firebaseio.com',
  projectId: 'pug-commerce',
  storageBucket: 'pug-commerce.appspot.com',
  messagingSenderId: '270607384726',
  appId: '1:270607384726:web:39ce384a634bb71d4442b7',
  measurementId: 'G-MJB5DKHHSR',
};


firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


// take userAuth object from sign-in and store inside db
// async bc api request
export const createUserProfileDoc = async (userObj, additionalData) => {
  // only want to perform save to db if we have userObj (get null when user signs out)
  if (!userObj) return null;
  // if exists, query firestore to see if already stored as a doc
  const userReference = firestore.doc(`users/${userObj.uid}`);
  // get document snapshot object (with exists property)
  const snapShot = await userReference.get();
  // if it doesn't exist, we want to create it with the doc reference
  if (!snapShot.exists) {
    const { displayName, email } = userObj;
    const createdAt = new Date();
    // async request to store information in db
    try {
      await userReference.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userReference;
};


// upload collection(s) to Firestore so we don't have to do it manually
export const addCollectionToFirestore = async (colKey, itemsToAdd) => {
  // get a new write batch
  const batch = firestore.batch();
  itemsToAdd.forEach((item) => {
    // let Firestore generate a new reference id for each doc
    let newDocReference = firestore.collection(colKey).doc();
    // set new reference with each object
    batch.set(newDocReference, item);
  });
  // returns a promise
  return await batch.commit();
}


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
