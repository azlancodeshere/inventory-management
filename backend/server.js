import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./src/routes/user.route.js";
import productRoutes from "./src/routes/product.route.js";
import calculationRoutes from "./src/routes/calculation.route.js";

import { ApiError } from "./utils/ApiError.js";
import connectDB from "./db/db.js";

dotenv.config();

const app = express();

// CORS
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://inventory-management-omega-lemon.vercel.app"
        ],
        credentials: true,
    })
);

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Health check
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy"
    });
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/calculation", calculationRoutes);

// 404 middleware — ALWAYS keep this at the end
app.use((req, res, next) => {
    res.status(404).json(
        new ApiError(404, "Route not found")
    );
});

// Database
connectDB();

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});