import React from "react";
import {
    Plus,
    TrendingUp,
    AlertTriangle
} from "lucide-react";

const Activity = ({ products }) => {

    const lowStockProducts = products.filter(
        (product) =>
            product.quantity > 0 &&
            product.quantity <= product.lowStockThreshold
    );

    //  all stocks wich are updated
    // const updatedStock = products.filter(
    //     (product) =>
    //         product.updatedAt
    // )

    // the stock wich is latest updated
    const updatedStock = products.reduce((latest, product) => {
        if (!latest) {
            return product;

        }

        return new Date(product.updatedAt) > new Date(latest.updatedAt)
            ? product
            : latest;

    }, null)


    const newProductAdded = products.reduce((latest, product) => {
        if (!latest) {
           return product
       }

       return new Date(product.updatedAt) > new Date(latest.updatedAt)
        ? product
            : latest;
    }, null)



    const getTimeAgo = (date) => {
        const now = new Date();
        const created = new Date(date);

        const diff = Math.floor((now - created) / 1000);

        if (diff < 60) {
            return `${diff} seconds ago`;
        }

        const minutes = Math.floor(diff / 60);

        if (minutes < 60) {
            return `${minutes} minutes ago`;
        }

        const hours = Math.floor(minutes / 60);

        if (hours < 24) {
            return `${hours} hours ago`;
        }

        const days = Math.floor(hours / 24);

        return `${days} days ago`;
    };

    return (
        <div>

            {/* Activity 1 */}
            <div className="flex gap-3 py-3 border-b border-gray-100">

                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <Plus size={17} />
                </div>

                <div>

                    <p className="text-sm font-medium text-gray-800">
                        New product added
                    </p>

                   {newProductAdded && (
                    <>
                     <p className="text-sm text-gray-400 mt-1">
                        {newProductAdded.productname}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                        {getTimeAgo(newProductAdded.updatedAt)}
                    </p>
                    </>
                   )}

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

                    {updatedStock && (
                        <>
                            <p className="text-sm text-gray-400 mt-1">
                                {updatedStock.productname}
                            </p>

                            <p className="text-xs text-gray-400 mt-1">
                                {getTimeAgo(updatedStock.updatedAt)}
                            </p>
                        </>
                    )}

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

                    {lowStockProducts.length > 0 ? (

                        lowStockProducts.map((product) => (

                            <div key={product._id}>

                                <p className="text-sm text-gray-400 mt-1">
                                    {product.productname}
                                </p>

                                <p className="text-xs text-gray-400 mt-1">
                                    {getTimeAgo(product.createdAt)}
                                </p>

                            </div>

                        ))

                    ) : (

                        <p className="text-sm text-gray-400 mt-1">
                            No low stock products
                        </p>

                    )}

                </div>

            </div>

        </div>
    );
};

export default Activity;