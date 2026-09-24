import { Calculation } from "../models/productCalculation.model";

import { ApiError } from "../../utils/ApiError";

import { ApiResponse } from "../../utils/ApiResponse";


const calcluteProduct = async (req, res) =>{

    try {

        const {oldTotalProdct, newTotalProdct} = req.body;

        if( typeof oldTotalProdct !== "number" || 
            typeof newTotalProdct !== "number" ||

            oldTotalProdct <=0 ||
            newTotalProdct <0 
        ){
            throw new ApiError (
                400,
                "Please provide a valid TotalPrdoductt"
            )
            
        }

        const increase = newTotalProdct - oldTotalProdct;

        const precantage = (increase/ oldTotalProdct) * 100

        
        
    } catch (error) {
        
    }

}