import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo1 from '../assets/logo1.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white py-12 relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#311b3f] to-transparent opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* About Section */}
          <motion.div className="flex-1" variants={fadeInUp}>
            <img className="w-24 h-22 mb-4" src={logo1} alt="PigoPi Logo" />
            <p className="text-gray-400 px-2">
              Elevate your digital presence with cutting-edge web design and development services.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition transform hover:scale-110 text-xl">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition transform hover:scale-110 text-xl">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition transform hover:scale-110 text-xl">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-sky-400 transition transform hover:scale-110 text-xl">
                <FaTwitter />
              </a>
            </div>
          </motion.div>

          {/* Get in Touch Section */}
          <motion.div className="flex-1" variants={fadeInUp}>
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
            </div>
          </motion.div>

          {/* Legal Links Section */}
          <motion.div className="order-last md:order-none" variants={fadeInUp}>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-gray-300 transition duration-300">Career</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-gray-300 transition duration-300">Refund Policy</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-300 transition duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-gray-300 transition duration-300">Terms & Conditions</Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="mt-10 border-t border-gray-700 pt-4 text-center"
          variants={fadeInUp}
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PigoPi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
