import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SIGNUP_URL } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  size?: "default" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
}

export const CTAButton = ({ children, size = "lg", className = "", onClick }: CTAButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Novo fluxo: redirecionar usuário para criação de conta
      window.location.href = SIGNUP_URL;
    }
  };
  const sizeClasses = {
    default: "text-xs sm:text-sm px-2 py-6 sm:px-3 sm:py-6",
    lg: "text-xs sm:text-sm px-3 py-4 sm:px-4 sm:py-5",
    xl: "text-sm sm:text-base px-4 py-4 sm:px-5 sm:py-5",
  };

  return (
    <div className="flex justify-center w-full px-2 sm:px-4">
      <Button
        onClick={handleClick}
        className={`
          bg-accent hover:bg-accent/90 text-accent-foreground font-bold
          rounded-xl transition-all duration-300
          animate-pulse-glow hover:scale-105
          shadow-lg hover:shadow-2xl
          w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg
          text-center flex items-center justify-center
          break-words hyphens-auto overflow-hidden
          border-t-2 border-b-2 border-accent-foreground/20
          ${sizeClasses[size]}
          ${className}
        `}
      >
        <span className="flex-1 text-center leading-tight px-0.5 sm:px-1 whitespace-normal">{children}</span>
        <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
      </Button>
    </div>
  );
};
