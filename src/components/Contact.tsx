import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/Section";
import { Card, CardTitle } from "@/components/ui/CustomCard";
import { LinkButton } from "@/components/ui/CustomButton";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const Contact = () => {
  const { t } = useLanguage();

  // Número de WhatsApp en formato internacional sin "+" ni espacios
  const whatsappNumber = "543865746167";
  const whatsappMessage = encodeURIComponent(
    "Hola Julieta, vi tu portfolio y me gustaría ponerme en contacto con vos."
  );

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.email.label,
      value: t.contact.email.value,
      href: `mailto:${t.contact.email.value}`,
      external: false,
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin.label,
      value: t.contact.linkedin.value,
      href: "https://linkedin.com/in/julieta-sleiman-041119342",
      external: true,
    },
    {
      icon: Github,
      label: t.contact.github.label,
      value: t.contact.github.value,
      href: "https://github.com/julietasleiman",
      external: true,
    },
  ];

  return (
    <Section id="contact">
      <div className="text-center mb-12">
        <RevealOnScroll>
          <SectionTitle className="inline-block">{t.contact.title}</SectionTitle>
          <SectionSubtitle>{t.contact.subtitle}</SectionSubtitle>
        </RevealOnScroll>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <RevealOnScroll key={method.label} className="group">
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                >
                <Card className="text-center h-full group-hover:border-primary/50 transition-all duration-300 hover-glow">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                    <CardTitle className="text-lg mb-1">{method.label}</CardTitle>
                    <p className="text-sm text-muted-foreground break-all">
                      {method.value}
                    </p>
                  </Card>
                </a>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll className="text-center">
          <LinkButton
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            variant="primary"
            size="lg"
            external
          >
            <Send className="w-5 h-5" />
            {t.contact.cta}
          </LinkButton>
        </RevealOnScroll>
      </div>
    </Section>
  );
};
