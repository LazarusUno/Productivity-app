import React, { useState } from 'react'
import { Button } from './ui/button'
import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { ListTodo, Trophy, Flame, Settings, Plus, Play, Menu } from 'lucide-react'

const initialTasks = [
    { id: 1, name: "Complete project proposal", description: "Write and review the Q3 project proposal", timeEstimate: "2 hours" },
    { id: 2, name: "Team meeting", description: "Weekly team sync-uppppppppppppppppppp", timeEstimate: "1 hour" },
    { id: 3, name: "Code review", description: "Review pull requests for the new feature", timeEstimate: "1.5 hours" },
]

const TasksList = () => {
    const [tasks, setTasks] = useState(initialTasks)
    return (
        <main className='flex-1 overflow-auto p-4 md:p-6'>
            <div className='grid gird-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                <div className='flex h-[230px] items-center justify-center rounded-lg bg-muted/20 transition-colors hover:bg-muted/30 border-2 border-dotted'>
                    <Button variant="ghost" size="icon">
                        <PlusIcon className="h-6 w-6" />
                        <span className='sr-only'>Add Task</span>
                    </Button>
                </div>
                {tasks.map((task) => (
                    <Card key={task.id}>
                        <CardHeader className="flex flex-row items-center space-y-0 pb-2 flex-wrap ">
                            <CardTitle className="text-lg font-semibold flex-1">{task.name}</CardTitle>
                            <Checkbox id={`task-${task.id}`} />
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
                        </CardContent>
                        <CardFooter className="pt-2 flex justify-between  ">
                            <span className="text-sm font-medium">Est. time: {task.timeEstimate}</span>
                            <Button size="sm" variant="outline">
                                <Play size={16} className="mr-2" />
                                Start
                            </Button>
                        </CardFooter>
                    </Card>
                ))}

            </div>
        </main>
    )
}

function ListIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="8" x2="21" y1="6" y2="6" />
            <line x1="8" x2="21" y1="12" y2="12" />
            <line x1="8" x2="21" y1="18" y2="18" />
            <line x1="3" x2="3.01" y1="6" y2="6" />
            <line x1="3" x2="3.01" y1="12" y2="12" />
            <line x1="3" x2="3.01" y1="18" y2="18" />
        </svg>
    )
}


function PlayIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    )
}


function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}

export default TasksList