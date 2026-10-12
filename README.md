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

## Technology

### Current source

- HTML, CSS, and JavaScript
- localStorage for browser-local sample progress
- Web app manifest and service worker

### Proposed integrations

- Supabase PostgreSQL, authentication, and private file storage
- Backend endpoints for payment verification, access checks, grading, and AI requests
- An AI provider API with retrieval from approved review materials
- A Python ML service if a trained recommendation model is introduced

These integrations are planned and are not required to run the current prototype.

## Run Locally

Extract the website source into a folder. From the folder containing `index.html`, run:

```bash
python -m http.server 8000
```

On Windows, if your Python command is `py`, use:

```bash
py -m http.server 8000
```

Open `http://localhost:8000` in your browser. No npm installation or build step is required for the current source. PWA features require a supported browser and a secure context, such as HTTPS or localhost; installation availability varies by browser.

## Source Files

| File | Purpose |
| --- | --- |
| `index.html` | Main document, navigation, footer, and dialog |
| `style.css` | Maroon-and-gold theme and responsive layouts |
| `app.js` | Pages, sample lesson, quiz, results, progress, and scripted tutor |
| `manifest.webmanifest` | PWA name, icon, and display settings |
| `sw.js` | Basic caching of the public prototype assets |
| `icon.svg` | App icon |

In the hosted source repository, these files are under `dist/`. The downloadable source ZIP places them at its root.

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

