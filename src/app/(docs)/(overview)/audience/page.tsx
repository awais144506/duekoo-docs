"use client";

import React from 'react';
import { AUDIENCE_DATA } from '@/components/data/Audience';
import { Separator } from "@/components/ui/separator";

export default function AudiencePage() {
  const { title, subtitle, abstract, segments } = AUDIENCE_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                User Segmentation // 04
            </span>
        </div>
        <h1 className="text-5xl font-black text-slate-950 tracking-tighter uppercase italic">
          {title}
        </h1>
        <p className="text-xl font-medium text-slate-500 leading-snug max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* 2. CORE DEFINITION: FORMAL ABSTRACT */}
      <section className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">4.0 User Profile Abstract</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {abstract}
        </p>
      </section>

      <Separator className="bg-slate-100" />

      {/* 3. SEGMENTS: STRUCTURED CARDS */}
      <section className="space-y-12">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">4.1 Demographic Breakdown</h3>
        <div className="grid grid-cols-1 gap-8">
          {segments.map((segment, index) => (
            <div key={segment.title} className="p-8 border border-slate-100 rounded-3xl bg-slate-50/30 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black text-indigo-600 uppercase tracking-[0.2em] bg-indigo-50 px-2 py-1 rounded">
                    {segment.label}
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-300">SEG_0{index + 1}</span>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">{segment.title}</h4>
                <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-xl">
                    {segment.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {segment.needs.map((need) => (
                    <span key={need} className="text-[10px] font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded-full bg-white">
                        {need}
                    </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER: PAGE MARKER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // Section_04</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono">USER_CENTRIC</span>
      </footer>
    </div>
  );
}