import React from 'react'
import {
    LayoutDashboard,
    Package,
    Tags,
    BarChart3,
    Settings,
    LogOut,
    Search,
    Bell,
    Plus,
    TrendingUp,
    TrendingDown,
    AlertTriangle,
    Boxes,
} from "lucide-react";

const Cards = ({ products }) => {
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
                        <Package size={22} className="text-gray-700" />
                    </div>

                </div>

                <div className="flex items-center gap-1 mt-4 text-sm">
                    <TrendingUp size={16} />
                    <span className="font-medium">
                        12%
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
                            <span className="font-semibold text-gray-800">
                                {products.reduce(
                                    (total, product) => total + product.quantity,
                                    0
                                )}
                            </span>
                        </h3>
                    </div>

                    <div className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Boxes size={22} className="text-gray-700" />
                    </div>

                </div>

                <div className="flex items-center gap-1 mt-4 text-sm">
                    <TrendingUp size={16} />
                    <span className="font-medium">
                        8.5%
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
                            {
                                products.filter(
                                    product =>
                                        product.quantity > 0 &&
                                        product.quantity <= product.lowStockThreshold
                                ).length
                            }
                        </h3>
                    </div>

                    <div className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">
                        <AlertTriangle size={22} className="text-gray-700" />
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
                            {
                                products.filter(
                                    product =>
                                        product.quantity === 0
                                ).length
                            }
                        </h3>
                    </div>

                    <div className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">
                        <TrendingDown size={22} className="text-gray-700" />
                    </div>

                </div>

                <div className="flex items-center gap-1 mt-4 text-sm text-gray-500">
                    <span>
                        Requires restocking
                    </span>
                </div>

            </div>

        </div>
    )
}

export default Cards