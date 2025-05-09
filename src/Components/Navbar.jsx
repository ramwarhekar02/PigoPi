import React, { useState, useEffect, useRef } from 'react';
import logo1 from '../assets/logo1.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      setShowNavbar(window.scrollY < lastScrollY.current);
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-transform duration-500 bg-black/20 backdrop-blur-xl ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <img src={logo1} alt="logo" className="w-24 h-22" />

        {/* Desktop Nav */}
          <div className="hidden xl:flex xl:items-center xl:justify-between font-[Host_Grotesk] text-lg gap-20 bg-black/80 px-6 py-2 rounded-xl text-white">
            <Link
              to="/"
              className="relative group transition-all duration-300"
            >
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-300">
                Home
              </span>
              <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span>
            </Link>

            <a
              href="#about"
              onClick={e => handleAnchorClick(e, '#about')}
              className="relative group transition-all duration-300"
            >
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-300">
                About Us
              </span>
              <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span>
            </a>

            <a
              href="#events"
              onClick={e => handleAnchorClick(e, '#events')}
              className="relative group transition-all duration-300"
            >
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-300">
                Events
              </span>
              <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span>
            </a>

            <Link
              to="/privacy-policy"
              className="relative group transition-all duration-300"
            >
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-300">
                Privacy Policy
              </span>
              <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span>
            </Link>

            <Link
              to="/terms-conditions"
              className="relative group transition-all duration-300"
            >
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-300">
                Terms <span className="font-mono">&</span> Conditions
              </span>
              <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span>
            </Link>
        <a
          href="#contact"
          className="relative px-8 py-2 font-bold text-lg text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-xl group overflow-hidden transition-all duration-300"
          onClick={e => handleAnchorClick(e, '#contact')}
        >
          {/* Glow effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out scale-125 group-hover:scale-100 blur-md"></span>

          {/* Shine effect */}
          <span className="absolute inset-0 z-0 bg-white/10 group-hover:animate-pulse"></span>

          <span className="relative z-10">Contact Now</span>
        </a>
          </div>


        {/* Mobile Icon */}
        <div className="xl:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-black/80 h-screen text-white flex flex-col items-center gap-6 py-6">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <a href="#about" onClick={e => handleAnchorClick(e, '#about')}>About Us</a>
          <a href="#events" onClick={e => handleAnchorClick(e, '#events')}>Events</a>
          <Link to="/privacy-policy" onClick={() => setMenuOpen(false)}>Privacy Policy</Link>
          <Link to="/terms-conditions" onClick={() => setMenuOpen(false)}>Terms & Conditions</Link>
          <a href="#contact" className='bg-blue-500 px-12 rounded-xl py-2' onClick={e => handleAnchorClick(e, '#contact')}>Contact Now</a>
        </div>
      )}
    </div>
  );
};

export default Header;
