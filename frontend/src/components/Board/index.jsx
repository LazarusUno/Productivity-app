import { useTaskStore } from '@/stores/useTaskStore'
import { EllipsisVertical, Plus } from 'lucide-react'
import React from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { format } from "date-fns"
const taskStatus = ["To Do", "Work In Progress", "Under Review", "Completed"]

const Board = ({ projectId }) => {
    const { tasks, isLoading, error, getTasks } = useTaskStore();
    const { updateTaskStatus } = useTaskStore();

    //const [updateTaskStatusMutation] = useUpdateTaskStatusMutation();
    const moveTask = (taskId, toStatus) => {
        //update state
        updateTaskStatus({ taskId, status: toStatus })
        //update backend
    }
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>An error occurred while fetching tasks</div>
    return (
        <DndProvider backend={HTML5Backend}>
            <div className='grid grid-cols gap-4 p-4 md:grid:cols-2 xl:grid-cols-4'>
                {taskStatus.map((status) => (
                    <TaskColumn
                        key={status}
                        status={status}
                        tasks={tasks || []}
                        moveTask={moveTask}
                    // setIsModalNewTaskOpen={setIsModalNewTaskOpen}
                    />
                ))}
            </div>
        </DndProvider>
    )
}
const TaskColumn = ({
    status,
    tasks,
    moveTask,
    setIsModalNewTaskOpen,

}) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => moveTask(item.id, status),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    const tasksCount = tasks.filter((task) => task.status === status).length;

    const statusColor = {
        "To Do": "#2563EB",
        "Work In Progress": "#059669",
        "Under Review": "#D97706",
        "Completed": "#000000"
    };

    return (
        <div ref={(instance) => {
            drop(instance);
        }}
            className={`sl:py-4 rounded-lg py-2 xl:px-2 ${isOver ? "bg-blue-100 dark:bg-neutral-950" : ""}`}>
            <div className='mb-3 flex w-full'>
                <div
                    className={`w-2 !bg-[${statusColor[status]}] rounded-s-lg`}
                    style={{ backgroundColor: statusColor[status] }}
                />
                <div className='flex w-full items-center justify-between rounded-e-lg bg-gray-50 px-5 py-4 dark:bg-dark-secondary '>
                    <h3 className='flex items-center text-lg font-semibold dark:text-white'>
                        {status}{" "}

                        <span className='ml-2 inline-block rounded-full bg-gray-200 p-1 text-center text-sm leading-none dark:bg-dark-teritiary' style={{ width: "1.5rem", height: "1.5rem" }}>
                            {tasksCount}
                        </span>
                    </h3>
                    <div className='flex items-center gap-1'>
                        <button className='flex h-6 w-5 items-center justify-center dark:text-neutral-500'>
                            <EllipsisVertical size={16} />
                        </button>
                        <button onClick={() => setIsModalNewTaskOpen(true)} className='flex h-6 w-6 items-center justify-center rounded bg-gray-200 dark:bg-dark-teritiary dark:text-white'>
                            <Plus size={16} />
                        </button>

                    </div>
                </div>
            </div>
            {tasks.filter((task) => task.status === status).map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}

const Task = ({ task }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: (item) => moveTask(item.id, status),
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    const taskTagsSplit = task.tags ? task.tags(",") : [];

    const formattedStartDate = task.startDate ? format(new Date(task.startDate), "P") : "";
    const formattedDueDate = task.dueDate ? format(new Date(task.dueDate), "P") : "";

    const numberOfComments = (task.comments && task.comments.length) || 0;

    const PriorityTag = ({ priority }) => (
        <div className={`rounded-full px-2 py-1 text-xs font-semibold ${priority === "Urgent"
            ? "bg-red-200 text-red-700"
            : priority === "High"
                ? "bg-yellow-200 text-yellow-700"
                : priority === "Medium"
                    ? "bg-green-200 text-green-700"
                    : priority === "low"
                        ? "bg-blue-200 text-blue-700"
                        : "bg-gray-200 text-gray-700"
            }`}
        >
            {priority}
        </div>
    );
    return (
        <div ref={(instance) => {
            drag(instance)
        }} className={`mb-4 rounded-md bg-gray-50 shadow dark:bg-dark-secondary ${isDragging ? "opacity-50" : "opacity-100"
            }`}>
            {task.attachments && task.attachments.length > 0 && (
                <img
                    src={`/${task.attachments[0].fileUrl}`}
                    alt={task.attachments[0].fileName}
                    width={400}
                    height={200}
                    className="h-auto w-full rounded-t-md"
                />
            )}
        </div>
    )
}

export default Board