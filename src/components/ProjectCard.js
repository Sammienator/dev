import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1 goes here.',
    imageUrl: 'https://www.mikekasberg.com/images/posts/ultimate-dev-machine-full.jpg', // Replace with your project image URL
    githubUrl: 'https://github.com/yourusername/project1',
    liveDemoUrl: 'https://www.example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2 goes here.',
    imageUrl: 'https://www.popsci.com/uploads/2021/08/26/feliphe-schiarolli-oeHaXN3WiLk-unsplash-scaled.jpg?auto=webp&width=1440&height=957.375', // Replace with your project image URL
    githubUrl: 'https://github.com/yourusername/project2',
    liveDemoUrl: 'https://www.example.com/project2',
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3 goes here.',
    imageUrl: 'https://cdn.standardmedia.co.ke/images/thursday/xyjfm65hwf9p3h5bd172f16ab96.jpg', // Replace with your project image URL
    githubUrl: 'https://github.com/yourusername/project2',
    liveDemoUrl: 'https://www.example.com/project2',
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-40 w-full bg-gray-300 flex items-center justify-center">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{project.title}</h2>
                <p className="text-gray-700 text-base">{project.description}</p>
              </div>
              <div className="px-6 py-4 flex justify-between">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  <FaGithub className="mr-1" /> GitHub
                </a>
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  <FaLink className="mr-1" /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;