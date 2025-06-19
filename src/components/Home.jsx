import React, { useState, useEffect, useCallback } from "react";

const Home = () => {
  const [profession, setProfession] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const professions = ["Freelancer", "Software Developer", "Full Stack Developer"];

  const handleTyping = useCallback(() => {
    const current = loopNum % professions.length;
    const fullText = professions[current];

    setProfession(
      isDeleting
        ? fullText.substring(0, profession.length - 1)
        : fullText.substring(0, profession.length + 1)
    );

    setTypingSpeed(isDeleting ? 30 : 150);

    if (!isDeleting && profession === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && profession === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  }, [profession, isDeleting, loopNum, professions]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, typingSpeed]);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Particle background */}
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

      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-60 right-32 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="text-center p-6 md:p-10 lg:p-12 max-w-4xl mx-auto relative z-10">
        {/* Animated greeting */}
        <div
          className="text-xl md:text-2xl lg:text-3xl mb-6 font-light opacity-90"
          style={{
            animation: "fadeIn 1s ease-out forwards",
            opacity: 0,
            animationDelay: "0.2s",
          }}
        >
          Hi There! 👋🏻 I'm
        </div>

        {/* Name with dramatic gradient */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight"
          style={{
            background:
              "linear-gradient(90deg, #f6e05e, #f59e0b, #ef4444, #ec4899, #8b5cf6)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            backgroundSize: "400% 400%",
            animation: "gradient 8s ease infinite",
          }}
        >
          Aayush Sharma
        </h1>

        {/* Profession with animated description */}
        <div className="mb-10">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 h-20 flex items-center justify-center">
            <span className="text-gray-300"></span>
            <span className="relative text-yellow-400">
              {profession}
              <span 
                className="absolute -right-1 top-0 h-full w-0.5 bg-yellow-400 animate-pulse"
                style={{ 
                  animationDuration: "0.75s",
                  opacity: profession ? 1 : 0
                }}
              ></span>
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Specializing in React, Node.js, and cloud architecture to deliver
            high-performance web applications with exceptional user experiences.
          </p>
        </div>

        {/* Action buttons with animations */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <a
            href="#contact"
            className="relative px-6 py-3 md:px-8 md:py-4 font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact Me
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </a>
          
          <a
            href="#projects"
            className="relative px-6 py-3 md:px-8 md:py-4 font-bold text-white border-2 border-white rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              View Projects
            </span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </a>
        </div>
      </div>

      {/* Tech stack floating icons */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-8 opacity-80">
        {['react', 'nodejs', 'typescript', 'nextjs', 'tailwind', 'aws'].map((tech) => (
          <div 
            key={tech}
            className="w-10 h-10 transition-all duration-300 hover:opacity-100 hover:scale-110"
            style={{
              backgroundImage: `url(/tech-icons/${tech}.svg)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              filter: 'brightness(0) invert(1)'
            }}
          />
        ))}
      </div>

      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Home;