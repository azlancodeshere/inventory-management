import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const calculateProduct = async (req, res) => {
    try {

        const {
            oldTotalProduct,
            newTotalProduct
        } = req.body;


        // Validation
        if (
            typeof oldTotalProduct !== "number" ||
            typeof newTotalProduct !== "number" ||
            oldTotalProduct <= 0 ||
            newTotalProduct < 0
        ) {
            throw new ApiError(
                400,
                "Please provide valid total product values"
            );
        }


        // Difference
        const increase =
            newTotalProduct - oldTotalProduct;


        // Percentage
        const percentage =
            (increase / oldTotalProduct) * 100;


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


export {
    calculateProduct
};