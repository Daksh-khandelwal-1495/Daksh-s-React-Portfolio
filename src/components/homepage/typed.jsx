import React, { useEffect } from 'react';
import Typed from 'typed.js';

const MyComponent = () => {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: [
        "CS Undergrad",
        "Graphic Designer",
        "WEB3 Enthusiast",
        "AI-ML Enthusiast",
        "Learner",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Clean up the Typed instance when component unmounts
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span id="element"></span>
    </div>
  );
};

export default MyComponent;
