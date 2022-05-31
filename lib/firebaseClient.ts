import "firebase/compat/auth";

import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const CLIENT_CONFIG = {
  apiKey: "AIzaSyBVQySGSg4iFqMqRmu-FhEMoyEHSeWEE7Y",
  authDomain: "momentum-live-b58e2.firebaseapp.com",
  databaseURL: "https://momentum-live-b58e2-default-rtdb.firebaseio.com",
  projectId: "momentum-live-b58e2",
  storageBucket: "momentum-live-b58e2.appspot.com",
  messagingSenderId: "388628816540",
  appId: "1:388628816540:web:a759f59fad982df181c359",
  measurementId: "G-TVSP5BSB7L"
};

const app = firebase.initializeApp(CLIENT_CONFIG);

const fireStore = getFirestore(app);

const Storage = getStorage(app);


if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebase;


}

export { firebase, app, fireStore, Storage };
