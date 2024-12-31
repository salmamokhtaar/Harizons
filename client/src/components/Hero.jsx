import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaFacebook } from 'react-icons/fa';
import img from '../assets/rt.png';

function Hero({ contactRef }) {
  const [currentAction, setCurrentAction] = useState('Translate');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAction((prevAction) => {
        const actions = [
          'Document Translation',
          'Transcription & Subtitling',
          'Proofreading & Editing',
          'Simultaneous & Consecutive Interpretation'
        ];
        const currentIndex = actions.indexOf(prevAction);
        return actions[(currentIndex + 1) % actions.length];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero min-h-[90vh] md:min-h-[80vh] flex flex-col md:flex-row bg-gradient-to-r from-blue-100 to-blue-300 justify-between items-center p-6 md:p-12 relative">
      <div className="w-full md:w-1/3 lg:max-w-lg px-4 md:px-12 ml-20 mt-14 z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          We provide <span className="text-blue-700 md:text-4xl text-3xl">{currentAction}</span>
        </h1>
        <p className="text-medium md:text-xl text-gray-700 mb-8">
          The services we provide include translation, transcription, and interpretation.
        </p>
        <button onClick={scrollToContact} className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full mb-6 transition-colors duration-300 shadow-lg">
          Get in Touch
        </button>

        <div className="flex space-x-6 mt-3">
          <a href="https://www.instagram.com/salma_mokhtaar/" className="text-gray-700 hover:text-blue-700 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/salmamuqtaarmuhudin" className="text-gray-700 hover:text-blue-700 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://wa.me/252617157083" className="text-gray-700 hover:text-blue-700 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} />
          </a>
          <a href="mailto:salmam.mohyadiin@gmail.com" className="text-gray-700 hover:text-blue-700 transition-colors duration-300">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center relative z-0">
        <img src={img} alt="Translation" className="w-full h-auto max-w-xs md:max-w-md rounded-lg shadow-lg" />
      </div>
    </section>
  );
}

export default Hero;