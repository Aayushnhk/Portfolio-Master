import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20"
    >
      <div className="text-center p-8 max-w-4xl mx-auto">
        <div className="text-xl md:text-2xl mb-4 font-light opacity-90 animate-fadeIn">
          Hello, my name is
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fadeIn">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
            Aayush Sharma
          </span>
        </h1>
        <div className="text-2xl md:text-4xl font-semibold mb-8 animate-fadeIn">
          And I'm a{" "}
          <span className="text-yellow-300 animate-pulse">
            Full Stack Web Developer
          </span>
        </div>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-bounce cursor-pointer"
        >
          Get in Touch!
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Home;