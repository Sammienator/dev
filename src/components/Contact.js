import React,{useEffect} from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="contact" className="bg-gray-100 py-12">
      <div data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-delay="1000" data-aos-duration="3000" className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>

        <div className="flex flex-col md:flex-row justify-center items-center mb-12">
          <div className="md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              <span>(254) 735-905492</span>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <span>sammugo18@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>P.O BOX 15799-00509,Nairobi, Kenya.

</span>
            </div>
          </div>

          <div className="md:w-2/3 md:ml-8">
            <h3 className="text-xl text-center font-bold mb-2">Get in Touch</h3>
          <p class="mt-4 text-lg text-center md:text-xl mb-2"> I am open for any suggestions, comments and clarifications or just to have a chat!

</p>
            <form className="flex flex-col mt-16 text-center">
              <label htmlFor="name" className="mb-2">Your Name</label>
              <input type="text" id="name" className="mb-4 p-2 rounded-lg" />

              <label htmlFor="email" className="mb-2">Your Email</label>
              <input type="email" id="email" className="mb-4 p-2 rounded-lg" />

              <label htmlFor="message" className="mb-2">Message</label>
              <textarea id="message" rows="5" className="mb-4 p-2 rounded-lg"></textarea>

              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
              Send Your Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
