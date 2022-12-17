const firebaseConfig = {
  apiKey: "AIzaSyAk5d0Sow8IRFZayzpPI5bQSiFHG3iZuhw",
  authDomain: "disneyplus-clone-a0887.firebaseapp.com",
  projectId: "disneyplus-clone-a0887",
  storageBucket: "disneyplus-clone-a0887.appspot.com",
  messagingSenderId: "655725626603",
  appId: "1:655725626603:web:e19fde39ac5bb2d3362aae",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export {auth, provider, storage};
export default db;