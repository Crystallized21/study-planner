import Header from '../components/Header';
import AssignmentForm from '../components/AssignmentForm';
import React from "react";

const Assignments: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="p-8">
                <h2 className="text-xl mb-4">Track Your Assignments</h2>
                <AssignmentForm />
                {/* Display assignments here */}
            </main>
        </div>
    );
};

export default Assignments;
