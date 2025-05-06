import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import has from '../assets/has.jpeg'
import g from '../assets/g.png'
import man from '../assets/man.png'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Hasiina Goosaar',
      title: 'FullStack Developer at RecentIT',
      text: 'Their translation services are exceptional! We have worked with them on multiple projects and have always been satisfied with the quality and speed of their work.',
      image: has, // Placeholder image URL
    },
    {
      name: 'Salma Mokhtaar',
      title: 'Software Developer at RecetIT',
      text: 'Highly professional and reliable. The team understood our needs perfectly and delivered outstanding results.',
      image: g,
    },
    {
      name: 'Abdirahim Abdalla',
      title: 'Graphic Designer at RecentIt',
      text: 'I was impressed with their attention to detail and ability to meet tight deadlines. I highly recommend their services!',
      image: man, // Placeholder image URL
    },
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-50 rounded-full opacity-50 -z-10" style={{ filter: 'blur(24px)' }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex flex-col items-center mb-2">
            <div className="w-8 h-1 bg-blue-700 rounded mb-2" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What Our Clients Say</h2>
          </div>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            We are proud to have earned the trust of our most valuable customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
              <p className="text-gray-700 text-lg mb-6 flex-1">{testimonial.text}</p>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-100 shadow mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-blue-700 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;