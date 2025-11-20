import React from 'react';
import { Sparkles, Eraser, RefreshCw, List, Wand2, MessageSquare } from 'lucide-react';

const AI_FEATURES = [
  {
    icon: Eraser,
    title: "Removes Filler Words",
    description: "Automatically removes 'um,' 'uh,' 'like,' and 'you know,' making your transcriptions clear and professional."
  },
  {
    icon: RefreshCw,
    title: "Auto-Edits When You Change Your Mind",
    description: "Recognizes when you correct yourself mid-sentence and keeps only your final intended message."
  },
  {
    icon: List,
    title: "Auto-Formats",
    description: "Automatically organizes spoken lists, steps, and key points into clear, structured text."
  },
  {
    icon: Wand2,
    title: "Finds the Perfect Words",
    description: "Helps you effortlessly express ideas, ensuring your message is easy to understand."
  },
  {
    icon: MessageSquare,
    title: "Different Tone for Each App",
    description: "Adapts tone and style based on the app you're using—professional for emails, casual for Slack."
  },
  {
    icon: Sparkles,
    title: "Personal Dictionary",
    description: "Automatically learns your unique words, names, and technical terms. Never repeat yourself."
  }
];

export const AIFeatures: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#BFF549] text-xs font-medium mb-4 uppercase tracking-wider">
            AI Auto-Edits
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Speak naturally. <br />
            <span className="text-[#BFF549]">AI handles the rest.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Glaido doesn't just transcribe—it thinks. Rambled thoughts become clear, perfectly formatted text.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#BFF549]/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#BFF549]/10 flex items-center justify-center mb-4 group-hover:bg-[#BFF549]/20 transition-colors">
                <feature.icon className="text-[#BFF549]" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
