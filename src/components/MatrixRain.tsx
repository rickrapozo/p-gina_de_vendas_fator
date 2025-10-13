import { useEffect, useRef } from "react";

interface MatrixRainProps {
  className?: string;
  opacity?: number; // 0..1
  fontSize?: number; // px
  speed?: number; // lower is faster
}

// Simple Matrix rain canvas background. Designed to be placed absolutely within a relatively positioned container.
export const MatrixRain = ({ className = "", opacity = 0.2, fontSize = 14, speed = 35 }: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement as HTMLElement | null;
    if (!parent) return;

    // Characters used in the rain
    const characters = "01".split("");

    let columns = 0;
    let drops: number[] = [];
    let rafId: number | null = null;

    const resize = () => {
      const { clientWidth, clientHeight } = parent;
      canvas.width = clientWidth;
      canvas.height = clientHeight;
      columns = Math.max(1, Math.floor(canvas.width / fontSize));
      drops = new Array(columns).fill(1);
    };

    const draw = () => {
      // Clear frame with transparency to avoid heavy trails for readability
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        // Neon green similar to Matrix, softened by opacity
        ctx.fillStyle = `rgba(0, 255, 102, ${opacity})`;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      rafId = window.requestAnimationFrame(draw);
    };

    // Observe size changes to keep canvas in sync with container
    const observer = new ResizeObserver(() => {
      resize();
    });
    observer.observe(parent);

    resize();
    // Start the animation loop with timing control
    let lastTime = 0;
    const loop = () => {
      const currentTime = Date.now();
      // Slower animation - update every 150ms instead of 50ms
      if (currentTime - lastTime > 150) {
        draw();
        lastTime = currentTime;
      }
      rafId = window.requestAnimationFrame(loop);
    };
    rafId = window.requestAnimationFrame(loop);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [opacity, fontSize, speed]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};