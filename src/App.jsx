import { useState } from "react";
import BootScreen from "./components/BootScreen";
import CommandCenter from "./components/CommandCenter";
import ErrorBoundary from "./components/ErrorBoundary";

const ENTRY_KEY = "hasnainos-entered";
function shouldResumeSystem(){try{const navigation=performance.getEntriesByType?.("navigation")?.[0];return navigation?.type==="reload"&&sessionStorage.getItem(ENTRY_KEY)==="1";}catch{return false;}}

export default function App(){
  const [entered,setEntered]=useState(shouldResumeSystem);
  const enterSystem=()=>{sessionStorage.setItem(ENTRY_KEY,"1");setEntered(true);};
  return <ErrorBoundary>{entered?<CommandCenter/>:<BootScreen onEnter={enterSystem}/>}</ErrorBoundary>;
}