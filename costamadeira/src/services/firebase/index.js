// Importa las funciones necesarias desde el SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBrt6UiB9bWNRZp8zfJ1vm6mP2MJE6IytU",
  authDomain: "costa-98fb1.firebaseapp.com",
  projectId: "costa-98fb1",
  storageBucket: "costa-98fb1.appspot.com",
  messagingSenderId: "414838579299",
  appId: "1:414838579299:web:92a6aa5bb62e49115c1856"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Exporta las funciones necesarias para interactuar con Firestore
export { db, collection, getDocs };
