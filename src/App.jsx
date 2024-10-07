import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PortfolioPage from './components/pages/PortfolioPage';
import Quote from './components/pages/Quote';
import Home from './components/Home';
import Cta from './components/Cta';
import Navbar from './components/Navbar';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/Contact';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Hook for scroll-based animations
import ScrollToTop from './components/ScrollToTop';
import ProjectDetail from './components/pages/ProjectDetail';
import Blog from './components/pages/Blog';
import ViewBlog from './components/pages/ViewBlog';
import NotFoundPage from './components/pages/NotFoundPage';
import Preloader from './components/Preloader';
import BackgroundMusic from './components/BackgroundMusic';

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Simulate loading process or waiting for the content to render
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading for 2 seconds
  }, []);

  // Disable right-click globally
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };
    
    document.addEventListener('contextmenu', disableRightClick);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  // Scroll-based animation controls
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once the element comes into view
    threshold: 0.1,    // How much of the element should be visible before animation starts
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants for smooth scroll effects
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="relative h-full w-full bg-slate-100">
      <div className="bg-effect">

        {loading ? (
          <Preloader />  // Show the preloader while loading
        ) : (
          <>
            <Navbar />
            {/* <Cursor /> */}
            <ScrollToTop /> {/* Scroll to top on route change */}
            <BackgroundMusic />
            <div className="container px-5 h-auto w-full lg:px-20 mx-auto mt-32 z-10 relative">
              {/* Page Transition Animation */}
              <motion.div
                key={location.key}
                initial="hidden" // Initial animation state
                animate="visible" // Trigger animation when in view
                exit="hidden"
                variants={fadeInVariants} // Animation variants
              >
                {/* Route Definitions */}
                <Routes location={location}>
                  <Route path="/" element={<Home ref={ref} controls={controls} />} />
                  <Route path="/portfolio" element={<PortfolioPage ref={ref} controls={controls} />} />
                  <Route path="/aboutme" element={<AboutPage ref={ref} controls={controls} />} />
                  <Route path="/quote" element={<Quote />} />
                  <Route path="/projects/:title" element={<ProjectDetail />} />
                  <Route path="/contactme" element={<ContactPage />} />
                  <Route path='/blog' element={<Blog />} />
                  <Route path="/viewBlog/:title" element={<ViewBlog />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </motion.div>
            </div>
            <Cta />
          </>
        )}
      </div>
    </div>
  );
};

const WrappedApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default WrappedApp;
