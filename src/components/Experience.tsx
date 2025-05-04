import React from "react";
import { Calendar, Briefcase } from "lucide-react";

interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Compass UOL",
      title: "Programa de Open Finance (Bolsista)",
      period: "Fev/2025 - Atual",
      description: [
        "Participação em programa intensivo voltado à formação em JavaScript e Inteligência Artificial.",
        "Estudo e aplicação de ferramentas como JavaScript, SQL e AWS.",
        "Uso de metodologias ágeis (Scrum) para entrega de sprints semanais.",
      ],
    },
    {
      company: "VGI Informática",
      title: "Estágio Técnico em Informática",
      period: "Set/2021 - Dez/2021",
      description: [
        "Assistência técnica remota em software de vendas.",
        "Auxílio e cadastro de produtos e soluções de vendas.",
        "Atendimento ao cliente.",
      ],
    },
  ];

  return (
    <section id="experiencia" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Experiência Profissional</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card opacity-0"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <h3 className="text-xl font-semibold text-purple-dark">
                  {exp.company}
                </h3>
                <span className="md:mx-3 hidden md:block">•</span>
                <span className="text-purple font-medium">{exp.title}</span>
              </div>

              <div className="flex items-center mb-4 text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{exp.period}</span>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
