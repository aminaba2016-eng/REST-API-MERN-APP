exports.postContact= async(req,res)=>{
    try{

    // console.log(req.body)
    // res.send("post contact")
        const newContact = new Contact (req.body)
        if(!req.body.email){
            res.status(400).send({message:"email is required check again"});
            return;
        }

        const user = Contact.findOne({email:req.body.email})
        if(user){
            res.status(400).send({message:"user already exist"})
            return;
        }
        const response = await newContact.save();
        res.send({response:response, message:"user is saved"})}
        catch(error){
        res.status(500).send("can not save it ")
    }
}