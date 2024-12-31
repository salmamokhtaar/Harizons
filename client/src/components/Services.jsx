import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Document Translation',
      description:
        'Seamlessly translated a multinational company\'s HR policies and procedures from English to [Other Language]. Ensured accurate terminology and consistent brand voice throughout the entire document set.',
      icon: '📄', // Replace with an actual icon
    },
    {
      title: 'Transcription & Subtitling',
      description:
        'Translated and adapted the content of a client\'s e-commerce website for the [Other Language] market. Optimized the user experience for the target audience, ensuring cultural relevance and linguistic accuracy.',
      icon: '🎬', // Replace with an actual icon
    },
    {
      title: 'Simultaneous and Consecutive Interpretation',
      description:
        'Provided real-time interpretation services during a series of high-level business meetings between executives Countries.',
      icon: '🗣️', // Replace with an actual icon
    },
    {
      title: 'Proofreading and Editing',
      description:
        'Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart.',
      icon: '✏️', // Replace with an actual icon
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-2 text-gray-600">
          We look forward to discussing how Harizon can assist with your language service needs.          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4 text-4xl text-blue-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-500 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;