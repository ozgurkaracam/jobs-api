const User=require('../models/userModel')
const jwt=require('jsonwebtoken')
const createError=require('http-errors')
const bcrypt=require('bcryptjs')
require('dotenv').config()
exports.login=async (req,res)=>{
    const {email,password}=req.body
    if(!email || !password)
        throw createError('Please Provide Email And Password!',422)
    const user=await User.findOne({email})
    if(!user)
        throw createError('User Not Found!',404)
    const match=await bcrypt.compare(password,user.password)
    if(match){
        const token=await jwt.sign({...user},process.env.JWT_SECRET_KEY,{
            expiresIn:process.env.JWT_LIFE_TIME
        })
        res.json({user,token,msg:'SUCCESS!'})
    }else{
        res.status(404).json({msg:'Wrong Credentials!'})
    }
}

exports.register=async (req,res)=>{
    const user=await User.create(req.body)
    const token=await jwt.sign({...user},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_LIFE_TIME
    })
    res.json({
        msg:'Success!',
        user,
        token
    })

}