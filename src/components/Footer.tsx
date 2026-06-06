import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <div className="grid gap-4 md:grid-cols-3 md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white/90">Prit Faldu</p>
            <p className="text-xs text-white/60">Full Stack Engineer</p>
          </div>
          <p className="text-sm text-white/60">Premium product-focused engineering for scalable web systems.</p>
          <p className="text-xs text-white/50">© {year} Prit Faldu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
