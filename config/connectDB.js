const mongoose = require("mongoose")

const connectDB=async()=>{
    try{
        let resutlt= await mongoose.connect(process.env.DB_URI);
        console.log("data base connected")
    }
    catch (error){
        console.log(`cannot connect to data base ${error}`)


    }
    
}
module.exports=connectDB
