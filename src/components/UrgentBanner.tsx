import { useEffect, useRef } from 'react';

interface UrgentBannerProps {
  message: string;
  className?: string;
}

export const UrgentBanner = ({ message, className = '' }: UrgentBannerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    // Duplicar o texto para criar efeito de loop infinito
    const originalText = scrollElement.innerHTML;
    scrollElement.innerHTML = originalText + ' • ' + originalText + ' • ' + originalText;

    // Configurar animação
    let animationId: number;
    let position = 0;
    const speed = 0.5; // pixels por frame (velocidade lenta)

    const animate = () => {
      position -= speed;
      
      // Reset quando completar um ciclo
      const textWidth = scrollElement.scrollWidth / 3;
      if (Math.abs(position) >= textWidth) {
        position = 0;
      }
      
      scrollElement.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [message]);

  return (
    <div className={`bg-red-600 text-white py-3 overflow-hidden relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
      <div className="relative z-10">
        <div 
          ref={scrollRef}
          className="whitespace-nowrap text-sm md:text-base font-bold tracking-wide uppercase"
          style={{ 
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            willChange: 'transform'
          }}
        >
          {message}
        </div>
      </div>
    </div>
  );
};