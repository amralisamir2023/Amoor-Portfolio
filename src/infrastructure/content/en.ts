import type { Portfolio } from "@/core/entities/portfolio";
import { makeLinks } from "./links";

export const en: Portfolio = {
  locale: "en",
  meta: {
    title: "Amoor (عمور) — Frontend Developer",
    description:
      "Frontend developer from Cairo building polished, Arabic-ready (RTL) React and React Native products.",
  },
  brand: { mark: "A", name: "Amoor" },
  ui: {
    nav: { about: "About", skills: "Skills", work: "Work", contact: "Contact" },
    hire: "Hire me",
    seeWork: "See my work",
    letsTalk: "Let's talk",
    startProject: "Start a project",
    scroll: "Scroll ↓",
    uspLabel: "My promise",
    liveDemo: "Live demo",
    featuresLabel: "Features",
    viewCaseStudy: "View case study",
    crumbHint: "Hover over the words",
    themeToLight: "Light",
    themeToDark: "Dark",
    otherLanguage: "عربي",
  },
  hero: {
    eyebrow:
      "Hi, I'm Amoor, a frontend developer from Cairo. A Computer Science student, a designer for 8 years, and I publish Arabic programming explainers.",
    headlineBefore: "I design it.",
    headlineAccent: "I build it.",
    headlineAfter: "You launch it.",
    lead: "From brand and UI to working React and React Native code, Arabic-ready, all from one person. I explain every step in simple language.",
    location: "Cairo, EG",
  },
  about: {
    copy: { label: "About", title: "Code that works, explained simply" },
    intro: "I'm a Computer Science student who ships real products, not only course exercises.",
    paragraphs: [
      "I build web apps, PWAs, and mobile apps with React, Next.js, TypeScript, and React Native. I care about interfaces that feel quick, work offline when needed, and read correctly in both Arabic (RTL) and English (LTR).",
      "I also publish Arabic programming explainers, so I'm used to breaking complex topics into small, clear steps. That's how I work with clients too: you always know what I'm building and why.",
      "Before code, I was a designer. Eight years of graphic design and minimalist UI work means I design the interface, the brand around it, and then build it myself, so nothing gets lost between design and development.",
    ],
    usp: "I'm a frontend developer with 8 years of design experience. I turn your idea into a polished, Arabic-ready (RTL) React or React Native product, from brand and UI to working code, with no designer-to-developer handoff gaps.",
  },
  marquee: ["React", "Next.js", "TypeScript", "React Native", "RTL", "Supabase", "PWA"],
  proof: [
    { value: 8, label: "years in design" },
    { value: 4, label: "projects shipped" },
    { value: 2, label: "languages · RTL + LTR" },
  ],
  story: {
    copy: { label: "The story", title: "Two jobs, usually two people" },
    statement:
      "Most products lose something between the designer and the developer. Spacing drifts, states get skipped, and Arabic breaks. I do both jobs, so the design you approve is the product you get.",
    merge: { design: "Design", code: "Code", gap: "The handoff gap", one: "One person. One vision." },
  },
  journey: {
    copy: { label: "My journey", title: "From pixels to production" },
    stages: [
      {
        phase: "8 years ago",
        title: "It started with design",
        text: "I began as a graphic designer and learned to care about hierarchy, spacing, and how people actually look at a page.",
        visual: "design",
      },
      {
        phase: "University",
        title: "Computer Science",
        text: "I joined the Higher Institute of Computers in Cairo to understand how software is built, not only how it looks.",
        visual: "university",
      },
      {
        phase: "Frontend course",
        title: "Learning to code",
        text: "The DEPI scholarship and NTI & ITI training took me into React and how real frontend teams work, followed by a remote internship at CodeAlpha.",
        visual: "frontend",
      },
      {
        phase: "Projects",
        title: "Shipping real products",
        text: "Fast ID with a team of 5, SideBy, Anbar, and a chest X-ray AI system with a team of 7.",
        visual: "projects",
        images: [
          { src: "/projects/sideby-hero.jpg", alt: "SideBy dashboard" },
          { src: "/projects/sideby-battalions.jpg", alt: "SideBy battalions" },
          { src: "/projects/sideby-tour.jpg", alt: "SideBy app tour" },
        ],
      },
      {
        phase: "UI / UX",
        title: "Design meets code",
        text: "I studied UI/UX properly and folded it into every project: minimalist interfaces, full brand identities, and Arabic-first layouts.",
        visual: "uiux",
      },
      {
        phase: "Today",
        title: "One person, design to code",
        text: "That's why I can take your idea from brand and UI to a working React or React Native product.",
        visual: "merge",
      },
    ],
  },
  process: {
    copy: { label: "How it works", title: "From idea to shipped, in four steps", subtitle: "You always know what's happening and why." },
    steps: [
      { title: "Talk", text: "Tell me the idea. I reply with a clear plan, timeline, and price." },
      { title: "Design", text: "Brand and interface, shown to you before any code is written." },
      { title: "Build", text: "Clean React or React Native, RTL-ready, built in small steps you can follow." },
      { title: "Ship & explain", text: "You get a working product and a simple walkthrough, so you actually understand it." },
    ],
  },
  audiences: {
    copy: { label: "Work with me", title: "Pick your path" },
    items: [
      {
        title: "Have an idea or a business?",
        text: "Get a polished, Arabic-ready web or mobile app, with design and code from one person.",
        cta: "Start a project",
        href: "#contact",
      },
      {
        title: "Hiring a frontend developer?",
        text: "React, Next.js, TypeScript, and React Native, with a design background and real team experience: a 5-person DEPI project and a 7-person graduation project.",
        cta: "Let's talk",
        href: "#contact",
      },
    ],
  },
  education: {
    copy: { label: "Education", title: "Degree & training" },
    items: [
      { meta: "Exp. Jan 2027", title: "B.Sc. Computer Science", text: "Higher Institute of Computers, 6th of October, Cairo" },
      { meta: "6 months", title: "DEPI Scholarship", text: "Technical track with a team final project" },
      { meta: "Training", title: "NTI & ITI", text: "Programming training programs" },
    ],
  },
  skills: {
    copy: { label: "Skills", title: "Core stack", subtitle: "What I use to build and ship." },
    groups: [
      { title: "Design", tags: ["UI / UX design", "Graphic design", "Minimalist UI", "Brand identity"] },
      { title: "Web", tags: ["React", "Next.js", "TypeScript", "Vite", "Tailwind"] },
      { title: "Mobile", tags: ["React Native", "Capacitor.js", "PWA"] },
      { title: "Data & Backend", tags: ["Supabase", "Dexie.js (offline)"] },
      { title: "Architecture & More", tags: ["Feature-Sliced Design", "RTL / LTR i18n", "React Three Fiber"] },
    ],
  },
  experience: {
    copy: { label: "Work Experience", title: "Experience" },
    items: [
      { meta: "Remote", title: "Frontend Intern — CodeAlpha", text: "Completed a remote frontend development internship." },
      { meta: "Team project", title: "DEPI Technical Final Project", text: "Frontend work on a 5-person team (React.js + Supabase)." },
    ],
  },
  services: {
    copy: { label: "Offered Services", title: "What I can build for you", subtitle: "Clear scope, clear deliverables." },
    items: [
      { title: "UI/UX & brand design to code", text: "Brand identity and interface design, delivered as working React code with no designer-to-developer handoff." },
      { title: "Frontend web apps", text: "React / Next.js / TypeScript interfaces: dashboards, landing pages, and web apps." },
      { title: "Mobile apps", text: "Cross-platform apps with React Native, or installable PWAs." },
      { title: "Arabic RTL interfaces", text: "Proper right-to-left layouts and bilingual (AR/EN) support." },
      { title: "Supabase integration", text: "Auth, database, and offline-friendly data handling connected to your UI." },
    ],
  },
  projects: {
    copy: { label: "Projects", title: "Selected work", subtitle: "Problem → solution → stack." },
    items: [
      {
        title: "SideBy",
        href: "https://sidebyapp.vercel.app/",
        slug: "sideby",
        caseStudy: {
          eyebrow: "Case study",
          tagline: "A social productivity app that keeps you accountable, shoulder to shoulder.",
          overviewTitle: "Overview",
          overview:
            "SideBy (كتف بكتف) is a gamified study and productivity PWA. Instead of leaving you alone with a to-do list, it pairs you with a partner, a squad, or a whole battalion, and uses streaks, scores, and proof of work to keep everyone moving.",
          role: { label: "Role", value: "Founder · Design & Frontend" },
          stackLabel: "Stack",
          stats: [
            { value: 9, label: "feature areas" },
            { value: 2, label: "languages: AR / EN, RTL + LTR" },
            { value: 3, label: "targets: web, PWA, Capacitor" },
          ],
          challenge: {
            title: "The problem",
            text: "Studying alone makes it hard to stay accountable. Most productivity apps leave you facing huge goals by yourself, and the motivation fades.",
          },
          solution: {
            title: "The solution",
            text: "Break goals into small steps, bring a partner in, and add game mechanics (streaks, scores, a Hall of Fame) with strict accountability through battalions.",
          },
          domino: {
            title: "The domino effect",
            text: "Split a big goal into small sub-goals. Every step you finish tips the next one, and the big picture keeps filling in.",
          },
          showcase: {
            title: "Inside the app",
            steps: [
              {
                title: "Plan",
                text: "Create a goal, split it into sub-goals, and invite a partner to share it.",
                image: { src: "/projects/sideby-hero.jpg", alt: "SideBy dashboard and landing page" },
              },
              {
                title: "Track",
                text: "Stats charts, a productivity profile with your SideBy Score, and a Hall of Fame for the most consistent.",
                image: { src: "/projects/sideby-tour.jpg", alt: "SideBy stats, profile and Hall of Fame" },
              },
              {
                title: "Commit",
                text: "Battalions: a commander sets the curriculum and rules, members upload daily proof, and the system checks it through image metadata.",
                image: { src: "/projects/sideby-battalions.jpg", alt: "SideBy battalions" },
              },
              {
                title: "Carry it",
                text: "An installable PWA with push notifications, so your partner's progress reaches you anywhere.",
                image: { src: "/projects/sideby-mobile.jpg", alt: "SideBy on mobile" },
              },
            ],
          },
          featuresTitle: "Everything inside",
          cta: { live: "Open the live app", back: "Back to all work" },
        },
        features: [
          "Goals and sub-goals with a live progress bar",
          "Invite a partner by link and share a goal",
          "Daily streak that resets if you skip a day",
          "Stats charts for completion and consistency",
          "Profile with SideBy Score and badges",
          "Hall of Fame leaderboard",
          "Parent view to follow children's study",
          "Battalions: study camps with warnings, leave passes, and daily proof checked by image metadata",
          "Installable PWA with push notifications",
        ],
        images: [
          { src: "/projects/sideby-hero.jpg", alt: "SideBy landing page and dashboard preview" },
          { src: "/projects/sideby-tour.jpg", alt: "SideBy app tour: stats, profile, Hall of Fame" },
          { src: "/projects/sideby-battalions.jpg", alt: "SideBy battalions: study camps with daily proof" },
          { src: "/projects/sideby-mobile.jpg", alt: "SideBy on mobile" },
        ],
        details: [
          { label: "Problem", text: "studying alone makes it hard to stay accountable." },
          { label: "Solution", text: "a gamified study PWA with squad dashboards and anti-cheat systems." },
        ],
        tags: ["React", "Vite", "Tailwind", "Supabase", "Capacitor.js", "Dexie.js", "React Three Fiber", "FSD", "RTL/LTR"],
      },
      {
        title: "Anbar",
        titleAlt: "(عنبر)",
        details: [
          { label: "Problem", text: "farm management needs to work where connection isn't guaranteed." },
          {
            label: "Solution",
            text: 'a React Native poultry farm app: Arabic RTL, offline-first, OCR and voice features, AI features, and a worker-restricted "Blind UI". 9 mobile screens.',
          },
        ],
        tags: ["React Native", "Offline-first", "RTL", "OCR"],
      },
      {
        title: "Fast ID System",
        details: [
          { label: "Context", text: "DEPI technical final project, built with a team of 5." },
          { label: "Solution", text: "a web system with a React.js frontend on a Supabase backend." },
        ],
        tags: ["React.js", "Supabase", "Teamwork"],
      },
      {
        title: "Chest X-ray AI System",
        details: [
          { label: "Context", text: "graduation project with a 7-person team (React, Flutter, .NET, AI)." },
          { label: "My role", text: "project coordination, sprint planning, system architecture, and the interface." },
        ],
        tags: ["React", "Architecture", "Sprints"],
      },
    ],
  },
  achievements: {
    copy: { label: "Achievements", title: "Milestones" },
    items: [
      "Completed a remote frontend internship at CodeAlpha.",
      "Selected for the 6-month DEPI scholarship.",
      "Shipped 4 projects with real architecture (PWA, mobile, team systems).",
      "Publishes Arabic programming explainers on a regular schedule.",
    ],
  },
  testimonials: {
    copy: { label: "Testimonials", title: "Client feedback" },
    emptyMessage: "My first client reviews will appear here. Want to be the first?",
    items: [],
  },
  contact: {
    copy: { label: "Contact", title: "Have a project in mind?" },
    text: "Tell me what you need and I'll reply with a clear plan, timeline, and price.",
    links: makeLinks({ email: "Email", github: "GitHub", linkedin: "LinkedIn", khamsat: "Khamsat · amor1010" }),
    social: "Social: @amoor2026",
    copyright: "© 2026 Amoor (عمور) · Frontend Developer",
  },
};
