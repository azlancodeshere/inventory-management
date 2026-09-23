import {
    Plus,
} from "lucide-react";

import HomeNavbar from "./Home/HomeNavbar";
import SideBar from "../Components/SideBar";
import Cards from "./cards/Cards";
import Activity from "./Activity/Activity";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function HomePage() {

    const { user, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [sortType, setSortType] = useState("all")

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
    
    if(sortType === "highest"){
        chartProducts.sort( // larger to smaller
            (a,b)=> Number(b.quantity) - Number(a.quantity)
        )
    }

    if(sortType === "lowest"){
        chartProducts.sort( // sort() array ke items ko order mein arrange karta hai. samaller to larger
            (a,b) => Number(a.quantity) - Number(b.quantity)
        )
    }

     const maxStock = Math.max(
        ...chartProducts.map((product) => Number(product.quantity) || 0),
        1
    );

    return (
        <div className="min-h-screen bg-gray-100">

        
            <HomeNavbar />


           
            <div className="flex">

             
                <SideBar />


              
                <main className="flex-1 p-6">


                  

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">

                        <div>

                            <h2 className="text-2xl font-bold text-gray-900">
                                Dashboard
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Welcome back,{" "}
                                {isAuthenticated && user?.username} 👋
                            </p>

                        </div>


                        <button
                            onClick={() => navigate("/create-product")}
                            className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800"
                        >

                            <Plus size={18} />

                            Add Product

                        </button>

                    </div>



                  

                    <Cards products={products} />



                   

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">


                       

                        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-xl p-5">


                            {/* Chart Header */}

                            <div className="flex items-center justify-between mb-6">

                                <div>

                                    <h3 className="font-semibold text-gray-900">
                                        Stock Overview
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Inventory status overview
                                    </p>

                                </div>


                                <select
                                value={sortType}
                                onChange={(e) => setSortType(e.target.value)}

                                className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none">

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

                            </div>



                          

                            {chartProducts.length > 0 ? (

                                <>

                                    <div className="h-64 flex items-end gap-5 px-5 border-b border-gray-100">

                                        {chartProducts.map((product) => {

                                            const quantity =
                                                Number(product.quantity) || 0;

                                            const height =
                                                (quantity / maxStock) * 100;


                                            return (

                                                <div
                                                    key={product._id}
                                                    className="flex-1 flex items-end h-full min-w-0"
                                                >

                                                    <div
                                                        className="w-full bg-red-300 hover:bg-green-400 rounded-t-md transition-all duration-200 cursor-pointer"
                                                        style={{
                                                            height: `${height}%`,
                                                            minHeight:
                                                                quantity > 0
                                                                    ? "8px"
                                                                    : "0px"
                                                        }}
                                                        title={`${product.productname} - ${quantity} in stock`}
                                                    >
                                                    </div>

                                                </div>

                                            );

                                        })}

                                    </div>



                                  

                                    <div className="flex gap-5 text-xs text-gray-400 mt-3 px-5">

                                        {chartProducts.map((product) => (

                                            <div
                                                key={product._id}
                                                className="flex-1 text-center truncate"
                                                title={product.productname}
                                            >

                                                {product.productname}

                                            </div>

                                        ))}

                                    </div>

                                </>

                            ) : (

                                <div className="h-64 flex items-center justify-center text-sm text-gray-400">

                                    No products available

                                </div>

                            )}

                        </div>



                        {/* ================= RECENT ACTI VITY ================= */}

                        <div className="bg-white border border-gray-200 rounded-xl p-5">


                            <div className="flex items-center justify-between mb-5">

                                <h3 className="font-semibold text-gray-900">
                                    Recent Activity
                                </h3>


                                <button className="text-sm text-gray-500 hover:text-black">

                                    View all

                                </button>

                            </div>



                            {/* Activity */}

                            <Activity products={products} />

                        </div>


                    </div>

                </main>

            </div>

        </div>
    );
}

export default HomePage;