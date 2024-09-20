import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls
import Header from './Header';

const TasksHeader = ({ projectId }) => {
    const [projectTitle, setProjectTitle] = useState('');

    // Fetch project data when component mounts or projectId changes
    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/projects/${projectId}`);
                const projectData = response.data;
                console.log(projectData)
                setProjectTitle(projectData.name);

            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        if (projectId) {
            fetchProjectData(); // Fetch only if projectId is available
        }
    }, [projectId]);

    return (
        <div className='px-4 xl:px-6'>
            <div className='pb-2 pt-2 lg:pb-1 lg:pt-3'>
                <Header name={projectTitle || "Loading..."} /> {/* Dynamic title or a fallback */}
            </div>
            s
            <div className='flex flex-wrap-reverse gap-2 border-y border-gray-200 dark:border-stroke-dark md:items-center'></div>
        </div>
    );
};

export default TasksHeader;
