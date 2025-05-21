import React from 'react';
import { Mail, MapPin, User } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          <span className="relative inline-block">Contact Me</span>
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white border-l-4 border-blue-500 pl-4">
              Get in Touch
            </h3>
            <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
              Have a project in mind or just want to say hello? Feel free to
              reach out!
            </p>
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <User
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <span className="text-lg">Aayush Sharma</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <MapPin
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <span className="text-lg">New Delhi, India</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Mail
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <span className="text-lg">asaayush20@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white text-center">
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
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+91"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all duration-200"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
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