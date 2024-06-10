import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

interface Assignment {
    id: number;
    text: string;
    dueDate: string;
}

interface Schedule {
    id: number;
    text: string;
    date: string;
}

const Home: React.FC = () => {
    const [assignments, setAssignments] = useState<Assignment[]>([]);
    const [schedules, setSchedules] = useState<Schedule[]>([]);

    useEffect(() => {
        const savedAssignments = JSON.parse(localStorage.getItem('assignments') || '[]');
        const savedSchedules = JSON.parse(localStorage.getItem('schedules') || '[]');
        setAssignments(savedAssignments);
        setSchedules(savedSchedules);
    }, []);

    const getUpcomingAssignments = () => {
        // Filter assignments to show only those due within the next week
        const now = new Date();
        const oneWeekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        return assignments.filter(assignment => new Date(assignment.dueDate) <= oneWeekFromNow);
    };

    const getUpcomingSchedules = () => {
        // Filter schedules to show only those within the next week
        const now = new Date();
        const oneWeekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        return schedules.filter(schedule => new Date(schedule.date) <= oneWeekFromNow);
    };

    return (
        <div>
            <Header />
            <main className="p-8">
                <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2 text-black">Upcoming Assignments</h3>
                        <ul>
                            {getUpcomingAssignments().map((assignment) => (
                                <li key={assignment.id} className="mb-2">
                                    <div className="flex justify-between items-center">
                                        <span>{assignment.text}</span>
                                        <span className="text-gray-500">{new Date(assignment.dueDate).toLocaleDateString()}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2 text-black">Upcoming Schedules</h3>
                        <ul>
                            {getUpcomingSchedules().map((schedule) => (
                                <li key={schedule.id} className="mb-2">
                                    <div className="flex justify-between items-center">
                                        <span>{schedule.text}</span>
                                        <span className="text-gray-500">{new Date(schedule.date).toLocaleDateString()}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
