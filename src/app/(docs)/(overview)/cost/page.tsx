"use client";

import React from 'react';
import { COST_DATA } from '@/components/data/Cost';
import { Separator } from "@/components/ui/separator";

export default function CostAnalysisPage() {
  const { title, subtitle, abstract, breakdown, strategicWins } = COST_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Financial Architecture // 08
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
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">8.0 Fiscal Abstract</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {abstract}
        </p>
      </section>

      <Separator className="bg-slate-100" />

      {/* 3. COST TABLE: MINIMALIST GRID */}
      <section className="space-y-8">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">8.1 Resource Breakdown</h3>
        <div className="border border-slate-100 rounded-3xl overflow-hidden bg-white">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                        <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Category</th>
                        <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Monthly Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {breakdown.map((item) => (
                        <tr key={item.category} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/20 transition-colors">
                            <td className="p-6 space-y-1">
                                <p className="text-sm font-black text-slate-900">{item.category}</p>
                                <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-wide">{item.provider}</p>
                                <p className="text-xs text-slate-400 leading-relaxed max-w-sm">{item.strategy}</p>
                            </td>
                            <td className="p-6 align-top">
                                <span className="text-sm font-black text-slate-900 font-mono">{item.cost}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* 4. STRATEGIC WINS: BOXED NOTES */}
      <section className="space-y-8">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">8.2 Efficiency Decisions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicWins.map((win) => (
                <div key={win.title} className="p-8 border border-slate-100 rounded-2xl space-y-3">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">
                        {win.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium italic">
                        {win.description}
                    </p>
                </div>
            ))}
        </div>
      </section>

      {/* FOOTER: PAGE MARKER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // Cost_Audit_08</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono italic">OPERATIONAL_STABILITY: 100%</span>
      </footer>
    </div>
  );
}