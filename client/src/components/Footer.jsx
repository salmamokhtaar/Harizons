import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-blue-600 py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://www.facebook.com/salmamuqtaarmuhudin" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://wa.me/252617157083" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="w-6 h-6 hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://www.instagram.com/salma_mokhtaar/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 hover:text-gray-400 transition-colors" />
          </a>
        </div>
        <p className="text-black text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <Link to={"https://portifolio-last.vercel.app/"}>Developed by <span className='underline hover:cursor-pointer'>Salma</span></Link>
      </div>
    </footer>
  );
};

export default Footer;