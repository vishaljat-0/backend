import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT|| 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}|| 8000`);
    });
  })
  .catch((error) => {
    console.error("❌ Error starting the server:", error);
  });

//  ;( async()=>{
//     try {
//         const db =  await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, )
//             console.log(`✅ MongoDB connected: ${db.connection.host}`);

//     } catch (error) {
//         cconsole.error("❌ Error connecting to MongoDB:", error);
//     process.exit(1); // Stop the process if DB fails
//     }
//  })()
