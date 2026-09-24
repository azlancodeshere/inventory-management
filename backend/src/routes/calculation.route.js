import { Router } from "express";

import {
    calculateTotalProduct,
    calculateTotalStock
} from "../controllers/calculation.controller.js";

import { verifyJWT } from "../middleware/Auth.middleware.js";

const router = Router();


// Calculate total product percentage
router.route("/calculate-product").post(
    verifyJWT,
    calculateTotalProduct
);


// Calculate total stock percentage
router.route("/calculate-stock").post(
    verifyJWT,
    calculateTotalStock
);


export default router;