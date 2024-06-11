import React from 'react';

interface GradientButtonProps {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const GradientButton: React.FC<GradientButtonProps> = ({
    type = 'button',
    className = '',
    onClick,
    children
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
        >
            {children}
        </button>
    );
};

export default GradientButton;
