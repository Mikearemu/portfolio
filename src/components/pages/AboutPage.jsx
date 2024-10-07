import React from 'react'

import Footer from '../Footer';
import mike from '../../assets/mikearemu.jpg'
import macre8tive from '../../assets/macre8tive.png'
import skills from '../../datas/skillsData.js';

import { motion } from "framer-motion";

const imageVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        },
    },
});

const AboutPage = () => {

    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                </svg>
            ),
            title: "Respect",
            desc: "I value the trust my clients place in me and always strive to deliver my best."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                </svg>
            ),
            title: "Learning",
            desc: "I continuously expand my knowledge by learning new skills, tools, and techniques every day."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h6m-6-8h6M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: "Functionality",
            desc: "I create products that are functional and easy for my clients to manage."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m-6 6l6-6-6-6" />
                </svg>
            ),
            title: "Efficiency",
            desc: "I prioritize delivering results swiftly, knowing that time is crucial."
        },
    ];

    return (
        <section>
            <div className="space-y-5 my-10 max-w-4xl mx-auto text-center">

                <h2 className="text-4xl  text-gray-800  font-extrabold mx-auto md:text-5xl"> Meet
                    <span className="text-transparent bg-clip-text bg-orange-600"> Mike Aremu </span>
                </h2>
            </div>

            <div className="mt-12 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className=" p-2 md:p-5 ">
                    <a href="/" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                        <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                        </svg>
                        Design
                    </a>
                    <h2 className="text-gray-900 text-2xl lg:text-3xl  mb-2">
                        Starting with Design System
                    </h2>
                    <p className=" text-lg lg:text-1xl mb-5  dark: text-gray-800  ">

                        Hey there! I'm <b>MIKE AREMU,</b> a web developer and brand designer who enjoys all things technology. With 5+ years of expertise, I'm skilled at designing unique, responsive websites and web apps that are not only visually stunning, but also user-friendly and dependable.

                        For the past five years, I have been actively engaged in crafting digital solutions for global companies, ranging from small-scale websites to enterprise-level web applications. My focus revolves around ensuring quality, accessibility, and swift user experiences.
                    </p>

                    <p className="text-lg lg:text-1xl   text-gray-800 mb-4">
                        My professional journey has afforded me the privilege of serving as a frontend engineer for diverse enterprises, including a music agency, an event planning company, a financial solutions provider, and internal management software projects. Presently, I hold the position of Frontend Engineer at Delbimax Websolution, and also as a Brand Designer at Macre8tive Design and BrandOuse where I contribute to the creation of accessible digital experiences connecting students with companies seeking their services.

                    </p>
                    
                    <p className='text-gray-100 bg-orange-600 w-fit p-2'>Brand Name</p>

                    <img src={macre8tive} alt="Brand Logo" className='w-48 my-5' />

                </div>
                <motion.div variants={imageVariants(3)}
                className=' mx-auto rounded-lg overflow-hidden bg-orange-600  lg:w-full'
                    initial="initial"
                    animate="animate">
                    <img src={mike} className="object-fit" alt="" />
                </motion.div>
            </div>


            <div className="mt-10 mx-auto max-w-screen-xl items-center lg:flex md:px-8">
                <div className="p-2 md:p-5">
                    <p className='uppercase '>How Do You Work?</p>
                    <h2 className="text-gray-800  text-3xl font-semibold sm:text-4xl">

                        My Work Process</h2>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-3 gap-0 cursor-pointer">
                    {["Discuss", "Perfect", "Create", "Prototype", "Analysis", "Deploy"].map((step, index) => (
                        <div
                            key={index}
                            className=" p-5 cursor-pointe hover:border-transparent hover:border-gradient transition duration-300 ease-in-out"
                        >
                            <span className='flex items-center'>
                                <span className='my-1 p-2 w-fit text-2xl  text-gray-800 cursor-pointer'>0.{index + 1}</span>
                                <hr className='w-9/12 mx-7' />
                            </span>
                            <h5 className="mb-2 text-3xl  dark: text-gray-800 ">
                                {step}
                            </h5>
                            <p className="mb-3  text-base text-gray-700 ">
                                {index === 0 ? "Establish project phases and specifications." :
                                    index === 1 ? "Investigation and brainstorming." :
                                        index === 2 ? "Wireframes, Product Designs." :
                                            index === 3 ? "Test Responsiveness and Solutions." :
                                                index === 4 ? "Analyze Result and Corrections." :
                                                    "Delivery and deploy Product."}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <section className="relative pt-28">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-900 justify-between items-center gap-24 lg:flex md:px-8">
                    <div className="max-w-xl">
                        <p className='uppercase '>  Why Work With Me?</p>
                        <h3 className="  text-gray-800  text-3xl font-semibold sm:text-4xl">
                            Why My Clients Choose Me?
                        </h3>

                    </div>
                    <div className="mt-12 lg:mt-0">
                        <ul className="grid gap-8 sm:grid-cols-2">
                            {
                                features.map((item, idx) => (
                                    <li key={idx} className="flex gap-x-4">
                                        <div className="flex-none w-12 h-12 bg-orange-600  text-gray-100   flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg  text-gray-800  font-semibold">
                                                {item.title}
                                            </h4>
                                            <p className="mt-3">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="relative pt-28 z-10 max-w-screen-xl mx-auto px-4 text-gray-800 justify-between items-center gap-24 lg:flex md:px-8">
                    <div className="max-w-xl">
                        <p className='uppercase '> Softwares I work with</p>
                        <h3 className="text-gray-800  text-3xl font-semibold sm:text-4xl">
                            Technologies
                        </h3>

                    </div>
                    <div className="grid grid-cols-2 mt-12 lg:mt-0 md:grid-cols-4 ">
                        {skills.map((skill, index) => (
                            <div
                                className="flex items-left gap-4 md:gap-2 text-left border p-5 md:p-7 dark:border-gray-800 hover:dark:border-gray-900 cursor-pointer"
                                data-aos="reveal-right"
                                key={index}
                            >
                                <picture>
                                    <img className="w-8 h-8 md:w-10 md:h-10 object-contain" src={skill.imageUrl} alt={skill.name} />
                                </picture>
                                {/* Hide text on smaller screens and show it on medium screens and above */}
                                <p className="  text-left text-lg md:text-xl ms-2 mb-0">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />

            </section>




        </section>



    )
}

export default AboutPage