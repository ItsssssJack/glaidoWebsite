import React from 'react';
import { APP_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex justify-center mb-12">
        <img src="/glaido-mark-green.svg" alt="Glaido" className="h-12" />
      </div>

      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="flex flex-col gap-3 text-sm text-center">
          <span className="font-bold text-white mb-1">Company</span>
          <a href="#" className="text-gray-500 hover:text-[#BFF549]">About</a>
          <a href="#" className="text-gray-500 hover:text-[#BFF549]">Blog</a>
          <a href="#" className="text-gray-500 hover:text-[#BFF549]">Careers</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
         <p className="text-xs text-gray-600">© Copyright 2025 Glaido. All Rights Reserved.</p>
      </div>
    </footer>
  );
};