import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let stars = [];

    const createStar = () => {
      const s = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 2 + 0.5,
        size: Math.random() * 1.5,
        baseX: 0,
        baseY: 0,
        angle: Math.random() * Math.PI * 2,
        distance: Math.random() * 100 + 50,
        isFollowing: false,
        update: function () {
          if (mouseRef.current.active) {
            const dx = mouseRef.current.x - this.x;
            const dy = mouseRef.current.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 300) {
              this.isFollowing = true;
              const force = (300 - dist) / 300;
              this.x += dx * 0.05 * force;
              this.y += dy * 0.05 * force;

              if (dist < 50) {
                this.angle += 0.05;
                this.x = mouseRef.current.x + Math.cos(this.angle) * 30;
                this.y = mouseRef.current.y + Math.sin(this.angle) * 30;
              }
            } else {
              this.isFollowing = false;
              this.y -= this.z * 0.2;
              if (this.y < 0) this.y = canvas.height;
            }
          } else {
            this.y -= this.z * 0.2;
            if (this.y < 0) this.y = canvas.height;
          }
        },
        draw: function () {
          if (!ctx) return;
          ctx.fillStyle = "white";
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        },
      };
      s.baseX = s.x;
      s.baseY = s.y;
      return s;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 1500);
      for (let i = 0; i < numStars; i++) {
        stars.push(createStar());
      }
    };

    const draw = () => {
      // Darker background for Milky Way effect
      ctx.fillStyle = "rgba(5, 5, 10, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Milky Way glow
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      gradient.addColorStop(0, "rgba(20, 20, 60, 0.1)");
      gradient.addColorStop(0.5, "rgba(10, 10, 30, 0.05)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      // Gradient star effect around mouse
      if (mouseRef.current.active) {
        for (let i = 0; i < 5; i++) {
          const angle = Math.random() * Math.PI * 2;
          const r = Math.random() * 40;
          ctx.fillStyle = `rgba(57, 255, 20, ${Math.random()})`;
          ctx.beginPath();
          ctx.arc(
            mouseRef.current.x + Math.cos(angle) * r,
            mouseRef.current.y + Math.sin(angle) * r,
            Math.random() * 1.5,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1] bg-black" />;
}
