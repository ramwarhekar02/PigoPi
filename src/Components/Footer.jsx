import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo1 from '../assets/logo1.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative z-10">

      {/* Gradient overlay for a stylish touch */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#311b3f] to-transparent opacity-30 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-6 z-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* About Section */}
          <div className="flex-1">
            <img className='w-24 h-22' src={logo1} alt="" />
            <p className="text-gray-400 px-4">
              Elevate your digital presence with cutting-edge web design and development services.
            </p>
          </div>

          {/* Get in Touch Section */}
          <div className="flex-1">
            <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-6 shadow-xl">
              <h4 className="text-xl font-semibold mb-2">Get in touch with us</h4>
              <p className="text-sm text-gray-200 mb-4">
                Have any questions or need help? We're here to assist you.
              </p>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:info@pigo-pi.com"
                  className="text-lg text-gray-50 hover:text-white transition"
                >
                  info@pigo-pi.com
                </a>
              </div>
              {/* <div
              id='#contact'
                className="mt-4 inline-block px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition duration-300"
              >
                Contact Now
              </div> */}
            </div>
          </div>

          {/* Legal Links Section */}
          <div className=" order-last md:order-none">
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-gray-300 transition duration-300">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-gray-300 transition duration-300">
                  Refund Policy
                </Link>
              </li>   
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-300 transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-gray-300 transition duration-300">
                  Terms &amp; Conditions
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
        
        {/* Divider & Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PigoPi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;