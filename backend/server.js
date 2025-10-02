import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/users.routes.js";
import connectToMongoDB from "./db/connectToMOngoDB.js";
import Message from "./models/message.model.js";
import cors from "cors";
import { app, server } from "./socket/socket.js";
import path from "path";
dotenv.config();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend URL
    credentials: true, // For cookies (since you're using generateTokenAndSetCookie)
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users/", userRoutes);
app.use(express.static(path.join(__dirname, "/frontend/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html")); //
// });
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log("Server is running on port ", PORT);
});
