import React from 'react';
import { Upload, Plus, Trash2, Search, Filter, Clock } from 'lucide-react';

export const BaafiyeScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="px-4 pt-6 pb-2 flex items-center justify-between bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg">
        <div className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-2">
            <Clock size={14} />
            <span className="text-sm font-medium">07:18 AM</span>
        </div>
        <div className="flex gap-2">
            <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 backdrop-blur-md transition">
                <Plus size={20} />
            </button>
            <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 backdrop-blur-md transition">
                <Trash2 size={20} />
            </button>
            <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 backdrop-blur-md transition">
                <Search size={20} />
            </button>
            <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 backdrop-blur-md transition">
                <Filter size={20} />
            </button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-2 pb-2">
        <div className="flex p-1 bg-black/10 rounded-xl">
            {['Active', 'Today', 'Balan', 'Paid'].map((tab, idx) => (
                <button 
                    key={tab} 
                    className={`flex-1 py-1.5 text-sm font-medium rounded-lg text-center transition-all ${idx === 0 ? 'bg-white text-indigo-600 shadow-sm' : 'text-white/80 hover:text-white'}`}
                >
                    {tab}
                </button>
            ))}
        </div>
      </div>

      {/* Empty State Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center pb-24">
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <Upload size={40} className="text-blue-500" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Not Found</h2>
        <p className="text-gray-500 max-w-xs mb-8 leading-relaxed">
            Start by uploading your customer data Excel sheet to see them here.
        </p>

        <label className="bg-[#1e1b4b] text-white px-8 py-4 rounded-2xl shadow-xl shadow-indigo-900/20 font-bold flex items-center gap-3 cursor-pointer hover:bg-[#2e2a6b] transition active:scale-95">
            <span>Upload Now</span>
            <div className="bg-white/20 rounded-md p-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            </div>
            <input type="file" className="hidden" accept=".xlsx,.xls,.csv" />
        </label>
      </div>
    </div>
  );
};