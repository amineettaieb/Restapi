const mongoose = require ("mongoose")
const connectdb=async()=>{
    try {
       await mongoose.connect(process.env.mongooURL)
        console.log("Database is connect")
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectdb