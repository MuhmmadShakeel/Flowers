import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-800 text-white shadow-md">
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
            <Link
              to="/about"
              className="text-white hover:text-[#F5AD18] transition-colors duration-300"
            >
              About
            </Link>
            <a
              href="#contact"
              className="text-white hover:text-[#F5AD18] transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-[#F5AD18] focus:outline-none"></button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
