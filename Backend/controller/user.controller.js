

const express =require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")




require("dotenv").config()

const {UserModel}  = require("../model/user.model")

const register = async (req,res)=>{

    const {name,email,password}  =req.body

    try {
        const existUser = await UserModel.findOne({email})
        if(existUser){
            res.status(200).send({"msg":"user is already present"})
        }

        bcrypt.hash(password, 6, async function(err, hash) {
            // Store hash in your password DB.

            if(err){
                res.status(200).send({"msg":err.message})
            }

            const user = new UserModel({name:name,email:email,password:hash})
            await user.save()
            res.status(200).send({"msg":"signup success"})

        });
    } catch (error) {
        res.status(200).send({"msg":"user is already present"})
    }
}


const login = async (req,res)=>{

    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({ email })
        //console.log(user)

        if (!user) {
            return res.status(401).send({ msg: 'user not found' })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        //console.log(isMatch)
        if (!isMatch) {
            return res.status(200).send({ msg: "invalid credentials" })
        }
        const token = jwt.sign({ userId: user._id }, process.env.secret_key)
        res.status(200).send({ msg: "login successfull", token: token })

    }
    catch (err) {
        //console.log(err)
        res.status(500).send({ msg: "something went wrong try again" })
    }
}

module.exports = {register,login}