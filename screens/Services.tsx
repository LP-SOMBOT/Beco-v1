import React from 'react';
import { User, Smartphone, FileText, Wifi, Heart, BookOpen, Calculator } from 'lucide-react';
import { Screen } from '../types';

interface ServicesProps {
    onNavigate: (screen: Screen) => void;
}

export const ServicesScreen: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    { id: Screen.QURAN, label: 'QURAN', icon: <Smartphone size={28} />, color: 'bg-green-500' },
    { id: Screen.HOSPITALS, label: 'HOSPITALS', icon: <Heart size={28} />, color: 'bg-pink-500' },
    { id: Screen.REPORTS, label: 'REPORTS', icon: <FileText size={28} />, color: 'bg-purple-500' },
    { id: 'BUNDLES', label: 'BUNDLES', icon: <Wifi size={28} />, color: 'bg-cyan-500' },
    { id: 'ASSISTANTS', label: 'ASSISTANTS', icon: <User size={28} />, color: 'bg-orange-500' },
    { id: Screen.EXISAABI, label: 'EXISAABI', icon: <Calculator size={28} />, color: 'bg-indigo-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-6 pt-12 pb-24 rounded-b-[40px] relative overflow-hidden">
        <div className="relative z-10 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold text-white mb-1">Services</h1>
                <p className="text-blue-100 text-sm font-medium tracking-wide opacity-80">TOOLS & UTILITIES</p>
            </div>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white">
                <User size={24} />
            </div>
        </div>
      </div>

      <div className="px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
                <button 
                    key={service.id}
                    onClick={() => {
                        if (Object.values(Screen).includes(service.id as Screen)) {
                            onNavigate(service.id as Screen);
                        }
                    }}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center aspect-[4/3] transition-transform active:scale-95"
                >
                    <div className={`w-16 h-16 ${service.color} rounded-2xl shadow-lg flex items-center justify-center text-white mb-4`}>
                        {service.icon}
                    </div>
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">{service.label}</span>
                </button>
            ))}
        </div>
      </div>
    </div>
  );
};