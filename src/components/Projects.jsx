import React from "react";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          <span className="relative inline-block">My Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Finly - Personal Finance Tracker"
            description="Developed a full-stack personal finance tracker that helps users manage budgets, track income and expenses, and visualize their financial health. Integrated MongoDB with Prisma for efficient schema management and scalable data storage. Designed robust backend schemas, implemented JWT-based authentication, and added custom intervals for budgets with category-specific tracking."
            imageUrl="/finly-project.png"
            githubUrl="https://github.com/Aayushnhk/FinlyFrontend"
            liveUrl="https://finlyo7.netlify.app/"
          />
          <ProjectCard
            title="Crypto Nest"
            description="Developed a dynamic cryptocurrency tracking website that displays real-time prices and market changes for the top 100 cryptocurrencies, supporting both INR and USD currencies. Integrated the CoinGecko API to fetch and update live cryptocurrency data, ensuring accurate and up-to-date market insights for users. Implemented detailed graphical analysis for individual cryptocurrencies on separate pages."
            imageUrl="/crypto-project.png"
            githubUrl="https://github.com/Aayushnhk/CryptoNest"
            liveUrl="https://cryptonesto7.netlify.app/" 
          />
          <ProjectCard
            title="News Flux"
            description="Built a responsive News Aggregator Web Application using React.js that delivers real-time news updates across multiple categories such as Business, Technology, and Health. Integrated the NewsAPI to dynamically fetch and display the latest headlines with pagination, enhancing content accessibility and improving user engagement. Implemented optimized client-side routing and loading states to ensure smooth navigation."
            imageUrl="/news-project.png"
            githubUrl="https://github.com/Aayushnhk/NewsFlux"
            liveUrl="https://news-flux.netlify.app/" 
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
