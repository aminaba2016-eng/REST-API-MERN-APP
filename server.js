const express = require("express");
require('dotenv').config();
const dbConnect=require("./config/connectDB");

const app = express();
//CONNECT DB
dbConnect();



//create route(deplacement men pagel page)
const PORT=process.env.PORT;
//creation de serveur
  app.listen(PORT,(err)=>
  err ? console.error(err) : console.log("server is running"));