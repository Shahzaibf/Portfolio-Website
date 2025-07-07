import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import { FaReact, FaJs, FaPython, FaAws, FaDocker, FaGithub } from "react-icons/fa"; // <FaReact /> <FaJs /> <FaPython /> <FaAws /> <FaDocker />
import { SiCplusplus } from "react-icons/si"; // <SiCplusplus />
import { BiLogoPostgresql } from "react-icons/bi"; // <BiLogoPostgresql />

const AboutPage = () => {
  return (
    <>
      <div className='bg-blue-950 min-h-screen text-center'>
        <div className=''>
          <h1 className='text-center p-5 text-4xl font-bold font-serif '>
            <span className=' p-3 rounded'>About me!</span>
          </h1>
          <div className="flex justify-center items-center h-screen ">
            <div className='flex flex-col w-3/4 justify-start items-center bg-blue-900 rounded-2xl shadow-lg p-6 transition-transform hover:shadow-xl text-white h-full animated-open'>
              <p>
                Hey, I'm Shahzaib! I'm currently pursuing a Bachelor's degree in Computer Science at Hunter College. Through my projects, I've gained hands-on experience with a range of technologies and I'm excited to bring these skills to life in my work. I have experience in front-end and back-end development, as well as in database management and cloud infrastructure.
              </p>
              <p className='text-xl font-bold'>My techstack:</p>
              <div className='flex text-4xl space-x-3 '>
                {/* Techstack, icons: */}
                <FaPython className='hover:text-blue-500 transition-colors duration-300' />
                <FaJs className='hover:text-blue-500 transition-colors duration-300' />
                <SiCplusplus className='hover:text-blue-500 transition-colors duration-300' />
                <FaReact className='hover:text-blue-500 transition-colors duration-300' />
                <BiLogoPostgresql className='hover:text-blue-500 transition-colors duration-300' />
                <FaAws className='hover:text-blue-500 transition-colors duration-300' />
                <FaDocker className='hover:text-blue-500 transition-colors duration-300' />
                <FaGithub className='hover:text-blue-500 transition-colors duration-300' />
              </div>
              <p className='text-xl font-bold mt-6'>Key Highlights:</p>
              <ul className='text-left list-disc pl-5 space-y-2'>
              <li>Collaborated with a Google mentor in a team of 4 to build a tourist chatbot using Dialogflow, JavaScript, and Google APIs during Codefest</li>
                <li>Assistant Instructor @ Beam Center (CUNY Career Launch - Top 10% selected)</li>
                <li>Developed a MERN stack product tracker with full CRUD operations and API integration</li>
                <li>Built an air quality app using SwiftUI and OpenWeatherMap API</li>
                <li>Deploying a GraphQL API with Go using AWS Lambda, and leveraging EC2, Heroku, and Docker containerization for testing, deployment, and infrastructure management in a cross-platform capstone project</li>
              </ul>
              <p className='text-xl font-bold mt-6'>Skills beyond code:</p>
              <p>Team collaboration, project management, communication, and problem-solving under pressure.</p>
              <p className='text-xl font-bold mt-6'>Outside of Tech:</p>
              <p>I enjoy 3D printing, bowling, and hiking.</p>

              <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 arrow:content-['↗'] arrow:text-white arrow:absolute arrow:top-.5 arrow:right-.5 arrow:text-xs hover:cursor-pointer">
              Resume
                <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-white  rounded-full arrow:content">
                { /* ↗ <BsArrowUpRight /> */}
                ↗
                </span>
              </button>
            </div>
          </div>
      </div>
      
    </div>
      

    </>
    
  )
}

export default AboutPage