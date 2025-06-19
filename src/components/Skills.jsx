import React from 'react';

const SkillBar = ({ name, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center text-gray-200">
      <span className="font-semibold">{name}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-gray-900 text-white overflow-hidden min-h-screen flex items-center">
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
            My Skills
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Career Objective
            </h3>
            <p className="text-lg leading-relaxed text-gray-300 bg-gray-800/50 p-6 rounded-xl shadow-inner backdrop-blur-sm border border-gray-700">
              Seeking a challenging role where I can leverage my technical and management skills to contribute to company growth while expanding my expertise in web development. As a passionate learner, I'm particularly enthusiastic about mastering cutting-edge technologies and creating impactful digital solutions.
            </p>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Technical Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-800/50 p-6 rounded-xl shadow-inner backdrop-blur-sm border border-gray-700">
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