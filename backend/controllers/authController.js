const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User= require("../models/User");
require("dotenv").config();

const registerUser = async (req,res)=>{
    const {email,password}=req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  else{
  try{
            const hashedpassword= await bcrypt.hash(password,10);
            const  user= await User.create({email,password:hashedpassword});
            res.json({message:"user is register successfully"})
        }
        catch (error){
            res.status(500).json({error:error.message})
        }
      
  }
};
 const loginUser = async (req,res)=>{
    const {email,password}=req.body;
 
 if(!email||!password){
    res.status(400).json({message:"All field Required"});
 }
 try {
    const user = await User.findOne({email});
 if(!user){res.status(400).json({message:"user not found"})}
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){res.status(400).json({message:"Incorrect Password"})}
    const token = await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})
    res.status(200).json({token,user});
 } catch (error) {
    res.status(500).json({error:error.message})
 }
}
module.exports={registerUser,loginUser}