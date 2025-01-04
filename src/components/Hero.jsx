import React from 'react';
import heroImage from '../assets/hero.png'; // Replace with your image path

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Pathway to Productivity
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your success.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
              Get for Free
            </button>
            <button className="px-6 py-3 bg-gray-100 text-black rounded-lg hover:bg-gray-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-6 md:mt-0">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-md mx-auto md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
