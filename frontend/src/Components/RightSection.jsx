import React from 'react'
import {
    User,
    Mail,
    Lock,
    Eye,
    TrendingUp,
    Users,
    ShieldCheck,
    UserPlus,
    Phone
} from "lucide-react";

const RightSection = () => {
  return (
    <div className="
                                hidden
                                flex-col
                                border-l
                                border-slate-100
                                bg-slate-50
                                p-7
                                lg:flex
                                xl:p-9
                            ">


                               

                                <div className="text-center">

                                    <p className="text-lg font-medium italic text-slate-600">
                                        Better Stock
                                    </p>

                                    <p className="text-lg font-medium italic text-slate-600">
                                        A Brighter Tomorrow
                                    </p>

                                </div>


                                

                                <div className="flex flex-1 items-center justify-center py-8">

                                    <div className="relative h-64 w-64">


                                    

                                        <div className="
                                            absolute
                                            left-4
                                            top-8
                                            h-48
                                            w-36
                                            border-x-8
                                            border-blue-900
                                        ">

                                            <div className="absolute left-0 top-0 h-2 w-full bg-blue-900" />

                                            <div className="absolute left-0 top-[65px] h-2 w-full bg-blue-900" />

                                            <div className="absolute left-0 top-[130px] h-2 w-full bg-blue-900" />

                                            <div className="absolute bottom-0 left-0 h-2 w-full bg-blue-900" />


                                           

                                            <div className="
                                                absolute
                                                left-3
                                                top-5
                                                h-9
                                                w-12
                                                rounded
                                                bg-amber-400/80
                                            " />


                                          

                                            <div className="
                                                absolute
                                                right-3
                                                top-5
                                                h-9
                                                w-12
                                                rounded
                                                bg-orange-300
                                            " />


                                           

                                            <div className="
                                                absolute
                                                left-8
                                                top-[83px]
                                                h-9
                                                w-14
                                                rounded
                                                bg-amber-500/70
                                            " />


                                           

                                            <div className="
                                                absolute
                                                left-2
                                                top-[148px]
                                                h-9
                                                w-12
                                                rounded
                                                bg-orange-300
                                            " />


                                          
                                            <div className="
                                                absolute
                                                right-2
                                                top-[148px]
                                                h-9
                                                w-12
                                                rounded
                                                bg-amber-400/80
                                            " />

                                        </div>


                                       

                                        <div className="absolute right-5 top-7">

                                            <div className="
                                                mx-auto
                                                h-9
                                                w-9
                                                rounded-full
                                                bg-orange-200
                                            " />

                                            <div className="
                                                mx-auto
                                                mt-1
                                                h-20
                                                w-12
                                                rounded-t-2xl
                                                bg-blue-500
                                            " />

                                            <div className="flex justify-center gap-2">

                                                <div className="
                                                    h-16
                                                    w-3.5
                                                    rounded-full
                                                    bg-slate-800
                                                " />

                                                <div className="
                                                    h-16
                                                    w-3.5
                                                    rounded-full
                                                    bg-slate-800
                                                " />

                                            </div>

                                        </div>


                                        

                                        <div className="absolute bottom-0 left-0">

                                            <div className="
                                                mx-auto
                                                h-8
                                                w-10
                                                rounded-b-lg
                                                bg-blue-500
                                            " />

                                            <div className="
                                                mx-auto
                                                h-16
                                                w-1
                                                bg-emerald-500
                                            " />

                                            <div className="
                                                absolute
                                                -left-2
                                                top-0
                                                h-5
                                                w-9
                                                rotate-[-35deg]
                                                rounded-full
                                                bg-emerald-400
                                            " />

                                            <div className="
                                                absolute
                                                left-4
                                                top-4
                                                h-5
                                                w-9
                                                rotate-[35deg]
                                                rounded-full
                                                bg-emerald-500
                                            " />

                                        </div>

                                    </div>

                                </div>


                                

                                <div className="space-y-5">


                                    <div className="flex items-center gap-4">

                                        <div className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-emerald-100
                                            text-emerald-600
                                        ">
                                            <TrendingUp size={20} />
                                        </div>

                                        <div>

                                            <h3 className="text-sm font-semibold text-slate-800">
                                                Efficient Operations
                                            </h3>

                                            <p className="mt-1 text-xs text-slate-500">
                                                Save time and reduce costs.
                                            </p>

                                        </div>

                                    </div>


                                  

                                    <div className="flex items-center gap-4">

                                        <div className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-blue-100
                                            text-blue-600
                                        ">
                                            <Users size={20} />
                                        </div>

                                        <div>

                                            <h3 className="text-sm font-semibold text-slate-800">
                                                Collaborate Easily
                                            </h3>

                                            <p className="mt-1 text-xs text-slate-500">
                                                Work together, achieve more.
                                            </p>

                                        </div>

                                    </div>


                                  

                                    <div className="flex items-center gap-4">

                                        <div className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-purple-100
                                            text-purple-600
                                        ">
                                            <ShieldCheck size={20} />
                                        </div>

                                        <div>

                                            <h3 className="text-sm font-semibold text-slate-800">
                                                Built for Your Business
                                            </h3>

                                            <p className="mt-1 text-xs text-slate-500">
                                                Simple. Powerful. Reliable.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>
    
  )
}

export default RightSection