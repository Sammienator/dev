import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>
              We are a team of passionate developers creating amazing web experiences and applications.
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#b">Home</a></li>
              <li className="mb-2"><a href="#b">About</a></li>
              <li className="mb-2"><a href="#b">Services</a></li>
              <li className="mb-2"><a href="#b">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
