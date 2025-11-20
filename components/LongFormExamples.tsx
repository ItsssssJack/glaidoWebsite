import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const LONG_EXAMPLES = [
  {
    title: "Work Email",
    before: "Umm, hope your week has started well… I was talking to Sarah earlier but reception was really bad and I think they're going to handle the first part of the project, but I'm not totally sure. Also, I told the team the the new timeline should be ready by Friday, although it's probably going to slip. There's been a lot of back and forth and honestly the the whole thing's been kind of chaotic...",
    after: "Hope your week is off to a good start. I spoke with Sarah earlier, but unfortunately the reception was poor. I believe they're handling the first part of the project, though I'd like confirmation.\n\nI've informed the team that the new timeline should be ready by Friday, although there may be some slippage. Given the amount of back-and-forth, I think it would be helpful if you could check in with them regarding yesterday's meeting notes. I'm not certain whether Sarah sent them out. Could you verify and let me know?"
  },
  {
    title: "Meeting Notes",
    before: "So uh, we basically need to like prioritize the the user feedback stuff from last quarter and also maybe look into the performance issues that keep coming up. Um, the team mentioned something about the database being slow but I'm not sure if that's the main issue or if it's something else. We should probably schedule another meeting to go over this in more detail I guess.",
    after: "We need to prioritize user feedback from last quarter and investigate the ongoing performance issues. The team reported database slowdowns, though it's unclear if this is the primary cause. I recommend scheduling a follow-up meeting to discuss these items in detail."
  },
  {
    title: "Project Update",
    before: "Hey so just wanted to give you a quick update on where we're at. Um, the design phase is pretty much done I think, like 90% there at least. The dev team has been working on the the backend stuff and they say they'll be ready to start integrating everything probably by next week or so. There's been some delays with the the API documentation but nothing too major I don't think.",
    after: "Quick update on project status: The design phase is approximately 90% complete. The development team is finishing backend work and expects to begin integration next week. We've experienced minor delays with API documentation, but these shouldn't significantly impact the timeline."
  },
  {
    title: "Customer Support",
    before: "Hi there um thanks for reaching out about this issue. So it looks like the the problem you're having is actually pretty common and we've seen it before with other users. What you'll want to do is basically go into the settings and uh make sure that the sync feature is turned on and then maybe try logging out and logging back in. That should fix it but if it doesn't just let us know and we can look into it further.",
    after: "Thank you for contacting us about this issue. This is a known problem with a straightforward solution. Please navigate to Settings, ensure the sync feature is enabled, then log out and log back in. This should resolve the issue. If the problem persists, please contact us for further assistance."
  }
];

export const LongFormExamples: React.FC = () => {
  const [currentExample, setCurrentExample] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentExample((prev) => (prev + 1) % LONG_EXAMPLES.length);
        setIsAnimating(false);
      }, 200);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BFF549]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#BFF549] text-xs font-medium mb-4 uppercase tracking-wider">
            Real Examples
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            From Messy to <span className="text-[#BFF549]">Professional</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Watch how Glaido transforms rambling thoughts into clear, polished communication.
          </p>
        </div>

        {/* Example Type Badge */}
        <div className="text-center mb-8">
          <div className={`inline-block px-4 py-2 rounded-full bg-[#BFF549]/10 border border-[#BFF549]/30 text-[#BFF549] font-semibold transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {LONG_EXAMPLES[currentExample].title}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Before */}
          <div className={`flex-1 glass-panel p-8 rounded-3xl border border-red-500/20 relative w-full transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute -top-3 left-6 bg-red-500/20 border border-red-500/30 px-3 py-1 rounded-full text-xs font-bold text-red-400 uppercase tracking-wider">
              You Said
            </div>
            <p className="text-gray-300 leading-relaxed text-sm mt-2">
              {LONG_EXAMPLES[currentExample].before}
            </p>
          </div>

          {/* Arrow - Desktop */}
          <div className="hidden md:flex flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-[#BFF549] flex items-center justify-center shadow-[0_0_40px_-10px_rgba(191,245,73,0.6)]">
              <ArrowRight className="text-black" size={28} />
            </div>
          </div>

          {/* Arrow - Mobile */}
          <div className="md:hidden flex flex-shrink-0 justify-center">
            <div className="w-12 h-12 rounded-full bg-[#BFF549] flex items-center justify-center shadow-[0_0_40px_-10px_rgba(191,245,73,0.6)] rotate-90">
              <ArrowRight className="text-black" size={20} />
            </div>
          </div>

          {/* After */}
          <div className={`flex-1 glass-panel p-8 rounded-3xl border border-[#BFF549]/30 relative w-full transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute -top-3 left-6 bg-[#BFF549]/20 border border-[#BFF549]/30 px-3 py-1 rounded-full text-xs font-bold text-[#BFF549] uppercase tracking-wider">
              Glaido Writes
            </div>
            <p className="text-white leading-relaxed text-sm mt-2 font-light whitespace-pre-line">
              {LONG_EXAMPLES[currentExample].after}
            </p>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2 justify-center mt-12">
          {LONG_EXAMPLES.map((_, idx) => (
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

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Automatically removes "umm," "uh," "like" • Fixes grammar • Removes repetition • Perfect punctuation
          </p>
        </div>
      </div>
    </section>
  );
};
