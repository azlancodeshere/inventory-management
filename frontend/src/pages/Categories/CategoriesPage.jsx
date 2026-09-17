import React, { useEffect, useState } from "react";

const CategoriesPage = () => {

    const [products, setProducts] = useState([])

    const getAllProducts = async ()  =>{
        try {
            
            const response = await api.get("/products/all-products")
            console.log(response.data)
            setProducts(response.data.data)
        } catch (error) {
            console.log("Error in gett all products:", error)
        }
    }

    useEffect(()=>{
        getAllProducts()
    })

    return (
        <div className="p-6">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    Categories
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                    Manage your product categories
                </p>
            </div>


            {/* Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Electronics */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">

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


                    {/* Product */}
                    <div className="space-y-3">

                        <div className="flex items-center justify-between border border-gray-100 rounded-lg p-3">

                            <div>
                                <h3 className="font-medium text-gray-800">
                                    Laptop
                                </h3>

                                <p className="text-sm text-gray-500">
                                    SKU: LAP001
                                </p>
                            </div>

                            <div className="text-right">

                                <p className="font-semibold text-gray-800">
                                    ₹50,000
                                </p>

                                <p className="text-sm text-gray-500">
                                    Stock: 10
                                </p>

                            </div>

                        </div>


                        <div className="flex items-center justify-between border border-gray-100 rounded-lg p-3">

                            <div>
                                <h3 className="font-medium text-gray-800">
                                    Mouse
                                </h3>

                                <p className="text-sm text-gray-500">
                                    SKU: MOU001
                                </p>
                            </div>

                            <div className="text-right">

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
                <div className="bg-white border border-gray-200 rounded-xl p-5">

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

                        <div className="flex items-center justify-between border border-gray-100 rounded-lg p-3">

                            <div>
                                <h3 className="font-medium text-gray-800">
                                    T-Shirt
                                </h3>

                                <p className="text-sm text-gray-500">
                                    SKU: TS001
                                </p>
                            </div>

                            <div className="text-right">

                                <p className="font-semibold text-gray-800">
                                    ₹500
                                </p>

                                <p className="text-sm text-gray-500">
                                    Stock: 20
                                </p>

                            </div>

                        </div>


                        <div className="flex items-center justify-between border border-gray-100 rounded-lg p-3">

                            <div>
                                <h3 className="font-medium text-gray-800">
                                    Jeans
                                </h3>

                                <p className="text-sm text-gray-500">
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
                <div className="bg-white border border-gray-200 rounded-xl p-5">

                    <div className="flex items-center justify-between mb-5">

                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                Grocery
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                3 Products
                            </p>
                        </div>

                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            🛒
                        </div>

                    </div>


                    <div className="space-y-3">

                        <div className="flex items-center justify-between border border-gray-100 rounded-lg p-3">

                            <div>
                                <h3 className="font-medium text-gray-800">
                                    Rice
                                </h3>

                                <p className="text-sm text-gray-500">
                                    SKU: RIC001
                                </p>
                            </div>

                            <div className="text-right">

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
                <div className="bg-white border border-gray-200 rounded-xl p-5">

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

                        <div className="flex items-center justify-between border border-gray-100 rounded-lg p-3">

                            <div>
                                <h3 className="font-medium text-gray-800">
                                    Headphones
                                </h3>

                                <p className="text-sm text-gray-500">
                                    SKU: HEAD001
                                </p>
                            </div>

                            <div className="text-right">

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
    );
};

export default CategoriesPage;