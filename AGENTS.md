# Omesh Kumar — Personal Portfolio Agent Instructions

## About Me
- **Name:** Omesh Kumar
- **Role:** Full-Stack Developer · Founder
- **Email:** omeshkumarfso@gmail.com
- **Phone:** +91 96344 09101
- **Location:** India (UTC+5:30)
- **Experience:** ~5 years building and shipping production web apps
- **Open to:** Senior remote roles globally + relocation

## Project Setup
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **3D:** React Three Fiber + Three.js + @react-three/drei
- **Animation:** GSAP + ScrollTrigger
- **Deploy:** Vercel
- **Theme:** Dark, glassmorphism, floating 3D elements, premium feel

## Tech Stack to Showcase (from resume)
**Frontend:** JavaScript (ES6+), TypeScript, React, Next.js, React Native,
Redux Toolkit, TanStack Query, React Router, Tailwind CSS, MUI, HTML5/CSS3

**Backend:** Node.js, Express.js, MongoDB/Mongoose, REST APIs,
JWT Authentication, WebSockets

**Cloud & Tools:** AWS (EC2, S3, Load Balancers), Azure, Docker,
CI/CD, Git/GitHub/GitLab, Swagger, Postman, JIRA, Agile

## Experience Timeline (for About / Timeline section)
1. **Eniacoder Pvt. Ltd.** — Apr 2020 – Mar 2021 | Developer, Jaipur
2. **Celebal Technology Pvt. Ltd.** — Jul 2021 – Aug 2022 | Associate Software Developer
3. **Softworld (India) Pvt. Ltd.** — Aug 2022 – May 2023 | React Developer → Team Lead
4. **FiftyFiveTechnologies Pvt. Ltd.** — Nov 2023 – Sep 2025 | Software Developer
5. **Kodikas** — 2026 – Present | Founder & Full-Stack Developer

## Projects to Feature (with real metrics)

### Kodikas Studio (2026–Present)
Three-portal multi-tenant e-commerce platform: customer storefront,
merchant portal, super-admin console with tiered subscription billing.
Stack: React, TypeScript, Node.js

### Logical Contracts (FiftyFiveTechnologies)
AI-powered legal contract platform with real-time collaboration.
- Real-time collaborative editor: 20+ simultaneous users, 100+ page contracts
- Integrated OpenAI for contract drafting
- 45% reduction in page load time
- 80% test coverage
Role: Frontend Lead
Stack: React, TypeScript, Node.js, OpenAI

### Quickbit (FiftyFiveTechnologies)
Secure cryptocurrency payment platform for merchant crypto acceptance
and bank-to-crypto transactions under compliance workflows.
Stack: React, TypeScript, Node.js, JWT

### SwilMart (Softworld)
Multi-tenant e-commerce ecosystem: admin, B2B, B2C portals.
Order management, inventory tracking, merchant onboarding.
- Led cross-functional team of 7, reporting to founder
- 50% improvement in system response time
- Integrated POS and delivery via microservices
Role: React Developer → Team Lead
Stack: React, Node.js, microservices

### Swil ERP Admin (Softworld)
Enterprise ERP admin platform for permissions and workflows.
- RBAC system managing 4,800+ variables
- 75% reduction in form-submission errors
- 40% improvement in admin workflow efficiency
Stack: React, TypeScript

### HR Engagement App (Celebal Technology)
HR engagement and hiring-workflow application with Zoho-database
integration for employee status and profiles.
Stack: React, Node.js, Zoho

### TATA Motors Employee Portal (Celebal Technology)
Employee request portal for leave approval workflows and
COVID-vaccination tracking.
Stack: React

### Dating App (Eniacoder)
Web and mobile dating app with authentication, Redux state management,
tiered Silver/Gold profiles, and Razorpay payment-gateway integration.
Stack: React, React Native, Redux, Razorpay

## Open Source
- Contributed initial Hindi locale support to **wanasit/chrono**
  (natural-language date parser) — open PR #645

## Education
- B.Tech — Arya Institute of Engineering and Technology, 2021

## Portfolio Sections to Build (in order)
1. **Hero** — Full name, role title, short tagline, floating 3D element, CTA buttons (View Work / Contact)
2. **About** — Summary text, ~5yr experience, founder of Kodikas, open to remote/relocation
3. **Experience** — Vertical 3D timeline with 5 companies and date ranges
4. **Projects** — 8 project cards with metrics, tech stack badges, hover 3D effect
5. **Tech Stack** — Floating 3D icons grouped by Frontend / Backend / Cloud
6. **Open Source** — Highlight chrono Hindi locale PR
7. **Contact** — Glassmorphism form (Name, Email, Subject, Message) with EmailJS

## Agent Rules (Always Follow)
- All R3F/Three.js components must use `dynamic` import with `ssr: false` (Next.js SSR safety)
- Every 3D section needs a static CSS fallback for mobile and low-end devices
- Use `prefers-reduced-motion` media query on all GSAP animations
- One component file per section → `/components/sections/`
- Shared 3D primitives → `/components/3d/`
- No placeholder text — use real content from this file
- All metrics from resume must appear exactly as stated
- Contact form must use EmailJS (no backend needed)
- Optimize for Lighthouse score: lazy-load all 3D, compress textures
- Mobile first — 3D degrades gracefully, layout never breaks below 375px