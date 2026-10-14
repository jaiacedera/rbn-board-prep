# RBN — Nursing Board Review

RBN is a nursing board review website designed to help nursing students and graduates prepare for their licensure examination through organized review modules, practice exams, and guided learning.

The project was inspired by a nurse and nursing instructor who wanted an accessible online platform to support students in their board exam preparation. RBN brings study materials and practice activities together so students can review at their own pace and understand the reasoning behind their answers.

## Purpose

RBN aims to help students:

- Review nursing concepts through clearly organized subjects and lessons.
- Practice answering questions and learn from answer rationales.
- Identify topics that need more review.
- Track their learning progress and exam performance.
- Access learning support from a planned AI review tutor.

The platform is intended to complement instruction and independent study. It does not guarantee a passing board exam result.

## Intended Users

- Nursing students preparing for the board examination.
- Nursing graduates reviewing for their licensure examination.
- Nursing instructors who will organize and maintain review content.

## Current Prototype

The current version is an interactive frontend prototype containing:

- A responsive home page with RBN branding.
- A searchable module catalog with free and premium labels.
- One sample lesson about the nursing process.
- A five-question sample exam with scores and answer rationales.
- Progress and exam history saved in the current browser using localStorage.
- Simple rule-based recommendations based on sample quiz mistakes.
- A scripted tutor demonstration with sample prompts.
- A preview of the planned premium review package.
- A web app manifest and service worker for basic PWA support.

Premium materials remain locked. Student accounts, verified payments, a production database, live AI responses, and a trained recommendation model are not connected in this prototype. The sample content is illustrative and is not presented as actual board exam questions.

## Planned Platform Features

- **Instructor administration:** manage lessons, questions, approved answers, rationales, and students.
- **Paid access:** unlock published modules and exams after backend payment verification, with configurable access duration.
- **Practice and mock exams:** subject quizzes and timed exam sessions, with grading on the server.
- **Results review:** provide approved correct answers and rationales after submission, according to access rules.
- **AI tutor:** explain approved lessons, guide practice, and help students understand mistakes using references from accessible modules.
- **Personalized learning:** recommend lessons and practice topics based on performance, with ML added after sufficient data is collected and evaluated.
- **Progress synchronization:** retain student activity across authenticated devices.

## Review Subjects

The proposed module catalog includes:

- Fundamentals of Nursing
- Medical–Surgical Nursing
- Maternal & Child Nursing
- Community Health Nursing
- Mental Health Nursing
- Pharmacology Essentials

The full curriculum and exam coverage should be finalized and reviewed by the nursing instructor before publication.

## Technology and Structure

The frontend is React + TypeScript + Vite. The backend is a separately hosted Node/Express + TypeScript service, with an optional Supabase PostgreSQL connection pool. No prior backend or Supabase integration was present to reuse.

```text
frontend/
  public/                 # PWA manifest, service worker, icons
  src/
    assets/
    components/           # Navbar, Footer, navigation, cards, dialog, chat
    pages/                # Home, Modules, Lesson, Exams, Quiz, Results,
                          # Progress, Tutor, Plans, ContactUs
    hooks/                # Hash routing and demo state
    context/              # Shared demo provider
    services/             # Mock content, scripted tutor, storage, API boundary
    utils/                # Types, sample grading, recommendations
    App.tsx               # Routing and shared layout only
    main.tsx
    index.css             # Original theme and responsive CSS
backend/
  src/
    config/               # Environment and PostgreSQL pool
    controllers/
    models/
    routes/
    middleware/
    services/
    utils/
    app.ts
    server.ts
database/
  migrations/             # No-op scaffold; no live schema claimed
scripts/                  # Development runner and verification
```

Existing hash URLs (`#home`, `#modules`, `#lesson`, `#exams`, `#progress`, `#tutor`, `#plans`) remain supported. Quiz and results have their own views at `#quiz` and `#results`. ContactUs is an unconnected placeholder at `#contact-us` (alias `#contact`); no contact page or address existed in the original. The original horizontal mobile navigation is preserved by the MobileDrawer component; no new overlay or menu design is introduced.

