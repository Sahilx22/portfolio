'use client';

import { Reveal } from '../Reveal';
import SectionBlobs from '../SectionBlobs';
import ProjectStory from './ProjectStory';
import { PROJECTS } from './data';

export default function ProjectShowcase() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 px-8 bg-[rgba(12,14,19,0.65)] backdrop-blur-xl"
    >
      <SectionBlobs />
      <div className="relative z-10 max-w-[1100px] mx-auto">
        <Reveal>
          <div className="section-label">Projects</div>
          <h2 className="font-display font-bold text-heading tracking-tight mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Things I&apos;ve built.
          </h2>
          <p className="text-muted max-w-[480px] text-[0.95rem] leading-relaxed mb-4">
            A closer look at six products, end to end.
          </p>
        </Reveal>

        <div className="flex flex-col gap-20 md:gap-32 pt-4">
          {PROJECTS.map((p, i) => (
            <ProjectStory key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
