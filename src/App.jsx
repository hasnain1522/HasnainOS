import { useState } from "react";
import BootScreen from "./components/BootScreen";
import CommandCenter from "./components/CommandCenter";

const ENTRY_KEY = "hasnainos-entered";

function App() {
  const [entered, setEntered] = useState(
    () => sessionStorage.getItem(ENTRY_KEY) === "1"
  );

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