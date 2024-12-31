import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/logos.png';

function Header({ homeRef, aboutRef, servicesRef, projectsRef, contactRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (ref, link) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white shadow-2xl fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        isSticky ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={img} alt="harizon" className="h-10 mr-3" />
          <span className="text-blue-700 font-bold text-2xl">Harizon</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => handleScroll(homeRef, 'Home')}
            className={`${
              activeLink === 'Home' ? 'text-black' : 'text-blue-600'
            } hover:text-black ${isSticky ? 'text-sm' : 'text-base'}`}
          >
            Home
          </button>
          <button
            onClick={() => handleScroll(aboutRef, 'About')}
            className={`${
              activeLink === 'About' ? 'text-black' : 'text-blue-600'
            } hover:text-black ${isSticky ? 'text-sm' : 'text-base'}`}
          >
            About
          </button>
          <button
            onClick={() => handleScroll(projectsRef, 'Projects')}
            className={`${
              activeLink === 'Projects' ? 'text-black' : 'text-blue-600'
            } hover:text-black ${isSticky ? 'text-sm' : 'text-base'}`}
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll(servicesRef, 'Services')}
            className={`${
              activeLink === 'Services' ? 'text-black' : 'text-blue-600'
            } hover:text-black ${isSticky ? 'text-sm' : 'text-base'}`}
          >
            Services
          </button>
          <button
            onClick={() => handleScroll(contactRef, 'Contact')}
            className={`${
              activeLink === 'Contact' ? 'text-black' : 'text-blue-600'
            } hover:text-black ${isSticky ? 'text-sm' : 'text-base'}`}
          >
            Contact Us
          </button>
        </nav>
        <a
          href="https://wa.me/252617157083?text=Hello%20Harizon%20Team!"
          className={`hidden md:flex items-center text-blue-500 font-medium ${isSticky ? 'text-sm' : 'text-base'}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          +252 617157083
        </a>
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <button onClick={() => handleScroll(homeRef, 'Home')} className={`text-gray-600 hover:text-blue-500 ${activeLink === 'Home' ? 'text-red-600' : ''}`}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll(aboutRef, 'About')} className={`text-gray-600 hover:text-blue-500 ${activeLink === 'About' ? 'text-red-600' : ''}`}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll(servicesRef, 'Services')} className={`text-gray-600 hover:text-blue-500 ${activeLink === 'Services' ? 'text-red-600' : ''}`}>
              Services
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll(projectsRef, 'Projects')} className={`text-gray-600 hover:text-blue-500 ${activeLink === 'Projects' ? 'text-red-600' : ''}`}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll(contactRef, 'Contact')} className={`text-gray-600 hover:text-blue-500 ${activeLink === 'Contact' ? 'text-red-600' : ''}`}>
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;