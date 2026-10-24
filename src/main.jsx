import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowUp,
  Atom,
  BookOpen,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
 
  Mail,
  Menu,
  Moon,
  PanelsTopLeft,
  Send,
  Server,
  Sparkles,
  Snowflake,
  Sun,
  X,
  Monitor,
  icons,
  Phone,
  Smartphone,
  DatabaseIcon
} from 'lucide-react';
import './style.css';
import './journey.css';

/* ============================================================
   DATA
   ============================================================ */

const projects = [
  {
    title: 'Khmer News Website',
    category: 'Frontend-Development',
    description:
      'A responsive news website concept for Khmer readers, featuring a clean layout, article cards, and category navigation.',  
    tags: ['HTML','CSS', 'JavaScript'],
    icon: BookOpen,
    tone: 'violet',
    link: 'https://chhornmony.github.io/News-Web-NU/',
    github: 'https://github.com/ChhornMony/Project-News-NU'
  },
  {
    title: 'Ice Dome Cambodia Website',
    category: 'Full Stack Development',
    description:
      'A full-stack website for Ice Dome Cambodia, built with Next.js and Express.js, featuring product listings, shopping cart functionality, and user authentication.',
    tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    icon: Snowflake,
    tone: 'blue',
    link: 'https://ice-dome-29ym.vercel.app/',
    github: 'https://github.com/ChhornMony/Ice-Dome-Cambodia-Website'
  },
  
  {
    title: 'E-Commerce Mobile App',
    category: 'Mobile App Development',
    description:
      'A mobile application concept for e-commerce, designed to provide a seamless shopping experience on mobile devices, with intuitive navigation and product browsing.',
    tags: ['Flutter', 'Dart', 'UI/UX Design'],
    icon: Smartphone,
    tone: 'indigo',
    link: 'https://github.com/ChhornMony/Store_App',
    github: 'https://github.com/ChhornMony/Store_App'
  }
];

const skills = [
  {
    title: 'Frontend Development',
    icon: PanelsTopLeft,
    items: ['HTML5 & CSS3', 'Tailwind CSS', 'Java Script', 'React.js',]

  },
  {
    title: 'Backend Development',
    icon: Server,
    items: ['Node.Js', 'REST API basics', 'Java', 'Python']
  },
  {
    title: 'Database & Tools',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'Git & GitHub', 'VS Code']
  }
];

const journey = [
  {
    date: '2026-Current',
    color: '#a855f7',
    title: 'University Internship Program',
    subtitle: 'Web Development For Ice Dome Cambodia',
    toggleLabel: 'View Details & Key Highlights',
    points: [
      'Built an E-commerce website using Next.js and Express.js, implementing CRUD operations and responsive design.',
      'Participated in a university internship program focused on web development.',
    ],
    tags: ['Collaboration', 'Real-world experience']
  },
  {
    date: '2024-2025',
    color: '#6366f1',
    title: 'Ant Technology Training Center',
    subtitle: 'Web Development',
    toggleLabel: 'View Details',
    points: [
      'Learning web development fundamentals, including HTML, CSS, JavaScript, and React.',
      'Building practical projects to apply knowledge and gain hands-on experience.'
    ],
    tags: ['Practice', 'Build', 'Improve']
  },
  {
    date: '2023-2026',
    color: '#a855f7',
    title: 'Norton University',
    subtitle: 'Bachelor of Software Development',
    toggleLabel: 'View Details & Key Highlights',
    points: [
      'Studying software development principles, programming languages, and web technologies.',
      'Gaining practical experience through coursework, projects, and collaborative assignments.'
    ],
    tags: ['Collaboration', 'Real-world experience']
  },
  {
    date: '2020-2021',
    color: '#6366f1',
    title: 'Preah Sihanouk High School',
    subtitle: 'Graduated of Baccalaureate',
    toggleLabel: 'View Details',
    points: [
      'Completed high school education with a focus on science and technology.',
      'Participated in extracurricular activities and developed foundational skills for future studies.'
    ],
    tags: ['Foundation', 'Preparation for higher education']
  }
  
];

