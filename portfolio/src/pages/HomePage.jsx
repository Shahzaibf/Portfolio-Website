import React from 'react'
import { Link } from "react-router";
import '../styles/animate.css';
import avatar from '../images/avatar.jpg';

const HomePage = () => {
  document.body.style.overflow = 'hidden';
  return (
    <>
      <div className="h-screen flex flex-col items-start justify-center pl-10 bg-blue-950 text-white ">
        <h1 className="text-5xl font-bold mb-4 fade-in-title ">
          Software Engineer
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mb-6">
          I design and build backend systems, APIs, and cloud infrastructure for scalable applications.
        </p>
        <div className="flex gap-4">
          <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors duration-300">
            View Projects
          </Link>
          <Link to="/contacts" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-blue-900 transition-colors duration-300">
            Contact Me
          </Link>
        </div>
        <img src={avatar} alt="Image of Shahzaib Fareed" className=' w-20 h-20 rounded border-2'/>
      </div>
    </>
  )
}

export default HomePage;