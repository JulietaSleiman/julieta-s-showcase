import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/CustomCard";
import { Target, Clock, BookOpen } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const icons = [Target, Clock, BookOpen];

export const About = () => {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <RevealOnScroll>
          <SectionTitle>{t.about.title}</SectionTitle>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.about.description}
          </p>
        </RevealOnScroll>

        {/* Highlight Cards */}
        <div className="grid gap-4">
          {t.about.highlights.map((highlight, index) => {
            const Icon = icons[index];
            return (
              <RevealOnScroll
                key={index}
                className="delay-[var(--scroll-delay)]"
              >
                <Card
                  style={
                    { animationDelay: `${(index + 1) * 100}ms` } as React.CSSProperties
                  }
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
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
