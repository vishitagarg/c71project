import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyDtgVuoBV6xKf8HGCNKXZgOXK2_4oldH9k",
  authDomain: "bikeride-eaf04.firebaseapp.com",
  projectId: "bikeride-eaf04",
  storageBucket: "bikeride-eaf04.appspot.com",
  messagingSenderId: "515959622140",
  appId: "1:515959622140:web:9d2abba10e17f71024ca79"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


