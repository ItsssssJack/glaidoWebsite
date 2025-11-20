import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';

export const Platforms: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            On-the-go or <span className="text-[#BFF549]">at your desk</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Seamless voice-to-text in every application on your iPhone or computer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mac */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 text-center hover:border-[#BFF549]/30 transition-colors group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Monitor className="text-[#BFF549]" size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-2">macOS</h3>
            <p className="text-gray-400 text-sm">
              Works in every app on your Mac
            </p>
          </div>

          {/* Windows */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 text-center hover:border-[#BFF549]/30 transition-colors group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Monitor className="text-[#BFF549]" size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Windows</h3>
            <p className="text-gray-400 text-sm">
              Full support across all Windows apps
            </p>
          </div>

          {/* iPhone */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 text-center hover:border-[#BFF549]/30 transition-colors group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Smartphone className="text-[#BFF549]" size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-2">iPhone</h3>
            <p className="text-gray-400 text-sm">
              Dictate on-the-go from anywhere
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Your personal dictionary and settings sync seamlessly between all devices
          </p>
        </div>
      </div>
    </section>
  );
};
