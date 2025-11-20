import React, { useState, useEffect } from 'react';

const EXAMPLES = [
  {
    before: "Um, can you like send me that file when you get a chance maybe?",
    after: "Can you send me that file when you get a chance?"
  },
  {
    before: "So yeah I was thinking we should probably meet up sometime next week?",
    after: "Let's meet up next week."
  },
  {
    before: "Hey just wanted to check in and see if you had any updates on the project?",
    after: "Any updates on the project?"
  },
  {
    before: "I'm gonna need you to uh review this document whenever you have time.",
    after: "Please review this document when you have time."
  },
  {
    before: "Can you maybe help me out with this thing I'm working on right now?",
    after: "Can you help me with this?"
  }
];

export const BeforeAfter: React.FC = () => {
  const [currentExample, setCurrentExample] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentExample((prev) => (prev + 1) % EXAMPLES.length);
        setTimeout(() => setIsAnimating(false), 50);
      }, 100);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BFF549]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Speak Naturally. <span className="text-[#BFF549]">Appears Instantly.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Your words appear as polished text in real-time. No editing—just instant transformation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden hover:border-[#BFF549]/30 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#BFF549] to-transparent opacity-50"></div>

            <div className="space-y-6">
              {/* You Said */}
              <div className="relative">
                <div className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">
                  You Said
                </div>
                <div className="min-h-[4rem] flex items-center overflow-hidden">
                  <p className={`text-base md:text-lg text-gray-400 transition-all duration-100 ${isAnimating ? 'opacity-0 scale-95 translate-x-2' : 'opacity-100 scale-100 translate-x-0'}`}>
                    "{EXAMPLES[currentExample].before}"
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-white/10"></div>
                <div className={`w-8 h-8 rounded-full bg-[#BFF549] flex items-center justify-center transition-all duration-100 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-black">
                    <path d="M3 8L13 8M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1 h-px bg-white/10"></div>
              </div>

              {/* Glaido Writes */}
              <div className="relative">
                <div className="text-xs font-mono text-[#BFF549] mb-3 uppercase tracking-wider font-bold">
                  Glaido Writes
                </div>
                <div className="min-h-[4rem] flex items-center overflow-hidden">
                  <p className={`text-base md:text-lg text-white font-medium transition-all duration-100 ${isAnimating ? 'opacity-0 scale-95 -translate-x-2' : 'opacity-100 scale-100 translate-x-0'}`}>
                    "{EXAMPLES[currentExample].after}"
                  </p>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex gap-2 justify-center pt-4">
                {EXAMPLES.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentExample
                        ? 'w-8 bg-[#BFF549]'
                        : 'w-1.5 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Real-time transformation • Removes filler words instantly • Perfect grammar & punctuation • No delays
          </p>
        </div>
      </div>
    </section>
  );
};
