import { useEffect, useState } from "react";
import IdentityCore from "./modules/IdentityCore";
import Projects from "./Projects";
import TechCore from "./TechCore";
import Experience from "./Experience";
import AiLab from "./AiLab";
import FutureBuilds from "./FutureBuilds";
import { SYSTEM_IDENTITY } from "../data/systemData";

const MODULES = [
  ["01", "IDENTITY", "Who I am, what I am learning and what I am building."],
  ["02", "PROJECTS", "Real builds, experiments and hackathon systems."],
  ["03", "TECH CORE", "Technologies, tools and technical areas I work with."],
  ["04", "EXPERIENCE", "Education, practical exposure and real-world building."],
  ["05", "AI LAB", "AI, automation and experimental systems."],
  ["06", "FUTURE BUILDS", "Ideas and systems currently on the roadmap."],
];

function resetViewport() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);
}

function CommandCenterHome({ onOpen }) {
  return (
    <main className="command-center">
      <div className="hud-corner hud-corner-tl" />
      <div className="hud-corner hud-corner-tr" />
      <div className="hud-corner hud-corner-bl" />
      <div className="hud-corner hud-corner-br" />

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
        <div className="hero-index">
          <span>COMMAND CENTER / 00</span>
          <span className="hero-signal">ARC SIGNAL // STABLE</span>
        </div>

        <div className="command-hero-content">
          <div>
            <div className="hero-eyebrow">PERSONAL OPERATING SYSTEM</div>
            <h1>{SYSTEM_IDENTITY.owner}</h1>
            <p className="hero-role">{SYSTEM_IDENTITY.role}</p>
            <p className="hero-description">
              A CSE AI/ML student learning, experimenting and building practical
              systems across AI, web development and software engineering.
            </p>
          </div>

          <div className="command-hero-photo-wrap">
            <div className="arc-ring arc-ring-one" />
            <div className="arc-ring arc-ring-two" />
            <div className="command-hero-photo">
              <img src="/profile.jpeg" alt="Mohammed Hasnain" />
            </div>
            <span className="photo-tag">IDENTITY LOCKED</span>
          </div>
        </div>

        <div className="command-telemetry">
          <div><span>BUILD STATE</span><b>ACTIVE</b></div>
          <div><span>PROJECTS</span><b>03</b></div>
          <div><span>HACKATHONS</span><b>03</b></div>
          <div><span>AI TRACK</span><b>ONLINE</b></div>
        </div>
      </section>

      <section className="module-section">
        <div className="section-heading">
          <span>AVAILABLE MODULES</span>
          <span>SELECT TO EXPLORE</span>
        </div>

        <div className="module-grid">
          {MODULES.map(([id, name, description]) => (
            <button
              key={id}
              type="button"
              className="command-module"
              onClick={() => onOpen(id)}
            >
              <span className="module-number">{id}</span>
              <span className="module-name">{name}</span>
              <span className="module-description">{description}</span>
              <span className="module-arrow">↗</span>
              <span className="module-scan" />
            </button>
          ))}
        </div>
      </section>

      <footer className="command-footer">
        <span>HASNAIN.OS / COMMAND CENTER</span>
        <span>CORE // AWAITING COMMAND</span>
      </footer>
    </main>
  );
}

export default function CommandCenter() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    resetViewport();
  }, [active]);

  const back = () => {
    setActive(null);
    requestAnimationFrame(() => {
      resetViewport();
      requestAnimationFrame(resetViewport);
    });
  };

  if (active === "01") return <IdentityCore onBack={back} />;
  if (active === "02") return <Projects onBack={back} />;
  if (active === "03") return <TechCore onBack={back} />;
  if (active === "04") return <Experience onBack={back} />;
  if (active === "05") return <AiLab onBack={back} />;
  if (active === "06") return <FutureBuilds onBack={back} />;

  return <CommandCenterHome onOpen={setActive} />;
}