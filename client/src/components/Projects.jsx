import React from 'react';

const Projects = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105">
            <div className="relative">
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-blue-500 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Completed
                </span>
              </div>
              <div className="p-6 flex justify-center items-center h-40">
                <svg
                  className="w-16 h-16 text-gray-700 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">7+ Finished Projects</h3>
              <p className="text-gray-600 mt-2">We have successfully completed over 7 projects, delivering high-quality results to our clients.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105">
            <div className="relative">
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-blue-500 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Clients
                </span>
              </div>
              <div className="p-6 flex justify-center items-center h-40">
                <svg
                  className="w-16 h-16 text-gray-700 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">20+ Happy Customers</h3>
              <p className="text-gray-600 mt-2">We have served over 20 happy customers, ensuring their satisfaction with our services.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105">
            <div className="relative">
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-blue-500 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Experience
                </span>
              </div>
              <div className="p-6 flex justify-center items-center h-40">
                <svg
                  className="w-16 h-16 text-gray-700 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">2+ Years Experience</h3>
              <p className="text-gray-600 mt-2">We have over 2 years of experience in the industry, providing top-notch services to our clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;