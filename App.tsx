import React, { useState } from 'react';
import { Screen, User } from './types';
import { AuthScreen } from './screens/Auth';
import { DashboardScreen } from './screens/Dashboard';
import { BottomNav } from './components/BottomNav';
import { BaafiyeScreen } from './screens/Baafiye';
import { AnalysisScreen } from './screens/Analysis';
import { ServicesScreen } from './screens/Services';
import { QuranScreen } from './screens/Quran';
import { HospitalScreen } from './screens/Hospitals';
import { ExisaabiScreen } from './screens/Exisaabi';
import { Megaphone, Search, Filter, Plus, ChevronLeft, UserCircle } from 'lucide-react';

// Simple placeholder components for other screens to complete the demo
const PlaceholderScreen: React.FC<{ title: string; message: string; color: string }> = ({ title, message, color }) => (
    <div className="min-h-screen bg-white">
        <div className={`p-6 ${color} text-white pb-12 rounded-b-[32px] shadow-lg`}>
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-xs font-bold opacity-80 uppercase">0 Issues Active</p>
            </div>
            
            {title === 'Task Board' && (
                <div className="mt-6 flex gap-2">
                     <div className="flex-1 bg-white/20 backdrop-blur-md rounded-xl p-2 flex items-center">
                         <Search className="text-white/70 mr-2" size={18} />
                         <span className="text-sm text-white/70">Search Name or SQN...</span>
                     </div>
                     <button className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
                         <Filter className="text-white" size={20} />
                     </button>
                </div>
            )}
            
            {title === 'Active Discounts' && (
                <div className="mt-4 flex justify-end">
                    <button className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg font-medium transition">
                        Deselect All
                    </button>
                </div>
            )}
        </div>

        {title === 'Task Board' && (
             <div className="px-4 -mt-6">
                 <div className="bg-white rounded-xl shadow-lg p-1 flex">
                     {['All Tasks', 'Pending', 'Solving', 'Done'].map((t, i) => (
                         <button key={t} className={`flex-1 py-2 text-xs font-bold rounded-lg ${i === 0 ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500'}`}>{t}</button>
                     ))}
                 </div>
             </div>
        )}

        <div className="flex flex-col items-center justify-center p-12 text-center mt-12">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <div className="opacity-20 text-gray-500">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">
                {title === 'Active Discounts' ? 'No active discounts found.' : 'No Tickets Found'}
            </h2>
            <p className="text-sm text-gray-500 max-w-xs">
                 {message}
            </p>
        </div>
        
        {title === 'Task Board' && (
            <div className="fixed bottom-24 right-4">
                <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg shadow-blue-500/40">
                    <Plus size={24} />
                </button>
            </div>
        )}
    </div>
);

const PortalScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-24">
        <div className="bg-[#f43f5e] p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
                 <div className="relative">
                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#f43f5e]">
                         <UserCircle size={24} />
                     </div>
                     <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#f43f5e] rounded-full"></div>
                 </div>
                 <div>
                     <h1 className="font-bold text-lg leading-none">Portal</h1>
                     <p className="text-[10px] opacity-90 uppercase mt-1">SELECT A COLLECTOR</p>
                 </div>
            </div>
            <button className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition">
                <Megaphone size={20} />
            </button>
        </div>
        
        <div className="px-4 py-3">
            <h2 className="text-xs font-bold text-indigo-900 uppercase tracking-wide mb-3">Branch WSH (10)</h2>
            <div className="space-y-3">
                {[
                    {name: 'Abdullhi Ibrahim Barre', msg: 'Haa', time: 'Just now', color: 'bg-indigo-500', online: true},
                    {name: 'Abdulqadir mohaud', msg: 'No messages yet', time: '', color: 'bg-blue-500', online: true},
                    {name: 'Zakariye mahad maxmuud', msg: 'No messages yet', time: '', color: 'bg-indigo-500', online: true},
                    {name: 'LP', msg: 'No messages yet', time: '', color: 'bg-indigo-600', isYou: true, online: true},
                    {name: 'Masalah jimcaale', msg: 'No messages yet', time: '', color: 'bg-blue-500', online: true},
                    {name: 'ducaale', msg: 'No messages yet', time: '', color: 'bg-blue-500', online: true},
                ].map((u, i) => (
                    <div key={i} className={`bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 ${u.isYou ? 'bg-indigo-50 border-indigo-200' : ''}`}>
                        <div className={`w-12 h-12 ${u.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md relative`}>
                            {u.name.charAt(0)}
                            {u.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>}
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-gray-900 text-sm">{u.name}</h3>
                                {u.isYou && <span className="text-[10px] bg-gray-200 px-1.5 py-0.5 rounded text-gray-600 font-bold">YOU</span>}
                            </div>
                            <p className={`text-xs mt-0.5 ${u.msg === 'Haa' ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                                {u.msg === 'Haa' ? <span className="text-green-600">📍 Fs</span> : '📍 ' + (u.name.split(' ')[0].substring(0,2).toLowerCase())}
                                {u.msg !== 'No messages yet' && <span className="block text-gray-500 font-normal">{u.msg}</span>}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.DASHBOARD);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.DASHBOARD:
        return <DashboardScreen />;
      case Screen.BAAFIYE:
        return <BaafiyeScreen />;
      case Screen.ANALYSIS:
        return <AnalysisScreen />;
      case Screen.SERVICES:
        return <ServicesScreen onNavigate={setCurrentScreen} />;
      case Screen.QURAN:
        return <QuranScreen onBack={() => setCurrentScreen(Screen.SERVICES)} />;
      case Screen.HOSPITALS:
        return <HospitalScreen onBack={() => setCurrentScreen(Screen.SERVICES)} />;
      case Screen.EXISAABI:
        return <ExisaabiScreen onBack={() => setCurrentScreen(Screen.SERVICES)} />;
      case Screen.DISCOUNTS:
        return <PlaceholderScreen 
                  title="Active Discounts" 
                  message="Mark a customer as 'Discount' in Baafiye to see them here." 
                  color="bg-gradient-to-r from-blue-600 to-indigo-600"
               />;
      case Screen.TASKS:
        return <PlaceholderScreen 
                  title="Task Board" 
                  message="" 
                  color="bg-gradient-to-r from-purple-600 to-blue-500"
               />;
      case Screen.PORTAL:
        return <PortalScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  if (!isAuthenticated) {
    return <AuthScreen onLogin={handleLogin} />;
  }

  // Full screen views that don't show bottom nav
  const isFullScreen = [Screen.QURAN, Screen.HOSPITALS, Screen.EXISAABI].includes(currentScreen);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <div className="max-w-md mx-auto min-h-screen bg-gray-50 relative shadow-2xl overflow-hidden">
        {renderScreen()}
        {!isFullScreen && (
            <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
        )}
      </div>
    </div>
  );
}

export default App;