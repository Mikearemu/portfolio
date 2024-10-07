import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { GoRead, GoPaperAirplane } from "react-icons/go";


const Footer = () => {
    const contactMethods = [
        {
            icon:
                <FaWhatsapp size={20} />
            ,
            title: "Whatsapp",

            link: {
                name: "Send me DM",
                href: "https://api.whatsapp.com/message/BMDBOOETRYAVE1"
            },
        },
        {
            icon:
            <FaLinkedinIn size={20} />
            ,
            title: "Connect with me",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            link: {
                name: "View Linkedin",
                href: "https://www.linkedin.com/in/mike-aremu-371938200/"
            },
        },
        {
            icon:
            <FaTwitter size={20} />

            ,
            title: "Follow us on X",

            link: {
                name: "Send me DM",
                href: "https://twitter.com/find_x_mike"
            },
        },
      
    ]

    return (
        <section className="py-14">
            <hr className=' border my-10 dark:border-gray-500 ' />
            <div className="max-w-screen-xl mx-auto px-4 text-gray-800 gap-12 md:px-8 lg:flex items-center">

                <div className="max-w-md">
                    <h3 className="text-gray-900 text-3xl flex items-center flex-wrap gap-5  font-semibold sm:text-4xl">
                        Let’s connect   
                         <div className="flex gap-10">
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/profile.php?id=100013545663674&mibextid=LQQJ4d"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-gray-800  hover:text-blue-600"
                        >
                            <FaFacebookF size={20} />
                        </a>

                        {/* Twitter */}
                        <a
                            href="https://twitter.com/find_x_mike"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-gray-800  hover:text-blue-400"
                        >
                            <FaTwitter size={20} />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/mike-aremu-371938200/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-gray-800  hover:text-blue-700"
                        >
                            <FaLinkedinIn size={20} />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/macre8tive"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-gray-800  hover:text-pink-500"
                        >
                            <FaInstagram size={20} />
                        </a>

                        <a
                            href="https://github.com/macre8tive"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-gray-800  hover:text-pink-500"
                        >
                            <FaGithub size={20} />
                        </a>
                    </div>
                    </h3>
                    <p className="my-3">
                        We’re here to help and answer any question you might have, We look forward to hearing from you .
                    </p>
                    <div className="flex gap-5 flex-wrap">
                        <a href="mailto:dev@mikearemu.com.ng" className='inline-flex gap-6 items-center'><GoRead /> <span>dev@mikearemu.com.ng</span></a>

                        <a href="tel:+2349010786146" className='inline-flex gap-6 items-center' > <GoPaperAirplane /><span> +234 (0) 901 078 6146</span> </a>
                    </div>

                 
                </div>
                <div>
                    <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
                        {
                            contactMethods.map((item, idx) => (
                                <li key={idx} className="space-y-3 border-t border-gray-800 py-5 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
                                    <div className="w-12 h-12 rounded-full border-s-4  border-gray-800  flex items-center justify-center text-gray-800">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-gray-800 text-1xl font-medium ">
                                        {item.title}
                                    </h4>

                                    <a href={item.link.href} target='_blank' className="flex items-center gap-1 text-lg text-orange-600 duration-150 hover:text-red-400 font-medium">
                                        {item.link.name}
                                        
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>


        </section >
    )
}

export default Footer