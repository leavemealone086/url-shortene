import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCwUFxaYpguzF9XN3iid5Uv7_Ysxf7FNsE",
  authDomain: "url-shortene-f5d87.firebaseapp.com",
  projectId: "url-shortene-f5d87",
  storageBucket: "url-shortene-f5d87.appspot.com",
  messagingSenderId: "988114396966",
  appId: "1:988114396966:web:f1b9cd16f920b4097043e7",
  measurementId: "G-S64JXB9H3N"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;