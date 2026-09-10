import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./src/routes/user.route.js";
import { ApiError } from "./utils/ApiError.js";
import connectDB from "./db/db.js"

dotenv.config();

const app = express();


app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());


app.use("/api/users", userRoutes);


app.use((req, res, next) => {
    res.status(404).json(
        new ApiError(404, "Route not found")
    );
});


connectDB();


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});