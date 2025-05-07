import React from 'react'
import { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { FaGithub } from "react-icons/fa"; //<FaGithub />
import ProjectCard from '../components/ProjectCard'
import '../styles/border.css'
import { useEffect } from 'react';

const projects = [
  {
    title: "MERN Product Page Application",
    description: "A full-stack web application that lets users create, view, update, and delete products. Built with the MERN stack, it features a responsive UI with Chakra UI, modal-based editing, and dynamic routing. Ideal for managing a simple product catalog.",
    techstack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    githublink: "https://github.com/Shahzaibf/Product-Page",
    gitLink: true
  },
  {
    title: "Nexus",
    description: "App for helping gamers find teams by matching them based on game preferences, playstyle, playtime, and region. It features chat for coordination and a reputation system to reward positive interactions and report issues. Mainly handled cloud computing, architecture, cloud functions, and database management.",
    techstack: ["AWS", "Lambda", "EC2", "PostgreSQL", "Go"],
    githublink: null,
    gitLink: false
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec nisl vitae nunc pellentesque ornare vitae eget urna. Maecenas iaculis in est in rutrum. Nulla eros lorem, LIMIT HERE imperdiet non augue ut, mattis varius erat.",
    techstack: ["React", "Tailwind", "Python"],
    githublink: null,
    gitLink: false,
  },
] 
const ProjectsPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedCard(null);
      setIsClosing(false);
    }, 300)
  };

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedCard]);


  return (
    <>
      <div className={`min-h-screen bg-blue-950 text-white px-6 py-12 ${selectedCard ? 'opacity-50 pointer-events-none' : ''}`}>
        <h1 className="text-center text-4xl font-bold font-serif mb-10">
          <span className="p-3 rounded animated-border">My Projects</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((proj, index) => (
            <div key={index} className=" hover:cursor-pointer" onClick={() => setSelectedCard(proj)}>
              <ProjectCard {...proj}/>
            </div>
          ))}
        </div>
      </div>
      
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-center" >
          <div className={`bg-blue-800 p-6 rounded-xl shadow-2xl max-w-2xl w-full overflow-y-auto max-h-[90vh] relative ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-black hover:cursor-pointer"
            >
              <IoIosCloseCircle color='' size={20}/>
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
            <p className="text-white-700 whitespace-pre-wrap mb-4">
              {selectedCard.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
              {selectedCard.techstack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-200 text-sm font-semibold px-3 py-1 rounded-full text-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            {selectedCard.gitLink && (
              <div className=' mt-auto text-center'>
              <a
                href={selectedCard.githublink}
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-400 transition"
              >
                <FaGithub className="text-2xl" />
                <span className="text-sm font-medium">View on GitHub</span>
              </a>
            </div>
            )}
          </div>
        </div>
      )}

    </>
  );
};


export default ProjectsPage