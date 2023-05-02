import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBua7LyREbu_dookNWH8LU6siXSN6RfQyI",
  authDomain: "ecommercereact-ca1bc.firebaseapp.com",
  projectId: "ecommercereact-ca1bc",
  storageBucket: "ecommercereact-ca1bc.appspot.com",
  messagingSenderId: "517707647947",
  appId: "1:517707647947:web:75e7a9c31f60cdae1b444e",
};

const app = initializeApp(firebaseConfig);

export const initFirebase= ()=> app