import React,{useEffect} from "react";
import { FaGithub, FaLink } from 'react-icons/fa';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';


const projects = [
  {
    title: 'Shirleys Amazing World',
    description: 'Personal portfolio Project built with REACT BOOTSTRAP, JSX, JAVASCRIPT',
    imageUrl: 'https://www.mikekasberg.com/images/posts/ultimate-dev-machine-full.jpg', // Replace with your project image URL
    githubUrl: 'https://github.com/Sammienator/shirl',
    liveDemoUrl: 'https://shirleyyy.netlify.app/',
  },
  {
    title: 'The Ultimate Experience.',
    description: 'An Events an Entertainment Landing page Project built with BOOTSTRAP5, CSS3, AOS Animations',
    imageUrl: 'https://www.popsci.com/uploads/2021/08/26/feliphe-schiarolli-oeHaXN3WiLk-unsplash-scaled.jpg?auto=webp&width=1440&height=957.375', // Replace with your project image URL
    githubUrl: 'https://github.com/Sammienator/gaitho',
    liveDemoUrl: 'https://gaitho.netlify.app/',
  },
  {
    title: 'Building....NOW!',
    description: 'A Construction and Real Estate Company website Project built with HTML5 CSS3 BOOTSTRAP 5.1 AND AOS ',
    imageUrl: 'https://cdn.standardmedia.co.ke/images/thursday/xyjfm65hwf9p3h5bd172f16ab96.jpg', // Replace with your project image URL
    githubUrl: 'https://github.com/Sammienator/elite',
    liveDemoUrl: 'https://eliteconstruction.netlify.app/',
  },
  // Add more projects as needed
];

const ProjectSection = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 data-aos="flip-down" data-aos-easing="ease-in-out" data-aos-delay="500" data-aos-duration="2000" className="text-4xl font-bold text-center mb-6 underline">My Projects</h2>
        <p data-aos="flip-down" data-aos-easing="ease-in-out" data-aos-delay="1000" data-aos-duration="3000" className=" font-bold text-center mb-6"> This is a dedicated section showcasing a collection of my completed and ongoing work. It showcases my expertise, creativity, and capabilities to potential employers, clients, and/or collaborators. It provides a comprehensive view of my capabilities, skills, and expertise by displaying the work i have done in the past or work i am currently engaged in. </p>
        <div data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-delay="1000" data-aos-duration="3000"  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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