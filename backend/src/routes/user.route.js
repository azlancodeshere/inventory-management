import {Router} from "express"  
import { registerUser,
            
 } from "../controllers/user.controller.js"


import { verifyJWT } from "../middleware/Auth.middleware.js"        

const router = Router()

router.route("/register").post(registerUser)

export default router