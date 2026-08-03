"use client";

import * as React from "react";
import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const menuItems = [
  { name: "Home", href: "#top" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Deployments", href: "#web" },
  { name: "My E-mail", href: "mailto:p1998nr@gmail.com" },
];

const statusFeed = [
  "AUTH_SERVICE :: OPERATIONAL",
  "UPTIME :: 99.98%",
  "STACK :: GO / GIN / POSTGRES / NEXT.JS",
  "CACHE :: REDIS / HIT RATIO 94.2%",
  "RATE_LIMIT :: LEAKY BUCKET (REDIS)",
  "LATENCY :: 42ms AVG",
  "SECURITY :: RBAC + JWT + OAUTH2",
  "DATABASE :: POSTGRES / POOL 25 CONN",
  "DEPLOYS :: 27",
];

const skills = {
  languages: ["Go", "PHP", "TypeScript", "JavaScript", "SQL"],
  backend: [
    "Gin",
    "Laravel",
    "REST APIs",
    "Redis Caching",
    "Rate Limiting",
    "JWT",
    "OAuth 2.0",
    "Session Authentication",
    "Middleware",
    "MVC",
    "Database Relationships",
  ],
  frontend: ["Blade", "React", "Next.js", "Tailwind CSS", "Vite"],
  database: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
  tools: ["Docker", "Git", "Nginx", "Postman", "Linux", "CI/CD"],
};

const projects = [
  {
    title: "MultiRole Scheduler System",
    stack: "Go · Gin · PostgreSQL · JWT · RBAC · Clean Architecture",
    desc: "Production-oriented appointment & event scheduling platform featuring role-based access control (Admin, Provider, Customer), slot availability management, automated status tracking, and secure JWT middleware built with Clean Architecture.",
    status: "DEPLOYED",
  },
  {
    title: "Fintech Core & Dashboard Monolith",
    stack: "Go · Gin · PostgreSQL · GORM · Redis · Vite · Tailwind CSS",
    desc: "Production-oriented monolithic fintech service featuring wallet transactions, internal transfer ledgers, account mutations, JWT & cookie-based session auth, Redis rate-limiting middleware, and real-time dashboard analytics.",
    status: "DEPLOYED",
  },
  {
    title: "Enterprise Authentication Platform",
    stack: "Go · Gin · PostgreSQL · JWT · OAuth2 · RBAC",
    desc: "Production-grade auth service with access & refresh tokens, HTTP-only cookie sessions, Google OAuth, email verification, password reset and middleware-based authorization.",
    status: "DEPLOYED",
  },
  {
    title: "Social Media Platform",
    stack: "Laravel · PHP · PostgreSQL · Blade · Session Auth · Eloquent ORM",
    desc: "Production-oriented social media application featuring secure session-based authentication, middleware authorization, public feed, user-generated posts, synchronized like/unlike system, and relational database modeling with Eloquent ORM.",
    status: "DEPLOYED",
  },
  {
    title: "Big Data Scraper Platform",
    stack: "Go · Concurrency · Redis · Queues",
    desc: "High-throughput scraping pipeline processing 100–1000+ sources concurrently for analytics and structured data extraction.",
    status: "DEPLOYED",
  },
  {
    title: "AI-Powered Tooling Suite",
    stack: "Next.js · Tailwind CSS · Edge Functions",
    desc: "A set of client-facing tools — security scanning, media conversion and text processing — shipped as fast, edge-deployed micro apps.",
    status: "LIVE",
  },
];

const deployments = [
  {
    name: "Fintech Dompet Diri (pro)",
    route: "/fintech",
    href: "https://dompetdiri.onrender.com/",
    desc: "Fintech wallet platform featuring transaction ledger, account mutation, and real-time dashboard.",
  },
  {
    name: "MultiRole Scheduler System (pro)",
    route: "/goojadwal",
    href: "https://goojadwal.vercel.app/",
    desc: "Multi-role online booking platform featuring slot availability management and conflict prevention.",
  },
  {
    name: "Air Quality Monitor",
    route: "/air-quality",
    href: "https://kondisi-udara.vercel.app/",
    desc: "Real-time air quality tracking platform powered by Go backend services.",
  },
  {
    name: "Web Scanner",
    route: "/security",
    href: "https://artup.pages.dev/Security",
    desc: "Detects phishing links and malicious websites in real time.",
  },
  {
    name: "Image Converter",
    route: "/converter",
    href: "https://converter-artup.pages.dev/",
    desc: "Fast image conversion and optimization across multiple formats.",
  },
  {
    name: "AI Humanizer",
    route: "/humanize",
    href: "https://artup.pages.dev/humanize",
    desc: "Transforms AI-generated text into natural, human-like writing.",
  },
];

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-sky-600">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Skill Group Component (Diperbarui)                                 */
/* ------------------------------------------------------------------ */
function SkillGroup({
  title,
  items,
  highlight = [],
  className = "",
}: {
  title: string;
  items: string[];
  highlight?: string[]; // Item yang mau diberi warna menonjol (seperti Go / Next.js)
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-xs backdrop-blur-md transition-all duration-300 hover:border-sky-300 hover:shadow-md ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
            {title}
          </h3>
        </div>
        <span className="font-mono text-[10px] font-semibold text-slate-400">
          [{items.length}]
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => {
          const isHighlight = highlight.includes(item);
          return (
            <span
              key={item}
              className={`rounded-lg border px-3 py-1 font-mono text-xs font-medium transition-all ${
                isHighlight
                  ? "border-sky-300 bg-sky-50 text-sky-800 shadow-xs hover:border-sky-400 hover:bg-sky-100"
                  : "border-slate-200/80 bg-slate-50/80 text-slate-700 hover:border-slate-300 hover:bg-white hover:text-slate-900"
              }`}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main
      id="top"
      className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.15),_transparent_40%),linear-gradient(135deg,_#f8fafc_0%,_#f2f6fb_45%,_#eef3f8_100%)] text-slate-800 selection:bg-sky-500/25 selection:text-slate-900"
    >
      <style>{`
        :root { --font-display: 'Space Grotesk', sans-serif; }
        .font-display { font-family: var(--font-display); }
        .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 28s linear infinite; }
        .bg-grid {
          background-image:
            linear-gradient(to right, rgba(15, 23, 42, 0.065) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.065) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
          * { transition: none !important; }
        }
      `}</style>

      {/* Grid Pattern Background */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      {/* ---------------------------------------------------------- */}
      {/* Header                                                     */}
      {/* ---------------------------------------------------------- */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex flex-col leading-tight">
            <span className="font-display text-sm font-bold tracking-tight text-slate-900 sm:text-base">
              PUTRA NUR ROHMAN
            </span>
            <span className="font-mono text-[10px] text-slate-500 sm:text-xs">
              full_stack_developer.go
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 sm:flex">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-full px-3.5 py-1.5 font-mono text-xs text-slate-600 transition hover:bg-slate-100 hover:text-sky-700"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 sm:hidden"
            onClick={() => setIsOpen((v) => !v)}
          >
            <div className="flex w-4 flex-col gap-[4px]">
              <span
                className={`h-[1.5px] bg-slate-800 transition-all duration-300 ${
                  isOpen ? "translate-y-[5.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] bg-slate-800 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[1.5px] bg-slate-800 transition-all duration-300 ${
                  isOpen ? "-translate-y-[5.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`overflow-hidden border-t border-slate-200 bg-white transition-[max-height] duration-300 sm:hidden ${
            isOpen ? "max-h-80" : "max-h-0 border-t-0"
          }`}
        >
          <div className="flex flex-col p-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-l-2 border-transparent px-4 py-2.5 font-mono text-sm text-slate-700 hover:border-sky-500 hover:bg-slate-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Marquee Sub-header */}
        <div className="border-t border-slate-200 bg-slate-50/90 py-1.5 overflow-hidden">
          <div className="flex whitespace-nowrap marquee-track">
            {[...statusFeed, ...statusFeed, ...statusFeed].map((s, i) => (
              <span
                key={i}
                className="mx-4 flex items-center gap-2 font-mono text-[10px] tracking-wider text-slate-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* ------------------------------------------------------ */}
        {/* Hero Section                                            */}
        {/* ------------------------------------------------------ */}
        <section className="mb-14 grid gap-8 sm:mb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:items-center">
          <div>
            <Eyebrow>
              Full Stack Developer — Backend Go/Gin &amp; Enterprise Systems
            </Eyebrow>

            <h1 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              PUTRA NUR ROHMAN
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-800 sm:mt-6 sm:text-base sm:leading-7">
              Full-stack developer specializing in high-performance Go (Gin)
              backends and modern Next.js/Vite frontends. Focused on building
              resource-efficient, low-latency servers powered by Goroutines and
              asynchronous Webhooks. Experienced in designing optimized
              PostgreSQL relational schemas, building custom middlewares (JWT
              token validation, session auth, and Redis rate-limiting), and
              ensuring high server availability.{" "}
              <strong className="block mt-2 font-semibold text-slate-900">
                Proven track record as a Backend Developer Intern, successfully
                delivering production-ready commercial client projects.
              </strong>
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <a
                href="#web"
                className="rounded-full bg-slate-950 px-5 py-2.5 font-mono text-xs font-medium text-white transition hover:bg-slate-800"
              >
                View live projects →
              </a>
              <a
                href="https://wa.me/6281328343908"
                className="rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm px-5 py-2.5 font-mono text-xs text-slate-700 transition hover:border-slate-400"
              >
                Get in touch (WA)
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-12 sm:gap-4">
              {[
                ["26+", "Projects shipped"],
                ["2022", "Building since"],
                ["Go", "Primary stack"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-t border-slate-200/80 pt-3 sm:pt-4"
                >
                  <div className="font-display text-lg font-bold text-slate-900 sm:text-2xl">
                    {value}
                  </div>
                  <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-slate-500 sm:text-[11px]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------ BAGIAN HERO KANAN ------------------ */}
          <div className="rounded-2xl border border-slate-300/80 bg-slate-100/90 backdrop-blur-sm p-1 shadow-lg shadow-slate-900/5">
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
              {/* Window Top Bar */}
              <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100/90 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[10px] font-medium text-slate-500 sm:text-[11px]">
                  GET /api/v1/profile
                </span>
              </div>

              {/* Tampilan JSON Code Window */}
              <div className="p-4 sm:p-5 overflow-x-auto max-w-full">
                <pre className="font-mono text-[11px] leading-5 text-slate-700 sm:text-[13px] sm:leading-6 whitespace-pre-wrap sm:whitespace-pre">
                  {`{\n  `}
                  <span className="text-sky-700">{'"name"'}</span>
                  {`: `}
                  <span className="text-emerald-700">{'"Putra Rohman"'}</span>
                  {`,\n  `}
                  <span className="text-sky-700">{'"role"'}</span>
                  {`: `}
                  <span className="text-emerald-700">
                    {'"High-Performance Go / Full-Stack Developer"'}
                  </span>
                  {`,\n  `}
                  <span className="text-sky-700">{'"focus"'}</span>
                  {`: [\n    `}
                  <span className="text-emerald-700">
                    {'"high_concurrency"'}
                  </span>
                  {`,\n    `}
                  <span className="text-emerald-700">
                    {'"low_latency_apis"'}
                  </span>
                  {`,\n    `}
                  <span className="text-emerald-700">{'"redis_caching"'}</span>
                  {`,\n    `}
                  <span className="text-emerald-700">{'"rate_limiting"'}</span>
                  {`\n  ],\n  `}
                  <span className="text-sky-700">{'"stack"'}</span>
                  {`: {\n    `}
                  <span className="text-sky-700">{'"backend"'}</span>
                  {`: `}
                  <span className="text-emerald-700">
                    {'"Go (Gin) / Custom Middleware"'}
                  </span>
                  {`,\n    `}
                  <span className="text-sky-700">{'"frontend"'}</span>
                  {`: `}
                  <span className="text-emerald-700">
                    {'"Next.js / Vite / React"'}
                  </span>
                  {`,\n    `}
                  <span className="text-sky-700">{'"database"'}</span>
                  {`: `}
                  <span className="text-emerald-700">
                    {'"PostgreSQL (Relational) / Redis"'}
                  </span>
                  {`,\n    `}
                  <span className="text-sky-700">{'"infra"'}</span>
                  {`: `}
                  <span className="text-emerald-700">
                    {'"Docker / Nginx / Linux"'}
                  </span>
                  {`\n  },\n  `}
                  <span className="text-sky-700">{'"status"'}</span>
                  {`: `}
                  <span className="text-emerald-700">
                    {'"available_for_hire"'}
                  </span>
                  {`\n}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* Skills Section (Bento Grid Style)                     */}
        {/* ------------------------------------------------------ */}
        <section id="skills" className="mb-14 sm:mb-20 scroll-mt-24">
          <div className="mb-6 sm:mb-8">
            <Eyebrow>Technical Skills</Eyebrow>
            <h2 className="font-display mt-1 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Technology Stack
            </h2>
          </div>

          {/* Bento Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Backend: Kartu Terbesar (2 Kolom di Desktop) */}
            <SkillGroup
              title="Backend Architecture"
              items={skills.backend}
              highlight={["Gin", "REST APIs", "Redis Caching", "JWT"]}
              className="md:col-span-2 bg-gradient-to-br from-white via-white to-sky-50/30"
            />

            {/* Languages */}
            <SkillGroup
              title="Languages"
              items={skills.languages}
              highlight={["Go", "TypeScript"]}
              className="md:col-span-1"
            />

            {/* Database */}
            <SkillGroup
              title="Database & Storage"
              items={skills.database}
              highlight={["PostgreSQL", "Redis"]}
              className="md:col-span-1"
            />

            {/* Frontend */}
            <SkillGroup
              title="Frontend Development"
              items={skills.frontend}
              highlight={["Next.js", "React", "Tailwind CSS"]}
              className="md:col-span-1"
            />

            {/* DevOps & Tools */}
            <SkillGroup
              title="Tools & Infrastructure"
              items={skills.tools}
              highlight={["Docker", "Nginx", "Linux"]}
              className="md:col-span-1"
            />
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* Projects Section                                       */}
        {/* ------------------------------------------------------ */}
        <section id="projects" className="mb-14 sm:mb-20 scroll-mt-24">
          <div className="mb-6 sm:mb-8">
            <Eyebrow>Featured Projects</Eyebrow>
            <h2 className="font-display mt-1 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Enterprise Development Experience
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm p-4 shadow-sm transition hover:border-sky-300 sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-slate-900 sm:text-xl">
                    {project.title}
                  </h3>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {project.status}
                  </span>
                </div>
                <p className="mt-1 font-mono text-[11px] text-sky-700 sm:text-xs">
                  {project.stack}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-6">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* Live Deployments                                        */}
        {/* ------------------------------------------------------ */}
        <section id="web" className="scroll-mt-24">
          <div className="mb-6 sm:mb-8">
            <Eyebrow>Live Deployments</Eyebrow>
            <h2 className="font-display mt-1 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Click Through &amp; Check
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {deployments.map((d) => (
              <a
                key={d.name}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-300/80 bg-slate-100/80 p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:border-sky-500 hover:shadow-md sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-sky-700 sm:text-base">
                    {d.name}
                  </h3>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
                  </span>
                </div>
                <p className="mt-1 font-mono text-[10px] font-medium text-sky-700 sm:text-[11px]">
                  {d.route}
                </p>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {d.desc}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* Footer (Kontras Pas, Kelihatan Jelas, Matching)       */}
        {/* ------------------------------------------------------ */}
        <footer className="mt-16 rounded-2xl border-t-2 border-t-sky-500 border-x border-b border-slate-800 bg-slate-900/95 p-5 sm:p-6 text-white shadow-xl sm:mt-24">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            {/* Link Email & GitHub */}
            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
              <a
                href="mailto:contact@putrarohman.dev"
                className="rounded-xl border border-slate-700 bg-slate-800/90 px-4 py-2 font-semibold text-slate-100 shadow-sm transition hover:border-sky-400 hover:bg-sky-500/20 hover:text-sky-300"
              >
                Email ↗
              </a>
              <a
                href="https://github.com/pdroid908"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 bg-slate-800/90 px-4 py-2 font-semibold text-slate-100 shadow-sm transition hover:border-sky-400 hover:bg-sky-500/20 hover:text-sky-300"
              >
                GitHub ↗
              </a>
            </div>

            {/* Teks Copyright */}
            <span className="font-mono text-xs font-semibold text-slate-300">
              © {new Date().getFullYear()} Putra Rohman — built with Go &amp;
              Next.js
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
