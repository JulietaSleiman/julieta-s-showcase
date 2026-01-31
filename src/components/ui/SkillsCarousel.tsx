import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SkillsCarousel = () => {
  const { t } = useLanguage();

  // Obtener todas las skills de todas las categorías
  const allSkills = t.skills.categories.flatMap((category) => category.skills);
  
  // Duplicar el array para crear un loop infinito suave
  const duplicatedSkills = [...allSkills, ...allSkills];

  return (
    <div className="relative w-full overflow-hidden py-8 mb-12">
      {/* Gradient overlays para efecto fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex animate-scroll">
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className="flex-shrink-0 mx-3 px-6 py-3 rounded-full glass border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/5"
          >
            <span className="text-sm md:text-base font-semibold text-foreground whitespace-nowrap">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

