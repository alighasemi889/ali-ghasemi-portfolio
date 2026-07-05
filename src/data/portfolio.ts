import {
  Shield,
  Code2,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const personal = {
  name: 'Ali Ghasemi',
  title: 'Cybersecurity Analyst & Web Developer',
  tagline: 'Building secure, scalable, modern web applications.',
  email: 'ali.ghasemi@example.com',
  github: 'https://github.com/alighasemi',
  linkedin: 'https://linkedin.com/in/alighasemi',
  telegram: 'https://t.me/alighasemi',
  location: 'Tehran, Iran',
  available: true,
};

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm a cybersecurity analyst and web developer who believes security and great software are not separate disciplines — they're two sides of the same coin. I spend my days hunting vulnerabilities, hardening systems, and building web applications that are as resilient as they are elegant.",
    "My work spans secure software development, backend architecture, and modern frontend engineering. I'm drawn to problems where reliability, performance, and trust matter — the kind where a single oversight can cost a business everything.",
    "Beyond the keyboard, I'm a relentless learner. New frameworks, emerging threats, defensive tooling, cryptographic advances — I treat the field as a moving target and keep my edge sharp. I believe the best engineers are the ones who never stop being students.",
  ],
  highlights: [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Projects Delivered', value: '40+' },
    { label: 'Vulnerabilities Reported', value: '120+' },
    { label: 'Certifications', value: '6' },
  ],
};

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: Code2,
    accent: 'text-sky-400',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Framer Motion'],
  },
  {
    name: 'Backend',
    icon: Server,
    accent: 'text-emerald-400',
    skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    accent: 'text-rose-400',
    skills: ['Penetration Testing', 'OWASP Top 10', 'Burp Suite', 'Nmap', 'Wireshark', 'SIEM'],
  },
  {
    name: 'Databases',
    icon: Database,
    accent: 'text-amber-400',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma'],
  },
  {
    name: 'Tools & DevOps',
    icon: Wrench,
    accent: 'text-violet-400',
    skills: ['Git', 'Docker', 'Linux', 'Nginx', 'GitHub Actions', 'AWS'],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'SecureVault',
    description:
      'A zero-knowledge password manager with end-to-end encryption, client-side hashing, and a hardened audit trail. Built to prove security can be user-friendly.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/alighasemi/securevault',
    demo: 'https://securevault.demo',
    featured: true,
  },
  {
    title: 'ThreatMap',
    description:
      'Real-time threat intelligence dashboard aggregating OSINT feeds, visualizing attack patterns, and alerting security teams on anomalies.',
    tech: ['Next.js', 'FastAPI', 'Redis', 'WebSockets'],
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/alighasemi/threatmap',
    demo: 'https://threatmap.demo',
    featured: true,
  },
  {
    title: 'PhishGuard',
    description:
      'A browser extension that detects phishing URLs in real time using heuristic analysis and a community-driven blocklist. Lightweight, fast, privacy-first.',
    tech: ['TypeScript', 'WebExtension', 'Python'],
    image: 'https://images.pexels.com/photos/270700/pexels-photo-270700.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/alighasemi/phishguard',
    demo: 'https://phishguard.demo',
  },
  {
    title: 'DevSecOps Pipeline',
    description:
      'A CI/CD pipeline template with automated SAST, DAST, dependency scanning, and container image hardening — drop-in for any team shipping to production.',
    tech: ['Docker', 'GitHub Actions', 'Trivy', 'Nginx'],
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/alighasemi/devsecops-pipeline',
    demo: 'https://devsecops.demo',
  },
  {
    title: 'AuditLog',
    description:
      'Tamper-evident logging service using cryptographic chaining — every log entry is verifiably linked to the previous one. Built for compliance-heavy systems.',
    tech: ['Go', 'PostgreSQL', 'gRPC'],
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/alighasemi/auditlog',
    demo: 'https://auditlog.demo',
  },
  {
    title: 'Portfolio OS',
    description:
      'A modular portfolio framework for engineers — themeable, accessible, and fast. The very site you are looking at right now.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.pexels.com/photos/1772124/pexels-photo-1772124.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/alighasemi/portfolio-os',
    demo: 'https://alighasemi.dev',
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    role: 'Cybersecurity Analyst',
    company: 'Independent / Freelance',
    period: '2023 — Present',
    location: 'Remote',
    description:
      'Perform penetration testing, vulnerability assessments, and secure code review for early-stage startups. Deliver actionable reports and help teams remediate findings before they reach production.',
    current: true,
  },
  {
    role: 'Full-Stack Web Developer',
    company: 'Various Clients',
    period: '2021 — 2023',
    location: 'Tehran, Iran',
    description:
      'Designed and shipped secure web applications end-to-end — from database schema to polished UI. Specialized in authentication flows, API hardening, and performance optimization.',
  },
  {
    role: 'Junior Developer',
    company: 'Local Tech Studio',
    period: '2020 — 2021',
    location: 'Tehran, Iran',
    description:
      'Built and maintained client websites, internal dashboards, and CMS integrations. First exposure to real-world security incidents — the spark that led to my cybersecurity focus.',
  },
];

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  description: string;
}

export const education: EducationItem[] = [
  {
    degree: 'B.Sc.',
    field: 'Computer Engineering',
    institution: 'University of Tehran',
    period: '2016 — 2020',
    description:
      'Foundations of algorithms, operating systems, networks, and software engineering. Senior project focused on intrusion detection systems.',
  },
];

export interface Certificate {
  name: string;
  issuer: string;
  year: string;
  description: string;
}

export const certificates: Certificate[] = [
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    year: '2024',
    description: 'Hands-on penetration testing and ethical hacking methodology.',
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    year: '2023',
    description: 'Core security concepts, risk management, and threat analysis.',
  },
  {
    name: 'OWASP Top 10 Practitioner',
    issuer: 'OWASP Foundation',
    year: '2023',
    description: 'Web application vulnerabilities and secure coding practices.',
  },
  {
    name: 'Google Cybersecurity Certificate',
    issuer: 'Google',
    year: '2022',
    description: 'SIEM, incident response, and security operations fundamentals.',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
