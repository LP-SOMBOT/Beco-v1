import React from 'react';
import { ArrowLeft, Search, Mic, Play, Pause } from 'lucide-react';
import { Screen } from '../types';

interface QuranProps {
    onBack: () => void;
}

export const QuranScreen: React.FC<QuranProps> = ({ onBack }) => {
  const surahs = [
    { id: 1, name: 'Al-Fatihah', verses: 7, isPlaying: false },
    { id: 2, name: 'Al-Baqarah', verses: 286, isPlaying: false },
    { id: 3, name: "Ali 'Imran", verses: 200, isPlaying: false },
    { id: 4, name: 'An-Nisa', verses: 176, isPlaying: false },
    { id: 5, name: "Al-Ma'idah", verses: 120, isPlaying: false },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
       <div className="bg-[#00a884] p-4 text-white pb-8 rounded-b-[32px] shadow-lg">
          <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                  <button onClick={onBack} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                      <ArrowLeft size={20} />
                  </button>
                  <div>
                      <h1 className="text-xl font-bold">Quran Kareem</h1>
                      <p className="text-xs opacity-80 uppercase tracking-wider">Beco Islamic</p>
                  </div>
              </div>
              <button className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
                  <Mic size={12} /> Mishary
              </button>
          </div>

          <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search Surah..." 
                className="w-full bg-white text-gray-800 rounded-2xl pl-12 pr-4 py-3 font-medium shadow-lg outline-none"
              />
          </div>

          <div className="flex gap-2 mt-6 justify-between px-1">
              <button className="flex-1 bg-[#008f70] py-2 rounded-xl text-sm font-semibold shadow-inner text-white/90">Tafsiir</button>
              <button className="flex-1 bg-white text-[#00a884] py-2 rounded-xl text-sm font-bold shadow-md">Dhageysi</button>
              <button className="flex-1 bg-[#008f70] py-2 rounded-xl text-sm font-semibold shadow-inner text-white/90">Aqriso</button>
              <button className="flex-1 bg-[#008f70] py-2 rounded-xl text-sm font-semibold shadow-inner text-white/90">Quiz</button>
          </div>
       </div>

       <div className="p-4 space-y-3">
           {surahs.map((surah) => (
               <div key={surah.id} className={`p-4 rounded-2xl flex items-center justify-between ${surah.id === 1 ? 'bg-[#e0f2f1]' : 'bg-transparent hover:bg-gray-50'}`}>
                   <div className="flex items-center gap-4">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${surah.id === 1 ? 'bg-[#00a884] text-white' : 'bg-gray-100 text-gray-400'}`}>
                           {surah.id}
                       </div>
                       <div>
                           <h3 className={`font-bold ${surah.id === 1 ? 'text-[#00695c]' : 'text-gray-900'}`}>{surah.name}</h3>
                           <p className="text-xs text-gray-400">{surah.verses} Verses</p>
                       </div>
                   </div>
                   <button className={`w-10 h-10 rounded-full flex items-center justify-center ${surah.id === 1 ? 'bg-[#b2dfdb] text-[#00695c]' : 'bg-green-50 text-green-500'}`}>
                       <Play size={20} fill="currentColor" />
                   </button>
               </div>
           ))}
       </div>
       
       {/* Player Bar */}
       <div className="fixed bottom-0 left-0 right-0 bg-[#1e293b] text-white p-4 flex items-center justify-between z-50 rounded-t-2xl shadow-2xl pb-8">
           <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center">
                   <Mic size={20} />
               </div>
               <div>
                   <h4 className="font-bold text-sm">Al-Fatihah</h4>
                   <p className="text-[10px] text-gray-400">RECITER: MISHARY</p>
               </div>
           </div>
           <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900">
               <Pause size={20} fill="currentColor" />
           </button>
       </div>
    </div>
  );
};