## Setup and Development

Use Node.js 22.18+ (Node 24 recommended) and npm. Install from the repository root:

```bash
npm ci
npm run dev
```

The frontend runs on Vite's printed URL (normally `http://localhost:5173`). Express runs on `http://localhost:3001`. To run either separately, use `npm run dev:frontend` or `npm run dev:backend`. On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.

Optional configuration: copy `frontend/.env.example` to `frontend/.env`, and `backend/.env.example` to `backend/.env`. Actual environment files are ignored. Frontend `VITE_API_URL` is a public, build-time API origin. Backend `PORT`, `FRONTEND_ORIGIN`, and `DATABASE_URL` stay on the server. Never put database credentials or service-role secrets in a `VITE_` variable.

The demos require neither environment file nor a database. Progress retains the existing `nbp-progress` localStorage key, so activity survives the refactor when served from the same origin. Quiz grading, recommendations and tutor replies remain sample frontend logic. Accounts, payments, premium content, live AI, contact delivery and synchronized progress are not implemented.

## Build and Verification

```bash
npm run build           # Type-check frontend and build frontend/dist
npm run preview         # Preview the production frontend
npm run build:backend   # Compile Express to backend/dist
npm test                # Demo logic, routing, assets and backend checks
```

Vite bundles JS/CSS into `frontend/dist/assets/` and copies `frontend/public/` into `frontend/dist/`. The generated `asset-manifest.json` lets the service worker precache the hashed bundles. Service worker registration is enabled only in production; verify PWA behavior with the production preview over HTTPS or localhost.

## Cloudflare Frontend Deployment

Run Cloudflare commands from the repository root:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy --assets ./frontend/dist`

`wrangler.jsonc` explicitly configures static hosting from `./frontend/dist`. No Cloudflare auto-setup, Worker entry point, or Cloudflare Vite plugin is needed. Update any old dashboard deploy command that still references `./dist`. Set `VITE_API_URL` during the frontend build only when a real backend is deployed. No backend code or backend environment files are included in the frontend build.

## Backend Hosting and Database

Deploy Express separately to a Node-capable host. From the repository root, install with `npm ci`, build with `npm run build:backend`, and start with `npm run start --workspace backend`. Configure backend environment variables through the host, including `FRONTEND_ORIGIN` set to the deployed frontend origin. CORS is limited to that origin; it is not authentication.

`GET /api/health` reports API availability and whether database configuration is present. It does **not** verify a database connection. Other API routes return 404. The optional pool in `backend/src/config/database.ts` is not yet queried by any demo. Use the Supabase dashboard's PostgreSQL connection string with SSL in backend `DATABASE_URL` when implementing real persistence.

See `database/README.md` for migration guidance. The initial migration intentionally creates no tables; application schema, authentication, permissions and RLS policies must be implemented and reviewed with the real integrations. Existing demos continue working independently.

## Visual Identity

| Role | Color |
| --- | --- |
| Primary maroon | `#800020` |
| Deep maroon | `#520019` |
| Gold accent | `#C9A44C` |
| Warm ivory background | `#FAF7F2` |
| Reading cards | `#FFFFFF` |
| Main text | `#292326` |

## Content and Access Protection

Production paid access must be enforced by the backend. Payment status and permissions must not rely on browser-local data. Answer keys should remain server-side during exams, and AI retrieval must respect each student's access.

Personalized watermarks, private storage, and session limits may discourage redistribution. A website or PWA cannot reliably prevent screenshots, screen recordings, or photographs of displayed content. The current sample watermark is static, and the prototype does not implement production content protection.

Paid modules, answer keys, and private API responses should not be stored in a public service worker cache.

## Educational Content

Lessons, question banks, rationales, and AI-assisted explanations require review by a qualified nursing educator before production use. The tutor should reference approved materials and acknowledge when those materials do not support an answer. Review content is for educational preparation, not patient-specific clinical advice.

