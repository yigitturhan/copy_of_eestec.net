import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Navigation = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/#about' },
        { name: 'Cities', path: '/cities' },
        { name: 'Events', path: '/events' },
        { name: 'Partners', path: '/partners' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className="bg-black p-4 flex items-center">
            <Link to="/">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-64 h-auto"
                />
            </Link>

            <ul className="flex space-x-3 ml-12">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            to={item.path}
                            className={`tab-link text-white text-2xl py-3 px-6 ${
                                location.pathname === item.path ? 'text-red-600' : ''
                            }`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <button className="sign-in-btn">
                Sign In
                <i className="fa fa-user ml-2"></i>
            </button>
        </nav>
    );
};

export default Navigation;