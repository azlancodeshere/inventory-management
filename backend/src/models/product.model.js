import mongoose from "mongoose"


const productSchema = new mongoose.Schema({
   productname:{
    type:String,
    required:true,
    unique:true,
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
    unique:true,
    trim:true,
    uppercase:true,
   },

    lowStockThreshold:{
    type:Number,
    default:10,
    min:0,
   }


}, {timestamps: true})


export const Product = mongoose.model("Product", productSchema)