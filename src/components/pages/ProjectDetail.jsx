import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../../datas/porfolioData.js';
import Footer from '../Footer';
import { motion } from "framer-motion";

const imageVariants = (duration) => ({
  initial: { y: -50 },
  animate: {
    y: [10, -50],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",

    },
  },
});
// Helper function to convert URL-friendly title back to normal format
const unslugify = (slug) => slug.replace(/-/g, ' ');

const ProjectDetail = () => {
  const { title } = useParams();  // Get the title from the URL
  const projectTitle = unslugify(title);  // Convert it back to normal format
  const project = projects.find((proj) => proj.title.toLowerCase() === projectTitle.toLowerCase());

  const navigate = useNavigate();  // Hook for navigation (Back button)

  // Filter out the current project and get the latest 4 projects
  const otherProjects = projects
    .filter((proj) => proj.title.toLowerCase() !== projectTitle.toLowerCase())
    .slice(0, 2);  // Select the latest 4 projects

  // Check if the project is found
  if (!project) {
    return <> <div className="text-center text-6xl font-semibold">Project not found</div>
      <div className="mt-10">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Available Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {otherProjects.map((otherProject, index) => (
            <div key={index} onClick={() => navigate(`/projects/${otherProject.title.toLowerCase().replace(/ /g, '-')}`)} className="border p-4 dark:border-gray-800 text-center hover:shadow-lg">
              <img className="w-full object-cover mb-4" src={otherProject.imageUrl} alt={otherProject.title} />
              <h3 className="font-bold text-lg text-gray-800 mb-2">{otherProject.title}</h3>
              <p className="text-sm text-gray-800">{otherProject.description.slice(0, 80)}...</p>

            </div>
          ))}
        </div>
      </div>
      <Footer /></>
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 text-gray-600 md:px-8">


      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}  // Go back to previous page
        className="mb-6 text-gray-100 bg-orange-600 px-4 py-2 hover:bg-orange-800 rounded"
      >
        ← Back to Portfolio
      </button>

      <div className="mx-auto text-left">
        <h1 className="text-4xl font-extrabold text-gray-800">{project.title}</h1>
        <p className="text-lg text-gray-800">{project.description}</p>
        <a
          href={project.projectUrl}
          className="text-gray-100 p-3 bg-orange-600 my-10 block w-fit cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          LAUNCH THE PROJECT
        </a>
        <h3 className="text-2xl my-10 font-normal text-orange-500">Project Details</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-6 text-left text-gray-800">

          {/* Client Name */}
          <div className="border p-6 dark:border-gray-800">
            <div className="font-normal">
              <span className="text-orange-400">Client Name:</span> {project.clientName}
            </div>
          </div>

          {/* Role */}
          <div className="border p-6 dark:border-gray-800">
            <div className="font-normal">
              <span className="text-orange-400">Role:</span> {project.role}
            </div>
          </div>

          {/* Project Type */}
          <div className="border p-6 dark:border-gray-800">
            <div className="font-normal">
              <span className="text-orange-400">Project Type:</span> {project.projectType}
            </div>
          </div>

          {/* Duration */}
          <div className="border p-6 dark:border-gray-800">
            <div className="font-normal">
              <span className="text-orange-400">Duration:</span> {project.duration}
            </div>
          </div>

          {/* Budget */}
          <div className="border p-6 dark:border-gray-800">
            <div className="font-normal">
              <span className="text-orange-400">Budget:</span> {project.budget}
            </div>
          </div>

          {/* Technology Built With */}
          <div className="border p-6 dark:border-gray-800">
            <div className="font-normal">
              <span className="text-orange-400">Technology:</span> {project.technologies.join(', ')}
            </div>
          </div>

          {/* Team On Project */}
          <div className="border p-6 dark:border-gray-800">
            <div className="font-normal">
              <span className="text-orange-400">Team On Project:</span> {project.team}
            </div>
          </div>

          {/* GitHub Repo */}
          <div className="border p-6 dark:border-gray-800">
            <div className="font-normal">
              <span className="text-orange-400">GitHub Repo:</span>
              <a
                href={project.githubRepo}
                className="text-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
            </div>
          </div>
        </div>

        <motion.div variants={imageVariants(3)}
          initial="initial"
          animate="animate">
          <img className="w-full object-cover my-20" src={project.imageUrl} alt={project.title} />
        </motion.div>

      </div>

      {/* CTA Section */}
      <div className=" mt-10">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Get In Touch!</h1>
          <p className="text-lg  text-gray-800 text-center mb-6">
            If you have any questions or want to discuss a project, feel free to contact me or check my portfolio.
          </p>
          <div className="flex justify-center flex-wrap gap-50 space-x-4">
            <button
              onClick={() => navigate('/contactme')} // Assuming you have a /contact route
              className=" text-gray-800 p-4 border dark:border-gray-800 transition duration-300"
            >
              Contact Us Now
            </button>
            <button
              onClick={() => navigate('/portfolio')} // Assuming you have a /portfolio route
              className="b text-gray-800  p-4 border dark:border-gray-800 transition duration-300"
            >
              Check Portfolio
            </button>
          </div>
        </div>
      </div>


      {/* Other Projects Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Other Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {otherProjects.map((otherProject, index) => (
            <div key={index} onClick={() => navigate(`/projects/${otherProject.title.toLowerCase().replace(/ /g, '-')}`)} className="border p-4 dark:border-gray-800 text-center hover:shadow-lg">
              <img className="w-full object-cover mb-4" src={otherProject.imageUrl} alt={otherProject.title} />
              <h3 className="font-bold text-lg text-gray-800 mb-2">{otherProject.title}</h3>
              <p className="text-sm text-gray-800">{otherProject.description.slice(0, 80)}...</p>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
