import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig=firebase.initializeApp({

// apiKey: "AIzaSyBlRqfFcJFzVSFf2lNMYUqXyqxLD-gBIlA",
// authDomain: "note-app-50659.firebaseapp.com",
// projectId: "note-app-50659",
// storageBucket: "note-app-50659.appspot.com",
// messagingSenderId: "860781686631",
// appId: "1:860781686631:web:1468746ea4698dd3ea89c2",
// measurementId: "G-2QDFTG69D5"

apiKey: "AIzaSyDXuLrKLrZ1f0yKVi7SLXy7GSmpR18BN-c",
authDomain: "notes-final-new.firebaseapp.com",
projectId: "notes-final-new",
storageBucket: "notes-final-new.appspot.com",
messagingSenderId: "1091299360279",
appId: "1:1091299360279:web:41077af2b8cced9e326652",
measurementId: "G-NCKSEN5CPV"
});

export {firebaseConfig as firebase};


