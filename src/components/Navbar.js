import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Samuel Mugo.</div>
        <div className="hidden md:flex">
          <a href="#b" className="text-white mx-4">Home</a>
          <a href="#b" className="text-white mx-4">About</a>
          <a href="#b" className="text-white mx-4">Services</a>
          <a href="#b" className="text-white mx-4">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
