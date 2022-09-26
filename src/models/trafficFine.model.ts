import { Schema, model, Document } from "mongoose";

const trafficFine=new Schema({
    driverIdCard:{
        type : String,
        required :true,
        min: 11,

    },
    idDriverCard:{
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

interface ITrafficFine extends Document{
    driverIdCard:string;
    idDriverCard:string;
    imageAboutPath:string;
    reasonFine:string;
    comment:string;
    latituded:string;
    longitude:string;
};


export default model<ITrafficFine>('trafficFine', trafficFine);