import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../datas/porfolioData.js';
import Footer from '../Footer';
import Skill from '../Skill';

// Helper function to make titles URL-friendly
const slugify = (title) => title.toLowerCase().replace(/ /g, '-');


const PortfolioPage = () => {
  return (
    <div className="">
      <section className="relative hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-wrap mb-7 text-7xl text-gray-100 font-extrabold">
              Portfolio
            </h1>
            <p className="mx-auto text-2xl  text-gray-800">
              Check out my latest work
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-10 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-sm text-dark-200 uppercase font-medium">
              Design your projects faster with my amazing skills
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
              My Recent <span className="text-transparent bg-clip-text bg-orange-600"> Works </span>
            </h2>
          </div>

          <section className='my-10'>
            <h1 className="text-sm text-dark-200 uppercase font-medium my-3 ">
              WEB DEVELOPMENT & UI/UX DESIGNS
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
              {projects.map((project, index) => (
                <div key={index} className=" p-5 transition-transform duration-300 hover:backdrop-blur">
                  <img className="w-full object-cover" src={project.imageUrl} alt={project.title} />
                  <div className="p-4 justify-center flex">
                    <button className="text-zinc-700 m-auto hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
                    <Link to={`/projects/${slugify(project.title)}`} rel="noopener noreferrer">
                        View Project
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <Skill />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
