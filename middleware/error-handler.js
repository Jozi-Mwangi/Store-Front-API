const errorMiddleware = async (err, req,res, next)=>{
    console.log(err);
    return res.status(500).json({msg:'Something Broke!'})
}

module.exports = errorMiddleware