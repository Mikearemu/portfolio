import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import testimonials from '../datas/testimonialData.js';

const Testimonials = () => {
  



    return (
        <div className=" my-8  text-gray-200 relative">
            <div className="text-left ">
                <h1 className="text-wrap mb-7 text-4xl text-gray-800 ">
                    Testimonials
                </h1>

                <p className="mt-4  text-xl text-gray-800">
                    Hear what our clients have to say about working with us.
                </p>
                
            </div>

            <div
                className="container mx-auto h-fit mt-10 relative">
                <div className="grid grid-cols-1 relative max-h-fit  items-center justify-center  gap-5 w-full">
                    {testimonials.map((testimonial, id) => {

                        return (
                            <motion.div key={testimonial.id} className=' m-auto top-0 left-0 right-0 sticky z-50 lg:w-5/12 w-full  '>
                                <div className="relative p-10  bg-orange-600  items-center px-5  ">


                                    <p className="text-gray-100 text-xl  text-center mb-6">
                                        "{testimonial.feedback}"
                                    </p>
                                    <div className="flex items-center flex-col justify-center items-center mb-4">
                                      
                                        <div className='text-center'>
                                            <h3 className="font-semibold">{testimonial.name}</h3>
                                            <p className="text-1xl font-normal text-gray-100">{testimonial.designation}</p>
                                        </div>
                                    </div>

                                </div>

                            </motion.div>

                        );
                    })}
                   
                </div>
                {/* Optional manual navigation */}

            </div>


        </div>
    );
};

export default Testimonials;
