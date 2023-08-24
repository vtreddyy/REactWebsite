
import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDD0BlJJg-0T7MxrXp7MtX6qH6iFUSaEmQ",
  authDomain: "react-inte.firebaseapp.com",
  databaseURL: "https://react-inte-default-rtdb.firebaseio.com",
  projectId: "react-inte",
  storageBucket: "react-inte.appspot.com",
  messagingSenderId: "225460919744",
  appId: "1:225460919744:web:ee259d4075214779083c25"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

