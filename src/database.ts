import mongoose from "mongoose";

mongoose.connect("mongodb+srv://xander:qqqquuuueeee123@digesetdb.xqw4ajo.mongodb.net/?retryWrites=true&w=majority",{})
.then(db=>console.log('Database is conected'))
.catch((err)=> console.log(err));