/* ============================================================
   APP
   ============================================================ */

function App() {
  /* ---------- State ---------- */
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [sent, setSent] = useState(false);
  const [openJourney, setOpenJourney] = useState(0);

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter(p => p.category === filter)),
    [filter]
  );

  /* ---------- Effects ---------- */

  // Apply theme to <html data-theme="...">
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* ---------- Handlers ---------- */

  const closeMenu = () => setMenuOpen(false);

  const submitContact = e => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      data.get('subject') || `Portfolio contact from ${data.get('name')}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
    );

    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  /* ---------- Render ---------- */

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>
            Chhorn Mony<span className="brand-dot">.dev</span>
          </span>
        </a>

        <button
          className="mobile-toggle"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {[
            ['Home', '#home'],
            ['About', '#about'],
            ['Skills', '#skills'],
            ['Projects', '#projects'],
            ['Journey', '#journey'],
            ['Contact', '#contact']
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <a className="button button-small" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero section-wrap">
          <div className="hero-copy reveal">
            <div className="availability">
              <span className="status-dot" /> Available for opportunities
            </div>

            <p className="eyebrow">SOFTWARE DEVELOPER · CAMBODIA</p>

            <h1>
              Building thoughtful
              <br />
              digital <span className="gradient-text">experiences.</span>
            </h1>

            <p className="hero-lede">
              Hi, I’m <strong>Chhorn Mony</strong>. A software developer passionate about creating practical digital experiences with a focus on clarity, usability, and continuous improvement.
            </p>

            <div className="hero-actions">
              <a className="button" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-ghost" 
                  href="/images/Chhorn-Mony-CV.pdf"
                  target="_blank" 
                  rel="noopener noreferrer">
                View My CV <ArrowUpRight size={16} />
              </a>
            </div>
            

            <div className="social-row">
              <a href="https://github.com/ChhornMony" target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub <ArrowUpRight size={13} />
              </a>
                <span className="social-separator">/</span>
              <a href="https://t.me/Ch_Mony" target="_blank" rel="noreferrer">
                <Send size={16} /> Telegram <ArrowUpRight size={13} />
              </a>
              <span className="social-separator">/</span>
              <a href="mailto:chhornmony10@gmail.com">
                <Mail size={16} /> Email <ArrowUpRight size={13} />
              </a>
            
              
             
              
              
            </div>
          </div>

          
          <div className="hero-visual reveal">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />

            <div className="profile-image-card">
              <img
                src="/images/rMony.png"
                alt="Chhorn Mony"
                className="hero-profile-image"
              />

              <div className="image-overlay">
                <span className="status-dot" />
                <div>
                  <h3>Chhorn Mony</h3>
                  <p>Software Developer</p>
                </div>
              </div>
            </div>

            <div className="floating-chip chip-react">
              <Monitor size={18} />Frontend Developer
            </div>


            <div className="floating-chip chip-responsive">
              <DatabaseIcon size={18} /> Backend Developer
            </div>
            
          </div>


          <a href="#about" className="scroll-hint">
            <span className="scroll-line" /> Scroll to explore
          </a>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section section-wrap">
          <div className="section-heading reveal">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Curious by nature.
              <br />
              <span className="muted-heading">Developer by choice.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-copy reveal">
              <p className="large-copy">
                I’m a software developer who enjoys creating practical digital
                experiences with a strong focus on clarity, usability, and continuous
                improvement.
              </p>

              <p>
                I’m growing my skills across frontend and backend development, learning
                through hands-on projects, and looking for opportunities to contribute
                to a team where I can keep improving and build software that matters.
              </p>

              <div className="stats-grid">
                <div className="stat">
                  <strong>
                    03<span>+</span>
                  </strong>
                  <small>Project concepts</small>
                </div>
                <div className="stat">
                  <strong>
                    04<span>+</span>
                  </strong>
                  <small>Areas of study</small>
                </div>
                <div className="stat">
                  <strong>∞</strong>
                  <small>Curiosity to learn</small>
                </div>
              </div>
            </div>

            <div className="about-note glass-card reveal">
              <div className="note-icon">
                <Sparkles size={22} />
              </div>
              <p className="eyebrow">MY APPROACH</p>
              <h3>Learn. Build. Improve.</h3>
              <p>
                I believe good software comes from curiosity, thoughtful
                problem-solving, and a willingness to keep refining the details.
              </p>
              <div className="note-tags">
                <span>Problem solving</span>
                <span>Teamwork</span>
                <span>Growth mindset</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section section-wrap skills-section">
          <div className="section-heading reveal">
            <p className="eyebrow">02 / TOOLKIT</p>
            <h2>
              Tools I use to bring
              <br />
              <span className="muted-heading">ideas to life.</span>
            </h2>
            <p className="section-intro">
              A growing toolkit for building reliable, responsive web applications.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <article
                className="skill-card glass-card reveal"
                key={skill.title}
                style={{ '--delay': `${i * 100}ms` }}
              >
                <div className="skill-card-head">
                  <span className="skill-icon">
                    <skill.icon size={23} strokeWidth={1.8} />
                  </span>
                  <span className="skill-number">0{i + 1}</span>
                </div>

                <h3>{skill.title}</h3>

                <div className="skill-list">
                  {skill.items.map(item => (
                    <span key={item}>
                      {item}
                      <ExternalLink size={13} aria-hidden="true" />
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section projects-section">
          <div className="section-wrap">
            <div className="section-heading heading-row reveal">
              <div>
                <p className="eyebrow">03 / SELECTED WORK</p>
                <h2>
                  Projects with a
                  <br />
                  <span className="muted-heading">purpose.</span>
                </h2>
              </div>
              <p className="section-intro">
                A selection of practice projects and concepts that reflect what I’m
                learning and building.
              </p>
            </div>

        

            <div className="projects-grid">
              {filtered.map((project, i) => (
                <article
                  className="project-card glass-card reveal"
                  key={project.title}
                  style={{ '--delay': `${i * 100}ms` }}
                >
                  <button
                    className={`project-art ${project.tone}`}
                    onClick={() => setActiveProject(project)}
                    aria-label={`View ${project.title} details`}
                  >
                    <span className="art-orb" />
                    <span className="art-icon">
                      <project.icon size={42} strokeWidth={1.5} />
                    </span>
                    <span className="art-open">
                      <ArrowUpRight size={19} />
                    </span>
                    <span className="art-index">PROJECT / 0{i + 1}</span>
                  </button>

                  <div className="project-info">
                    <div className="project-category">{project.category}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="tag-row">
                      {project.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <button className="text-link" onClick={() => setActiveProject(project)}>
                      View project details <ArrowUpRight size={15} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <p className="project-disclaimer">
              Project cards are starter examples. Replace descriptions and links with
              your real work before publishing.
            </p>
          </div>
        </section>

        {/* ================= JOURNEY ================= */}
        <section id="journey" className="section section-wrap">
          <div className="jr-heading reveal">
            <p className="eyebrow">04 / CAREER JOURNEY</p>
            <h1>Experience &amp; Education</h1>
            
          </div>

          <div className="jr-timeline">
            {journey.map((item, i) => {
              const isOpen = openJourney === i;

              return (
                <article
                  className="jr-item reveal"
                  key={item.title}
                  style={{ '--accent': item.color }}
                >
                  <div className="jr-date">{item.date}</div>
                  <div className="jr-dot" />

                  <div className="jr-card">
                    <h3>{item.title}</h3>
                    <p className="jr-sub">{item.subtitle}</p>

                    <button
                      className="jr-toggle"
                      aria-expanded={isOpen}
                      onClick={() => setOpenJourney(isOpen ? null : i)}
                    >
                      {item.toggleLabel}
                      <ChevronDown
                        size={14}
                        className={isOpen ? 'jr-chevron open' : 'jr-chevron'}
                      />
                    </button>

                    <div className={isOpen ? 'jr-details open' : 'jr-details'}>
                      <div className="jr-details-inner">
                        <ul>
                          {item.points.map(point => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                        <div className="tag-row">
                          {item.tags.map(tag => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="section contact-section">
          <div className="section-wrap">
            <div className="section-heading reveal">
              <p className="eyebrow">05 / GET IN TOUCH</p>
              <h2>
                Have an idea?
                <br />
                <span className="gradient-text">Let’s talk.</span>
              </h2>
              <p className="section-intro">
                Have a role, project, or opportunity in mind? I’d be happy to hear from
                you.
              </p>
            </div>

            <div className="contact-grid">
              {/* Contact details */}
              <div className="contact-details reveal">
                <div className="contact-detail">
                  <span className="contact-icon">
                    <Mail size={20} />
                  </span>
                  <div>
                    <small>EMAIL</small>
                    <a href="mailto:chhornmony10@gmail.com">
                      chhornmony10@gmail.com <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="contact-icon">
                    <Github size={20} />
                  </span>
                  <div>
                    <small>GITHUB</small>
                    <a href="https://github.com/ChhornMony?tab=overview&from=2026-10-01&to=2026-10-15" target="_blank" rel="noreferrer">
                      github.com <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="contact-icon">
                    <Send size={20} />
                  </span>
                  <div>
                    <small>Telegram</small>
                    <a href="https://t.me/ChhornMony" target="_blank" rel="noreferrer">
                      Connect with me <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="contact-callout">
                  <span className="status-dot" /> Open to junior roles and internships
                </div>
              </div>

              {/* Contact form */}
              <form className="contact-form glass-card reveal" onSubmit={submitContact}>
                <div className="form-row">
                  <label>
                    Your name
                    <input name="name" required placeholder="Name" />
                  </label>
                  <label>
                    Email address
                    <input name="email" type="email" required placeholder="you@example.com" />
                  </label>
                </div>

                <label>
                  Subject
                  <input name="subject" placeholder="What would you like to discuss?" />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me a little about it..."
                  />
                </label>

                <button className="button form-submit" type="submit">
                  Send message <Send size={16} />
                </button>

                {sent && (
                  <p className="form-hint">
                    Your email app should open with the message. Update the placeholder
                    email in <code>src/main.jsx</code> first.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>
            Chhorn Mony<span className="brand-dot">.dev</span>
          </span>
        </a>

        <h5>Designed with care.</h5>

        <a className="back-top" href="#home">
          <h2>Back to top</h2> <ArrowUp size={15} />
        </a>

        <div className="footer-bottom">
           <h2>© {new Date().getFullYear()} Chhorn Mony Built to keep growing.</h2>
        </div>
      </footer>

      {/* ================= PROJECT MODAL ================= */}
      {activeProject && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setActiveProject(null)}
        >
          <section
            className="project-modal glass-card"
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.title}
            onClick={e => e.stopPropagation()}
          >
            <header className="modal-header">
              <h2>{activeProject.title}</h2>
              <button
                className="modal-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close details"
              >
                <X size={18} />
              </button>
            </header>

            <div className={`modal-art ${activeProject.tone}`}>
              <div className="modal-preview-glow" />
              <activeProject.icon
                className="modal-preview-icon"
                size={58}
                strokeWidth={1.4}
              />
              <span className="preview-caption">PROJECT OVERVIEW</span>
            </div>

            <div className="modal-content">
              <p className="modal-description">{activeProject.description}</p>
              <p className="modal-label">TECHNOLOGIES USED</p>
              <div className="tag-row">
                {activeProject.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

           <footer className="modal-footer">
              {/* View Source Button (GitHub) */}
              {activeProject.github && (
                <a
                  className="button button-ghost"
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={15} /> View Source
                </a>
              )}

              {/* Live Demo Button */}
              <a
                className="button"
                href={activeProject.demo || activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            </footer>
          </section>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   MOUNT
   ============================================================ */

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
