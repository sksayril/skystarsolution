import React, { useRef, useEffect } from 'react';

const TENTACLE_COUNT = 7;
const SEGMENTS = 18;
const LENGTH = 32;
const SPEED = 0.12;
const COLORS = [
  'rgba(102,126,234,0.18)', // blue
  'rgba(118,75,162,0.18)',  // purple
  'rgba(255,175,189,0.14)', // pink
  'rgba(255,255,255,0.10)', // white
];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const TentacleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', resize);

    // Tentacle data
    const tentacles = Array.from({ length: TENTACLE_COUNT }).map((_, i) => {
      const angle = (i / TENTACLE_COUNT) * Math.PI * 2 + Math.random();
      const baseX = width / 2 + Math.cos(angle) * randomBetween(120, 220);
      const baseY = height / 2 + Math.sin(angle) * randomBetween(60, 120);
      return {
        base: { x: baseX, y: baseY },
        points: Array.from({ length: SEGMENTS }).map(() => ({ x: baseX, y: baseY })),
        color: COLORS[i % COLORS.length],
        angle: angle + randomBetween(-0.2, 0.2),
        speed: randomBetween(0.7, 1.2),
      };
    });

    let animationId: number;
    let t = 0;

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      t += SPEED;
      tentacles.forEach((tentacle, i) => {
        // Animate the tip to follow a moving target (mouse or floating point)
        const targetX = mouse.current.x || width / 2 + Math.cos(t + i) * 120;
        const targetY = mouse.current.y || height / 2 + Math.sin(t + i * 1.2) * 60;
        tentacle.points[0].x += (targetX - tentacle.points[0].x) * 0.12 * tentacle.speed;
        tentacle.points[0].y += (targetY - tentacle.points[0].y) * 0.12 * tentacle.speed;
        // Each segment follows the previous
        for (let j = 1; j < SEGMENTS; j++) {
          const prev = tentacle.points[j - 1];
          const point = tentacle.points[j];
          const dx = prev.x - point.x;
          const dy = prev.y - point.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const desiredX = prev.x - (dx / dist) * LENGTH;
          const desiredY = prev.y - (dy / dist) * LENGTH;
          point.x += (desiredX - point.x) * 0.18;
          point.y += (desiredY - point.y) * 0.18;
        }
        // Draw tentacle
        if (!ctx) return;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(tentacle.base.x, tentacle.base.y);
        for (let j = SEGMENTS - 1; j >= 0; j--) {
          ctx.lineTo(tentacle.points[j].x, tentacle.points[j].y);
        }
        ctx.strokeStyle = tentacle.color;
        ctx.lineWidth = 6 - i * 0.7;
        ctx.shadowColor = tentacle.color;
        ctx.shadowBlur = 16 - i * 2;
        ctx.globalAlpha = 0.7;
        ctx.stroke();
        ctx.restore();
      });
      animationId = requestAnimationFrame(animate);
    }
    animate();

    function onMouseMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{
        filter: 'blur(0.5px)',
        opacity: 0.85,
        mixBlendMode: 'lighten',
      }}
    />
  );
};

export default TentacleBackground; 