import React, { useState, useEffect, useRef } from 'react';
import logo1 from '../assets/logo1.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: "Home", href: "#home", type: "anchor" },
  { label: "About Us", href: "#about", type: "anchor" },
  { label: "Events", href: "#events", type: "anchor" },
  { label: "Privacy Policy", href: "/privacy-policy", type: "route" },
  { label: "Terms & Conditions", href: "/terms-conditions", type: "route" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY < lastScrollY.current) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle anchor navigation from any page
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: href } });
      } else {
        const el = document.getElementById(href.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setMenuOpen(false);
    }
  };

  return (
    <div
      className={`w-full bg-black/20 backdrop-blur-xl fixed top-0 z-50 transition-transform duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="relative w-full z-50 max-w-7xl mx-auto px-6 py-2 rounded-2xl shadow-xl flex items-center justify-between overflow-hidden"> 
        <img
          className="w-24 h-22 z-10 hover:rotate-360 hover:scale-110 transition-transform duration-1000"
          src={logo1}
          alt="logo"
        />
        <div className="hidden xl:flex px-10 z-10 items-center font-bold rounded-xl justify-center bg-black/30 backdrop-blur-sm shadow-inner">
          <nav className="flex gap-20 items-center">
            {navItems.map((item, idx) =>
              item.type === "route" ? (
                <Link
                  key={idx}
                  to={item.href}
                  className="group relative font-[Host_Grotesk] text-white text-lg py-2 transition-all duration-300"
                >
                  <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300">
                    {item.label}
                  </span>
                  <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span>
                </Link>
              ) : (
                <a
                  key={idx}
                  href={item.href}
                  className="group relative font-[Host_Grotesk] text-white text-lg py-2 transition-all duration-300"
                  onClick={e => handleNavClick(e, item.href)}
                >
                  <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300">
                    {item.label}
                  </span>
                  <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span>
                </a>
              )
            )}
          </nav>
        </div>

        {/* Contact Now Button */}
        <a
          href="#contact"
          className="relative hidden xl:inline-block z-10 font-[Host_Grotesk] text-white text-lg font-semibold px-6 py-2 rounded-xl
                     bg-gradient-to-r from-purple-500 to-pink-500
                     overflow-hidden group transition-all duration-700 ease-in-out"
          onClick={e => handleAnchorClick(e, "#contact")}
          >
          {/* Glowing Animated Background */}
          <span
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out
                      scale-125 group-hover:scale-100 blur-md"
          ></span>

          {/* Animated Gradient Shine */}
          <span
            className="absolute inset-0 z-0 bg-white/10 group-hover:animate-pulse"
          ></span>

          {/* Text Layer */}
          <span className="relative z-10">Contact Now</span>
        </a>

        {/* Mobile Icon */}
        <div
          className="xl:hidden z-10 text-white text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden max-w-1/2 h-[100vh] absolute top-[100%] right-0 w-full px-4 py-6 bg-black/80 backdrop-blur-md flex flex-col  items-center space-y-7 text-white">
          {navItems.map((item, idx) =>
            item.type === "route" ? (
              <Link
                key={idx}
                to={item.href}
                className="font-[Host_Grotesk] text-lg"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={idx}
                href={item.href}
                className="font-[Host_Grotesk] text-lg"
                onClick={e => handleAnchorClick(e, item.href)}
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="#contact"
            className="font-[Host_Grotesk] text-lg bg-blue-500 text-white px-6 py-2 rounded-xl"
            onClick={e => handleAnchorClick(e, "#contact")}
          >
            Contact Now
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;