import React, { useEffect, useState } from 'react';
import { X, Download } from 'lucide-react';

export const InstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Standard PWA install prompt logic
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
      console.log("Beco PWA: captured beforeinstallprompt");
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Hide if installed
    window.addEventListener('appinstalled', () => {
      setIsVisible(false);
      setDeferredPrompt(null);
      console.log("Beco PWA: App installed");
    });

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to install prompt: ${outcome}`);
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setIsVisible(false);
      }
    } else {
        console.log("Install prompt not available");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] p-3 animate-in slide-in-from-top duration-500">
      <div className="bg-white/90 backdrop-blur-xl border border-blue-100/50 shadow-xl shadow-indigo-500/10 rounded-2xl p-4 flex items-center justify-between gap-4 mx-auto max-w-md ring-1 ring-black/5">
        
        {/* Left: App Icon Placeholder */}
        <div className="shrink-0">
             <div className="w-12 h-12 bg-[#4F46E5] rounded-xl flex items-center justify-center shadow-md shadow-indigo-500/30 text-white">
                 <Download size={24} strokeWidth={3} />
             </div>
        </div>

        {/* Center: Text */}
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="text-sm font-bold text-gray-900 leading-tight">Install Beco App</h3>
          <p className="text-xs text-gray-500 leading-tight mt-0.5 truncate">Get the full experience with our PWA</p>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={handleInstallClick}
            className="bg-[#4F46E5] hover:bg-indigo-600 active:scale-95 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-sm transition-all"
          >
            Install
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="w-6 h-6 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};