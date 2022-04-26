
module.exports=(err,req,res,next)=>{
    let msg='An Error!'
    let statusCode=500
    if(err.name=='ValidationError'){
        msg=Object.values(err.errors).map(e=>e.message).join(' , ')
    }

        return res.status(statusCode).json({
            msg,
        })
}