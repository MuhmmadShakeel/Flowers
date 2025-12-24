import React from 'react';

function Header() {
  return (
    <header className="relative bg-green-800 bg-cover bg-center h-screen flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5AD18] drop-shadow-lg">
          Bloom & Co.
        </h1>
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl drop-shadow-md">
          Fresh Flowers Delivered to Your Doorstep — Make Every Moment Special
        </p>
        <button className="mt-10 px-8 py-3 bg-[#F5AD18] text-green-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </header>
  );
}

export default Header;
