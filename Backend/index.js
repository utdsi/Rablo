

const express = require("express")

const app = express()

app.use(express.json())


const {connection}  = require("./config/db")
const {userRouter}  =require("./route/user.route")
const {productRouter} = require("./route/product.route")

require('dotenv').config()

app.get("/",(req,res)=>{

    res.send("welcome to my app")
})

app.use("/",userRouter)
app.use("/",productRouter)
app.listen(process.env.port,async()=>{

    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }

    console.log(`connected to port ${process.env.port}`)
})