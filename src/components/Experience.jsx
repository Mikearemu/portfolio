import React from 'react'
import experiences from '../datas/experienceData.js'

const Experience = () => {
    return (
        <section className='my-9'>
            <h1 className="text-wrap mb-7 text-4xl  text-gray-800 ">
                Experience
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {experiences.map((experience, id) => {
                    return (
                        <div
                            key={id}
                            className="backdrop-blur p-3 cursor-pointer  "
                        >
                            <p className='bg-orange-600 my-5 p-2 w-fit cursor-pointer '>{experience.duration}</p>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                {experience.title}
                            </h5>
                            <p className="mb-3 font-normal text-lg text-gray-700 ">
                                {experience.content}
                            </p>
                        </div>
                    )
                })}
            </div>

            <h1 className="text-wrap mb-7 text-4xl my-7   text-gray-800  ">
                My Working Process
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-0 cursor-pointer">
                {["Discuss", "Perfect", "Create", "Prototype", "Analysis", "Deploy"].map((step, index) => (
                    <div
                        key={index}
                        className="backdrop-blur p-5 cursor-pointer   ease-in-out"
                    >
                        <span className='flex items-center'>
                            <span className='my-1 p-2 w-fit text-2xl  text-gray-800 cursor-pointer'>0.{index + 1}</span>
                            <hr className='w-9/12 mx-7 bg-gray-800' />
                        </span>
                        <h5 className="mb-2 text-3xl lg:text-5xl  text-gray-800  ">
                            {step}
                        </h5>
                        <p className="mb-3 font-normal text-gray-800 ">
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
        </section>
    )
}

export default Experience
