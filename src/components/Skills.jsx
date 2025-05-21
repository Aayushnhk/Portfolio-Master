import React from 'react';

const SkillBar = ({ name, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center text-gray-800 dark:text-gray-200">
      <span className="font-semibold">{name}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          <span className="relative inline-block">My Skills</span>
        </h2>
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white border-l-4 border-blue-500 pl-4">
              Career Objective
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-inner">
              Seeking a challenging role in a dynamic organization where I can
              leverage my technical and management skills to contribute to
              company productivity and enhance my knowledge in the IT sector.
              As an undergraduate with a strong passion for learning new
              things, I am particularly enthusiastic about exploring and
              mastering advancements in web development.
            </p>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white border-l-4 border-blue-500 pl-4">
              Technical Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillBar name="HTML" percentage={90} />
              <SkillBar name="CSS" percentage={85} />
              <SkillBar name="JavaScript" percentage={80} />
              <SkillBar name="TypeScript" percentage={70} />
              <SkillBar name="ReactJS" percentage={80} />
              <SkillBar name="NextJS" percentage={70} />
              <SkillBar name="Node.js & Express.js" percentage={80} />
              <SkillBar name="MongoDB" percentage={70} />
              <SkillBar name="Tailwind CSS" percentage={85} />
              <SkillBar name="Bootstrap" percentage={85} />
              <SkillBar name="C++" percentage={85} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;