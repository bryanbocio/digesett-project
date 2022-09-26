import { Response, Request } from "express";


export function createTrafficFine(req:Request, res:Response){
    console.log("saving traffic fine")
    console.log(req.body);



    
    return res.json({
        message: 'traffic fine saved Successfully'
    });
};



export function getAllTrafficFines(req:Request, res:Response):Response{
    return  res.send('all traffic fines');
}