import { motion } from 'framer-motion';
import { Briefcase, Rocket, BookOpen } from 'lucide-react';
import { timeline, type TimelineItem } from '@/data';
import { useInView } from '@/hooks';
import { SectionHeading } from './About';

const iconFor = (title: string) => {
  if (title.toLowerCase().includes('founder')) return Rocket;
  if (title.toLowerCase().includes('started')) return BookOpen;
  return Briefcase;
};

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
  const { ref, inView } = useInView<HTMLLIElement>();
  const Icon = iconFor(item.title);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12 pb-10 last:pb-0"
    >
      {index < timeline.length - 1 && (
        <span className="absolute left-[18px] top-12 bottom-0 w-px bg-gradient-to-b from-white/15 to-transparent" />
      )}

      <span
        className={`absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border ${
          item.current
            ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-400'
            : 'border-white/10 bg-white/[0.03] text-slate-400'
        }`}
      >
        <Icon size={16} />
        {item.current && (
          <span className="absolute inset-0 animate-ping rounded-full border border-cyan-400/30" />
        )}
      </span>

      <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
          <span className="font-mono text-xs font-medium text-cyan-400">
            {item.year}
          </span>
        </div>
        <div className="mt-1 text-sm font-medium text-slate-300">
          {item.organization}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}

export default function Timeline() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="04" title="My Journey" />
        <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
          The milestones that shaped my path into frontend development and
          building products.
        </p>

        <ol className="mt-14 max-w-2xl">
          {timeline.map((item, i) => (
            <TimelineEntry key={item.year + item.title} item={item} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
