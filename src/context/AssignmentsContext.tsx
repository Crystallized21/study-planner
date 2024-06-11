import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Assignment {
    id: number;
    text: string;
    dueDate: string;
}

interface AssignmentsContextProps {
    assignments: Assignment[];
    addAssignment: (assignment: Assignment) => void;
    deleteAssignment: (id: number) => void;
}

const AssignmentsContext = createContext<AssignmentsContextProps | undefined>(undefined);

interface AssignmentsProviderProps {
    children: ReactNode;
}

export const AssignmentsProvider: React.FC<AssignmentsProviderProps> = ({ children }) => {
    const [assignments, setAssignments] = useState<Assignment[]>([]);

    useEffect(() => {
        const savedAssignments = JSON.parse(localStorage.getItem('assignments') || '[]');
        setAssignments(savedAssignments);
    }, []);

    useEffect(() => {
        localStorage.setItem('assignments', JSON.stringify(assignments));
    }, [assignments]);

    const addAssignment = (assignment: Assignment) => {
        setAssignments((prev) => [...prev, assignment]);
    };

    const deleteAssignment = (id: number) => {
        setAssignments((prev) => prev.filter(assignment => assignment.id !== id));
    };

    return (
        <AssignmentsContext.Provider value={{ assignments, addAssignment, deleteAssignment }}>
            {children}
        </AssignmentsContext.Provider>
    );
};

export const useAssignments = (): AssignmentsContextProps => {
    const context = useContext(AssignmentsContext);
    if (!context) {
        throw new Error('useAssignments must be used within an AssignmentsProvider');
    }
    return context;
};
