import React from "react";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Default continuous motion
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: "0px",
          autoplaySpeed: 1000, // Reduced to 1000ms (1 second) on mobile
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-gray-900 text-white overflow-hidden min-h-screen flex items-center"
    >
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
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-60 right-32 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            My Projects
          </span>
        </h2>
        <div className="relative">
          <Slider {...settings}>
            <div className="px-4 sm:min-h-[450px]">
              <ProjectCard
                title="Finly - Personal Finance Tracker"
                description="Developed a full-stack personal finance tracker that helps users manage budgets, track income and expenses, and visualize their financial health. Integrated MongoDB with Prisma for efficient schema management and scalable data storage."
                imageUrl="/finly-project.png"
                githubUrl="https://github.com/Aayushnhk/FinlyFrontend"
                liveUrl="https://finlyo7.netlify.app/"
              />
            </div>
            <div className="px-4 sm:min-h-[450px]">
              <ProjectCard
                title="Whispr"
                description="Developed a full-stack, real-time chat platform using Next.js, Node.js, and TypeScript. Features include JWT-based authentication, user registration/login, and WebSocket-powered public/private messaging."
                imageUrl="/whispr-project.png"
                githubUrl="https://github.com/Aayushnhk/Whispr-Frontend"
                liveUrl="https://whispr-o7.vercel.app/"
              />
            </div>
            <div className="px-4 sm:min-h-[450px]">
              <ProjectCard
                title="Crypto Nest"
                description="Developed a dynamic cryptocurrency tracking website that displays real-time prices and market changes for the top 100 cryptocurrencies, supporting both INR and USD currencies."
                imageUrl="/crypto-project.png"
                githubUrl="https://github.com/Aayushnhk/CryptoNest"
                liveUrl="https://cryptonesto7.netlify.app/"
              />
            </div>
            <div className="px-4 sm:min-h-[450px]">
              <ProjectCard
                title="News Flux"
                description="Built a responsive News Aggregator Web Application using React.js that delivers real-time news updates across multiple categories such as Business, Technology, and Health."
                imageUrl="/news-project.png"
                githubUrl="https://github.com/Aayushnhk/NewsFlux"
                liveUrl="https://news-flux.netlify.app/"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;