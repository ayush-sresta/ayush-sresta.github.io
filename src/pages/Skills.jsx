import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JAVASCRIPT', level: 80 },
    { name: 'REACT JS', level: 90 },
    { name: 'TAILWIND CSS', level: 90 },
    { name: 'NODE JS', level: 70 },
  ];

  return (
    <section id="skills" className= "bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[var(--color-accent)] mb-12">Skills</h2>
        
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 lg:gap-7">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex justify-between mb-1">
                <h3 className="font-bold text-sm">{skill.name}</h3>
                <p className="text-sm font-bold">{skill.level}%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-2xl h-2.5">
                <div
                  className="h-2.5 rounded-2xl bg-[var(--color-accent-hover)] transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
