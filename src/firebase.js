import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyC_RwxBrl5VVf6-OcWymkGtcrk-tZsW_BE",
  authDomain: "clone-33149.firebaseapp.com",
  databaseURL: "https://clone-33149.firebaseio.com",
  projectId: "clone-33149",
  storageBucket: "clone-33149.appspot.com",
  messagingSenderId: "501153322417",
  appId: "1:501153322417:web:69dbc4ba62fd486f6c5990",
  measurementId: "G-SZBJR65CQ6"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;