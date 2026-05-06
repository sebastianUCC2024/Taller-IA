"use client";

import { useEffect } from "react";

export default function ParallaxEffect() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.collage-card');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      cards.forEach((card, index) => {
        const factor = (index % 5 + 1) * 2;
        const x = (mouseX - 0.5) * factor;
        const y = (mouseY - 0.5) * factor;
        (card as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
