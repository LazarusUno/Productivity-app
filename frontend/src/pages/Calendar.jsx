import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';

const localizer = momentLocalizer(moment);
const tasks = [
    { id: 1, title: 'Task 1', start: new Date(), end: new Date(), contributionType: 'own' },
    { id: 2, title: 'Task 2', start: new Date(), end: new Date(), contributionType: 'support' }
];


const Dashboard = () => {

    const [events, setEvents] = useState([]);

    const handleSlotSelection = ({ start, end }) => {
        // Prompt user for contribution type
        const contributionType = prompt('Enter Contribution Type: None, Attend, Support, Own');

        // Based on input, create a new event
        const newEvent = {
            start,
            end,
            title: contributionType,
            color: getColorForContributionType(contributionType),
        };

        setEvents([...events, newEvent]);
    };

    const ContributionTypeTag = ({ contributionType }) => (
        <div
            className={`rounded-full px-2 py-1 text-xs font-semibold ${contributionType === "own"
                    ? "bg-yellow-200 text-yellow-700"
                    : contributionType === "support"
                        ? "bg-green-200 text-green-700"
                        : contributionType === "attend"
                            ? "bg-blue-200 text-blue-700"
                            : contributionType === "none"
                                ? "bg-gray-200 text-gray-700"
                                : "bg-gray-200 text-gray-700"
                }`}
        >
            {contributionType.charAt(0).toUpperCase() + contributionType.slice(1)}
        </div>
    );

    const getColorForContributionType = (contributionType) => {
        switch (contributionType.toLowerCase()) {
            case 'attend':
                return 'blue';
            case 'support':
                return 'green';
            case 'own':
                return 'gold';
            default:
                return 'gray';
        }
    };

    return (
        <div>
            <h1>Timebox Calendar</h1>
            <CalendarComponent events={events} handleSlotSelection={handleSlotSelection} />
        </div>
    );
};



const CalendarComponent = ({ events, handleSlotSelection }) => {
    const onSelectSlot = ({ start, end }) => {
        // Handle slot selection to set contribution type
        handleSlotSelection({ start, end });
    };

    return (
        <Calendar
            selectable
            localizer={localizer}
            events={events}
            defaultView="week"
            views={['week', 'day']}
            step={30}  // 30 minute intervals
            timeslots={1}
            style={{ height: 600 }}
            onSelectSlot={onSelectSlot}
        />
    );
};
export default Dashboard;

