import { useEffect, useState } from "react";
import { PROJECTS } from "../data/projectData";
import "./Projects.css";

function Projects({ onBack }) {
  const [selected, setSelected] = useState(null);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = window.setTimeout(() => setBooted(true), 180);
    return () => window.clearTimeout(timer);
  }, []);

  const project = PROJECTS.find((item) => item.id === selected);

  if (project) {
    return (
      <main className="projects-interface project-detail-view">
        <header className="projects-header">
          <button className="projects-back" onClick={() => setSelected(null)}>← DATABASE</button>
          <span>PROJECT DATABASE / {project.id}</span>
          <span className="projects-online">● ONLINE</span>
        </header>

        <section className="project-detail">
          <div className="project-detail-kicker">{project.classification} / {project.type}</div>
          <div className="project-detail-title-row">
            <span className="project-index">[{project.id}]</span>
            <h1>{project.name}</h1>
          </div>
          <p className="project-detail-description">{project.description}</p>

          <div className="project-detail-grid">
            <div>
              <span className="hud-label">SYSTEM SUMMARY</span>
              <p>{project.summary}</p>
            </div>
            <div>
              <span className="hud-label">STATUS</span>
              <strong>{project.status}</strong>
            </div>
            <div>
              <span className="hud-label">TECH CORE</span>
              <div className="tech-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </div>
          </div>

          <div className="project-links">
            <a href={project.repository} target="_blank" rel="noreferrer">OPEN REPOSITORY ↗</a>
            {project.snapshot && <a href={project.snapshot} target="_blank" rel="noreferrer">OPEN SNAPSHOT ↗</a>}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="projects-interface">
      <div className="project-scanline" />
      <header className="projects-header">
        <button className="projects-back" onClick={onBack}>← COMMAND CENTER</button>
        <span>HASNAIN.OS / PROJECT DATABASE</span>
        <span className="projects-online">● DATABASE ONLINE</span>
      </header>

      <section className={`projects-hero ${booted ? "booted" : ""}`}>
        <div className="database-code">SYS://PROJECT_INDEX/ACCESS_GRANTED</div>
        <h1>PROJECT<br /><span>DATABASE</span></h1>
        <div className="database-telemetry">
          <span>REPOSITORIES INDEXED <b>03</b></span>
          <span>ACTIVE RECORD <b>01</b></span>
          <span>MODE <b>LIVE</b></span>
        </div>
      </section>

      <section className={`project-list ${booted ? "booted" : ""}`}>
        {PROJECTS.map((item, index) => (
          <button
            key={item.id}
            className="project-record"
            style={{ "--delay": `${index * 120}ms` }}
            onClick={() => setSelected(item.id)}
          >
            <span className="record-number">[{item.id}]</span>
            <span className="record-main">
              <span className="record-type">{item.type}</span>
              <strong>{item.name}</strong>
              <span>{item.summary}</span>
            </span>
            <span className="record-status"><i />{item.status}</span>
            <span className="record-arrow">↗</span>
          </button>
        ))}
      </section>

      <footer className="projects-footer">
        <span>HASNAIN.OS // PROJECT DATABASE</span>
        <span>SELECT RECORD TO INITIALIZE DETAIL VIEW</span>
      </footer>
    </main>
  );
}

export default Projects;
