const notFoundMiddleware = (req,res) =>{
    res
    .status(404)
    .send('Route does not Exist')
}

module.exports = notFoundMiddleware