const mongoose=require('mongoose')

const JobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please Provide a Title!']
    },
    position:{
        type:String,
        required:[true,'Please Provide A Position!']
    },
    company:{
      type:String,
      required:true
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    type:{
        type:String,
        enum:['interview','senior','junior'],
        default:'interview'
    }
},{timestamps:true})

module.exports=mongoose.model('Job',JobSchema)