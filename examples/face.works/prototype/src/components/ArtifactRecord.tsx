"use client";

import Link from "next/link";
import { useState } from "react";

type Artifact = {
  id: string;
  title: string;
  type: string;
  state: "canonical" | "developing" | "experimental";
  href: string;
};

const artifacts: Artifact[] = [
  { id: "FVS-100", title: "Visual Constitution", type: "Standard", state: "canonical", href: "/frameworks" },
  { id: "FVI-001", title: "Axis Exchange", type: "Identity", state: "canonical", href: "/library" },
  { id: "FVI-300", title: "Diagram Grammar", type: "System", state: "canonical", href: "/frameworks" },
  { id: "FN-027", title: "Visible Lineage", type: "Field note", state: "developing", href: "/field-notes" },
  { id: "FM-014", title: "Inheritance Field", type: "Model", state: "developing", href: "/models" },
  { id: "FVA-610", title: "Facework Field", type: "Experiment", state: "experimental", href: "/field/index.html" },
];

type Filter = "all" | Artifact["state"];

export function ArtifactRecord() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? artifacts : artifacts.filter((artifact) => artifact.state === filter);

  return (
    <>
      <div className="record-intro">
        <h2 id="record-title" className="display-title">The work, with its state attached.</h2>
        <div className="filter-row" aria-label="Filter artifacts">
          {(["all", "canonical", "developing", "experimental"] as const).map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <ul className="artifact-table">
        {visible.map((artifact) => (
          <li className="artifact-row" key={artifact.id}>
            <p>{artifact.id}</p>
            <h3>{artifact.title}</h3>
            <p>{artifact.type}</p>
            <p><span className={`artifact-state ${artifact.state}`}>{artifact.state}</span></p>
            <Link href={artifact.href} aria-label={`Open ${artifact.title}`}>Open ↗</Link>
          </li>
        ))}
      </ul>
      <p className="filter-status" aria-live="polite">
        {visible.length} {visible.length === 1 ? "artifact" : "artifacts"} shown: {filter}.
      </p>
    </>
  );
}
