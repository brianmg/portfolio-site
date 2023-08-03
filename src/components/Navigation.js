import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navigation() {
    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();

    return (
        <nav
            className={`fixed left-0 top-0 h-screen bg-gray-800 text-white transition-width duration-200 ease-in-out ${isExpanded ? 'w-64' : 'w-20'}`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <ul className="space-y-4 p-4">
                <li>
                    <NavLink to="/" className={location.pathname === "/" ? "text-blue-500" : ""} end>
                        {isExpanded ? 'Home' : 'H'}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={location.pathname === "/projects" ? "text-blue-500" : ""}>
                        {isExpanded ? 'Projects' : 'P'}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={location.pathname === "/about" ? "text-blue-500" : ""}>
                        {isExpanded ? 'About' : 'A'}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
