const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
  </svg>
)

const projects = [
  { number: "01", title: "Kinetic", type: "AI PRODUCT · 2025", summary: "Designing a calmer way to turn complex research into clear decisions.", visual: "kinetic" },
  { number: "02", title: "Tactile", type: "DESIGN SYSTEM · 2024", summary: "A flexible system that made a fast-moving product team feel coherent.", visual: "tactile" },
  { number: "03", title: "Relay", type: "DEVELOPER TOOL · 2024", summary: "Rethinking how engineering teams monitor the systems they depend on.", visual: "relay" },
]

function ProjectVisual({ type }: { type: string }) {
  if (type === "kinetic") return (
    <div className="visual visual-kinetic" aria-hidden="true">
      <div className="window">
        <div className="window-top"><i /><i /><i /><span>WORKSPACE / SYNTHESIS</span></div>
        <div className="kinetic-body">
          <div className="side-rail"><b>K</b><i /><i /><i /></div>
          <div className="doc"><small>PROJECT BRIEF</small><strong>What should we build next?</strong><p>Signals gathered from 42 customer conversations</p><div className="doc-line wide" /><div className="doc-line" /><div className="note">12 sources linked <span>↗</span></div></div>
          <div className="score"><span>CONFIDENCE</span><b>87%</b><i /></div>
        </div>
      </div>
      <span className="visual-label">FROM NOISE TO SIGNAL</span>
    </div>
  )

  if (type === "tactile") return (
    <div className="visual visual-tactile" aria-hidden="true">
      <div className="component-card main-component"><span>Button / Primary</span><button>Continue <ArrowUpRight size={14} /></button></div>
      <div className="component-card token-card"><span>COLOR / BLUE 600</span><b>#2E49D7</b></div>
      <div className="component-card radius-card"><span>RADIUS</span><div><i /><i /><i /></div></div>
      <div className="measure m-one">16</div><div className="measure m-two">24</div>
      <span className="visual-label">SYSTEMS THAT STAY HUMAN</span>
    </div>
  )

  return (
    <div className="visual visual-relay" aria-hidden="true">
      <div className="terminal">
        <div className="terminal-head"><i /><i /><i /><span>relay / production</span><b>LIVE</b></div>
        <div className="terminal-grid">
          <div className="metric"><span>UPTIME</span><b>99.98%</b><small>+0.12% this week</small></div>
          <div className="chart"><svg viewBox="0 0 400 120" preserveAspectRatio="none"><path d="M0 92 C35 89, 52 52, 90 61 S144 97, 176 70 S215 40, 248 60 S295 99, 328 46 S370 33, 400 20" /></svg></div>
          <div className="event"><i /><span><b>API gateway</b><small>Recovered in 42s</small></span><em>10:42:08</em></div>
          <div className="event"><i /><span><b>Workers</b><small>All regions healthy</small></span><em>10:41:12</em></div>
        </div>
      </div>
      <span className="visual-label">CLARITY UNDER PRESSURE</span>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Avery Park, home">AP<span>●</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="mailto:hello@averypark.design">Contact</a></div>
        <a className="status" href="mailto:hello@averypark.design"><i /> Available for select projects</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span>DESIGN ENGINEER</span><span>BASED IN BROOKLYN, NY</span></div>
        <h1>I design the<br />space between <em>idea</em><br />and <em>interface.</em></h1>
        <div className="hero-bottom">
          <p>I’m Avery — a designer who codes. I turn ambiguous problems into thoughtful, working products.</p>
          <a className="circle-link" href="#work" aria-label="See selected work"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 5v14M6.5 13.5 12 19l5.5-5.5" /></svg></a>
        </div>
        <div className="hero-index" aria-hidden="true">01—03</div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading"><span>SELECTED WORK</span><span>2024—2025</span></div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <ProjectVisual type={project.visual} />
              <div className="project-info">
                <div className="project-title"><span>{project.number}</span><h2>{project.title}</h2></div>
                <div className="project-copy"><span>{project.type}</span><p>{project.summary}</p></div>
                <button className="project-link" aria-label={`View ${project.title} case study`}><ArrowUpRight /></button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="section-heading light"><span>HOW I WORK</span><span>DESIGN × ENGINEERING</span></div>
        <div className="about-grid">
          <p className="about-lead">The best digital products aren’t passed from design to engineering. <em>They’re shaped together.</em></p>
          <div className="about-copy"><p>I work across product strategy, interface design, and frontend development — moving fluidly from a rough sketch to production-ready code.</p><ul><li><span>01</span>Product & interaction design</li><li><span>02</span>Prototyping & motion</li><li><span>03</span>Design systems & frontend</li></ul></div>
        </div>
        <footer>
          <div><span>HAVE A GOOD PROBLEM?</span><a href="mailto:hello@averypark.design">Let’s make it real.<ArrowUpRight size={30} /></a></div>
          <div className="socials"><a href="#linkedin">LinkedIn</a><a href="#github">GitHub</a><a href="#readcv">Read.cv</a></div>
          <span className="copyright">© 2025 AVERY PARK</span>
        </footer>
      </section>
    </main>
  )
}
