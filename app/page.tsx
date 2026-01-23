"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const metaItems = [{ label: "Year", value: "2026" }];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com", type: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
    { label: "Telegram", href: "https://t.me", type: "telegram" },
    { label: "Instagram", href: "https://instagram.com", type: "instagram" },
  ];

  const skills = [
    {
      title: "Front-end",
      items:
        "HTML5 / CSS3 / JavaScript / Next.js / React / React Native / Responsive Web Design / Component Libraries / Interaction Design / Material UI",
    },
    {
      title: "Styles",
      items: "SCSS / Sass / PostCSS / Tailwind",
    },
  ];

  const frontendProjects = [
    {
      title: "Atlas UI Kit",
      description:
        "Component library with strict tokens, dark mode parity, and docs.",
      stack: "Front-end / System",
      detail: "Build: Storybook",
      tone: "blue",
      links: [
        { type: "github", label: "GitHub", href: "https://github.com" },
        { type: "live", label: "Live site", href: "https://example.com" },
      ],
    },
    {
      title: "Signal Commerce",
      description:
        "High-contrast storefront and admin build tuned for conversion.",
      stack: "Front-end / Next.js",
      detail: "Focus: performance",
      tone: "graphite",
      links: [
        { type: "github", label: "GitHub", href: "https://github.com" },
        { type: "live", label: "Live site", href: "https://example.com" },
      ],
    },
    {
      title: "Orbit Mobile",
      description:
        "Mobile web experience with responsive nav logic and fast loads.",
      stack: "Front-end / Mobile",
      detail: "Metric: Core Web Vitals",
      tone: "smoke",
      links: [
        { type: "github", label: "GitHub", href: "https://github.com" },
        { type: "live", label: "Live site", href: "https://example.com" },
      ],
    },
  ];

  const uiUxProjects = [
    {
      title: "Kana Master",
      description:
        "Learning platform with overlapping mobile, tablet, and desktop views.",
      tags: ["iOS", "UI", "UX", "Prototype"],
      summary: "App flows and micro-interactions for daily learning.",
      links: [
        { type: "figma", label: "Figma", href: "https://figma.com" },
      ],
      screens: [
        { label: "Mobile", size: "tall", tone: "moss" },
        { label: "Tablet", size: "wide", tone: "ivory" },
        { label: "Cards", size: "small", tone: "ember" },
      ],
    },
    {
      title: "Signal Commerce",
      description:
        "Product dashboard with dense data views and staged funnels.",
      tags: ["SaaS", "UI", "UX", "Web app"],
      summary: "Information architecture with layered screen states.",
      links: [
        { type: "figma", label: "Figma", href: "https://figma.com" },
      ],
      screens: [
        { label: "Overview", size: "wide", tone: "blue" },
        { label: "Details", size: "medium", tone: "slate" },
        { label: "Sheet", size: "small", tone: "graphite" },
      ],
    },
    {
      title: "Beacon Health",
      description:
        "Care scheduling UI with overlapping panels and utility views.",
      tags: ["Health", "UI", "UX", "Accessibility"],
      summary: "Scheduling, intake, and messaging in one flow.",
      links: [
        { type: "figma", label: "Figma", href: "https://figma.com" },
      ],
      screens: [
        { label: "Schedule", size: "wide", tone: "sand" },
        { label: "Profile", size: "tall", tone: "smoke" },
        { label: "Modal", size: "small", tone: "ivory" },
      ],
    },
  ];

  const graphicProjects = [
    {
      title: "Aphelion Posters",
      description: "Album poster series with bold type and analog textures.",
      category: "Poster",
      ratio: "4:5",
      year: "2025",
      size: "tall",
      tone: "ember",
    },
    {
      title: "Night Drive Cover",
      description: "Cover art study with layered grain and halftone detail.",
      category: "Cover",
      ratio: "1:1",
      year: "2024",
      size: "square",
      tone: "smoke",
    },
    {
      title: "Glasshouse Typography",
      description: "Typographic experiments arranged in a cinematic grid.",
      category: "Typography",
      ratio: "3:4",
      year: "2026",
      size: "tall",
      tone: "slate",
    },
    {
      title: "Knockin' Series",
      description: "Editorial covers with contrast-heavy poster layouts.",
      category: "Editorial",
      ratio: "4:5",
      year: "2025",
      size: "wide",
      tone: "ivory",
    },
    {
      title: "Festival Frames",
      description: "Photo-first posters with soft grain and light overlays.",
      category: "Photography",
      ratio: "2:3",
      year: "2026",
      size: "tall",
      tone: "moss",
    },
    {
      title: "Static Motion",
      description: "Grid-based collage with angular highlights.",
      category: "Collage",
      ratio: "16:9",
      year: "2024",
      size: "wide",
      tone: "blue",
    },
    {
      title: "Monoform Prints",
      description: "Minimal photo studies with tight crop ratios.",
      category: "Print",
      ratio: "1:1",
      year: "2025",
      size: "square",
      tone: "graphite",
    },
    {
      title: "Transit Zine",
      description: "Editorial spreads with stacked imagery and type.",
      category: "Zine",
      ratio: "3:4",
      year: "2025",
      size: "tall",
      tone: "sand",
    },
  ];

  const [activeGraphicIndex, setActiveGraphicIndex] = useState<number | null>(
    null
  );
  const activeGraphic =
    activeGraphicIndex === null ? null : graphicProjects[activeGraphicIndex];

  const [activeFrontendIndex, setActiveFrontendIndex] = useState<number | null>(
    null
  );
  const activeFrontend =
    activeFrontendIndex === null
      ? null
      : frontendProjects[activeFrontendIndex];

  const [activeUiUxIndex, setActiveUiUxIndex] = useState<number | null>(null);
  const [activeUiUxScreen, setActiveUiUxScreen] = useState(0);
  const activeUiUx =
    activeUiUxIndex === null ? null : uiUxProjects[activeUiUxIndex];

  const frontendViewportRef = useRef<HTMLDivElement | null>(null);
  const uiuxViewportRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (
    viewport: HTMLDivElement | null,
    direction: "left" | "right"
  ) => {
    if (!viewport) {
      return;
    }
    const delta = direction === "right" ? 1 : -1;
    const amount = Math.max(viewport.clientWidth * 0.75, 260);
    viewport.scrollBy({ left: delta * amount, behavior: "smooth" });
  };

  const advanceUiUxScreen = (direction: "left" | "right") => {
    if (activeUiUxIndex === null) {
      return;
    }
    const total = uiUxProjects[activeUiUxIndex].screens.length;
    setActiveUiUxScreen((prev) => {
      const delta = direction === "right" ? 1 : -1;
      return (prev + delta + total) % total;
    });
  };

  useEffect(() => {
    if (activeUiUxIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        advanceUiUxScreen("right");
      }
      if (event.key === "ArrowLeft") {
        advanceUiUxScreen("left");
      }
      if (event.key === "Escape") {
        setActiveUiUxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeUiUxIndex]);

  useEffect(() => {
    const hasModal =
      activeGraphicIndex !== null ||
      activeUiUxIndex !== null ||
      activeFrontendIndex !== null;
    document.body.classList.toggle("modal-open", hasModal);
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [activeGraphicIndex, activeUiUxIndex, activeFrontendIndex]);

  return (
    <div className="page">
      <div className="ring ring-1" aria-hidden="true" />
      <div className="ring ring-2" aria-hidden="true" />
      <div className="ring ring-3" aria-hidden="true" />
      <div className="glass-glyph glyph-1" aria-hidden="true">
        {"( / )"}
      </div>
      <div className="dot-cluster dots-left" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="dot-cluster dots-right" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <main className="content">
        <header className="top-nav">
          <div className="logo">Victor.AKINYEMI</div>
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="lang-pill" aria-label="Language switch">
            <span>En</span>
            <span className="lang-divider">/</span>
            <span>Ge</span>
          </div>
        </header>

        <section className="hero reveal" aria-labelledby="hero-title">
          <div className="hero-left">
            <p className="mono-label">Software developer</p>
            <h1 id="hero-title" className="hero-title">
              <span>Frontend</span>
              <span>Developer</span>
            </h1>
            <p className="hero-lead">
              My goal is to write maintainable, clean and understandable code so
              development stays enjoyable.
            </p>
            <div className="hero-actions">
              <a className="pill pill-primary" href="#projects">
                Projects
              </a>
              <a className="pill pill-ghost" href="mailto:hello@victor.dev">
                Let&#39;s talk
              </a>
            </div>
            <div className="social-row">
              {socialLinks.map((link) => (
                <a key={link.label} className="pill pill-ghost" href={link.href}>
                  {link.type === "github" ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.5 0-.25-.01-.9-.01-1.76-2.78.62-3.36-1.38-3.36-1.38-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.02 1.64 1.02 2.77 0 3.98-2.35 4.86-4.59 5.11.36.33.68.97.68 1.96 0 1.41-.01 2.55-.01 2.9 0 .28.18.6.69.5A10.17 10.17 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                    </svg>
                  ) : null}
                  {link.type === "linkedin" ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h3.96v12H3V9Zm7.2 0h3.8v1.64h.05c.53-.96 1.84-1.98 3.8-1.98 4.06 0 4.81 2.7 4.81 6.2V21h-3.96v-5.1c0-1.22-.03-2.8-1.72-2.8-1.72 0-1.98 1.34-1.98 2.71V21h-3.96V9Z" />
                    </svg>
                  ) : null}
                  {link.type === "telegram" ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.5 4.5 2.9 11.5c-1.2.47-1.19 1.13-.22 1.43l4.5 1.4 1.7 5.3c.2.55.1.76.78.76.53 0 .76-.25 1.04-.52l2.5-2.43 5.2 3.84c.96.53 1.64.26 1.88-.88l3.2-15.08c.33-1.36-.52-1.98-1.78-1.45ZM8.9 13.9l9.9-6.2c.5-.3.96.16.58.5l-8.2 7.4-.32 3.1-1.3-4.8-.66-.2Z" />
                    </svg>
                  ) : null}
                  {link.type === "instagram" ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm5.75-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
                    </svg>
                  ) : null}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-right">
            <div className="meta-grid">
              {metaItems.map((item) => (
                <div className="meta-item" key={item.label}>
                  <span className="meta-label">{item.label}</span>
                  <span className="meta-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about reveal delay-1">
          <p className="section-label">.../About me...</p>
          <p className="about-text">
            I build clean, fast front-end experiences with a focus on scalable
            UI systems, responsive layouts, and performance that feels effortless.
          </p>
        </section>

        <section id="skills" className="profile reveal delay-2">
          <div className="profile-left">
            <div className="profile-intro">
              <p className="section-label">.../About me...</p>
              <p className="profile-text">
                Hello! I&#39;m Victor.AKINYEMI, I&#39;m a frontend developer.
                Over 2 years of experience.
              </p>
            </div>
            <div className="skill-grid">
              {skills.map((skill) => (
                <article className="skill-card glass" key={skill.title}>
                  <h3 className="skill-title">{skill.title}</h3>
                  <p className="skill-list">{skill.items}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="profile-right">
            <div className="portrait-card glass">
              <div className="portrait-frame">
                <span className="portrait-label">Portrait</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects reveal delay-3">
          <div className="work-decor decor-ring-1" aria-hidden="true" />
          <div className="work-decor decor-ring-2" aria-hidden="true" />
          <div className="work-glyph work-glyph-1" aria-hidden="true">
            {"</>"}
          </div>
          <div className="work-glyph work-glyph-2" aria-hidden="true">
            {"{ }"}
          </div>
          <div className="dot-cluster work-dots-1" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="dot-cluster work-dots-2" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="project-head">
            <p className="section-label">.../Projects...</p>
            <h2 className="section-title">Work split by discipline</h2>
            <p className="section-lead">
              Front-end engineering first, followed by UI/UX craft and graphic design.
            </p>
          </div>

          <div className="project-section">
            <div className="project-section-head">
              <h3 className="project-section-title">Front-end</h3>
              <p className="project-section-text">
                Interface builds, performance, and scalable component systems.
              </p>
            </div>
            <div className="carousel">
              <button
                className="carousel-nav carousel-nav-left"
                type="button"
                aria-label="Scroll front-end projects left"
                onClick={() =>
                  scrollCarousel(frontendViewportRef.current, "left")
                }
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 5 9 12l6.5 7-1.6 1.5L6 12l7.9-8.5L15.5 5Z" />
                </svg>
              </button>
              <div className="carousel-viewport" ref={frontendViewportRef}>
                <div className="carousel-track">
                  {frontendProjects.map((project, index) => (
                    <button
                      className="carousel-card"
                      type="button"
                      data-tone={project.tone}
                      data-active={index === 1 ? "true" : undefined}
                      key={project.title}
                      aria-label={`Open ${project.title}`}
                      onClick={() => setActiveFrontendIndex(index)}
                    >
                      <div className="carousel-media" />
                      <div className="carousel-overlay">
                        <span className="carousel-kicker">Front-end build</span>
                        <h4 className="carousel-title">{project.title}</h4>
                        <p className="carousel-text">{project.description}</p>
                        <div className="carousel-tags">
                          <span className="carousel-tag">{project.stack}</span>
                          <span className="carousel-tag">{project.detail}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <button
                className="carousel-nav carousel-nav-right"
                type="button"
                aria-label="Scroll front-end projects right"
                onClick={() =>
                  scrollCarousel(frontendViewportRef.current, "right")
                }
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m8.5 19 6.5-7-6.5-7L10 3.5 18 12l-8 8.5L8.5 19Z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="project-section">
            <div className="project-section-head">
              <h3 className="project-section-title">UI + UX</h3>
              <p className="project-section-text">
                Interface polish paired with the UX thinking behind it.
              </p>
            </div>
            <div className="carousel">
              <button
                className="carousel-nav carousel-nav-left"
                type="button"
                aria-label="Scroll UI UX projects left"
                onClick={() => scrollCarousel(uiuxViewportRef.current, "left")}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 5 9 12l6.5 7-1.6 1.5L6 12l7.9-8.5L15.5 5Z" />
                </svg>
              </button>
              <div className="carousel-viewport" ref={uiuxViewportRef}>
                <div className="carousel-track">
                  {uiUxProjects.map((project, index) => (
                    <button
                      className="carousel-card"
                      type="button"
                      key={project.title}
                      data-tone={project.screens[0]?.tone}
                      data-active={index === 1 ? "true" : undefined}
                      aria-label={`Open ${project.title}`}
                      onClick={() => {
                        setActiveUiUxIndex(index);
                        setActiveUiUxScreen(0);
                      }}
                    >
                      <div className="carousel-media" />
                      <div className="carousel-overlay">
                        <span className="carousel-kicker">UI / UX Case</span>
                        <h4 className="carousel-title">{project.title}</h4>
                        <p className="carousel-text">{project.description}</p>
                        <div className="carousel-tags">
                          {project.tags.map((tag) => (
                            <span className="carousel-tag" key={tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <button
                className="carousel-nav carousel-nav-right"
                type="button"
                aria-label="Scroll UI UX projects right"
                onClick={() => scrollCarousel(uiuxViewportRef.current, "right")}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m8.5 19 6.5-7-6.5-7L10 3.5 18 12l-8 8.5L8.5 19Z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="project-section">
            <div className="project-section-head">
              <h3 className="project-section-title">Graphic design</h3>
              <p className="project-section-text">
                Poster, editorial, and photographic layouts with varied ratios.
              </p>
            </div>
            <div className="graphic-gallery">
              <div className="graphic-viewport">
                <div className="graphic-track">
                  {graphicProjects.map((project, index) => (
                    <button
                      className="graphic-card"
                      data-tone={project.tone}
                      data-size={project.size}
                      type="button"
                      key={project.title}
                      aria-label={`Open ${project.title}`}
                      onClick={() => setActiveGraphicIndex(index)}
                    >
                      <div className="graphic-media" />
                      <div className="graphic-caption">
                        <span className="graphic-type">{project.category}</span>
                        <h4 className="graphic-title">{project.title}</h4>
                        <span className="graphic-ratio">
                          {project.ratio} - {project.year}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </section>

        {activeGraphic ? (
          <div className="graphic-modal" role="dialog" aria-modal="true">
            <button
              className="graphic-modal-backdrop"
              type="button"
              aria-label="Close graphic design"
              onClick={() => setActiveGraphicIndex(null)}
            />
            <div className="graphic-modal-card">
              <button
                className="modal-close"
                type="button"
                aria-label="Close"
                onClick={() => setActiveGraphicIndex(null)}
              >
                X
              </button>
              <div
                className="graphic-modal-media"
                data-tone={activeGraphic.tone}
              />
              <div className="graphic-modal-body">
                <p className="modal-label">{activeGraphic.category}</p>
                <h3 className="modal-title">{activeGraphic.title}</h3>
                <p className="modal-text">{activeGraphic.description}</p>
                <div className="modal-meta">
                  <span className="modal-chip">{activeGraphic.ratio}</span>
                  <span className="modal-chip">{activeGraphic.year}</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {activeFrontend ? (
          <div className="frontend-modal" role="dialog" aria-modal="true">
            <button
              className="frontend-modal-backdrop"
              type="button"
              aria-label="Close front-end"
              onClick={() => setActiveFrontendIndex(null)}
            />
            <div className="frontend-modal-card">
              <button
                className="modal-close"
                type="button"
                aria-label="Close"
                onClick={() => setActiveFrontendIndex(null)}
              >
                X
              </button>
              <div className="frontend-modal-preview">
                <div className="frontend-modal-media" />
              </div>
              <div className="frontend-modal-body">
                <p className="modal-label">Front-end build</p>
                <h3 className="modal-title">{activeFrontend.title}</h3>
                <p className="modal-text">{activeFrontend.description}</p>
                <div className="modal-meta">
                  <span className="modal-chip">{activeFrontend.stack}</span>
                  <span className="modal-chip">{activeFrontend.detail}</span>
                </div>
                {activeFrontend.links?.length ? (
                  <div className="modal-links">
                    {activeFrontend.links.map((link) => (
                      <a
                        className="modal-link"
                        data-type={link.type}
                        href={link.href}
                        key={link.label}
                        aria-label={link.label}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.type === "github" ? (
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.5 0-.25-.01-.9-.01-1.76-2.78.62-3.36-1.38-3.36-1.38-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.02 1.64 1.02 2.77 0 3.98-2.35 4.86-4.59 5.11.36.33.68.97.68 1.96 0 1.41-.01 2.55-.01 2.9 0 .28.18.6.69.5A10.17 10.17 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                          </svg>
                        ) : null}
                        {link.type === "live" ? (
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M14 3h7v7h-2V6.41l-8.3 8.3-1.4-1.42 8.3-8.29H14V3Z" />
                            <path d="M5 5h6v2H7v10h10v-4h2v6H5V5Z" />
                          </svg>
                        ) : null}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}

        {activeUiUx ? (
          <div className="uiux-modal" role="dialog" aria-modal="true">
            <button
              className="uiux-modal-backdrop"
              type="button"
              aria-label="Close UI UX"
              onClick={() => setActiveUiUxIndex(null)}
            />
            <div className="uiux-modal-card">
              <button
                className="modal-close"
                type="button"
                aria-label="Close"
                onClick={() => setActiveUiUxIndex(null)}
              >
                X
              </button>
              <div className="uiux-modal-preview">
                <div className="uiux-modal-canvas">
                  {activeUiUx.screens.map((screen, screenIndex) => (
                    <div
                      className="uiux-modal-screen"
                      data-tone={screen.tone}
                      data-size={screen.size}
                      data-slot={screenIndex + 1}
                      data-active={
                        screenIndex === activeUiUxScreen ? "true" : undefined
                      }
                      key={screen.label}
                    >
                      <span className="uiux-screen-label">{screen.label}</span>
                    </div>
                  ))}
                </div>
                <div className="uiux-modal-dots" aria-label="Screen navigation">
                  {activeUiUx.screens.map((_, dotIndex) => (
                    <button
                      className={
                        dotIndex === activeUiUxScreen
                          ? "uiux-dot-button active"
                          : "uiux-dot-button"
                      }
                      type="button"
                      aria-label={`Show screen ${dotIndex + 1}`}
                      key={dotIndex}
                      onClick={() => setActiveUiUxScreen(dotIndex)}
                    />
                  ))}
                </div>
              </div>
              <div className="uiux-modal-body">
                <p className="modal-label">UI / UX Case</p>
                <h3 className="modal-title">{activeUiUx.title}</h3>
                <p className="modal-text">{activeUiUx.summary}</p>
                <div className="modal-meta">
                  {activeUiUx.tags.map((tag) => (
                    <span className="modal-chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {activeUiUx.links?.length ? (
                  <div className="modal-links">
                    {activeUiUx.links.map((link) => (
                      <a
                        className="modal-link"
                        data-type={link.type}
                        href={link.href}
                        key={link.label}
                        aria-label={link.label}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.type === "figma" ? (
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M12 2a4 4 0 0 0-4 4v4a4 4 0 1 0 0 8 4 4 0 0 0 4-4V2Z" />
                            <path d="M12 2h4a4 4 0 1 1 0 8h-4V2Z" />
                            <path d="M12 10h4a4 4 0 1 1 0 8h-4v-8Z" />
                            <path d="M8 10H4a4 4 0 0 1 0-8h4v8Z" />
                          </svg>
                        ) : null}
                        {link.type === "github" ? (
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.5 0-.25-.01-.9-.01-1.76-2.78.62-3.36-1.38-3.36-1.38-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.02 1.64 1.02 2.77 0 3.98-2.35 4.86-4.59 5.11.36.33.68.97.68 1.96 0 1.41-.01 2.55-.01 2.9 0 .28.18.6.69.5A10.17 10.17 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                          </svg>
                        ) : null}
                        {link.type === "live" ? (
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M14 3h7v7h-2V6.41l-8.3 8.3-1.4-1.42 8.3-8.29H14V3Z" />
                            <path d="M5 5h6v2H7v10h10v-4h2v6H5V5Z" />
                          </svg>
                        ) : null}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}

        <footer id="contact" className="footer reveal delay-3">
          <div className="footer-card glass">
            <h2 className="footer-title">
              Ready to build a focused, minimal portfolio?
            </h2>
            <p className="footer-text">
              Let&#39;s shape a product story with quiet confidence and crisp
              delivery.
            </p>
            <div className="footer-actions">
              <a className="pill pill-primary" href="mailto:hello@victor.dev">
                Start a project
              </a>
              <a className="pill pill-ghost" href="#projects">
                Explore work
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
