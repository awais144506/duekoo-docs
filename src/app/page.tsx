'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Lock, Send, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'requesting' | 'sent'>('idle');

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('requesting');
    // Simulate API call to your whitelist logic
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 selection:bg-indigo-100">

      {/* Soft Background Glow (Light Mode Version) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-linear-to-b from-indigo-50/50 to-transparent" />
      </div>

      <div className="w-full max-w-xl space-y-10 relative z-10 text-center">

        {/* 1. DUEKOO LOGO */}
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-white rounded-3xl shadow-sm border border-slate-100 animate-in fade-in zoom-in duration-1000">
            <Image
              src="/logo.png"
              alt="Duekoo Logo"
              width={160}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* 2. HERO TEXT */}
        <div className="space-y-3">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
            System Design.
          </h1>
          <p className="text-slate-500 text-lg font-medium leading-relaxed mx-auto">
            Deep-dive into the Duekoo paradigm, logic, and engineering specs.
          </p>
        </div>

        {/* 3. ACCESS CARD */}
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-[48px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all">
          {status !== 'sent' ? (
            <form onSubmit={handleRequest} className="space-y-6">
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">
                  Request Access Key
                </label>
                <div className="relative group">
                  <Input
                    type="email"
                    required
                    placeholder="Enter your professional email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-16 bg-slate-50 border-slate-200 rounded-2xl px-6 text-slate-900 placeholder:text-slate-400 focus:ring-indigo-600 focus:bg-white focus:border-indigo-600 transition-all text-lg font-medium"
                  />
                  <Lock className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={20} />
                </div>
              </div>

              <Button
                disabled={status === 'requesting'}
                className="w-full h-16 bg-slate-900 cursor-pointer hover:bg-indigo-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-95 shadow-xl shadow-slate-200 disabled:opacity-50"
              >
                {status === 'requesting' ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Validating...
                  </span>
                ) : (
                  <>
                    Verify Email
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="py-8 space-y-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-sm">
                <Send size={28} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Request Logged.</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-70 mx-auto">
                  Check your inbox for the <span className="text-indigo-600 font-bold">Magic Link</span> shortly.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 4. PROFESSIONAL FOOTER */}
        <div className="flex flex-col items-center gap-6 pt-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Connect with the Lead Engineer</p>
          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/muhammad-awais-122133197/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-black text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}