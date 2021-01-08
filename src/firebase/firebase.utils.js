import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB5U5Ly9Hcz2ZuY3jkjlXIsdoEbgdD-HqU',
  authDomain: 'crwn-db-184a3.firebaseapp.com',
  projectId: 'crwn-db-184a3',
  storageBucket: 'crwn-db-184a3.appspot.com',
  messagingSenderId: '444987592494',
  appId: '1:444987592494:web:5f1793646db2add42934bf',
  measurementId: 'G-7TZLEQBTD0'
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // Si el usuario no existe, vamos a crearlo
    try {
      await userRef.set(
        {
          displayName,
          email,
          createdAt,
          ...additionalData
        }
      )
    } catch (error) {
      console.log('error creating user', error.message)
    }
  } else {
    console.log('user already exists')
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;