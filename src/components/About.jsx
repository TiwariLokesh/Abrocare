import React from "react";
import Ss from '../assets/screenshot.png'

export const About = () => {
  const aboutData = {
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    
      Why: [
      "Lorem ipsum dolor",
      "Tempor incididunt",
      "Lorem ipsum dolor",
     "Aliquip ex ea commodo",
    ],
    Why2: [
      "Aliquip ex ea commodo",
      "Lorem ipsum dolor",
      "Exercitation ullamco",
      "Lorem ipsum dolor",
    ],
  };

  return (
    <div id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Image */}

          <div className="w-full lg:w-1/2">
          
            <img
              src={Ss}
              alt="About Us"
              className="rounded-lg shadow-md object-cover w-full h-auto"
            />
          </div>

          

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="about-text">
            
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                About Us
                
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {aboutData.paragraph}
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h3>

              <div className="flex flex-col sm:flex-row gap-6">
                {/* Left List */}
                <ul className="list-disc pl-6 text-gray-600">
                  {aboutData.Why.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="list-disc pl-6 text-gray-600">
                  {aboutData.Why2.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
