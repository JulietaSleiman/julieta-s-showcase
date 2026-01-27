import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/CustomCard";
import { GraduationCap, Award } from "lucide-react";

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <Section id="experience" className="bg-muted/30">
      <div className="text-center mb-12">
        <SectionTitle className="inline-block">{t.experience.title}</SectionTitle>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Education */}
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">{t.experience.education.title}</h3>
          </div>

          <div className="relative pl-6 border-l-2 border-primary/30">
            {t.experience.education.items.map((item, index) => (
              <div
                key={index}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[calc(0.75rem+1px)] top-1 w-3 h-3 rounded-full bg-primary" />
                
                <Card className="ml-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg mb-0">{item.title}</CardTitle>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">
                    {item.institution}
                  </p>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Courses & Certifications */}
        <div className="animate-fade-in-up animation-delay-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/20 text-accent-foreground">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">{t.experience.courses.title}</h3>
          </div>

          <div className="relative pl-6 border-l-2 border-accent/30">
            {t.experience.courses.items.map((item, index) => (
              <div
                key={index}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[calc(0.75rem+1px)] top-1 w-3 h-3 rounded-full bg-accent" />
                
                <Card className="ml-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg mb-0">{item.title}</CardTitle>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">
                    {item.institution}
                  </p>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
