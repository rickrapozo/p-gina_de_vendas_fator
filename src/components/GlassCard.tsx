import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export const GlassCard = ({ children, className = "", hover = true, style }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300",
        hover && "hover:scale-105 hover:shadow-2xl hover:border-accent/30",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
