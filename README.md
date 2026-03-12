# 10Q Designs

A modern, high-performance portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion.

**Repository:** [github.com/oobaretin/10Q-Designs](https://github.com/oobaretin/10Q-Designs)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Components:** Shadcn/UI (Card, Button, Dialog)
- **Animations:** Framer Motion
- **Language:** TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment (Vercel)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy — zero config required

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
src/
├── app/           # App Router pages & layout
├── components/    # React components
│   ├── ui/        # Shadcn UI primitives
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProjectGrid.tsx
│   ├── ProjectCard.tsx
│   ├── About.tsx
│   └── Contact.tsx
└── lib/           # Utilities & data
```

## Customization

- **Accent color:** Edit `--accent` in `src/app/globals.css` (default: Electric Blue `#3b82f6`)
- **Projects:** Edit `src/lib/projects.ts`
- **Contact:** Update social links and email in `src/components/Contact.tsx`
