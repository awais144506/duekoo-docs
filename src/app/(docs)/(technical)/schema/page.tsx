"use client";

import React from 'react';
import Image from 'next/image';
import { SCHEMA_DATA } from '@/components/data/DatabaseSchema';
import { Separator } from "@/components/ui/separator";

export default function DatabaseSchemaPage() {
  const { title, subtitle, abstract, models, constraints } = SCHEMA_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Data Modeling // 11
            </span>
        </div>
        <h1 className="text-5xl font-black text-slate-950 tracking-tighter uppercase italic">
          {title}
        </h1>
        <p className="text-xl font-medium text-slate-500 leading-snug max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* 2. THE ERD DIAGRAM */}
      <section className="space-y-6">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">11.0 Entity Relationship Diagram (ERD)</h3>
        <div className="p-10 border border-slate-100 rounded-[40px] bg-slate-50/30 flex items-center justify-center">
          <Image 
            src="/database.svg" 
            alt="Duekoo Database Schema Diagram" 
            width={1920} 
            height={1080} 
          />
        </div>
      </section>

      {/* 3. THE ABSTRACT */}
      <section className="space-y-4">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">11.1 Persistence Strategy</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {abstract}
        </p>
      </section>

      <Separator className="bg-slate-100" />

      {/* 4. MODEL DEFINITIONS */}
      <section className="space-y-12">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">11.2 Core Models</h3>
        <div className="grid grid-cols-1 gap-12">
          {models.map((model, idx) => (
            <div key={model.name} className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono font-bold text-slate-300">11.2.{idx + 1}</span>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest underline decoration-slate-200 underline-offset-8">
                    {model.name}
                </h4>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                {model.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {model.fields.map((field) => (
                    <code key={field} className="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {field}
                    </code>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DATABASE CONSTRAINTS: TECHNICAL NOTES */}
      <section className="pt-10">
        <div className="rounded-3xl border border-slate-200 p-10 space-y-8 bg-slate-900 text-white">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Schema Constraints</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {constraints.map((item) => (
                    <div key={item.title} className="space-y-3">
                        <h4 className="text-xs font-black text-indigo-400 uppercase tracking-widest">
                            {item.title}
                        </h4>
                        <code className="block text-[10px] font-mono text-slate-300 bg-white/5 p-2 rounded border border-white/5">
                            {item.logic}
                        </code>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium italic">
                            {item.reason}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // Database_11</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono">POSTGRES_READY</span>
      </footer>
    </div>
  );
}