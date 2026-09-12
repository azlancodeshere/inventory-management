import {
    Mail,
    Lock,
    Eye,
    LogIn
} from "lucide-react";

import { Navbar } from "../Components/Navbar";
import LeftSection from "../Components/LeftSection";
import RightSection from "../Components/RightSection";
import api from "../api/api.js"
import { useContext, useState } from "react";

import {Link, useNavigate} from "react-router-dom"

import { AuthContext } from "../context/AuthContext.jsx";


function LoginPage() {

    const navigate= useNavigate();

    const {setUser, setIsAuthenticated} = useContext(AuthContext)


   const [formData, setFormData] = useState({
      email:"",
      password:"",
    
    })

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        }
        )
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()


     try {
        const response = await api.post("/users/login", formData)
        console.log(response.data)
        setUser(response.data.data);
        setIsAuthenticated(true)

      navigate("/home")


     } catch (error) {
        console.log("error in login",error);
        setIsAuthenticated(false)
 
     }


    }
    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">

            <Navbar />

            <main className="min-h-[calc(100vh-72px)]">

                <div className="grid min-h-[calc(100vh-72px)] lg:grid-cols-[38%_62%]">

                    <LeftSection />

                    <section className="flex items-start justify-center px-3 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-4 lg:py-0 xl:px-6">

                        <div className="grid w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-300/30 lg:grid-cols-[60%_40%]">

                            <div className="p-5 sm:p-7 md:p-8 xl:p-10">

                                <div className="mx-auto w-full max-w-xl">

                                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                        Welcome Back
                                    </h1>

                                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                                        Login to your StockFlow account and manage your inventory.
                                    </p>

                                    <form 
                                    onSubmit={handleSubmit}
                                    
                                    className="mt-7">

                                        <div>

                                            <label
                                                htmlFor="email"
                                                className="mb-2 block text-sm font-semibold text-slate-700"
                                            >
                                                Email Address
                                            </label>

                                            <div className="flex h-12 w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">

                                                <Mail
                                                    size={18}
                                                    className="shrink-0 text-slate-400"
                                                />

                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="you@example.com"
                                                    autoComplete="email"
                                                    className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                                                />

                                            </div>

                                        </div>


                                        <div className="mt-5">

                                            <div className="flex items-center justify-between">

                                                <label
                                                    htmlFor="password"
                                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                                >
                                                    Password
                                                </label>

                                                <a
                                                    href="#"
                                                    className="mb-2 text-xs font-semibold text-blue-600 transition hover:text-blue-700"
                                                >
                                                    Forgot Password?
                                                </a>

                                            </div>

                                            <div className="flex h-12 w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">

                                                <Lock
                                                    size={18}
                                                    className="shrink-0 text-slate-400"
                                                />

                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    placeholder="Enter your password"
                                                    autoComplete="current-password"
                                                    className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                                                />

                                                <Eye
                                                    size={18}
                                                    className="shrink-0 text-slate-400"
                                                />

                                            </div>

                                        </div>


                                        <button
                                            type="submit"
                                            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:bg-blue-800"
                                        >
                                            <LogIn size={19} />
                                            Login
                                        </button>


                                        <div className="my-6 flex items-center gap-4">

                                            <div className="h-px flex-1 bg-slate-200" />

                                            <span className="text-xs text-slate-400">
                                                OR
                                            </span>

                                            <div className="h-px flex-1 bg-slate-200" />

                                        </div>


                                        <p className="text-center text-sm text-slate-500">

                                            Don't have an account?

                                            <a
                                                href="#"
                                                className="ml-1 font-semibold text-blue-600 transition hover:text-blue-700"
                                            >
                                                Create Account
                                            </a>

                                        </p>

                                    </form>

                                </div>

                            </div>

                            <RightSection />

                        </div>

                    </section>

                </div>

            </main>

        </div>
    );
}

export default LoginPage;