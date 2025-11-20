import React, { useState, useEffect, useRef } from 'react';
import { Mic, Loader2, Copy, Check, Sparkles } from 'lucide-react';
import { DemoStatus } from '../types';
import { refineTextWithGemini } from '../services/geminiService';

// Type definition for Web Speech API
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}
interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
}
interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}
interface SpeechRecognitionAlternative {
  transcript: string;
}
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: any) => void;
  onend: () => void;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let webkitSpeechRecognition: any;

export const DemoSection: React.FC = () => {
  const [status, setStatus] = useState<DemoStatus>(DemoStatus.IDLE);
  const [transcript, setTranscript] = useState('');
  const [refinedTranscript, setRefinedTranscript] = useState('');
  const [copied, setCopied] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        
        if (finalTranscript) {
          setTranscript(prev => prev + ' ' + finalTranscript);
          handleProcessing(finalTranscript);
        } else {
            // Show interim results if needed, or just wait for final
        }
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event);
        setStatus(DemoStatus.ERROR);
      };

      recognition.onend = () => {
        if (status === DemoStatus.LISTENING) {
           setStatus(DemoStatus.PROCESSING);
        }
      };

      recognitionRef.current = recognition;
    }
  }, [status]);

  const handleProcessing = async (text: string) => {
    setStatus(DemoStatus.PROCESSING);
    try {
        const refined = await refineTextWithGemini(text);
        setRefinedTranscript(refined);
        setStatus(DemoStatus.COMPLETED);
    } catch (e) {
        setRefinedTranscript(text); // Fallback
        setStatus(DemoStatus.COMPLETED);
    }
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser. Try Chrome.");
      return;
    }

    if (status === DemoStatus.LISTENING) {
      recognitionRef.current.stop();
      setStatus(DemoStatus.PROCESSING);
    } else {
      setTranscript('');
      setRefinedTranscript('');
      setStatus(DemoStatus.LISTENING);
      recognitionRef.current.start();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(refinedTranscript || transcript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#BFF549]/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#BFF549] text-xs font-medium mb-4">
          TRY IT FREE
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">See How Much Time You're Wasting</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Say one sentence. Watch it appear instantly, perfectly formatted by <span className="text-white font-semibold">Gemini AI</span>. Now imagine finishing all your writing this fast.
        </p>
      </div>

      <div className="max-w-3xl mx-auto glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="flex flex-col md:flex-row h-[400px]">
          
          {/* Left: Input/Controls */}
          <div className="flex-1 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 bg-black/20">
            <div className={`relative w-32 h-32 rounded-full flex items-center justify-center mb-8 transition-all duration-500 ${status === DemoStatus.LISTENING ? 'bg-[#BFF549]/20 scale-110' : 'bg-white/5'}`}>
              {status === DemoStatus.LISTENING && (
                <div className="absolute inset-0 rounded-full border border-[#BFF549] animate-ping opacity-50" />
              )}
              <button 
                onClick={toggleListening}
                className={`z-10 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                  status === DemoStatus.LISTENING 
                    ? 'bg-[#BFF549] text-black scale-95' 
                    : 'bg-white text-black hover:scale-105'
                }`}
              >
                {status === DemoStatus.PROCESSING ? (
                   <Loader2 className="animate-spin" size={32} />
                ) : (
                   <Mic size={32} />
                )}
              </button>
            </div>
            
            <p className="text-lg font-medium mb-2">
              {status === DemoStatus.LISTENING ? "Listening..." : status === DemoStatus.PROCESSING ? "AI Formatting..." : "Try 5x Speed Now"}
            </p>
            <p className="text-sm text-gray-500">
              {status === DemoStatus.IDLE ? "Click the mic and say a sentence." : "Speak naturally."}
            </p>
          </div>

          {/* Right: Output */}
          <div className="flex-1 p-8 flex flex-col bg-gradient-to-br from-white/5 to-transparent relative">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles size={14} className="text-[#BFF549]" /> AI Output
                </h3>
                {refinedTranscript && (
                    <button 
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                    >
                        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                    </button>
                )}
            </div>

            <div className="flex-grow overflow-y-auto pr-2 text-left">
               {status === DemoStatus.IDLE && !refinedTranscript && (
                   <div className="h-full flex items-center justify-center text-gray-600 text-sm italic">
                       Your reformatted text will appear here...
                   </div>
               )}
               {status === DemoStatus.LISTENING && (
                   <p className="text-gray-400">{transcript}<span className="animate-pulse">|</span></p>
               )}
               {(status === DemoStatus.PROCESSING || status === DemoStatus.COMPLETED) && (
                   <p className="text-lg leading-relaxed text-white font-light">
                       {refinedTranscript || transcript}
                   </p>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};