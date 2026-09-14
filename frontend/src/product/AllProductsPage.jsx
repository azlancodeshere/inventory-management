import React from "react";
import api from "../api/api.js";
import { useState, useEffect } from "react";
import AddProductModal from "./AddProductModal.jsx";

const AllProductsPage = () => {

    const [products, setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState(null);


    useEffect(() => {

        const getProducts = async () => {

            try {

                const response = await api.get("/products/all-products");

                console.log(response.data);

                setProducts(response.data.data);

            } catch (error) {

                console.log("Error in getting all products:", error);

            }

        };

        getProducts();

    }, []);


    
    const addProducts = (product) =>{
        setNewProducts(product)
    }
   

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <div className="max-w-7xl mx-auto">

                
                <div className="flex items-center justify-between mb-6">

                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            All Products
                        </h1>

                        <p className="text-sm text-gray-500 mt-1">
                            Manage your inventory products
                        </p>
                    </div>

                    <div className="text-sm text-gray-500">
                        Total Products: {products.length}
                    </div>

                </div>


               
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead className="bg-gray-50 border-b border-gray-200">

                                <tr>

                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                                        Product Name
                                    </th>

                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                                        SKU
                                    </th>

                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                                        Category
                                    </th>

                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                                        Price
                                    </th>

                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                                        Quantity
                                    </th>

                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                                        Stock Status
                                    </th>

                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                                        Action
                                    </th>

                                </tr>

                            </thead>


                            <tbody className="divide-y divide-gray-100">

                                {products.map((product) => (

                                    <tr
                                        key={product._id}
                                        className="hover:bg-gray-50"
                                    >

                                        <td className="px-6 py-4">

                                            <div className="font-medium text-gray-900">
                                                {product.productname}
                                            </div>

                                            <div className="text-xs text-gray-400 mt-1">
                                                {product.description}
                                            </div>

                                        </td>


                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {product.sku}
                                        </td>


                                        <td className="px-6 py-4">

                                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                                                {product.category}
                                            </span>

                                        </td>


                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            ₹{product.price}
                                        </td>


                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            {product.quantity}
                                        </td>


                                        <td className="px-6 py-4">

                                            {product.quantity === 0 ? (

                                                <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium">
                                                    Out of Stock
                                                </span>

                                            ) : product.quantity <= product.lowStockThreshold ? (

                                                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                                                    Low Stock
                                                </span>

                                            ) : (

                                                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                                                    In Stock
                                                </span>

                                            )}

                                        </td>


                                       
                                        <td className="px-6 py-4">

                                            <button
                                               onClick={()=> addProducts(product)}
                                                className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800"
                                            >
                                                Add Stock
                                            </button>

                                        </td>

                                         <td className="px-6 py-4">

                                            <button
                                               
                                                className="px-4 py-2 bg-red-700 text-white text-sm rounded-lg hover:bg-gray-800"
                                            >
                                                Remove Stokc
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

                {newProducts && (
                    <AddProductModal product={newProducts} />
                )}

            </div>

        </div>
    );
};

export default AllProductsPage;