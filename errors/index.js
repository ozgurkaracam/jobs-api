
module.exports=(err,req,res,next)=>{
    let msg=err.message || 'You Have An Error!'
    let statusCode=err.status || 500
    if(err.code==11000){
        msg=err.keyValue.email+' already taken!'
        statusCode=400
    }
    if(err.name=='ValidationError'){
        msg=Object.values(err.errors).map(e=>e.message).join(' , ')
    }

        return res.status(statusCode).json({
            msg,err
        })
}