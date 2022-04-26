const jwt=require('jsonwebtoken')
require('dotenv').config()
module.exports=async (req,res,next)=>{
    const auth=req.headers.authorization
    if(!auth || !auth.startsWith('Bearer'))
        throw Error('No Auth!')
    const token=auth.split(' ')[1]
    console.log(token)
    const match=await jwt.verify(token,process.env.JWT_SECRET_KEY)
    if(match)
        next()
    else
        throw Error('No Auth!')
}