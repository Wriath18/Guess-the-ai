import React from 'react';
import { X, Trophy, Flame, Zap, ShieldCheck } from 'lucide-react';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-lg bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rules-modal-title"
      >
        <div className="flex items-center justify-between border-b-3 border-black pb-3 mb-4">
          <h2 id="rules-modal-title" className="text-xl sm:text-2xl font-black font-heading uppercase tracking-tight">
            How To Play
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 bg-white hover:bg-red-100 border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
            aria-label="Close rules modal"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        <div className="space-y-4 text-sm font-medium overflow-y-auto pr-1">
          <div className="border-2 border-black p-3.5 bg-[#FFFDF5] shadow-[3px_3px_0px_0px_#000] flex gap-3">
            <Trophy className="w-6 h-6 text-black shrink-0 mt-0.5" />
            <div>
              <h3 className="font-black text-black uppercase font-heading text-sm">
                Objective & Scoring
              </h3>
              <p className="text-xs text-black/80 mt-1">
                An AI model name appears on screen. Choose whether it actually exists (<b className="text-green-700">REAL</b>) or is made up (<b className="text-red-700">FAKE</b>).
              </p>
              <ul className="text-xs text-black/80 mt-1.5 list-disc list-inside space-y-0.5">
                <li><b>Correct answer:</b> +1 point.</li>
                <li><b>Incorrect answer:</b> 0 points deducted (no penalty to total score).</li>
              </ul>
            </div>
          </div>

          <div className="border-2 border-black p-3.5 bg-[#FFFDF5] shadow-[3px_3px_0px_0px_#000] flex gap-3">
            <Flame className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-black text-black uppercase font-heading text-sm">
                Streak Mechanism
              </h3>
              <p className="text-xs text-black/80 mt-1">
                Your streak increases by 1 with each consecutive correct guess. The moment you make a single wrong guess, <b>your streak immediately breaks and resets to 0</b>!
              </p>
            </div>
          </div>

          <div className="border-2 border-black p-3.5 bg-[#FFFDF5] shadow-[3px_3px_0px_0px_#000] flex gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-black text-black uppercase font-heading text-sm">
                Massive 950+ Model Dataset
              </h3>
              <p className="text-xs text-black/80 mt-1">
                Drawn from 956 real research papers, release announcements, labs (DeepMind, OpenAI, Anthropic, Mistral, Qwen, IBM, NVIDIA, Moonshot, Liquid AI, Sarvam, etc.) and plausible fictional models.
              </p>
              <p className="text-xs text-black/80 mt-1">
                Shuffled via a cryptographically secure, unbiased Fisher-Yates shuffle.
              </p>
            </div>
          </div>

          <div className="border-2 border-black p-3.5 bg-[#FFFDF5] shadow-[3px_3px_0px_0px_#000] flex gap-3">
            <Zap className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-black text-black uppercase font-heading text-sm">
                Keyboard Shortcuts
              </h3>
              <div className="grid grid-cols-2 gap-2 mt-2 text-xs font-mono">
                <div className="bg-white border border-black p-1.5">
                  <span className="font-black">R</span> or <span className="font-black">←</span>: REAL
                </div>
                <div className="bg-white border border-black p-1.5">
                  <span className="font-black">F</span> or <span className="font-black">→</span>: FAKE
                </div>
                <div className="bg-white border border-black p-1.5 col-span-2">
                  <span className="font-black">Space</span> / <span className="font-black">Enter</span>: Next Model
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-3 border-black pt-3 mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#FFE600] text-black hover:bg-[#FFD700] font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
          >
            LET'S PLAY!
          </button>
        </div>
      </div>
    </div>
  );
};
