const mongoose=require('mongoose')

module.exports= ()=>{
    return mongoose.connect(process.env.MONGODB_URI).then(res=>{
        console.log("DB CONNECTED!")
    }).catch(err=>{
        console.log(err)
    })
}