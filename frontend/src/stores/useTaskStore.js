import { create } from "zustand";
import axios from "../lib/axios";
import toast from "react-hot-toast"


export const useTaskStore = create((set) => ({
    tasks: [],
    loading: false,

    setTasks: (tasks) => set({ tasks }),
    createTask: async (taskData) => {
        set({ loading: true });
        try {
            const res = await axios.post("/tasks", taskData)
            set((prevState) => ({
                tasks: [...prevState.tasks, res.data],
                loading: false,
            }));
        } catch (error) {
            toast.error(error.response.data.error);
            set({ loading: false })
        }
    }
})
)
