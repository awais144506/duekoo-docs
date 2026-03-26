"use client";

import React from 'react';
import { TECH_STACK_DATA } from '@/components/data/TechStack';
import { Separator } from "@/components/ui/separator";

export default function TechStackPage() {
  const { title, subtitle, abstract, categories } = TECH_STACK_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                System Architecture // 05
            </span>
        </div>
        <h1 className="text-5xl font-black text-slate-950 tracking-tighter uppercase italic">
          {title}
        </h1>
        <p className="text-xl font-medium text-slate-500 leading-snug max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* 2. THE RATIONALE: FORMAL ABSTRACT */}
      <section className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">5.0 Engineering Rationale</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {abstract}
        </p>
      </section>

      <Separator className="bg-slate-100" />

      {/* 3. TECH CATEGORIES: STRUCTURED GRID */}
      <section className="space-y-16">
        {categories.map((category, idx) => (
          <div key={category.label} className="space-y-8">
            <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono font-bold text-slate-300">
                    05.{idx + 1}
                </span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600">
                    {category.label}
                </h3>
            </div>

            <div className="space-y-6">
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                    {category.title}
                </h4>
                
                <div className="grid grid-cols-1 gap-6">
                    {category.items.map((item) => (
                        <div key={item.name} className="flex gap-6 items-start p-6 border border-slate-100 rounded-2xl bg-slate-50/20 hover:bg-white hover:border-slate-200 transition-all group">
                            <div className="w-1.5 h-6 bg-slate-200 group-hover:bg-indigo-500 rounded-full transition-colors shrink-0" />
                            <div className="space-y-1">
                                <p className="text-sm font-black text-slate-900 uppercase tracking-wide">
                                    {item.name}
                                </p>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                    {item.reason}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER: PAGE MARKER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // Tech_Stack_05</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono">FULLY_TYPED</span>
      </footer>
    </div>
  );
}