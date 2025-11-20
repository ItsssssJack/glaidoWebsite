import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">FAQ</h2>
        <div className="space-y-4">
          {FAQS.map((item, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-2xl overflow-hidden hover:border-[#BFF549]/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-8">{item.question}</h3>
                <ChevronDown
                  className={`flex-shrink-0 text-[#BFF549] transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-400 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};