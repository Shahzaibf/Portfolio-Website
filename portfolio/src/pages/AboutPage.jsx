import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import '../styles/animate.css'
import { Link } from 'react-router';

const techStack = {
  "Languages": ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  "Frontend": ["React.js", "SwiftUI"],
  "Backend & Data": ["Node.js", "Express.js", "FastAPI", "PostgreSQL", "MongoDB"],
  "Infrastructure": ["AWS Lambda", "AWS RDS", "Docker", "GitHub Actions", "Heroku"],
};

const highlights = [
  {
    label: "Course Chat",
    text: "Full-stack web app with React.js (TypeScript) and Node.js. Features real-time chat via Socket.io with typing indicators, JWT auth, and a CI/CD pipeline via GitHub Actions.",
  },
  {
    label: "Nexus",
    text: "Social gaming platform built in a team of 5 with a friend system and real-time chat. Backend on AWS Lambda + API Gateway, EC2/Docker for the recommendation engine, and AWS CDK for infrastructure.",
  },
  {
    label: "MERN Product Tracker",
    text: "RESTful API with Express.js and Node.js for full CRUD operations. React.js/Vite frontend with MongoDB for data management.",
  },
  {
    label: "Career Launch Tech Initiative",
    text: "Shipping full-stack features with React.js and Node.js in a startup environment. Building REST endpoints, debugging backend services, and integrating AI/ML-driven functionality.",
  },
  {
    label: "Beam Center",
    text: "Instructed 20+ middle and high school students in laser cutting, 3D printing, and electronics. Selected in the top 10% of CUNY Career Launch applicants.",
  },
];

const courses = [
  "Data Structures I–III", "Calculus I–II", "Web Development",
  "Computer Architecture I–II", "Discrete Structures", "Database Management",
  "iOS Development", "Operating Systems", "Computer Theory",
  "Software Engineering", "Capstone",
];

const AboutPage = () => {
  document.body.style.overflow = 'auto';

  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto py-12 px-6">

        <h1 className="text-center text-4xl font-bold font-serif mb-10">
          About Me
        </h1>

        <div className="space-y-6 animated-open">

          {/* Header Card */}
          <div className="bg-blue-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition flex items-center gap-6 flex-wrap">
            <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center text-xl font-bold font-serif shrink-0">
              SF
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="flex items-center gap-3 flex-wrap mb-1">
                <h2 className="text-2xl font-bold">Shahzaib Fareed</h2>
                <span className="inline-flex items-center gap-2 bg-blue-800 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block" />
                  Open to opportunities
                </span>
              </div>
              <p className="text-blue-300 text-sm mb-3">CS Student at Hunter College · Full Stack Developer · New York, NY</p>
              <p className="text-base leading-relaxed text-gray-200">
                I build full-stack applications and love integrating AI into my work. Through{" "}
                <Link to="/projects" className="text-blue-400 hover:text-blue-300 underline decoration-blue-300">
                  my projects
                </Link>
                , I've gained hands-on experience across front-end, back-end, databases, and cloud infrastructure.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-blue-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-6 border-b border-blue-700 pb-2">Tech Stack</h2>
            <div className="space-y-4">
              {Object.entries(techStack).map(([category, techs]) => (
                <div key={category}>
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-800 hover:bg-blue-700 transition px-4 py-1.5 rounded-full text-sm font-medium cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-6 border-b border-blue-700 pb-2">Key Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className={`bg-blue-800 rounded-xl p-4 hover:bg-blue-700 transition ${i === highlights.length - 1 && highlights.length % 2 !== 0 ? 'sm:col-span-2' : ''}`}
                >
                  <p className="text-sm font-semibold text-blue-300 mb-1">{item.label}</p>
                  <p className="text-sm leading-relaxed text-gray-200">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-6 border-b border-blue-700 pb-2">Relevant Coursework</h2>
            <div className="flex flex-wrap gap-2">
              {courses.map((course) => (
                <span
                  key={course}
                  className="bg-blue-800 text-blue-100 text-sm px-3 py-1.5 rounded-lg"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-blue-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-6 border-b border-blue-700 pb-2">Certifications</h2>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-semibold text-base">Responsive Web Design</p>
                <p className="text-sm text-blue-300">FreeCodeCamp</p>
              </div>
                <a
                href="https://www.freecodecamp.org/certification/fccbab24bcd-1466-47ed-a083-3b577379e71f/responsive-web-design"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 underline decoration-blue-300 transition"
              >
                View Certificate <BsArrowUpRight />
              </a>
            </div>
          </div>

          {/* Skills Beyond Code + Outside Tech (side by side on md+) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
              <h2 className="text-2xl font-bold mb-4 border-b border-blue-700 pb-2">Skills Beyond Code</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Team collaboration", "Project management", "Communication", "Problem-solving"].map((skill) => (
                  <span key={skill} className="bg-blue-800 text-blue-100 text-sm px-3 py-1.5 rounded-lg">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-blue-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
              <h2 className="text-2xl font-bold mb-4 border-b border-blue-700 pb-2">Outside of Tech</h2>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <p>3D printing designs</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <p>Bowling with friends</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <p>Exploring hiking trails</p>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center pt-2 pb-4">
              <a
              href="/documents/ShahzaibFareedResume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium bg-blue-700 rounded-lg hover:bg-blue-600 hover:scale-105 transition transform shadow-md"
            >
              View Resume <BsArrowUpRight />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;