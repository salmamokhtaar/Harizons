import React from 'react';
import { FaFileAlt, FaClosedCaptioning, FaLanguage, FaPenFancy } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Document Translation',
      description:
        'Seamlessly translated a multinational company\'s HR policies and procedures from English to [Other Language]. Ensured accurate terminology and consistent brand voice throughout the entire document set.',
      icon: <FaFileAlt className="text-4xl text-blue-600" />,
    },
    {
      title: 'Transcription & Subtitling',
      description:
        'Translated and adapted the content of a client\'s e-commerce website for the [Other Language] market. Optimized the user experience for the target audience, ensuring cultural relevance and linguistic accuracy.',
      icon: <FaClosedCaptioning className="text-4xl text-blue-600" />,
    },
    {
      title: 'Simultaneous and Consecutive Interpretation',
      description:
        'Provided real-time interpretation services during a series of high-level business meetings between executives Countries.',
      icon: <FaLanguage className="text-4xl text-blue-600" />,
    },
    {
      title: 'Proofreading and Editing',
      description:
        'Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart.',
      icon: <FaPenFancy className="text-4xl text-blue-600" />,
    },
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full opacity-50 -z-10" style={{ filter: 'blur(24px)' }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex flex-col items-center mb-2">
            <div className="w-8 h-1 bg-blue-700 rounded mb-2" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Services</h2>
          </div>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            We look forward to discussing how Harizon can assist with your language service needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;