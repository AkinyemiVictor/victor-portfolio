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

  const contactLinks = [
    { label: "Main", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const contactSocial = [
    ...socialLinks,
    { label: "Email", href: "mailto:hello@victor.dev", type: "email" },
  ];

  const skills = [
    {
      title: "Front-end",
      items:
        "HTML5 / CSS3 / JavaScript / Next.js / React / React Native / Responsive Web Design / Component Libraries / Interaction Design",
    },
    {
      title: "Styles",
      items: "Tailwind / Bootstrap",
    },
  ];

  const frontendProjects = [
    {
      title: "Gostat",
      summary:
        "Real-time analytics UI focused on clarity, speed, and a compact data layout.",
      details:
        "Built responsive dashboards, chart modules, and reusable UI blocks for daily monitoring.",
      tech: ["Next.js", "TypeScript", "React Query", "Recharts", "Tailwind", "Vercel"],
      tone: "blue",
      layout: "stacked",
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
    },
    {
      title: "Kana Master",
      summary:
        "Learning experience with layered screen states and smooth, guided flows.",
      details:
        "Designed multi-device layouts, motion-driven transitions, and clear navigation.",
      tech: [
        "React",
        "TypeScript",
        "React Native",
        "Redux Toolkit",
        "i18n",
        "Expo",
      ],
      tone: "sand",
      layout: "split",
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
    },
    {
      title: "Anime Sentry",
      summary:
        "Notification-first UI with sharp visual hierarchy and adaptive feeds.",
      details:
        "Crafted a clean interface for tracking, alerts, and rich content previews.",
      tech: [
        "Next.js",
        "JavaScript",
        "PWA",
        "Framer Motion",
        "Accessibility",
        "Responsive UI",
      ],
      tone: "moss",
      layout: "cascade",
      links: {
        github: "https://github.com",
        live: "https://example.com",
      },
    },
  ];

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
          <div className="about-quote">
            <span className="quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p className="about-text">
              I build clean, fast front-end experiences with a focus on scalable
              systems, responsive layouts, and performance that feels effortless.
            </p>
            <span className="quote-mark" aria-hidden="true">
              &rdquo;
            </span>
          </div>
        </section>

        <section id="skills" className="profile reveal delay-2">
          <div className="profile-left">
            <div className="profile-intro">
              <p className="section-label">.../About me...</p>
              <p className="profile-text">
                Hello! I&#39;m Victor Akinyemi, I&#39;m a frontend developer with
                over 2 years of experience.
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
            <h2 className="section-title">Front-end projects</h2>
            <p className="section-lead">
              Selected builds focused on modern UI, performance, and clean
              interfaces.
            </p>
          </div>

          <div className="project-section">
            <div className="project-section-head">
              <h3 className="project-section-title">Featured work</h3>
              <p className="project-section-text">
                Each project highlights a focused front-end delivery, from
                design systems to mobile-first experiences.
              </p>
            </div>
            <div className="project-list">
              {frontendProjects.map((project, index) => (
                <article
                  className="project-item"
                  data-tone={project.tone}
                  data-align={index % 2 === 0 ? "left" : "right"}
                  key={project.title}
                >
                  <div className="project-visual" data-layout={project.layout}>
                    <span className="visual-layer visual-main" />
                    <span className="visual-layer visual-sub" />
                    <span className="visual-layer visual-chip" />
                    {project.links?.live ? (
                      <a
                        className="project-cta"
                        href={project.links.live}
                        aria-label={`Visit ${project.title}`}
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
                  <div className="project-content">
                    <p className="project-kicker">Front-end project</p>
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
                          className="project-icon"
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
                          className="project-icon"
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
              <p className="contact-role">Front-end developer</p>
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
              <p className="section-label">.../Contacts...</p>
              <nav className="contact-nav" aria-label="Footer">
                {contactLinks.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="contact-card">
                <p className="contact-card-title">Site</p>
                <div className="contact-card-lines">
                  <span>Handcrafted by me /</span>
                  <span>Designed by Victor /</span>
                  <span>Powered by Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
