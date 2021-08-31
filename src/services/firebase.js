// import { initializeApp } from 'firebase';
// import { getFirestore } from 'firebase/firestore/lite';
// import 'firebase/firestore';
// import firebase from 'react-firebase';
// import firebase from 'firebase';
import firebase from 'firebase';
// import {  } from "module";
const firebaseConfig = {
  apiKey: 'AIzaSyDbq5asyzwnSyFILZyZcKFBUv7ZEwN1VJ8',
  authDomain: 'to-do-list-5611e.firebaseapp.com',
  projectId: 'to-do-list-5611e',
  storageBucket: 'to-do-list-5611e.appspot.com',
  messagingSenderId: '1082218549326',
  appId: '1:1082218549326:web:83c930c9d0da68799d731f',
};

// firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };

// import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';
// const config = {
//   apiKey: 'AIzaSyDbq5asyzwnSyFILZyZcKFBUv7ZEwN1VJ8',
//   authDomain: 'to-do-list-5611e.firebaseapp.com',
//   projectId: 'to-do-list-5611e',
//   storageBucket: 'to-do-list-5611e.appspot.com',
//   messagingSenderId: '1082218549326',
//   appId: '1:1082218549326:web:83c930c9d0da68799d731f',
// };
// firebase.initializeApp(config);
// const auth = firebase.auth();
// const db = firebase.firestore();

// export default db;
