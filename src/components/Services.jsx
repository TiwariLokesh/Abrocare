import React from "react";
import { AcademicCapIcon, Cog6ToothIcon, ChartBarIcon, HeartIcon } from "@heroicons/react/24/outline";
import ServiceImg from '../assets/service.png'
const Services = () => {
  const services = [
    {
      icon: <AcademicCapIcon className="h-12 w-12 text-blue-500" />,
      title: "GIC",
      text: "Guaranteed Investment Certificate solutions tailored for international students to make studying abroad hassle-free.",
    },
    {
      icon: <Cog6ToothIcon className="h-12 w-12 text-green-500" />,
      title: "Forex",
      text: "Get the best foreign exchange rates and secure your finances for international transactions with ease.",
    },
    {
      icon: <ChartBarIcon className="h-12 w-12 text-purple-500" />,
      title: "Immigration",
      text: "Comprehensive immigration services to help you move seamlessly to your desired destination.",
    },
    {
      icon: <HeartIcon className="h-12 w-12 text-red-500" />,
      title: "Support",
      text: "Dedicated support to help you with all your needs.",
    },
  ];

  return (
    <div id="services" className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Left Content with Cards */}
        <div className="flex flex-col w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Top Row of Cards */}
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
              {services[0].icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{services[0].title}</h3>
              <p className="text-gray-600 mt-2">{services[0].text}</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
              {services[1].icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{services[1].title}</h3>
              <p className="text-gray-600 mt-2">{services[1].text}</p>
            </div>

            {/* Bottom Row of Cards */}
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
              {services[2].icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{services[2].title}</h3>
              <p className="text-gray-600 mt-2">{services[2].text}</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
              {services[3].icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{services[3].title}</h3>
              <p className="text-gray-600 mt-2">{services[3].text}</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative h-full">
            <div className="bg-blue-500 flex items-end justify-center lg:h-[550px] lg:w-[400px] ">
              <img
                src={ServiceImg}
                alt="Person Illustration"
                className="lg:h-[450px]   object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
