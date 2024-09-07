import Sidebar from '@/components/Sidebar'
import TasksList from '@/components/TasksList'
import { Badge } from '@/components/ui/badge'
import { MenuIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const DashboardPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div className=' relative min-h-screen w-full lg:grid lg:grid-cols-[280px_1fr]'>
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 lg:h-screen bg-muted p-4 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <Sidebar />
            </div>
            {/* Overlay for small screens */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
            <div className='flex flex-col'>
                <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6'>
                    <div className="lg:hidden">
                        {/* Hamburger Menu for small screens */}
                        <button onClick={toggleSidebar} className="text-primary">
                            <MenuIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <div className='flex-1'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-lg font-semibold'>Tasks</h1>
                            <Badge className="bg-muted text-muted-foreground">12 tasks</Badge>
                        </div>
                    </div>
                </header>
                <Outlet />
            </div>

        </div>
    )
}

export default DashboardPage