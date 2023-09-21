import React,{useEffect} from "react";
import { FaMailBulk, FaTwitter, FaLinkedin } from 'react-icons/fa';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-lg  font-bold">Samuel Mugo</h2>
          <p className="text-sm mt-2 max-w-sm mb-8">With a solid foundation in programming languages and a commitment to continuous learning,
I'm eager to collaborate with experienced developers and contribute to projects that make a meaningful impact.</p>
        </div>

        
        <div className="flex mt-4 lg:mt-0">
       
          
          <a href="https://github.com/Sammienator" target="_blank" rel="noopener noreferrer" className="mx-2 text-3xl ">
            <FaMailBulk />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-3xl ">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-2 text-3xl">
            <FaLinkedin/>
          </a>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Samuel Mugo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

