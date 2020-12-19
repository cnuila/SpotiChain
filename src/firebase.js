import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCdocLchzhlP1j0gETijZgTDO6Shai9m3E",
    authDomain: "spotichain.firebaseapp.com",
    projectId: "spotichain",
    storageBucket: "spotichain.appspot.com",
    messagingSenderId: "887635636273",
    appId: "1:887635636273:web:517e890e4087041884a510",
    measurementId: "G-RX1NN63L63"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export default fb;
export const auth = fb.auth();
export const db = fb.firestore();
