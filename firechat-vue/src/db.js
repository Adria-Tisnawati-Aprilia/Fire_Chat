import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyCfvdOMvnLMPTcC-B3_wc7pkeQTf20lqAQ",
    authDomain: "firechat-vue-e658d.firebaseapp.com",
    projectId: "firechat-vue-e658d",
    storageBucket: "firechat-vue-e658d.appspot.com",
    messagingSenderId: "370168214603",
    appId: "1:370168214603:web:14bd94c1f1f44964d149ce"
}

const db = firebase.initializeApp(config);
export default db;