import Image from "next/image";
import { ExternalLink, GitBranch } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
  return (
    <header className="h-20 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-8">
      
      {/* 1. LEFT: SEARCH OR TRIGGER */}
      <div className="flex items-center gap-4 w-full max-w-75">
        {/* We add the SidebarTrigger here so users can toggle the menu */}
        <SidebarTrigger className="text-slate-400 hover:text-slate-900" />
        
      
      </div>

      {/* 2. CENTER: LOGO (Perfectly Centered) */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
        <Image 
          src="/logo.png" 
          alt="Duekoo Logo" 
          width={110} 
          height={28} 
          className="object-contain"
          priority
        />
      </div>

      {/* 3. RIGHT: ACTIONS */}
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/awais144506"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
        >
          <GitBranch size={16} />
          <span className="hidden xl:block">Git Repo</span>
        </a>

        <div className="h-4 w-px bg-slate-100" />

        <a
          href="https://www.duekoo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 hover:shadow-slate-200 active:scale-95"
        >
          Duekoo <ExternalLink size={12} strokeWidth={3} />
        </a>
      </div>
    </header>
  );
}