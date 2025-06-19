import React from 'react';
import { Mail, MapPin, User } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-gray-900 text-white overflow-hidden min-h-screen flex items-center">
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
          <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Contact Me
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Get in Touch
            </h3>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              Have a project in mind or want to discuss opportunities? 
              I'm currently available for freelance work and full-time positions.
            </p>
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-300 bg-gray-800/50 p-4 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300">
                <div className="p-3 bg-blue-900/50 rounded-full border border-blue-400">
                  <User size={24} className="text-blue-400" />
                </div>
                <span className="text-lg">Aayush Sharma</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-300 bg-gray-800/50 p-4 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300">
                <div className="p-3 bg-blue-900/50 rounded-full border border-blue-400">
                  <MapPin size={24} className="text-blue-400" />
                </div>
                <span className="text-lg">New Delhi, India</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-300 bg-gray-800/50 p-4 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300">
                <div className="p-3 bg-blue-900/50 rounded-full border border-blue-400">
                  <Mail size={24} className="text-blue-400" />
                </div>
                <span className="text-lg">asaayush20@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-gray-800/50 p-8 rounded-lg shadow-xl backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Send a Message
            </h3>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="205ab674-bce8-4979-b819-8188d52037f0"
              />
              <input
                type="hidden"
                name="subject"
                value="New Portfolio Inquiry"
              />
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@example.com"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+91"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-200"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="relative inline-flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;