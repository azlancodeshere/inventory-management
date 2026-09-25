import React, { useState, useEffect } from "react";

import {
    Package,
    TrendingUp,
    TrendingDown,
    AlertTriangle,
    Boxes,
} from "lucide-react";

import api from "../../api/api.js";


const Cards = ({ products }) => {

    const [productCalculation, setProductCalculation] = useState(null);
    const [stockCalculation, setStockCalculation] = useState(null);



    useEffect(() => {

        const calculatePercentage = async () => {

            try {

               
                const productResponse = await api.post(
                    "/calculation/calculate-product"
                );


                
                const stockResponse = await api.post(
                    "/calculation/calculate-stock"
                );


                setProductCalculation(
                    productResponse.data.data
                );

                setStockCalculation(
                    stockResponse.data.data
                );


            } catch (error) {

                console.log(
                    "Error calculating percentage:",
                    error
                );

            }
        };


        calculatePercentage();

    }, [products]);


    
   

    const totalStock = products.reduce(
        (total, product) =>
            total + Number(product.quantity || 0),
        0
    );



    const lowStock = products.filter((product) => {
    const quantity = Number(product.quantity) || 0;
    const threshold = Number(product.lowStockThreshold);

    return quantity > 0 && quantity <= threshold;
}).length;




    const outOfStock = products.filter(
        product =>
            Number(product.quantity) === 0
    ).length;


    const productChange =
        productCalculation?.percentage;


    const productChangeType =
        productCalculation?.change;


    
    const stockChange =
        stockCalculation?.percentage;


    const stockChangeType =
        stockCalculation?.change;


    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">



            <div className="bg-white rounded-xl border border-gray-200 p-5">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm text-gray-500">
                            Total Products
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-2">
                            {products.length}
                        </h3>

                    </div>


                    <div className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">

                        <Package
                            size={22}
                            className="text-gray-700"
                        />

                    </div>

                </div>


                <div className="flex items-center gap-1 mt-4 text-sm">

                    {productChangeType === "increase" && (
                        <TrendingUp
                            size={16}
                            className="text-green-600"
                        />
                    )}

                    {productChangeType === "decrease" && (
                        <TrendingDown
                            size={16}
                            className="text-red-600"
                        />
                    )}


                    <span
                        className={`font-medium ${
                            productChangeType === "increase"
                                ? "text-green-600"
                                : productChangeType === "decrease"
                                ? "text-red-600"
                                : "text-gray-500"
                        }`}
                    >

                        {productChangeType === "new"
                            ? "New"
                            : productChange !== null &&
                              productChange !== undefined
                            ? `${productChange}%`
                            : "--"
                        }

                    </span>


                    <span className="text-gray-400">
                        from last month
                    </span>

                </div>

            </div>




            <div className="bg-white rounded-xl border border-gray-200 p-5">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm text-gray-500">
                            Total Stock
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-2">
                            {totalStock}
                        </h3>

                    </div>


                    <div className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">

                        <Boxes
                            size={22}
                            className="text-gray-700"
                        />

                    </div>

                </div>


                <div className="flex items-center gap-1 mt-4 text-sm">

                    {stockChangeType === "increase" && (
                        <TrendingUp
                            size={16}
                            className="text-green-600"
                        />
                    )}

                    {stockChangeType === "decrease" && (
                        <TrendingDown
                            size={16}
                            className="text-red-600"
                        />
                    )}


                    <span
                        className={`font-medium ${
                            stockChangeType === "increase"
                                ? "text-green-600"
                                : stockChangeType === "decrease"
                                ? "text-red-600"
                                : "text-gray-500"
                        }`}
                    >

                        {stockChangeType === "new"
                            ? "New"
                            : stockChange !== null &&
                              stockChange !== undefined
                            ? `${stockChange}%`
                            : "--"
                        }

                    </span>


                    <span className="text-gray-400">
                        from last month
                    </span>

                </div>

            </div>



         

            <div className="bg-white rounded-xl border border-gray-200 p-5">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm text-gray-500">
                            Low Stock
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-2">

                            {lowStock}

                        </h3>

                    </div>


                    <div className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">

                        <AlertTriangle
                            size={22}
                            className="text-gray-700"
                        />

                    </div>

                </div>


                <div className="flex items-center gap-1 mt-4 text-sm text-gray-500">

                    <span>
                        Needs attention
                    </span>

                </div>

            </div>



        
            <div className="bg-white rounded-xl border border-gray-200 p-5">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm text-gray-500">
                            Out of Stock
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-2">

                            {outOfStock}

                        </h3>

                    </div>


                    <div className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">

                        <TrendingDown
                            size={22}
                            className="text-gray-700"
                        />

                    </div>

                </div>


                <div className="flex items-center gap-1 mt-4 text-sm text-gray-500">

                    <span>
                        Requires restocking
                    </span>

                </div>

            </div>

        </div>
    );
};


export default Cards;