import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2"; //<HiBars3 />
import { IoMdClose } from "react-icons/io"; // <IoMdClose />
import { useState } from "react";
import { useEffect } from "react";

const links = [
  { to: "/about", label: "About"},
  { to: "/projects", label: "Projects"},
  { to: "/contacts", label: "Contacts"},
];

const NavLinks = () => {
  return (
    <>
      {links.map(({ to, label }) => (
          <NavLink
            to={to}
            className={({ isActive }) =>
            `text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:-translate-y-0.5 font-sans tracking-wide uppercase transition-colors duration-300 ease-in-out ${isActive ? "bg-blue-500" : "bg-blue-700 text-white hover:bg-blue-800"} `
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
    setIsOpen(false)
  }, [location.pathname]);


  return (
    <>
      <nav className="bg-blue-950 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b p-4 border-gray-100 flex-wrap">
        <h1 className="font-bold text-3xl font-seriff ">Shahzaib Fareed</h1>
        <div className="ml-auto flex gap-6 hidden md:flex">
          <NavLinks />
        </div>
        <div>
          <button onClick={toggleNavbar} className="md:hidden">
            {isOpen ? <IoMdClose /> : <HiBars3 />}
          </button> 
        </div>
        {isOpen && (
        <div className="flex flex-col items-center basis-full md:hidden">
          <NavLinks />
        </div>
      )}
      </nav>
    </>
  );
};

export default Navbar;