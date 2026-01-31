import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium",
        "bg-secondary text-secondary-foreground",
        "transition-all duration-300 ease-out",
        "hover:bg-primary hover:text-primary-foreground hover:scale-110",
        "hover:shadow-lg hover:shadow-primary/30",
        "cursor-default",
        className
      )}
    >
      {children}
    </span>
  );
};
