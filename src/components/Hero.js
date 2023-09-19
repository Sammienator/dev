import React from 'react';
import bestest2 from '../assets/bestest2.jpg'

const Hero = () => {

  const styles = {
    backgroundImage: `url(${bestest2})`,
  
  };

  
  return (
    <div class="bg-cover bg-center h-screen relative" style={styles}>
    <div class="absolute inset-0 bg-black opacity-40"></div>
    <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-white text-center">
            <h1 class="text-4xl md:text-6xl font-bold">Your Hero Title</h1>
            <p class="mt-4 text-lg md:text-xl">Your Hero Subtitle</p>
            <a href="#b" class="mt-8 inline-block px-6 py-3 text-lg md:text-xl bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Learn More</a>
        </div>
    </div>
</div>

  );
};

export default Hero;
