

const express = require("express")

const app = express()

app.use(express.json())

require('dotenv').config()

app.get("/",(req,res)=>{

    res.send("welcome to my app")
})
app.listen(process.env.port,()=>{

    console.log(`connected to port ${process.env.port}`)
})