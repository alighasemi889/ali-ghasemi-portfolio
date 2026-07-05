import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading } from './Section';
import { personal } from '../data/portfolio';

const channels = [
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: Github, label: 'GitHub', value: '@alighasemi', href: personal.github },
  { icon: Linkedin, label: 'LinkedIn', value: '/in/alighasemi', href: personal.linkedin },
  { icon: Send, label: 'Telegram', value: '@alighasemi', href: personal.telegram },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something secure."
        description="Whether it's a security audit, a full-stack build, or just a conversation about the craft — my inbox is open."
        align="center"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-12 max-w-3xl mx-auto"
      >
        <div className="rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-8 sm:p-10 backdrop-blur-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-white/[0.03] border border-white/10 p-4 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200"
              >
                <span className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon size={17} className="text-zinc-300" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-zinc-500">{label}</div>
                  <div className="text-sm font-medium text-zinc-200 truncate">{value}</div>
                </div>
                <ArrowUpRight size={15} className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>

          <a
            href={`mailto:${personal.email}`}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-zinc-900 text-sm font-semibold rounded-xl px-5 py-3.5 transition-all duration-200 hover:scale-[1.01] active:scale-95"
          >
            <Mail size={15} />
            Send a message
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
