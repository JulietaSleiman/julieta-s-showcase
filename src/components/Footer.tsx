import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Github, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/julieta-sleiman-041119342",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/julietasleiman",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:julieta.sleiman@email.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200 focus-ring"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Made With */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {t.footer.madeWith.replace("❤️", "")}
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};
