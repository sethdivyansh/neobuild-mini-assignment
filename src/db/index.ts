import mongoose from "mongoose";
import { DB_NAME, MONGODB_URI } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(MONGODB_URI);
    console.log(
      `MongoDB connected!! BD HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error connecting to MongoDB ", error);
    process.exit(1);
  }
};

export default connectDB;
