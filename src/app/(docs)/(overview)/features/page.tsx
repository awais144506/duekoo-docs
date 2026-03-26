"use client";

import React from 'react';
import { FEATURES_DATA } from '@/components/data/Features';
import { Separator } from "@/components/ui/separator";

export default function FeaturesPage() {
  const { title, subtitle, abstract, features } = FEATURES_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Functional Specs // 06
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
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">6.0 Feature Architecture</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {abstract}
        </p>
      </section>

      <Separator className="bg-slate-100" />

      {/* 3. FEATURE LIST: MINIMALIST BLOCKS */}
      <section className="space-y-12">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">6.1 System Capabilities</h3>
        <div className="grid grid-cols-1 gap-12">
          {features.map((feature, idx) => (
            <div key={feature.title} className="space-y-6 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono font-bold text-slate-300">06.{idx + 1}</span>
                    <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
                        {feature.label}
                    </h4>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium max-w-2xl">
                    {feature.description}
                </p>
              </div>

              {/* TECHNICAL NOTE: INDENTED & LIGHTER */}
              <div className="ml-6 pl-6 border-l border-slate-100 py-1">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Technical Implementation</span>
                </div>
                <p className="text-xs text-slate-400 font-medium italic">
                    {feature.technical}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER: PAGE MARKER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // Features_06</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono">SPEC_READY</span>
      </footer>
    </div>
  );
}