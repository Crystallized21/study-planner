import Link from 'next/link';
import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">Study Planner</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/schedule"><a>Schedule</a></Link></li>
                    <li><Link href="/assignments"><a>Assignments</a></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
