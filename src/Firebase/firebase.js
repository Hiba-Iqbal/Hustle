import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyBDWnnJngBO3mgXiwkO9isHp2mzhxO1YQ8",
    authDomain: "hustle-b1891.firebaseapp.com",
    projectId: "hustle-b1891",
    storageBucket: "hustle-b1891.appspot.com",
    messagingSenderId: "295793753054",
    appId: "1:295793753054:web:0770e1b1297bc305203b4f"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

    export var auth = firebase.auth();
    export var firestore = firebase.firestore();
    export var googleAuthProvider = new firebase.auth.GoogleAuthProvider()
    export var serverTimeStamp = () => firebase.firestore.FieldValue.serverTimestamp(); //return flag
  
export default firebase