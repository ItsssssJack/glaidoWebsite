import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold mb-4">How People Got Their <span className="text-[#BFF549]">Time Back</span></h2>
           <p className="text-gray-400">Real time savings from real users.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-[#BFF549]/30 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6">
                 <Quote className="text-[#BFF549]/40 w-10 h-10 rotate-180 mb-4" />
                 <p className="text-lg text-gray-200 leading-relaxed">"{testimonial.quote}"</p>
              </div>

              <div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="font-bold text-white leading-tight">{testimonial.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{testimonial.role}</span>
                    <span className="w-1 h-1 rounded-full bg-[#BFF549]"></span>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Logo Placement inside card */}
              <div className="mt-4 flex justify-end opacity-20 grayscale">
                 <div className="h-6 flex items-center font-bold text-lg">
                    {testimonial.company.toUpperCase()}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};