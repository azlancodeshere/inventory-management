import React from 'react'
import {
    User,
    Mail,
    Lock,
    Eye,
    Package,
    Users,
    BarChart3,
    ShieldCheck,
    TrendingUp,
    UserPlus,
    Phone
} from "lucide-react";


export const Navbar = () => {
  return (
    <nav className="h-[72px] bg-white border-b border-slate-200">
                <div className="h-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">

                  
                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                            <Package size={23} />
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                                Stock<span className="text-blue-600">Flow</span>
                            </h2>

                            <p className="hidden sm:block text-[10px] text-slate-500">
                                Inventory Management System
                            </p>
                        </div>

                    </div>


                    
                    <div className="hidden lg:flex items-center gap-5 xl:gap-8">

                        <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-blue-600 transition"
                        >
                            Home
                        </a>

                        <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-blue-600 transition"
                        >
                            Features
                        </a>

                        <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-blue-600 transition"
                        >
                            About
                        </a>

                        <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-blue-600 transition"
                        >
                            Contact
                        </a>

                        <button className="px-5 xl:px-6 py-2.5 rounded-lg border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-50 transition">
                            Login
                        </button>

                        <button className="px-5 xl:px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition shadow-md shadow-blue-600/20">
                            Register
                        </button>

                    </div>

                </div>
            </nav>
  )
}
