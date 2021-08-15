var firebaseConfig = {
  apiKey: "AIzaSyBjL753pmXUc42mM8BXrVZFg_2TNpM9w38",
  authDomain: "clone-fdb86.firebaseapp.com",
  projectId: "clone-fdb86",
  storageBucket: "clone-fdb86.appspot.com",
  messagingSenderId: "125747355386",
  appId: "1:125747355386:web:f05ea0ac2565c06dda7343",
  measurementId: "G-7Y2GL03NBC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
