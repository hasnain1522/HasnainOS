import { EXPERIENCE } from "../../data/experienceData";
import "../../styles/system-module.css";
import "../../styles/experience.css";

export default function Experience({ onBack }) {
  return <main className="system-module experience-module"><header className="sm-header"><button type="button" onClick={onBack}>← COMMAND CENTER</button><span>EXPERIENCE / 04</span><b>● ONLINE</b></header><section className="sm-hero"><small>HASNAIN.OS / EXPERIENCE MATRIX</small><h1>EXPERIENCE<br/><em>MATRIX</em></h1><p>Education, practical exposure and real-world building activity.</p></section><section className="timeline">{EXPERIENCE.map((x,i)=><article key={i}><span>{x[0]}</span><div><small>{x[2]}</small><h2>{x[1]}</h2><p>{x[3]}</p></div></article>)}</section></main>;
}