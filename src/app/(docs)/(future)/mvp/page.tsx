"use client";

import React from 'react';
import { MVP_DATA } from '@/components/data/MVP';
import { Separator } from "@/components/ui/separator";

export default function MvpPage() {
  const { title, subtitle, abstract, deliverables, boundaries } = MVP_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Release Baseline // 16
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
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">16.0 Project Status Abstract</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {abstract}
        </p>
      </section>

      <Separator className="bg-slate-100" />

      {/* 3. DELIVERABLES: STRUCTURED LIST */}
      <section className="space-y-16">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">16.1 Functional Deliverables</h3>
        <div className="space-y-20">
          {deliverables.map((item, idx) => (
            <div key={item.id} className="space-y-6 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono font-bold text-slate-300">16.1.{idx + 1}</span>
                    <h4 className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                        {item.label}
                    </h4>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest">{item.id}</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium max-w-2xl">
                    {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BOUNDARIES: MINIMALIST BORDERED BOX */}
      <section className="pt-10">
        <div className="rounded-3xl border border-slate-200 p-10 space-y-8 bg-slate-50/30">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Project Boundaries</h3>
            <div className="space-y-6">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight italic">
                    {boundaries.title}
                </h2>
                <ul className="space-y-4">
                    {boundaries.items.map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2 shrink-0" />
                            <p className="text-sm font-medium text-slate-500 leading-relaxed italic">
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // MVP_Audit_16</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono italic">VERSION: 1.0.0-STABLE</span>
      </footer>
    </div>
  );
}