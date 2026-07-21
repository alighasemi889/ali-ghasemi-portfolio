# Ali Ghasemi — Portfolio Website

A professional, single-page portfolio website for **Ali Ghasemi**, Frontend Developer & Founder of [NeuronSec](https://github.com/alighasemi889) and [CodeMaster](https://github.com/alighasemi889).

Built with React 18, TypeScript, Tailwind CSS, and Framer Motion. Dark theme with cyan/emerald accents, fully responsive, and ready to deploy on Vercel.

## Features

- **Hero Section** — Typing animation cycling through roles, animated status badge, social links, and smooth scroll indicator
- **About Section** — Founder story, NeuronSec & CodeMaster venture cards, language skills with RTL support for Persian
- **Skills Section** — Clean skill tags with icons (no percentages or bars — just the stack)
- **Projects Section** — Three project cards with hover effects, status badges, and tech tags
- **Timeline Section** — Vertical journey timeline with animated nodes
- **Contact Section** — Contact info cards, visual-only contact form, and "Open to opportunities" badge
- **Footer** — Social links, back-to-top, and copyright

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Vite | Build tool |

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Sticky nav with active section tracking
│   ├── Hero.tsx         # Hero with typing animation
│   ├── About.tsx       # Story, ventures, languages
│   ├── Skills.tsx       # Skill tags
│   ├── Projects.tsx     # Project cards
│   ├── Timeline.tsx     # Journey timeline
│   ├── Contact.tsx      # Contact form + info
│   └── Footer.tsx      # Footer
├── data.ts              # All content data
├── hooks.ts             # useInView, useActiveSection hooks
├── types.ts             # TypeScript interfaces
├── App.tsx              # Root component
├── main.tsx             # Entry point
└── index.css            # Global styles + Tailwind
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/alighasemi889/ali-ghasemi-portfolio.git

# Navigate to the project
cd ali-ghasemi-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Deployment

This project is ready to deploy on **Vercel**:

1. Push the repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Vite — no configuration needed
4. Click Deploy

Alternatively, you can use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Customization

All content is centralized in `src/data.ts`. Edit this file to update:

- Personal information (name, role, bio, email, social links)
- Skills
- Projects
- Timeline entries
- Navigation links

## License

This project is open source and available under the MIT License.

---

Made with care by **Ali Ghasemi** — [GitHub](https://github.com/alighasemi889) | [Email](mailto:alihj4223@gmail.com)
