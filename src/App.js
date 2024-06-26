import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import ProjectCard from "./components/ProjectCard";
import Contact from './components/Contact';
import Footer from "./components/Footer";


function App() {
  
 
  return (
    <>
    
       <Navbar />
      <Hero/>
      <About/>
 
      <ProjectCard/>
      <Contact/>
      <Footer/>
   
    </>
  );
}

export default App;
