"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CalendarDays, Award } from 'lucide-react';

import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';

const Education: React.FC = () => {
  return (
    <section id="education" className="relative overflow-hidden px-4 py-10 md:px-8 md:py-14 lg:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-12 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-60 w-60 rounded-full bg-purple/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative mx-auto grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <SectionHeader
              label="Education"
              title="Academic foundation for backend systems and scalable engineering"
              description="Strong fundamentals in algorithms, system design, and software engineering that support dependable product development."
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
            >
              MBIT College gave me the core systems understanding needed to build robust backend infrastructure, model data effectively, and ship software with maintainability in mind.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
            className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br from-electric/55 to-purple/45">
                <GraduationCap className="h-6 w-6 text-slate-950" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white/60">MBIT College</p>
                <p className="mt-1 text-xs text-slate-400">Focused fundamentals for scalable engineering</p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CalendarDays className="h-4 w-4 text-blue-300/90" />
                  <span className="font-semibold text-white/80">2023–2027</span>
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/50">Duration</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Award className="h-4 w-4 text-purple-300/90" />
                  <span className="font-semibold text-white/80">7.72 / 10</span>
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/50">CGPA</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Highlights</p>
              <div className="flex flex-wrap gap-2 text-sm text-slate-300">
                {['OOP', 'DSA', 'DBMS', 'System Design', 'Software Engineering'].map((topic) => (
                  <span key={topic} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Education;

