// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNfel4chJI-jBWQ63J6ebdx1mWfYGyvVM",
  authDomain: "necessito-rs.firebaseapp.com",
  databaseURL: "https://necessito-rs-default-rtdb.firebaseio.com",
  projectId: "necessito-rs",
  storageBucket: "necessito-rs.appspot.com",
  messagingSenderId: "788598553593",
  appId: "1:788598553593:web:2fa7544ec68808312f5b28",
  measurementId: "G-MPMEJ2CXRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app }