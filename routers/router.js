import express from "express";
import { Adduser, DeletByid, getAlldata, GetDataByID, updateData } from "../controller/usercontroll.js";

const router = express.Router()

router.post("/post",Adduser);
router.get('/get',getAlldata)
router.patch("/up/:id",updateData);
router.get('/id/:id',GetDataByID)
router.delete("/del/:id",DeletByid)
export default router;