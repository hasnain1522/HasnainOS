import { useState } from "react";
import BootScreen from "./components/BootScreen";
import CommandCenter from "./components/CommandCenter";

function App() {
  const [entered, setEntered] = useState(false);

  return entered ? (
    <CommandCenter />
  ) : (
    <BootScreen onEnter={() => setEntered(true)} />
  );
}

export default App;