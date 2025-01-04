import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-blue-400 to-transparent">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-white text-xl font-semibold">Brand Name</h1>
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
