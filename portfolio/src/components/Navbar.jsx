import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2"; //<HiBars3 />
import { IoMdClose } from "react-icons/io"; // <IoMdClose />
import { useState, useEffect } from "react";

const links = [
  { to: "/", label: "Home"},
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contacts", label: "Contacts" },
];

const NavLinks = ({ isMobile = false }) => {
  return (
    <>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `relative px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out
            ${isMobile
              ? 'w-full text-center my-2'
              : 'mx-2'
            }
            ${isActive
              ? 'text-blue-400'
              : 'text-gray-300 hover:text-white'
            }
            after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
            after:bottom-0 after:left-0 after:bg-blue-400 after:transition-transform 
            after:duration-300 after:ease-out hover:after:scale-x-100
            ${isActive ? 'after:scale-x-100' : ''}`
          }
        >
          {label}
        </NavLink>
      ))}
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-950 to-blue-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors duration-300">
                Shahzaib Fareed
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <NavLinks />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
              >
                {isOpen ? (
                  <IoMdClose className="block h-6 w-6" />
                ) : (
                  <HiBars3 className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900/50 backdrop-blur-sm flex flex-row">
            <NavLinks isMobile={true} />
          </div>
        </div>
      </nav> 
    </>
  );
};

export default Navbar;