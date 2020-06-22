import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: " AIzaSyBv8mgV_F9ZlsBmA937t65fiNPRF09HadU",
  authDomain: "pkg-inventory-tracker.firebaseapp.com",
  databaseURL: "https://pkg-inventory-tracker.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
