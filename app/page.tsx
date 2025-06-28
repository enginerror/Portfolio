'use client';

import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Timeline } from '@/components/sections/timeline';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { Navigation } from '@/components/navigation';
import { ChatBot } from '@/components/chatbot';
import { ScrollProgress } from '@/components/scroll-progress';
import { BackToTop } from '@/components/back-to-top';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <ScrollProgress />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="timeline">
        <Timeline />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
      
      <ChatBot />
      <BackToTop />
    </main>
  );
}