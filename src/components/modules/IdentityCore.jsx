import { useEffect } from "react";
import { SYSTEM_IDENTITY } from "../../data/systemData";

const FOCUS_AREAS = [
  "AI / ML",
  "Web Development",
  "Agentic AI",
  "E-Commerce",
  "Software Development",
  "Git & Git HUb",
];

const PERSONAL_INFO = {
  Age: ": 18",
  DOB: ": 22 MARCH",
  Traits: ": CURIOUS • CREATIVE • PROBLEM SOLVER",
};

const HOBBIES = [
  "Learning From My Mistakes",
  "Reading",
  "Playing Cricket,FootBall,Billiards",
  "Exploring New Technologies",
];

const EDUCATION = [
  {
    year: "2023",
    level: "CLASS 10",
    institution: "SCHOLARS MODEL HIGH SCHOOL",
    result: "GPA: 7.8 / 10",
  },
  {
    year: "2025",
    level: "INTERMEDIATE / CLASS 12",
    institution: "SUCCESS JUNIOR COLLEGE",
    result: "PERCENTAGE: 75%",
  },
  {
    year: "2025 — PRESENT",
    level: "B.TECH CSE — AI & ML",
    institution: "SHADAN COLLEGE OF ENGINEERING",
  },
];

const TIMELINE = [
  {
    year: "2023",
    title: "FOUNDATION",
    description:
      "Completed secondary education and began building a foundation for technical learning.",
  },
  {
    year: "2025",
    title: "CSE / AI & ML",
    description:
      "Started B.Tech CSE with Artificial Intelligence & Machine Learning specialization.",
  },
  {
    year: "2025",
    title: "NEXUS CODING CLUB",
    description:
      "Joined the technical community and began exploring programming, Git, Python, Team Work and AI technologies.",
  },
  {
    year: "2026",
    title: "BUILD PHASE",
    description:
      "Focused on building practical projects while exploring AI, web development and E-Commerce.",
  },
];

function IdentityCore({ onBack }) {
    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="identity-core">

      <header className="identity-header">
        <button
          className="back-button"
          onClick={onBack}
        >
          ← COMMAND CENTER
        </button>

        <div className="identity-system-status">
          IDENTITY CORE / ONLINE
        </div>
      </header>


      <section className="identity-hero">

  <span className="identity-index">
    01 / IDENTITY CORE
  </span>

  <div className="identity-hero-content">

    <div className="identity-hero-info">

      <h1>
        {SYSTEM_IDENTITY.owner}
      </h1>

      <p className="identity-role">
        {SYSTEM_IDENTITY.role}
      </p>

      <div className="identity-personal-info">

        <div>
          <span>AGE</span>
          <strong>{PERSONAL_INFO.Age}</strong>
        </div>

        <div>
          <span>DOB</span>
          <strong>{PERSONAL_INFO.DOB}</strong>
        </div>

        <div>
          <span>TRAITS</span>
          <strong>{PERSONAL_INFO.Traits}</strong>
        </div>

      </div>

    </div>

    <div className="identity-hero-photo">
      <img
        src="/profile.jpeg"
        alt="Mohammed Hasnain"
        style={{ borderRadius: '10px' }}
      />
    </div>

  </div>

  <p className="identity-intro">
    A B.Tech CSE (Artificial Intelligence & Machine Learning) student,
    learning, experimenting, and building practical projects.
  </p>

</section>


      <section className="identity-grid">

        <article className="identity-card identity-profile">

          <span className="card-label">
            PROFILE
          </span>

          <h2>
            Building the skillset.
            <br />
            Building the systems.
          </h2>

          <p>
            Currently pursuing B.Tech in Computer Science
            Engineering with Artificial Intelligence &
            Machine Learning, while developing practical
            experience through projects, experimentation and
            real-world exposure.
          </p>

        </article>


        <article className="identity-card">

          <span className="card-label">
            EDUCATION
          </span>

          <h2>
            B.Tech CSE
          </h2>

          <p>
            Artificial Intelligence & Machine Learning
          </p>

          <span className="card-meta">
            SHADAN COLLEGE OF ENGINEERING
          </span>

        </article>


        <article className="identity-card">

          <span className="card-label">
            CURRENT MODE
          </span>

          <h2>
            LEARNING
          </h2>

          <p>
            Learn → Build → Experiment → Improve
          </p>

        </article>

      </section>


      <section className="focus-section">

        <div className="section-label">
          TECHNICAL FOCUS
        </div>

        <div className="focus-grid">

          {FOCUS_AREAS.map((area) => (
            <div
              className="focus-item"
              key={area}
            >
              {area}
            </div>
          ))}

        </div>

      </section>


      <section className="timeline-section">

        <div className="section-label">
          DEVELOPMENT TIMELINE
        </div>

        <div className="timeline">

          {TIMELINE.map((item) => (
            <article
              className="timeline-item"
              key={`${item.year}-${item.title}`}
            >

              <div className="timeline-year">
                {item.year}
              </div>

              <div className="timeline-marker" />

              <div className="timeline-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </section>

<section className="education-section">

  <div className="section-label">
    EDUCATION TIMELINE
  </div>

  <div className="education-timeline">

    {EDUCATION.map((item) => (
      <article
        className="education-item"
        key={`${item.year}-${item.level}`}
      >

        <div className="education-year">
          {item.year}
        </div>

        <div className="education-marker" />

        <div className="education-content">

          <span className="education-level">
            {item.level}
          </span>

          <h3>
            {item.institution}
          </h3>

          <p>
            {item.result}
          </p>

        </div>

      </article>
    ))}

  </div>

</section>

<section className="hobbies-section">

  <div className="section-label">
    HOBBIES & INTERESTS
  </div>

  <div className="hobbies-grid">

    {HOBBIES.map((hobby) => (
      <div
        className="hobby-item"
        key={hobby}
      >
        {hobby}
      </div>
    ))}

  </div>

</section>

      <footer className="identity-footer">

        <span>
          HASNAIN.OS / IDENTITY CORE
        </span>

        <button
          className="back-button"
          onClick={onBack}
        >
          RETURN TO COMMAND CENTER
        </button>

      </footer>

    </main>
  );
}

export default IdentityCore;