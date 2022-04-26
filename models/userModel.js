const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const jwt = require("jsonwebtoken");
require('dotenv').config()
const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:[true,'Please provide email']
    },
    password:{
        type:String,
        required:[true,'Please provide password']
    },
    full_name:{
        type:String,
        required:true
    }
})

UserSchema.pre('save',async function (next){
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
    next()
})

UserSchema.methods.getTOKEN=async function (user){
    const token= await jwt.sign({...user},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_LIFE_TIME
    })
    return token
}

module.exports=mongoose.model('User',UserSchema)