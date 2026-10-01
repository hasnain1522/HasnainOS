import { useEffect } from "react";
import { TECH_CORE } from "../data/techCoreData";
import "../styles/system-module.css";

export default function TechCore({ onBack }) {
  useEffect(() => window.scrollTo({ top: 0, behavior: "auto" }), []);
  return <main className="system-module"><header className="sm-header"><button type="button" onClick={onBack}>← COMMAND CENTER</button><span>TECH CORE / 03</span><b>● ONLINE</b></header><section className="sm-hero"><small>HASNAIN.OS / KNOWLEDGE MATRIX</small><h1>TECH<br/><em>CORE</em></h1><p>Technologies and tools currently being learned, built with and explored.</p></section><section className="sm-grid">{TECH_CORE.map(([name,status,description],i)=><article className="sm-card" key={name}><span>[0{i+1}]</span><small>{status}</small><h2>{name}</h2><p>{description}</p></article>)}</section></main>;
}