import express,{Application} from "express";
import authRoutes  from "./routes/auth";
import trafficFineRoutes from "./routes/trafficFine";
import morgan from "morgan";
import path from "path";

const app: Application=express();


//settings
app.set('port', process.env.PORT || 3000);



//middlewares
app.use(morgan('dev'));
app.use(express.json())


//routes
app.use('/api/auth',authRoutes);
app.use('/api/traffic-fine/',trafficFineRoutes);


//this folder for this aplicaction will be used to store public files
app.use('/uploads', express.static(path.resolve('/uploads')));


export default app;