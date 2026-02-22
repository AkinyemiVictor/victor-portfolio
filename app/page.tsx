"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectVisual from "./components/ProjectVisual";

type Locale = "en" | "fr";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/AkinyemiVictor", type: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/knym-/", type: "linkedin" },
  { label: "Telegram", href: "https://web.telegram.org/k/", type: "telegram" },
  { label: "Instagram", href: "https://www.instagram.com/sope.icreate/", type: "instagram" },
] as const;

const baseProjects = [
  {
    id: "jm",
    title: "JM Quality Constructions",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "SEO",
    ],
    tone: "graphite",
    layout: "stacked",
    thumbnail: "/previews/jm-constructions.png",
    links: {
      github: "https://github.com/AkinyemiVictor/jm-quality-constructions",
      live: "https://jm-quality-constructions.vercel.app/",
    },
  },
  {
    id: "nextCentury",
    title: "Next Century Power",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Performance",
      "Component System",
    ],
    tone: "sand",
    layout: "split",
    thumbnail: "/previews/next-century-power.png",
    links: {
      github: "https://github.com/AkinyemiVictor/next-century-power",
      live: "https://next-century-power.vercel.app/",
    },
  },
  {
    id: "cultureHill",
    title: "Culture Hill",
    tech: [
      "Next.js",
      "TypeScript",
      "CMS Integration",
      "Accessibility",
      "Responsive UI",
    ],
    tone: "moss",
    layout: "cascade",
    thumbnail: "/previews/culture-hill.png",
    links: {
      github: "https://github.com/AkinyemiVictor/Culture-Hill-website",
      live: "https://culture-hill-website.vercel.app/",
    },
  },
  {
    id: "shopIt",
    title: "Shop It",
    tech: [
      "Next.js",
      "TypeScript",
      "API Integration",
      "State Management",
      "E-commerce UI",
    ],
    tone: "blue",
    layout: "split",
    thumbnail: "/previews/shopit.png",
    links: {
      github: "https://github.com/AkinyemiVictor/shopit-e-commerce-web-app",
      live: "https://shopit-e-commerce-web-app.vercel.app/",
    },
  },
] as const;

