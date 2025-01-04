import React from "react";
import Ss from '../assets/screenshot.png'

export const Screenshot = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        {/* Top Tagline */}
        <p className="text-sm font-medium text-gray-600 mb-4">
          Boost your productivity
        </p>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          A more effective way<br/> <p className="text-blue-800">to track progress</p>
        </h2>

        {/* Subheading/Description */}
        <p className="text-lg text-gray-600 mb-10">
          Effortlessly turn your ideas into a fully functional, responsive SaaS
          website in just minutes with this template.
        </p>

        {/* Placeholder for Screenshot */}
        <div className="relative">
          <img
            src={Ss} // Replace with your actual image path
            alt="App Screenshot"
            className="rounded-lg shadow-md object-cover w-full max-w-4xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
