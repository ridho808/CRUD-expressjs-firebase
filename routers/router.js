import express from "express";
import { Adduser, getAlldata } from "../controller/usercontroll.js";

const router = express.Router()

router.post("/post",Adduser);
router.get('/get',getAlldata)

export default router;