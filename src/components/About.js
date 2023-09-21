import React,{useEffect} from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="about" className="bg-gray-200 py-16">
      <div className="container mx-auto">
        <h2 data-aos="fade-down"data-aos-easing="ease-in-out" data-aos-delay="700" data-aos-duration="2000" className="text-6xl font-bold text-center mb-8 underline">About Me!</h2>
        <div  className="flex flex-col items-center">
          <p data-aos="fade-down"data-aos-easing="ease-in-out" data-aos-delay="1000" data-aos-duration="3000" className="max-w-2xl text-center mb-6">
            Hi! I'm a junior front-end developer passionate about creating web
            applications and user interfaces.
            For most part of my career i am involved in a broad range of tasks from coding, to technical design, to performance of a website or the application running on the internet.Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.
          </p>
          <h3 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="1000" data-aos-duration="3000"  className="text-4xl text-center font-bold mb-4 mt-24">Technologies proficient in.</h3>
          <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="1000" data-aos-duration="3000"  className="text-center font-bold mb-4"> Over the years, i have been able to acquire certain skills and competencies in the below languages and frameworks.</p>
          <div data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="1000" data-aos-duration="3000"   className="flex justify-center space-x-6">
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


          <div data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-delay="1000" data-aos-duration="3000"  className="max-w-sm">
            <h3 className="text-2xl text-center font-bold mt-24  mx-4 mb-8 underline">Experience</h3>
            <p className=" text-center">
            I am a responsible, self-motivated person, who aspires to achieve both organisational and personal goals that may be presented to me.  
              
            </p>
            
            <p className=" text-center">I am a self Taught front-end developer. I primarily focus on writing simple, clean, elegant and efficient code . I have just over 3 years of experience as a front-end developer . </p>
            <p className=" text-center"> As a self taught developer, I have contributed to over a dozen projects and repositories through out my career. I am also able to review existing code as well as help in consultations on how to improve it.</p>
        
            
          </div>
        </div>          


      </div>
    </section>
  );
};

export default About;
