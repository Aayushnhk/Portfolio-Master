import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x400/E0E0E0/333333?text=${encodeURIComponent(
              title
            )}`;
          }}
        />
      </a>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>
        <div className="mt-4">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md cursor-pointer"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;