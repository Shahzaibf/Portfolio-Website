import React from 'react'
import { IoMdMail } from "react-icons/io"
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa"

const ContactsPage = () => {
  //<div className="min-h-screen bg-blue-950 text-white flex flex-col items-center justify-center p-6">
  return (
    <>
      <div className="h-screen bg-blue-950 text-white flex flex-col items-center justify-center p-6 ">
        <h1 className="text-4xl font-bold font-serif mb-8 border-b-2 pb-2">Contact Me!</h1>

        <div className="bg-blue-900 rounded-2xl p-8 shadow-lg w-full max-w-md space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-white text-blue-900 p-3 rounded-full hover:bg-blue-100 transition">
              <FaPhoneAlt className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
            </div>
            <p className="text-sm font-semibold">631-710-9297</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <a
              href="mailto:shahzaibfareed1118@gmail.com"
              className="bg-white text-blue-900 p-3 rounded-full hover:bg-blue-100 transition"
            >
              <IoMdMail className="w-6 h-6" />
            </a>
            <p className="text-sm font-semibold">shahzaibfareed1118@gmail.com</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <a
              href="https://www.linkedin.com/in/shahzaib-fareed-183bb31b7/"
              target="_blank"
              className="bg-white text-blue-900 p-3 rounded-full hover:bg-blue-100 transition"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <p className="text-sm font-semibold">LinkedIn Profile</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactsPage