import React from "react";

type SkillSectionProps = {
  title: string;
  items: string[];
};

type Project = {
  title: string;
  stack: string;
  desc: string;
};

const skills = {
  languages: ["Go", "JavaScript", "TypeScript", "Python", "SQL"],
  frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  backend: [
    "Go (Gin)",
    "Node.js",
    "Express.js",
    "REST API",
    "JWT",
    "Google OAuth",
    "Cookie Auth",
  ],
  database: ["PostgreSQL", "MySQL", "Firebase"],
  tools: ["Docker", "Git", "Linux", "Nginx", "Postman"],
};

const projects: Project[] = [
  {
    title: "Enterprise Authentication Platform",
    stack: "Go • Gin • Next.js • PostgreSQL",
    desc: "Enterprise authentication platform implementing JWT Access & Refresh Tokens, Google OAuth, Cookie Authentication, Email Verification, Password Reset, REST APIs, Clean Architecture, Security Headers and scalable backend architecture.",
  },
  {
    title: "Distributed Big Data Scraping Platform",
    stack: "Go • Python • Redis • Next.js",
    desc: "A scalable distributed scraping system designed to handle 100–1000+ concurrent data sources, featuring automated crawling, pipeline-based processing, and structured data aggregation for big data analytics.",
  },
  {
    title: "AI News Sentiment Analyzer",
    stack: "Python",
    desc: "AI application capable of scraping hundreds of news articles, processing datasets automatically and generating sentiment analysis for public issue classification.",
  },
  {
    title: "Website Security Scanner",
    stack: "React.js • Next.js",
    desc: "Security-focused web application for phishing and malicious website detection with responsive dashboard and modern user experience.",
  },
  {
    title: "Malware & Link Scanner System",
    stack: "Go • Python • Next.js",
    desc: "Security system for detecting malicious links, phishing URLs, and malware indicators using automated scanning, threat intelligence rules, and real-time analysis.",
  },
  {
    title: "Big Data Sentiment Analytics Platform",
    stack: "Python • PostgreSQL • Pandas",
    desc: "Scalable data analytics system for processing large datasets and generating sentiment insights, trend analysis, and structured reporting for decision making.",
  },
  {
    title: "K3 Safety Radius Reporting System",
    stack: "Go • Next.js • PostGIS",
    desc: "Internal occupational safety system (K3) with radius-based location tracking, incident reporting, and dashboard monitoring for workplace safety compliance.",
  },
  {
    title: "Image Converter Web App",
    stack: "Next.js • Node.js",
    desc: "Web-based tool for converting images between formats, optimizing file size, and batch processing with a simple and fast UI.",
  },
  {
    title: "AI Humanizer Tool",
    stack: "Python • Next.js",
    desc: "AI-powered text rewriting system designed to refine AI-generated content into more natural, human-like writing while preserving meaning and context.",
  },
];

