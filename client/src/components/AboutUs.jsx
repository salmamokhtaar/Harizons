import React from 'react';
import img from '../assets/rr.png';

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-16 px-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-20">
        {/* Left: Heading, intro, Vision, Mission */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-4">About Us</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            Harizon is a leading provider of translation and interpretation services, dedicated to bridging language barriers and fostering global understanding. Founded by Isse Hassan Heyle, our team is passionate about delivering precise, culturally-aware language solutions for clients worldwide.
          </p>
          <div className="flex flex-col gap-6">
            {/* Vision */}
            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Vision</h3>
              <p className="text-gray-700 text-base">
                To be the most trusted partner for global communication, enabling seamless connections across cultures and languages.
              </p>
            </div>
            {/* Mission */}
            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Mission</h3>
              <p className="text-gray-700 text-base">
                To empower individuals and organizations by providing accurate, reliable, and culturally-sensitive language services with integrity and excellence.
              </p>
            </div>
          </div>
        </div>
        {/* Right: Image (top), Core Values (below image) */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-6">
          <img
            src={img}
            alt="About Harizon"
            className="w-full max-w-md h-auto   object-cover mb-4"
          />
          <div className="w-full max-w-md bg-blue-50 border-l-4 border-blue-700 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Core Values</h3>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
              <li>Accuracy & Quality</li>
              <li>Integrity</li>
              <li>Respect for Diversity</li>
              <li>Client-Centered Service</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;