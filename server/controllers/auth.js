import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import users from '../models/auth.js';

export const signup = async (req, res) => {
 const {name,email,password} = req.body;
 try{
    const existinguser = await users.findOne({email});
    if(!existinguser)
    {
        return res.status(404).json({message:"User already Exist."})

    }
    const hashedPassword =await bcrypt.hash(password,12)
    const newUser =await users.create ({name,email,password:hashedPassword})
    const token =jwt.sign({email:newUser.email,id:newUser._id},"test",{expiresIn:'1h'});
    res.status(200).json({result:newUser,token})
} catch(error){
    req.status(500).json("something went wrong..")
 }

};

export const login = async (req, res) => {
    const {email,password} = req.body;
    try{
       const existinguser = await users.findOne({email});
       if(!existinguser)
       {
           return res.status(404).json({message:"User doesn't Exist."})
   
       }
       const isPasswordCrt = await bcrypt(password,existinguser.password)
       if(!isPasswordCrt)
       {
        return res.status(400).json({message:"Invaild credentials"})
       }
       const token =jwt
   } catch(error){
       req.status(500).json("something went wrong..")
    }
   
    
};