import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

connectDB();

//  ;( async()=>{
//     try {
//         const db =  await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, )
//             console.log(`✅ MongoDB connected: ${db.connection.host}`);

//     } catch (error) {
//         cconsole.error("❌ Error connecting to MongoDB:", error);
//     process.exit(1); // Stop the process if DB fails
//     }
//  })()
