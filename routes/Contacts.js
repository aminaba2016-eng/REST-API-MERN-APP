//ici tous ce que query eli bech tsir 3al collectin contact nalgoha lehne

const express = require("express")
const router = express.Router()
const contact = require("../models/contact")
const controllers = require("../controllers/contact.controllers")
//testt routing
router.get("/hello",(req,res)=>{
    res.send("hello routing");
});
//post contact
//get all contacts
//get contact by id
//delete contact by id
//update a contact by id

//post contact
router.post("/",controllers.postContact())

    //get all contacts
    //@path:http://localhost:500/api/contact
    router.get("/", async(req,res)=>{
        try{
            const resutlt = await Contact.find();
            res.send({response:result, message:"geting contact sucssefuly"})          
            }
            
            catch(error){
            res.status(500).send({message:"can not get contact "})
        }
    })

    //get all contacts by id
    //@path:http://localhost:500/api/contact
    router.get("/:id", async(req,res)=>{
        try{
            const resutlt = await Contact.findOne({ _id: req.params.id});
            res.send({response:result, message:"geting contact sucssefuly"})          
            }
            catch(error){
            res.status(500).send({message:"ther's no contact with this id "})
        }
    })

    //delete contact by id
    //@path:http://localhost:500/api/contact/:id
    router.delete("/:id", async(req,res)=>{
        try{
           const result = await contact.deleteOne({ _id:req.params.id})
           result.n?res.send({response:"user deleted"}):res.send("there is no user with this id")

        }catch(error){
            res.send("there is no id")
        }
    })
    //update contact by id
    //@path:http://localhost:500/api/contact/:id
    //@params id ,body
    router.put("/:id", async(req,res)=>{
        try{
           const result = await contact.updateOne({ _id:req.params.id},{$set:{...req.body}})
           console.log(result)
           result.nModified
           ?res.send({mrssage:"user updated"})
           :res.send({message:"contact already updated"})

        }catch(error){
            res.status(400).send({message:"there is no user with this id"})
        }
    })





module.exports = router;