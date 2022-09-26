import { Router } from "express";
import { getAllTrafficFines,createTrafficFine } from "../controllers/trafficFine.controller";
import multer from "../libs/multer";

const router:Router=Router();

router.route('/create-traffic-fine').post(multer.single('image'),createTrafficFine);
router.route('/all-traffic-fine').get(getAllTrafficFines);


export default router;