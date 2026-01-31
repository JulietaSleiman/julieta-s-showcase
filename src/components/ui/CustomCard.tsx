import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export const Card = ({ children, className, hover = true, style }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl p-6 glass",
        "border border-border/50",
        "transition-all duration-300 ease-out",
        hover && "hover-lift card-glow",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) => {
  return (
    <h3 className={cn("text-xl font-semibold mb-2", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) => {
  return (
    <p className={cn("text-muted-foreground", className)}>
      {children}
    </p>
  );
};
