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
import cors from "cors"
import Project from "./models/task.model.js";

// Allow requests from the frontend origin
app.use(
    cors({
        origin: "http://localhost:5173", // Your frontend origin
        credentials: true,               // To allow cookies with credentials
    })
);

// app.use("/api/tasks", taskRoute)

app.get("/api/projects", async (req, res) => {
    console.log("response", res)
    try {
        const projects = await Project.find();
        res.status(200).json(projects);

    } catch (error) {
        console.log("Error in getTasks controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
})
app.post("/api/projects", async (req, res) => {
    console.log("Request body", req.body)
    try {
        const { name, deadline, user, tag, description } = req.body;

        const project = await Project.create({
            name,
            deadline,
            tag,
            description,
            user,
        });
        res.status(201).json(project)
    } catch (error) {
        console.log("Error in createTask controller", error.message)
        res.status(500).json({ message: "Server error", error: error.message })
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
})
