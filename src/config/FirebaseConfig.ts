import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyOdLQbM-Lgrr2uCeJG4Br2rUBvnK4s2s",
  authDomain: "pizza4me-e8db3.firebaseapp.com",
  databaseURL: "https://pizza4me-e8db3.firebaseio.com",
  projectId: "pizza4me-e8db3",
  storageBucket: "pizza4me-e8db3.appspot.com",
  messagingSenderId: "84819435880",
  appId: "1:84819435880:web:5c3814feaedcd653a0f6dd",
};
export default firebase.initializeApp(firebaseConfig);
