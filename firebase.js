// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDnf1f3HvSjNlYlZ6MZPyRDIiy5Y0Vdh0",
  authDomain: "fir-auth-81907.firebaseapp.com",
  projectId: "fir-auth-81907",
  storageBucket: "fir-auth-81907.appspot.com",
  messagingSenderId: "869941791325",
  appId: "1:869941791325:web:8807e7f91f1188697fdbb4"
};

// Initialize Firebase
let app;
if (firebase.apps.lenght === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };