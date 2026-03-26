"use client";

import React from 'react';
import { PROBLEM_DATA } from '@/components/data/ProblemStatment';
import { Separator } from "@/components/ui/separator";

export default function ProblemStatementPage() {
  const { title, subtitle, abstract, challenges, conclusion } = PROBLEM_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Strategic Rationale // 02
            </span>
        </div>
        <h1 className="text-5xl font-black text-slate-950 tracking-tighter uppercase italic">
          {title}
        </h1>
        <p className="text-xl font-medium text-slate-500 leading-snug max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* 2. THE ABSTRACT: FORMAL REPORT STYLE */}
      <section className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">1.0 Executive Abstract</h3>
        <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-2xl">
            <p className="text-lg text-slate-700 leading-relaxed font-serif italic">
              {abstract}
            </p>
        </div>
      </section>

      <Separator className="bg-slate-100" />

      {/* 3. CORE CHALLENGES: LISTED HIERARCHY */}
      <section className="space-y-10">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">2.0 Critical Barriers</h3>
        <div className="space-y-12">
          {challenges.map((item) => (
            <div key={item.label} className="flex gap-10 items-start group">
              <div className="shrink-0 mt-1">
                <item.icon size={20} className="text-slate-300 group-hover:text-slate-900 transition-colors" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded">
                        {item.label}
                    </span>
                    <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">
                        {item.title}
                    </h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xl font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONCLUSION: CLEAN CLOSING */}
      <section className="pt-10">
        <div className="rounded-3xl border border-slate-200 p-10 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Strategic Alignment</h3>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                {conclusion.title}
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
                {conclusion.text}
            </p>
        </div>
      </section>

      {/* PAGE MARKER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // Section_02</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono">EOF</span>
      </footer>
    </div>
  );
}