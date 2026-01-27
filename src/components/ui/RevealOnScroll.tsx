import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const RevealOnScroll = ({
  children,
  className,
  as = "div",
}: RevealOnScrollProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  const Component = as as any;

  return (
    <Component
      ref={ref}
      className={cn(
        "opacity-0 translate-y-4",
        isInView && "animate-fade-in-up opacity-100 translate-y-0",
        className
      )}
    >
      {children}
    </Component>
  );
};


