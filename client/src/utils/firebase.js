import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-69416.firebaseapp.com",
  projectId: "authexamnotes-69416",
  storageBucket: "authexamnotes-69416.firebasestorage.app",
  messagingSenderId: "673499400122",
  appId: "1:673499400122:web:4910b6574015d112783f83"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const provider=new GoogleAuthProvider()

export {auth,provider}