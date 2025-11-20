import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Finish Your Work in <br />
            <span className="text-[#BFF549]">1/5th the Time</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Join 10,000+ people who've stopped wasting hours on typing. Works everywhere, private by default.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className={`glass-panel p-8 rounded-3xl border border-white/5 hover:border-[#BFF549]/30 transition-all duration-300 group ${
                feature.colSpan === 2 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-[#BFF549] group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};