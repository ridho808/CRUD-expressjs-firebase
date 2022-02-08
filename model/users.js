import { addDoc, collection} from "firebase/firestore/lite";
import db from "../config.js";
const database = collection(db,"USERS")

const Users = async (valueA,valueB)=>{
    await addDoc(database,{
        name : valueA,
        Umur : valueB
    });
};

export default Users;