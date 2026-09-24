import React, { useContext, useState } from "react";
import {
    LayoutDashboard,
    Package,
    Tags,
    BarChart3,
    Settings,
    X,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const SideBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { logout } = useContext(AuthContext);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* ================= MOBILE HAMBURGER ================= */}
            <button
                onClick={() => setIsOpen(true)}
                className="
                    md:hidden
                    fixed
                    top-[75px]
                    left-4
                    z-50
                    w-12
                    h-12
                    bg-black
                    text-white
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    shadow-lg
                "
            >
                <span className="text-3xl leading-none">☰</span>
            </button>


            {/* ================= MOBILE OVERLAY ================= */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="
                        md:hidden
                        fixed
                        inset-0
                        bg-black/40
                        z-40
                    "
                />
            )}


            {/* ================= SIDEBAR ================= */}
            <aside
                className={`
                    fixed md:static
                    top-16 md:top-auto
                    left-0
                    z-50
                    md:z-auto

                    w-64
                    h-[calc(100vh-64px)]
                    md:min-h-[calc(100vh-64px)]

                    bg-white
                    border-r border-gray-200

                    flex
                    flex-col
                    justify-between

                    p-4

                    transform
                    transition-transform
                    duration-300

                    ${isOpen
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                    }
                `}
            >

                <div>

                    {/* Mobile close button */}
                    <div className="flex items-center justify-between mb-5 md:hidden">

                        <p className="text-sm font-semibold text-gray-700">
                            Menu
                        </p>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-lg hover:bg-gray-100"
                        >
                            <X size={22} />
                        </button>

                    </div>


                    {/* Desktop Menu heading */}
                    <p className="hidden md:block text-xs font-semibold text-gray-400 uppercase px-3 mb-3">
                        Menu
                    </p>


                    {/* ================= DASHBOARD ================= */}
                    <button
                        onClick={() => {
                            navigate("/home");
                            setIsOpen(false);
                        }}
                        className={`
                            w-full
                            flex
                            items-center
                            gap-3
                            px-3
                            py-3
                            rounded-lg
                            mb-1
                            text-sm
                            font-medium

                            ${location.pathname === "/"
                                ? "bg-black text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }
                        `}
                    >
                        <LayoutDashboard size={19} />

                        <span>
                            Dashboard
                        </span>
                    </button>


                    {/* ================= PRODUCTS ================= */}
                    <button
                        onClick={() => {
                            navigate("/all-products");
                            setIsOpen(false);
                        }}
                        className={`
                            w-full
                            flex
                            items-center
                            gap-3
                            px-3
                            py-3
                            rounded-lg
                            mb-1
                            text-sm
                            font-medium

                            ${location.pathname === "/all-products"
                                ? "bg-black text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }
                        `}
                    >
                        <Package size={19} />

                        <span>
                            Products
                        </span>
                    </button>


                    {/* ================= CATEGORIES ================= */}
                    <button
                        onClick={() => {
                            navigate("/categories");
                            setIsOpen(false);
                        }}
                        className={`
                            w-full
                            flex
                            items-center
                            gap-3
                            px-3
                            py-3
                            rounded-lg
                            mb-1
                            text-sm
                            font-medium

                            ${location.pathname === "/categories"
                                ? "bg-black text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }
                        `}
                    >
                        <Tags size={19} />

                        <span>
                            Categories
                        </span>
                    </button>


                    {/* ================= REPORTS ================= */}
                    <button
                        onClick={() => {
                            navigate("/reports");
                            setIsOpen(false);
                        }}
                        className={`
                            w-full
                            flex
                            items-center
                            gap-3
                            px-3
                            py-3
                            rounded-lg
                            mb-1
                            text-sm
                            font-medium

                            ${location.pathname === "/reports"
                                ? "bg-black text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }
                        `}
                    >
                        <BarChart3 size={19} />

                        <span>
                            Reports
                        </span>
                    </button>


                    {/* ================= SETTINGS ================= */}
                    <button
                        onClick={() => {
                            navigate("/settings");
                            setIsOpen(false);
                        }}
                        className={`
                            w-full
                            flex
                            items-center
                            gap-3
                            px-3
                            py-3
                            rounded-lg
                            text-sm
                            font-medium

                            ${location.pathname === "/settings"
                                ? "bg-black text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }
                        `}
                    >
                        <Settings size={19} />

                        <span>
                            Settings
                        </span>
                    </button>

                </div>


                {/* ================= LOGOUT ================= */}
                <button
                    onClick={logout}
                    className="
                        w-full
                        flex
                        items-center
                        gap-3
                        px-3
                        py-3
                        rounded-lg
                        text-sm
                        font-medium
                        text-red-500
                        hover:bg-red-50
                    "
                >
                    Logout
                </button>

            </aside>
        </>
    );
};

export default SideBar;