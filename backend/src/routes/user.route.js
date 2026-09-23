import {Router} from "express"  
import { registerUser,
    loginUser,
   logoutUser,
    getCurrentUser,
    updateAccount,
    changePassword
 } from "../controllers/user.controller.js"
import { verifyJWT } from "../middleware/Auth.middleware.js"

const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/current-user").get(
    verifyJWT,
    getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccount)
router.route("/change-password").patch(verifyJWT,changePassword)
    
export default router