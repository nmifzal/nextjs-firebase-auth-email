import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwySG4r5iDhMcuMIIriL7EjlFt7dN5dkg",
  authDomain: "elixr-crm.firebaseapp.com",
  projectId: "elixr-crm",
  storageBucket: "elixr-crm.appspot.com",
  messagingSenderId: "1010812170338",
  appId: "1:1010812170338:web:f01ccb5161f7a9a1a0e13b",
  measurementId: "G-2BKKMJ2NMR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
