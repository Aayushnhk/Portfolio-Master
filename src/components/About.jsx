import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          <span className="relative inline-block">About Me</span>
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/3 mb-10 lg:mb-0 flex justify-center">
            <div className="relative">
              <img
                src="/profile-photo.jpeg"
                alt="Aayush Sharma Profile"
                className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-white shadow-xl dark:border-gray-800"
              />
              <div className="absolute -inset-4 rounded-full border-4 border-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              I'm Aayush Sharma, a passionate Full Stack Web Developer and
              Freelancer. I thrive on building dynamic and responsive web
              applications from concept to deployment. My expertise spans
              across modern front-end and back-end technologies, allowing me
              to craft seamless user experiences and robust server-side
              solutions.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
              I am particularly fond of C++ and JavaScript, and constantly
              strive to expand my knowledge in the ever-evolving tech
              landscape. I am dedicated to delivering high-quality code and
              innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="AAYUSH_RESUME_TOCS.pdf"
                download
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out shadow-md transform hover:scale-105 cursor-pointer"
              >
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
              </a>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/aayush-sharma-0a1820179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                >
                  <FaLinkedin size={32} />
                </a>
                <a
                  href="https://github.com/Aayushnhk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 transform hover:scale-110 cursor-pointer"
                >
                  <FaGithub size={32} />
                </a>
                <a
                  href="https://leetcode.com/u/asaayush20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300 transition-all duration-300 transform hover:scale-110 cursor-pointer"
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