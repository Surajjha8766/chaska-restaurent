import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Home, Calendar } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#111111] text-white px-4 py-24">
      <div className="max-w-md text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center mx-auto border border-[#FF6B00]/30 shadow-2xl glow-orange">
          <Utensils className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-7xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-amber-300">
            404
          </h1>
          <h2 className="text-2xl font-serif font-bold text-white">
            Dish Not On The Menu!
          </h2>
          <p className="text-xs text-gray-400">
            The page you are looking for has moved or does not exist. Explore our authentic North Indian menu or reserve a table!
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="px-5 py-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Return To Home
          </Link>
          <Link
            to="/menu"
            className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all flex items-center gap-2"
          >
            <Utensils className="w-4 h-4 text-[#FF6B00]" />
            Explore Menu
          </Link>
        </div>
      </div>
    </div>
  );
};
