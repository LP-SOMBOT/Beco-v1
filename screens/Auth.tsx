import React, { useState } from 'react';
import { Mail, Lock, User, Phone, MapPin, ArrowRight, Zap } from 'lucide-react';
import { Screen } from '../types';

interface AuthProps {
  onLogin: () => void;
}

export const AuthScreen: React.FC<AuthProps> = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-xl w-full max-w-md rounded-3xl shadow-xl p-8 border border-white">
        
        {/* Logo Area */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-4">
             <div className="flex items-center text-xl font-bold tracking-tighter">
                <span>be</span>
                <span className="text-red-500 relative">
                    co
                    <Zap size={12} className="absolute -top-1 -right-2 text-red-500 fill-current" />
                </span>
             </div>
          </div>
          
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
            {isRegister ? 'Diiwaan Gelin' : 'Welcome Back'}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {isRegister ? 'Ka mid noqo kooxda Beco Energy' : 'Sign in to manage your account'}
          </p>
        </div>

        {/* Forms */}
        <div className="space-y-4">
          
          {isRegister && (
             <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={20} className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Magaca oo Saddexan"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-2xl transition-all outline-none text-gray-700 font-medium"
                />
             </div>
          )}

          {isRegister && (
             <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone size={20} className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input
                  type="tel"
                  placeholder="Telefoonka (e.g. 61xxxxxxx)"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-2xl transition-all outline-none text-gray-700 font-medium"
                />
             </div>
          )}

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail size={20} className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder={isRegister ? "Email Address" : "Email or Agent ID"}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-2xl transition-all outline-none text-gray-700 font-medium"
            />
          </div>

          {isRegister && (
             <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin size={20} className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <select
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-2xl transition-all outline-none text-gray-700 font-medium appearance-none"
                >
                    <option value="" disabled selected>Aaga (Zone)</option>
                    <option value="wadajir">Wadajir</option>
                    <option value="hodan">Hodan</option>
                </select>
             </div>
          )}

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock size={20} className="text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            <input
              type="password"
              placeholder={isRegister ? "Abuur Password" : "Password"}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-2xl transition-all outline-none text-gray-700 font-medium"
            />
          </div>

          {!isRegister && (
            <div className="flex justify-end">
              <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                Forgot Password?
              </button>
            </div>
          )}

          <button
            onClick={onLogin}
            className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 transition-all transform active:scale-95"
          >
            {isRegister ? 'Is Diwaan Geli' : 'Sign In'} <ArrowRight size={20} />
          </button>

          <div className="relative py-4">
             <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
             </div>
             <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 text-gray-400 uppercase tracking-wider font-semibold">
                    {isRegister ? 'Ama' : 'Or'}
                </span>
             </div>
          </div>

          <button
            onClick={() => setIsRegister(!isRegister)}
            className="w-full bg-white border-2 border-gray-100 hover:border-gray-200 text-indigo-600 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all"
          >
             {isRegister ? <User size={20} /> : <User size={20} />}
             {isRegister ? 'Login to Existing Account' : 'Create New Account'}
          </button>

        </div>
      </div>
    </div>
  );
};