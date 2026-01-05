import React from 'react';
import { ArrowLeft, RefreshCw, Download, ChevronDown, Clock, Phone, Shield, Search, List } from 'lucide-react';

export const AnalysisScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Top Nav */}
      <div className="bg-white px-4 py-4 flex items-center justify-between sticky top-0 z-20 shadow-sm">
         <div className="flex items-center gap-3">
             <button className="p-2 hover:bg-gray-100 rounded-full transition">
                 <ArrowLeft size={20} className="text-gray-700" />
             </button>
             <h1 className="text-xl font-bold text-gray-900">Analysis Tool</h1>
         </div>
         <div className="flex gap-2">
             <button className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
                 <RefreshCw size={18} className="text-gray-700" />
             </button>
             <button className="px-4 py-2 bg-[#1e1b4b] text-white rounded-xl text-sm font-medium flex items-center gap-2 shadow-lg shadow-indigo-900/10">
                 <Download size={16} />
                 <span>Export</span>
             </button>
         </div>
      </div>

      <div className="p-4 space-y-6">
          {/* Main Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-6 text-white shadow-xl shadow-indigo-500/20">
             <div className="flex justify-between items-start mb-6">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-yellow-400 text-lg">👑</span>
                        <h2 className="text-xl font-bold">Daily Summary</h2>
                    </div>
                    <p className="text-indigo-200 text-sm">Warbixinta shaqada maanta</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                    01/05/2026 <ChevronDown size={14} />
                </div>
             </div>

             <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                    <Clock size={18} className="mb-2 opacity-80" />
                    <span className="text-lg font-bold block leading-none mb-1">0h 5m</span>
                    <span className="text-[10px] uppercase opacity-70">Shaqeeyay</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                    <Phone size={18} className="mb-2 opacity-80" />
                    <span className="text-lg font-bold block leading-none mb-1">0</span>
                    <span className="text-[10px] uppercase opacity-70">Wacay</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                    <Shield size={18} className="mb-2 opacity-80" />
                    <span className="text-lg font-bold block leading-none mb-1">0</span>
                    <span className="text-[10px] uppercase opacity-70">Bixiyay</span>
                </div>
             </div>

             <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                 <span className="text-sm opacity-80">Total Revenue Collected</span>
                 <span className="text-2xl font-bold tracking-tight">$0.00</span>
             </div>
          </div>

          {/* Data Explorer */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
             <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center gap-2">
                     <Search size={20} className="text-indigo-600" />
                     <h3 className="text-lg font-bold text-gray-900">Data Explorer</h3>
                 </div>
                 <button className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wide">
                     Analyze
                 </button>
             </div>

             <div className="space-y-4">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Select Segment & Field</p>
                 
                 <div className="flex gap-4">
                     <div className="flex-1 relative">
                        <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 font-medium text-gray-700 outline-none focus:border-indigo-500">
                            <option>Active</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} />
                     </div>
                     <div className="flex-1 relative">
                        <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 font-medium text-gray-700 outline-none focus:border-indigo-500">
                            <option>Balance</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} />
                     </div>
                 </div>

                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-4">Filter By Amount</p>
                 
                 <div className="flex gap-4">
                     <div className="flex-1 relative">
                        <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 font-medium text-gray-700 outline-none focus:border-indigo-500">
                            <option>More than (&gt;)</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} />
                     </div>
                     <div className="flex-1 relative">
                        <div className="absolute left-3 top-3.5 text-gray-400 pointer-events-none">$</div>
                        <input type="number" defaultValue="100" className="w-full bg-white border border-gray-200 rounded-xl pl-6 pr-4 py-3 font-medium text-gray-700 outline-none focus:border-indigo-500" />
                     </div>
                 </div>

                 <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transition-all">
                     <List size={20} />
                     <span>Show Matching Customers</span>
                 </button>
             </div>
          </div>
      </div>
    </div>
  );
};