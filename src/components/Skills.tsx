import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Badge } from "@/components/ui/CustomBadge";
import { Card, CardTitle } from "@/components/ui/CustomCard";
import { Code, Wrench, Users } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const categoryIcons = [Code, Wrench, Users];

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <Section id="skills" className="bg-muted/30">
      <div className="text-center mb-12">
        <RevealOnScroll>
          <SectionTitle className="inline-block">{t.skills.title}</SectionTitle>
        </RevealOnScroll>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {t.skills.categories.map((category, index) => {
          const Icon = categoryIcons[index];
          return (
            <RevealOnScroll key={category.name}>
              <Card
                style={
                  { animationDelay: `${index * 100}ms` } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="mb-0">{category.name}</CardTitle>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            </RevealOnScroll>
          );
        })}
      </div>
    </Section>
  );
};
