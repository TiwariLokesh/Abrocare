import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-blue-400 to-transparent">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-[15px] font-semibold">Brand Name</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500 p-4">
          <button className="w-full px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
