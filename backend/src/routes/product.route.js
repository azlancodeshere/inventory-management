import { Router } from "express"
import { createProduct,
     getSingleProduct,
     getAllProducts,
     updateProduct,
     deleteProduct} from "../controllers/product.controller.js"
     import { verifyJWT } from "../middleware/Auth.middleware.js";

     const router = Router();

     router.route("/create-product").post(
        verifyJWT, //Products ko sirf logged-in user access kare
       createProduct)

     router.route("/single-product/:id").get(
        verifyJWT,
        getSingleProduct)

     router.route("/all-products").get(
        verifyJWT,
        getAllProducts)

     router.route("/update-product/:id").patch(
        verifyJWT,
        updateProduct)
     router.route("/delete-product/:id").delete(
        verifyJWT,
        deleteProduct)



     export default router