import React from 'react';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Watch Someone Finish in 2 Minutes <br />
          <span className="text-[#BFF549]">What Takes You 10</span>
        </h2>

        <div className="relative max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(191,245,73,0.2)] border border-white/10 group cursor-pointer">
          {/* Video Placeholder / Background */}
          <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605256585681-455837661b18?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105"></div>
            
            {/* Play Button */}
            <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-[#BFF549] rounded-full flex items-center justify-center pl-2 shadow-lg shadow-[#BFF549]/30 group-hover:scale-110 transition-all duration-300">
              <Play fill="black" className="w-8 h-8 md:w-10 md:h-10 text-black" />
            </div>
            
            {/* UI Mockup overlay elements */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs font-mono text-white/80 uppercase tracking-widest">Live Demo Recording</span>
                 </div>
                 <span className="text-xs font-mono text-white/60">01:42</span>
            </div>
          </div>
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
        </div>
        
        <p className="mt-8 text-gray-400 max-w-2xl mx-auto">
          Watch a real user draft a complete email, code review, and Slack message in the time it used to take them to write one paragraph.
        </p>
      </div>
    </section>
  );
};