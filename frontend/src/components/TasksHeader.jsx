import React from 'react'
import Header from './Header'

const TasksHeader = () => {
    return (
        <div className='px-4 xl:px-6'>
            <div className='pb-2 pt-2 lg:pb-1 lg:pt-3'>
                <Header name="Event Designing" />
            </div>
            <div className='flex flex-wrap-reverse gap-2 border-y border-gray-200 dark:border-stroke-dark md:items-center'></div>
        </div>
    )
}

export default TasksHeader