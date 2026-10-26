import { useEffect, useRef, useState } from "react"

type ProjectVisualType = "widgets" | "menu" | "system" | "orbit"

type Project = {
  number: string
  title: string
  type: string
  summary: string
  visual: ProjectVisualType
  note: string
}

const projects: Project[] = [
  {
    number: "01",
    title: "Bubble Widgets",
    type: "PRODUCT DESIGN · MASTER’S CAPSTONE",
    summary:
      "A flexible dashboard tool designed for young adults with brains like mine.",
    visual: "widgets",
    note: "CASE STUDY IN PROGRESS",
  },
  {
    number: "02",
    title: "Restaurant Menu App",
    type: "ACCESSIBLE PRODUCT · DESIGN SYSTEM",
    summary:
      "Reducing the stress of eating out by helping people with restricted diets find adaptable menu items.",
    visual: "menu",
    note: "CASE STUDY IN PROGRESS",
  },
  {
    number: "03",
    title: "Design System Builder",
    type: "DEVELOPER TOOL · INTERACTIVE WEB APP",
    summary:
      "Turning visual foundations into structured Markdown or JSON for developers and agentic workflows.",
    visual: "system",
    note: "EXPLORATION",
  },
  {
    number: "04",
    title: "Orbital",
    type: "3D · EXPERIENTIAL WEB",
    summary:
      "An interactive star system that makes planetary information useful, memorable, and a little playful.",
    visual: "orbit",
    note: "EXPLORATION",
  },
]

const workflows = [
  {
    number: "01",
    tool: "Claude Design",
    purpose: "Extend",
    copy: "Claude Design helps me study established brand work and extend its visual decisions into a broader system. It speeds up pattern finding, foundation documentation, and component extension. That leaves more time for interaction, architecture, and details that need human judgment.",
    outcome: "More time for interaction and architecture.",
  },
  {
    number: "02",
    tool: "Figma Make",
    purpose: "Iterate",
    copy: "I use Figma Make to turn early interface ideas into working web or mobile prototypes. Direct visual editing and accessible code help me test interactions and refine the implementation. Clients and stakeholders can respond to something tangible while the idea is still taking shape.",
    outcome: "Faster alignment around working ideas.",
  },
  {
    number: "03",
    tool: "Claude Skills",
    purpose: "Systematize",
    copy: "I use Claude Skills to capture a brand’s voice, visual rules, and recurring patterns as reusable guidance. These guardrails support social content, editorial copy, and functional prototypes without drifting from the larger system. Deliberate review and refinement remain part of the process.",
    outcome: "More autonomy without losing the system.",
  },
]

const labItems = [
  {
    number: "01",
    title: "Generative Snowflake",
    meta: "GENERATIVE ART",
    copy: "A generative study that builds one-of-a-kind snowflakes from repeated geometric rules. The timed rotation reveals how small changes in symmetry, scale, and chance can produce an endless family of related forms.",
  },
  {
    number: "02",
    title: "Particle System",
    meta: "CREATIVE CODING",
    copy: "An interactive system of independent particles that respond to shared forces and one another. I used it to explore how simple rules can accumulate into motion that feels organic, complex, and unexpectedly expressive.",
  },
  {
    number: "03",
    title: "Shader Study",
    meta: "REAL-TIME GRAPHICS",
    copy: "A real-time material experiment focused on the relationship between light, color, texture, and distortion. It became a way to understand how small mathematical adjustments can create surfaces that feel tactile and alive.",
  },
  {
    number: "04",
    title: "3D Orbital Study",
    meta: "P5.JS · 3D",
    copy: "A p5.js orbital model that organizes information through depth, scale, and movement. The study explores how user-controlled motion can make a spatial system easier to understand without losing its sense of wonder.",
  },
  {
    number: "05",
    title: "Sound-Reactive",
    meta: "P5.JS · PROCEDURAL MOTION",
    copy: "A procedural animation that translates volume, rhythm, and frequency into responsive visual form. Rather than decorating the audio, the system treats sound as an input that continuously reshapes the composition.",
  },
  {
    number: "06",
    title: "Learning in Motion",
    meta: "3D · EDUCATION",
    copy: "A set of 3D animation concepts for an educational web experience. The work investigates how movement, pacing, and direct manipulation can turn abstract information into something learners can explore and remember.",
  },
]

