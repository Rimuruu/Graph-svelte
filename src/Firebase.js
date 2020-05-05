
import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase/app';
import { collectionData } from 'rxfire/firestore';
import { map } from 'rxjs/operators';
import { authState } from 'rxfire/auth';


const app = firebase.initializeApp({
    apiKey: "AIzaSyDIz_tjxiGUJhwQk8h1gbdCY3fMht_b7j8",
    authDomain: "graph-svelte.firebaseapp.com",
    databaseURL: "https://graph-svelte.firebaseio.com",
    projectId: "graph-svelte",
    storageBucket: "graph-svelte.appspot.com",
    messagingSenderId: "1091122432078",
    appId: "1:1091122432078:web:fdbb040ce6e81b46a41b1f",
    measurementId: "G-21EKEJF6W4"
});

const firestore = firebase.firestore(app);
const auth = firebase.auth(app);


export { app, auth,firestore, collectionData};

export default firebase;
