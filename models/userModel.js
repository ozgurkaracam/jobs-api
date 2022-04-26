const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
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

module.exports=mongoose.model('User',UserSchema)