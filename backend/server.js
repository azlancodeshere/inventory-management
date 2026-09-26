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


app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://stockflow-inv-2026.vercel.app",
            "https://inventory-management-nsjobtezq-azlancodesheres-projects.vercel.app"
        ],
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);


app.use(express.json());
app.use(cookieParser());


app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy"
    });
});


app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/calculation", calculationRoutes);


app.use((req, res, next) => {
    res.status(404).json(
        new ApiError(404, "Route not found")
    );
});


connectDB();


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});