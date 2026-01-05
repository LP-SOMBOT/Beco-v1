import React, { useEffect, useState } from 'react';
import { X, Download, Zap } from 'lucide-react';

export const InstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] p-4 animate-in slide-in-from-top duration-500">
      <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-2xl p-3 flex items-center justify-between gap-3 max-w-md mx-auto ring-1 ring-black/5">
        
        {/* Left: Icon & Text */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 shadow-md text-white">
             <Zap size={20} fill="currentColor" className="text-white" />
          </div>
          <div className="flex flex-col truncate">
            <h3 className="text-sm font-bold text-gray-900 leading-tight">Install Beco App</h3>
            <p className="text-xs text-gray-500 truncate">Get the full experience with our PWA</p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button 
            onClick={handleInstallClick}
            className="bg-[#4F46E5] hover:bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
          >
            Install
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100/50 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};