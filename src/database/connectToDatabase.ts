import mongoose from "mongoose";
import CustomError from "../CustomError/CustomError.js";

const connectToDatabase = async (url: string) => {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(url);
  } catch (error) {
    const customError = new CustomError(
      error.message as string,
      500,
      "Error connecting to database"
    );
    throw customError;
  }
};

export default connectToDatabase;
