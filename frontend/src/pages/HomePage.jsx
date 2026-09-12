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

import HomeNavbar from "./Home/HomeNavbar";
import SideBar from "../Components/SideBar";
import Cards from "./cards/Cards";
import Activity from "./Activity/Activity";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function HomePage() {

    const {user, isAuthenticated} = useContext(AuthContext)
    return (
        <div className="min-h-screen bg-gray-100">

            {/* ================= NAVBAR ================= */}
            <HomeNavbar/>


            {/* ================= MAIN AREA ================= */}
            <div className="flex">

                {/* ================= SIDEBAR ================= */}
               <SideBar/>


                {/* ================= DASHBOARD CONTENT ================= */}
                <main className="flex-1 p-6">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                Dashboard
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Welcome back,{isAuthenticated && user?.username}  👋
                            </p>
                        </div>

                        <button className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800">
                            <Plus size={18} />
                            Add Product
                        </button>

                    </div>
  

                    {/* ================= STAT CARDS ================= */}
                  <Cards/>


                    {/* ================= LOWER SECTION ================= */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

                        {/* Stock Overview */}
                        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-xl p-5">

                            <div className="flex items-center justify-between mb-6">

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Stock Overview
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Inventory status overview
                                    </p>
                                </div>

                                <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none">
                                    <option>Last 7 days</option>
                                    <option>Last 30 days</option>
                                    <option>Last 6 months</option>
                                </select>

                            </div>


                            {/* Fake Chart */}
                            <div className="h-64 flex items-end gap-5 px-5 border-b border-gray-100">

                                <div className="w-full h-[35%] bg-gray-200 rounded-t-md"></div>

                                <div className="w-full h-[55%] bg-gray-300 rounded-t-md"></div>

                                <div className="w-full h-[45%] bg-gray-200 rounded-t-md"></div>

                                <div className="w-full h-[70%] bg-gray-300 rounded-t-md"></div>

                                <div className="w-full h-[60%] bg-gray-200 rounded-t-md"></div>

                                <div className="w-full h-[80%] bg-gray-300 rounded-t-md"></div>

                                <div className="w-full h-[65%] bg-gray-200 rounded-t-md"></div>

                            </div>

                            <div className="flex justify-between text-xs text-gray-400 mt-3 px-4">
                                <span>Mon</span>
                                <span>Tue</span>
                                <span>Wed</span>
                                <span>Thu</span>
                                <span>Fri</span>
                                <span>Sat</span>
                                <span>Sun</span>
                            </div>

                        </div>


                        {/* Recent Activity */}
                        <div className="bg-white border border-gray-200 rounded-xl p-5">

                            <div className="flex items-center justify-between mb-5">

                                <h3 className="font-semibold text-gray-900">
                                    Recent Activity
                                </h3>

                                <button className="text-sm text-gray-500 hover:text-black">
                                    View all
                                </button>

                            </div>


                            {/* Activity  */}
                          <Activity/>

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
}

export default HomePage;