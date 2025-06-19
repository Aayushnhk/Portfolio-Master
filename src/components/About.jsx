import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gray-900 text-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden opacity-60">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-60 right-32 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span 
            className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            About Me
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/3 mb-10 lg:mb-0 flex justify-center">
            <div className="relative group">
              <img
                src="/profile-photo.jpeg"
                alt="Aayush Sharma Profile"
                className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-white shadow-2xl group-hover:border-yellow-400 transition-all duration-300"
              />
              <div className="absolute -inset-4 rounded-full border-4 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              I'm Aayush Sharma, a passionate Full Stack Developer specializing in modern web technologies. 
              With expertise in both frontend and backend development, I create seamless digital experiences 
              that are performant, accessible, and visually appealing.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              My technical arsenal includes React, Node.js, TypeScript, and various databases. 
              I'm particularly passionate about solving complex problems with elegant solutions 
              and continuously expanding my knowledge in this ever-evolving field.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="AAYUSH_RESUME_TOCS.pdf"
                download
                className="relative px-6 py-3 font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Resume
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </a>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/aayush-sharma-0a1820179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin size={32} />
                </a>
                <a
                  href="https://github.com/Aayushnhk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <FaGithub size={32} />
                </a>
                <a
                  href="https://leetcode.com/u/asaayush20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
                >
                  <SiLeetcode size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;