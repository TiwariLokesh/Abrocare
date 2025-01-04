import React from "react";
import { AcademicCapIcon, Cog6ToothIcon, ChartBarIcon, HeartIcon } from "@heroicons/react/24/outline"; // Updated for Heroicons v2

export const Features = () => {
  // Manually define features data
  const features = [
    {   
      icon: <AcademicCapIcon className="h-12 w-12 text-blue-500" />,
      title: "Easy Learning",
      text: "Master your skills with easy-to-follow guides and resources.",
    },
    {
      icon: <Cog6ToothIcon className="h-12 w-12 text-green-500" />,
      title: "Customizable",
      text: "Personalize the app to suit your workflow and preferences.",
    },
    {
      icon: <ChartBarIcon className="h-12 w-12 text-purple-500" />,
      title: "Performance",
      text: "Track your progress and improve with detailed analytics.",
    },
    {
      icon: <HeartIcon className="h-12 w-12 text-red-500" />,
      title: "Community Support",
      text: "Connect with a supportive community to stay motivated.",
    },
  ];

  return (
    <div id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Features</h2>
          <p className="text-gray-600 mt-4">
            Explore what makes our app stand out and helps you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
