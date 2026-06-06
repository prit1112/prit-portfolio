"use client";

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Layers,
  Server,
  Database,
  Wrench,
  Lightbulb,
  Search,
  ChevronRight,
} from 'lucide-react';

import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';

type Skill = { name: string; tag?: string };

type SkillCategory = {
  key: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  skills: Skill[];
};

const Skills: React.FC = () => {
  const categories: SkillCategory[] = useMemo(
    () => [
      {
        key: 'languages',
        title: 'Languages',
        icon: Code2,
        description: 'Core language fluency for shipping production code.',
        skills: [
          { name: 'JavaScript', tag: 'Frontend + Backend' },
          { name: 'TypeScript (Strong)', tag: 'Types-first' },
          { name: 'Java', tag: 'OOP' },
          { name: 'C++', tag: 'DSA' },
          { name: 'SQL', tag: 'Querying' },
        ],
      },
      {
        key: 'frontend',
        title: 'Frontend',
        icon: Layers,
        description: 'Modern UI systems with performance and accessibility in mind.',
        skills: [
          { name: 'React.js', tag: 'Component Architecture' },
          { name: 'Tailwind CSS', tag: 'Design systems' },
          { name: 'Bootstrap', tag: 'Rapid UI' },
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'EJS', tag: 'Server-rendered views' },
        ],
      },
      {
        key: 'backend',
        title: 'Backend',
        icon: Server,
        description: 'APIs, auth, and scalable backend engineering.',
        skills: [
          { name: 'Node.js', tag: 'Async + APIs' },
          { name: 'Express.js', tag: 'REST APIs' },
          { name: 'JWT Authentication', tag: 'Secure sessions' },
          { name: 'REST APIs', tag: 'Clean endpoints' },
        ],
      },
      {
        key: 'database',
        title: 'Database',
        icon: Database,
        description: 'Schema design and data modeling that scales.',
        skills: [
          { name: 'MongoDB', tag: 'Document modeling' },
          { name: 'MySQL', tag: 'Relational queries' },
        ],
      },
      {
        key: 'tools',
        title: 'Developer Tools',
        icon: Wrench,
        description: 'Workflow discipline for reliable development.',
        skills: [
          { name: 'Git / GitHub', tag: 'Versioning' },
          { name: 'Postman', tag: 'API testing' },
          { name: 'VS Code' },
        ],
      },
      {
        key: 'core',
        title: 'Core Concepts',
        icon: Lightbulb,
        description: 'Problem-solving foundations that improve every project.',
        skills: [
          { name: 'Data Structures & Algorithms', tag: 'Performance' },
          { name: 'OOP', tag: 'Clean design' },
          { name: 'DBMS', tag: 'Modeling' },
          { name: 'Operating Systems', tag: 'Systems thinking' },
        ],
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState(categories[0]?.key ?? 'languages');
  const [query, setQuery] = useState('');

  const active = useMemo(
    () => categories.find((c) => c.key === activeKey) ?? categories[0],
    [activeKey, categories]
  );

  const filteredSkills = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return active.skills;
    return active.skills.filter((s) => {
      const hay = `${s.name} ${s.tag ?? ''}`.toLowerCase();
      return hay.includes(q);
    });
  }, [active.skills, query]);

  return (
    <section id="skills" className="relative px-4 py-10 md:px-8 md:py-14">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-8 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-60 w-60 rounded-full bg-purple/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-electric/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-5xl">
          <SectionHeader
            label="Skills"
            title="Modern engineering capabilities across UI, systems, and architecture"
            description="Browse curated skill categories. The focus is on practical tools and concepts that ship real product work."
          />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <p className="text-sm text-white/70">
                Search skills, compare categories, and review the technologies used across production-grade projects.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
              className="w-full md:w-[360px]"
            >
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                <input
                  value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search skills in this category..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-10 py-3 text-sm text-white/90 placeholder:text-white/40 backdrop-blur outline-none focus:border-electric/40 focus:ring-2 focus:ring-electric/20"
              />
            </div>
            <p className="mt-2 text-xs text-white/50">
              Tip: try “API”, “MongoDB”, “JWT”, or “React”.
            </p>
          </motion.div>
        </motion.div>

        {/* Category tabs + cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur">
              <div className="grid gap-2">
                {categories.map((c) => {
                  const isActive = c.key === activeKey;
                  const Icon = c.icon;
                  return (
                    <button
                      key={c.key}
                      type="button"
                      onClick={() => setActiveKey(c.key)}
                      className={
                        'group flex items-start gap-3 rounded-2xl px-3 py-3 text-left transition ' +
                        (isActive
                          ? 'border border-electric/35 bg-electric/10'
                          : 'border border-transparent bg-transparent hover:bg-white/5')
                      }
                    >
                      <span
                        className={
                          'grid h-10 w-10 place-items-center rounded-2xl transition ' +
                          (isActive
                            ? 'bg-gradient-to-br from-electric/50 to-purple/40'
                            : 'bg-white/5 group-hover:bg-white/10')
                        }
                      >
                        <Icon className="h-5 w-5 text-[#050816]" />
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-2">
                          <span className={isActive ? 'text-sm font-semibold text-white/95' : 'text-sm font-semibold text-white/80'}>
                            {c.title}
                          </span>
                          {isActive && <ChevronRight className="h-4 w-4 text-electric/80" />}
                        </span>
                        <span className="block mt-1 line-clamp-2 text-xs text-white/60">
                          {c.description}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white/90">{active.title}</p>
                  <p className="mt-1 text-xs text-white/60">
                    Hover badges for glow. Click a card to highlight focus.
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  <span className="h-2 w-2 rounded-full bg-electric" />
                  <span className="text-xs font-semibold text-white/80">
                    {filteredSkills.length} badges
                  </span>
                </motion.div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <AnimatePresence mode="wait">
                  {filteredSkills.map((s) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      whileHover={{ y: -3, boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 18px 60px rgba(0,0,0,0.35)' }}
                      className={
                        'group rounded-2xl border border-white/10 bg-white/5 p-4 transition backdrop-blur'
                      }
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold tracking-tight">{s.name}</p>
                          {s.tag ? <p className="mt-1 text-xs text-white/70">{s.tag}</p> : null}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredSkills.length === 0 ? (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
                  <p className="text-sm font-semibold text-white/90">No matches</p>
                  <p className="mt-1 text-xs text-white/60">Try a different keyword.</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Container>
    </section>
  );
};

export default Skills;

