# Samiul Alim Portfolio

<div align="center">

A modern developer portfolio built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **Bun**.

[![Live Demo](https://img.shields.io/badge/Live-Demo-14b8a6?style=for-the-badge)](https://sa-shihab.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06b6d4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.3.6-f5f5f5?style=for-the-badge&logo=bun&logoColor=000)](https://bun.sh/)

**Live Site:** [sa-shihab.vercel.app](https://sa-shihab.vercel.app/)

</div>

---

## Overview

This repository contains the source code for my personal portfolio website. It is designed to showcase my background, work experience, selected projects, résumé, and contact information in a clean and professional single-page layout.

The site focuses on:
- a strong personal brand presentation
- responsive design for desktop and mobile
- smooth section-based navigation
- data-driven experience and project sections
- a modern interactive UI with subtle motion and spotlight effects

---

## Features

- **Responsive portfolio layout** with a sticky sidebar on desktop and a compact header on mobile
- **Scroll-aware navigation** that highlights the active section while browsing
- **Interactive spotlight cursor effect** for a polished visual feel
- **About, Experience, Projects, and Contact sections** in a clean single-page flow
- **JSON-powered content management** for projects and work experience
- **Project showcase cards** with images, descriptions, tech stacks, and repository links
- **Résumé download/view option** directly from the portfolio
- **Social links integration** for GitHub, LinkedIn, and X
- **Custom 404 page** support

---

## Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

### UI / Utilities
- GSAP
- Lucide React
- clsx
- tailwind-merge
- Zod

### Tooling
- Bun
- ESLint
- Vercel

---

## Project Structure

```bash
.
├── public/
│   ├── images/
│   ├── svg/
│   └── Shamiul-Alim.pdf
├── src/
│   ├── app/
│   │   ├── 404.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── main/
│   │   │   ├── MainContent.tsx
│   │   │   └── sections/
│   │   ├── sidebar/
│   │   └── ui/
│   ├── data/
│   │   ├── experiences.json
│   │   └── projects.json
│   ├── hooks/
│   ├── services/
│   ├── styles/
│   └── types/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Sections Included

### About
A short introduction that highlights background, technical skills, and development interests.

### Experience
A timeline-style section for professional experience, role details, company links, and technologies used.

### Projects
A showcase of selected projects with preview images, descriptions, tech stacks, and GitHub links.

### Contact
A simple call-to-action section with an email contact button.

---

## Getting Started

### Prerequisites
Make sure you have one of the following installed:
- **Bun** `1.3.6` or later
- **Node.js** `20+`

### Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
bun install
```

### Run the development server

```bash
bun run dev
```

Then open:

```bash
http://localhost:3000
```

### Production build

```bash
bun run build
bun run start
```

### Lint

```bash
bun run lint
```

### Type check

```bash
bun run typecheck
```

---

## Customization

You can easily customize the portfolio content by editing these files:

- **Profile / hero / sidebar content** → `src/components/sidebar/Sidebar.tsx`
- **Navigation items** → `src/components/sidebar/Nav.tsx`
- **About text** → `src/components/main/sections/AboutSection.tsx`
- **Experience data** → `src/data/experiences.json`
- **Project data** → `src/data/projects.json`
- **Contact email** → `src/components/main/sections/ContactSection.tsx`
- **Résumé file** → `public/Shamiul-Alim.pdf`
- **Profile and project images** → `public/images/`
- **Social media links** → `src/components/sidebar/Socials.tsx`

---

## Deployment

This project is deployed on **Vercel**.

**Live URL:** [https://sa-shihab.vercel.app/](https://sa-shihab.vercel.app/)

To deploy your own version:
1. Push the repository to GitHub
2. Import the repository into Vercel
3. Set the install/build commands if needed for Bun
4. Deploy

---

## Notes

- The portfolio content is currently powered by local JSON files for simplicity and easy maintenance.
- The contact email in `ContactSection.tsx` should be updated to your real email before production use if needed.
- The project is structured cleanly so additional sections, animations, or CMS integration can be added later.

---

## Author

**Samiul Alim**

- GitHub: [@Shamiul-alim](https://github.com/Shamiul-alim)
- LinkedIn: [Shamiul Alim](https://www.linkedin.com/in/shamiul-alim-96bb6b247)
- Portfolio: [sa-shihab.vercel.app](https://sa-shihab.vercel.app/)

---

## License

This project is open for personal inspiration and portfolio learning purposes.

If you use it as a base, please customize the content and design to make it your own.
