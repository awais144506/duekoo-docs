"use client";

import React from 'react';
import { ROADMAP_DATA } from '@/components/data/Roadmap';
import { Separator } from "@/components/ui/separator";

export default function RoadmapPage() {
  const { title, subtitle, abstract, phases, vision } = ROADMAP_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Product Vision // 17
            </span>
        </div>
        <h1 className="text-5xl font-black text-slate-950 tracking-tighter uppercase italic">
          {title}
        </h1>
        <p className="text-xl font-medium text-slate-500 leading-snug max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* 2. THE ABSTRACT */}
      <section className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">17.0 Strategic Abstract</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {abstract}
        </p>
      </section>

      <Separator className="bg-slate-100" />

      {/* 3. THE PHASES: MINIMALIST TIMELINE */}
      <section className="space-y-2">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-10">17.1 Development Timeline</h3>
        
        <div className="relative space-y-0">
          {phases.map((phase, idx) => (
            <div key={phase.id} className="relative pl-12 pb-16 last:pb-0">
              {/* Vertical Line Connector */}
              {idx !== phases.length - 1 && (
                <div className="absolute left-[5px] top-3 bottom-0 w-px bg-slate-100" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 border-slate-900 bg-white z-10" />

              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                    {phase.label}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {phase.title}
                  </h3>
                </div>

                <ul className="space-y-4 ml-1">
                    {phase.goals.map((goal, gIdx) => (
                        <li key={gIdx} className="flex gap-4 items-start group">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2 group-hover:bg-indigo-500 transition-colors shrink-0" />
                            <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-xl">
                                {goal}
                            </p>
                        </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VISION: CLEAN CLOSING */}
      <section className="pt-10">
        <div className="rounded-3xl border border-slate-200 p-10 space-y-4 bg-slate-50/50">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Long-term Mission</h3>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight italic">
                {vision.title}
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
                {vision.text}
            </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // Roadmap_17</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono italic">END_OF_DOCUMENT</span>
      </footer>
    </div>
  );
}