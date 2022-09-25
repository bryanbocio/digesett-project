import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IPayload{
    _id:string;
    iat:number;
    exp:number;
}


export const tokeValidation= (req:Request, res:Response, next:NextFunction)=>{
    const token = req.header('auth-token');
    if(!token) return res.status(400).json('denied acces');
    
    const payload=jwt.verify(token, process.env.SECRECT_TOKEN || 'SECRECT_TOKEN') as IPayload;

    req.userId=payload._id;
    next();
}