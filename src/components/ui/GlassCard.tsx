import React from 'react';

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={[
        'rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}

