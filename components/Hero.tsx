import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden hero-gradient">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-6 animate-in fade-in zoom-in duration-1000">
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#BFF549] backdrop-blur-sm">
            ⚡ 10,000+ people now work 5x faster
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
          Write 5x Faster <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">
            in every app
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Speak naturally. Your words appear instantly.
          <span className="text-white block mt-2">Save 20+ hours every month.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#BFF549] text-black rounded-xl font-bold text-lg hover:bg-[#aee035] hover:scale-105 transition-all duration-200 shadow-[0_0_40px_-10px_rgba(191,245,73,0.5)] flex items-center justify-center gap-2">
            <img src="/apple.png" alt="Apple" className="h-5 w-auto object-contain" />
            Try Glaido Free
          </button>
        </div>

        {/* Improved Visual representation of "Voice vs Typing" */}
        <div className="mt-24 w-full max-w-4xl mx-auto">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-[#BFF549]/30 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#BFF549] to-transparent opacity-50"></div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Left: Comparison Graph */}
                    <div className="flex-1 w-full space-y-6">
                        {/* Typing */}
                        <div>
                            <div className="flex justify-between text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
                                <span>Typing (40 wpm)</span>
                                <span>Too slow</span>
                            </div>
                            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-[20%] bg-gray-500 rounded-full"></div>
                            </div>
                        </div>

                        {/* Voice */}
                        <div>
                            <div className="flex justify-between text-xs font-mono text-[#BFF549] mb-2 uppercase tracking-wider font-bold">
                                <span>Glaido Voice (200+ wpm)</span>
                                <span>Lightning Fast</span>
                            </div>
                            <div className="h-6 bg-white/10 rounded-full overflow-hidden relative">
                                <div className="absolute inset-0 bg-[#BFF549]/20 animate-pulse"></div>
                                <div className="h-full w-full bg-gradient-to-r from-[#BFF549] to-[#aee035] rounded-full shadow-[0_0_20px_rgba(191,245,73,0.4)] relative overflow-hidden">
                                     <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:20px_20px] animate-[scroll_1s_linear_infinite]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Big Stat */}
                    <div className="md:border-l border-white/10 md:pl-8 flex flex-col items-center md:items-start">
                        <div className="flex items-baseline gap-1">
                             <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">5</span>
                             <span className="text-4xl md:text-5xl font-black text-[#BFF549] tracking-tighter">x</span>
                        </div>
                        <span className="text-lg font-medium text-gray-400 uppercase tracking-widest">Faster</span>
                        <p className="text-xs text-gray-600 mt-2 max-w-[150px] text-center md:text-left">
                            Save ~20 hours/month by speaking instead.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};