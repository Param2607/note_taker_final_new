import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig=firebase.initializeApp({

apiKey: "AIzaSyBlRqfFcJFzVSFf2lNMYUqXyqxLD-gBIlA",
authDomain: "note-app-50659.firebaseapp.com",
projectId: "note-app-50659",
storageBucket: "note-app-50659.appspot.com",
messagingSenderId: "860781686631",
appId: "1:860781686631:web:1468746ea4698dd3ea89c2",
measurementId: "G-2QDFTG69D5"
});

export {firebaseConfig as firebase};


