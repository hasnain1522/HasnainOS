import { useEffect, useState } from "react";
import { HACKATHONS, PROJECTS } from "../data/projectData";
import "./Projects.css";

function ProjectRecord({ item, index, onSelect }) {
  return (
    <button
      className="project-record"
      style={{ "--delay": `${index * 100}ms` }}
      onClick={() => onSelect(item.id)}
    >
      <span className="record-number">[{item.id}]</span>
      <span className="record-main">
        <span className="record-type">{item.type || item.event}</span>
        <strong>{item.name}</strong>
        <span>{item.summary}</span>
      </span>
      <span className="record-status"><i />{item.status}</span>
      <span className="record-arrow">↗</span>
    </button>
  );
}

function Projects({ onBack }) {
  const [selected, setSelected] = useState(null);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = window.setTimeout(() => setBooted(true), 180);
    return () => window.clearTimeout(timer);
  }, []);

  const allRecords = [...PROJECTS, ...HACKATHONS];
  const record = allRecords.find((item) => item.id === selected);

  if (record) {
    return (
      <main className="projects-interface project-detail-view">
        <header className="projects-header">
          <button className="projects-back" onClick={() => setSelected(null)}>
            ← DATABASE
          </button>
          <span>PROJECT DATABASE / {record.id}</span>
          <span className="projects-online">● ONLINE</span>
        </header>

        <section className="project-detail">
          <div className="project-detail-kicker">
            {record.classification || record.event} / {record.type || "HACKATHON BUILD"}
          </div>

          <div className="project-detail-title-row">
            <span className="project-index">[{record.id}]</span>
            <h1>{record.name}</h1>
          </div>

          <p className="project-detail-description">{record.description}</p>

          <div className="project-detail-grid">
            <div>
              <span className="hud-label">SYSTEM SUMMARY</span>
              <p>{record.summary}</p>
            </div>
            <div>
              <span className="hud-label">STATUS</span>
              <strong>{record.status}</strong>
            </div>
            <div>
              <span className="hud-label">TECH CORE</span>
              <div className="tech-list">
                {record.stack.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>
          </div>

          <section className="project-evolution">
            <div className="hud-label">BUILD EVOLUTION / WHAT CAME NEXT</div>
            <div className="evolution-line">
              {record.evolution.map((step, index) => (
                <article key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step.replace(/^\d+\s—\s/, "")}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="project-links">
            <a href={record.repository} target="_blank" rel="noreferrer">
              OPEN REPOSITORY ↗
            </a>
            {record.snapshot && (
              <a href={record.snapshot} target="_blank" rel="noreferrer">
                OPEN SNAPSHOT ↗
              </a>
            )}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="projects-interface">
      <div className="project-scanline" />

      <header className="projects-header">
        <button className="projects-back" onClick={onBack}>
          ← COMMAND CENTER
        </button>
        <span>HASNAIN.OS / PROJECT DATABASE</span>
        <span className="projects-online">● DATABASE ONLINE</span>
      </header>

      <section className={`projects-hero ${booted ? "booted" : ""}`}>
        <div className="database-code">SYS://PROJECT_INDEX/ACCESS_GRANTED</div>
        <h1>PROJECT<br /><span>DATABASE</span></h1>
        <div className="database-telemetry">
          <span>PROJECT BUILDS <b>{String(PROJECTS.length).padStart(2, "0")}</b></span>
          <span>HACKATHON BUILDS <b>{String(HACKATHONS.length).padStart(2, "0")}</b></span>
          <span>MODE <b>LIVE</b></span>
        </div>
      </section>

      <section className={`project-list ${booted ? "booted" : ""}`}>
        <div className="database-section-label">
          <span>01 / PROJECTS</span>
          <span>CHRONOLOGICAL BUILD LINE</span>
        </div>

        {PROJECTS.map((item, index) => (
          <ProjectRecord
            key={item.id}
            item={item}
            index={index}
            onSelect={setSelected}
          />
        ))}

        <div className="database-section-label hackathon-label">
          <span>02 / HACKATHON BUILDS</span>
          <span>PROJECTS BUILT UNDER COMPETITION</span>
        </div>

        {HACKATHONS.map((item, index) => (
          <ProjectRecord
            key={item.id}
            item={item}
            index={PROJECTS.length + index}
            onSelect={setSelected}
          />
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
