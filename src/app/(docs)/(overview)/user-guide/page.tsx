"use client";

import React from 'react';
import { USER_GUIDE_DATA } from '@/components/data/UserGuide';
import { Separator } from "@/components/ui/separator";

export default function UserGuidePage() {
  const { title, subtitle, abstract, steps } = USER_GUIDE_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                End-User Manual // 07
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
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">7.0 Operational Overview</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {abstract}
        </p>
      </section>

      <Separator className="bg-slate-100" />

      {/* 3. THE STEPS: MINIMALIST TIMELINE */}
      <section className="space-y-2">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-10">7.1 User Journey Path</h3>
        
        <div className="relative space-y-0">
          {steps.map((step, idx) => (
            <div key={step.title} className="relative pl-12 pb-16 last:pb-0">
              {/* Vertical Line Connector */}
              {idx !== steps.length - 1 && (
                <div className="absolute left-[5px] top-3 bottom-0 w-px bg-slate-100" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 border-slate-900 bg-white z-10" />

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                    {step.label}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-2xl">
                    {step.description}
                </p>

                {/* CALL TO ACTION BOX */}
                <div className="inline-block bg-slate-50 border border-slate-100 px-4 py-2 rounded-lg">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                        <span className="text-slate-900 mr-2 underline decoration-indigo-500 underline-offset-4">Instruction:</span> 
                        {step.action}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER: PAGE MARKER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // Guide_07</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono">USER_FLOW_OK</span>
      </footer>
    </div>
  );
}