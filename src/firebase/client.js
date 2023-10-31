import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAW2kKSnmfOMI2XeboZdDFol564_9ZonBM",
  authDomain: "gonzalomainardi-reactjs.firebaseapp.com",
  projectId: "gonzalomainardi-reactjs",
  storageBucket: "gonzalomainardi-reactjs.appspot.com",
  messagingSenderId: "396247566992",
  appId: "1:396247566992:web:8706c90ca34cd72c8e6615",
  measurementId: "G-HRKPPSSGCX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);