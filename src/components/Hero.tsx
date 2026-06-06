"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

import Container from './ui/Container';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] overflow-hidden px-4 pt-10 pb-8 md:px-8 md:pt-12 md:pb-10">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-10 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
      </div>

      <Container>
        <div className="mx-auto grid min-h-full max-w-[1100px] gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <div className="flex flex-col justify-start gap-6 pt-2 md:pt-4">
            <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.06 }}>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-lg">
                <span className="flex h-2.5 w-2.5 items-center justify-center">
                  <span className="block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(52,211,153,0.16)]" />
                </span>
                Available for Internships & Opportunities
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.14 }}>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/60">MERN Stack Developer • Software Engineering Student</p>
              <h1 className="max-w-[620px] text-[3.2rem] font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-[4rem] md:text-[4.75rem] lg:text-[5.5rem]">
                Hi, I&apos;m Prit
                <span className="block text-electric">Full Stack Developer</span>
              </h1>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.22 }}>
              <p className="max-w-[620px] text-base leading-8 text-slate-300 sm:text-lg">
                Computer Engineering student building polished web experiences with the MERN stack, modern REST APIs, authentication systems, and workflow platforms for real users.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.30 }}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="#projects"
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-2xl bg-electric px-6 py-3 text-sm font-semibold text-slate-950 shadow-soft-glow transition hover:brightness-105 sm:flex-none"
                >
                  <span>View Projects</span>
                  <span className="text-[18px]">↓</span>
                </Link>
                <a
                  href="https://github.com/prit1112"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 sm:flex-none"
                >
                  <Github className="h-4 w-4 text-white/90" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/prit-faldu-43b5b12ab"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 sm:flex-none"
                >
                  <Linkedin className="h-4 w-4 text-white/90" />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.38 }}>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { value: '2+', label: 'Projects' },
                  { value: '7.72', label: 'CGPA' },
                  { value: 'MERN', label: 'Stack' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-4xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.46 }}
            className="order-first lg:order-last relative mt-0 lg:mt-0 flex items-center justify-center h-full lg:self-center"
            style={{ marginTop: 0, transform: 'translateY(-8px)' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.025 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.72, ease: 'easeOut' }}
              className="relative flex items-center justify-center"
            >
              {/* Soft glow layers behind the image */}
              <div className="pointer-events-none absolute -inset-6 rounded-full blur-3xl" aria-hidden>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric/25 to-transparent opacity-70" />
                <div className="absolute inset-6 rounded-full bg-gradient-to-bl from-purple/20 to-transparent opacity-60 mix-blend-screen" />
              </div>

              {/* Gradient ring */}
              <div className="relative rounded-full p-[6px] bg-gradient-to-tr from-electric/60 via-purple/50 to-electric/20 shadow-soft-glow">
                <div className="rounded-full bg-slate-900/70 p-1 backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-full">
                    <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px]">
                      <Image
                        src="/IMG_20230523_235050.jpg"
                        alt="Prit Faldu portrait"
                        fill
                        sizes="(max-width: 630px) 200px, (max-width: 1000px) 250px, 300px"
                        className="rounded-full object-cover"
                        style={{ objectPosition: 'center 35%', transform: 'scale(1.12)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Role badge beneath image on desktop */}
              <div className="pointer-events-none absolute bottom-0 translate-y-8 hidden w-full justify-center lg:flex">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/70 backdrop-blur">
                  Full Stack Developer
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
