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
    { id: Screen.DASHBOARD, icon: <LayoutDashboard size={20} />, label: 'Dash' },
    { id: Screen.BAAFIYE, icon: <Rss size={20} />, label: 'Baafiye' },
    { id: Screen.ANALYSIS, icon: <BarChart2 size={20} />, label: 'Analysis' },
    { id: Screen.DISCOUNTS, icon: <Percent size={20} />, label: 'Disc' },
    { id: Screen.TASKS, icon: <CheckSquare size={20} />, label: 'Tasks' },
    { id: Screen.PORTAL, icon: <Users size={20} />, label: 'Portal' },
    { id: Screen.SERVICES, icon: <Menu size={20} />, label: 'More' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2 pb-5 z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id || (item.id === Screen.SERVICES && [Screen.QURAN, Screen.HOSPITALS, Screen.EXISAABI].includes(currentScreen));
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 ${
                isActive ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className={`${isActive ? 'bg-indigo-50 p-1.5 rounded-xl' : ''}`}>
                {item.icon}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};