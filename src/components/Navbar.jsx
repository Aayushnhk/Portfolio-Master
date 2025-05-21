import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react'; // For hamburger and close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // --- Scroll-based Navbar Shrink/Style Change ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Active Link Highlighting ---
  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // viewport
      rootMargin: '-30% 0px -30% 0px', // When the section is roughly in the middle of the viewport
      threshold: 0, // Trigger as soon as target enters the viewport
    });

    // Observe all sections with an 'id' attribute
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, [handleIntersection]);


  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = (e, href) => {
    e.preventDefault(); // Prevent default anchor jump for smooth scroll
    const targetId = href.substring(1); // Get the section ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        // Adjusted values for the new, reduced navbar height
        top: targetElement.offsetTop - (isScrolled ? 64 : 72), // 64px for scrolled, 72px for default
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300
        ${isScrolled
          // Solid dark background when scrolled, slightly darker shadow, REDUCED PADDING
          ? 'bg-gray-900 shadow-xl py-1' // py-1 means 4px top/bottom padding
          // Default solid dark background with medium shadow, REDUCED PADDING
          : 'bg-gray-900 shadow-md py-2' // py-2 means 8px top/bottom padding
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-14"> {/* REDUCED FROM h-16 to h-14 */}
        {/* Logo/Brand Name */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          <a href="#home" onClick={(e) => handleNavLinkClick(e, '#home')} className="hover:opacity-80 transition-opacity">
            Aayush Sharma
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`font-medium px-3 py-2 rounded-md
                  ${activeSection === link.href.substring(1)
                    ? 'text-white bg-blue-600 dark:bg-blue-500 shadow-md' // Active state styling
                    : 'text-gray-300 hover:text-blue-400 transition-colors duration-200'
                  }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none cursor-pointer p-2 rounded-md hover:bg-gray-700 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-gray-950 z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white p-2 rounded-md hover:bg-gray-800 transition-colors focus:outline-none"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
          <ul className="space-y-6 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`text-3xl font-bold py-3 block transition-colors duration-200
                    ${activeSection === link.href.substring(1)
                      ? 'text-blue-400'
                      : 'text-gray-200 hover:text-blue-300'
                    }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;