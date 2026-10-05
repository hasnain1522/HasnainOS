import { useEffect, useRef, useState } from "react";
import BootModule from "./BootModule";
import { audioEngine } from "../audio/AudioEngine";
import { BOOT_MODULES, BOOT_TIMING } from "../data/bootData";
import { SYSTEM_IDENTITY } from "../data/systemIdentity";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function BootScreen({ onEnter }) {
  const readyMessageRef = useRef(null);
  const cancelledRef = useRef(false);
  const startedRef = useRef(false);

  const [started, setStarted] = useState(false);
  const [moduleProgress, setModuleProgress] = useState(BOOT_MODULES.map(() => 0));
  const [completedModules, setCompletedModules] = useState([]);
  const [currentModule, setCurrentModule] = useState(-1);
  const [systemReady, setSystemReady] = useState(false);
  const [showIdentity, setShowIdentity] = useState(false);

  useEffect(() => {
    return () => {
      cancelledRef.current = true;
      audioEngine.stop();
    };
  }, []);

  const startSystem = () => {
    if (startedRef.current) return;

    // This click is the explicit browser gesture that unlocks audio.
    startedRef.current = true;
    audioEngine.unlock();
    setStarted(true);

    const boot = async () => {
      await audioEngine.playAndWait("/sounds/voice/initializing-system.mp3");
      await wait(350);
      if (cancelledRef.current) return;

      for (let index = 0; index < BOOT_MODULES.length; index++) {
        if (cancelledRef.current) return;

        setCurrentModule(index);
        const startTime = performance.now();

        await new Promise((resolve) => {
          const animate = (now) => {
            if (cancelledRef.current) return resolve();

            const progress = Math.min(
              100,
              Math.round(((now - startTime) / BOOT_TIMING.moduleLoad) * 100)
            );

            setModuleProgress((previous) => {
              const next = [...previous];
              next[index] = progress;
              return next;
            });

            if (progress < 100) {
              requestAnimationFrame(animate);
            } else {
              resolve();
            }
          };

          requestAnimationFrame(animate);
        });

        if (cancelledRef.current) return;

        setCompletedModules((previous) => [...previous, index]);
        await audioEngine.playAndWait(BOOT_MODULES[index].voice);
        await wait(BOOT_TIMING.moduleGap);
      }

      setCurrentModule(-1);
      if (cancelledRef.current) return;

      readyMessageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      await wait(700);
      if (cancelledRef.current) return;

      setSystemReady(true);
      await audioEngine.playAndWait("/sounds/voice/system-ready.mp3");
      await wait(700);
      if (cancelledRef.current) return;

      setShowIdentity(true);
      await audioEngine.playAndWait(
        "/sounds/voice/welcome-to-hasnain's portfolio.mp3"
      );
    };

    boot();
  };

  return (
    <main className="boot-screen">
      <section className="boot-panel">
        <header className="boot-header">
          <div className="boot-title">{SYSTEM_IDENTITY.name}</div>
          <div className="boot-subtitle">
            {started ? "SYSTEM INITIALIZATION" : "SYSTEM STANDBY"}
          </div>
        </header>

        {!started ? (
          <section className="system-start">
            <div className="start-scan">
              <span className="start-scan-line" />
              <span className="start-core" />
            </div>

            <p className="start-description">
              System is standing by. Initialize to begin the portfolio
              experience.
            </p>

            <button
              type="button"
              className="start-button"
              onClick={startSystem}
            >
              <span>START SYSTEM</span>
              <span className="start-button-arrow">→</span>
            </button>

            <div className="start-hint">TAP / CLICK TO INITIALIZE</div>
          </section>
        ) : (
          <>
            <section className="boot-modules">
              {BOOT_MODULES.map((module, index) => (
                <BootModule
                  key={module.name}
                  module={module}
                  progress={moduleProgress[index]}
                  completed={completedModules.includes(index)}
                  active={currentModule === index}
                />
              ))}
            </section>

            <section
              ref={readyMessageRef}
              className={`ready-message ${systemReady ? "visible" : ""}`}
            >
              <div className="system-status">
                <span className="status-dot" />
                SYSTEM READY
              </div>

              {showIdentity && (
                <div className="boot-identity">
                  <h1>{SYSTEM_IDENTITY.owner}</h1>
                  <p>{SYSTEM_IDENTITY.role}</p>
                  <button
                    type="button"
                    className="enter-button"
                    onClick={onEnter}
                  >
                    ENTER SYSTEM
                  </button>
                </div>
              )}
            </section>
          </>
        )}

        <footer className="system-version">
          {SYSTEM_IDENTITY.name} {SYSTEM_IDENTITY.version}
        </footer>
      </section>
    </main>
  );
}
