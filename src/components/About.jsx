import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <section className='my-20  '>
            <div className=" my-4  " >
                <h1 className="text-wrap mb-2 leading-none text-4xl text-gray-800  ">
                    About Mike
                </h1>
                <p className=" text-xl text-gray-800">
                    Read some litte Biography about me
                </p>

            </div>

            <div className=" my-5">
                <div className=" ">

                    <p className=" text-lg lg:text-1xl  text-gray-800 ">
                        My professional journey has afforded me the privilege of serving as a frontend engineer for diverse enterprises, including a music agency, an event planning company, a financial solutions provider, and internal management software projects. Presently, I hold the position of Frontend Engineer at Delbimax Websolution, and also as a Brand Designer at Macre8tive Design and BrandOuse where I contribute to the creation of accessible digital experiences connecting students with companies seeking their services.

                    </p>

                    <Link to="/aboutme" className="text-orange-600 my-10 flex gap-10 dark:text-orange-500 hover:underline font-medium text-lg inline-flex items-center">
                        Read more <GoArrowRight />

                    </Link>

                </div>


            </div>


        </section>


    )
}

export default About