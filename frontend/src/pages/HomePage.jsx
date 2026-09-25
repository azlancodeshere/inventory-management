import {
    Plus,
    Package,
    Boxes,
    AlertTriangle,
    ArrowDownRight,
    TrendingUp,
    ChevronDown,
} from "lucide-react";

import HomeNavbar from "./Home/HomeNavbar";
import SideBar from "../Components/SideBar";
import Activity from "./Activity/Activity";

import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function HomePage() {
    const { user, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [sortType, setSortType] = useState("all");

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await api.get("/products/all-products");
                setProducts(response.data.data);
            } catch (error) {
                console.log("Error in getting products:", error);
            }
        };

        getProducts();
    }, []);

    const chartProducts = [...products];

    if (sortType === "highest") {
        chartProducts.sort(
            (a, b) => Number(b.quantity) - Number(a.quantity)
        );
    }

    if (sortType === "lowest") {
        chartProducts.sort(
            (a, b) => Number(a.quantity) - Number(b.quantity)
        );
    }

    const maxStock = Math.max(
        ...chartProducts.map(
            (product) => Number(product.quantity) || 0
        ),
        1
    );

    const totalProducts = products.length;

    const totalStock = products.reduce(
        (total, product) =>
            total + (Number(product.quantity) || 0),
        0
    );

    const lowStock = products.filter(
        (product) => {
            const quantity = Number(product.quantity) || 0;
            return quantity > 0 && quantity <= 5;
        }
    ).length;

    const outOfStock = products.filter(
        (product) =>
            Number(product.quantity || 0) === 0
    ).length;

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Navbar */}
            <HomeNavbar />

            <div className="flex">

                {/* Sidebar */}
                <SideBar />

                {/* Main Content */}
                <main className="min-w-0 flex-1 p-4 pt-20 sm:p-6 sm:pt-20 lg:p-8 lg:pt-8">

                    {/* ================= HEADER ================= */}
                    <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                    Dashboard
                                </h1>

                                <span className="hidden rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-600 sm:inline-flex">
                                    Live
                                </span>
                            </div>

                            <p className="text-sm text-slate-500 sm:text-base">
                                Welcome back,{" "}
                                <span className="font-semibold text-slate-700">
                                    {isAuthenticated && user?.username}
                                </span>{" "}
                                👋
                            </p>
                        </div>

                        <button
                            onClick={() =>
                                navigate("/create-product")
                            }
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-[0.98] sm:w-auto"
                        >
                            <Plus size={18} />
                            Add Product
                        </button>

                    </div>


                    {/* ================= STAT CARDS ================= */}
                    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                        {/* Total Products */}
                        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-sm font-medium text-slate-500">
                                        Total Products
                                    </p>

                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                                        {totalProducts}
                                    </h2>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <Package size={21} />
                                </div>

                            </div>

                            <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
                                <TrendingUp
                                    size={14}
                                    className="text-green-500"
                                />
                                <span>
                                    0% from last month
                                </span>
                            </div>

                        </div>


                        {/* Total Stock */}
                        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-sm font-medium text-slate-500">
                                        Total Stock
                                    </p>

                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                                        {totalStock}
                                    </h2>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                                    <Boxes size={21} />
                                </div>

                            </div>

                            <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
                                <TrendingUp
                                    size={14}
                                    className="text-green-500"
                                />
                                <span>
                                    0% from last month
                                </span>
                            </div>

                        </div>


                        {/* Low Stock */}
                        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-sm font-medium text-slate-500">
                                        Low Stock
                                    </p>

                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                                        {lowStock}
                                    </h2>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                                    <AlertTriangle size={21} />
                                </div>

                            </div>

                            <p className="mt-4 text-xs font-medium text-amber-600">
                                Needs attention
                            </p>

                        </div>


                        {/* Out Of Stock */}
                        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-sm font-medium text-slate-500">
                                        Out of Stock
                                    </p>

                                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                                        {outOfStock}
                                    </h2>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                                    <ArrowDownRight size={21} />
                                </div>

                            </div>

                            <p className="mt-4 text-xs font-medium text-red-500">
                                Requires restocking
                            </p>

                        </div>

                    </div>


                    {/* ================= MAIN GRID ================= */}
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

                        {/* ================= STOCK OVERVIEW ================= */}
                        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2">

                            {/* Header */}
                            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                <div>
                                    <h2 className="text-lg font-bold text-slate-900">
                                        Stock Overview
                                    </h2>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Inventory status overview
                                    </p>
                                </div>

                                <div className="relative">

                                    <select
                                        value={sortType}
                                        onChange={(e) =>
                                            setSortType(e.target.value)
                                        }
                                        className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-slate-700 outline-none transition focus:border-slate-400 sm:w-44"
                                    >
                                        <option value="all">
                                            All Products
                                        </option>

                                        <option value="highest">
                                            Highest Stock
                                        </option>

                                        <option value="lowest">
                                            Lowest Stock
                                        </option>
                                    </select>

                                    <ChevronDown
                                        size={16}
                                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                </div>

                            </div>


                            {/* Chart */}
                            {chartProducts.length > 0 ? (

                                <div className="overflow-x-auto">

                                    <div className="min-w-[500px]">

                                        <div className="flex h-64 items-end gap-4 border-b border-slate-100 px-3 sm:gap-6">

                                            {chartProducts.map(
                                                (product) => {

                                                    const quantity =
                                                        Number(
                                                            product.quantity
                                                        ) || 0;

                                                    const height =
                                                        (quantity /
                                                            maxStock) *
                                                        100;

                                                    return (
                                                        <div
                                                            key={
                                                                product._id
                                                            }
                                                            className="flex h-full min-w-0 flex-1 items-end"
                                                        >

                                                            <div
                                                                className="w-full rounded-t-lg bg-slate-900 transition-all duration-300 hover:bg-blue-600"
                                                                style={{
                                                                    height: `${height}%`,
                                                                    minHeight:
                                                                        quantity >
                                                                        0
                                                                            ? "8px"
                                                                            : "0px",
                                                                }}
                                                                title={`${product.productname} - ${quantity} in stock`}
                                                            />

                                                        </div>
                                                    );
                                                }
                                            )}

                                        </div>


                                        {/* Product names */}
                                        <div className="mt-3 flex gap-4 px-3 sm:gap-6">

                                            {chartProducts.map(
                                                (product) => (

                                                    <div
                                                        key={
                                                            product._id
                                                        }
                                                        className="min-w-0 flex-1 truncate text-center text-xs font-medium text-slate-400"
                                                        title={
                                                            product.productname
                                                        }
                                                    >
                                                        {
                                                            product.productname
                                                        }
                                                    </div>

                                                )
                                            )}

                                        </div>

                                    </div>

                                </div>

                            ) : (

                                <div className="flex h-64 items-center justify-center rounded-xl bg-slate-50 text-sm text-slate-400">
                                    No products available
                                </div>

                            )}

                        </div>


                        {/* ================= RECENT ACTIVITY ================= */}
                        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

                            <div className="mb-6 flex items-center justify-between">

                                <div>
                                    <h2 className="text-lg font-bold text-slate-900">
                                        Recent Activity
                                    </h2>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Latest inventory updates
                                    </p>
                                </div>

                                <button
                                    onClick={() =>
                                        navigate("/reports")
                                    }
                                    className="text-xs font-semibold text-blue-600 transition hover:text-blue-700"
                                >
                                    View all
                                </button>

                            </div>

                            <Activity products={products} />

                        </div>

                    </div>


                    {/* ================= QUICK ACTIONS ================= */}
                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

                        <button
                            onClick={() =>
                                navigate("/all-products")
                            }
                            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-slate-300 hover:shadow-md"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                <Package size={19} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-slate-900">
                                    Manage Products
                                </p>

                                <p className="text-xs text-slate-500">
                                    View all products
                                </p>
                            </div>
                        </button>


                        <button
                            onClick={() =>
                                navigate("/categories")
                            }
                            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-slate-300 hover:shadow-md"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                                <Boxes size={19} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-slate-900">
                                    Categories
                                </p>

                                <p className="text-xs text-slate-500">
                                    Manage categories
                                </p>
                            </div>
                        </button>


                        <button
                            onClick={() =>
                                navigate("/reports")
                            }
                            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-slate-300 hover:shadow-md"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                                <TrendingUp size={19} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-slate-900">
                                    View Reports
                                </p>

                                <p className="text-xs text-slate-500">
                                    Analyze inventory
                                </p>
                            </div>
                        </button>

                    </div>

                </main>

            </div>

        </div>
    );
}

export default HomePage;