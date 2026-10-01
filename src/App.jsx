import { useState } from "react";
import BootScreen from "./components/BootScreen";
import CommandCenter from "./components/CommandCenter";

const ENTRY_KEY = "hasnainos-entered";

function shouldResumeSystem() {
  try {
    const navigation = performance.getEntriesByType?.("navigation")?.[0];
    const isReload = navigation?.type === "reload";
    return isReload && sessionStorage.getItem(ENTRY_KEY) === "1";
  } catch {
    return false;
  }
}

function App() {
  const [entered, setEntered] = useState(shouldResumeSystem);

  const enterSystem = () => {
    sessionStorage.setItem(ENTRY_KEY, "1");
    setEntered(true);
  };

  return entered ? (
    <CommandCenter />
  ) : (
    <BootScreen onEnter={enterSystem} />
  );
}

export default App;