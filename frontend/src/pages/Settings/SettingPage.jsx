import React, { useContext, useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Settings = () => {
    const navigate = useNavigate();

    const { logout, setUser } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        email: "",
        phoneNumber: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    // =========================
    // Handle Input Change
    // =========================
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // =========================
    // Update Account
    // =========================
    const handleUpdateAccount = async () => {
        try {
            const response = await api.patch("/users/update-account", {
                username: formData.username,
                fullname: formData.fullname,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
            });

            console.log("updated user:",response.data);

            // Backend se updated user AuthContext mein save karo
            setUser(response.data.data);

            alert("Account updated successfully");

            navigate("/home");
        } catch (error) {
            console.log(
                "Error in updating account:",
                error.response?.data || error
            );
        }
    };

    // =========================
    // Change Password
    // =========================
    const handleChangePassword = async () => {
        if (
            !formData.currentPassword ||
            !formData.newPassword ||
            !formData.confirmPassword
        ) {
            alert("All password fields are required");
            return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            alert("New password does not match with confirm password");
            return;
        }

        try {
            const response = await api.patch("/users/change-password", {
                currentPassword: formData.currentPassword,
                newPassword: formData.newPassword,
            });

            console.log(response.data);

            alert("Password changed successfully");

            // Password fields clear karo
            setFormData({
                ...formData,
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.log(
                "Error in changing password:",
                error.response?.data || error
            );
        }
    };

    // =========================
    // Logout
    // =========================
    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login");
        } catch (error) {
            console.log("Logout error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">

            <div className="max-w-5xl mx-auto p-6">

                {/* ================= HEADER ================= */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Settings
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Manage your account and application preferences
                    </p>
                </div>


                {/* ================= PROFILE ================= */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-5">

                    <h2 className="text-lg font-semibold text-gray-900">
                        Profile
                    </h2>

                    <p className="text-sm text-gray-500 mt-1 mb-5">
                        Manage your personal information
                    </p>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Username */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Username
                            </label>

                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter username"
                                className="w-full mt-2 border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-black"
                            />
                        </div>


                        {/* Full Name */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                placeholder="Enter full name"
                                className="w-full mt-2 border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-black"
                            />
                        </div>


                        {/* Email */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                className="w-full mt-2 border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-black"
                            />
                        </div>


                        {/* Phone */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Phone
                            </label>

                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Enter phone number"
                                className="w-full mt-2 border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-black"
                            />
                        </div>

                    </div>


                    {/* Save Changes */}
                    <button
                        type="button"
                        onClick={handleUpdateAccount}
                        className="mt-5 bg-black text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800"
                    >
                        Save Changes
                    </button>

                </div>


                {/* ================= SECURITY ================= */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-5">

                    <h2 className="text-lg font-semibold text-gray-900">
                        Security
                    </h2>

                    <p className="text-sm text-gray-500 mt-1 mb-5">
                        Change your account password
                    </p>


                    <div className="space-y-4 max-w-xl">

                        {/* Current Password */}
                        <input
                            type="password"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            placeholder="Current password"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-black"
                        />


                        {/* New Password */}
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            placeholder="New password"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-black"
                        />


                        {/* Confirm Password */}
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm new password"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 outline-none focus:border-black"
                        />

                    </div>


                    <button
                        type="button"
                        onClick={handleChangePassword}
                        className="mt-5 bg-black text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800"
                    >
                        Change Password
                    </button>

                </div>


                {/* ================= ACCOUNT ================= */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">

                    <h2 className="text-lg font-semibold text-gray-900">
                        Account
                    </h2>

                    <p className="text-sm text-gray-500 mt-1 mb-5">
                        Manage your account
                    </p>


                    <button
                        type="button"
                        onClick={handleLogout}
                        className="border border-red-200 text-red-600 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-red-50"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Settings;