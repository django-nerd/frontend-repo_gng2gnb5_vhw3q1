import { useEffect, useRef } from "react";

// Lightweight fire particle canvas that reacts to mouse movement
// Renders warm, glowing embers that rise and swirl near the cursor
export default function FireParticles({ className = "", maxParticles = 200 }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    sizeRef.current.dpr = dpr;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      sizeRef.current.w = width;
      sizeRef.current.h = height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(1, 1); // reset scale guard
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Use ResizeObserver for precise sizing with responsive layout
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    const handleMouse = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left);
      mouseRef.current.y = (e.clientY - rect.top);
      mouseRef.current.active = e.type !== "mouseleave";
    };

    // Track mouse globally to allow pointer-events-none overlays
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleMouse);

    const spawnParticle = (x, y) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 1.5;
      const vx = Math.cos(angle) * 0.2 * speed;
      const vy = -Math.abs(Math.sin(angle) * speed) - (0.5 + Math.random()); // rising
      const life = 900 + Math.random() * 900; // ms
      const size = 2 + Math.random() * 3;

      // warm colors, flicker between orange-red-yellow
      const hue = 20 + Math.random() * 25; // 20-45 (orange)
      const sat = 90 + Math.random() * 10;
      const light = 55 + Math.random() * 20;

      return {
        x,
        y,
        vx,
        vy,
        ax: (Math.random() - 0.5) * 0.02, // subtle horizontal drift
        ay: -0.002, // rising acceleration
        life,
        ttl: life,
        size,
        hue,
        sat,
        light,
      };
    };

    const step = (dt) => {
      const p = particlesRef.current;
      for (let i = p.length - 1; i >= 0; i--) {
        const part = p[i];
        part.ttl -= dt;
        if (part.ttl <= 0) {
          p.splice(i, 1);
          continue;
        }
        part.vx += part.ax * dt;
        part.vy += part.ay * dt;
        part.x += part.vx * dt;
        part.y += part.vy * dt;
      }
    };

    const draw = () => {
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);
      const p = particlesRef.current;
      for (let i = 0; i < p.length; i++) {
        const part = p[i];
        const t = 1 - part.ttl / part.life; // 0..1
        const alpha = Math.max(0, 0.8 * (1 - t)) ;
        const glow = 8 * (1 - t) + 6;

        // outer glow
        const grd = ctx.createRadialGradient(part.x, part.y, 0, part.x, part.y, glow);
        grd.addColorStop(0, `hsla(${part.hue}, ${part.sat}%, ${part.light}%, ${alpha})`);
        grd.addColorStop(1, "hsla(0,0%,0%,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(part.x, part.y, glow, 0, Math.PI * 2);
        ctx.fill();

        // core ember
        ctx.fillStyle = `hsla(${part.hue}, ${part.sat}%, ${Math.min(95, part.light + 10)}%, ${Math.min(1, alpha + 0.1)})`;
        ctx.beginPath();
        ctx.arc(part.x, part.y, part.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let last = performance.now();
    const loop = (now) => {
      const dt = Math.min(32, now - last); // clamp delta for stability
      last = now;

      // spawn near mouse when inside container
      if (mouseRef.current.active) {
        const { x, y } = mouseRef.current;
        const count = 4 + Math.floor(Math.random() * 3); // 4-6 per frame while moving
        for (let i = 0; i < count; i++) {
          if (particlesRef.current.length < maxParticles) {
            const jitterX = (Math.random() - 0.5) * 14;
            const jitterY = (Math.random() - 0.5) * 10;
            particlesRef.current.push(spawnParticle(x + jitterX, y + jitterY));
          } else {
            break;
          }
        }
      }

      step(dt / 16.6667); // normalize to ~60fps units
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleMouse);
      ro.disconnect();
      particlesRef.current = [];
    };
  }, [maxParticles]);

  return (
    <div ref={containerRef} className={`pointer-events-none absolute inset-0 ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
