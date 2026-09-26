import React, { useEffect, useState } from "react";
import api from "../../api/api.js";
import Skeleton from "react-loading-skeleton";

const CategoriesPage = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    const getAllProducts = async () => {

        try {

            setLoading(true);

            const response = await api.get("/products/all-products");

            console.log(response.data);

            setProducts(response.data.data);

        } catch (error) {

            console.log("Error in getting all products:", error);

        } finally {

            setLoading(false);

        }

    };


    useEffect(() => {
        getAllProducts();
    }, []);


    const categories = [
        ...new Set(
            products.map((product) => product.category)
        )
    ];


    return (

        <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

            <div className="max-w-7xl mx-auto">


              

                <div className="mb-6">

                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Categories
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Manage your product categories
                    </p>

                </div>


               

                {loading ? (

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {[1, 2, 3, 4].map((item) => (

                            <div
                                key={item}
                                className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm"
                            >

                                

                                <div className="flex items-center justify-between mb-5">

                                    <div className="flex-1">

                                        <Skeleton
                                            width={120}
                                            height={22}
                                        />

                                        <div className="mt-2">

                                            <Skeleton
                                                width={80}
                                                height={14}
                                            />

                                        </div>

                                    </div>


                                    <Skeleton
                                        width={40}
                                        height={40}
                                        borderRadius={8}
                                    />

                                </div>


                              

                                <div className="space-y-3">

                                    {[1, 2, 3].map((product) => (

                                        <div
                                            key={product}
                                            className="flex items-center justify-between gap-3 border border-gray-100 rounded-lg p-3"
                                        >

                                            <div className="flex-1">

                                                <Skeleton
                                                    width="60%"
                                                    height={17}
                                                />

                                                <div className="mt-1">

                                                    <Skeleton
                                                        width="40%"
                                                        height={13}
                                                    />

                                                </div>

                                            </div>


                                            <div className="text-right">

                                                <Skeleton
                                                    width={55}
                                                    height={17}
                                                />

                                                <div className="mt-1">

                                                    <Skeleton
                                                        width={75}
                                                        height={13}
                                                    />

                                                </div>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                ) : (

                    /* ================= CATEGORIES ================= */

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {categories.length > 0 ? (

                            categories.map((category) => {

                                const categoryProducts =
                                    products.filter(
                                        (product) =>
                                            product.category === category
                                    );


                                return (

                                    <div
                                        key={category}
                                        className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm"
                                    >

                                        {/* Category Header */}

                                        <div className="flex items-center justify-between mb-5">

                                            <div>

                                                <h2 className="text-lg font-semibold text-gray-900 capitalize">
                                                    {category}
                                                </h2>

                                                <p className="text-sm text-gray-500 mt-1">

                                                    {categoryProducts.length}{" "}

                                                    {categoryProducts.length === 1
                                                        ? "Product"
                                                        : "Products"
                                                    }

                                                </p>

                                            </div>


                                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                                📦
                                            </div>

                                        </div>


                                        {/* Products */}

                                        <div className="space-y-3">

                                            {categoryProducts.map((product) => (

                                                <div
                                                    key={product._id}
                                                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-100 rounded-lg p-3"
                                                >

                                                    {/* Product */}

                                                    <div>

                                                        <h3 className="font-medium text-gray-800">
                                                            {product.productname}
                                                        </h3>

                                                        <p className="text-sm text-gray-500">
                                                            SKU: {product.sku}
                                                        </p>

                                                    </div>


                                                    {/* Price & Stock */}

                                                    <div className="text-left sm:text-right">

                                                        <p className="font-semibold text-gray-800">
                                                            ₹{product.price}
                                                        </p>

                                                        <p className="text-sm text-gray-500">
                                                            Stock: {product.quantity}
                                                        </p>

                                                    </div>

                                                </div>

                                            ))}

                                        </div>

                                    </div>

                                );

                            })

                        ) : (

                            /* ================= NO CATEGORY ================= */

                            <div className="col-span-full flex items-center justify-center rounded-xl border border-gray-200 bg-white py-16">

                                <div className="text-center">

                                    <div className="text-4xl mb-3">
                                        📦
                                    </div>

                                    <h2 className="font-semibold text-gray-800">
                                        No Categories Found
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Add some products to see categories.
                                    </p>

                                </div>

                            </div>

                        )}

                    </div>

                )}

            </div>

        </div>

    );

};

export default CategoriesPage;