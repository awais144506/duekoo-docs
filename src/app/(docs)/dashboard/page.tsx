"use client";

import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Heart, 
  Plane, 
  TrendingUp,
  Activity
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock Data for the Graph (Learning Activity)
const data = [
  { name: 'Mon', active: 400 },
  { name: 'Tue', active: 700 },
  { name: 'Wed', active: 600 },
  { name: 'Thu', active: 800 },
  { name: 'Fri', active: 500 },
  { name: 'Sat', active: 900 },
  { name: 'Sun', active: 1100 },
];

export default function DocsDashboard() {
  const stats = [
    { label: "Total Users", value: "2,543", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Study Visa", value: "1,120", icon: GraduationCap, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Family Visa", value: "840", icon: Heart, color: "text-rose-600", bg: "bg-rose-50" },
    { label: "Visit Visa", value: "583", icon: Plane, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-1000">
      
      {/* 1. Page Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter">System Metrics</h1>
        <p className="text-slate-500 font-medium italic">Live telemetry and user segmentation for the Duekoo ecosystem.</p>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-none shadow-sm bg-white rounded-[32px] overflow-hidden group hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}>
                  <stat.icon size={20} />
                </div>
                <div className="flex items-center gap-1 text-emerald-500 font-bold text-[10px] uppercase">
                  <TrendingUp size={12} /> +12%
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 3. Main Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Learning Activity Graph */}
        <Card className="lg:col-span-2 border-none shadow-sm bg-white rounded-[40px] p-8">
          <CardHeader className="px-0 pt-0 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-black text-slate-900 tracking-tight">Active Learning Hours</CardTitle>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Platform engagement over 7 days</p>
              </div>
              <Activity className="text-indigo-600 opacity-20" size={32} />
            </div>
          </CardHeader>
          <div className="h-75 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 'bold'}}
                />
                <Area 
                  type="monotone" 
                  dataKey="active" 
                  stroke="#4f46e5" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorActive)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* System Health / Technical Side Card */}
        <Card className="border-none shadow-sm bg-slate-900 rounded-[40px] p-8 text-white">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Architecture Status</span>
              <h3 className="text-2xl font-black leading-tight">Backend API Performance</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-xs font-bold text-slate-400">Response Time</span>
                <span className="text-xs font-black text-emerald-400">142ms</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-xs font-bold text-slate-400">Database Load</span>
                <span className="text-xs font-black text-white">12%</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-xs font-bold text-slate-400">Auth Sync</span>
                <span className="text-xs font-black text-emerald-400">Healthy</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}