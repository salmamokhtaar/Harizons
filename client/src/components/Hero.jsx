import React, { useState, useEffect } from 'react';
import { FaInstagram, FaEnvelope, FaFacebook } from 'react-icons/fa';
import img from '../assets/wara.png';

const actions = [
  'Translation',
  'Transcription',
  'Editing',
  'Interpretation',
];

function Hero({ contactRef }) {
  const [currentActionIndex, setCurrentActionIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentActionIndex((prev) => (prev + 1) % actions.length);
        setFade(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white min-h-[70vh] md:min-h-[75vh] flex items-center justify-center py-10 md:py-20 mt-16 md:mt-0 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-50 rounded-full opacity-50 -z-10" style={{ filter: 'blur(32px)' }} />
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 px-4">
        {/* Text Block */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="flex flex-wrap items-center justify-center md:justify-start text-2xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            We provide{' '}
            <span
              className={`inline-block md:min-w-[180px] text-blue-700 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
              {actions[currentActionIndex]}
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-6 max-w-xl">
            Professional language services to help your business communicate globally.
          </p>
          <button
            onClick={scrollToContact}
            className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full transition-all duration-300 text-base shadow mb-6"
          >
            Get in Touch
          </button>
          <div className="flex items-center gap-6 mt-2">
            <a
              href="https://www.instagram.com/salma_mokhtaar/"
              className="text-gray-500 hover:text-blue-700 transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/salmamuqtaarmuhudin"
              className="text-gray-500 hover:text-blue-700 transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="mailto:salmam.mohyadiin@gmail.com"
              className="text-gray-500 hover:text-blue-700 transition-colors duration-300 transform hover:scale-110"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
        {/* Image Block */}
        <div className="flex-1 flex justify-center md:justify-end items-center">
          <img
            src={img}
            alt="Translation Services"
            className="w-full max-w-xs md:max-w-md h-auto rounded-2xl  object-contain"
            style={{ background: 'none' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;