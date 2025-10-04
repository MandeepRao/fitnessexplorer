
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContextData } from '../ContextProvider/ContextProvider';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const { user, setUserDetail } = useContextData();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileDropDown = () => {
        setIsMobileMenuOpen(false);
    }
    useEffect(() => {
        if (user) {
            setUserName(user);
        }
    }, [user]);
    return (
        <header className="bg-white shadow-lg border-b-2">
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">

                <Link className="cursor-pointer" to='/' onClick={closeMobileDropDown} >
                    <img alt="headerIcon"
                        src='./assets/header.jpg'
                        className='h-12 '
                        loading="lazy"
                    />
                </Link>

                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="text-gray-600 hover:text-green-500 transition-colors duration-200">Home</Link>
                    <Link to="/workouts" className="text-gray-600 hover:text-green-500 transition-colors duration-200">Workouts</Link>
                    <Link to="/equipment" className="text-gray-600 hover:text-green-500 transition-colors duration-200">Equipment</Link>
                </div>

                {!userName ? <Link to="/user" className="hidden md:inline-block px-4 py-2 font-semibold text-white bg-green-500 rounded-md shadow-lg hover:bg-green-600 transition-colors duration-200">
                    Sign Up
                </Link> :
                    <div className='flex gap-1'>
                        <h3>Welcome, </h3> {" "} <h3 className='text-green-600 text-solid '>{userName}!</h3></div>
                }

                <button onClick={toggleMobileMenu} className=" md:hidden text-gray-600 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

            </nav>

            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white transition-all duration-700 `}>
                <Link to="/workouts" onClick={closeMobileDropDown} className="block py-2 px-4 text-gray-600 hover:bg-gray-100">Workouts</Link>
                <Link to="/equipment" onClick={closeMobileDropDown} className="block py-2 px-4 text-gray-600 hover:bg-gray-100">Equipments</Link>
                {!userName && <Link to="/user" onClick={closeMobileDropDown} className="block py-2 px-4 text-center font-semibold text-white bg-green-500 hover:bg-green-600">
                    Sign Up
                </Link>}
            </div>
        </header>
    );
}

export default Header;

