import React, { useState, useEffect } from 'react';

interface Assignment {
    id: number;
    text: string;
}

const AssignmentForm: React.FC = () => {
    const [assignment, setAssignment] = useState<string>('');
    const [assignments, setAssignments] = useState<Assignment[]>([]);

    useEffect(() => {
        const savedAssignments = JSON.parse(localStorage.getItem('assignments') || '[]');
        setAssignments(savedAssignments);
    }, []);

    useEffect(() => {
        localStorage.setItem('assignments', JSON.stringify(assignments));
    }, [assignments]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newAssignment = { id: Date.now(), text: assignment };
        setAssignments([...assignments, newAssignment]);
        setAssignment('');
    };

    const handleDelete = (id: number) => {
        setAssignments(assignments.filter(assignment => assignment.id !== id));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={assignment}
                    onChange={(e) => setAssignment(e.target.value)}
                    placeholder="Enter your assignment"
                    className="p-2 border border-gray-300 rounded text-black"
                />
                <button type="submit" className="bg-blue-600 text-white py-2 rounded">
                    Add Assignment
                </button>
            </form>
            <ul className="mt-4">
                {assignments.map((assignment) => (
                    <li key={assignment.id} className="flex justify-between items-center p-2 border border-gray-300 rounded mt-2">
                        {assignment.text}
                        <button onClick={() => handleDelete(assignment.id)} className="bg-red-600 text-white py-1 px-2 rounded">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AssignmentForm;
