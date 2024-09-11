import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import taskRoute from "./routes/task.route.js"

const app = express();
const PORT = process.env.PORT || PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/tasks", taskRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
})
