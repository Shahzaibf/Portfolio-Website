import React from 'react'

const WorkPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto py-12 px-6">
        
        <h1 className="text-center text-4xl font-bold font-serif mb-10">
          Work Experience
        </h1>

        <div className="bg-blue-900 rounded-2xl shadow-lg p-8 space-y-10 hover:shadow-2xl transition animated-open">
          
          {/* Beam Center */}
          <div>
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