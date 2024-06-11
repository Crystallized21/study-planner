import React, { useState } from 'react';
import { useAssignments } from '@/context/AssignmentsContext';

const AssignmentForm: React.FC = () => {
    const { assignments, addAssignment, deleteAssignment } = useAssignments();
    const [assignmentText, setAssignmentText] = useState<string>('');
    const [dueDate, setDueDate] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (assignmentText.trim() === '' || dueDate.trim() === '') return;
        const newAssignment = { id: Date.now(), text: assignmentText, dueDate };
        addAssignment(newAssignment);
        setAssignmentText('');
        setDueDate('');
        console.log("Assignments after adding:", assignments); // Debugging log
    };

    const handleDelete = (id: number) => {
        deleteAssignment(id);
        console.log("Assignments after deleting:", assignments); // Debugging log
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={assignmentText}
                    onChange={(e) => setAssignmentText(e.target.value)}
                    placeholder="Enter your assignment"
                    className="p-2 border border-gray-300 rounded text-black"
                />
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="p-2 border border-gray-300 rounded text-black"
                />
                <button type="submit" className="bg-blue-600 text-white py-2 rounded">
                    Add Assignment
                </button>
            </form>
            <ul className="mt-4">
                {assignments.map((assignment) => (
                    <li key={assignment.id} className="flex justify-between items-center p-2 border border-gray-300 rounded mt-2">
                        <span>{assignment.text}</span>
                        <span className="text-gray-500">{new Date(assignment.dueDate).toLocaleDateString()}</span>
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
