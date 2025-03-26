import React, { useState, useEffect } from "react";
import Logo from "../utils/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navLinks = [
    { name: "Dashboard", href: "#" },
    { name: "Openings", href: "#" },
    { name: "Deadlines", href: "#" }
  ];

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white w-full z-10 transition-all duration-300 ${
      isScrolled 
        ? "fixed top-0 left-0 shadow-xl" 
        : "relative shadow-sm hover:shadow-md transition-shadow duration-300"
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10" />
          </a>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-800 hover:text-teal-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex space-x-3">
              <button className="px-4 py-1.5 rounded border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-200 shadow-sm hover:shadow">
                Dark Mode
              </button>
              <button className="px-4 py-1.5 rounded bg-teal-600 text-white border-2 border-teal-600 hover:bg-teal-700 hover:border-teal-700 transition-colors duration-200 shadow-md hover:shadow-lg">
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-2">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name} className="hover:shadow-sm transition-shadow duration-200">
                  <a 
                    href={link.href} 
                    className="block px-3 py-2 rounded hover:bg-gray-100 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col space-y-2">
              <button className="w-full px-4 py-2 rounded border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-200 shadow-sm hover:shadow">
                Dark Mode
              </button>
              <button className="w-full px-4 py-2 rounded bg-teal-600 text-white border-2 border-teal-600 hover:bg-teal-700 hover:border-teal-700 transition-colors duration-200 shadow-md hover:shadow-lg">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Add an attractive shadow edge when fixed */}
      {isScrolled && (
        <div className="h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500"></div>
      )}
    </nav>
  );
}

export default Navbar;