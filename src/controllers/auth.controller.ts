import { Response, Request } from "express";
import User, {IUser} from "../models/User";
import jwt from "jsonwebtoken";

export const signup= async (req:Request, res:Response)=>{
    //saving new user
   const user:IUser= new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
   user.password=await user.encryptPassword(user.password);
   const savedUser=await user.save();

   //creating a token
   const token:string=jwt.sign({_id:savedUser._id},process.env.SECRECT_TOKEN || 'SECRECT_TOKEN');
   res.header('auth-token',token).json(savedUser);

}
export const signin=async (req:Request, res:Response)=>{

    const user=  await User.findOne({email:req.body.email});
    if(!user)return res.status(400).json('email or password wrong');

    const correctPassword:boolean=await user.validatePassword(req.body.password);
    if(!correctPassword) return res.status(400).json('Password is wrong');

    const token:string=jwt.sign({_id: user._id}, process.env.SECRECT_TOKEN || 'SECRECT_TOKEN',{
        expiresIn: 60 * 60 * 24
    });
    res.header('auth-token',token).json(user);
}
export const profile=(req:Request, res:Response)=>{
    res.send('profile')
}