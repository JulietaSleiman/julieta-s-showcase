import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/CustomCard";
import { LinkButton } from "@/components/ui/CustomButton";
import { Badge } from "@/components/ui/CustomBadge";
import { ExternalLink } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <Section id="projects">
      <div className="text-center mb-12">
        <RevealOnScroll>
          <SectionTitle className="inline-block">
            {t.projects.title}
          </SectionTitle>
          <SectionSubtitle>{t.projects.subtitle}</SectionSubtitle>
        </RevealOnScroll>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {t.projects.items.map((project, index) => (
          <RevealOnScroll key={project.title}>
            <Card
              className="flex flex-col"
              style={
                { animationDelay: `${index * 100}ms` } as React.CSSProperties
              }
            >
              {/* Project Preview */}
              <div className="relative aspect-video rounded-lg mb-6 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 group cursor-pointer transition-all duration-500 hover:from-primary/30 hover:to-accent/30">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Si la imagen no se carga, ocultarla y mostrar el fallback
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement?.querySelector('.image-fallback');
                        if (fallback) {
                          (fallback as HTMLElement).style.display = 'flex';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Fallback si la imagen no carga */}
                    <div className="image-fallback absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                      <span className="text-4xl font-bold gradient-text opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                        {project.title[0]}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold gradient-text opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                        {project.title[0]}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
              </div>

              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="mb-4 flex-grow">
                {project.description}
              </CardDescription>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <Badge key={tech} className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 relative z-10 mt-auto">
                <LinkButton
                  href={project.demo}
                  variant="primary"
                  size="sm"
                  external
                  className="w-full relative z-10"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.projects.buttons.demo}
                </LinkButton>
              </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
};
