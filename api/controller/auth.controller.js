import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';
export const signup = async(req,res)=>{

    
    const {username,email,password} = req.body; //this is for storing the data in database
    const hashedPassword = bcryptjs.hashSync(password,10);//this will encrypt the password and 10 is salt number the no.of round it will take to combine password with salt number
    const newUser = new User({username,email,password:hashedPassword});//model that we hv cretaed before
    try {
        await newUser.save();//this will save and it takes some time that's why we use async
        res.status(201).json('user created successfully');//this will give status message
    } catch (error) {
        res.status(500).json(error.message)//this is bcz when the username exist it'llnot create another one and the error will be  shown it to user 
    }
    
}