import React from "react";
import api from "../api/api.js";
import { useState, useEffect } from "react";
import AddProductModal from "./AddProductModal.jsx";
import Skeleton from "react-loading-skeleton";

const AllProductsPage = () => {

    const [products, setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState(null);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(true);


    const getProducts = async () => {

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

        getProducts();

    }, []);


    const addProducts = (product) => {
        setNewProducts(product);
    };


    const deleteProduct = async (id) => {

        try {

            const response = await api.delete(
                `/products/delete-product/${id}`
            );

            console.log(response.data);

            setProducts(
                products.filter((product) => product._id !== id)
            );

        } catch (error) {

            console.log("Delete error:", error);
            console.log("Server error:", error.response?.data);

        }

    };


    const searchProducts = products.filter((product) => {

        const matchSearch =
            product.productname
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            product.sku
                .toLowerCase()
                .includes(search.toLowerCase());


        const matchCategory =
            category === "" ||
            product.category === category;


        return matchSearch && matchCategory;

    });


    return (

        <div className="min-h-screen bg-gray-100 p-3 sm:p-4 md:p-6">

            <div className="max-w-7xl mx-auto">


               

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-6">

                    <div>

                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                            All Products
                        </h1>

                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            Manage your inventory products
                        </p>

                    </div>


                    <div className="text-xs sm:text-sm text-gray-500">

                        Total Products:{" "}

                        <span className="font-semibold text-gray-800">

                            {loading ? (
                                <Skeleton width={35} />
                            ) : (
                                products.length
                            )}

                        </span>

                    </div>


                    <div className="text-xs sm:text-sm text-gray-500">

                        Total Stock:{" "}

                        <span className="font-semibold text-gray-800">

                            {loading ? (

                                <Skeleton width={45} />

                            ) : (

                                products.reduce(
                                    (total, product) =>
                                        total +
                                        (Number(product.quantity) || 0),
                                    0
                                )

                            )}

                        </span>

                    </div>

                </div>


              

                <div className="mb-5 flex flex-col sm:flex-row gap-3">

                  

                    <input
                        type="text"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        placeholder="Search products..."
                        className="w-full sm:max-w-md h-11 px-4 bg-white border border-gray-200 rounded-lg outline-none focus:border-black text-sm"
                    />


                  

                    <select
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                        className="w-full sm:w-52 h-11 px-4 bg-white border border-gray-200 rounded-lg outline-none focus:border-black text-sm"
                    >

                        <option value="">
                            All Categories
                        </option>

                        <option value="electronics">
                            Electronics
                        </option>

                        <option value="clothing">
                            Clothing
                        </option>

                        <option value="grocery">
                            Grocery
                        </option>

                        <option value="accessories">
                            Accessories
                        </option>

                        <option value="footwares">
                            Footwear
                        </option>

                    </select>

                </div>


               

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[900px]">


                            

                            <thead className="bg-gray-50 border-b border-gray-200">

                                <tr>

                                    <th className="text-left px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                                        Product Name
                                    </th>

                                    <th className="text-left px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                                        SKU
                                    </th>

                                    <th className="text-left px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                                        Category
                                    </th>

                                    <th className="text-left px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                                        Price
                                    </th>

                                    <th className="text-left px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                                        Quantity
                                    </th>

                                    <th className="text-left px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                                        Stock Status
                                    </th>

                                    <th className="text-left px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                                        Action
                                    </th>

                                </tr>

                            </thead>



                            <tbody className="divide-y divide-gray-100">



                                {loading ? (

                                    Array.from({ length: 6 }).map(
                                        (_, index) => (

                                            <tr key={index}>

                                               

                                                <td className="px-4 sm:px-6 py-4">

                                                    <Skeleton
                                                        width={150}
                                                        height={18}
                                                    />

                                                    <Skeleton
                                                        width={210}
                                                        height={12}
                                                        className="mt-1"
                                                    />

                                                </td>


                                              

                                                <td className="px-4 sm:px-6 py-4">

                                                    <Skeleton
                                                        width={90}
                                                        height={16}
                                                    />

                                                </td>


                                             

                                                <td className="px-4 sm:px-6 py-4">

                                                    <Skeleton
                                                        width={80}
                                                        height={28}
                                                        borderRadius={20}
                                                    />

                                                </td>


                                              
                                                <td className="px-4 sm:px-6 py-4">

                                                    <Skeleton
                                                        width={60}
                                                        height={18}
                                                    />

                                                </td>


                                              

                                                <td className="px-4 sm:px-6 py-4">

                                                    <Skeleton
                                                        width={40}
                                                        height={18}
                                                    />

                                                </td>


                                               

                                                <td className="px-4 sm:px-6 py-4">

                                                    <Skeleton
                                                        width={90}
                                                        height={28}
                                                        borderRadius={20}
                                                    />

                                                </td>


                                                

                                                <td className="px-4 sm:px-6 py-4">

                                                    <div className="flex gap-2">

                                                        <Skeleton
                                                            width={80}
                                                            height={36}
                                                        />

                                                        <Skeleton
                                                            width={100}
                                                            height={36}
                                                        />

                                                    </div>

                                                </td>

                                            </tr>

                                        )
                                    )

                                ) : searchProducts.length > 0 ? (

                                  
                                    searchProducts.map((product) => (

                                        <tr
                                            key={product._id}
                                            className="hover:bg-gray-50 transition"
                                        >


                                         

                                            <td className="px-4 sm:px-6 py-4 max-w-[280px]">

                                                <div className="font-medium text-sm sm:text-base text-gray-900">
                                                    {product.productname}
                                                </div>

                                                <div className="text-xs text-gray-400 mt-1 line-clamp-3">
                                                    {product.description}
                                                </div>

                                            </td>


                                            

                                            <td className="px-4 sm:px-6 py-4 text-sm text-gray-600">

                                                <span className="whitespace-nowrap">
                                                    {product.sku}
                                                </span>

                                            </td>


                                           

                                            <td className="px-4 sm:px-6 py-4">

                                                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium whitespace-nowrap">
                                                    {product.category}
                                                </span>

                                            </td>


                                           

                                            <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">

                                                ₹{product.price}

                                            </td>


                                           

                                            <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-900">

                                                {product.quantity}

                                            </td>


                                           

                                            <td className="px-4 sm:px-6 py-4">

                                                {product.quantity === 0 ? (

                                                    <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium whitespace-nowrap">
                                                        Out of Stock
                                                    </span>

                                                ) : product.quantity <=
                                                    product.lowStockThreshold ? (

                                                    <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium whitespace-nowrap">
                                                        Low Stock
                                                    </span>

                                                ) : (

                                                    <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium whitespace-nowrap">
                                                        In Stock
                                                    </span>

                                                )}

                                            </td>


                                           
                                            <td className="px-4 sm:px-6 py-4">

                                                <div className="flex items-center gap-2">

                                                    <button
                                                        onClick={() =>
                                                            addProducts(product)
                                                        }
                                                        className="px-3 sm:px-4 py-2 bg-black text-white text-xs sm:text-sm rounded-lg hover:bg-gray-800 transition whitespace-nowrap"
                                                    >
                                                        Add stock
                                                    </button>


                                                    <button
                                                        onClick={() =>
                                                            deleteProduct(
                                                                product._id
                                                            )
                                                        }
                                                        className="px-3 sm:px-4 py-2 bg-red-700 text-white text-xs sm:text-sm rounded-lg hover:bg-red-800 transition whitespace-nowrap"
                                                    >
                                                        Remove Stock
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    
                                    <tr>

                                        <td
                                            colSpan="7"
                                            className="px-6 py-12 text-center"
                                        >

                                            <p className="text-sm text-gray-500">
                                                No products found
                                            </p>

                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>


              

                {newProducts && (

                    <AddProductModal
                        product={newProducts}

                        onClose={(updatedProduct) => {

                            if (updatedProduct) {

                                setProducts(
                                    (prevProducts) =>
                                        prevProducts.map(
                                            (product) =>
                                                product._id ===
                                                    updatedProduct._id
                                                    ? updatedProduct
                                                    : product
                                        )
                                );

                            }

                            setNewProducts(null);

                        }}
                    />

                )}

            </div>

        </div>

    );

};

export default AllProductsPage;