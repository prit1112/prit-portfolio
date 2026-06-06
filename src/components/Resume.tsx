"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';

const RESUME_HREF = '/resume/Prit_Faldu_Resume.pdf';

export default function Resume() {
  return (
    <section id="resume" className="relative overflow-hidden px-4 py-10 md:px-8 md:py-14 lg:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-8 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute right-0 top-28 h-60 w-60 rounded-full bg-purple/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-5xl">
          <SectionHeader
            label="06 // resume"
            title="Resume & Experience"
            description="Download or view my latest resume containing projects, skills, education, and technical experience."
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-white/90">Recruiter-ready resume</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Includes a crisp summary of product work, technical depth, and education—optimized for quick scanning.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={RESUME_HREF}
                  download="Prit_Faldu_Resume.pdf"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-electric px-5 py-3 text-sm font-semibold text-slate-950 shadow-soft-glow transition hover:brightness-105"
                >
                  <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-[-1px]" />
                  Download Resume
                </a>

                <a
                  href={RESUME_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  <FileText className="h-4 w-4 text-blue-300/85" />
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

