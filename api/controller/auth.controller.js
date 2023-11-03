import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
export const signup = async(req,res,next)=>{

    
    const {username,email,password} = req.body; //this is for storing the data in database
    const hashedPassword = bcryptjs.hashSync(password,10);//this will encrypt the password and 10 is salt number the no.of round it will take to combine password with salt number
    const newUser = new User({username,email,password:hashedPassword});//model that we hv cretaed before
    try {
        await newUser.save();//this will save and it takes some time that's why we use async
        res.status(201).json('user created successfully');//this will give status message
    } catch (error) {
        //res.status(500).json(error.message)//this is bcz when the username exist it'llnot create another one and the error will be  shown it to user 
        next(error);
        //next(errorHandler(550,'error from the function'))this is the custom error handle function we hv cretaed in utils.js
    }
    
}
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) return next(errorHandler(404, 'User not found!'));
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = validUser._doc;//this is for to not showing password and as password is already used as constant above so here we used pass.
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } catch (error) {
      next(error);
    }
}