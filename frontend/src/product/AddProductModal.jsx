import { X, Upload, Package } from "lucide-react";
import { useState, useEffect } from "react";
import api from "../api/api.js";
import { useNavigate } from "react-router-dom";

function AddProductModal({ product, onClose }) {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        productname: "",
        description: "",
        price: "",
        quantity: "",
        category: "",
        sku: "",
        lowStockThreshold: 10,
    });


    
    useEffect(() => {

        if (product) {

            setFormData({
                productname: product.productname,
                description: product.description,
                price: product.price,
                quantity: product.quantity,
                category: product.category,
                sku: product.sku,
                lowStockThreshold: product.lowStockThreshold,
            });

        }

    }, [product]);


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

       
        if (loading) return;


        console.log("Submit clicked");
        console.log("Form Data:", formData);


        if (
            !formData.category ||
            !formData.description ||
            !formData.lowStockThreshold ||
            !formData.price ||
            !formData.productname ||
            !formData.quantity ||
            !formData.sku
        ) {

            alert("All fields are required");
            return;

        }


        try {

            setLoading(true);



            if (product) {

                const response = await api.patch(
                    `/products/update-product/${product._id}`,
                    formData
                );

                console.log(
                    "UPDATE RESPONSE:",
                    response.data
                );

                alert("Product updated successfully");

                onClose(response.data.data);

            }


           

            else {

                console.log("Creating new product");

                const response = await api.post(
                    "/products/create-product",
                    formData
                );

                console.log(
                    "CREATE RESPONSE:",
                    response.data
                );

                alert("Product created successfully");

                navigate("/home");

            }


        } catch (error) {

            console.log(
                "Error in product:",
                error
            );

            console.log(
                "ERROR RESPONSE:",
                error.response?.data
            );

            alert(
                error.response?.data?.message ||
                "Something went wrong"
            );

        } finally {

            setLoading(false);

        }

    };


    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3 sm:px-4 py-4">

            <div className="w-full max-w-2xl max-h-[95vh] overflow-y-auto bg-white rounded-xl sm:rounded-2xl shadow-xl">


              
                <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-200">

                    <div className="flex items-center gap-3 min-w-0">

                        <div className="shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">

                            <Package
                                size={20}
                                className="text-gray-700"
                            />

                        </div>


                        <div className="min-w-0">

                            <h2 className="text-base sm:text-lg font-semibold text-gray-900 truncate">

                                {product
                                    ? "Update Product"
                                    : "Add New Product"
                                }

                            </h2>


                            <p className="text-xs sm:text-sm text-gray-500 truncate">

                                {product
                                    ? "Update your product details"
                                    : "Add a new product to your inventory"
                                }

                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        disabled={loading}
                        onClick={() => {

                            if (loading) return;

                            if (product) {
                                onClose();
                            } else {
                                navigate("/all-products");
                            }

                        }}
                        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >

                        <X
                            size={20}
                            className="text-gray-500"
                        />

                    </button>

                </div>


                

                <form
                    onSubmit={handleSubmit}
                    className="p-4 sm:p-6"
                >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">


                        

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Product Name
                            </label>

                            <input
                                type="text"
                                name="productname"
                                value={formData.productname}
                                onChange={handleChange}
                                placeholder="Enter product name"
                                disabled={loading}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />

                        </div>


                      

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                SKU
                            </label>

                            <input
                                type="text"
                                name="sku"
                                value={formData.sku}
                                onChange={handleChange}
                                placeholder="e.g. KB-001"
                                disabled={loading}
                                className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-black text-sm sm:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />

                        </div>


                      

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category
                            </label>

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                disabled={loading}
                                className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-black bg-white text-sm sm:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                            >

                                <option value="">
                                    Select category
                                </option>

                                <option value="electronics">
                                    Electronics
                                </option>

                                <option value="clothing">
                                    Clothing
                                </option>

                                <option value="grocery">
                                    Grocery
                                </option>

                                <option value="accessories">
                                    Accessories
                                </option>

                                <option value="footwares">
                                    Footwear
                                </option>

                            </select>

                        </div>


                        

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price
                            </label>

                            <div className="relative">

                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                    ₹
                                </span>

                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    disabled={loading}
                                    className="w-full h-11 pl-8 pr-3 border border-gray-200 rounded-lg outline-none focus:border-black text-sm sm:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                                />

                            </div>

                        </div>


                      

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Quantity
                            </label>

                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                placeholder="Enter quantity"
                                disabled={loading}
                                className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-black text-sm sm:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />

                        </div>


                        

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Low Stock Threshold
                            </label>

                            <input
                                type="number"
                                name="lowStockThreshold"
                                value={formData.lowStockThreshold}
                                onChange={handleChange}
                                placeholder="10"
                                disabled={loading}
                                className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-black text-sm sm:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />

                            <p className="text-xs text-gray-400 mt-1">
                                Alert when stock reaches this level
                            </p>

                        </div>

                    </div>


                    

                    <div className="mt-4 sm:mt-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Enter product description..."
                            disabled={loading}
                            className="w-full px-3 py-3 border border-gray-200 rounded-lg outline-none resize-none focus:border-black text-sm sm:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />

                    </div>


                    

                    <div className="mt-4 sm:mt-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Product Image
                        </label>

                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-5 sm:p-7 text-center hover:border-gray-400 cursor-pointer">

                            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">

                                <Upload
                                    size={20}
                                    className="text-gray-500"
                                />

                            </div>


                            <p className="text-sm font-medium text-gray-700">
                                Upload product image
                            </p>

                            <p className="text-xs text-gray-400 mt-1">
                                PNG, JPG or WEBP up to 5MB
                            </p>

                        </div>

                    </div>


                   

                    <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3 mt-5 pt-4 border-t border-gray-200">


                        <button
                            type="button"
                            disabled={loading}
                            onClick={() => {

                                if (loading) return;

                                if (product) {
                                    onClose();
                                } else {
                                    navigate("/all-products");
                                }

                            }}
                            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Cancel
                        </button>


                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >

                            {loading ? (

                                <>
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />

                                    {product
                                        ? "Updating..."
                                        : "Adding..."
                                    }
                                </>

                            ) : (

                                product
                                    ? "Update Product"
                                    : "Add Product"

                            )}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddProductModal;