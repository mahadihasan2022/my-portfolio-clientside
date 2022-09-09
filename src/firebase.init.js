import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBEaItlv7Xad2gZFQ_kGMpdaN5gtVDXHRs",
    authDomain: "pockie-6e914.firebaseapp.com",
    projectId: "pockie-6e914",
    storageBucket: "pockie-6e914.appspot.com",
    messagingSenderId: "666592491099",
    appId: "1:666592491099:web:933b7d81263bf89408717e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
