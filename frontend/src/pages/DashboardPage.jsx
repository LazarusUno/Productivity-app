import Sidebar from '@/components/Sidebar'
import TasksList from '@/components/TasksList'
import { Badge } from '@/components/ui/badge'
import React from 'react'

const DashboardPage = () => {
    return (
        <div className='grid min-h-screen w-full lg:grid-cols-[280px_1fr]'>
            <Sidebar />
            <div className='flex flex-col'>
                <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6'>
                    <div className='flex-1'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-lg font-semibold'>Tasks</h1>
                            <Badge className="bg-muted text-muted-foreground">12 tasks</Badge>
                        </div>
                    </div>
                </header>
                <TasksList />
            </div>
        </div>
    )
}

export default DashboardPage