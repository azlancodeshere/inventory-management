import { Product } from "../models/product.model.js";

import {ApiError} from "../../utils/ApiError.js"
import { ApiResponse } from "../../utils/ApiResponse.js";

const createProduct = async (req,res) =>{
    try {

        const {productname,
            description,
            price,
            quantity,
            category,
            sku,
             lowStockThreshold } = req.body;

             if( !productname || price === undefined || quantity === undefined || !category || !sku){
                 throw new ApiError(
                    400,
                    "productname, price, quantity, category and sku are required"
                 )
             }


             const existingProduct = await Product.findOne({
                $or:[
                    {productname},
                    {sku}
                ]
             })

            if(existingProduct){
                throw new ApiError(
                    409,
                    "Product name or sku already exists"
                )
            }

            const product = await Product.create({
                productname,
                description,
                price,
                quantity,
                category,
                sku,
                lowStockThreshold
            })
        

            return res.status(201).json(
                new ApiResponse(
                    201,
                    "Product created sucessfully",
                    product
                )
            )


    } catch (error) {
        return res.status(
            error.statusCode || 500 
        ).json(
            new ApiError(
                error.statusCode || 500,
                error.message || "something went wrong"
            )
        );
        
    }
};

const getSingleProduct = async (req,res) =>{
    try {
        
        const product = await Product.findById(req.params.id);
        
        if (!product) {
            throw new ApiError(
                404,
                "product not found"
            )
        }


        return res.status(200).json(
            new ApiResponse(
                200,
                "Product feteched successfully",
                product
            )
        )

    } catch (error) {

        return res.status(
            error.statusCode || 500 
        ).json(
            new ApiError(
                error.statusCode || 500,
                error.message || "Something went wrong"
            )
        )
        
    }
}

const getAllProducts = async (req,res) =>{
     try {

        const products = await Product.find()

        return res.status(200).json(
            new ApiResponse(
                200,
                "Products fetched successfully",
                products

            )
        )
        
     } catch (error) {

        return res.status(
            error.statusCode || 500
        ).json(
            new ApiError(
                error.statusCode || 500,
                error.message || "Something went wrong"
            )
        )
        
     }
}
  
const updateProduct = async (req,res) =>{
    try {

        const {productname,
            description,
            category,
            price,
            quantity,
            sku,
            lowStockThreshold
        } = req.body;
    

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


            const product = await Product.findByIdAndUpdate(req.params.id,
                {
                   $set: updateData
                          
                },
                {
                    new:true,
                    runValidators:true
                }
            )

            if(!product){
                throw new ApiError(
                    404,
                    "Products details are not found",
                    product
                )
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
        )

        
    }
}



const deleteProduct = async (req,res) =>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        if(!product){
            throw new ApiError(
                404,
                "product not found"
            )
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
}



export {
    createProduct,
     getSingleProduct,
     getAllProducts,
     updateProduct,
     deleteProduct
}