import React, { useState } from 'react';

const AssignmentForm: React.FC = () => {
    const [assignment, setAssignment] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add logic to save assignment to database
        setAssignment('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                value={assignment}
                onChange={(e) => setAssignment(e.target.value)}
                placeholder="Enter your assignment"
                className="p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="bg-blue-600 text-white py-2 rounded">
                Add Assignment
            </button>
        </form>
    );
};

export default AssignmentForm;