function ProjectVisual({ type }: { type: ProjectVisualType }) {
  if (type === "widgets") {
    return (
      <div className="visual visual-widgets" aria-hidden="true">
        <div className="widget-shell">
          <div className="widget-nav">
            <b>B</b>
            <i />
            <i />
            <i />
          </div>
          <div className="widget-canvas">
            <span>MY SPACE</span>
            <strong>Good afternoon.</strong>
            <div className="widget-grid">
              <div className="widget-card widget-focus">
                <small>FOCUS</small>
                <b>25:00</b>
              </div>
              <div className="widget-card widget-note">
                <small>QUICK NOTE</small>
                <i />
                <i />
              </div>
              <div className="widget-card widget-energy">
                <small>ENERGY</small>
                <div>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="visual-label">A DASHBOARD THAT ADAPTS TO YOU</span>
      </div>
    )
  }

  if (type === "menu") {
    return (
      <div className="visual visual-menu" aria-hidden="true">
        <div className="phone">
          <div className="phone-bar" />
          <span>FIND A DISH</span>
          <strong>Dinner without the guesswork.</strong>
          <div className="filter-row">
            <i>GF</i>
            <i>DF</i>
            <i>VG</i>
          </div>
          <div className="menu-result">
            <span>ROASTED MARKET BOWL</span>
            <small>2 possible adaptations</small>
          </div>
        </div>
        <div className="token-float token-one">
          <span>DIETARY STATUS</span>
          <b>ADAPTABLE</b>
        </div>
        <div className="token-float token-two">
          <span>COMPONENT</span>
          <b>MENU / RESULT</b>
        </div>
        <span className="visual-label">
          DESIGNED FOR DECISIONS WITH LESS STRESS
        </span>
      </div>
    )
  }

  if (type === "system") {
    return (
      <div className="visual visual-system" aria-hidden="true">
        <div className="system-window">
          <div className="system-top">
            <i />
            <i />
            <i />
            <span>system-builder / export</span>
          </div>
          <div className="system-body">
            <div className="system-preview">
              <span>FOUNDATIONS</span>
              <b>Aa</b>
              <div className="swatches">
                <i />
                <i />
                <i />
              </div>
            </div>
            <pre>
              <code>{`{
  "color.primary": "#3478E5",
  "type.display": "Manrope",
  "radius.control": "full"
}`}</code>
            </pre>
          </div>
        </div>
        <span className="visual-label">
          FROM VISUAL LANGUAGE TO STRUCTURED DATA
        </span>
      </div>
    )
  }

  return (
    <div className="visual visual-orbit" aria-hidden="true">
      <div className="orbit-system">
        <i className="orbit orbit-one" />
        <i className="orbit orbit-two" />
        <i className="orbit orbit-three" />
        <b className="sun" />
        <span className="planet planet-one" />
        <span className="planet planet-two" />
        <span className="planet planet-three" />
      </div>
      <div className="orbit-data">
        <span>CURRENT SKY</span>
        <b>MARS</b>
        <small>GEMINI · NOT IN RETROGRADE</small>
      </div>
      <span className="visual-label">INFORMATION IN ORBIT</span>
    </div>
  )
}

const navigationItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#lab", label: "Lab" },
  { href: "#writing", label: "Writing" },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }

    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header id="top">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Shae Kitchen, home">
            SK<span>●</span>
          </a>
          <div className="nav-links">
            {navigationItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <button
            ref={menuButtonRef}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span>Menu</span>
            <i aria-hidden="true" />
          </button>
          <a
            aria-label="Contact Shae Kitchen in Austin, Texas"
            className="status"
            href="#contact"
            onClick={closeMenu}
          >
            <i aria-hidden="true" />
            <span>
              Contact<span className="status-location"> · Austin, TX</span>
            </span>
          </a>
          <div className="mobile-nav" hidden={!menuOpen} id="mobile-navigation">
            {navigationItems.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero shell">
          <h1>
            Creative thinking,
            <br />
            <span className="fg-inline-italic">technical&nbsp;</span>execution.
          </h1>
          <div className="hero-bottom">
            <p>
              I’m Shae — a design engineer adapting creative practice for the AI
              era through products, systems, and expressive technology.
            </p>
            <a
              className="circle-link"
              href="#work"
              aria-label="See selected work"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M12 5v14M6.5 13.5 12 19l5.5-5.5" />
              </svg>
            </a>
          </div>
          <div className="hero-index" aria-hidden="true">
            CREATIVE × TECHNICAL
          </div>
        </section>

        <section
          aria-labelledby="about-heading"
          className="about shell"
          id="about"
        >
          <div className="section-heading light">
            <h2 id="about-heading">ABOUT</h2>
            <span>A NEW TYPE OF DESIGNER</span>
          </div>
          <div className="about-grid">
            <p className="about-lead">
              Creative curiosity meets technical rigor.{" "}
              <em>That overlap is where I work.</em>
            </p>
            <div className="about-copy">
              <p>
                I pursued a master’s degree to expand my technical practice for
                the AI era. The work supports a longer-term goal: helping
                students rediscover curiosity and solve meaningful problems
                through creative technology.
              </p>
              <ul>
                <li>
                  <span>01</span>
                  <details>
                    <summary>
                      <strong>Product & interface design</strong>
                    </summary>
                    <p>
                      I turn complex needs into focused digital experiences that
                      feel clear, useful, and human.
                    </p>
                  </details>
                </li>
                <li>
                  <span>02</span>
                  <details>
                    <summary>
                      <strong>Design systems & frontend</strong>
                    </summary>
                    <p>
                      I build reusable foundations that keep design intent
                      intact from first component to working interface.
                    </p>
                  </details>
                </li>
                <li>
                  <span>03</span>
                  <details>
                    <summary>
                      <strong>Creative coding, 3D & motion</strong>
                    </summary>
                    <p>
                      I use code as a creative material to make ideas move,
                      respond, and become memorable.
                    </p>
                  </details>
                </li>
                <li>
                  <span>04</span>
                  <details>
                    <summary>
                      <strong>AI-assisted workflows</strong>
                    </summary>
                    <p>
                      I shape AI into a practical collaborator for faster
                      exploration without surrendering judgment or craft.
                    </p>
                  </details>
                </li>
                <li>
                  <span>05</span>
                  <details>
                    <summary>
                      <strong>Writing & content strategy</strong>
                    </summary>
                    <p>
                      I bring structure and voice to technical ideas so they can
                      connect with the people they are meant to reach.
                    </p>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="work-heading"
          className="work shell"
          id="work"
        >
          <div className="section-heading">
            <h2 id="work-heading">SELECTED WORK</h2>
            <span>END-TO-END PROJECTS</span>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <ProjectVisual type={project.visual} />
                <div className="project-info">
                  <div className="project-title">
                    <span>{project.number}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-copy">
                    <span>{project.type}</span>
                    <p>{project.summary}</p>
                  </div>
                  <span className="project-state">{project.note}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="process-heading"
          className="process shell"
          id="process"
        >
          <div className="section-heading">
            <h2 id="process-heading">PROCESS & AI</h2>
            <span>JUDGMENT BEFORE TOOLS</span>
          </div>
          <div className="process-intro">
            <h2 className="display-heading">
              Systems first.
              <br />
              <em>Tools in service of ideas.</em>
            </h2>
            <p>
              I use AI to extend existing systems, create and modify interfaces,
              and shorten repetitive production work—leaving more time for
              interaction, architecture, and refinement.
            </p>
          </div>
          <div className="workflow-list">
            {workflows.map((workflow) => (
              <article className="workflow" key={workflow.tool}>
                <span>{workflow.number}</span>
                <div>
                  <small>{workflow.purpose}</small>
                  <h3>{workflow.tool}</h3>
                </div>
                <p>{workflow.copy}</p>
                <strong>{workflow.outcome}</strong>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="lab-heading" className="lab shell" id="lab">
          <div className="section-heading light">
            <h2 id="lab-heading">CREATIVE LAB</h2>
            <span>CODE · MOTION · 3D</span>
          </div>
          <div className="lab-intro">
            <h2 className="display-heading">
              Experiments make the practice expand.
            </h2>
            <p>
              A working collection of generative studies, real-time graphics,
              and motion explorations. Selected interactive pieces will link to
              OpenProcessing as they are published.
            </p>
          </div>
          <div className="lab-grid">
            {labItems.map((item) => (
              <article className="lab-card" key={item.title}>
                <div
                  aria-hidden="true"
                  className={`lab-mark mark-${item.number}`}
                >
                  <span>{item.number}</span>
                  <i />
                  <i />
                  <i />
                </div>
                <small>{item.meta}</small>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="writing-heading"
          className="writing shell"
          id="writing"
        >
          <div className="section-heading">
            <h2 id="writing-heading">WRITING & CONTENT</h2>
            <span>STRATEGY · PRODUCTION</span>
          </div>
          <div className="writing-grid">
            <div className="writing-lead">
              <span>ANOTHER PART OF THE PRACTICE</span>
              <p className="display-heading">
                Clear systems need clear language.
              </p>
            </div>
            <div className="writing-copy">
              <p>
                My background includes technical writing, digital marketing,
                intent and keyword strategy, cross-platform scheduling, and
                content systems that help brands stay useful and distinct.
              </p>
              <ul>
                <li>
                  <span>01</span>
                  <b>Blog posts</b>
                  <small>LINKED EDITORIAL WORK</small>
                </li>
                <li>
                  <span>02</span>
                  <b>Video walkthroughs</b>
                  <small>PLANNING & PRODUCTION</small>
                </li>
                <li>
                  <span>03</span>
                  <b>Template systems</b>
                  <small>REUSABLE CONTENT DESIGN</small>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer shell" id="contact">
        <div>
          <span>HAVE A GOOD PROBLEM?</span>
          <h2>Let’s make it real.</h2>
          <a className="connect-link" href="mailto:shaekitchen1@gmail.com">
            Connect
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </div>
        <div className="socials" aria-label="Social profiles">
          <a
            aria-label="LinkedIn profile (opens in a new tab)"
            className="social-icon"
            href="https://www.linkedin.com/in/shae-kitchen/"
            rel="noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a5 5 0 0 1 2-3ZM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            aria-label="GitHub profile (opens in a new tab)"
            className="social-icon"
            href="https://github.com/Shae-Kitchen"
            rel="noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M15 22v-3.9c.04-1-.35-1.96-1.1-2.6 3.6-.4 7.4-1.77 7.4-8a6.24 6.24 0 0 0-1.67-4.34A5.8 5.8 0 0 0 19.47.7S18.16.28 15 2.36a15 15 0 0 0-6 0C5.84.28 4.53.7 4.53.7a5.8 5.8 0 0 0-.16 2.46A6.24 6.24 0 0 0 2.7 7.5c0 6.22 3.8 7.6 7.4 8-.74.63-1.13 1.58-1.1 2.58V22" />
              <path d="M9 19c-3 .92-3-1.5-4.2-2" />
            </svg>
          </a>
          <a
            aria-label="OpenProcessing profile (opens in a new tab)"
            className="social-icon"
            href="https://openprocessing.org/@u466276#activity"
            rel="noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <circle cx="8.5" cy="12" r="5" />
              <path d="M14 18V6h3.1a3.4 3.4 0 0 1 0 6.8H14" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  )
}
