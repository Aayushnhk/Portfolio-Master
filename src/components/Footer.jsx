import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 py-8 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-300 text-sm">
              Created By{" "}
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Aayush Sharma
              </a>
            </span>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/aayush-sharma-0a1820179/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Aayushnhk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://leetcode.com/u/asaayush20/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <SiLeetcode size={20} />
            </a>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;