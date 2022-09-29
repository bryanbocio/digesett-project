import { Router } from "express";
import { tokeValidation } from "../libs/verifyToken";

import { getAllTrafficFines,createTrafficFine, getAOnlyTrafficFine, deleteTafficFine, updateTrafficFine } from "../controllers/trafficFine.controller";
import multer from "../libs/multer";


const router:Router=Router();

router.post('/create-traffic-fine', tokeValidation,multer.single('image'),createTrafficFine)
router.get('/traffic-fine',tokeValidation,getAllTrafficFines);
router.get('/traffic-fine/:id',tokeValidation,getAOnlyTrafficFine);
router.delete('/delete-traffic-fine/:id', tokeValidation, deleteTafficFine);
router.put('/update-traffic-fine/:id',tokeValidation, updateTrafficFine);

export default router;