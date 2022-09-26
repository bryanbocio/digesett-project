import mongoose from "mongoose";

export async function startConnection(){
   await mongoose.connect("mongodb+srv://xander:qqqquuuueeee123@digesetdb.xqw4ajo.mongodb.net/?retryWrites=true&w=majority",{})
    .then(db=>console.log('Database is conected'))
    .catch((err)=> console.log(err));
}
