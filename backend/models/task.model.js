import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true,
        },
        // category: {
        //     type: String,
        //     required: true,
        // },
        deadline: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;