import mongoose, { trusted } from "mongoose";
import Project from "./project.model";

const { Schema } = mongoose;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["To Do", "Work in progress", "Under review", "Completed"],
        default: 'pending',
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        reg: "Project",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    dueDate: {
        type: Date,
    },

});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;