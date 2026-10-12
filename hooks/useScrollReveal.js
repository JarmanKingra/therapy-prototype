"use client";

import { useLayoutEffect } from "react";

/**
 * Elements that rise in on scroll.
 * Keep this list identical to the selector in app/globals.css.
 * The motion itself (distance, blur, speed, stagger) lives only in
 * the --reveal-* variables in that file.
 */
const TAGS =
  "h1, h2, h3, h4, h5, h6, p, img, li, blockquote, figcaption, summary, label, button, a, small, strong";

const TARGET = `:is(${TAGS}):not(:is(${TAGS}) *)`;

const MAX_STAGGER = 6;

export default function useScrollReveal() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    window.__revealReady = true;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      root.classList.remove("reveal-pending");
      return;
    }

    let queue = [];
    let frame = 0;
    let cancelled = false;

    const enqueue = (nodes) => {
      nodes.forEach((node) => {
        if (node.classList.contains("reveal-in") || queue.includes(node)) return;
        queue.push(node);
      });

      if (!queue.length || frame) return;

      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          frame = 0;
          if (cancelled || !queue.length) return;

          const batch = queue.splice(0);

          batch.sort((a, b) => {
            const ra = a.getBoundingClientRect();
            const rb = b.getBoundingClientRect();
            if (Math.abs(ra.top - rb.top) > 12) return ra.top - rb.top;
            return ra.left - rb.left;
          });

          batch.forEach((node, index) => {
            node.style.setProperty(
              "--reveal-index",
              String(Math.min(index, MAX_STAGGER))
            );
            node.classList.add("reveal-in");
          });
        });
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = [];

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          visible.push(entry.target);
        });

        if (visible.length) enqueue(visible);
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -7% 0px",
      }
    );

    const watch = (scope) => {
      scope.querySelectorAll(TARGET).forEach((node) => {
        if (!node.classList.contains("reveal-in")) observer.observe(node);
      });
    };

    const watchPage = () => {
      document.querySelectorAll("main, footer").forEach(watch);
    };

    watchPage();

    let scrollFrame = 0;
    const revealPassed = () => {
      scrollFrame = 0;
      const passed = [];

      document.querySelectorAll("main, footer").forEach((scope) => {
        scope.querySelectorAll(TARGET).forEach((node) => {
          if (node.classList.contains("reveal-in")) return;
          const rect = node.getBoundingClientRect();
          if (rect.height === 0 || rect.bottom >= 0) return;
          observer.unobserve(node);
          passed.push(node);
        });
      });

      if (passed.length) enqueue(passed);
    };

    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(revealPassed);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const onToggle = (event) => {
      const details = event.target;
      if (!(details instanceof HTMLDetailsElement) || !details.open) return;
      watch(details);
    };

    document.addEventListener("toggle", onToggle, true);

    const changes = new MutationObserver(watchPage);
    changes.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollFrame);
      observer.disconnect();
      changes.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("toggle", onToggle, true);
    };
  }, []);
}

export function ScrollReveal() {
  useScrollReveal();
  return null;
}
