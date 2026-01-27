import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LinkButton } from "@/components/ui/CustomButton";
import { ExternalLink, Linkedin } from "lucide-react";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-50" />
      
      {/* Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-pink rounded-full filter blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-purple rounded-full filter blur-3xl opacity-30 animate-float animation-delay-200" />

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up">
          {t.hero.greeting}
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
          <span className="gradient-text">{t.hero.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-6 animate-fade-in-up animation-delay-200">
          {t.hero.role}
        </p>
        
        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-10 animate-fade-in-up animation-delay-300">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <LinkButton
            href="#projects"
            variant="primary"
            size="lg"
          >
            <ExternalLink className="w-5 h-5" />
            {t.hero.cta.projects}
          </LinkButton>
          
          <LinkButton
            href="https://linkedin.com/in/julieta-sleiman-041119342"
            variant="outline"
            size="lg"
            external
          >
            <Linkedin className="w-5 h-5" />
            {t.hero.cta.linkedin}
          </LinkButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
