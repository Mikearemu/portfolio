import React, { useState } from 'react';
import projects from '../datas/porfolioData.js';
import {  Link } from 'react-router-dom';
const Portfolio = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');

  const handleNextProject = () => {
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 300); // Delay for the animation to complete
  };

  const handlePrevProject = () => {
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    }, 300); // Delay for the animation to complete
  };

  const handlePageClick = (pageIndex) => {
    setSlideDirection(pageIndex > currentProjectIndex ? 'right' : 'left');
    setTimeout(() => {
      setCurrentProjectIndex(pageIndex);
    }, 300); // Delay for slide animation
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="my-8">
      {/* Portfolio Section */}
      <section className="py-16">
        <h1 className="text-wrap mb-7 text-4xl text-gray-800 ">
          Portfolio
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section - About My Work */}
          <div className="flex flex-col items-left justify-center">
            <h2 className="text-4xl font-bold text-left tracking-tight text-gray-800">
              My Recent Works.
            </h2>
            <p className="mt-4 text-gray-800 text-lg ">
              From design to execution, every new project offers the opportunity of stretching boundaries creatively and technically.
            </p>
            <Link to="/portfolio">
            <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 my-4 hover:border-red-300 hover:before:[box-shadow:_20px_20px_20px_30px_red] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-gray-800 relative h-16 w-64 backdrop-blur border text-left p-3 text-gray-800 text-base font-bold  overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-orange-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-red-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
              VIEW ALL WORKS
            </button>
            </Link>
          </div>

         
          <div className="container mx-auto px-6 text-center">
            <div className= 'p-1 mx-auto relative transition duration-300 ease-in-out '>
              <a href={currentProject.projectUrl} className="block relative hover:scale-110 transition-all">
                <img
                  src={currentProject.imageUrl}
                  alt={currentProject.title}
                  className="w-full rounded-bl-3xl rounded-tr-3xl object-cover"
                />

             
              </a>

              {/* Navigation Buttons */}
              <div className="mt-8 flex items-center justify-center">
                <button
                  onClick={handlePrevProject}
                  aria-label="Previous slide"
                  className="rounded-full border m-2 border-gray-800 p-3 text-gray-800 transition hover:bg-orange-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNextProject}
                  aria-label="Next slide"
                  className="rounded-full border m-2 border-gray-800 p-3 text-gray-800 transition hover:bg-range-600"
                >
                  <svg
                    className="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageClick(index)}
                    className={`w-10 h-10 mx-2 rounded-full transition ${index === currentProjectIndex
                        ? 'bg-orange-600 text-gray-100'
                        : ' text-gray-800 hover:bg-orange-600'
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>



      </section>
    </div>
  );
};

export default Portfolio;
