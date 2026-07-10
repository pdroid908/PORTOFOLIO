"use client";

import * as React from "react";
import { useEffect, useState } from "react";

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
  "LATENCY :: 42ms avg",
  "DEPLOYS_THIS_MONTH :: 14",
  "SECURITY :: RBAC + JWT + OAUTH2",
];

const skills = {
  languages: [
    "Go",
    "PHP",
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
  ],

  backend: [
    "Gin",
    "Laravel",
    "REST APIs",
    "JWT",
    "OAuth 2.0",
    "Session Authentication",
    "Middleware",
    "MVC",
    "Eloquent ORM",
    "Database Relationships",
    
  ],

  frontend: [
    "Blade",
    "React",
    "Next.js",
    "Tailwind CSS",
    
  ],

  database: [
    "PostgreSQL",
    "Mysql",
    "Redis",
    "MongoDB",
  ],

  tools: [
    "Docker",
    "Git",
    "Nginx",
    "Postman",
    "Linux",
    "CI/CD",
  ],
};

const projects = [
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
    name: "Web Scanner",
    route: "/security",
    href: "https://artup.pages.dev/Security",
    desc: "Detects phishing links and malicious websites in real time.",
  },
  {
    name: "Image Converter",
    route: "/converter",
    href: "https://artup.pages.dev/converter",
    desc: "Fast image conversion and optimization across multiple formats.",
  },
  {
    name: "AI Humanizer",
    route: "/humanize",
    href: "https://artup.pages.dev/humanize",
    desc: "Transforms AI-generated text into natural, human-like writing.",
  },
  {
    name: "Google OAuth System",
    route: "/oauth",
    href: "https://oauth-go-backend-one.vercel.app/auth/google",
    desc: "Secure authentication system using Google OAuth2 and JWT.",
  },
  {
    name: "Big Data Scraper",
    route: "/big_data",
    href: "https://artup.pages.dev/big_data",
    desc: "Scraping system built to process 100–1000+ data sources.",
  },
];

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] text-sky-600">
      {children}
    </p>
  );
}

