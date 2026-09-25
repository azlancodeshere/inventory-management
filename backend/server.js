import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./src/routes/user.route.js";
import productRoutes from "./src/routes/product.route.js"
import calculationRoutes from "./src/routes/calculation.route.js"
import { ApiError } from "./utils/ApiError.js";
import connectDB from "./db/db.js"

dotenv.config();

const app = express();



app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://inventory-management-omega-lemon.vercel.app"
        ],
        credentials: true,
    })
);


app.use(express.json());
app.use(cookieParser());


app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes)
app.use("/api/calculation", calculationRoutes)

app.use((req, res, next) => {
    res.status(404).json(
        new ApiError(404, "Route not found")
    );
});


connectDB();


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});