"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';

const AboutComponent: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-10 md:px-8 md:py-14 lg:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-8 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-60 w-60 rounded-full bg-purple/10 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            label="About"
            title="Engineering software with product sensibility and technical discipline"
            description="I combine backend systems, secure APIs, and responsive interfaces into cohesive experiences that feel polished and perform well under real use."
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="space-y-5"
          >
            <p className="text-base leading-8 text-slate-300 md:text-lg">
              I’m a Full Stack Engineer who builds end-to-end systems—secure authentication, reliable REST APIs, and polished front-end experiences. I focus on architecture that can scale, code that teams can maintain, and interfaces that feel intentional.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Recruiter signal</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">Clean APIs • secure auth • product polish that feels premium.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Engineering intent</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">Focus on performance, maintainability, and product-quality delivery.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://github.com/prit1112"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-electric px-5 py-3 text-sm font-semibold text-slate-950 shadow-soft-glow transition hover:brightness-105"
              >
                <Github className="h-4 w-4" />
                View GitHub
              </a>
              <span className="text-sm text-slate-400">Explore the repositories behind each product.</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutComponent;

