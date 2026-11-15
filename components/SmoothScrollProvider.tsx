"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      ScrollTrigger.refresh();
      return;
    }

    const revealed = new WeakSet<HTMLElement>();

    const revealElements = (els: HTMLElement[]) => {
      const pending = els.filter((el) => !revealed.has(el));
      if (pending.length === 0) return;
      pending.forEach((el) => revealed.add(el));
      gsap.to(pending, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.07,
        clearProps: "transform,opacity",
        overwrite: true,
      });
    };

    let candidates: HTMLElement[] = [];

    const ctx = gsap.context(() => {
      candidates = Array.from(
        document.querySelectorAll<HTMLElement>(
          "main section h2, main section .ali-card, main section blockquote, main section .grid > div, main section .grid > a"
        )
      ).filter((el) => {
        if (el.closest("header, nav, footer")) return false;
        if (el.classList.contains("rw-tile")) return false;
        if (el.closest(".rw-grid")) return false;
        const rect = el.getBoundingClientRect();
        return rect.top > window.innerHeight * 0.92;
      });

      if (candidates.length > 0) {
        gsap.set(candidates, { opacity: 0, y: 22 });

        ScrollTrigger.batch(candidates, {
          start: "top 92%",
          once: true,
          onEnter: (batch) => revealElements(batch as HTMLElement[]),
          onLeave: (batch) => revealElements(batch as HTMLElement[]),
        });
      }
    });

    // Safety fallback for fast scrollbar drags or anchor jumps
    const handleScrollSafety = () => {
      if (candidates.length === 0) return;
      const inOrAboveViewport = candidates.filter((el) => {
        if (revealed.has(el)) return false;
        return el.getBoundingClientRect().top <= window.innerHeight * 0.95;
      });
      if (inOrAboveViewport.length > 0) {
        revealElements(inOrAboveViewport);
      }
    };

    window.addEventListener("scroll", handleScrollSafety, { passive: true });

    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      handleScrollSafety();
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScrollSafety);
      ctx.revert();
    };
  }, [pathname]);

  return <>{children}</>;
}
