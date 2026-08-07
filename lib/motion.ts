// Cheap multi-octave sine drift — reads as organic floating rather than a
// single mechanical sine loop, without the weight of a full noise library.
export function drift(x: number, seed: number): number {
  return (
    Math.sin(x * 1.7 + seed) * 0.5 +
    Math.sin(x * 0.53 + seed * 2.1) * 0.3 +
    Math.sin(x * 3.1 + seed * 0.7) * 0.2
  );
}

export const EASE_PREMIUM = [0.16, 0.84, 0.44, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_PREMIUM },
  },
};

export function staggerChildren(stagger = 0.08, delay = 0) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
}
