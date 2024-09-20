// "use client"
// import React, { useState } from 'react'
// import { useForm, Controller } from "react-hook-form"
// import { Check, ChevronsUpDown } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"

// import { Badge } from "./ui/badge"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
// import { Checkbox } from './ui/checkbox'
// import { ListTodo, Trophy, Flame, Settings, Plus, Play, Menu } from 'lucide-react'
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
// import { Label } from './ui/label'
// import { Input } from './ui/input'
// import { Textarea } from './ui/textarea'
// import {
//     Command,
//     CommandEmpty,
//     CommandGroup,
//     CommandInput,
//     CommandItem,
//     CommandList,
// } from "@/components/ui/command"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover"
// import axios from '../lib/axios.js'
// import { Form, FormItem, FormLabel, FormMessage } from './ui/form'
// import { frame } from 'framer-motion'
// const initialTasks = [
//     { id: 1, name: "Complete project proposal", description: "Write and review the Q3 project proposal", timeEstimate: "2 hours" },
//     { id: 2, name: "Team meeting", description: "Weekly team sync-uppppppppppppppppppp", timeEstimate: "1 hour" },
//     { id: 3, name: "Code review", description: "Review pull requests for the new feature", timeEstimate: "1.5 hours" },
// ]

// const users = [
//     {
//         value: "next.js",
//         label: "Next.js",
//     },
//     {
//         value: "sveltekit",
//         label: "SvelteKit",
//     },
//     {
//         value: "nuxt.js",
//         label: "Nuxt.js",
//     },
//     {
//         value: "remix",
//         label: "Remix",
//     },
//     {
//         value: "astro",
//         label: "Astro",
//     },
// ]



