import React, { useState } from 'react';

const ScheduleForm: React.FC = () => {
    const [schedule, setSchedule] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add logic to save schedule to database
        setSchedule('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                placeholder="Enter your schedule"
                className="p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="bg-blue-600 text-white py-2 rounded">
                Add Schedule
            </button>
        </form>
    );
};

export default ScheduleForm;
