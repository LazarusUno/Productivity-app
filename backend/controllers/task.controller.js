import Task from '../models/task.model.js';


export const createTask = async (req, res) => {
    try {
        const { name, description, category, duration } = req.body;

        const task = await Task.create({
            name,
            description,
            category,
            duration
        });
        res.status(201).json(task)
    } catch (error) {
        console.log("Error in createTask controller", error.message)
        res.status(500).json({ message: "Server error", error: error.message })
    }
}