function SkillGroup({
  title,
  items,
  accent = "amber",
}: {
  title: string;
  items: string[];
  accent?: "amber" | "emerald";
}) {
  const accentClasses =
    accent === "amber"
      ? { border: "border-sky-400/40", dot: "bg-sky-500", text: "text-sky-600" }
      : {
          border: "border-emerald-500/30",
          dot: "bg-emerald-500",
          text: "text-emerald-600",
        };

  return (
    <div
      className={`rounded-2xl border ${accentClasses.border} bg-white/80 p-4 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.25)] sm:p-5`}
    >
      <div className="flex items-center gap-2">
        <span className={`h-1.5 w-1.5 ${accentClasses.dot}`} />
        <h3 className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-900">
          {title}
        </h3>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] text-slate-900 sm:text-xs"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main
      id="top"
      className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.10),_transparent_32%),linear-gradient(135deg,_#f8fafc_0%,_#f2f6fb_45%,_#eef3f8_100%)] text-slate-800 selection:bg-sky-500/25 selection:text-slate-900"
    >
      <style>{`
        :root { --font-display: 'Space Grotesk', sans-serif; }
        .font-display { font-family: var(--font-display); }
        .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 28s linear infinite; }
        .bg-grid {
          background-image:
            linear-gradient(to right, rgba(15, 23, 42, 0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.055) 1px, transparent 1px);
          background-size: 44px 44px;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
          * { transition: none !important; }
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 z-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      {/* ---------------------------------------------------------- */}
      {/* Header                                                      */}
      {/* ---------------------------------------------------------- */}
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_10px_40px_-24px_rgba(15,23,42,0.35)]"
            : "border-slate-200/70 bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <a href="#top" className="flex flex-col leading-tight">
            <span className="font-display text-sm font-bold tracking-tight text-slate-900 sm:text-base">
              PUTRA NUR ROHMAN
            </span>
            <span className="font-mono text-[10px] text-slate-500 sm:text-xs">
              full_stack_developer.go
            </span>
          </a>

          <nav className="hidden items-center gap-1 sm:flex">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : undefined}
                className="rounded-full px-3.5 py-1.5 font-mono text-xs text-slate-600 transition hover:bg-slate-100 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center sm:hidden"
            onClick={() => setIsOpen((v) => !v)}
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <span
                className={`h-[1.5px] bg-slate-800 transition-all duration-300 ${
                  isOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] bg-slate-800 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[1.5px] bg-slate-800 transition-all duration-300 ${
                  isOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        <div
          className={`sm:hidden overflow-hidden border-t border-slate-200 bg-white/95 transition-[max-height] duration-300 ${
            isOpen ? "max-h-80" : "max-h-0 border-t-0"
          }`}
        >
          <div className="flex flex-col p-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-l-2 border-transparent px-4 py-3 font-mono text-sm text-slate-700 hover:border-sky-500 hover:bg-slate-50 hover:text-slate-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden border-t border-slate-200/80 bg-slate-50/70 sm:block">
          <div className="mx-auto flex max-w-7xl overflow-hidden px-4 py-1.5 sm:px-6 lg:px-8">
            <div className="flex whitespace-nowrap marquee-track">
              {[...statusFeed, ...statusFeed].map((s, i) => (
                <span
                  key={i}
                  className="mx-4 flex items-center gap-2 font-mono text-[10px] tracking-wider text-slate-500"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        {/* ------------------------------------------------------ */}
        {/* Hero                                                    */}
        {/* ------------------------------------------------------ */}
        <section className="mb-16 grid gap-10 sm:mb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <Eyebrow>
              Full Stack Developer — Backend &amp; Enterprise Systems
            </Eyebrow>

            <h1 className="font-display mt-3 text-4xl font-bold leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Putra NUR Rohman
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-800 sm:mt-6 sm:text-base">
  Building secure authentication systems with JWT, session cookies, OAuth 2.0,
  and middleware using Go and Laravel. Developing RESTful APIs, relational
  database architectures, concurrent data processing, and scalable backend
  services with PostgreSQL, Redis, Docker, and TypeScript while following clean
  architecture and production-oriented engineering practices.
</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#web"
                className="rounded-full bg-slate-950 px-5 py-2.5 font-mono text-xs font-medium text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
              >
                View live projects →
              </a>
              <a
                href="https://wa.me/6281328343908"
                className="rounded-full border border-slate-300 bg-white/70 px-5 py-2.5 font-mono text-xs text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                Get in touch (WA)
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:mt-12 sm:gap-4">
              {[
                ["20+", "Projects shipped"],
                ["2022", "Building since"],
                ["Go", "Primary stack"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-t border-slate-200 pt-3 sm:pt-4"
                >
                  <div className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                    {value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-500 sm:text-[11px]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white/85 shadow-[0_30px_90px_-30px_rgba(15,23,42,0.3)] backdrop-blur">
            <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50/90 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-[11px] text-slate-500">
                GET /api/v1/profile
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6 text-slate-700 sm:text-[13px]">
              {`{
  `}
              <span className="text-sky-700">{'"name"'}</span>
              {`: `}
              <span className="text-emerald-700">{'"Putra Rohman"'}</span>
              {`,
  `}
              <span className="text-sky-700">{'"role"'}</span>
              {`: `}
              <span className="text-emerald-700">
                {'"Full Stack Developer"'}
              </span>
              {`,
  `}
              <span className="text-sky-700">{'"focus"'}</span>
              {`: [`}
              <span className="text-emerald-700">{'"auth"'}</span>
              {`, `}
              <span className="text-emerald-700">{'"backend"'}</span>
              {`, `}
              <span className="text-emerald-700">{'"apis"'}</span>
              {`],
  `}
              <span className="text-sky-700">{'"stack"'}</span>
              {`: {
    `}
              <span className="text-sky-700">{'"backend"'}</span>
              {`: `}
              <span className="text-emerald-700">{'"Go / Gin"'}</span>
              {`,
    `}
              <span className="text-sky-700">{'"database"'}</span>
              {`: `}
              <span className="text-emerald-700">{'"PostgreSQL"'}</span>
              {`,
    `}
              <span className="text-sky-700">{'"frontend"'}</span>
              {`: `}
              <span className="text-emerald-700">{'"Next.js"'}</span>
              {`
  },
  `}
              <span className="text-sky-700">{'"status"'}</span>
              {`: `}
              <span className="text-emerald-700">{'"available_for_work"'}</span>
              {`
}`}
            </pre>
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* Skills                                                  */}
        {/* ------------------------------------------------------ */}
        <section id="skills" className="mb-16 sm:mb-24 scroll-mt-24">
          <div className="mb-8 sm:mb-10">
            <Eyebrow>Technical Skills</Eyebrow>
            <h2 className="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Technology Stack
            </h2>
          </div>

          <div className="grid gap-3 sm:gap-4 c md:grid-cols-2 lg:gap-5">
            <SkillGroup
              title="Languages"
              items={skills.languages}
              accent="amber"
            />
            <SkillGroup title="Backend" items={skills.backend} accent="amber" />
            <SkillGroup
              title="Frontend"
              items={skills.frontend}
              accent="emerald"
            />
            <SkillGroup
              title="Database"
              items={skills.database}
              accent="emerald"
            />
            <div className="md:col-span-2">
              <SkillGroup
                title="Development Tools"
                items={skills.tools}
                accent="emerald"
              />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* Projects                                                */}
        {/* ------------------------------------------------------ */}
        <section id="projects" className="mb-16 sm:mb-24 scroll-mt-24">
          <div className="mb-8 sm:mb-10">
            <Eyebrow>Featured Projects</Eyebrow>
            <h2 className="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Enterprise Development Experience
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5 hover:border-sky-400/50 hover:shadow-[0_16px_50px_-20px_rgba(14,165,233,0.25)] sm:p-6 lg:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-slate-900 sm:text-xl">
                    {project.title}
                  </h3>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {project.status}
                  </span>
                </div>
                <p className="mt-2 font-mono text-[11px] text-sky-700 sm:text-xs">
                  {project.stack}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* Live deployments                                        */}
        {/* ------------------------------------------------------ */}
        <section id="web" className="scroll-mt-24">
          <div className="mb-8 sm:mb-10">
            <Eyebrow>Live Deployments</Eyebrow>
            <h2 className="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
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
                className="group rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5 hover:border-sky-400/50 hover:shadow-[0_14px_45px_-22px_rgba(14,165,233,0.25)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-base font-semibold text-slate-900 group-hover:text-sky-700">
                    {d.name}
                  </h3>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                </div>
                <p className="mt-1 font-mono text-[11px] text-slate-500">
                  {d.route}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {d.desc}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* Footer                                                  */}
        {/* ------------------------------------------------------ */}
        <footer className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 sm:mt-28 sm:flex-row sm:items-center">
          
          <div className="flex gap-4 font-mono text-xl text-slate-500">
            <a
              href="mailto:contact@putrarohman.dev"
              className="hover:text-sky-700"
            >
              Email
            </a>
            <a
              href="https://github.com/pdroid908"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-700"
            >
              GitHub
            </a>
          </div>
          
          
          <span className="font-mono text-[11px] text-slate-500">
            © {new Date().getFullYear()} Putra Rohman — built with Go &amp;
            Next.js
          </span>
          
        </footer>
      </div>
    </main>
  );
}
