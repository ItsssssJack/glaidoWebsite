import React from 'react';

export const SectionDivider: React.FC = () => {
  return (
    <div className="relative h-24 w-full overflow-hidden pointer-events-none">
      {/* Muted Green Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-[radial-gradient(ellipse_at_center,_rgba(191,245,73,0.15)_0%,_rgba(0,0,0,0)_70%)] blur-xl" />
      
      {/* Subtle Line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#BFF549]/20 to-transparent" />
    </div>
  );
};