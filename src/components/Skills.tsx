import React, { useEffect } from "react";
import { Css, Database, Javascript, NodeJs, Html } from "./TechIcons";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SoftSkill {
  name: string;
}
interface TechIconProps {
  className?: string;
}
const iconMap: { [key: string]: any } = {
  html: <Html className="w-6 h-6 text-purple" />,
  css: <Css className="w-6 h-6 text-purple" />,
  js: <Javascript className="w-6 h-6 text-purple" />,
  nodejs: <NodeJs className="w-6 h-6 text-purple" />,
  postgresql: <Database className="w-6 h-6 text-purple" />,
};

const Skills: React.FC = () => {
  const [technicalSkills, setTechnicalSkills] = React.useState<Skill[]>([]);
  const [softSkills, setSoftSkills] = React.useState<SoftSkill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch(import.meta.env.VITE_API_URL + "/skills.json");
      const data = await response.json();
      setSoftSkills(data.soft);
      setTechnicalSkills(
        data.technical.map((skill: Skill) => ({
          ...skill,
          icon: iconMap[skill.icon],
        }))
      );
    };

    fetchSkills();
  });

  return (
    <section
      id="habilidades"
      className="bg-background dark:bg-gray-900 py-24 md:py-32 transition-colors"
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title">Habilidades</h2>

        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-purple-darker dark:text-purple-light mb-6">
              Habilidades Técnicas
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mr-3 text-purple dark:text-purple-light">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-foreground dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground dark:text-gray-400">
                        {skill.level}%
                      </span>
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

          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-purple-darker dark:text-purple-light mb-6">
              Habilidades Interpessoais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-purple-light dark:bg-purple-darker rounded-lg p-4 flex items-center justify-center text-center opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <span className="font-medium text-purple-darker dark:text-purple-light">
                    {skill.name}
                  </span>
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
