import mongoose from "mongoose"


const productSchema = new mongoose.Schema({
   productname:{
    type:String,
    required:true,
   
   },

   description:{
    type:String,
    trim:true
   },

   price:{
    type:Number,
    required:true,
    min:0
   },

   quantity:{ //Available stock
    type:Number,
    required:true,
    min:0,
    default:0
   },

   category: {
        type: String,
        required: true,
    },

   sku:{ //Unique product code
    type:String,
    required:true,
   
    trim:true,
    uppercase:true,
   },

    lowStockThreshold:{
    type:Number,
    default:10,
    min:0,
   },


   

   user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }


}, {timestamps: true})


export const Product = mongoose.model("Product", productSchema)