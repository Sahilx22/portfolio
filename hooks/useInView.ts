'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an element is near the viewport. Used to fully mount/unmount
 * expensive R3F <Canvas> scenes instead of just pausing their render loop —
 * off-screen projects cost nothing.
 */
export function useInView<T extends HTMLElement>(rootMargin = '200px') {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { rootMargin, threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
