import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, imageUrl, githubUrl, liveUrl }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-full flex flex-col border border-gray-700 hover:border-blue-400 max-w-[400px] mx-auto sm:max-w-none"> {/* Added max-w and mx-auto for mobile */}
      <a href={liveUrl || githubUrl} target="_blank" rel="noopener noreferrer" className="block">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300 md:h-48 sm:h-64 xs:h-56"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x400/1F2937/FFFFFF?text=${encodeURIComponent(
              title
            )}`;
          }}
        />
      </a>
      <div className="p-6 flex-grow flex flex-col justify-between sm:p-4">
        <div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-200 sm:text-lg">
            <a
              href={liveUrl || githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              {title}
            </a>
          </h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-4 sm:text-xs sm:line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-between items-center sm:gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 flex-1 min-w-[120px] text-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-md text-sm sm:text-xs sm:min-w-[100px] sm:px-3"
            >
              <FaGithub className="text-lg sm:text-base" />
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 flex-1 min-w-[120px] text-center bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-md text-sm sm:text-xs sm:min-w-[100px] sm:px-3"
            >
              <FaExternalLinkAlt className="text-sm sm:text-xs" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;