function SkillSection({ title, items }: SkillSectionProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 lg:p-6">
      <h3 className="mb-3 text-base font-bold text-white sm:text-lg lg:text-xl">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium text-cyan-300 sm:px-4 sm:py-2 sm:text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Left - Name / Brand */}
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-white sm:text-base">
              PUTRA ROHMAN
            </span>
            <span className="text-[10px] text-gray-400 sm:text-xs">
              Full Stack Developer
            </span>
          </div>

          {/* Right - Contact */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
            <a
              href="#skills"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-white/90 transition
    hover:bg-white/10 hover:border-white/30 hover:text-white sm:px-4 sm:py-2 sm:text-sm"
            >
              Skills
            </a>

            <a
              href="#web"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-white/90 transition
    hover:bg-white/10 hover:border-white/30 hover:text-white sm:px-4 sm:py-2 sm:text-sm"
            >
              Projects
            </a>

            <a
              href="#projects"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-white/90 transition
    hover:bg-white/10 hover:border-white/30 hover:text-white sm:px-4 sm:py-2 sm:text-sm"
            >
              Experience
            </a>

            <a
              href="https://github.com/pdroid908"
              target="_blank"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-white/90 transition
    hover:bg-white/10 hover:border-white/30 hover:text-white sm:px-4 sm:py-2 sm:text-sm"
            >
              GitHub
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281328343908"
              target="_blank"
              className="rounded-full border border-green-400/30 bg-green-500/15 px-3 py-1 text-[11px] font-medium text-green-300
    transition hover:bg-green-500/25 hover:border-green-400/50 hover:text-green-200 sm:px-4 sm:py-2 sm:text-sm"
            >
              WhatsApp
            </a>

            {/* Email */}
            <a
              href="mailto:p1998nr@gmail.com"
              className="rounded-full border border-cyan-400/30 bg-cyan-500/15 px-3 py-1 text-[11px] font-medium text-cyan-300
    transition hover:bg-cyan-500/25 hover:border-cyan-400/50 hover:text-cyan-200 sm:px-4 sm:py-2 sm:text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20">
        {/* Hero */}
        <section className="mb-12 sm:mb-16 lg:mb-24">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-400 sm:text-xs">
            Full Stack Developer
          </p>

          <h1 className="text-3xl font-black leading-none tracking-tight sm:text-5xl lg:text-7xl">
            <span className="text-white">PUTRA</span>{" "}
            <span className="text-cyan-400">ROHMAN</span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-400 sm:mt-7 sm:text-base sm:leading-7 lg:mt-8 lg:text-lg lg:leading-8">
            Full Stack Developer specializing in enterprise authentication and
            backend architecture using Go, Gin, PostgreSQL and Next.js. Built
            production-ready authentication platforms featuring JWT Access &
            Refresh Tokens, HTTP-only Cookie Sessions, Google OAuth, Email
            Verification, Password Reset, RBAC, Security Headers, CORS,
            middleware-based authorization, and scalable RESTful APIs following
            Clean Architecture principles.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3 sm:p-5">
              <h2 className="text-xl font-bold sm:text-3xl">20+</h2>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Projects Built
              </p>
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3 sm:p-5">
              <h2 className="text-xl font-bold sm:text-3xl">2022+</h2>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Experience
              </p>
            </div>

            <div className="col-span-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3 sm:col-span-1 sm:p-5">
              <h2 className="text-lg font-bold sm:text-2xl">Full Stack</h2>

              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Go • React • Next.js
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skils" className="mb-12 sm:mb-16 lg:mb-24">
          <div className="mb-7 sm:mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 sm:text-xs">
              Technical Skills
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Technology Stack
            </h2>
          </div>

          <div className="grid gap-3 sm:gap-5 md:grid-cols-2 lg:gap-6">
            <SkillSection
              title="Programming Languages"
              items={skills.languages}
            />

            <SkillSection title="Frontend" items={skills.frontend} />

            <SkillSection title="Backend" items={skills.backend} />

            <SkillSection title="Database" items={skills.database} />

            <div className="md:col-span-2">
              <SkillSection title="Development Tools" items={skills.tools} />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <div id="projects" className="mb-7 sm:mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 sm:text-xs">
              Featured Projects
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Enterprise Development Experience
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-cyan-500/40 sm:p-6 lg:rounded-3xl lg:p-8"
              >
                <h3 className="text-lg font-bold sm:text-xl lg:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-cyan-400 sm:text-sm">
                  {project.stack}
                </p>

                <p className="mt-4 text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base sm:leading-7 lg:mt-6 lg:leading-8">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="web" className="mt-16 mb-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
            MY WEB CLICK FOR CHECK
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <a
              href="https://artup.pages.dev/Security"
              target="_blank"
              className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-semibold group-hover:text-blue-400">
                Web Scanner
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                A security tool to detect phishing links and malicious websites
                in real time.
              </p>
            </a>

            <a
              href="https://artup.pages.dev/converter"
              target="_blank"
              className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-semibold group-hover:text-blue-400">
                Image Converter
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Fast image conversion and optimization tool for multiple
                formats.
              </p>
            </a>

            <a
              href="https://artup.pages.dev/humanize"
              target="_blank"
              className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-semibold group-hover:text-blue-400">
                AI Humanizer
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Transforms AI-generated text into natural, human-like writing.
              </p>
            </a>

            <a
              href="https://oauth-go-backend-one.vercel.app"
              target="_blank"
              className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-semibold group-hover:text-green-400">
                Google OAuth System
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Secure authentication system using Google OAuth2 and JWT.
              </p>
            </a>

            <a
              href="https://artup.pages.dev/big_data"
              target="_blank"
              className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-semibold group-hover:text-purple-400">
                Big Data Scraper Platform
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                High-scale scraping system capable of processing 100–1000+ data
                sources for analytics and structured data extraction.
              </p>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
