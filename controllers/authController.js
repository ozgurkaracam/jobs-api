const User=require('../models/userModel')

exports.login=async (req,res)=>{
    console.log("login")
}

exports.register=async (req,res)=>{
    const user=await User.create(req.body)
    res.json({
        msg:'Success!',
        user
    })

}