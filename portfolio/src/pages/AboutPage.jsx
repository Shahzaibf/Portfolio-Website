import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";

const AboutPage = () => {
  return (
    <>
      <div className='bg-blue-950 min-h-screen'>
        <div className=''>
          <h1 className='text-center p-5 text-4xl font-bold font-serif '>
            <span className=' p-3 rounded'>Hey!</span>
          </h1>
      </div>

      <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 arrow:content-['↗'] arrow:text-white arrow:absolute arrow:top-.5 arrow:right-.5 arrow:text-xs hover:cursor-pointer">
      Resume
        <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-white  rounded-full arrow:content">
        { /* ↗ <BsArrowUpRight /> */}
        ↗
        </span>
      </button>
    </div>
      

    </>
    
  )
}

export default AboutPage