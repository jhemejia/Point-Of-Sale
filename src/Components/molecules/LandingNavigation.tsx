import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingNavigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
        <div className={["antialiased bg-gray-100 dark-mode:bg-gray-900 md:h-auto", open? ' h-full':''].join("")} >
            <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
                <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="flex flex-row items-center justify-between p-4">
                        <Link to="/" className="flex items-center font-medium text-gray-900 title-font md:mb-0">
                            <img src="./logo.png" alt="logo" className="w-20 " />
                        </Link>
                        <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={toggleMenu}>
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                <path className={!open? "":"hidden" } fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                <path className={open? "":"hidden" }  fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className={["flex flex-col flex-grow pb-4 md:pb-0 z-10 md:flex md:justify-between md:flex-row", open ? 'flex-col w-full h-full':'hidden'].join(" ")}>
                        <div className={[open? 'flex flex-col md:flex-row h-full w-full items-center mb-4 pa-4 justify-between border-0 border-b-2 border-gray-300 md:border-b-0 md:justify-start md:mb-0 md:py-2': 'flex items-center w-full' ].join(" ")}>
                            <Link to="/" className="mx-auto md:mx-3 py-2 md:py-0 font-medium hover:text-gray-900">Home</Link>
                            <Link to="/my-work" className="mx-auto md:mx-3 py-2 md:py-0 font-medium hover:text-gray-900">My Work</Link>
                            <Link to="/about" className="mx-auto md:mx-3 py-2 md:py-0 font-medium hover:text-gray-900">About Me</Link>
                            <Link to="/contact" className="mx-auto md:mx-3 py-2 md:py-0 font-medium hover:text-gray-900">Contact</Link>
                            <a href="/Resume - Jherson.pdf" download="Resume - Jherson.pdf"  className="mx-auto md:mx-3 py-2 md:py-0 font-medium hover:text-gray-900">Resume</a>                        
                        </div>
                        <div className="flex flex-nowrap items-center w-full h-full justify-center md:justify-end mx-2 relative">
                            <button onClick={()=>navigate("/login")} className="mx-auto md:mx-3 font-medium hover:text-gray-900">Login</button>
                            <button onClick={()=>navigate("/signup")}
                                className="mx-auto md:mx-3 px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-green-500 rounded shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none ease">
                                Sign Up
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingNavigation
