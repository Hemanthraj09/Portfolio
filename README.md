# Hemanth Raj — Portfolio

Personal portfolio site showcasing my projects, skills, and certifications.

Built with **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
npm run lint
```

The site is configured for static export (`output: 'export'` in `next.config.ts`), so `npm run build` produces plain HTML/CSS/JS in `out/` that can be served from any static host.

## Updating content

Most content lives in `src/data/`, so updates rarely need component changes.

| What | Where | Notes |
|---|---|---|
| Projects | `src/data/projects.ts` | The first 3 entries are featured on the home page. `id` is used in the URL (`/projects/<id>`). Set `liveLabel` to change the live-link button text (defaults to "Live Demo"). |
| Certifications | `src/data/certifications.ts` | The first 3 entries are featured on the home page. `category` drives the filter tabs on `/certifications`. |
| Skills | `src/data/skills.ts` | Each skill's `icon` key maps to an icon in `iconMap` in `src/components/Skills.tsx`; unmapped keys render as text-only chips. |
| Resume | `public/resume.pdf` | Replace this file — every "Resume" button links to it. |
| Images & videos | `public/projects/`, `public/certificates/` | Referenced by path from the data files. |

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: font, metadata, navbar
│   ├── page.tsx                # Home: Intro, Skills, Projects, Certifications, About, Contact
│   ├── globals.css             # Theme tokens (colours, font) and global styles
│   ├── projects/page.tsx       # All projects
│   ├── projects/[id]/          # Project detail pages (pre-rendered per project)
│   └── certifications/page.tsx # All certifications with category filter
├── components/                 # Page sections and cards
└── data/                       # Projects, certifications, skills
```

## Contact form

The contact form in `src/components/Contact.tsx` submits to [Formspree](https://formspree.io).
