import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/CustomCard";
import { LinkButton } from "@/components/ui/CustomButton";
import { Badge } from "@/components/ui/CustomBadge";
import { ExternalLink, Code, Lock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <Section id="projects">
      <div className="text-center mb-12">
        <SectionTitle className="inline-block">{t.projects.title}</SectionTitle>
        <SectionSubtitle>{t.projects.subtitle}</SectionSubtitle>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {t.projects.items.map((project, index) => (
          <Card
            key={project.title}
            className="flex flex-col animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
          >
            {/* Project Preview Placeholder */}
            <div className="relative aspect-video rounded-lg mb-6 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text opacity-50">
                  {project.title[0]}
                </span>
              </div>
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
            <div className="flex gap-3">
              <LinkButton
                href={project.demo}
                variant="primary"
                size="sm"
                external
                className="flex-1"
              >
                <ExternalLink className="w-4 h-4" />
                {t.projects.buttons.demo}
              </LinkButton>

              {project.code ? (
                <LinkButton
                  href={project.code}
                  variant="outline"
                  size="sm"
                  external
                  className="flex-1"
                >
                  <Code className="w-4 h-4" />
                  {t.projects.buttons.code}
                </LinkButton>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex-1">
                      <button
                        disabled
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border-2 border-muted text-muted-foreground opacity-60 cursor-not-allowed"
                      >
                        <Lock className="w-4 h-4" />
                        {t.projects.buttons.code}
                      </button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.projects.buttons.comingSoon}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
