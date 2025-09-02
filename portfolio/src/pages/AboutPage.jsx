import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import { FaReact, FaJs, FaPython, FaAws, FaDocker, FaGithub } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import '../styles/animate.css'

const AboutPage = () => {
  document.body.style.overflow = 'auto';
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto py-12 px-6">
        
        <h1 className="text-center text-4xl font-bold font-serif mb-10">
          About Me
        </h1>

        <div className="bg-blue-900 rounded-2xl shadow-lg p-8 space-y-10 hover:shadow-2xl transition animated-open">

          <p className="text-lg leading-relaxed">
            Hey! 
            I'm currently pursuing a Bachelor's degree in Computer Science at Hunter College. 
            Through my projects, I've gained hands-on experience with a range of technologies 
            and I'm excited to bring these skills to life in my work. I have experience in 
            front-end and back-end development, as well as in database management and cloud infrastructure. 
            I love experimenting with AI and try to integrate it into my projects.
          </p>

          {/* Tech Stack */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-blue-700 pb-2">My Tech Stack</h2>
            <div className="grid grid-cols-4 gap-6 text-5xl justify-items-center">
              <FaPython className="hover:text-blue-400 transition-transform hover:scale-110" />
              <FaJs className="hover:text-blue-400 transition-transform hover:scale-110" />
              <SiCplusplus className="hover:text-blue-400 transition-transform hover:scale-110" />
              <FaReact className="hover:text-blue-400 transition-transform hover:scale-110" />
              <BiLogoPostgresql className="hover:text-blue-400 transition-transform hover:scale-110" />
              <FaAws className="hover:text-blue-400 transition-transform hover:scale-110" />
              <FaDocker className="hover:text-blue-400 transition-transform hover:scale-110" />
              <FaGithub className="hover:text-blue-400 transition-transform hover:scale-110" />
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-blue-700 pb-2">Key Highlights</h2>
            <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed">
              <li>Collaborated with a Google mentor in a team of 4 to build a tourist chatbot using Dialogflow, JavaScript, and Google APIs during Google Codefest.</li>
              <li>Developed a MERN stack product tracker with full CRUD operations and API integration.</li>
              <li>Developed a SwiftUI-based air quality app leveraging the OpenWeatherMap API, providing real-time AQI insights."</li>
              <li>Deploying a GraphQL API with Go using AWS Lambda, and leveraging AWS CDK, EC2, Heroku, and Docker for infrastructure management in a cross-platform capstone project.</li>
            </ul>
          </div>

          {/* Coursework */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-blue-700 pb-2">Relevant Coursework</h2>
            <p className="leading-relaxed">
              Data Structures and Algorithms I–III, Calculus I–II, Practical Web Development, 
              Computer Architecture I–II, Discrete Structures, Database Management, 
              iOS Development, Operating Systems, Computer Theory, Software Engineering, and Capstone.
            </p>
          </div>

          {/* Skills Beyond Code */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-blue-700 pb-2">Skills Beyond Code</h2>
            <p>Team collaboration, project management, communication, and problem-solving under pressure.</p>
          </div>

          {/* Outside of Tech */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-blue-700 pb-2">Outside of Tech</h2>
            <p>When I’m not coding, you’ll probably find me experimenting with 3D printing designs, bowling with friends, or exploring hiking trails.</p>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center">
            <a 
              type="button" 
              className="inline-flex items-center px-6 py-3 text-base font-medium bg-blue-700 rounded-lg hover:bg-blue-600 hover:scale-105 hover:cursor-pointer transition transform shadow-md"
              href="/documents/ShahzaibFareedResume.pdf"
              target="_blank"
            >
              Resume <BsArrowUpRight className="ml-2" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutPage
