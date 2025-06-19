import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0,
    });
    document.querySelectorAll("section[id]").forEach((section) =>
      observer.observe(section)
    );
    return () => {
      document.querySelectorAll("section[id]").forEach((section) =>
        observer.unobserve(section)
      );
      observer.disconnect();
    };
  }, [handleIntersection]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - (isScrolled ? 64 : 72),
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 shadow-xl py-1 backdrop-blur-sm"
          : "bg-gray-900/90 shadow-md py-2 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-2xl font-bold transition-transform duration-200 hover:scale-105">
          <a
            href="#home"
            onClick={(e) => handleNavLinkClick(e, "#home")}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
          >
            Aayush Sharma
          </a>
        </div>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                  activeSection === link.href.substring(1)
                    ? "text-white bg-gradient-to-r from-blue-500/50 to-purple-600/50"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900/95 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            <X size={24} />
          </button>
          <ul className="space-y-6 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`text-2xl font-bold py-2 px-4 rounded-md transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-blue-400 bg-gray-800"
                      : "text-gray-200 hover:text-blue-300"
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