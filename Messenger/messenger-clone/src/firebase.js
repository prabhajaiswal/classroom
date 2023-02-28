import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0BhOg-LCO1yzdM1Qi1qoqq2UUQj-y5Es",
    authDomain: "messenger-clone-62dd2.firebaseapp.com",
    projectId: "messenger-clone-62dd2",
    storageBucket: "messenger-clone-62dd2.appspot.com",
    messagingSenderId: "300357827680",
    appId: "1:300357827680:web:88c6e16d276bd0fb01d705",
    measurementId: "G-6V891EVJDV"
});
const db = firebaseApp.firestore();
export default db;