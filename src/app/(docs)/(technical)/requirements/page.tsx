"use client";

import React from 'react';
import { REQUIREMENTS_DATA } from '@/components/data/Requirements';
import { Separator } from "@/components/ui/separator";

export default function RequirementsPage() {
  const { title, subtitle, abstract, functional, nonFunctional } = REQUIREMENTS_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Technical Specs // 09
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
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">9.0 System Constraints</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {abstract}
        </p>
      </section>

      <Separator className="bg-slate-100" />

      {/* 3. FUNCTIONAL REQUIREMENTS */}
      <section className="space-y-10">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">9.1 Functional Requirements</h3>
        <div className="space-y-8">
          {functional.map((req) => (
            <div key={req.id} className="flex gap-8 items-start group">
              <span className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-indigo-600 transition-colors pt-1">
                {req.id}
              </span>
              <div className="space-y-2">
                <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">
                    {req.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xl font-medium">
                  {req.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NON-FUNCTIONAL REQUIREMENTS */}
      <section className="space-y-10 pt-10">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">9.2 Non-Functional Specs</h3>
        <div className="grid grid-cols-1 gap-6">
          {nonFunctional.map((req) => (
            <div key={req.id} className="p-8 border border-slate-100 rounded-3xl bg-slate-50/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded">
                    {req.label}
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-300">{req.id}</span>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-black text-slate-900 tracking-tight">{req.title}</h4>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    {req.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // Section_09</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono">SPEC_V1</span>
      </footer>
    </div>
  );
}