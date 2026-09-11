import React from 'react'
import {
    Package,
    Users,
    BarChart3,
    ShieldCheck
} from "lucide-react";

const LeftSection = () => {
  return (
    <div className="h-full">
        <section className="hidden lg:flex h-full relative overflow-hidden bg-gradient-to-br from-[#0d2d58] via-[#123f78] to-[#1764ae] px-8 xl:px-14 py-12 xl:py-14 text-white">

                        {/* Background decoration */}
                        <div className="absolute -right-52 -bottom-52 w-[600px] h-[600px] rounded-full bg-white/5" />

                        <div className="relative z-10 w-full max-w-xl">

                            {/* BADGE */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs text-blue-100">
                                <BarChart3 size={15} />
                                Smarter Inventory, Brighter Business
                            </div>


                            {/* HEADING */}
                            <h1 className="mt-7 text-4xl xl:text-6xl font-bold leading-[1.08] tracking-tight">

                                Manage Your
                                <br />

                                Inventory
                                <br />

                                With{" "}
                                <span className="text-blue-400">
                                    Confidence
                                </span>

                            </h1>


                            {/* DESCRIPTION */}
                            <p className="mt-6 max-w-md text-sm xl:text-base leading-7 text-blue-100/90">
                                Track products, manage stock, and grow your
                                business with our easy-to-use inventory
                                management system.
                            </p>


                            {/* FEATURES */}
                            <div className="mt-8 space-y-5">

                                {/* FEATURE 1 */}
                                <div className="flex items-center gap-4">

                                    <div className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                                        <Package size={21} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-sm">
                                            Real-time Stock Tracking
                                        </h3>

                                        <p className="text-xs text-blue-100/70 mt-1">
                                            Know what you have, always.
                                        </p>
                                    </div>

                                </div>


                                {/* FEATURE 2 */}
                                <div className="flex items-center gap-4">

                                    <div className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                                        <Users size={21} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-sm">
                                            Team Management
                                        </h3>

                                        <p className="text-xs text-blue-100/70 mt-1">
                                            Manage your entire team easily.
                                        </p>
                                    </div>

                                </div>


                                {/* FEATURE 3 */}
                                <div className="flex items-center gap-4">

                                    <div className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                                        <BarChart3 size={21} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-sm">
                                            Detailed Reports
                                        </h3>

                                        <p className="text-xs text-blue-100/70 mt-1">
                                            Make smarter business decisions.
                                        </p>
                                    </div>

                                </div>


                                {/* FEATURE 4 */}
                                <div className="flex items-center gap-4">

                                    <div className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                                        <ShieldCheck size={21} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-sm">
                                            Secure & Reliable
                                        </h3>

                                        <p className="text-xs text-blue-100/70 mt-1">
                                            Your data is safe with us.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>
    </div>
  )
}

export default LeftSection
