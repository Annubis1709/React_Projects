import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAzjqQBsBDXvg1g11GOGZSYew_DxjiqJQg",
  authDomain: "linkedin-clone-886ac.firebaseapp.com",
  projectId: "linkedin-clone-886ac",
  storageBucket: "linkedin-clone-886ac.appspot.com",
  messagingSenderId: "429551417258",
  appId: "1:429551417258:web:125ff75575f5c72dcdddd3"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);

export { database };