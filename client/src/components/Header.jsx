import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

function Header({ homeRef, aboutRef, servicesRef, projectsRef, contactRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Scroll to hero section when logo/name is clicked
  const handleLogoClick = () => {
    if (homeRef && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveLink('Home');
    }
    setIsOpen(false);
  };

  const handleScroll = (ref, link) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.pageYOffset > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-lg' : 'bg-white/90'} backdrop-blur-md`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo (clickable, scrolls to hero) */}
        <button onClick={handleLogoClick} className="flex items-center space-x-2 bg-transparent border-none p-0 m-0 cursor-pointer">
          <span className="font-bold text-2xl text-blue-700">Harizon</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center space-x-8">
          {[
            { ref: homeRef, label: 'Home' },
            { ref: aboutRef, label: 'About' },
            { ref: projectsRef, label: 'Projects' },
            { ref: servicesRef, label: 'Services' },
            { ref: contactRef, label: 'Contact' }
          ].map(({ ref, label }) => (
            <button
              key={label}
              onClick={() => handleScroll(ref, label)}
              className={`relative font-medium text-lg px-2 py-1 transition-all duration-200 rounded hover:bg-blue-50 ${
                activeLink === label ? 'text-blue-700 font-semibold' : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              {label}
              {activeLink === label && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-700 rounded"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Contact Us Button (Desktop) */}
        <a
          href="https://wa.me/252617157083?text=Hello%20Harizon%20Team!"
          className="hidden lg:flex items-center space-x-2 px-5 py-2 rounded-full bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition-all duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="h-5 w-5" />
          <span>Contact Us</span>
        </a>

        {/* Hamburger (Mobile) */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <FaBars className="h-6 w-6 text-blue-700" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-white transition-transform duration-300 lg:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'} h-screen`}
        style={{ top: 0 }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <span className="font-bold text-2xl text-blue-700">Harizon</span>
          <button
            className="p-2 rounded"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 space-y-8 mt-8">
          {[
            { ref: homeRef, label: 'Home' },
            { ref: aboutRef, label: 'About' },
            { ref: projectsRef, label: 'Projects' },
            { ref: servicesRef, label: 'Services' },
            { ref: contactRef, label: 'Contact' }
          ].map(({ ref, label }) => (
            <button
              key={label}
              onClick={() => handleScroll(ref, label)}
              className={`w-full text-center text-2xl font-medium py-3 rounded transition-colors duration-200 text-gray-800 hover:text-blue-700 ${
                activeLink === label ? 'text-blue-700 font-semibold bg-blue-50' : ''
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="flex flex-col items-center mb-8 px-6">
          <a
            href="https://wa.me/252617157083?text=Hello%20Harizon%20Team!"
            className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-blue-700 text-white rounded-full font-semibold text-lg shadow hover:bg-blue-800 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="h-5 w-5" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;