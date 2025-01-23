import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsDBlhQajDgfu6Shj6zdygfwCC_oo8dmo",
  authDomain: "saudealimentar-21582.firebaseapp.com",
  projectId: "saudealimentar-21582",
  storageBucket: "saudealimentar-21582.appspot.com", // 🔥 Corrigido!
  messagingSenderId: "241831314812",
  appId: "1:241831314812:web:61cc07157b9433b30ed0f9",
  measurementId: "G-TT9ETL606K"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
