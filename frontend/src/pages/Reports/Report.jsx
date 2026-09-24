import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import api from "../../api/api";

const Report = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const getProducts = async () => {

            try {

                const response = await api.get(
                    "/products/all-products"
                );

                setProducts(response.data.data);

            } catch (error) {

                console.log(
                    "Error getting products:",
                    error
                );

            }

        };

        getProducts();

    }, []);




    const totalInventoryValue = products.reduce(
        (total, product) => {

            return total +
                (
                    Number(product.price || 0) *
                    Number(product.quantity || 0)
                );

        },
        0
    );


    return (

        <div className="min-h-screen bg-gray-100 p-6">



            <div className="mb-6">

                <h1 className="text-2xl font-bold text-gray-900">
                    Reports
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                    Inventory stock report
                </p>

            </div>



            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mt-6">

                <div className="p-5 border-b border-gray-200">

                    <h2 className="font-semibold text-gray-900">
                        Product Stock Report
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Current inventory status of all products
                    </p>

                </div>


                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-gray-50 border-b border-gray-200">

                            <tr>

                                <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                                    Product Name
                                </th>

                                <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                                    SKU
                                </th>

                                <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                                    Category
                                </th>

                                <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                                    Price
                                </th>

                                <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                                    Quantity
                                </th>

                                <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                                    Stock Status
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {products.map((product) => {

                                const quantity =
                                    Number(product.quantity) || 0;

                                let status = "In Stock";


                                if (quantity === 0) {

                                    status = "Out of Stock";

                                } else if (
                                    quantity <=
                                    Number(product.lowStockThreshold || 0)
                                ) {

                                    status = "Low Stock";

                                }


                                return (

                                    <tr
                                        key={product._id}
                                        className="border-b border-gray-100 hover:bg-gray-50"
                                    >


                                        <td className="px-5 py-4">

                                            <p className="font-medium text-gray-900">
                                                {product.productname}
                                            </p>

                                        </td>




                                        <td className="px-5 py-4 text-sm text-gray-600">
                                            {product.sku}
                                        </td>




                                        <td className="px-5 py-4 text-sm text-gray-600">
                                            {product.category}
                                        </td>




                                        <td className="px-5 py-4 text-sm font-medium text-gray-900">
                                            ₹{Number(product.price || 0).toLocaleString("en-IN")}
                                        </td>




                                        <td className="px-5 py-4 text-sm font-medium text-gray-900">
                                            {quantity}
                                        </td>




                                        <td className="px-5 py-4">

                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${status === "In Stock"
                                                        ? "bg-green-100 text-green-700"
                                                        : status === "Low Stock"
                                                            ? "bg-yellow-100 text-yellow-700"
                                                            : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {status}
                                            </span>

                                        </td>

                                    </tr>

                                );

                            })}

                        </tbody>

                    </table>

                </div>




                {products.length === 0 && (

                    <div className="py-10 text-center text-gray-500">
                        No products available
                    </div>

                )}

            </div>



            <div className="bg-white border border-gray-200 rounded-xl p-5 mt-6">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm text-gray-500">
                            Total Inventory Value
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-2">
                            ₹{totalInventoryValue.toLocaleString("en-IN")}
                        </h2>

                        <p className="text-sm text-gray-400 mt-2">
                            Total value of current inventory stock
                        </p>

                    </div>

                </div>

            </div>





            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mt-6">

                <div className="p-5 border-b border-gray-200">

                    <h2 className="font-semibold text-gray-900">
                        Low Stock Report
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Products that need attention and restocking
                    </p>

                </div>


                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-gray-50 border-b border-gray-200">

                            <tr>

                                <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                                    Product Name
                                </th>

                                <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                                    SKU
                                </th>

                                <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                                    Current Stock
                                </th>

                                <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                                    Threshold
                                </th>

                                <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                                    Status
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {products
                                .filter(
                                    (product) =>
                                        Number(product.quantity || 0) > 0 &&
                                        Number(product.quantity || 0) <=
                                        Number(product.lowStockThreshold || 0)
                                )
                                .map((product) => (

                                    <tr
                                        key={product._id}
                                        className="border-b border-gray-100 hover:bg-gray-50"
                                    >



                                        <td className="px-5 py-4">

                                            <p className="font-medium text-gray-900">
                                                {product.productname}
                                            </p>

                                        </td>




                                        <td className="px-5 py-4 text-sm text-gray-600">
                                            {product.sku}
                                        </td>




                                        <td className="px-5 py-4 text-sm font-medium text-gray-900">
                                            {product.quantity}
                                        </td>




                                        <td className="px-5 py-4 text-sm text-gray-600">
                                            {product.lowStockThreshold}
                                        </td>


                                     

                                        <td className="px-5 py-4">

                                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                                                Low Stock
                                            </span>

                                        </td>

                                    </tr>

                                ))}

                        </tbody>

                    </table>

                </div>

            </div>




            <div className="bg-white border border-gray-200 rounded-xl p-5 mt-6">

                <div className="mb-5">

                    <h2 className="font-semibold text-gray-900">
                        Stock Status Summary
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Overview of current product stock status
                    </p>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">


                    <div className="border border-gray-200 rounded-lg p-4">

                        <p className="text-sm text-gray-500">
                            In Stock
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-2">

                            {
                                products.filter(
                                    (product) =>
                                        Number(product.quantity || 0) >
                                        Number(product.lowStockThreshold || 0)
                                ).length
                            }

                        </h3>

                        <p className="text-sm text-green-600 mt-1">
                            Products available
                        </p>

                    </div>




                    <div className="border border-gray-200 rounded-lg p-4">

                        <p className="text-sm text-gray-500">
                            Low Stock
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-2">

                            {
                                products.filter(
                                    (product) =>
                                        Number(product.quantity || 0) > 0 &&
                                        Number(product.quantity || 0) <=
                                        Number(product.lowStockThreshold || 0)
                                ).length
                            }

                        </h3>

                        <p className="text-sm text-yellow-600 mt-1">
                            Needs attention
                        </p>

                    </div>




                    <div className="border border-gray-200 rounded-lg p-4">

                        <p className="text-sm text-gray-500">
                            Out of Stock
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-2">

                            {
                                products.filter(
                                    (product) =>
                                        Number(product.quantity || 0) === 0
                                ).length
                            }

                        </h3>

                        <p className="text-sm text-red-600 mt-1">
                            Requires restocking
                        </p>

                    </div>

                </div>

            </div>


        </div>
    );
};

export default Report;