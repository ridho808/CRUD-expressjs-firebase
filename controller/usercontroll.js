import { collection, getDocs,} from "firebase/firestore/lite";
import db from "../config.js";
import Users from "../model/users.js";


export const Adduser =async (req,res)=>{
    const {name,umur} = req.body;
    const add = Users(name,umur);
    res.json({msg :"data ditambahkan"});
    console.log(add)
}

export const getAlldata = async (req,res)=>{
    const data =await getDocs(collection(db,"USERS"));
    const user =[]
    data.forEach((doc)=>{
        user.push(doc.data())
    })
    res.json({data : user})
    console.log(user)
}