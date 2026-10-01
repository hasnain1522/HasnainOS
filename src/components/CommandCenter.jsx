import { useEffect, useState } from "react";
import IdentityCore from "./modules/IdentityCore";
import Projects from "./Projects";
import { SYSTEM_IDENTITY } from "../data/systemData";

const MODULES = [
  { id: "01", name: "IDENTITY", description: "Who I am, what I am learning and what I am building." },
  { id: "02", name: "PROJECTS", description: "Real projects, experiments and systems under development." },
  { id: "03", name: "TECH CORE", description: "Technologies, tools and technical areas I work with." },
  { id: "04", name: "EXPERIENCE", description: "Real-world work, collaboration and practical exposure." },
  { id: "05", name: "AI LAB", description: "AI, automation and experimental systems." },
  { id: "06", name: "FUTURE BUILDS", description: "Ideas and systems currently on the roadmap." },
];

function CommandCenter() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [activeModule, setActiveModule] = useState(null);

  if (activeModule === "01") {
    return <IdentityCore onBack={() => setActiveModule(null)} />;
  }

  if (activeModule === "02") {
    return <Projects onBack={() => setActiveModule(null)} />;
  }

  return (
    <main className="command-center">
      <header className="command-header">
        <div className="system-brand">
          <span className="system-name">{SYSTEM_IDENTITY.name}</span>
          <span className="system-version">{SYSTEM_IDENTITY.version}</span>
        </div>
        <div className="system-state">
          <span className="online-dot" />
          SYSTEM ONLINE
        </div>
      </header>

      <section className="command-hero">
        <div className="hero-index">COMMAND CENTER / 00</div>
        <div className="command-hero-content">
          <div>
            <h1>{SYSTEM_IDENTITY.owner}</h1>
            <p className="hero-role">{SYSTEM_IDENTITY.role}</p>
            <p className="hero-description">
              A CSE AI/ML student exploring AI, web development and emerging technologies through learning,
              experimentation and hands-on projects.
            </p>
          </div>
          <div className="command-hero-photo">
            <img src="/profile.jpeg" alt="Mohammed Hasnain" />
          </div>
        </div>
      </section>

      <section className="module-section">
        <div className="section-heading">
          <span>AVAILABLE MODULES</span>
          <span>SELECT TO EXPLORE</span>
        </div>

        <div className="module-grid">
          {MODULES.map((module) => (
            <button
              key={module.id}
              className={`command-module ${activeModule === module.id ? "selected" : ""}`}
              onClick={() => setActiveModule(module.id)}
            >
              <span className="module-number">{module.id}</span>
              <span className="module-name">{module.name}</span>
              <span className="module-description">{module.description}</span>
              <span className="module-arrow">→</span>
            </button>
          ))}
        </div>
      </section>

      <footer className="command-footer">
        <span>HASNAIN.OS / COMMAND CENTER</span>
        <span>{activeModule ? `MODULE ${activeModule} SELECTED` : "AWAITING COMMAND"}</span>
      </footer>
    </main>
  );
}

export default CommandCenter;
