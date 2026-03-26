"use client";

import React from 'react';
import { INTRO_DATA } from '@/components/data/Introduction';
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function IntroductionPage() {
  const { title, subtitle, description, highlights, philosophy } = INTRO_DATA;

  return (
    <div className=" mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. HEADER: CLEAN TYPOGRAPHY */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Project Specification v1.0
            </span>
        </div>
        <h1 className="text-5xl font-black text-slate-950 tracking-tighter uppercase italic">
          {title}
        </h1>
        <p className="text-xl font-medium text-slate-500 leading-snug max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* 2. CORE ABSTRACT: WORD FILE STYLE */}
      <section className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">Abstract</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {description}
        </p>
      </section>

      <Separator className="bg-slate-100" />

      {/* 3. HIGHLIGHTS: CLEAN LIST */}
      <section className="space-y-8">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">Core Pillars</h3>
        <div className="grid grid-cols-1 gap-10">
          {highlights.map((item) => (
            <div key={item.label} className="flex gap-8 items-start">
              <div className="shrink-0 w-10 h-10 border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-slate-900 transition-colors">
                <item.icon size={18} strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">{item.label}</h4>
                <p className="text-sm font-bold text-slate-500">{item.value}</p>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PHILOSOPHY: MINIMALIST BORDERED BOX */}
      <section className="pt-10">
        <div className="rounded-3xl border border-slate-200 p-10 bg-slate-50/50 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Philosophy</h3>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                {philosophy.title}
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-medium">
            {philosophy.content}
          </p>
          <div className="pt-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 whitespace-nowrap">
                End of Section
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER: PAGE MARKER */}
      <footer className="pt-10 flex justify-center">
         <span className="text-[10px] font-bold text-slate-300 tracking-widest">DUEKOO // ARCHITECTURE_DOCS</span>
      </footer>
    </div>
  );
}