import React, { useState, useEffect } from 'react';


const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePointerPosition = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    // Event listener to track mouse movement
    document.addEventListener('mousemove', updatePointerPosition);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', updatePointerPosition);
    };
  }, []);

  // Add hover effects on links or buttons
  useEffect(() => {
    const addHoverEffect = () => setIsHovering(true);
    const removeHoverEffect = () => setIsHovering(false);

    const links = document.querySelectorAll('a, button');

    links.forEach((link) => {
      link.addEventListener('mouseenter', addHoverEffect);
      link.addEventListener('mouseleave', removeHoverEffect);
    });

    // Cleanup hover effect listeners
    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', addHoverEffect);
        link.removeEventListener('mouseleave', removeHoverEffect);
      });
    };
  }, []);

  return (
    <div
      className={`custom-pointer ${isHovering ? 'active' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default Cursor;
