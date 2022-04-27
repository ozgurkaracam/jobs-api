const Job=require('../models/jobModel')
exports.getAll=async (req,res)=>{
    let jobs=await Job.find()
    res.status(200).json({
        jobs
    })
}

exports.createJob=async (req,res)=>{
    req.body.createdBy=req.user._id
    const job=await Job.create(req.body)
    res.status(201).json({
        msg:'SUCCESS!',
        job
    })
}

exports.updateJob=async(req,res)=>{
    const {id}=req.params
    req.body.createdBy=req.user._id
    const job=await Job.findOneAndUpdate({_id:id,createdBy:req.user._id},req.body,{new:true})
    res.json({
        msg:'SUCCESS!',
        job
    })
}

exports.deleteJob=async(req,res)=>{
    const {id}=req.params
    const job=await Job.findOneAndRemove({
        _id:id,
        createdBy:req.user._id
    })
    res.json({
        msg:'SUCCESS!',
        job
    })
}