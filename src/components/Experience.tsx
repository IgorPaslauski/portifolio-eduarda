import React, { useEffect, useState } from "react";
import { Calendar, Briefcase } from "lucide-react";

interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/experiences.json"
      );
      const data: ExperienceItem[] = await response.json();
      setExperiences(data);
    };

    fetchExperiences();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".experience-card").forEach((card) => {
      observer.observe(card);
    });

    return () => {
      document.querySelectorAll(".experience-card").forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [experiences]);

  return (
    <section
      id="experiencia"
      className="bg-secondary dark:bg-gray-800 py-20 transition-colors"
    >
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
                <h3 className="text-xl font-semibold text-purple-darker dark:text-purple-light">
                  {exp.company}
                </h3>
                <span className="md:mx-3 hidden md:block text-foreground dark:text-gray-300">
                  •
                </span>
                <span className="text-purple dark:text-purple-light font-medium">
                  {exp.title}
                </span>
              </div>

              <div className="flex items-center mb-4 text-muted-foreground dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{exp.period}</span>
              </div>

              <ul className="list-disc list-inside space-y-2 text-foreground dark:text-gray-300">
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
