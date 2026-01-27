import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, children, className }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 section-container",
        className
      )}
    >
      {children}
    </section>
  );
};

export const SectionTitle = ({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) => {
  return (
    <h2 className={cn(
      "text-3xl md:text-4xl font-bold mb-4 gradient-text",
      className
    )}>
      {children}
    </h2>
  );
};

export const SectionSubtitle = ({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) => {
  return (
    <p className={cn(
      "text-muted-foreground text-lg mb-12",
      className
    )}>
      {children}
    </p>
  );
};
