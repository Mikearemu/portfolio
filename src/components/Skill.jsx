import React from 'react';
import skills from '../datas/skillsData.js';
import {motion} from "framer-motion";

// Define multiple motion variants based on index or skill type
const logoVariants = (duration, direction) => ({
  initial: { y: direction === 'up' ? -10 : 10 },
  animate: {
    y: direction === 'up' ? [10, -10] : [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="py-8 ">
      <div className="mb-6 py-2" data-aos="reveal-right">
        <h1 className="text-wrap mb-7 text-4xl text-gray-800 ">
          Software I work with Technologies
        </h1>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
        {skills.map((skill, index) => (
          <motion.div
            // Alternate duration and direction for variety
            variants={logoVariants(1.5 + index * 0.9, index % 2 === 0 ? 'up' : 'down')}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center gap-4 md:gap-2 text-left border p-5 md:p-7 dark:border-gray-800 hover:dark:border-gray-900 cursor-pointer"
            data-aos="reveal-right"
            key={index}
          >
            <picture>
              <img className="w-8 h-8 md:w-10 md:h-10 object-contain" src={skill.imageUrl} alt={skill.name} />
            </picture>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
