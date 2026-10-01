import { useEffect, useState } from "react";
import CommandCenterHome from "./CommandCenterHome";
import IdentityCore from "./modules/IdentityCore";
import Projects from "./Projects";
import TechCore from "./TechCore";
import Experience from "./Experience";
import AiLab from "./AiLab";
import FutureBuilds from "./FutureBuilds";

const MODULE_COMPONENTS = {
  "01": IdentityCore, "02": Projects, "03": TechCore,
  "04": Experience, "05": AiLab, "06": FutureBuilds,
};

export default function CommandCenter() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [active]);

  const ActiveModule = active ? MODULE_COMPONENTS[active] : null;

  return (
    <div className="command-shell">
      <div className={active ? "command-view-hidden" : "command-view-active"}>
        <CommandCenterHome onOpen={setActive} />
      </div>
      {ActiveModule && (
        <div className="module-view-active">
          <ActiveModule onBack={() => setActive(null)} />
        </div>
      )}
    </div>
  );
}