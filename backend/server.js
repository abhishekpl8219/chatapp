import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/users.routes.js";
import connectToMongoDB from "./db/connectToMOngoDB.js";
import Message from "./models/message.model.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users/", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log("Server is running on port ", PORT);
});
