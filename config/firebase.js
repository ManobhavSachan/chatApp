import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCtN0IA0mCP_TNV437xjNr5NC6MpFTw1Uw",
  authDomain: "chatapp-95c62.firebaseapp.com",
  projectId: "chatapp-95c62",
  storageBucket: "chatapp-95c62.appspot.com",
  messagingSenderId: "91636811772",
  appId: "1:91636811772:web:ade76d6d0af81d069bd479",
  measurementId: "G-EXDFVFKKD2"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();