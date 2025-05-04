import React from 'react'
import ProjectCard from '../components/ProjectCard'
import '../styles/border.css'

const projects = [
  {}
]

const ProjectsPage = () => {
  const dummy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec nisl vitae nunc pellentesque ornare vitae eget urna. Maecenas iaculis in est in rutrum. Nulla eros lorem, imperdiet non augue ut, mattis varius erat.";

  return (
    <>
      <div className="min-h-screen bg-blue-950 text-white px-6 py-12">
        <h1 className="text-center text-4xl font-bold font-serif mb-10">
          <span className="p-3 rounded animated-border">My Projects</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[...Array(5)].map((_, index) => (
            <ProjectCard
              key={index}
              title={`Project ${index + 1}`}
              description={dummy}
              techstack={['ReactJS', 'Tailwind', 'Python', 'SA', 'safas']}
              githublink="https://github.com/afsadsd"
            />
          ))}
        </div>
      </div>
    </>
  );
};


export default ProjectsPage