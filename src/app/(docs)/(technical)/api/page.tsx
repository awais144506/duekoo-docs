"use client";

import React from 'react';
import { API_DATA } from '@/components/data/API';
import { Separator } from "@/components/ui/separator";

export default function ApiDocsPage() {
  const { title, subtitle, abstract, config, endpoints } = API_DATA;

  return (
    <div className="mx-auto py-12 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. SECTION HEADER */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Data Exchange // 12
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
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">12.0 Interface Protocol</h3>
        <p className="text-lg text-slate-700 leading-relaxed font-serif italic border-l border-slate-200 pl-8 py-1">
          {abstract}
        </p>
      </section>

      {/* 3. GLOBAL CONFIG BOX */}
      <section className="p-8 border border-slate-100 rounded-3xl bg-slate-50/30 space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Global Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Base URL</p>
                <code className="text-xs font-mono font-bold text-slate-900">{config.baseUrl}</code>
            </div>
            <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Authorization</p>
                <code className="text-xs font-mono font-bold text-indigo-600">{config.auth}</code>
            </div>
        </div>
      </section>

      <Separator className="bg-slate-100" />

      {/* 4. ENDPOINT LISTING */}
      <section className="space-y-16">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">12.1 Endpoint Catalog</h3>
        <div className="space-y-20">
          {endpoints.map((endpoint, idx) => (
            <div key={endpoint.path} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className={`text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest text-white ${
                    endpoint.method === 'GET' ? 'bg-emerald-500' : 
                    endpoint.method === 'PATCH' ? 'bg-amber-500' : 'bg-slate-900'
                }`}>
                    {endpoint.method}
                </span>
                <code className="text-sm font-mono font-black text-slate-900">
                    {endpoint.path}
                </code>
              </div>

              <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-2xl">
                {endpoint.description}
              </p>

              <div className="grid grid-cols-1 gap-4">
                {endpoint.payload && (
                    <div className="space-y-2">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Request Payload</p>
                        <pre className="p-4 bg-slate-900 rounded-xl text-[11px] font-mono text-slate-300 overflow-x-auto border border-white/5">
                            {endpoint.payload}
                        </pre>
                    </div>
                )}
                <div className="space-y-2">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Success Response (200 OK)</p>
                    <pre className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-mono text-slate-600 overflow-x-auto italic">
                        {endpoint.response}
                    </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-10 flex justify-between items-center border-t border-slate-50">
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase">Duekoo // API_Spec_12</span>
         <span className="text-[9px] font-bold text-slate-300 tracking-[0.5em] uppercase font-mono">STATELESS_V1</span>
      </footer>
    </div>
  );
}