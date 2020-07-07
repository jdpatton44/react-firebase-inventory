import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: " AIzaSyBv8mgV_F9ZlsBmA937t65fiNPRF09HadU",
  authDomain: "pkg-inventory-tracker.firebaseapp.com",
  databaseURL: "https://pkg-inventory-tracker.firebaseio.com",
  projectId: "pkg-inventory-tracker",
  storageBucket: "pkg-inventory-tracker.appspot.com",
  messagingSenderId: "398738834815",
  appId: "1:398738834815:web:9f992bf58d3e2bcb27064a"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
