import React, { useContext } from 'react'
import {
    LayoutDashboard,
    Package,
    Tags,
    BarChart3,
    Settings,
    LogOut,
    LogIn,
    Search,
    Bell,
    Plus,
    TrendingUp,
    TrendingDown,
    AlertTriangle,
    Boxes,
} from "lucide-react";

import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const HomeNavbar = () => {


    const { user, isAuthenticated, logout } = useContext(AuthContext)
    const navigate = useNavigate()



    return (
        <nav className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">

            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-black text-white rounded-lg flex items-center justify-center">
                    <Package size={20} />
                </div>

                <h1 className="text-xl font-bold text-gray-900">
                    InventoryPro
                </h1>
            </div>

            {/* Search */}
            <div className="hidden md:flex items-center w-80 h-10 bg-gray-100 rounded-lg px-3 gap-2">
                <Search size={18} className="text-gray-500" />

                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none w-full text-sm"
                />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-5">

              

                <div className="flex items-center gap-3">

                    <div className="w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold">
                        {isAuthenticated &&
                            user?.fullname?.charAt(0).toUpperCase()
                        }
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-gray-900">
                            {isAuthenticated &&
                                user?.fullname
                            }
                        </p>

                        <p className="text-xs text-gray-500">
                            Admin
                        </p>
                    </div>

                </div>

                {/* Logout */}
              {isAuthenticated ? (
                  <button
                    onClick={async () => {
                        await logout();
                        navigate("/login")
                    }}

                    className="flex items-center gap-2 text-red-500 hover:text-red-600"
                >
                    <LogOut size={19} />

                    <span className="text-sm font-medium">
                        Logout
                    </span>
                </button>
              ):(<button
        onClick={() => navigate("/login")}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
    >
        <LogIn size={19} />

        <span className="text-sm font-medium">
            Login
        </span>
    </button>) }

            </div>

        </nav>
    )
}

export default HomeNavbar