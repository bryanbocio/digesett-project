import { Schema, model, Document } from "mongoose";

const trafficFine=new Schema({
    driverIdCard:{
        type : String,
        required :true,
        min: 11,

    },
    idDriverCar:{
        type : String,
        required :true,
        min: 7,
    },
    imageAboutPath:{
        type : String,
    },
    reasonFine:{
        type : String,
    },
    comment:{
        type : String,
    },
    latituded:{
        type : String,
    },
    longitude:{
        type : String,
    },
});

export interface ITrafficFine extends Document{
    driverIdCard:string;
    idDriverCar:string;
    imageAboutPath:string;
    reasonFine:string;
    comment:string;
    latituded:string;
    longitude:string;
};


export default model<ITrafficFine>('trafficFine', trafficFine);