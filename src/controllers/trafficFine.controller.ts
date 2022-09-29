import { Response, Request, response } from "express";
import trafficFine, {ITrafficFine} from "../models/trafficFine.model";
import path from "path";
import fs from "fs-extra";


export async function createTrafficFine(req:Request, res:Response): Promise<Response>{
    const newTrafficFineCreated=new trafficFine(createTrafficFineObject(req));
    if(!newTrafficFineCreated) return response.status(400).json({message:'The traffic fine could not be created'})
    await newTrafficFineCreated.save();
    
    return res.json({
        message: 'traffic fine saved Successfully',
        newTrafficFineCreated
    });
};

export async function getAllTrafficFines(req:Request, res:Response):Promise<Response>{
   const allTrafficFines=await trafficFine.find();
   if(!allTrafficFines)return res.status(400).json({message:'could not get traffic fines'});
   return res.json(allTrafficFines);
}

export async function getAOnlyTrafficFine(req:Request, res:Response):Promise<Response>{
   const {id}= req.params;
   const trafficFineFound=await trafficFine.findById(id);
    
   if(!trafficFineFound)return res.status(400).json({message:'the traffic fine could not found'});

   return res.json(trafficFineFound);
}

export async function deleteTafficFine(req:Request, res:Response): Promise<Response>{
    const{id}=req.params;
    const trafficFineEliminated=await trafficFine.findByIdAndRemove(id);
    if(trafficFineEliminated){
        await fs.unlink(path.resolve(trafficFineEliminated.imageAboutPath));
    }

    return res.json({
        message: 'Traffic fine has been eliminate',
        trafficFineEliminated,
    });
}

function createTrafficFineObject(req:Request){
    const {driverIdCard, idDriverCar, reasonFine, comment, latituded, longitude}=req.body;
  
    const newTrafficFine={
        driverIdCard: driverIdCard,
        idDriverCar: idDriverCar,
        imageAboutPath: req.file?.path,
        reasonFine: reasonFine,
        comment: comment,
        latituded: latituded,
        longitude: longitude,
    };
    return newTrafficFine; 

}
