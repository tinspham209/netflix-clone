import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

// Config
const config = {
	apiKey: "AIzaSyAEbuCefqHUMSutTP3OQfjZBHOoRPx_pj4",
	authDomain: "netflix-clone-8b12f.firebaseapp.com",
	databaseURL: "https://netflix-clone-8b12f.firebaseio.com",
	projectId: "netflix-clone-8b12f",
	storageBucket: "netflix-clone-8b12f.appspot.com",
	messagingSenderId: "663009246643",
	appId: "1:663009246643:web:ab7b94b3f970c84dd79fc6",
	measurementId: "G-ZF0G3JXSCQ",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
