import { useEffect, useMemo, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const settings = useMemo(() => {
    return {
      connectionDistance: 130,
      mouseRadius: 160,
      drift: 0.045,
      maxSpeed: 0.55
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let width = 1;
    let height = 1;
    let dpr = 1;

    const mouse = { x: -9999, y: -9999 };
    const particles: Particle[] = [];

    const resize = () => {
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      width = Math.max(1, window.innerWidth);
      height = Math.max(1, window.innerHeight);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = prefersReducedMotion
        ? 35
        : clamp(Math.floor((width * height) / 19000), 55, 120);

      while (particles.length > targetCount) particles.pop();
      while (particles.length < targetCount) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * settings.maxSpeed,
          vy: (Math.random() - 0.5) * settings.maxSpeed,
          r: 1.1 + Math.random() * 1.8,
          phase: Math.random() * Math.PI * 2
        });
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const tick = (ts: number) => {
      ctx.clearRect(0, 0, width, height);

      // Subtle background vignette for depth.
      const grad = ctx.createRadialGradient(width * 0.5, height * 0.15, 0, width * 0.5, height * 0.15, Math.max(width, height));
      grad.addColorStop(0, 'rgba(110,231,183,0.04)');
      grad.addColorStop(1, 'rgba(10,10,15,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Spatial hash grid to keep neighbor checks fast.
      const cellSize = settings.connectionDistance;
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);
      const buckets = new Map<number, number[]>();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const cx = Math.floor(p.x / cellSize);
        const cy = Math.floor(p.y / cellSize);
        const key = cy * cols + cx;
        const list = buckets.get(key);
        if (list) list.push(i);
        else buckets.set(key, [i]);
      }

      const nearMouseBase = settings.mouseRadius;

      // Draw connections first, then particles on top.
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const cx = Math.floor(p.x / cellSize);
        const cy = Math.floor(p.y / cellSize);

        for (let oy = -1; oy <= 1; oy++) {
          for (let ox = -1; ox <= 1; ox++) {
            const nx = cx + ox;
            const ny = cy + oy;
            if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) continue;
            const key = ny * cols + nx;
            const list = buckets.get(key);
            if (!list) continue;

            for (const j of list) {
              if (j <= i) continue;
              const q = particles[j];
              const dx = q.x - p.x;
              const dy = q.y - p.y;
              const dist2 = dx * dx + dy * dy;
              const maxD = settings.connectionDistance;
              if (dist2 > maxD * maxD) continue;

              const dist = Math.sqrt(dist2);
              const t = 1 - dist / maxD;

              // Mouse proximity increases line intensity a touch.
              const mdx = p.x - mouse.x;
              const mdy = p.y - mouse.y;
              const md = Math.sqrt(mdx * mdx + mdy * mdy);
              const nearMouse = clamp(1 - md / (nearMouseBase * 1.1), 0, 1);

              const alpha = 0.05 + t * 0.22 + nearMouse * 0.12;
              ctx.strokeStyle = `rgba(110,231,183,${alpha.toFixed(3)})`;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.stroke();
            }
          }
        }
      }

      for (const p of particles) {
        // Mouse repulsion / glow
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const md2 = mdx * mdx + mdy * mdy;
        const r = settings.mouseRadius;

        if (!prefersReducedMotion && md2 < r * r) {
          const md = Math.sqrt(md2) || 0.0001;
          const force = (1 - md / r) * 0.22;
          p.vx += (mdx / md) * force;
          p.vy += (mdy / md) * force;
        }

        if (!prefersReducedMotion) {
          p.phase += 0.0035;
          p.vx += (Math.sin(p.phase) * settings.drift) / 55;
          p.vy += (Math.cos(p.phase) * settings.drift) / 55;
        }

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > settings.maxSpeed) {
          p.vx = (p.vx / speed) * settings.maxSpeed;
          p.vy = (p.vy / speed) * settings.maxSpeed;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const md = Math.sqrt(md2);
        const nearMouse = clamp(1 - md / nearMouseBase, 0, 1);
        const alpha = 0.35 + nearMouse * 0.55;
        const radius = p.r + nearMouse * 0.9;

        ctx.fillStyle = `rgba(232,232,240,${(0.12 + nearMouse * 0.22).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(110,231,183,${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = window.requestAnimationFrame(tick);
    };

    resize();

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);

    // Reduced motion: draw a single static frame and stop.
    if (prefersReducedMotion) {
      tick(performance.now());
      window.cancelAnimationFrame(raf);
    } else {
      raf = window.requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      window.cancelAnimationFrame(raf);
    };
  }, [prefersReducedMotion, settings.connectionDistance, settings.drift, settings.maxSpeed, settings.mouseRadius, settings]);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" />;
}

