import { Router } from "express";
import { signin, signup, profile} from "../controllers/auth.controller";
import { tokeValidation } from "../libs/verifyToken";
const router:Router=Router();


router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile',tokeValidation,profile);




export default router;