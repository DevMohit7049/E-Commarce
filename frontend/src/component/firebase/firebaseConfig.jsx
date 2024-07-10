
import { initializeApp } from "firebase/app";
import {getAuth} from '@firebase/auth';

const firebaseConfig = {
  apiKey: API_KEY ,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);