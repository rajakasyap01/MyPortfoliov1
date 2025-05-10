import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface FogParticle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  color: string;
}

const FogBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let fogParticles: FogParticle[] = [];
    let animationFrameId: number;

    const colors = [
      'rgba(16, 108, 241, 0.8)',  // Primary blue
      'rgba(135, 16, 241, 0.8)',  // Accent purple
      'rgba(255, 255, 255, 0.8)', // White
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createFogParticles = () => {
      const particleCount = isMobile ? 30 : 60;
      fogParticles = [];

      for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        fogParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * (isMobile ? 50 : 80) + 30,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.2 + 0.1,
          color
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fogParticles.forEach((particle) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        );
        
        gradient.addColorStop(0, particle.color.replace('0.8', `${particle.opacity}`));
        gradient.addColorStop(0.5, particle.color.replace('0.8', `${particle.opacity * 0.5}`));
        gradient.addColorStop(1, particle.color.replace('0.8', '0'));
        
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Move particle
        particle.x += particle.speed;
        particle.y += Math.sin(particle.x * 0.02) * 0.5;
        
        // Reset particle position when it moves off screen
        if (particle.x > canvas.width + particle.radius) {
          particle.x = -particle.radius;
          particle.y = Math.random() * canvas.height;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    createFogParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createFogParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-30 mix-blend-screen"
      style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%)' }}
    />
  );
};

export default FogBackground;
