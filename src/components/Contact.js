import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

        <div className="flex flex-col md:flex-row justify-center items-center mb-12">
          <div className="md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <span>example@example.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>1234 Street, City, Country</span>
            </div>
          </div>

          <div className="md:w-2/3 md:ml-8">
            <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
            <form className="flex flex-col">
              <label htmlFor="name" className="mb-2">Your Name</label>
              <input type="text" id="name" className="mb-4 p-2 rounded-lg" />

              <label htmlFor="email" className="mb-2">Your Email</label>
              <input type="email" id="email" className="mb-4 p-2 rounded-lg" />

              <label htmlFor="message" className="mb-2">Message</label>
              <textarea id="message" rows="5" className="mb-4 p-2 rounded-lg"></textarea>

              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
