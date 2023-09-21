import React,{useEffect} from "react";
import bestest2 from '../assets/bestest2.jpg'


// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const styles = {
    backgroundImage: `url(${bestest2})`,
  
  };

  
  return (
    <div id="hero" class="bg-cover bg-center opacity-95 h-screen relative" style={styles}>
    <div class="absolute inset-0 bg-black opacity-40"></div>
    <div class="absolute inset-0 flex items-center justify-center">
        <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="500" data-aos-duration="2000"  class="text-white text-center">
            <h1   class="text-6xl md:text-7xl font-bold underline">Samuel Mugo.</h1>
            <p class="mt-4 text-2xl md:text-xl underline font-extrabold">Junior Front-End Web Developer.</p>
            <p class="mt-4 text-2xl md:text-xl ">Hello, I'm a junior software developer with a passion for coding and problem-solving. I believe that every line of code is an opportunity to make the world a better place, and I'm dedicated to honing my craft and delivering high-quality software solutions."</p>
            <a href="#contact" class="mt-8 inline-block px-6 py-3 text-lg md:text-xl bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Hire Me!</a>
        </div>
    </div>
</div>

  );
};

export default Hero;
