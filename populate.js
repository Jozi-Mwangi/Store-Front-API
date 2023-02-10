require ('dotenv').config()

const Product = require ('./models/Product')
const connectDB = require ('./db/connect')
const jsonProducts = require ('./products.json')

const start = async (req,res) => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Success!')
        process.exit(0)
    
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()