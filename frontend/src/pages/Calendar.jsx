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


const localizer = momentLocalizer(moment);

const contributionType = ['None', 'Attend', 'Support', 'Own'];

const CalendarComponent = () => {
    const [taskName, setTaskName] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [events, setEvents] = useState('');

    const [selectedContributionType, setSelectedContributionType] = useState('');

    const handleSelectSlot = useCallback((slotInfo) => {
        setSelectedSlot(slotInfo)
        setTaskName('')
        setSelectedContributionType('')
    }, [])
    const handleCreateTask = () => {
        if (taskName && selectedContributionType) {
            const newTask = {
                id: new DAte().getTime().toString(),
                title: `${taskName} (${selectedContributionType})`,
                start: selectedSlot.start,
                end: selectedSlot.start,
                contributionType: selectedContributionType
            }
            setEvents(prev => [...prev, newTask]);
            setSelectedSlot(null)
            setTaskName('')
            setSelectedContributionType('')
        }
    }


    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    };

    return (
        <div className="h-screen p-4 ">
            {/* <ModalNewTask isOpen={isModal} onClose={() => setIsModal(false)} /> */}
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
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
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


