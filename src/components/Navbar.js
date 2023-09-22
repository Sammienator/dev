import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-900 font-bold text-3xl ">Samuel Mugo.</div>
        <div className="hidden md:flex underline">
          <a href="#hero" className="text-black mx-4">Home</a>
          <a href="#about" className="text-black mx-4">About</a>
        
          <a href="#contact" className="text-black mx-4">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
