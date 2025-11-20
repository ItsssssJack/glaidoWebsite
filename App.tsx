import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { Features } from './components/Features';
import { DemoSection } from './components/DemoSection';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { VideoSection } from './components/VideoSection';
import { SectionDivider } from './components/SectionDivider';
import { BeforeAfter } from './components/BeforeAfter';
import { AIFeatures } from './components/AIFeatures';
import { Privacy } from './components/Privacy';
import { Platforms } from './components/Platforms';

const App: React.FC = () => {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#BFF549] selection:text-black">
      <Navbar />
      
      <Hero />
      <LogoTicker />

      <SectionDivider />

      <BeforeAfter />

      <SectionDivider />

      <AIFeatures />

      <SectionDivider />

      <DemoSection />

      <SectionDivider />

      <Features />

      <SectionDivider />

      <Privacy />

      <SectionDivider />

      <Testimonials />

      <SectionDivider />

      <Pricing />

      <SectionDivider />

      <FAQ />
      
      {/* Bottom CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-[#BFF549]/20 to-transparent opacity-20 pointer-events-none"></div>
         <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                Ready to speed up?
            </h2>
            <button className="px-10 py-4 bg-[#BFF549] text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_60px_-15px_rgba(191,245,73,0.6)]">
                Download Glaido Free
            </button>
         </div>
      </section>
      <Footer />
    </main>
  );
};

export default App;