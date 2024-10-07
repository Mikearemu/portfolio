import React, { useRef } from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Skill from './Skill';
import Testimonials from './Testimonial';

const Home = () => {
    // Refs for different sections (optional if you're not using them)
    const heroRef = useRef(null);
    const experienceRef = useRef(null);
    const aboutRef = useRef(null);
    const skillRef = useRef(null);
    const portfolioRef = useRef(null);
    const testimonialsRef = useRef(null);
    const footerRef = useRef(null);

    return (
        <>
            <div ref={heroRef}>
                <Hero />
            </div>

            <div ref={experienceRef}>
                <Experience />
            </div>

            <div ref={portfolioRef}>
                <Portfolio />
            </div>

            <div ref={skillRef}>
                <Skill />
            </div>

            <div ref={aboutRef}>
                <About />
            </div>

            <div ref={testimonialsRef}>
                <Testimonials />
            </div>

            <div ref={footerRef}>
                <Footer />
            </div>
        </>
    );
};

export default Home;
