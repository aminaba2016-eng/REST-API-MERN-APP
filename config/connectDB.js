const mongoose = require("mongoose")

//Pour connaitre notre base est connectée ou non
const connectDB = async() =>{
    try{
        let resutlt= await mongoose.connect(process.env.DB_URI,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
        console.log("data base connected")
    }
    catch (error){
        console.log(`cannot connect to data base ${error}`)


    }
    
}
module.exports=connectDB


    // concurrently bech trunili front wel back
