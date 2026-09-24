import mongoose from "mongoose"

const productCalclutionSchema = new mongoose.Schema({

    oldTotalProduct:{
        type:Number,
        required:true,
        default:0
    },

    newTotalProduct:{
        type:Number,
        required:true,
        default:0
    },

    oldTotalStock:{
        type:Number,
        required:true,
        default:0
    },

    newTotalStock:{
        type:Number,
        required:true,
        default:0
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    }

}, {timestamps:true})

export const Calculation = mongoose.model("Calculation", productCalclutionSchema)