import React from 'react';
import { ArrowLeft, User, X, Calculator, Sparkles } from 'lucide-react';

interface ExisaabiProps {
    onBack: () => void;
}

export const ExisaabiScreen: React.FC<ExisaabiProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 pt-6 pb-20 rounded-b-[40px] shadow-lg relative">
         <div className="flex items-center justify-between mb-8">
             <button onClick={onBack} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition text-white">
                 <ArrowLeft size={20} />
             </button>
             <div className="flex items-center gap-2">
                 <h1 className="text-xl font-bold text-white">eXisaabi</h1>
                 <Sparkles size={16} className="text-yellow-300 fill-current" />
             </div>
             <button onClick={onBack} className="p-2 transition text-white/80 hover:text-white">
                 <X size={20} />
             </button>
         </div>
         
         <div className="flex justify-center mb-2">
             <span className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold text-blue-100 uppercase tracking-widest border border-white/10">
                 Xisaabiyaha Komishinka
             </span>
         </div>

         {/* User Card */}
         <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center justify-between text-white">
             <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                     <User size={20} />
                 </div>
                 <div>
                     <p className="text-[10px] uppercase opacity-70 mb-0.5">Ururiyaha</p>
                     <p className="font-bold text-lg leading-none">LP</p>
                 </div>
             </div>
             <div className="text-right">
                 <p className="text-[10px] uppercase opacity-70 mb-0.5 flex items-center justify-end gap-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Zone
                 </p>
                 <p className="font-bold">Hanta dher</p>
             </div>
         </div>
      </div>

      <div className="px-4 -mt-12 relative z-10 space-y-4">
          <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50">
              <label className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2 block">Wadarta Guud (Generation)</label>
              <div className="relative">
                  <span className="absolute left-4 top-4 text-gray-400 font-bold">$</span>
                  <div className="absolute left-4 top-4 text-indigo-500">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                  </div>
                  <input type="number" className="w-full border-2 border-indigo-100 rounded-2xl py-4 pl-12 pr-4 text-2xl font-bold text-gray-800 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all bg-indigo-50/30 placeholder-gray-300" placeholder="0.00" />
              </div>
          </div>

          <div className="flex gap-4">
             <div className="flex-1 bg-white rounded-3xl p-5 shadow-sm">
                <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block">La Soo Xareeyay (Paid)</label>
                <div className="relative">
                    <span className="absolute left-3 top-3.5 text-gray-300 font-bold text-sm">$</span>
                    <input type="number" className="w-full bg-gray-50 rounded-xl py-3 pl-7 pr-3 font-bold text-gray-700 outline-none focus:ring-2 focus:ring-indigo-200" placeholder="0.00" />
                </div>
             </div>
             <div className="flex-1 bg-white rounded-3xl p-5 shadow-sm">
                <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block">Danguud</label>
                <div className="relative">
                    <span className="absolute left-3 top-3.5 text-gray-300 font-bold text-sm">$</span>
                    <input type="number" className="w-full bg-gray-50 rounded-xl py-3 pl-7 pr-3 font-bold text-gray-700 outline-none focus:ring-2 focus:ring-indigo-200" placeholder="0.00" />
                </div>
             </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-dashed border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold text-xs">!</div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Sixitaanka Xisaabta</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                  <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Discount</label>
                      <input type="number" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 font-bold text-gray-700 outline-none focus:border-indigo-500" placeholder="0.00" />
                  </div>
                  <div>
                      <label className="text-[10px] font-bold text-orange-400 uppercase mb-1 block">Cudurdaar</label>
                      <input type="number" className="w-full bg-orange-50 border border-orange-100 rounded-xl py-3 px-4 font-bold text-orange-700 outline-none focus:border-orange-500 placeholder-orange-300" placeholder="0.00" />
                  </div>
              </div>
              
              <div className="mt-6 flex justify-between items-end border-t border-gray-100 pt-4">
                  <span className="text-xs font-bold text-gray-400 uppercase">Haraaga Guud</span>
                  <span className="text-2xl font-bold text-gray-900">$0.00</span>
              </div>
          </div>
          
          <button className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 font-bold transition-transform active:scale-95">
              <Calculator size={20} />
              <span>Xisaabi Natiijada</span>
          </button>
      </div>
    </div>
  );
};