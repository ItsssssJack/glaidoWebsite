import React from 'react';
import { Shield, Lock, Database, Eye } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#BFF549]/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your Privacy. <span className="text-[#BFF549]">Your Data.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We built Glaido with privacy at its core. Your voice is yours alone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <div className="w-14 h-14 rounded-full bg-[#BFF549]/10 flex items-center justify-center mb-6">
              <Database className="text-[#BFF549]" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Zero Data Retention</h3>
            <p className="text-gray-400 leading-relaxed">
              Your voice dictations are never stored. In local mode, everything processes on your device. For Pro AI features, data is transiently processed and immediately deleted.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <div className="w-14 h-14 rounded-full bg-[#BFF549]/10 flex items-center justify-center mb-6">
              <Eye className="text-[#BFF549]" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Never Used for Training</h3>
            <p className="text-gray-400 leading-relaxed">
              None of your dictation data will ever be stored or used for model training by us or any third party. Your words stay private.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <div className="w-14 h-14 rounded-full bg-[#BFF549]/10 flex items-center justify-center mb-6">
              <Lock className="text-[#BFF549]" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Everything Stays Local</h3>
            <p className="text-gray-400 leading-relaxed">
              All history, personal dictionary, and settings stay local on your device. You're in complete control.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <div className="w-14 h-14 rounded-full bg-[#BFF549]/10 flex items-center justify-center mb-6">
              <Shield className="text-[#BFF549]" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Open Source</h3>
            <p className="text-gray-400 leading-relaxed">
              Our code is open source. You can verify exactly what we're doing with your data. Nothing hidden. Full transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
