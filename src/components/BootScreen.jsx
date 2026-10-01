import { useEffect, useRef, useState } from "react";
import BootModule from "./BootModule";
import { audioEngine } from "../audio/AudioEngine";
import { BOOT_MODULES, BOOT_TIMING, SYSTEM_IDENTITY } from "../data/systemData";

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function BootScreen({ onEnter }) {
  const readyMessageRef = useRef(null);
  const [moduleProgress, setModuleProgress] = useState(
    BOOT_MODULES.map(() => 0)
  );

  const [completedModules, setCompletedModules] = useState([]);
  const [currentModule, setCurrentModule] = useState(-1);
  const [systemReady, setSystemReady] = useState(false);
  const [showIdentity, setShowIdentity] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const unlockAudio = () => {
      audioEngine.unlock();
    };

    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });

    const boot = async () => {
      await wait(700);

      if (cancelled) return;

      audioEngine.play("/sounds/voice/initializing-system.mp3");

      await wait(1000);

      for (let index = 0; index < BOOT_MODULES.length; index++) {
        if (cancelled) return;

        setCurrentModule(index);

        const startTime = performance.now();

        await new Promise((resolve) => {
          const animate = (now) => {
            if (cancelled) {
              resolve();
              return;
            }

            const elapsed = now - startTime;
            const progress = Math.min(
              100,
              Math.round((elapsed / BOOT_TIMING.moduleLoad) * 100)
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

        if (cancelled) return;

        setCompletedModules((previous) => [...previous, index]);

        await audioEngine.playAndWait(BOOT_MODULES[index].voice);

        await wait(BOOT_TIMING.moduleGap);
      }

      if (cancelled) return;

     setCurrentModule(-1);

if (cancelled) return;

readyMessageRef.current?.scrollIntoView({
  behavior: "smooth",
  block: "center",
});

await wait(700);

if (cancelled) return;

setSystemReady(true);

await audioEngine.playAndWait("/sounds/voice/system-ready.mp3");

await wait(700);

      if (cancelled) return;

      setShowIdentity(true);

      await audioEngine.playAndWait("/sounds/voice/welcome-to-hasnain's portfolio.mp3");
    };

    boot();

    return () => {
      cancelled = true;

      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);

      audioEngine.stop();
    };
  }, []);

  return (
    <main className="boot-screen">
      <section className="boot-panel">

        <header className="boot-header">
          <div className="boot-title">
            {SYSTEM_IDENTITY.name}
          </div>

          <div className="boot-subtitle">
            SYSTEM INITIALIZATION
          </div>
        </header>

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
          className={`ready-message ${
            systemReady ? "visible" : ""
          }`}
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
                className="enter-button"
                onClick={onEnter}
              >
                ENTER SYSTEM
              </button>
            </div>
          )}
        </section>

        <footer className="system-version">
          {SYSTEM_IDENTITY.name} {SYSTEM_IDENTITY.version}
        </footer>

      </section>
    </main>
  );
}

export default BootScreen;