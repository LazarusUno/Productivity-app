import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useCallback, useState } from 'react';
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogDescription, DialogFooter } from '@/components/ui/dialog';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectItem, SelectTrigger } from '@/components/ui/select';
import { SelectValue } from '@radix-ui/react-select';
import { SelectContent } from '@radix-ui/react-select';

import ModalNewTask from '@/components/ModalNewEvent';
import { Button } from '@/components/ui/button';
import { Portal } from '@radix-ui/react-dialog';
import axios from 'axios';
// const localizer = momentLocalizer(moment);
// const tasks = [
//     { id: 1, title: 'Task 1', start: new Date(), end: new Date(), contributionType: 'own' },
//     { id: 2, title: 'Task 2', start: new Date(), end: new Date(), contributionType: 'support' }
// ];

// const contributionType = ['None', 'Attend', 'Support', 'Own']

// const CalendarComponent = () => {
//     const [events, setEvents] = useState([])
//     const [selectedSlot, setSelectedSlot] = useState(null)
//     const [taskName, setTaskName] = useState('')
//     const [selectedContributionType, setSelectedContributionType] = useState('')
//     const handleSelectSlot = useCallback((slotInfo) => {
//         setSelectedSlot(slotInfo)
//         setTaskName('')
//         setSelectedContributionType('')
//     }, [])
//     const [isModalOpen, setIsModalOpen] = useState(false)

//     return (
//         <div className='h-screen p-4'>
//             <div>
//                 <Calendar
//                     selectable
//                     localizer={localizer}
//                     events={events}
//                     defaultView="week"
//                     views={['week', 'day']}
//                     step={30}  // 30 minute intervals
//                     timeslots={1}
//                     style={{ height: 'calc(100vh - 100px)' }}
//                     onSelectSlot={() => setIsModalOpen(true)}
//                 />
//             </div>


//         </div>

//     );
// };

// export default CalendarComponent;
const getEventColor = (contributionType) => {
    switch (contributionType) {
        case 'Attend': return 'bg-blue-200 text-blue-800'
        case 'Support': return 'bg-green-100 text-green-800'
        case 'Own': return 'bg-green-500 text-white'
        default: return 'bg-gray-200 text-gray-800'
    }
}

const localizer = momentLocalizer(moment);

const contributionType = ['None', 'Attend', 'Support', 'Own'];

const CalendarComponent = () => {
    const [eventName, setEventName] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [events, setEvents] = useState([]);

    const [selectedContributionType, setSelectedContributionType] = useState('');
    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:5000/api/events?userId=123'); // Replace with actual userId
    //             setEvents(response.data);
    //         } catch (error) {
    //             console.error('Error fetching events:', error);
    //         }
    //     };

    //     fetchEvents();
    // }, []);

    const handleSelectSlot = useCallback((slotInfo) => {
        setSelectedSlot(slotInfo)
        setEventName('')
        setSelectedContributionType('')
    }, [])

    const handleCreateEvent = async () => {
        if (eventName && selectedContributionType) {
            const newEvent = {
                id: new Date().getTime().toString(),
                title: `${eventName} (${selectedContributionType})`,
                start: selectedSlot.start,
                end: selectedSlot.end,
                contributionType: selectedContributionType,
                userId: '123'
            }
            console.log('Sending event:', newEvent); // Check payload
            try {
                const response = await axios.post('http://localhost:5000/api/events', newEvent);
                console.log(response.data)
                if (response.status === 201) {
                    console.log('Event saved:', response.data);
                    // Update state with the new event
                    setEvents(prev => [...prev, newEvent]);
                    // Clear inputs
                    setSelectedSlot(null);
                    setEventName('');
                    setSelectedContributionType('');
                }
            } catch (error) {
                if (error.response) {
                    // Server responded with a status other than 2xx
                    console.log('Error response data:', error.response.data);
                    console.log('Error response status:', error.response.status);
                } else if (error.request) {
                    // Request was made but no response received
                    console.log('Error request:', error.request);
                } else {
                    // Something else happened
                    console.log('Error message:', error.message);
                }
            }

        }
    }

    const eventStyleGetter = (event) => {
        return {
            className: `${getEventColor(event.contributionType)} rounded-md px-2 py-1 text-xs font-semibold`,
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    };

    return (
        <div className="h-screen p-4 ">
            <Dialog open={!!selectedSlot} onOpenChange={() => setSelectedSlot(null)}>
                <DialogContent className="min-h-[370px]"> {/* or h-[600px] or h-full */}
                    <DialogHeader>
                        <DialogTitle>Create Task</DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSubmit}>
                        {/* Project Name */}
                        <div className="mb-4">
                            <Label htmlFor="name">Task name</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Enter task name"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                            />
                        </div>

                        <div className='mb-4'>
                            <Label htmlFor="contributionType">Contribution Type</Label>
                            <Select onValueChange={setSelectedContributionType} value={selectedContributionType}>
                                <SelectTrigger id="contributionType">
                                    <SelectValue placeholder="Select contribution type" />
                                </SelectTrigger>
                                <SelectContent style={{ zIndex: 9999 }}>

                                    {contributionType.map((type) => (
                                        <SelectItem key={type} value={type}>
                                            {type}
                                        </SelectItem>
                                    ))}

                                </SelectContent>
                            </Select>
                        </div>

                        <DialogFooter>
                            <Button type="submit" onClick={handleCreateEvent} className="bg-blue-500 text-white" >
                                Add Task
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
            <Calendar
                selectable
                localizer={localizer}
                events={events}
                defaultView="week"
                views={['week', 'day']}
                step={30}
                timeslots={1}
                style={{ height: 'calc(100vh - 100px)' }}
                onSelectSlot={handleSelectSlot}
                eventPropGetter={eventStyleGetter}
            />
        </div>

    );
};
export default CalendarComponent;

// const Modal = ({ isOpen, onClose, title, children, onSubmit }) => {
//     return (
//         <Dialog open={isOpen} onOpenChange={onClose}>
//             <DialogContent>
//                 <DialogHeader>
//                     <DialogTitle>{title}</DialogTitle>
//                 </DialogHeader>

//                 {/* Body Content */}
//                 <div className='space-y-4'>
//                     {children}
//                 </div>

//                 {/* Footer Actions */}
//                 <DialogFooter>
//                     <Button variant="secondary" onClick={onClose}>Cancel</Button>
//                     <Button className="bg-blue-500 text-white" onClick={onSubmit}>Submit</Button>
//                 </DialogFooter>
//             </DialogContent>
//         </Dialog>
//     );
// };


