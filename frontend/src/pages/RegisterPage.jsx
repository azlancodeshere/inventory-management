import {
    User,
    Mail,
    Lock,
    Eye,
    UserPlus,
    Phone
} from "lucide-react";

import { useContext, useState } from "react";

import { Navbar } from "../Components/Navbar";
import LeftSection from "../Components/LeftSection";
import RightSection from "../Components/RightSection";

import api from "../api/api.js";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext.jsx";


function RegisterPage() {

    const navigate = useNavigate();

    const {
        setUser,
        setIsAuthenticated
    } = useContext(AuthContext);


  

    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    });


   

    const [loading, setLoading] = useState(false);


   
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();


        // Prevent double submit
        if (loading) return;


       

        if (
            formData.password !==
            formData.confirmPassword
        ) {

            alert(
                "Password does not match with confirm password"
            );

            return;
        }


        try {

            setLoading(true);


           

            const response = await api.post(
                "/users/register",
                formData
            );


            console.log(
                "Registration response:",
                response.data
            );



            setUser(response.data.data);

            setIsAuthenticated(true);


            

            navigate("/home", {
                replace: true
            });


        } catch (error) {

            console.log(
                "Error in registration:",
                error
            );


            console.log(
                "Backend error:",
                error.response?.data
            );


            alert(
                error.response?.data?.message ||
                "Registration failed. Please try again."
            );


        } finally {

            setLoading(false);

        }

    };


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

                                        Create Your Account

                                    </h1>


                                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">

                                        Join StockFlow and start managing
                                        your inventory today.

                                    </p>


                                    <form
                                        onSubmit={handleSubmit}
                                        className="mt-7"
                                    >


                                      
                                        <div>

                                            <label
                                                htmlFor="fullname"
                                                className="mb-2 block text-sm font-semibold text-slate-700"
                                            >
                                                Full Name
                                            </label>


                                            <div className="flex h-12 w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">

                                                <User
                                                    size={18}
                                                    className="shrink-0 text-slate-400"
                                                />


                                                <input
                                                    name="fullname"
                                                    type="text"
                                                    id="fullname"
                                                    value={formData.fullname}
                                                    onChange={handleChange}
                                                    placeholder="Enter your full name"
                                                    autoComplete="name"
                                                    disabled={loading}
                                                    required
                                                    className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
                                                />

                                            </div>

                                        </div>


                                       
                                        <div className="mt-5">

                                            <label
                                                htmlFor="username"
                                                className="mb-2 block text-sm font-semibold text-slate-700"
                                            >
                                                Username
                                            </label>


                                            <div className="flex h-12 w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">

                                                <User
                                                    size={18}
                                                    className="shrink-0 text-slate-400"
                                                />


                                                <input
                                                    id="username"
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                    name="username"
                                                    type="text"
                                                    placeholder="Choose a username"
                                                    autoComplete="username"
                                                    disabled={loading}
                                                    required
                                                    className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
                                                />

                                            </div>

                                        </div>


                                       
                                        <div className="mt-5">

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
                                                    onChange={handleChange}
                                                    value={formData.email}
                                                    name="email"
                                                    type="email"
                                                    placeholder="you@example.com"
                                                    autoComplete="email"
                                                    disabled={loading}
                                                    required
                                                    className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
                                                />

                                            </div>

                                        </div>


                                      

                                        <div className="mt-5">

                                            <label
                                                htmlFor="phone"
                                                className="mb-2 block text-sm font-semibold text-slate-700"
                                            >
                                                Phone Number
                                            </label>


                                            <div className="flex h-12 w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">

                                                <Phone
                                                    size={18}
                                                    className="shrink-0 text-slate-400"
                                                />


                                                <input
                                                    id="phone"
                                                    onChange={handleChange}
                                                    value={formData.phoneNumber}
                                                    name="phoneNumber"
                                                    type="tel"
                                                    placeholder="+91 9876543210"
                                                    autoComplete="tel"
                                                    disabled={loading}
                                                    required
                                                    className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
                                                />

                                            </div>

                                        </div>


                                      

                                        <div className="mt-5">

                                            <label
                                                htmlFor="password"
                                                className="mb-2 block text-sm font-semibold text-slate-700"
                                            >
                                                Password
                                            </label>


                                            <div className="flex h-12 w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">

                                                <Lock
                                                    size={18}
                                                    className="shrink-0 text-slate-400"
                                                />


                                                <input
                                                    id="password"
                                                    onChange={handleChange}
                                                    value={formData.password}
                                                    name="password"
                                                    type="password"
                                                    placeholder="Create a strong password"
                                                    autoComplete="new-password"
                                                    disabled={loading}
                                                    required
                                                    minLength={6}
                                                    className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
                                                />


                                                <Eye
                                                    size={18}
                                                    className="shrink-0 text-slate-400"
                                                />

                                            </div>

                                        </div>


                                     

                                        <div className="mt-5">

                                            <label
                                                htmlFor="confirmPassword"
                                                className="mb-2 block text-sm font-semibold text-slate-700"
                                            >
                                                Confirm Password
                                            </label>


                                            <div className="flex h-12 w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">

                                                <Lock
                                                    size={18}
                                                    className="shrink-0 text-slate-400"
                                                />


                                                <input
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    type="password"
                                                    placeholder="Confirm your password"
                                                    autoComplete="new-password"
                                                    disabled={loading}
                                                    required
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    minLength={6}
                                                    className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
                                                />


                                                <Eye
                                                    size={18}
                                                    className="shrink-0 text-slate-400"
                                                />

                                            </div>

                                        </div>


                                       

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
                                        >

                                            {loading ? (

                                                <>
                                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                                                    Creating Account...
                                                </>

                                            ) : (

                                                <>
                                                    <UserPlus size={19} />

                                                    Create Account
                                                </>

                                            )}

                                        </button>


                                        

                                        <div className="my-6 flex items-center gap-4">

                                            <div className="h-px flex-1 bg-slate-200" />

                                            <span className="text-xs text-slate-400">
                                                OR
                                            </span>

                                            <div className="h-px flex-1 bg-slate-200" />

                                        </div>


                                      

                                        <p className="text-center text-sm text-slate-500">

                                            Already have an account?

                                            <Link
                                                to="/login"
                                                className="ml-1 font-semibold text-blue-600 transition hover:text-blue-700"
                                            >
                                                Login here
                                            </Link>

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


export default RegisterPage;