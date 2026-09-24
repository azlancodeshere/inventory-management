import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { Product } from "../models/product.model.js";


// Calculate Product percentage
const calculateTotalProduct = async (req, res) => {
    try {

        const userId = req.user._id;

        const now = new Date();

        // Current month start
        const currentMonthStart = new Date(
            now.getFullYear(),
            now.getMonth(),
            1
        );

        // Previous month start
        const previousMonthStart = new Date(
            now.getFullYear(),
            now.getMonth() - 1,
            1
        );


        // Products created before current month
        const oldTotalProduct = await Product.countDocuments({
            user: userId,
            createdAt: {
                $lt: currentMonthStart
            }
        });


        // Products created before next month
        const newTotalProduct = await Product.countDocuments({
            user: userId,
            createdAt: {
                $lt: new Date(
                    now.getFullYear(),
                    now.getMonth() + 1,
                    1
                )
            }
        });


        let percentage = 0;

        if (oldTotalProduct > 0) {

            const difference =
                newTotalProduct - oldTotalProduct;

            percentage =
                (difference / oldTotalProduct) * 100;
        }


        return res.status(200).json(
            new ApiResponse(
                200,
                "Product percentage calculated successfully",
                {
                    oldTotalProduct,
                    newTotalProduct,
                    percentage: Number(
                        percentage.toFixed(2)
                    )
                }
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



// Calculate Stock percentage
const calculateTotalStock = async (req, res) => {
    try {

        const userId = req.user._id;

        const now = new Date();

        const currentMonthStart = new Date(
            now.getFullYear(),
            now.getMonth(),
            1
        );


        // Previous month's total stock
        const previousProducts = await Product.find({
            user: userId,
            createdAt: {
                $lt: currentMonthStart
            }
        });


        const oldTotalStock = previousProducts.reduce(
            (total, product) =>
                total + Number(product.quantity || 0),
            0
        );


        // Current total stock
        const currentProducts = await Product.find({
            user: userId
        });


        const newTotalStock = currentProducts.reduce(
            (total, product) =>
                total + Number(product.quantity || 0),
            0
        );


        let percentage = 0;

        if (oldTotalStock > 0) {

            const difference =
                newTotalStock - oldTotalStock;

            percentage =
                (difference / oldTotalStock) * 100;
        }


        return res.status(200).json(
            new ApiResponse(
                200,
                "Stock percentage calculated successfully",
                {
                    oldTotalStock,
                    newTotalStock,
                    percentage: Number(
                        percentage.toFixed(2)
                    )
                }
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


export {
    calculateTotalProduct,
    calculateTotalStock
};