"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github } from 'lucide-react';

import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';

const projects = [
  {
    id: '01',
    tag: 'Hackathon product',
    date: 'Nov 2025',
    title: 'OneFlow',
    subtitle: 'Plan to bill in one modern workflow platform.',
    highlight: 'Secure RBAC • performance-first API design',
    description:
      'A full-stack MERN workflow management platform built for teams that need planning, execution, and billing in one polished experience.',
    features: ['JWT Auth + RBAC', 'Timesheet & Billing', 'API-first Architecture', 'Role-based Workflows'],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/prit1112',
  },
  {
    id: '02',
    tag: 'EdTech system',
    date: 'Mar 2025',
    title: 'Smart-EDU',
    subtitle: 'An education platform designed for daily operations and analytics.',
    highlight: 'Course workflows • student tracking • reliable CRUD APIs',
    description:
      'A web application for controlling student and course data, built with a resilient Node.js backend and production-ready MongoDB workflows.',
    features: ['Course Management', 'Student Tracking', 'RESTful APIs', 'CRUD Operations'],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/prit1112',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-4 py-10 md:px-8 md:py-14 lg:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-purple/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative">
          <SectionHeader
            label="Projects"
            title="Product work with clear technical outcomes"
            description="Each project is presented as a product experience, with secure architecture, polished UI, and real engineering value."
          />

          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr] lg:gap-5">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-[36px] border border-electric/25 bg-slate-950/90 p-6 shadow-[0_30px_120px_rgba(59,130,246,0.12)] backdrop-blur"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-3 py-1 text-xs font-semibold text-electric">
                      {projects[0].tag}
                    </span>
                    <h3 className="mt-4 text-3xl font-semibold text-white md:text-4xl">{projects[0].title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300 md:text-lg">{projects[0].subtitle}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-white/70">
                    <span>{projects[0].date}</span>
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-300">{projects[0].description}</p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Product highlight</p>
                    <p className="mt-3 text-sm text-white/80">{projects[0].highlight}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {projects[0].technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-medium text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 rounded-[28px] border border-white/10 bg-white/5 p-5">
                  {projects[0].features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="h-2.5 w-2.5 rounded-full bg-electric" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href={projects[0].github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-electric px-5 py-3 text-sm font-semibold text-slate-950 shadow-soft-glow transition hover:brightness-105"
                >
                  <Github className="h-4 w-4" />
                  View GitHub
                </Link>
              </div>
            </motion.article>

            <div className="grid gap-4">
              {projects.slice(1).map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.08 }}
                  className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 backdrop-blur"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                        {project.tag}
                      </span>
                      <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <span className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70">
                      {project.date}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.subtitle}</p>

                  <div className="mt-5 space-y-3">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-white/80">
                        <span className="h-2.5 w-2.5 rounded-full bg-electric" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    <Github className="h-4 w-4 text-blue-300/85" />
                    View GitHub
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


