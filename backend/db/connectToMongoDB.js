import mongoose from "mongoose";
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Connected to mongo db");
  } catch (error) {
    console.log("Error connecting to Mongo DB", error.message);
  }
};

export default connectToMongoDB;
