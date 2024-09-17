import { create } from "zustand";
import axios from "../lib/axios";
import toast from "react-hot-toast"



export const useTaskStore = create((set) => ({
    tasks: [],
    loading: false,
    error: null,
    setTasks: (newTasks) => set({ tasks: newTasks }),

    // setTasks: (tasks) => set({ tasks }),
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
    },
    getTasks: async (projectId) => {
        set({ isLoading: true });
        try {
            const response = await axios.get(`/api/projects/${projectId}/tasks`);
            set({ tasks: response.data, isLoading: false });
        } catch (error) {
            set({ error: error.message, isLoading: false })
        }
    },
    updateTaskStatus: (taskId, newStatus) => set((state) => ({
        tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, status: newStatus } : task
        )
    }))
})
)
