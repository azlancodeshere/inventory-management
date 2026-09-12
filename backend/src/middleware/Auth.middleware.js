import jwt from "jsonwebtoken"
import {User} from "../models/user.models.js"
import {ApiError} from "../../utils/ApiError.js"


export const verifyJWT = async (req, res, next) => {
    try {

        // Token cookies ya Authorization header se lo
        const token =
            req.cookies?.accessToken ||
            req.header("Authorization")?.replace("Bearer ", "")
         
          
        
        if (!token) {
            throw new ApiError(
                401,
                "Unauthorized request"
            )
        }

       
        const decodedToken = jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET
        )

         // Token ke _id se user find karo
        const user = await User
            .findById(decodedToken?._id)
            .select("-password -refreshToken")

       
        if (!user) {
            throw new ApiError(
                401,
                "Invalid access token"
            )
        }

        
        req.user = user

        
        next()

    } catch (error) {

        return res
            .status(error.statusCode || 401)
            .json(
                new ApiError(
                    error.statusCode || 401,
                    error.message || "Invalid access token"
                )
            )
    }
}


