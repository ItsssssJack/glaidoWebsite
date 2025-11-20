import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_TIERS } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#BFF549]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Start Saving <br/> 20 Hours This Month
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier, idx) => (
            <div 
              key={idx}
              className={`relative p-10 rounded-3xl border flex flex-col ${
                tier.highlight 
                  ? 'bg-[#BFF549] border-[#BFF549] text-black' 
                  : 'glass-panel border-white/10 text-white'
              }`}
            >
               {tier.highlight && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                       Most Popular
                   </div>
               )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tighter">{tier.price}</span>
                  {tier.period && <span className={`text-sm ${tier.highlight ? 'text-black/60' : 'text-gray-400'}`}>{tier.period}</span>}
                </div>
                <p className={`mt-4 text-sm ${tier.highlight ? 'text-black/70' : 'text-gray-400'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${tier.highlight ? 'bg-black/10' : 'bg-white/10'}`}>
                        <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${tier.highlight ? 'font-medium' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold text-sm transition-transform hover:scale-105 ${
                tier.highlight 
                  ? 'bg-black text-white hover:bg-gray-900' 
                  : 'bg-white text-black hover:bg-gray-200'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};