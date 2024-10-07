import React from 'react'
import mike from '../assets/mikearemu.png'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (


    <div className="py-0 px-4 mx-auto max-w-screen-xl flex lg:py-16 h-fit relative items-center justify-center">
      <div className="">
        <div className="text-center">
         
          <h1 className="text-wrap mb-7 text-4xl lg:text-7xl font-extrabold py-3 text-gray-800 ">
            Dynamic Designs for Engaging Digital Experiences
          </h1>
          <p className="text-lg lg:text-2xl font-normal text-wrap w-full lg:w-4/6  m-auto text-gray-800 mb-6">
           Hello, I'm a Freelance Brand Designer, UI/UX Specialist, and Full Stack Web Developer.
          </p>
          <Link to="/aboutme" className="text-orange-600  gap-10 dark:text-orange-500 hover:underline font-medium text-lg inline-flex items-center">
            Read more <GoArrowRight />

          </Link>

        </div>


      </div>
    </div>



  )
}

export default Hero