const User= require("../models/user");
const validator=require("../utils/validator");
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken');
const register= async(req,res)=>{
    try{
        // Validate the data 
        validator(req.body);
        const {firstName,emailId,password}=req.body;
        req.body.password=await bcrypt.hash(password,10);
        jwt.sign({emailId},"fnjskbhsb",{expiresIn:60*60});
        const user=await User.create(req.body);

    }
    catch(err){
        res.status(400).send("Error"+err);

    }


}