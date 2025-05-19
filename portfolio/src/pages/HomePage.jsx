import React from 'react'
import { Link } from "react-router";
import '../styles/animate.css';
import { IoLocation } from "react-icons/io5"; //<IoLocation />
import avatar from '../images/avatar.jpg';

const HomePage = () => {
  const lookingForWork = true;
  document.body.style.overflow = 'hidden';
  return (
    <>
    <div className='flex h-screen items-center justify-between bg-blue-950 px-10 text-white'>
      <div className="flex flex-col items-start justify-center w-1/2">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight fade-in-title">
          Software Engineer
        </h1>
        {lookingForWork &&
        <Link to="/contacts" classname="">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm shadow-sm animate-bounce hover:bg-blue-300 transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            Currently looking for work!
          </div>
        </Link>
        }
        <div className='flex gap-2 mb-4 items-center'>
          <IoLocation  className='text-xl text-purple-400'/>
          <p className='text-base text-white font-medium tracking-wide'>New York City, NY</p>
        </div>
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
      </div>
        <div className='w-1/2 flex justify-center'>
          <img src={avatar} alt="Image of Shahzaib Fareed" className=' w-64 h-64 rounded-full border-4 border-blue-300 object-cover'/>
        </div>
      </div>
    </>
  )
}

export default HomePage;