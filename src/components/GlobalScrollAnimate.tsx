"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const GlobalScrollAnimate = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08,
    });

    // Auto-detect targets across current page
    const elements = document.querySelectorAll(
      ".slide-reveal, .card-reveal, main > section:not(:first-child), .reveal-on-scroll"
    );

    elements.forEach((el) => {
      if (!el.classList.contains("is-revealed")) {
        el.classList.add("reveal-init");
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};
