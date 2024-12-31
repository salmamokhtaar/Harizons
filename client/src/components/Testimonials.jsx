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
    <section className="bg-gray-200 mt-10 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-4">We Have Earned the Trust of Our Most Valuable Customers</h2>
      <p className="text-center text-lg text-gray-600 mb-10">
      Revealing intriguing fun facts about meeting customer demands.      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full transition-transform transform hover:scale-105"
          >
            <p className="text-gray-600 mb-4 flex items-center">
              <FaQuoteLeft className="mr-2 text-blue-500" /> {testimonial.text}
            </p>
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;