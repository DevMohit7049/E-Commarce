
import { initializeApp } from "firebase/app";
import {getAuth} from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDXyQ-neKB06W5ecgRG4OcDLY3-pCJ0ykc",
  authDomain: "e-commarceauth.firebaseapp.com",
  projectId: "e-commarceauth",
  storageBucket: "e-commarceauth.appspot.com",
  messagingSenderId: "890764968902",
  appId: "1:890764968902:web:d6a362062b88dd80b428c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);