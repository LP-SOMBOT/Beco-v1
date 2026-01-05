import React from 'react';
import { 
  LayoutDashboard, 
  Rss, 
  BarChart2, 
  Percent, 
  CheckSquare, 
  Users, 
  Menu 
} from 'lucide-react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { id: Screen.DASHBOARD, icon: <LayoutDashboard size={24} strokeWidth={2} />, label: 'Dash' },
    { id: Screen.BAAFIYE, icon: <Rss size={24} strokeWidth={2} />, label: 'Baafiye' },
    { id: Screen.ANALYSIS, icon: <BarChart2 size={24} strokeWidth={2} />, label: 'Analysis' },
    { id: Screen.DISCOUNTS, icon: <Percent size={24} strokeWidth={2} />, label: 'Disc' },
    { id: Screen.TASKS, icon: <CheckSquare size={24} strokeWidth={2} />, label: 'Tasks' },
    { id: Screen.PORTAL, icon: <Users size={24} strokeWidth={2} />, label: 'Portal' },
    { id: Screen.SERVICES, icon: <Menu size={24} strokeWidth={2} />, label: 'More' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-5 pointer-events-none">
      <div className="pointer-events-auto mx-4 w-full max-w-[400px] bg-white/90 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-2xl flex items-center justify-between px-2 py-2 ring-1 ring-black/5">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id || (item.id === Screen.SERVICES && [Screen.QURAN, Screen.HOSPITALS, Screen.EXISAABI].includes(currentScreen));
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative flex-1 flex flex-col items-center justify-center py-1 transition-all duration-300 ease-out rounded-xl group select-none
                ${isActive ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600 active:scale-90'}
              `}
            >
              {/* Active Background Pill */}
              <div className={`absolute inset-x-1 inset-y-0 bg-indigo-50/80 rounded-xl transition-all duration-300 ease-out origin-center -z-10
                 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
              `} />
              
              {/* Icon */}
              <div className={`transition-all duration-300 ease-out transform ${isActive ? '-translate-y-1 scale-105' : 'group-hover:scale-105'}`}>
                {item.icon}
              </div>

              {/* Label */}
              <span className={`text-[9px] font-bold tracking-tight transition-all duration-300 ease-out leading-none mt-1
                 ${isActive ? 'opacity-100 translate-y-0 text-indigo-700' : 'opacity-60 scale-90 translate-y-0.5'}
              `}>
                {item.label}
              </span>
              
              {/* Active Indicator Dot */}
              <div className={`absolute -bottom-1 w-8 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 transition-all duration-500
                 ${isActive ? 'opacity-40' : ''}
              `}></div>
            </button>
          );
        })}
      </div>
    </div>
  );
};