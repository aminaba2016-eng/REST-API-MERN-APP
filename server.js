const express = require("express");
require('dotenv').config();
const dbConnect=require("./config/connectDB");

const app = express();
//CONNECT DB
dbConnect();

//middleware routing body parse
app.use(express.json());

//create route(deplacement men pagel page)
app.use("/api/contact", require("./routes/Contacts"))

const PORT=process.env.PORT;
//creation de serveur
  app.listen(PORT,(err)=>
  err ? console.error(err) : console.log("server is running"));