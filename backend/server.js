import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import cors from "cors"
import Project from "./models/project.model.js";
import Task from "./models/task.model.js"
import mongoose from "mongoose";
import Event from "./models/event.model.js";

const app = express();
const PORT = process.env.PORT || PORT;

app.use(express.json());
app.use(cookieParser());


// Allow requests from the frontend origin
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// app.use("/api/tasks", taskRoute)

app.get("/api/projects", async (req, res) => {

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

const ObjectId = mongoose.Types.ObjectId

app.get("/api/projects/:projectId/tasks", async (req, res) => {
    const { projectId } = req.params;
    console.log("Requested projectId:", projectId);

    try {
        const projectExists = await Project.findById(projectId);
        if (!projectExists) {
            return res.status(404).json({ message: "Project not found" });
        }
        const objectId = new ObjectId(projectId);
        const tasks = await Task.find({ projectId: objectId });

        if (!tasks) {
            return res.status(404).json({ message: "Tasks not found" })
        }
        res.status(200).json(tasks);
    } catch (error) {
        console.log("Error fetching tasks: ", error);
        res.status(500).json({ message: "Server error" });
    }
});

app.get('/api/projects/:projectId', async (req, res) => {
    try {
        const { projectId } = req.params;
        const project = await Project.findById(projectId); // Fetch project by ID

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.json(project); // Send project data to the frontend
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post("/api/projects/:projectId/tasks", async (req, res) => {
    const { projectId } = req.params;
    console.log("projectId", projectId)
    const { title, description, status, points, priority, attachments, tags, assignee, author, dueDate } = req.body;

    const newTask = new Task({
        title,
        description,
        status,
        priority,
        attachments,
        tags,
        assignee,
        author,
        dueDate,
        projectId: projectId,
    });
    console.log("New task", newTask)

    try {
        await newTask.save();
        res.status(201)
    } catch (error) {
        console.error("Error creating task", error);
        console.log("Error creating task", error.message)
        res.status(500).json({ message: "Error creating task", error })
    }
});

app.patch("/api/projects/:projectId/tasks/:taskId", async (req, res) => {
    const { projectId, taskId } = req.params;
    const { status } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            { status },
            { new: true }
        )
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

    } catch (error) {
        console.error("Error updating task status", error);
        res.status(500).json({ message: "Error updating task status", error });
    }
});
app.post('/api/events', async (req, res) => {
    const { title, start, end, contributionType, userId, id } = req.body;
    if (!title || !start || !end || !contributionType || !userId) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newEvent = new Event({
        title,
        start,
        end,
        contributionType,
        userId, // If using multi-user, else omit i
        id
    });

    try {
        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create event' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})
