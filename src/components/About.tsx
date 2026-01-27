import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/CustomCard";
import { Target, Clock, BookOpen } from "lucide-react";

const icons = [Target, Clock, BookOpen];

export const About = () => {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="animate-fade-in-up">
          <SectionTitle>{t.about.title}</SectionTitle>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid gap-4">
          {t.about.highlights.map((highlight, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` } as React.CSSProperties}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                    <CardDescription>{highlight.description}</CardDescription>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
