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
          {/* Photo Space - Add your image here */}
          <div className="mb-8 flex justify-center lg:justify-start">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 bg-muted">
              <img
                src="/tu-foto.jpg"
                alt="Julieta Sleiman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <SectionTitle className="gradient-text">{t.about.title}</SectionTitle>
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
                    <div className="p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110 hover:rotate-3">
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
