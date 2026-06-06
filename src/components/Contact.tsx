"use client";

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Phone, Send, Sparkles, Mail } from 'lucide-react';


import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'opening' | 'sent'>('idle');
  const [error, setError] = useState<string>('');


  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());


  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'your name'}`);
    const body = encodeURIComponent(
      `Name: ${name || '-'}\nEmail: ${email || '-'}\n\nMessage:\n${message || '-'}`
    );
    return `mailto:falduprit06@gmail.com?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-10 md:px-8 md:py-14 lg:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-8 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute right-0 top-28 h-60 w-60 rounded-full bg-purple/10 blur-3xl" />
      </div>

      <Container>
        <SectionHeader
          label="Contact"
          title="Connect on a role or product opportunity"
          description="Recruiters and collaborators can reach out with clarity and confidence. I respond with timeline estimates and practical next steps."
        />

        <div className="grid gap-5 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="rounded-[32px] border border-white/10 bg-slate-950/80 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br from-electric/55 to-purple/45">
                  <Sparkles className="h-6 w-6 text-slate-950" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/60">Portfolio owner</p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">Prit Faldu</h3>
                  <p className="mt-2 text-sm text-slate-300">Full Stack Developer • Backend Systems • REST APIs</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Phone className="h-5 w-5 text-blue-300/90" />
                    <span className="font-semibold text-white/80">+91 9081584119</span>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Mail className="h-5 w-5 text-purple-300/90" />
                    <span className="font-semibold text-white/80">falduprit06@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="mt-5 space-y-3">
                <p className="text-sm font-semibold text-white/90">Social links</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/prit1112"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-blue-300/85 group-hover:text-blue-200" />
                    <span className="text-sm font-semibold text-white/90">GitHub</span>
                    <ArrowRight className="h-4 w-4 text-electric/80 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prit-faldu-43b5b12ab"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-purple-300/85 group-hover:text-purple-200" />
                    <span className="text-sm font-semibold text-white/90">LinkedIn</span>
                    <ArrowRight className="h-4 w-4 text-electric/80 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white/90">Contact form</p>
                    <p className="mt-1 text-xs text-white/60">This opens your email client with a prefilled message.</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                    <Sparkles className="h-4 w-4 text-blue-300/90" />
                    Recruiter friendly
                  </span>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setError('');

                    if (!name.trim() || !email.trim() || !message.trim()) {
                      setError('Please fill out all fields.');
                      return;
                    }

                    if (!isValidEmail(email)) {
                      setError('Please enter a valid email address.');
                      return;
                    }

                    setStatus('sending');

                    // Attempt to open the email client.
                    window.location.href = mailto;
                    setStatus('sent');

                    // Clear the form after opening.
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="grid gap-4"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-xs font-semibold text-white/70">Your name</span>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none focus:border-electric/40 focus:ring-2 focus:ring-electric/20"
                        placeholder="e.g., Alex Johnson"
                      />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-xs font-semibold text-white/70">Email</span>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none focus:border-electric/40 focus:ring-2 focus:ring-electric/20"
                        placeholder="you@company.com"
                        type="email"
                      />
                    </label>
                  </div>

                  <label className="grid gap-2">
                    <span className="text-xs font-semibold text-white/70">Message</span>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white/90 placeholder:text-white/35 outline-none focus:border-electric/40 focus:ring-2 focus:ring-electric/20"
                      placeholder="Tell me about the role/project, timeline, and what success looks like..."
                    />
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs text-white/55">
                        By sending, you agree this message will be forwarded via email.
                      </p>
                      {error ? (
                        <p className="mt-2 text-xs font-semibold text-red-300/90" role="alert">
                          {error}
                        </p>
                      ) : null}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="group inline-flex items-center justify-center gap-2 rounded-xl bg-electric px-5 py-3 text-sm font-semibold text-slate-950 shadow-soft-glow transition duration-200 hover:scale-[1.02] disabled:opacity-70"
                    >
                      {status === 'sent' ? 'Opening email…' : 'Send message'}
                      <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

