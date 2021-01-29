import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Add your firebase config here
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

// database
const db = firebaseapp.firestore();

// authentication
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;