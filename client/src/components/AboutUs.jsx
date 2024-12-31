import React from 'react';
import img from '../assets/rr.png';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center">
            <div className="flex-1">
              <h2 className="text-3xl text-center font-bold mb-6">About Us</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Harizon is a professional translation and interpretation services provider, founded by Isse Hassan Heyle. With a strong background in English and literature, Harizon delivers accurate, high-quality language services to clients across a wide range of industries.
              </p>
              <button onClick={"/contacts"} className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg text-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute top-0 left-3 -ml-12 bg-blue-500 rounded-full w-16 h-16 z-0"></div>
              <div className="absolute bottom-0 right-0 -mr-12 -mb-12 bg-black rounded-full w-16 h-16 z-0"></div>
              <img
                src={img}
                alt="About Us"
                className="relative z-10 rounded-lg w-full h-auto max-w-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;