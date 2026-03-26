"use client";

import React from 'react';
import { OBJECTIVES_DATA } from '@/components/data/Objectives';
import { Separator } from "@/components/ui/separator";

export default function ObjectivesPage() {
  const { title, subtitle, abstract, categories } = OBJECTIVES_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Strategic Roadmap // 03
            </span>
        </div>
        <h1 className="text-5xl font-black text-slate-950 tracking-tighter uppercase italic">
          {title}
        </h1>
        <p className="text-xl font-medium text-slate-500 leading-snug max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* 2. THE INTENT: FORMAL STATEMENT */}
      <section className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">3.0 Mission Intent</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {abstract}
        </p>
      </section>

      <Separator className="bg-slate-100" />

      {/* 3. OBJECTIVES LIST: STRUCTURED LOG */}
      <section className="space-y-16">
        {categories.map((category, index) => (
          <div key={category.label} className="space-y-6">
            <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono font-bold text-slate-300">
                    03.{index + 1}
                </span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600">
                    {category.label}
                </h3>
            </div>
            
            <div className="space-y-4">
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                    {category.title}
                </h4>
                <ul className="space-y-4 ml-1">
                    {category.goals.map((goal, gIndex) => (
                        <li key={gIndex} className="flex gap-4 items-start group">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2 group-hover:bg-indigo-500 transition-colors shrink-0" />
                            <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                {goal}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER: PAGE MARKER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // Section_03</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono">STABLE</span>
      </footer>
    </div>
  );
}