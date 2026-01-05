import React from 'react';
import { ChevronDown, Moon, TrendingUp, Wallet, Users, Phone } from 'lucide-react';

export const DashboardScreen: React.FC = () => {
  return (
    <div className="p-4 space-y-6 pb-24">
      {/* Header / Next Solah */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-3xl p-6 text-white shadow-lg shadow-indigo-500/20 relative overflow-hidden">
        <div className="relative z-10 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs font-semibold tracking-wider opacity-80 uppercase">Mudane LP</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight">0h 5m <span className="text-xl font-medium opacity-70">16s</span></h2>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center min-w-[80px]">
             <span className="text-[10px] font-bold opacity-70 uppercase block mb-1">Next Solah</span>
             <div className="flex items-center justify-center gap-1">
                <Moon size={12} className="text-yellow-300 fill-current" />
                <span className="font-bold text-sm">Duhur</span>
             </div>
             <span className="text-[10px] opacity-70">- 4h 42m</span>
          </div>
        </div>
      </div>

      {/* Daily Goal */}
      <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center justify-between">
         <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <TrendingUp size={24} />
             </div>
             <div>
                <h3 className="font-bold text-gray-900">Daily Goal</h3>
                <p className="text-xs text-gray-500">0% Complete <span className="mx-1">•</span> Tap for details</p>
             </div>
         </div>
         <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
            <ChevronDown size={20} />
         </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Metric 1 */}
        <div className="bg-white rounded-3xl p-5 shadow-sm space-y-3">
           <div className="w-10 h-10 rounded-xl bg-blue-500 shadow-md shadow-blue-500/20 flex items-center justify-center">
              <Wallet className="text-white" size={20} />
           </div>
           <div>
              <h3 className="text-2xl font-bold text-gray-900">$0</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Due</p>
           </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white rounded-3xl p-5 shadow-sm space-y-3 relative overflow-hidden">
           <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">+12%</div>
           <div className="w-10 h-10 rounded-xl bg-green-500 shadow-md shadow-green-500/20 flex items-center justify-center">
              <Users className="text-white" size={20} />
           </div>
           <div>
              <h3 className="text-2xl font-bold text-gray-900">0</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Paid Count</p>
           </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white rounded-3xl p-5 shadow-sm space-y-3">
           <div className="w-10 h-10 rounded-xl bg-purple-500 shadow-md shadow-purple-500/20 flex items-center justify-center">
              <TrendingUp className="text-white" size={20} />
           </div>
           <div>
              <h3 className="text-2xl font-bold text-gray-900">0</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Target</p>
           </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white rounded-3xl p-5 shadow-sm space-y-3">
           <div className="w-10 h-10 rounded-xl bg-orange-500 shadow-md shadow-orange-500/20 flex items-center justify-center">
              <Phone className="text-white" size={20} />
           </div>
           <div>
              <h3 className="text-2xl font-bold text-gray-900">0</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Calls</p>
           </div>
        </div>
      </div>

      {/* Overview Chart Placeholder */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">
         <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
            <h3 className="text-lg font-bold text-gray-900">Customer Status Overview</h3>
            <div className="ml-auto flex items-center gap-1.5">
               <div className="w-2 h-2 rounded-full bg-green-500"></div>
               <span className="text-xs font-bold text-green-500 uppercase">Live</span>
            </div>
         </div>
         <p className="text-sm text-gray-500">Real-time data from Baafiye</p>
         
         {/* Placeholder for chart */}
         <div className="mt-6 h-32 flex items-end justify-between gap-2 px-2 opacity-50">
             {[40, 70, 30, 80, 50, 90, 60].map((h, i) => (
                 <div key={i} style={{height: `${h}%`}} className="w-full bg-gradient-to-t from-indigo-100 to-indigo-50 rounded-t-sm"></div>
             ))}
         </div>
      </div>
    </div>
  );
};