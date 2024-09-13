import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import taskRoute from "./routes/task.route.js"
import Task from "./models/task.model.js";

const app = express();
const PORT = process.env.PORT || PORT;

app.use(express.json());
app.use(cookieParser());
import cors from "cors"

// Allow requests from the frontend origin
app.use(
    cors({
        origin: "http://localhost:5173", // Your frontend origin
        credentials: true,               // To allow cookies with credentials
    })
);

// app.use("/api/tasks", taskRoute)
app.post("/api/tasks", async (req, res) => {
    console.log("Request body", req.body)
    try {
        const { name, deadline, user } = req.body;

        const task = await Task.create({
            name,
            deadline,
            user,
        });
        res.status(201).json(task)
    } catch (error) {
        console.log("Error in createTask controller", error.message)
        res.status(500).json({ message: "Server error", error: error.message })
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
})
