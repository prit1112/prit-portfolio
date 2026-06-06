import React from 'react';

type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={[
        'relative w-full px-4 py-14 md:px-8 md:py-20 lg:py-24',
        'scroll-mt-[100px]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </section>
  );
}


