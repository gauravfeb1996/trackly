# Trackly — Personal Job Tracking Portal

**Track. Organize. Get Hired.**

Trackly is a modern, full-stack job application tracking portal built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**[cite: 2, 3]. It helps job seekers centralize their job applications, stay on top of interview schedules with smart reminders, and visualize their job search funnel through interactive analytics[cite: 2].

---

## ✨ Key Features

- **Centralized Application Tracking:** Keep all job applications, interview rounds, offers, and follow-ups organized in one unified workspace[cite: 2].
- **Interactive Analytics Dashboard:** Monitor application status in real time with visual Application Funnels, Weekly Activity trends, and key metrics (Applications, Interviews, Offers, Hired)[cite: 2].
- **Smart Reminders:** Never miss an upcoming interview, assessment, or follow-up deadline[cite: 2].
- **Actionable Insights:** Track your overall job search performance and conversion rates across stages[cite: 2].
- **Modern Responsive UI:** Clean, warm aesthetic featuring glassmorphism cards, interactive dashboard previews, and responsive layouts[cite: 2].

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)[cite: 3]
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Linting:** ESLint (`eslint.config.mjs`)[cite: 3]

---

## 📂 Project Structure

```text
JOB-TRACKING-PORTAL/
├── .cursor/
│   └── rules/
│       └── figma-design.mdc     # Design system & UI guidelines
├── app/
│   ├── _components/
│   │   ├── landing/             # Landing page sections (Hero, Features, Testimonials, CTA, Footer)
│   │   └── ui/                  # Reusable UI primitives & components
│   ├── dashboard/               # Authenticated dashboard routes & views
│   ├── favicon.ico
│   ├── globals.css              # Global styles and Tailwind configuration
│   ├── layout.tsx               # Root application layout
│   └── page.tsx                 # Landing page entry point
├── lib/
│   └── utils.ts                 # Utility functions and class helpers
├── public/                      # Static assets, icons, and media
├── AGENTS.md                    # AI agent workflow & project instructions
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Project dependencies and scripts
└── tsconfig.json                # TypeScript configuration
