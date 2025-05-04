
import React from 'react';
import { Html, Css, Javascript, NodeJs, Database } from './TechIcons';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

interface SoftSkill {
  name: string;
}

const Skills: React.FC = () => {
  const technicalSkills: Skill[] = [
    { name: "HTML", level: 90, icon: <Html className="w-6 h-6 text-purple" /> },
    { name: "CSS", level: 85, icon: <Css className="w-6 h-6 text-purple" /> },
    { name: "JavaScript", level: 80, icon: <Javascript className="w-6 h-6 text-purple" /> },
    { name: "NodeJS", level: 75, icon: <NodeJs className="w-6 h-6 text-purple" /> },
    { name: "PostgreSQL", level: 70, icon: <Database className="w-6 h-6 text-purple" /> },
  ];

  const softSkills: SoftSkill[] = [
    { name: "Boa comunicação" },
    { name: "Comprometimento" },
    { name: "Trabalho em equipe" },
    { name: "Criatividade" },
    { name: "Proatividade" },
  ];

  return (
    <section id="habilidades" className="bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Habilidades</h2>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Technical Skills */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-purple-dark mb-6">Habilidades Técnicas</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item opacity-0 animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mr-3">{skill.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-purple-dark mb-6">Habilidades Interpessoais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-purple-light rounded-lg p-4 flex items-center justify-center text-center opacity-0 animate-fade-in" 
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <span className="font-medium text-purple-darker">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
