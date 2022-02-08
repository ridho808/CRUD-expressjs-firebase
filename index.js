import express from "express"
import router from "./routers/router.js"
const app = express()
app.use(express.json())
app.use(router)
app.listen(process.env.PORT|| 5000,()=>{
    console.log("server run")
})