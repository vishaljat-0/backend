import mongoose from "mongoose";
import { DB_NAME } from "../constant.js" // ✅ include `.js` and correct path
const connectDB = async () => {
  try {
    const db = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
console.log(`⚒️ Database connected successfully at ${db.connection.host}`);
  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
    process.exit(1); // Exit the process with failure
  }
};


export default connectDB;