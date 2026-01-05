import React from 'react';
import { ArrowLeft, Search, Building2, ChevronRight } from 'lucide-react';

interface HospitalProps {
    onBack: () => void;
}

export const HospitalScreen: React.FC<HospitalProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white pb-10 rounded-b-[32px] shadow-lg">
          <div className="flex items-center gap-3 mb-6">
              <button onClick={onBack} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                  <ArrowLeft size={20} />
              </button>
              <div>
                  <h1 className="text-xl font-bold">Hospital Discounts</h1>
                  <p className="text-xs opacity-80 uppercase tracking-wider">Healthcare Benefits</p>
              </div>
              <div className="ml-auto w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Building2 size={20} />
              </div>
          </div>

          <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search hospitals..." 
                className="w-full bg-white text-gray-800 rounded-2xl pl-12 pr-4 py-3 font-medium shadow-lg outline-none"
              />
          </div>
       </div>

       <div className="px-4 -mt-6 relative z-10">
           <div className="bg-white rounded-2xl shadow-lg p-2 flex justify-between">
                <div className="flex-1 bg-white border-2 border-indigo-600 rounded-xl py-3 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-xl font-bold text-gray-900">50%</span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Discount</span>
                </div>
                <div className="flex-1 py-3 flex flex-col items-center justify-center opacity-60">
                    <span className="text-xl font-bold text-white">40%</span>
                    <span className="text-[10px] text-blue-100 uppercase font-bold">Discount</span>
                </div>
                <div className="flex-1 py-3 flex flex-col items-center justify-center opacity-60">
                    <span className="text-xl font-bold text-white">30%</span>
                    <span className="text-[10px] text-blue-100 uppercase font-bold">Discount</span>
                </div>
           </div>
       </div>
       
       <div className="px-6 py-4">
           <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Showing 50% Off Hospitals</p>
           
           <div className="space-y-3">
               {[
                   {name: 'Horyaal Hospital', loc: 'Tarabuunka Road, Hodan'},
                   {name: 'Hodan Hospital', loc: 'Hodan District'},
                   {name: 'Somali Sudanese Hospital', loc: 'Hodan, Soona Key'},
                   {name: 'Wadajir Hospital', loc: 'Wadajir'}
               ].map((h, i) => (
                   <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                       <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                               <Building2 size={20} />
                           </div>
                           <div>
                               <h3 className="font-bold text-gray-900 text-sm">{h.name}</h3>
                               <p className="text-[11px] text-gray-400 uppercase flex items-center gap-1">
                                   <span className="inline-block w-1.5 h-1.5 rounded-full border border-gray-400"></span>
                                   {h.loc}
                               </p>
                           </div>
                       </div>
                       <ChevronRight size={20} className="text-gray-300" />
                   </div>
               ))}
           </div>
       </div>
    </div>
  );
};