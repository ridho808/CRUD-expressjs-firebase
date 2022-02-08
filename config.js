import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore/lite"
import dotenv from "dotenv"
dotenv.config()
const firebaseConfig = initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
});
const db = getFirestore(firebaseConfig);


export default db;