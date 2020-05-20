import * as firebase from 'firebase/app'
import 'firebase/firestore'
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// const config = {
//   apiKey: process.env.firebase_apiKey,
//   authDomain: process.env.firebase_authDomain,
//   databaseURL: process.env.firebase_databaseURL,
//   projectId: process.env.firebase_projectId,
//   storageBucket: process.env.firebase_storageBucket,
//   messagingSenderId: process.env.firebase_messagingSenderId,
//   appId: process.env.firebase_appId,
//   measurementId: process.env.firebase_measurementId
// };

  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyCO1_zkzzxhxXR4cYLILgXhIKLb1-XrjJY",
    authDomain: "daily-guitar-workout.firebaseapp.com",
    databaseURL: "https://daily-guitar-workout.firebaseio.com",
    projectId: "daily-guitar-workout",
    storageBucket: "daily-guitar-workout.appspot.com",
    messagingSenderId: "746116739967",
    appId: "1:746116739967:web:c76ce6e0800c7febbfe04a",
    measurementId: "G-0E6LVS3111"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
