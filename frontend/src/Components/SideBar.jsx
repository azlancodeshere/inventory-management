import React, { useContext } from 'react'
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

import {useNavigate, Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';




const SideBar = () => {

    const navigate= useNavigate();
    const {logout} = useContext(AuthContext)

  return (
   <aside className="hidden md:flex w-64 min-h-[calc(100vh-64px)] bg-white border-r border-gray-200 flex-col justify-between p-4">

                    <div>

                        <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-3">
                            Menu
                        </p>

                        {/* Dashboard */}
                        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg bg-black text-white mb-1">
                            <LayoutDashboard size={19} />
                            <span className="text-sm font-medium">
                                Dashboard
                            </span>
                        </button>

                        {/* Products */}
                        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-gray-600 hover:bg-gray-100 mb-1">
                            <Package size={19} />
                            <span className="text-sm font-medium">
                                Products
                            </span>
                        </button>

                        {/* Categories */}
                        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-gray-600 hover:bg-gray-100 mb-1">
                            <Tags size={19} />
                            <span className="text-sm font-medium">
                                Categories
                            </span>
                        </button>

                        {/* Reports */}
                        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-gray-600 hover:bg-gray-100 mb-1">
                            <BarChart3 size={19} />
                            <span className="text-sm font-medium">
                                Reports
                            </span>
                        </button>

                        {/* Settings */}
                        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-gray-600 hover:bg-gray-100">
                            <Settings size={19} />
                            <span className="text-sm font-medium">
                                Settings
                            </span>
                        </button>

                    </div>


                    {/* Logout */}
                    <button 
                    onClick={async () =>{
                        await logout();
                        navigate("/login")}}
                        
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-red-500 hover:bg-red-50">
                        <LogOut size={19} />

                        <span className="text-sm font-medium">
                            Logout
                        </span>
                    </button>

                </aside>
  )
}

export default SideBar