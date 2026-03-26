"use client";

import React from 'react';
import Image from 'next/image';
import { DESIGN_DATA } from '@/components/data/SystemDesign';
import { Separator } from "@/components/ui/separator";

export default function SystemDesignPage() {
  const { title, subtitle, abstract, components, logic } = DESIGN_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Architecture Blueprint // 10
            </span>
        </div>
        <h1 className="text-5xl font-black text-slate-950 tracking-tighter uppercase italic">
          {title}
        </h1>
        <p className="text-xl font-medium text-slate-500 leading-snug max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* 2. THE ARCHITECTURAL DIAGRAM */}
      <section className="space-y-6">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">10.0 Infrastructure Diagram</h3>
        <div className="p-8 border border-slate-100 rounded-[40px] bg-white shadow-sm flex items-center justify-center">
          <Image 
            src="/system.svg" 
            alt="Duekoo System Architecture Diagram" 
            width={800} 
            height={400} 
          />
        </div>
        <p className="text-[10px] text-center font-bold text-slate-300 uppercase tracking-widest">
            Fig 1.1: Request Flow from Client to PostgreSQL
        </p>
      </section>

      {/* 3. THE ABSTRACT */}
      <section className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">10.1 Design Philosophy</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {abstract}
        </p>
      </section>

      <Separator className="bg-slate-100" />

      {/* 4. COMPONENT BREAKDOWN */}
      <section className="space-y-12">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">10.2 Component Stack</h3>
        <div className="grid grid-cols-1 gap-10">
          {components.map((comp, idx) => (
            <div key={comp.title} className="flex gap-10 items-start group">
               <span className="text-[10px] font-mono font-bold text-slate-300 pt-1">
                10.2.{idx + 1}
              </span>
              <div className="space-y-2">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">
                    {comp.label}
                </h4>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    {comp.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xl font-medium">
                  {comp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LOGIC WORKFLOW: THE NUMBERED LIST */}
      <section className="pt-10">
        <div className="rounded-3xl border border-slate-200 p-10 space-y-8 bg-slate-50/30">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Logic Workflow</h3>
            <div className="space-y-4">
                {logic.steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-[10px] font-black bg-white shrink-0">
                            {idx + 1}
                        </div>
                        <p className="text-sm font-medium text-slate-600">{step}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // Design_10</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono">DIAGRAM_LOADED</span>
      </footer>
    </div>
  );
}