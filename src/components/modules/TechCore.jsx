import { TECH_CORE } from "../../data/techCoreData";
import "../../styles/system-module.css";
import "../../styles/tech-core.css";

export default function TechCore({ onBack }) {
  return <main className="system-module tech-core-module"><header className="sm-header"><button type="button" onClick={onBack}>← COMMAND CENTER</button><span>TECH CORE / 03</span><b>● ONLINE</b></header><section className="sm-hero"><small>HASNAIN.OS / KNOWLEDGE MATRIX</small><h1>TECH<br/><em>CORE</em></h1><p>Technologies and tools currently being learned, built with and explored.</p></section><section className="sm-grid">{TECH_CORE.map(([name,status,description],i)=><article className="sm-card" key={name}><span>[{String(i+1).padStart(2,"0")}]</span><small>{status}</small><h2>{name}</h2><p>{description}</p></article>)}</section></main>;
}