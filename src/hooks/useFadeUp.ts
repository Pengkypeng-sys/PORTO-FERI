"use client";

import { useEffect } from "react";

export function useFadeUp() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    
    // Give a slight delay to allow DOM to render before observing
    const timeout = setTimeout(() => {
      document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    }, 100);
    
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
}
