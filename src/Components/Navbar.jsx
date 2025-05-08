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
        <div className="hidden xl:flex gap-10 text-white">
          <Link to="/">Home</Link>
          <a href="#about" onClick={e => handleAnchorClick(e, '#about')}>About Us</a>
          <a href="#events" onClick={e => handleAnchorClick(e, '#events')}>Events</a>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <a href="#contact" onClick={e => handleAnchorClick(e, '#contact')}>Contact Now</a>
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
