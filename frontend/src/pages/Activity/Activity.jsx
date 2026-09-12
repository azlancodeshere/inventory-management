import React from 'react'
import {
    Plus,
    TrendingUp,
    AlertTriangle
} from "lucide-react";

const Activity = () => {
  return (
    <div>
    <div className="flex gap-3 py-3 border-b border-gray-100">

                                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                    <Plus size={17} />
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-800">
                                        New product added
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1">
                                        Wireless Keyboard
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1">
                                        10 minutes ago
                                    </p>
                                </div>

                            </div>


                            {/* Activity 2 */}
                            <div className="flex gap-3 py-3 border-b border-gray-100">

                                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                    <TrendingUp size={17} />
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-800">
                                        Stock updated
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1">
                                        Mechanical Keyboard
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1">
                                        35 minutes ago
                                    </p>
                                </div>

                            </div>


                            {/* Activity 3 */}
                            <div className="flex gap-3 py-3">

                                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                    <AlertTriangle size={17} />
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-800">
                                        Low stock alert
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1">
                                        USB-C Cable
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1">
                                        1 hour ago
                                    </p>
                                </div>

                            </div>
                            </div>
  )
}

export default Activity