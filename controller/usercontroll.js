import { collection, doc, getDocs, updateDoc,} from "firebase/firestore/lite";
import db from "../config.js";
import Users from "../model/users.js";


export const Adduser =async (req,res)=>{
    const {name,Umur} = req.body;
    const add = Users(name,Umur);
    res.json({msg :"data ditambahkan"});
    console.log(add)
}

export const getAlldata = async (req,res)=>{
    const data =await getDocs(collection(db,"USERS"));
    const user =[]
    data.forEach((doc)=>{
        user.push(doc.id,doc.data())
    })
    res.json({user});
}

export const updateData=async (req,res)=>{
    try {
        const id = req.params.id;
        const {name,Umur} = req.body
        const data = doc(db, "USERS", id);
        await updateDoc(data,{
            "name" : name,
            "Umur" : Umur
        })
        res.json({msg : "Data diUPDATE"})
    } catch (error) {
        console.log(error)
        res.json({msg : "fail update"})
    }
}