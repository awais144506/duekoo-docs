"use client";

import React from 'react';
import { SECURITY_DATA } from '@/components/data/Security';
import { Separator } from "@/components/ui/separator";

export default function SecurityPage() {
  const { title, subtitle, abstract, protocols, fortification } = SECURITY_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                System Fortification // 13
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
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">13.0 Security Abstract</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {abstract}
        </p>
      </section>

      <Separator className="bg-slate-100" />

      {/* 3. PROTOCOLS: STRUCTURED LIST */}
      <section className="space-y-16">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">13.1 Access Control Protocols</h3>
        <div className="space-y-20">
          {protocols.map((protocol, idx) => (
            <div key={protocol.id} className="space-y-6 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono font-bold text-slate-300">13.1.{idx + 1}</span>
                    <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
                        {protocol.label}
                    </h4>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest">{protocol.id}</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {protocol.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium max-w-2xl">
                    {protocol.description}
                </p>
              </div>

              {/* LOGIC FLOW: CODE-STYLE BOX */}
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Internal Logic Flow</p>
                <code className="text-xs font-mono font-bold text-slate-700">
                    {protocol.logic}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FORTIFICATION: MINIMALIST CARDS */}
      <section className="pt-10 space-y-8">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">13.2 Environmental Safety</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fortification.map((item) => (
                <div key={item.title} className="p-8 border border-slate-200 rounded-3xl space-y-4">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight italic underline underline-offset-8 decoration-slate-100">
                        {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // Security_Audit_13</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono">ENCRYPTED_AUTH_OK</span>
      </footer>
    </div>
  );
}