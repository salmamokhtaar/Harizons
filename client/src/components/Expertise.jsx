import React from 'react';

const ExpertiseSection = () => {
  return (
    <div className="bg-white p-6 md:p-12">
      <h2 className="text-3xl font-bold text-center mb-6">Our Expertise</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-gray-100 hover:bg-blue-50 shadow-lg rounded-lg p-6 flex flex-col items-center text-center w-full sm:w-80">
          <h3 className="text-xl font-semibold mb-2">Specialized Translation</h3>
          <p className="text-black">Expert in translating content in the fields of business, legal, medical, and technical domains.</p>
        </div>
        <div className="bg-gray-100 hover:bg-blue-50 shadow-lg rounded-lg p-6 flex flex-col items-center text-center w-full sm:w-80">
          <h3 className="text-xl font-semibold mb-2">Multilingual Fluency</h3>
          <p className="text-black">Fluent in multiple languages, including English, Spanish, French, and more.</p>
        </div>
        <div className="bg-gray-100 hover:bg-blue-50 shadow-lg rounded-lg p-6 flex flex-col items-center text-center w-full sm:w-80">
          <h3 className="text-xl font-semibold mb-2">Project Management</h3>
          <p className="text-black">Experienced in handling projects of all sizes, from small documents to large-scale corporate initiatives.</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;