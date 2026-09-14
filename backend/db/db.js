import mongoose from "mongoose";

const connectDB= async ()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        if(connection){
               console.log("MongoDb connected sueccessfully")
        }else{
            console.log("somthing went wrong" )
        }

    }catch(err){
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);

    }
}

export default connectDB;


// void sum