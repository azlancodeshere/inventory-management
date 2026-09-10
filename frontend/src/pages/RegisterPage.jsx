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
import { Navbar } from "../Components/Navbar";
import LeftSection from "../Components/LeftSection";

function RegisterPage() {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">

            
            <Navbar/>

            {/* ================= MAIN ================= */}
            <main className="min-h-[calc(100vh-72px)]">

                <div className="grid lg:grid-cols-[38%_62%] min-h-[calc(100vh-72px)]">


                    {/* ================= LEFT SECTION ================= */}
                     <LeftSection/>


                    {/* ================= RIGHT SECTION ================= */}
                    <section className="flex items-center justify-center px-3 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 xl:px-14">

                        <div className="w-full max-w-5xl bg-white rounded-xl sm:rounded-2xl shadow-xl shadow-slate-300/30 overflow-hidden grid lg:grid-cols-[60%_40%]">


                            {/* ================= FORM ================= */}
                            <div className="p-5 sm:p-7 md:p-9 xl:p-12">

                                <div className="w-full max-w-xl mx-auto">

                                    {/* HEADING */}
                                    <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-slate-900">
                                        Create Your Account
                                    </h1>

                                    <p className="mt-2 text-xs sm:text-sm text-slate-500">
                                        Join StockFlow and start managing your inventory today.
                                    </p>


                                    {/* FORM */}
                                    <div className="mt-7">


                                        {/* FULL NAME */}
                                        <div>

                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Full Name
                                            </label>

                                            <div className="h-12 w-full flex items-center gap-3 px-4 border border-slate-200 rounded-lg focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition">

                                                <User
                                                    size={18}
                                                    className="text-slate-400 shrink-0"
                                                />

                                                <input
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    className="w-full min-w-0 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
                                                />

                                            </div>

                                        </div>


                                        {/* USERNAME */}
                                        <div className="mt-5">

                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Username
                                            </label>

                                            <div className="h-12 w-full flex items-center gap-3 px-4 border border-slate-200 rounded-lg focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition">

                                                <User
                                                    size={18}
                                                    className="text-slate-400 shrink-0"
                                                />

                                                <input
                                                    type="text"
                                                    placeholder="Choose a username"
                                                    className="w-full min-w-0 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
                                                />

                                            </div>

                                        </div>


                                        {/* EMAIL */}
                                        <div className="mt-5">

                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Email Address
                                            </label>

                                            <div className="h-12 w-full flex items-center gap-3 px-4 border border-slate-200 rounded-lg focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition">

                                                <Mail
                                                    size={18}
                                                    className="text-slate-400 shrink-0"
                                                />

                                                <input
                                                    type="email"
                                                    placeholder="you@example.com"
                                                    className="w-full min-w-0 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
                                                />

                                            </div>

                                        </div>


                                        {/* PASSWORD */}
                                        <div className="mt-5">

                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Password
                                            </label>

                                            <div className="h-12 w-full flex items-center gap-3 px-4 border border-slate-200 rounded-lg focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition">

                                                <Lock
                                                    size={18}
                                                    className="text-slate-400 shrink-0"
                                                />

                                                <input
                                                    type="password"
                                                    placeholder="Create a strong password"
                                                    className="w-full min-w-0 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
                                                />

                                                <button
                                                    type="button"
                                                    className="text-slate-400 hover:text-slate-600 shrink-0"
                                                >
                                                    <Eye size={18} />
                                                </button>

                                            </div>

                                        </div>


                                        {/* CONFIRM PASSWORD */}
                                        <div className="mt-5">

                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Confirm Password
                                            </label>

                                            <div className="h-12 w-full flex items-center gap-3 px-4 border border-slate-200 rounded-lg focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition">

                                                <Lock
                                                    size={18}
                                                    className="text-slate-400 shrink-0"
                                                />

                                                <input
                                                    type="password"
                                                    placeholder="Confirm your password"
                                                    className="w-full min-w-0 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
                                                />

                                                <button
                                                    type="button"
                                                    className="text-slate-400 hover:text-slate-600 shrink-0"
                                                >
                                                    <Eye size={18} />
                                                </button>

                                            </div>

                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                                Phone Number
                                            </label>

                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />

                                                <input
                                                    type="tel"
                                                    placeholder="+91 9876543210"
                                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                                                />
                                            </div>
                                        </div>


                                        {/* CREATE ACCOUNT */}
                                        <button
                                            type="button"
                                            className="w-full h-12 mt-6 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-blue-600/20"
                                        >

                                            <UserPlus size={19} />

                                            Create Account

                                        </button>


                                        {/* OR */}
                                        <div className="flex items-center gap-4 my-6">

                                            <div className="h-px bg-slate-200 flex-1" />

                                            <span className="text-xs text-slate-400">
                                                OR
                                            </span>

                                            <div className="h-px bg-slate-200 flex-1" />

                                        </div>


                                        {/* LOGIN */}
                                        <p className="text-center text-sm text-slate-500">

                                            Already have an account?

                                            <a
                                                href="#"
                                                className="ml-1 text-blue-600 font-semibold hover:text-blue-700"
                                            >
                                                Login here
                                            </a>

                                        </p>

                                    </div>

                                </div>

                            </div>



                            {/* ================= RIGHT INFO ================= */}
                            <div className="hidden lg:flex flex-col bg-slate-50 border-l border-slate-100 p-8 xl:p-10">

                                {/* TITLE */}
                                <div className="text-center">

                                    <p className="text-lg italic font-medium text-slate-600">
                                        Better Stock
                                    </p>

                                    <p className="text-lg italic font-medium text-slate-600">
                                        A Brighter Tomorrow
                                    </p>

                                </div>


                                {/* ILLUSTRATION */}
                                <div className="flex-1 flex items-center justify-center py-8">

                                    <div className="relative w-64 h-64">


                                        {/* SHELF */}
                                        <div className="absolute left-4 top-8 w-36 h-48 border-x-8 border-blue-900">

                                            <div className="absolute top-0 left-0 w-full h-2 bg-blue-900" />

                                            <div className="absolute top-[65px] left-0 w-full h-2 bg-blue-900" />

                                            <div className="absolute top-[130px] left-0 w-full h-2 bg-blue-900" />

                                            <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-900" />


                                            {/* BOXES */}
                                            <div className="absolute top-5 left-3 w-12 h-9 rounded bg-amber-400/80" />

                                            <div className="absolute top-5 right-3 w-12 h-9 rounded bg-orange-300" />

                                            <div className="absolute top-[83px] left-8 w-14 h-9 rounded bg-amber-500/70" />

                                            <div className="absolute top-[148px] left-2 w-12 h-9 rounded bg-orange-300" />

                                            <div className="absolute top-[148px] right-2 w-12 h-9 rounded bg-amber-400/80" />

                                        </div>


                                        {/* PERSON */}
                                        <div className="absolute right-5 top-7">

                                            <div className="w-9 h-9 rounded-full bg-orange-200 mx-auto" />

                                            <div className="w-12 h-20 mt-1 rounded-t-2xl bg-blue-500 mx-auto" />

                                            <div className="flex justify-center gap-2">

                                                <div className="w-3.5 h-16 rounded-full bg-slate-800" />

                                                <div className="w-3.5 h-16 rounded-full bg-slate-800" />

                                            </div>

                                        </div>


                                        {/* PLANT */}
                                        <div className="absolute bottom-0 left-0">

                                            <div className="w-10 h-8 bg-blue-500 rounded-b-lg mx-auto" />

                                            <div className="w-1 h-16 bg-emerald-500 mx-auto" />

                                            <div className="absolute top-0 -left-2 w-9 h-5 bg-emerald-400 rounded-full -rotate-[35deg]" />

                                            <div className="absolute top-4 left-4 w-9 h-5 bg-emerald-500 rounded-full rotate-[35deg]" />

                                        </div>

                                    </div>

                                </div>


                                {/* BENEFITS */}
                                <div className="space-y-5">

                                    {/* BENEFIT 1 */}
                                    <div className="flex items-center gap-4">

                                        <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                            <TrendingUp size={20} />
                                        </div>

                                        <div>

                                            <h3 className="text-sm font-semibold text-slate-800">
                                                Efficient Operations
                                            </h3>

                                            <p className="text-xs text-slate-500 mt-1">
                                                Save time and reduce costs.
                                            </p>

                                        </div>

                                    </div>


                                    {/* BENEFIT 2 */}
                                    <div className="flex items-center gap-4">

                                        <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                            <Users size={20} />
                                        </div>

                                        <div>

                                            <h3 className="text-sm font-semibold text-slate-800">
                                                Collaborate Easily
                                            </h3>

                                            <p className="text-xs text-slate-500 mt-1">
                                                Work together, achieve more.
                                            </p>

                                        </div>

                                    </div>


                                    {/* BENEFIT 3 */}
                                    <div className="flex items-center gap-4">

                                        <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                                            <ShieldCheck size={20} />
                                        </div>

                                        <div>

                                            <h3 className="text-sm font-semibold text-slate-800">
                                                Built for Your Business
                                            </h3>

                                            <p className="text-xs text-slate-500 mt-1">
                                                Simple. Powerful. Reliable.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                </div>

            </main>

        </div>
    );
}

export default RegisterPage;