import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import ProjectShowcase from '@/components/Projects/ProjectShowcase';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectShowcase />
      <Contact />
      <Footer />
    </>
  );
}
