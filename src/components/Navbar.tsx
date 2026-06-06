import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

function scrollToHash(hash: string) {
  const el = document.querySelector(hash);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const [active, setActive] = useState('#home');

  useEffect(() => {
    const ids = navItems.map((x) => x.href);
    const observers: IntersectionObserver[] = [];

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActive(`#${visible[0].target.id}`);
      },
      { root: null, threshold: [0.25, 0.35, 0.5] }
    );

    ids.forEach((hash) => {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    observers.push(obs);
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const itemClass = (href: string) =>
    href === active
      ? 'text-white/95'
      : 'text-white/70 hover:text-white/95 transition-colors';

  const Logo = useMemo(
    () => (
      <span className="inline-flex items-center gap-2 text-sm font-semibold">
        <span className="grid h-9 w-9 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          PF
        </span>
      </span>
    ),
    []
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1200px] px-4">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="h-[80px] flex items-center justify-between rounded-[32px] border border-white/10 bg-slate-950/85 px-4 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
        >
          <div className="flex items-center gap-3">
            <Link
              href="#home"
              className="flex items-center gap-3"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash('#home');
              }}
            >
              {Logo}
              <span className="hidden text-sm font-semibold tracking-[0.02em] text-white/90 sm:inline">Prit Faldu</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(item.href);
                }}
                className={`text-sm font-medium transition-colors ${itemClass(item.href)}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-white/70 hover:text-white/95 hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[88px] left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-lg md:hidden"
            >
              <div className="flex flex-col gap-2 p-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHash(item.href);
                      setOpen(false);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      item.href === active
                        ? 'text-white bg-white/10'
                        : 'text-white/70 hover:text-white/95 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
