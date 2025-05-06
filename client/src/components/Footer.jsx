import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      {/* Main Footer */}
      <div className="max-w-screen-xl border-blue-50 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-600">Harizon</h3>
            <p className="text-black mb-4">
              Professional translation and interpretation services to help your business communicate globally.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/salmamuqtaarmuhudin" target="_blank" rel="noopener noreferrer" 
                className="text-black hover:text-blue-400 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/252617157083" target="_blank" rel="noopener noreferrer"
                className="text-black hover:text-green-400 transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/salma_mokhtaar/" target="_blank" rel="noopener noreferrer"
                className="text-black hover:text-pink-400 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-white transition-colors">Translation</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors">Interpretation</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors">Localization</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors">Subtitling</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white transition-colors">Content Creation</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                <span className="text-black">Mogadishu, Somalia</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 text-blue-400 mr-3" />
                <a href="tel:+252617157083" className="text-black hover:text-white transition-colors">
                  +252 616300191
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 text-blue-400 mr-3" />
                <a href="mailto:salmam.mohyadiin@gmail.com" className="text-black hover:text-white transition-colors">
                  harizon@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white border-blue-400 shadow-2xl py-6">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Harizon. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="text-black mr-2">Developed by</span>
            <a 
              href="https://salmadevs.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center"
            >
              <span className="underline">Salma</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
