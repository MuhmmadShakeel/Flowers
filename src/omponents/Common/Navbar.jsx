import React from 'react';

function Navbar() {
  return (
    <nav className="bg-[#4C763B] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl sm:text-3xl font-bold tracking-wide text-[#F5AD18]">
              Bloom & Co.
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#home"
              className="text-white hover:text-[#F5AD18] transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#shop"
              className="text-white hover:text-[#F5AD18] transition-colors duration-300"
            >
              Shop
            </a>
            <a
              href="#about"
              className="text-white hover:text-[#F5AD18] transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#F5AD18] transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-[#F5AD18] focus:outline-none">
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
