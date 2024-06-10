import Header from "@/components/Header";
import React from "react";

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="p-8">
                <h2 className="text-xl mb-4">Welcome to the Study Planner!</h2>
                <p className="mb-4">Organize your study schedule and track your assignments.</p>
                {/* Add links to other pages */}
            </main>
        </div>
    );
};

export default Home;
