import React, { useState } from 'react';
import { TfiFlickrAlt, TfiClose, TfiArrowRight, TfiArrowLeft} from "react-icons/tfi";
import { TfiAlignRight } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import logo from "../assets/mikearemu.png"


// Menu animation variants
const menuVariants = {
    open: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.5 } 
    },
    closed: { 
        opacity: 0, 
        x: "100%", 
        transition: {   delay:  1, duration: 0.5 } 
    },
};

// Staggered menu item animation variants
const itemVariants = {
     
   

    open: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.2, // Staggered delay based on index
            duration: 0.3,
            ease: 'easeInOut',
        },
    }),

    closed: (i) => ({
        opacity: 0,
        x: 100,
        transition: {
            delay: i * 0.2, // Staggered delay based on index
            duration: 0.3,
            ease: 'easeInOut',
        },
    }),
};

// Menu items
const menuItems = [ 'About Me', 'Portfolio', 'Quote', 'Blog', 'Contact Me'];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative z-50 py-3">
            {/* Navbar Container */}
            <div className="fixed top-10 left-0 right-0 w-9/12 lg:w-7/12  mx-auto px-4 py-4 backdrop-blur-md flex justify-between items-center z-30">
                {/* Logo */}
                <div className="flex items-center flex-shrink-0">
                    <Link to="/">
                        <span className="text-2xl font-semibold text-gray-800 flex items-center">
                            <div className="w-10 mr-2 bg-orange-600 p-1 rounded-lg "> <img src={logo} alt="logo" className='' /></div>
                        Mike 
                            
                        </span>
                    </Link>
                </div>

                {/* Menu Toggle Button */}
                <motion.button
                    onClick={toggleMenu}
                    whileHover={{ scale: 0.8 }}
                    whileTap={{ scale: 1.3 }}
                    className="text-gray-800 text-3xl focus:outline-none"
                >
                    {isOpen ? <TfiArrowLeft /> : <TfiAlignRight />}
                </motion.button>
            </div>

            {/* Responsive Mobile Menu */}

            
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
                className="fixed right-0 top-0 w-full md:w-1/3 lg:w-1/4 h-screen bg-orange-600 text-white z-40 flex flex-col justify-center items-center"
            >
                 <motion.button
                    onClick={toggleMenu}
                    whileHover={{ scale: 0.8 }}
                    whileTap={{ scale: 1.3 }}
                    className="text-gray-100 z-50 top-20 absolute right-20 text-3xl focus:outline-none"
                >
                    {isOpen ? <TfiClose /> : <TfiArrowRight />}
                </motion.button>
                
                <div className="text-2xl md:text-2xl lg:text-3xl font-light space-y-8"
                >
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            animate={isOpen ? "open" : "closed"}
                            variants={itemVariants}
                            className="hover:scale-x-50 hover:underline-offset-4  hover:underline"
                        >
                            <Link
                                onClick={toggleMenu}
                                className="block"
                                to={`/${item.replace(/\s+/g, '').toLowerCase()}`}
                            >
                                {item}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
