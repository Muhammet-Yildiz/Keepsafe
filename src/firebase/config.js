import firebase from "firebase/compat/app";
import 'firebase/compat/storage'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "XXXX",
  authDomain: "XXXX",
  projectId: "XXXX",
  storageBucket: "XXXX",
  messagingSenderId: "XXXX",
  appId: "XXXX",
  measurementId: "XXXX"
};


firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage() ; 
const projectFirestore = firebase.firestore() ; 

const timestamp = firebase.firestore.FieldValue.serverTimestamp ; 

export {projectStorage,projectFirestore ,timestamp}  ;

















