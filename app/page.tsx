export default function Home() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const metaItems = [
    { label: "Project", value: "Full-stack portfolio" },
    { label: "Role", value: "UX/UI + front-end" },
    { label: "Year", value: "2026" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Telegram", href: "https://t.me" },
    { label: "Instagram", href: "https://instagram.com" },
  ];

  const skills = [
    {
      title: "Front-end",
      items: "TypeScript / React / Next.js / Vue / GraphQL / React Native",
    },
    {
      title: "Styles",
      items: "SCSS / Sass / PostCSS / Tailwind / Material UI",
    },
    {
      title: "Back-end",
      items: "Node / Express / Postgres / Redis / Kafka / Docker",
    },
  ];

  const projects = [
    {
      title: "Kafka + Golang",
      description:
        "The simplest example of event streaming with clear, readable services.",
      stack: "Streaming / Backend",
      tone: "blue",
    },
    {
      title: "Signal Commerce",
      description:
        "A high-contrast storefront and admin stack tuned for conversion.",
      stack: "Next.js / UI",
      tone: "smoke",
    },
    {
      title: "Studio Grid",
      description:
        "Design system library with modular components and strict tokens.",
      stack: "Design system",
      tone: "graphite",
    },
  ];

  const categories = ["Design", "UI", "Food Dev"];

  return (
    <div className="page">
      <div className="ring ring-1" aria-hidden="true" />
      <div className="ring ring-2" aria-hidden="true" />
      <div className="ring ring-3" aria-hidden="true" />
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
          <div className="logo">Victor K.</div>
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
            <p className="mono-label">Website developer</p>
            <h1 id="hero-title" className="hero-title">
              <span>Full-stack</span>
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
          <p className="section-label">.../About project...</p>
          <p className="about-text">
            The task is to create a website portfolio for a full-stack developer
            that is modern, functional, and visually appealing. The site should
            present skills, projects, work experience, and contact information.
          </p>
        </section>

        <section id="skills" className="profile reveal delay-2">
          <div className="profile-left">
            <div className="profile-intro">
              <p className="section-label">.../About me...</p>
              <p className="profile-text">
                Hello! I&#39;m Victor, I&#39;m a full-stack developer. More than
                5 years experience.
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
          <div className="project-head">
            <p className="section-label">.../Projects...</p>
            <h2 className="section-title">Selected work highlights</h2>
            <p className="section-lead">
              Modular builds across UI, product platforms, and content systems.
            </p>
          </div>
          <div className="category-row">
            {categories.map((category) => (
              <span className="category-pill" key={category}>
                {category}
              </span>
            ))}
          </div>
          <div className="project-row">
            {projects.map((project, index) => (
              <article
                className="project-card"
                data-tone={project.tone}
                data-active={index === 1 ? "true" : undefined}
                key={project.title}
              >
                <div className="project-media" />
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-text">{project.description}</p>
                  <div className="project-footer">
                    <span className="project-stack">{project.stack}</span>
                    <a className="pill pill-ghost" href="#">
                      Read more
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

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
