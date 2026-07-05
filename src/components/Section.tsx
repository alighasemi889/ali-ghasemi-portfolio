import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`max-w-2xl ${alignClass}`}
    >
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400/80 mb-3">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-zinc-400 leading-relaxed text-base sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {children}
      </div>
    </section>
  );
}
