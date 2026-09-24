import {Router} from "express"

import {
    
    calculateTotalProduct,
    calculateTotalStock
} from "../controllers/calculation.controller.js"

import { verifyJWT } from "../middleware/Auth.middleware.js"

const router = Router();

router.route("/calculate-product").post(calculateTotalProduct)

router.route("/calculate-Stock").post(calculateTotalStock)