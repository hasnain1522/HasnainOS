import { useEffect } from "react";
import { AI_LAB } from "../../data/aiLabData";
import "../../styles/system-module.css";
import "../../styles/ai-lab.css";

export default function AiLab({ onBack }) {
  useEffect(() => window.scrollTo({ top: 0, behavior: "auto" }), []);
  return <main className="system-module ai-lab-module"><header className="sm-header"><button type="button" onClick={onBack}>← COMMAND CENTER</button><span>AI LAB / 05</span><b>● ONLINE</b></header><section className="sm-hero"><small>HASNAIN.OS / EXPERIMENTAL SYSTEMS</small><h1>AI<br/><em>LAB</em></h1><p>An experimental layer for AI, automation and emerging system ideas.</p></section><section className="sm-grid">{AI_LAB.map(([name,status,description])=><article className="sm-card" key={name}><small>{status}</small><h2>{name}</h2><p>{description}</p><div className="meter"><i style={{width:status==="BUILT"?"100%":status==="ACTIVE"?"72%":"42%"}}/></div></article>)}</section></main>;
}