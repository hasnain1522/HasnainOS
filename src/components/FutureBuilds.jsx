import { useEffect } from "react";
import { FUTURE_BUILDS } from "../data/futureBuildsData";
import "../styles/system-module.css";

export default function FutureBuilds({ onBack }) {
  useEffect(() => window.scrollTo({ top: 0, behavior: "auto" }), []);
  return <main className="system-module"><header className="sm-header"><button type="button" onClick={onBack}>← COMMAND CENTER</button><span>FUTURE BUILDS / 06</span><b>● ROADMAP</b></header><section className="sm-hero"><small>HASNAIN.OS / ROADMAP ENGINE</small><h1>FUTURE<br/><em>BUILDS</em></h1><p>Systems that are ideas today and candidates for tomorrow's build queue.</p></section><section className="roadmap">{FUTURE_BUILDS.map(([id,name,type,status,description])=><article key={id}><span>[{id}]</span><div><small>{type} / {status}</small><h2>{name}</h2><p>{description}</p></div><b>→</b></article>)}</section></main>;
}