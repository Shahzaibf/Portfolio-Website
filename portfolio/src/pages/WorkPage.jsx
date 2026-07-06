import React from 'react'
import { IoLocation } from 'react-icons/io5';

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "DCB",
    dates: "Jun 2026 - Jul 2026",
    location: "New York, NY",
    summary: "Built product-facing fintech UI and improved production web experiences across React and TypeScript surfaces.",
    bullets: [
      "Built and designed React/TypeScript frontend features for a fintech banking application, extending an existing backend and product architecture.",
      "Improved DCB's marketing site by fixing UI issues, refining layouts, updating styling, and enhancing page presentation.",
      "Integrated frontend screens with backend APIs, implementing reusable components, form handling, loading states, and error states.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Career Launch Tech Initiative",
    dates: "Feb 2024 - May 2026",
    location: "Remote",
    summary: "Shipped full-stack features in a startup environment while supporting product work that included AI-driven functionality.",
    bullets: [
      "Developed and shipped full-stack features using React.js and Node.js, collaborating with engineers to enhance existing products.",
      "Implemented RESTful API endpoints, debugged backend services, and built responsive frontend components.",
      "Participated in code reviews, testing, and performance optimization while supporting AI/ML feature integration.",
      "Leveraged AI tools to accelerate development, debug backend services, and improve implementation efficiency across full-stack features.",
    ],
  },
  {
    role: "Assistant Instructor",
    company: "Beam Center",
    dates: "Jun 2024 - Aug 2024",
    location: "New York, NY",
    summary: "Led hands-on technical workshops for students while practicing clear communication, planning, and project guidance.",
    bullets: [
      "Trained 20+ students on advanced tools, laser cutting, 3D printing, and electronics/circuits.",
      "Collaborated with peers to lead hands-on workshops for middle and high school students.",
      "Developed leadership and communication skills by managing student groups and coordinating project timelines.",
      "Selected in the top 10% of applicants for the CUNY Career Launch program.",
    ],
  },
];
 
const WorkPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto py-12 px-6">
 
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">
            Experience
          </p>
          <h1 className="text-4xl font-bold font-serif">
            Work Timeline
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            A quick path through the roles where I've built software, supported teams, and helped people use technical tools with confidence.
          </p>
        </div>
 
        <div className="relative space-y-8 animated-open">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-blue-700/60 -translate-x-1/2 hidden sm:block" />
 
          {experiences.map((experience) => (
            <div key={`${experience.company}-${experience.dates}`} className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
 
              <div className="flex-1 w-full bg-blue-900 rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h2 className="text-2xl font-bold">{experience.role}</h2>
                  {experience.current && (
                    <span className="inline-flex items-center gap-2 bg-blue-800 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block" />
                      Current role
                    </span>
                  )}
                </div>
 
                <p className="text-blue-300 text-sm mb-1">{experience.company}</p>
 
                <div className="flex items-center gap-4 flex-wrap text-sm text-gray-400 mb-4">
                  <span>{experience.dates}</span>
                  <span className="flex items-center gap-1.5">
                    <IoLocation className="text-blue-400" />
                    {experience.location}
                  </span>
                </div>
 
                <p className="text-base leading-relaxed text-gray-200 mb-4">
                  {experience.summary}
                </p>
 
                <ul className="space-y-2">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-gray-200">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
 
        </div>
      </div>
    </div>
  )
}
 
export default WorkPage
 