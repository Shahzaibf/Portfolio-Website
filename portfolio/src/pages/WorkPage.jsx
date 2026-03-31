import React from 'react'

const WorkPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto py-12 px-6">
        
        <h1 className="text-center text-4xl font-bold font-serif mb-10">
          Work Experience
        </h1>

        <div className="transition animated-open grid grid-cols-1 gap-y-5 ">
          
          {/* Career Launch Tech Initiative */}
          <div className='bg-blue-900 rounded-2xl shadow-lg p-8 space-y-10 hover:shadow-2xl '>
            <h2 className="text-2xl font-bold mb-2">Software Engineering Intern @ Career Launch Tech Initiative</h2>
            <p className="text-sm text-gray-300 mb-4">Feb 2024 – May 2026 | Remote</p>
            <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed">
              <li>Developing and shipping full-stack features using React.js and Node.js in a startup environment, collaborating with engineers to enhance existing products and integrate AI-driven functionality.</li>
              <li>Implementing RESTful API endpoints, debugging backend services, and building responsive frontend components.</li>
              <li>Participating in code reviews, testing, and performance optimization while supporting integration of AI/ML-driven features. </li>
            </ul>
          </div>

          {/* Beam Center */}
          <div className='bg-blue-900 rounded-2xl shadow-lg p-8 space-y-10 hover:shadow-2xl '>
            <h2 className="text-2xl font-bold mb-2">Assistant Instructor @ Beam Center</h2>
            <p className="text-sm text-gray-300 mb-4">Jun 2024 – Aug 2024 | New York, NY</p>
            <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed">
              <li>Trained 20+ students on advanced tools, laser cutting, 3D printing, and electronics/circuits.</li>
              <li>Collaborated with peers to lead hands-on workshops for middle and high school students.</li>
              <li>Developed leadership and communication skills by managing student groups and coordinating project timelines. </li>
              <li>Demonstrated strong project management and time management abilities in a fast-paced, creative environment.</li>
              <li>Selected in the top 10% of applicants for the CUNY Career Launch program.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WorkPage