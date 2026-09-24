import { Product } from "../models/product.model.js";

import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";


// ===============================
// CREATE PRODUCT
// ===============================
const createProduct = async (req, res) => {
    try {

        const {
            productname,
            description,
            price,
            quantity,
            category,
            sku,
            lowStockThreshold
        } = req.body;


        // Required fields check
        if (
            !productname ||
            price === undefined ||
            quantity === undefined ||
            !category ||
            !sku
        ) {
            throw new ApiError(
                400,
                "Productname, price, quantity, category and sku are required"
            );
        }


        // Check product only for current user
        const existingProduct = await Product.findOne({
            user: req.user._id,
            $or: [
                { productname },
                { sku }
            ]
        });


        if (existingProduct) {
            throw new ApiError(
                409,
                "Product name or SKU already exists"
            );
        }


        // Create product
        const product = await Product.create({
            productname,
            description,
            price,
            quantity,
            category,
            sku,
            lowStockThreshold,
            user: req.user._id
        });


        return res.status(201).json(
            new ApiResponse(
                201,
                "Product created successfully",
                product
            )
        );


    } catch (error) {

        return res.status(
            error.statusCode || 500
        ).json(
            new ApiError(
                error.statusCode || 500,
                error.message || "Something went wrong"
            )
        );
    }
};



// ===============================
// GET SINGLE PRODUCT
// ===============================
const getSingleProduct = async (req, res) => {
    try {

        const product = await Product.findOne({
            _id: req.params.id,
            user: req.user._id
        });


        if (!product) {
            throw new ApiError(
                404,
                "Product not found"
            );
        }


        return res.status(200).json(
            new ApiResponse(
                200,
                "Product fetched successfully",
                product
            )
        );


    } catch (error) {

        return res.status(
            error.statusCode || 500
        ).json(
            new ApiError(
                error.statusCode || 500,
                error.message || "Something went wrong"
            )
        );
    }
};



// ===============================
// GET ALL PRODUCTS
// ===============================
const getAllProducts = async (req, res) => {
    try {

        const products = await Product.find({
            user: req.user._id
        }).sort({
            createdAt: -1
        });


        return res.status(200).json(
            new ApiResponse(
                200,
                "Products fetched successfully",
                products
            )
        );


    } catch (error) {

        return res.status(
            error.statusCode || 500
        ).json(
            new ApiError(
                error.statusCode || 500,
                error.message || "Something went wrong"
            )
        );
    }
};



// ===============================
// UPDATE PRODUCT
// ===============================
const updateProduct = async (req, res) => {
    try {

        const {
            productname,
            description,
            category,
            price,
            quantity,
            sku,
            lowStockThreshold
        } = req.body;


        // Check at least one field
        if (
            productname === undefined &&
            description === undefined &&
            category === undefined &&
            price === undefined &&
            quantity === undefined &&
            sku === undefined &&
            lowStockThreshold === undefined
        ) {
            throw new ApiError(
                400,
                "At least one field is required"
            );
        }


        // Data to update
        const updateData = {};


        if (productname !== undefined) {
            updateData.productname = productname;
        }

        if (description !== undefined) {
            updateData.description = description;
        }

        if (category !== undefined) {
            updateData.category = category;
        }

        if (price !== undefined) {
            updateData.price = price;
        }

        if (quantity !== undefined) {
            updateData.quantity = quantity;
        }

        if (sku !== undefined) {
            updateData.sku = sku;
        }

        if (lowStockThreshold !== undefined) {
            updateData.lowStockThreshold = lowStockThreshold;
        }


        // If productname or SKU is being changed,
        // check duplicate only for current user
        if (
            productname !== undefined ||
            sku !== undefined
        ) {

            const duplicateProduct = await Product.findOne({
                user: req.user._id,
                _id: { $ne: req.params.id },
                $or: [
                    ...(productname !== undefined
                        ? [{ productname }]
                        : []),

                    ...(sku !== undefined
                        ? [{ sku }]
                        : [])
                ]
            });


            if (duplicateProduct) {
                throw new ApiError(
                    409,
                    "Product name or SKU already exists"
                );
            }
        }


        
       
        const product = await Product.findOneAndUpdate(
            {
                _id: req.params.id, //jis product ko update karna hai.
                user: req.user._id //sirf current logged-in user ka product update hoga.
            },
            {
                $set: updateData
            },
            {
                returnDocument: "after",
                runValidators: true
            }
        );


        if (!product) {
            throw new ApiError(
                404,
                "Product not found"
            );
        }


        return res.status(200).json(
            new ApiResponse(
                200,
                "Product updated successfully",
                product
            )
        );


    } catch (error) {

        return res.status(
            error.statusCode || 500
        ).json(
            new ApiError(
                error.statusCode || 500,
                error.message || "Something went wrong"
            )
        );
    }
};



// ===============================
// DELETE PRODUCT
// ===============================
const deleteProduct = async (req, res) => {
    try {

        // Delete only current user's product
        const product = await Product.findOneAndDelete({
            _id: req.params.id,
            user: req.user._id
        });


        if (!product) {
            throw new ApiError(
                404,
                "Product not found"
            );
        }


        return res.status(200).json(
            new ApiResponse(
                200,
                "Product deleted successfully",
                null
            )
        );


    } catch (error) {

        return res.status(
            error.statusCode || 500
        ).json(
            new ApiError(
                error.statusCode || 500,
                error.message || "Something went wrong"
            )
        );
    }
};



// ===============================
// EXPORT
// ===============================
export {
    createProduct,
    getSingleProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
};