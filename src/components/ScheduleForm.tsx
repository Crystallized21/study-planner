import React, { useState, useEffect } from 'react';

interface Schedule {
    id: number;
    text: string;
}

const ScheduleForm: React.FC = () => {
    const [schedule, setSchedule] = useState<string>('');
    const [schedules, setSchedules] = useState<Schedule[]>([]);

    useEffect(() => {
        const savedSchedules = JSON.parse(localStorage.getItem('schedules') || '[]');
        setSchedules(savedSchedules);
    }, []);

    useEffect(() => {
        localStorage.setItem('schedules', JSON.stringify(schedules));
    }, [schedules]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newSchedule = { id: Date.now(), text: schedule };
        setSchedules([...schedules, newSchedule]);
        setSchedule('');
    };

    const handleDelete = (id: number) => {
        setSchedules(schedules.filter(schedule => schedule.id !== id));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={schedule}
                    onChange={(e) => setSchedule(e.target.value)}
                    placeholder="Enter your schedule"
                    className="p-2 border border-gray-300 rounded text-black"
                />
                <button type="submit" className="bg-blue-600 text-white py-2 rounded">
                    Add Schedule
                </button>
            </form>
            <ul className="mt-4">
                {schedules.map((schedule) => (
                    <li key={schedule.id} className="flex justify-between items-center p-2 border border-gray-300 rounded mt-2">
                        {schedule.text}
                        <button onClick={() => handleDelete(schedule.id)} className="bg-red-600 text-white py-1 px-2 rounded">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScheduleForm;
