import { initializeApp } from "firebase/app";

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

export default app;