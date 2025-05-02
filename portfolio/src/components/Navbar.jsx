import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-950 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b p-4 border-gray-100">
      <h1 className="font-bold text-3xl font-serif ">Shahzaib Fareed</h1>
      <div className="ml-auto flex gap-6">
        <NavLink to="/about" className={({ isActive }) => 
        `text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:-translate-y-0.5 font-sans tracking-wide uppercase transition-colors duration-300 ease-in-out ${isActive ? "bg-blue-500" : "bg-blue-700 text-white hover:bg-blue-800"} `
      }>
          About
        </NavLink>
        <NavLink to="/projects" className="text-white transition-colors duration-300 ease-in-out hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:-translate-y-0.5 font-sans tracking-wide uppercase">
          Projects
        </NavLink>
        <NavLink to="/contacts" className="text-white transition-colors duration-300 ease-in-out hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:-translate-y-0.5 font-sans tracking-wide uppercase">
          Contacts
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;