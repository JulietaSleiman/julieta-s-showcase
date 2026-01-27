import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg",
    "transition-all duration-300 ease-out",
    "focus-ring",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  );

  const variants = {
    primary: cn(
      "bg-primary text-primary-foreground",
      "hover:brightness-110 hover:scale-[1.02]",
      "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
    ),
    secondary: cn(
      "bg-secondary text-secondary-foreground",
      "hover:bg-secondary/80 hover:scale-[1.02]"
    ),
    outline: cn(
      "border-2 border-primary text-primary",
      "hover:bg-primary hover:text-primary-foreground",
      "hover:scale-[1.02]"
    ),
    ghost: cn(
      "text-foreground",
      "hover:bg-muted hover:scale-[1.02]"
    ),
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

interface LinkButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export const LinkButton = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external = false,
}: LinkButtonProps) => {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg",
    "transition-all duration-300 ease-out",
    "focus-ring"
  );

  const variants = {
    primary: cn(
      "bg-primary text-primary-foreground",
      "hover:brightness-110 hover:scale-[1.02]",
      "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
    ),
    secondary: cn(
      "bg-secondary text-secondary-foreground",
      "hover:bg-secondary/80 hover:scale-[1.02]"
    ),
    outline: cn(
      "border-2 border-primary text-primary",
      "hover:bg-primary hover:text-primary-foreground",
      "hover:scale-[1.02]"
    ),
    ghost: cn(
      "text-foreground",
      "hover:bg-muted hover:scale-[1.02]"
    ),
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <a
      href={href}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};
