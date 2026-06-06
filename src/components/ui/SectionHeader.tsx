import React from 'react';

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:mb-8">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold tracking-wider text-white/60">{label}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-white/10 via-electric/25 to-transparent" />
      </div>

      <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="max-w-3xl text-base leading-7 text-white/70 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}


