import express from "express";
import { Adduser, getAlldata, updateData } from "../controller/usercontroll.js";

const router = express.Router()

router.post("/post",Adduser);
router.get('/get',getAlldata);
router.patch("/up/:id",updateData)

export default router;