const localeContent = {
  en: {
    languageSwitch: "Language switch",
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    yearLabel: "Year",
    emailLabel: "Email",
    hero: {
      role: "Web developer",
      titleTop: "Full-stack",
      titleBottom: "Web developer",
      lead: "My goal is to write maintainable, clean and understandable code so development stays enjoyable.",
      projectsCta: "Projects",
      talkCta: "Let's talk",
    },
    quote:
      "I build clean, elegant, and functional web applications that are scalable, optimized, and engineered for real-world performance.",
    aboutLabel: ".../About me...",
    aboutIntro:
      "Hello! I'm Victor Akinyemi, I'm a full-stack web developer with over 2 years of experience.",
    skills: [
      {
        title: "Front-end",
        items:
          "HTML5 / CSS3 / JavaScript / Next.js / React / React Native / Responsive Web Design / Component Libraries / Interaction Design",
      },
      {
        title: "Styles",
        items: "Tailwind / Bootstrap",
      },
      {
        title: "Back-end",
        items: "Node.js / Express.js / REST APIs / PostgreSQL / MySQL / Supabase / AWS / Authentication",
      },
      {
        title: "DevOps",
        items: "Git / GitHub / Docker / Vercel / CI/CD Pipelines / Monitoring",
      },
    ],
    skillsNote: "Some of my favorite technologies, topics, and tools I work with.",
    projects: {
      label: ".../Projects...",
      title: "Full-stack projects",
      lead: "Selected builds focused on modern UI, performance, and clean interfaces.",
      featuredTitle: "Featured work",
      featuredText:
        "Each project highlights a focused full-stack delivery, from design systems to mobile-first experiences.",
      kicker: "Full-stack project",
    },
    projectText: {
      jm: {
        summary:
          "Marketing website for a construction company with clear service messaging and mobile-first browsing.",
        details:
          "Built service pages, a project showcase, and a quote flow designed to improve lead conversion.",
      },
      nextCentury: {
        summary:
          "Corporate web experience for an energy brand focused on trust, speed, and clear information architecture.",
        details:
          "Delivered responsive content sections, conversion-oriented CTAs, and scalable component patterns.",
      },
      cultureHill: {
        summary:
          "Farm-focused brand website crafted to present produce lines, story-led content, and a clean customer journey.",
        details:
          "Built responsive landing and catalog sections with clear hierarchy, trust cues, and conversion-ready call-to-actions.",
      },
      shopIt: {
        summary:
          "E-commerce storefront designed for fast browsing, product discovery, and a frictionless shopping flow.",
        details:
          "Implemented category-driven collections, product filtering, cart interactions, and checkout-focused UI states.",
      },
    },
    contact: {
      role: "Full-stack web developer",
      label: ".../Contacts...",
      nav: {
        main: "Main",
        about: "About",
        projects: "Projects",
        contact: "Contact",
      },
      cardTitle: "Site",
      line1: "Handcrafted by me /",
      line2: "Designed by Victor /",
      line3: "Powered by Next.js",
    },
  },
  fr: {
    languageSwitch: "Sélecteur de langue",
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    yearLabel: "Année",
    emailLabel: "Email",
    hero: {
      role: "Développeur web",
      titleTop: "Full-stack",
      titleBottom: "Développeur web",
      lead: "Mon objectif est d'écrire du code maintenable, propre et compréhensible pour que le développement reste agréable.",
      projectsCta: "Projets",
      talkCta: "Discutons",
    },
    quote:
      "Je crée des applications web propres, élégantes et fonctionnelles, conçues pour être scalables, optimisées et performantes en conditions réelles.",
    aboutLabel: ".../À propos...",
    aboutIntro:
      "Bonjour ! Je suis Victor Akinyemi, développeur web full-stack avec plus de 2 ans d'expérience.",
    skills: [
      {
        title: "Front-end",
        items:
          "HTML5 / CSS3 / JavaScript / Next.js / React / React Native / Responsive Web Design / Component Libraries / Interaction Design",
      },
      {
        title: "Styles",
        items: "Tailwind / Bootstrap",
      },
      {
        title: "Back-end",
        items:
          "Node.js / Express.js / API REST / PostgreSQL / MySQL / Supabase / AWS / Authentification",
      },
      {
        title: "DevOps",
        items: "Git / GitHub / Docker / Vercel / Pipelines CI/CD / Monitoring",
      },
    ],
    skillsNote:
      "Certaines de mes technologies, thématiques et outils préférés avec lesquels je travaille.",
    projects: {
      label: ".../Projets...",
      title: "Projets full-stack",
      lead: "Une sélection de réalisations axées sur des interfaces modernes, la performance et la clarté.",
      featuredTitle: "Projets phares",
      featuredText:
        "Chaque projet illustre une livraison full-stack ciblée, des systèmes de design aux expériences mobile-first.",
      kicker: "Projet full-stack",
    },
    projectText: {
      jm: {
        summary:
          "Site marketing pour une entreprise de construction, avec un message clair et une navigation mobile-first.",
        details:
          "Création des pages de services, d'une vitrine de projets et d'un parcours de devis pensé pour améliorer la conversion.",
      },
      nextCentury: {
        summary:
          "Expérience web corporate pour une marque énergie, axée sur la confiance, la rapidité et une architecture d'information claire.",
        details:
          "Livraison de sections de contenu responsive, de CTA orientés conversion et de patterns composants évolutifs.",
      },
      cultureHill: {
        summary:
          "Site de marque orienté agriculture, conçu pour présenter les gammes de produits, le storytelling et un parcours utilisateur clair.",
        details:
          "Mise en place de sections landing et catalogue responsive avec hiérarchie visuelle, éléments de confiance et CTA prêts pour la conversion.",
      },
      shopIt: {
        summary:
          "Boutique e-commerce conçue pour une navigation rapide, une découverte produit fluide et un parcours d'achat sans friction.",
        details:
          "Implémentation des collections par catégories, du filtrage produit, des interactions panier et des états UI orientés checkout.",
      },
    },
    contact: {
      role: "Développeur web full-stack",
      label: ".../Contact...",
      nav: {
        main: "Accueil",
        about: "À propos",
        projects: "Projets",
        contact: "Contact",
      },
      cardTitle: "Site",
      line1: "Conçu à la main par moi /",
      line2: "Design par Victor /",
      line3: "Propulsé par Next.js",
    },
  },
} as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const content = localeContent[locale];

  const navLinks = [
    { label: content.nav.about, href: "#about" },
    { label: content.nav.skills, href: "#skills" },
    { label: content.nav.projects, href: "#projects" },
    { label: content.nav.contact, href: "#contact" },
  ];

  const metaItems = [{ label: content.yearLabel, value: "2026" }];

  const contactLinks = [
    { label: content.contact.nav.main, href: "#top" },
    { label: content.contact.nav.about, href: "#about" },
    { label: content.contact.nav.projects, href: "#projects" },
    { label: content.contact.nav.contact, href: "#contact" },
  ];

  const contactSocial = [
    ...socialLinks,
    { label: content.emailLabel, href: "mailto:victorakinyemi52@gmail.com", type: "email" },
  ];

  const skills = content.skills;

  const frontendProjects = baseProjects.map((project) => ({
    ...project,
    summary: content.projectText[project.id].summary,
    details: content.projectText[project.id].details,
  }));

  return (
    <div className="page" id="top">
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
          <div className="logo">VICTOR.AKINYEMI</div>
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="lang-pill" role="group" aria-label={content.languageSwitch}>
            <button
              type="button"
              className={`lang-option${locale === "en" ? " is-active" : ""}`}
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
            >
              En
            </button>
            <span className="lang-divider" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              className={`lang-option${locale === "fr" ? " is-active" : ""}`}
              onClick={() => setLocale("fr")}
              aria-pressed={locale === "fr"}
            >
              Fr
            </button>
          </div>
        </header>

        <section className="hero reveal" aria-labelledby="hero-title">
          <div className="hero-left">
            <p className="mono-label">{content.hero.role}</p>
            <h1 id="hero-title" className="hero-title">
              <span>{content.hero.titleTop}</span>
              <span>{content.hero.titleBottom}</span>
            </h1>
            <p className="hero-lead">{content.hero.lead}</p>
            <div className="hero-actions">
              <a className="pill pill-primary" href="#projects">
                {content.hero.projectsCta}
              </a>
              <a className="pill pill-ghost" href="mailto:victorakinyemi52@gmail.com">
                {content.hero.talkCta}
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
          <div className="about-quote">
            <span className="quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p className="about-text">{content.quote}</p>
            <span className="quote-mark" aria-hidden="true">
              &rdquo;
            </span>
          </div>
        </section>

        <section id="skills" className="profile reveal delay-2">
          <div className="profile-intro">
            <p className="section-label">{content.aboutLabel}</p>
            <p className="profile-text">{content.aboutIntro}</p>
          </div>
          <div className="profile-left">
            <div className="skill-grid">
              {skills[0] && skills[1] && skills[2] && skills[3] ? (
                <div className="skill-panel">
                  <article className="skill-row skill-row-front">
                    <h3 className="skill-title">{skills[0].title}</h3>
                    <p className="skill-list">{skills[0].items}</p>
                  </article>

                  <div className="skill-mid">
                    <article className="skill-row skill-row-styles">
                      <h3 className="skill-title">{skills[1].title}</h3>
                      <p className="skill-list">{skills[1].items}</p>
                    </article>
                    <div className="skill-orbs" aria-hidden="true">
                      <span className="skill-orb">
                        <svg viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.5 0-.25-.01-.9-.01-1.76-2.78.62-3.36-1.38-3.36-1.38-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.02 1.64 1.02 2.77 0 3.98-2.35 4.86-4.59 5.11.36.33.68.97.68 1.96 0 1.41-.01 2.55-.01 2.9 0 .28.18.6.69.5A10.17 10.17 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                        </svg>
                      </span>
                      <span className="skill-orb skill-orb-light">
                        <svg viewBox="0 0 24 24">
                          <path d="M14 3h7v7h-2V6.41l-8.3 8.3-1.4-1.42 8.3-8.29H14V3Z" />
                          <path d="M5 5h6v2H7v10h10v-4h2v6H5V5Z" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <article className="skill-row skill-row-back">
                    <h3 className="skill-title">{skills[2].title}</h3>
                    <p className="skill-list">{skills[2].items}</p>
                  </article>

                  <div className="skill-foot">
                    <p className="skill-note">{content.skillsNote}</p>
                    <article className="skill-row skill-row-devops">
                      <h3 className="skill-title">{skills[3].title}</h3>
                      <p className="skill-list">{skills[3].items}</p>
                    </article>
                  </div>
                </div>
              ) : (
                <div className="skill-panel">
                  {skills.map((skill) => (
                    <article className="skill-row" key={skill.title}>
                      <h3 className="skill-title">{skill.title}</h3>
                      <p className="skill-list">{skill.items}</p>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="profile-right">
            <div className="profile-intro-tablet">
              <p className="section-label">{content.aboutLabel}</p>
              <p className="profile-text">{content.aboutIntro}</p>
            </div>
            <div className="portrait-card glass">
              <div className="portrait-frame">
                <div className="portrait-media">
                  <Image
                    className="portrait-image"
                    src="/Frame 8 (1).png"
                    alt="Victor Akinyemi portrait"
                    fill
                    sizes="(max-width: 900px) 100vw, 28vw"
                    quality={100}
                    priority
                  />
                </div>
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
            <p className="section-label">{content.projects.label}</p>
            <h2 className="section-title">{content.projects.title}</h2>
          </div>

          <div className="project-section">
            <div className="project-list">
              {frontendProjects.map((project, index) => (
                <article
                  className="project-item"
                  data-tone={project.tone}
                  data-align={index % 2 === 0 ? "left" : "right"}
                  key={project.title}
                >
                  <ProjectVisual
                    layout={project.layout}
                    liveLink={project.links?.live}
                    thumbnail={project.thumbnail}
                    title={project.title}
                  />
                  <div className="project-content">
                    <p className="project-kicker">{content.projects.kicker}</p>
                    <h3 className="project-name">{project.title}</h3>
                    <div className="project-tags">
                      {project.tech.map((tag) => (
                        <span className="project-pill" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="project-copy">{project.summary}</p>
                    <p className="project-copy">{project.details}</p>
                    <div className="project-links">
                      {project.links?.github ? (
                        <a
                          className="project-icon project-icon-github"
                          href={project.links.github}
                          aria-label={`${project.title} GitHub`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.5 0-.25-.01-.9-.01-1.76-2.78.62-3.36-1.38-3.36-1.38-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.02 1.64 1.02 2.77 0 3.98-2.35 4.86-4.59 5.11.36.33.68.97.68 1.96 0 1.41-.01 2.55-.01 2.9 0 .28.18.6.69.5A10.17 10.17 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                          </svg>
                        </a>
                      ) : null}
                      {project.links?.live ? (
                        <a
                          className="project-icon project-icon-live"
                          href={project.links.live}
                          aria-label={`${project.title} Live site`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14 3h7v7h-2V6.41l-8.3 8.3-1.4-1.42 8.3-8.29H14V3Z" />
                            <path d="M5 5h6v2H7v10h10v-4h2v6H5V5Z" />
                          </svg>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="footer reveal delay-3">
          <div className="contact-panel">
            <div className="contact-left">
              <p className="contact-role">{content.contact.role}</p>
              <h2 className="contact-name">
                <span>Victor.</span>
                <span>Akinyemi</span>
              </h2>
              <div className="contact-social">
                {contactSocial.map((link) => (
                  <a
                    key={`${link.label}-${link.type}`}
                    className="contact-pill"
                    href={link.href}
                  >
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
                    {link.type === "email" ? (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v10h16V7l-8 5L4 7Zm1.4 0 6.6 4.1L18.6 7H5.4Z" />
                      </svg>
                    ) : null}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-right">
              <p className="section-label">{content.contact.label}</p>
              <nav className="contact-nav" aria-label="Footer">
                {contactLinks.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="contact-card">
                <p className="contact-card-title">{content.contact.cardTitle}</p>
                <div className="contact-card-lines">
                  <span>{content.contact.line1}</span>
                  <span>{content.contact.line2}</span>
                  <span>{content.contact.line3}</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
