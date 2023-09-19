import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-gray-200 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col items-center">
          <p className="max-w-2xl text-center mb-6">
            Hi! I'm a junior front-end developer passionate about creating web
            applications and user interfaces.
          </p>
          <h3 className="text-xl text-center font-bold mb-4">Technologies proficient in.</h3>
          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-4xl mb-2" />
              <span className="text-lg font-semibold">HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3 className="text-4xl mb-2" />
              <span className="text-lg font-semibold">CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <FaJs className="text-4xl mb-2" />
              <span className="text-lg font-semibold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-4xl mb-2" />
              <span className="text-lg font-semibold">React</span>
            </div>
          </div>


          <div className="max-w-md">
            <h3 className="text-xl text-center font-bold mb-4">Experience</h3>
            <p className="text-gray-700">
              I have experience working on various projects using modern web technologies and frameworks.
              My goal is to continue learning and growing as a developer.
            </p>
          </div>
        </div>          


      </div>
    </section>
  );
};

export default About;