// const TasksList = () => {
//     const [tasks, setTasks] = useState(initialTasks)
//     const [isModalOpen, setIsModalOpen] = useState(false)
//     const [open, setOpen] = React.useState(false)
//     const [value, setValue] = React.useState("")
//     const [taskData, setTaskData] = useState({
//         name: "",
//         description: "",
//         deadline: "",
//         tag: "",
//         user: ""
//     });
//     const handleSetValue = (val) => {
//         if (value.includes(val)) {
//             value.splice(value.indexOf(val), 1);
//             setValue(value.filter((item) => item !== val));
//         } else {
//             setValue(prevValue => [...prevValue, val]);
//         }
//     }
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setTaskData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const updatedTaskData = {
//             ...taskData,
//             user: value
//         }
//         try {
//             console.log("clicked", taskData, updatedTaskData);
//             const res = await axios.post("http://localhost:5000/api/tasks", updatedTaskData);
//             setTaskData({ name: "", user: "", deadline: "", tag: "", description: "" }); // Reset form
//             setValue([]); // Reset form
//             setIsModalOpen(false); // Close modal after submitting
//         } catch (error) {
//             console.log("error creating task", error);
//         }
//     };
//     return (
//         <main className='flex-1 overflow-auto p-4 md:p-6'>
//             <div className='grid gird-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
//                 <div className='flex h-[230px] items-center justify-center rounded-lg bg-muted/20 transition-colors hover:bg-muted/30 border-2 border-dotted'>
//                     <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(true)}>
//                         <PlusIcon className="h-6 w-6" />
//                         <span className='sr-only'>Add Task</span>
//                     </Button>
//                 </div>
//                 {tasks.map((task) => (
//                     <Card key={task.id}>
//                         <CardHeader className="flex flex-row items-center space-y-0 pb-2 flex-wrap ">
//                             <CardTitle className="text-lg font-semibold flex-1">{task.name}</CardTitle>
//                             <Checkbox id={`task-${task.id}`} />
//                         </CardHeader>
//                         <CardContent className="flex-grow">
//                             <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
//                         </CardContent>
//                         <CardFooter className="pt-2 flex justify-between  ">
//                             <span className="text-sm font-medium">Est. time: {task.timeEstimate}</span>
//                             <Button size="sm" variant="outline">
//                                 <Play size={16} className="mr-2" />
//                                 Start
//                             </Button>
//                         </CardFooter>
//                     </Card>
//                 ))}

//             </div>

//             <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//                 <DialogContent>
//                     <DialogHeader>
//                         <DialogTitle>Create Task</DialogTitle>
//                     </DialogHeader>

//                     <form onSubmit={handleSubmit}>
//                         {/* Task Name */}
//                         <div className="mb-4">
//                             <Label htmlFor="name">Task Name</Label>
//                             <Input
//                                 id="name"
//                                 name="name"
//                                 placeholder="Enter task name"
//                                 value={taskData.name}
//                                 onChange={handleInputChange}
//                             />
//                         </div>

//                         {/* Assign to User */}
//                         <div className="mb-4">
//                             <Label className="mb-4" htmlFor="description">Task description</Label>
//                             <Textarea
//                                 id="description"
//                                 name="description"
//                                 placeholder="Enter task description"
//                                 value={taskData.description}
//                                 onChange={handleInputChange}
//                             />
//                         </div>

//                         {/* Deadline */}
//                         <div className="mb-4">
//                             <Label htmlFor="deadline">Deadline</Label>
//                             <Input
//                                 id="deadline"
//                                 name="deadline"
//                                 type="date"
//                                 value={taskData.deadline}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <Label htmlFor="tag">Tag</Label>
//                             <Input
//                                 id="tag"
//                                 name="tag"
//                                 value={taskData.tag}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <Popover open={open} onOpenChange={setOpen}>
//                                 <PopoverTrigger asChild>
//                                     <Button
//                                         variant="outline"
//                                         role="combobox"
//                                         aria-expanded={open}
//                                         className="w-[480px] justify-between"
//                                     >
//                                         <div className="flex gap-2 justify-start">
//                                             {value?.length ?
//                                                 value.map((val, i) => (
//                                                     <div key={i} className="px-2 py-1 rounded-xl border bg-slate-200 text-xs font-medium">{users.find((user) => user.value === val)?.label}</div>
//                                                 ))
//                                                 : "Select user..."}
//                                         </div>
//                                         <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                                     </Button>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-[200px] p-0">
//                                     <Command>
//                                         <CommandInput placeholder="Search user..." />
//                                         <CommandList>
//                                             <CommandEmpty>No user found.</CommandEmpty>
//                                             <CommandGroup>
//                                                 {users.map((user) => (
//                                                     <CommandItem
//                                                         key={user.value}
//                                                         value={user.value}
//                                                         onSelect={() => {
//                                                             handleSetValue(user.value)
//                                                         }}
//                                                     >
//                                                         <Check
//                                                             className={cn(
//                                                                 "mr-2 h-4 w-4",
//                                                                 value.includes(user.value) ? "opacity-100" : "opacity-0"
//                                                             )}
//                                                         />
//                                                         {user.label}
//                                                     </CommandItem>
//                                                 ))}
//                                             </CommandGroup>
//                                         </CommandList>
//                                     </Command>
//                                 </PopoverContent>
//                             </Popover>
//                         </div>

//                         <DialogFooter>
//                             <Button type="submit" className="bg-green-500 text-white">Assign Task</Button>
//                         </DialogFooter>
//                     </form>
//                 </DialogContent>
//             </Dialog>


//         </main>
//     )
// }

// function ListIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <line x1="8" x2="21" y1="6" y2="6" />
//             <line x1="8" x2="21" y1="12" y2="12" />
//             <line x1="8" x2="21" y1="18" y2="18" />
//             <line x1="3" x2="3.01" y1="6" y2="6" />
//             <line x1="3" x2="3.01" y1="12" y2="12" />
//             <line x1="3" x2="3.01" y1="18" y2="18" />
//         </svg>
//     )
// }


// function PlayIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <polygon points="6 3 20 12 6 21 6 3" />
//         </svg>
//     )
// }


// function PlusIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M5 12h14" />
//             <path d="M12 5v14" />
//         </svg>
//     )
// }

// export default TasksList

import React from 'react'
import TasksHeader from './TasksHeader'
import Board from './Board'
import { useParams } from 'react-router-dom'

const TasksList = () => {
    const { projectId } = useParams()
    console.log(projectId)
    return (
        <div>
            <TasksHeader projectId={projectId} />
            <Board projectId={projectId} />
        </div>
    )
}

export default TasksList