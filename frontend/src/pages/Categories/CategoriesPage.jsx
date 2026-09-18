import React, { useEffect, useState } from "react";
import api from "../../api/api.js";

const CategoriesPage = () => {

    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {

        try {

            const response = await api.get("/products/all-products");

            console.log(response.data);

            setProducts(response.data.data);

        } catch (error) {

            console.log("Error in getting all products:", error);

        }

    };


    useEffect(() => {

        getAllProducts();

    }, []);


    return (

        <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

            <div className="max-w-7xl mx-auto">


                {/* Header */}
                <div className="mb-6">

                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Categories
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Manage your product categories
                    </p>

                </div>


                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


                    {/* Electronics */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">

                        <div className="flex items-center justify-between mb-5">

                            <div>

                                <h2 className="text-lg font-semibold text-gray-900">
                                    Electronics
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    2 Products
                                </p>

                            </div>


                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                📦
                            </div>

                        </div>


                        {/* Products */}
                        <div className="space-y-3">


                            {/* Laptop */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-100 rounded-lg p-3">

                                <div>

                                    <h3 className="font-medium text-gray-800">
                                        Laptop
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        SKU: LAP001
                                    </p>

                                </div>


                                <div className="text-left sm:text-right">

                                    <p className="font-semibold text-gray-800">
                                        ₹50,000
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Stock: 10
                                    </p>

                                </div>

                            </div>


                            {/* Mouse */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-100 rounded-lg p-3">

                                <div>

                                    <h3 className="font-medium text-gray-800">
                                        Mouse
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        SKU: MOU001
                                    </p>

                                </div>


                                <div className="text-left sm:text-right">

                                    <p className="font-semibold text-gray-800">
                                        ₹800
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Stock: 5
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Clothing */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">

                        <div className="flex items-center justify-between mb-5">

                            <div>

                                <h2 className="text-lg font-semibold text-gray-900">
                                    Clothing
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    2 Products
                                </p>

                            </div>


                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                👕
                            </div>

                        </div>


                        <div className="space-y-3">


                            {/* T-Shirt */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-100 rounded-lg p-3">

                                <div>

                                    <h3 className="font-medium text-gray-800">
                                        T-Shirt
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        SKU: TS001
                                    </p>

                                </div>


                                <div className="text-left sm:text-right">

                                    <p className="font-semibold text-gray-800">
                                        ₹500
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Stock: 20
                                    </p>

                                </div>

                            </div>


                            {/* Jeans */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-100 rounded-lg p-3">

                                <div>

                                    <h3 className="font-medium text-gray-800">
                                        Jeans
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        SKU: JEANS001
                                    </p>

                                </div>


                                <div className="text-left sm:text-right">

                                    <p className="font-semibold text-gray-800">
                                        ₹1,200
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Stock: 8
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Grocery */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">

                        <div className="flex items-center justify-between mb-5">

                            <div>

                                <h2 className="text-lg font-semibold text-gray-900">
                                    Grocery
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    1 Product
                                </p>

                            </div>


                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                🛒
                            </div>

                        </div>


                        <div className="space-y-3">


                            {/* Rice */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-100 rounded-lg p-3">

                                <div>

                                    <h3 className="font-medium text-gray-800">
                                        Rice
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        SKU: RIC001
                                    </p>

                                </div>


                                <div className="text-left sm:text-right">

                                    <p className="font-semibold text-gray-800">
                                        ₹900
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Stock: 30
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Accessories */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">

                        <div className="flex items-center justify-between mb-5">

                            <div>

                                <h2 className="text-lg font-semibold text-gray-900">
                                    Accessories
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    1 Product
                                </p>

                            </div>


                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                🎧
                            </div>

                        </div>


                        <div className="space-y-3">


                            {/* Headphones */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-100 rounded-lg p-3">

                                <div>

                                    <h3 className="font-medium text-gray-800">
                                        Headphones
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        SKU: HEAD001
                                    </p>

                                </div>


                                <div className="text-left sm:text-right">

                                    <p className="font-semibold text-gray-800">
                                        ₹1,500
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Stock: 12
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>

        </div>

    );

};

export default CategoriesPage;