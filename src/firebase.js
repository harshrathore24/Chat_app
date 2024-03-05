// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAqJ43JmJ_byU6sT6hwyEYcDwUpLznyff0",
  authDomain: "chat-bot-803ae.firebaseapp.com",
  projectId: "chat-bot-803ae",
  storageBucket: "chat-bot-803ae.appspot.com",
  messagingSenderId: "528024810314",
  appId: "1:528024810314:web:0ad2632f9758dfb2ef07b3",
  measurementId: "G-B2H3HS8KQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;