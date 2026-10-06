'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[300] pointer-events-none bg-border/40">
      <motion.div
        style={{ scaleX, transformOrigin: 'left' }}
        className="h-full w-full bg-gradient-to-r from-accent to-accent2 shadow-[0_0_12px_2px_rgba(var(--accent-rgb),0.6)]"
      />
    </div>
  );
}
