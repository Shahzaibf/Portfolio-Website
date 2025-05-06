import React from 'react'
import { FaGithub } from "react-icons/fa"; //<FaGithub />
import '../styles/animate.css'

const ProjectCard = ({title, description, techstack, githublink}) => {
  return (
    <>
      <div className="bg-blue-900 rounded-2xl shadow-lg p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl text-white flex flex-col justify-between h-full animated-open">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="text-sm text-gray-200 mb-4 line-clamp-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techstack.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-800 text-xs font-semibold px-3 py-1 rounded-full text-white border border-blue-500"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto text-center">
        <a
          href={githublink}
          target="_blank"
          className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-400 transition"
          onClick={(e) => e.stopPropagation()}
        >
          <FaGithub className="text-2xl" />
          <span className="text-sm font-medium">View on GitHub</span>
        </a>
      </div>
    </div>
    </>
  )
}

export default ProjectCard;