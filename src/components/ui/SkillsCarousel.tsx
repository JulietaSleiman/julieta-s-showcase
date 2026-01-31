import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Code2,
  FileCode,
  Palette,
  Database,
  Terminal,
  GitBranch,
  Github,
  Code,
  FileJson,
  Box,
  Coffee,
  FileText,
  Users,
  MessageSquare,
  Puzzle,
  Calendar,
  Settings,
  Globe,
  Layout,
  Layers,
  Zap,
  BookOpen,
} from "lucide-react";

// Mapeo de skills a iconos
const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  // Frontend
  React: Code2,
  TypeScript: FileCode,
  JavaScript: FileCode,
  HTML5: FileCode,
  "HTML": FileCode,
  CSS3: Palette,
  "CSS": Palette,
  "Tailwind CSS": Palette,
  "Next.js": Layout,
  
  // Backend
  Java: Coffee,
  "C++": Code,
  MySQL: Database,
  "Node.js": Terminal,
  
  // Herramientas
  Git: GitBranch,
  GitHub: Github,
  "VS Code": Code2,
  Figma: Palette,
  Vercel: Zap,
  npm: Box,
  "Microsoft Office": FileText,
  "Microsoft Teams": Users,
  "Google Workspace": Globe,
  Canva: Palette,
  
  // Soft Skills
  "Trabajo en equipo": Users,
  "Teamwork": Users,
  Comunicación: MessageSquare,
  "Communication": MessageSquare,
  "Resolución de problemas": Puzzle,
  "Problem Solving": Puzzle,
  Organización: Calendar,
  "Organization": Calendar,
  Autodidacta: BookOpen,
  "Self-taught": BookOpen,
  Scrum: Settings,
  XP: Zap,
  "Extreme Programming": Zap,
};

// Icono por defecto
const DefaultIcon = Code2;

// Componente para mostrar el logo/icono de cada skill
const SkillIcon = ({ skill }: { skill: string }) => {
  const IconComponent = skillIcons[skill] || DefaultIcon;
  return <IconComponent className="w-6 h-6 md:w-7 md:h-7" />;
};

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
            className="flex-shrink-0 mx-3 px-6 py-4 rounded-xl glass border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/5 flex flex-col items-center justify-center gap-2 min-w-[100px]"
          >
            <div className="text-primary">
              <SkillIcon skill={skill} />
            </div>
            <span className="text-xs md:text-sm font-semibold text-foreground whitespace-nowrap text-center">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

