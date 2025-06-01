import React from 'react'
import { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { FaGithub, FaLock, FaLockOpen } from "react-icons/fa"; //<FaGithub />
import ProjectCard from '../components/ProjectCard'
import '../styles/border.css'
import { createSwapy } from 'swapy';
import { useEffect } from 'react';
import { useRef } from 'react';
import { initialProjects } from '../utils/proj';


const ProjectsPage = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [projects] = useState(initialProjects);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const container = useRef(null);
  const swapy = useRef(null);
  

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

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current, {
        animation: 'dynamic',
        swapMode: 'drop',
        autoScrollOnDrag: false,
      });

      swapy.current.onSwap((event) => {
        console.log('swap', event);
      })
    }
  }, []);

  const handleLock = () => {
    setIsLocked(!isLocked);
    if (!isLocked) {
      console.log('locked');
      swapy.current.enable(false);
    } else {
      console.log('unlocked');
      swapy.current.enable(true);
    }
  };

  return (
    <>
      <div className={`min-h-screen bg-blue-950 text-white px-6 py-12 ${selectedCard ? 'opacity-50 pointer-events-none' : ''}`}>
      <div className="relative mb-10 max-w-6xl mx-auto">
        <h1 className="text-center text-4xl font-bold font-serif">
          <span className="p-3 rounded animated-border">My Projects</span>
        </h1>
        <button
          onClick={handleLock}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-xl p-2 bg-blue-700 rounded-full hover:bg-blue-800 hover:cursor-pointer   transition"
        >
          {isLocked ? <FaLock /> : <FaLockOpen />}
        </button>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" ref={container}>
          {projects.map((proj, index) => (
            <div key={index} className=" hover:cursor-pointer" data-swapy-slot={index}>
              <div onClick={() => setSelectedCard(proj)} data-swapy-item = {index} >
                <ProjectCard {...proj}/>
              </div>
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