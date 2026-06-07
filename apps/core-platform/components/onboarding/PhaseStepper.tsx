"use client";

import { Check } from "lucide-react";

interface PhaseStepperProps {
  steps: string[];
  current: number;
  coreCount: number;
}

export function PhaseStepper({ steps, current, coreCount }: PhaseStepperProps) {
  const groups = [
    { name: "Core Platform Setup", short: "Core Setup", start: 0, end: coreCount },
    { name: "First OS Activation", short: "Activation", start: coreCount, end: steps.length },
  ];

  return (
    <div className="nx-phasestep">
      {groups.map((g, gi) => {
        const inThisPhase = current >= g.start && current < g.end;
        const groupDone = current >= g.end;
        return (
          <div
            key={g.name}
            className={["nx-phase", inThisPhase ? "active" : "", groupDone ? "done" : ""].filter(Boolean).join(" ")}
          >
            <div className="nx-phase-cap">
              <span className="nx-phase-num">Phase {gi + 1}</span>
              <span className="nx-phase-name">{g.short}</span>
            </div>
            <div className="nx-phase-steps">
              {steps.slice(g.start, g.end).map((label, i) => {
                const idx = g.start + i;
                const state = idx === current ? "current" : idx < current ? "done" : "";
                return (
                  <div key={label} className={["nx-pstep", state].filter(Boolean).join(" ")}>
                    <span className="nx-pstep-dot">
                      {idx < current ? <Check size={12} /> : idx + 1}
                    </span>
                    <span className="nx-pstep-label">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
